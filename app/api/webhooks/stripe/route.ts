import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { generateLicenseKey } from '@/lib/license';
import { sendLicenseEmail } from '@/lib/email';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature');

  if (!sig) {
    return NextResponse.json({ error: 'Signature manquante' }, { status: 400 });
  }

  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    console.error('[webhook] STRIPE_WEBHOOK_SECRET non défini');
    return NextResponse.json({ error: 'Config manquante' }, { status: 500 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, secret);
  } catch (err) {
    console.error('[webhook] constructEvent failed:', err);
    return NextResponse.json({ error: 'Signature invalide' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    if (session.payment_status !== 'paid') {
      return NextResponse.json({ received: true });
    }

    const name = session.metadata?.name ?? 'Client Kyber';
    const email = session.metadata?.email ?? session.customer_email ?? '';

    if (!email) {
      console.error('[webhook] Email introuvable dans la session', session.id);
      return NextResponse.json({ error: 'Email introuvable' }, { status: 400 });
    }

    try {
      const licenseKey = await generateLicenseKey({ name, email, tier: 'pro' });
      await sendLicenseEmail({ name, email, licenseKey });
      console.log(`[webhook] Licence envoyée à ${email}`);
    } catch (err) {
      console.error('[webhook] Erreur génération/envoi licence:', err);
      return NextResponse.json({ error: 'Erreur interne' }, { status: 500 });
    }
  }

  return NextResponse.json({ received: true });
}
