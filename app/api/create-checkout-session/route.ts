import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const { name, email } = await req.json();

  if (!name || !email) {
    return NextResponse.json({ error: 'Nom et email requis' }, { status: 400 });
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
