import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { rateLimit } from '@/lib/ratelimit';

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

  const { name, email } = await req.json();

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

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Kyber Pro — Licence perpétuelle',
            description:
              'Gestionnaire de mots de passe post-quantique · Mots de passe illimités + toutes les fonctionnalités',
          },
          unit_amount: 1500,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    customer_email: email,
    metadata: { name, email },
    success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/#pricing`,
    payment_intent_data: {
      description: `Kyber Pro · ${email}`,
    },
  });

  return NextResponse.json({ url: session.url });
}
