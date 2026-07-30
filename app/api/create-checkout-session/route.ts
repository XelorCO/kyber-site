import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { rateLimit } from '@/lib/ratelimit';
import { getLaunchCounts, remainingSlots, LAUNCH_PRICES, LAUNCH_LIMIT } from '@/lib/launch';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  // Rate limit : 10 sessions par IP par heure
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  const { allowed } = rateLimit(`checkout:${ip}`, 10, 60 * 60 * 1000);
  if (!allowed) {
    return NextResponse.json({ error: 'Trop de requêtes. Réessayez plus tard.' }, { status: 429 });
  }

  const { name, email, tier: rawTier } = await req.json();
  const tier = rawTier === 'famille' ? 'famille' : 'pro';

  if (!name || !email) {
    return NextResponse.json({ error: 'Nom et email requis' }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Adresse email invalide' }, { status: 400 });
  }

  if (String(name).length > 200 || String(email).length > 254) {
    return NextResponse.json({ error: 'Données invalides' }, { status: 400 });
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  const offers = {
    pro: {
      name: 'Kyber Pro / Licence perpétuelle',
      description:
        'Gestionnaire de mots de passe post-quantique · Mots de passe illimités + toutes les fonctionnalités · 1 utilisateur',
      unit_amount: 2900,
      label: 'Kyber Pro',
    },
    famille: {
      name: 'Kyber Famille / Licence perpétuelle 5 postes',
      description:
        'Gestionnaire de mots de passe post-quantique · Tout Kyber Pro pour 5 postes du même foyer',
      unit_amount: 4900,
      label: 'Kyber Famille',
    },
  } as const;
  const offer = offers[tier];

  const counts = await getLaunchCounts(stripe);
  const isLaunch = remainingSlots(counts[tier]) > 0;
  const unit_amount = isLaunch ? LAUNCH_PRICES[tier] : offer.unit_amount;
  const description = isLaunch
    ? `${offer.description} · Prix de lancement (${LAUNCH_LIMIT} premiers utilisateurs)`
    : offer.description;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: offer.name,
            description,
          },
          unit_amount,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    allow_promotion_codes: true,
    customer_email: email,
    metadata: { name, email, tier, launch: isLaunch ? 'true' : 'false' },
    success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/#pricing`,
    payment_intent_data: {
      description: `${offer.label} · ${email}`,
    },
  });

  return NextResponse.json({ url: session.url });
}
