import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { rateLimit } from '@/lib/ratelimit';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Kyber est gratuit et open source. Ce tunnel ne vend rien : c'est un don
// ponctuel, sans contrepartie ni clé de licence (« offrez un café »).
const MIN_EUR = 2;
const MAX_EUR = 500;

export async function POST(req: NextRequest) {
  // Rate limit : 10 sessions par IP par heure
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  const { allowed } = rateLimit(`checkout:${ip}`, 10, 60 * 60 * 1000);
  if (!allowed) {
    return NextResponse.json({ error: 'Trop de requêtes. Réessayez plus tard.' }, { status: 429 });
  }

  const body = await req.json().catch(() => ({}));
  const amount = Number(body?.amount);
  const email = typeof body?.email === 'string' ? body.email.trim() : '';

  if (!Number.isFinite(amount) || amount < MIN_EUR || amount > MAX_EUR) {
    return NextResponse.json(
      { error: `Le montant doit être compris entre ${MIN_EUR} et ${MAX_EUR} €.` },
      { status: 400 },
    );
  }
  if (email && (!isValidEmail(email) || email.length > 254)) {
    return NextResponse.json({ error: 'Adresse email invalide' }, { status: 400 });
  }

  const unitAmount = Math.round(amount) * 100;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  const session = await stripe.checkout.sessions.create({
    // Moyens de paiement pilotés depuis le Dashboard Stripe (PayPal, Link, cartes...).
    // Ne pas remettre `payment_method_types: ['card']` : cela forcerait la carte seule.
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Soutien à Kyber (open source)',
            description:
              'Don ponctuel pour le développement de Kyber / gestionnaire de mots de passe post-quantique, gratuit et open source. Aucune contrepartie.',
          },
          unit_amount: unitAmount,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    allow_promotion_codes: false,
    ...(email ? { customer_email: email } : {}),
    metadata: { kind: 'donation', amount: String(Math.round(amount)) },
    success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/#soutenir`,
    payment_intent_data: {
      description: `Don Kyber / ${Math.round(amount)} €${email ? ` · ${email}` : ''}`,
    },
  });

  return NextResponse.json({ url: session.url });
}
