import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { sendThankYouEmail } from '@/lib/email';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// In-memory dedup — prevents double emails on Stripe retries within the same instance lifetime
const processedSessions = new Set<string>();

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

    if (processedSessions.has(session.id)) {
      return NextResponse.json({ received: true });
    }
    processedSessions.add(session.id);

    // Don ponctuel : pas de licence à générer, pas de logiciel à débloquer.
    // On envoie juste un remerciement quand une adresse est disponible.
    const email = session.customer_email ?? session.customer_details?.email ?? '';
    const amount = session.metadata?.amount ?? String(Math.round((session.amount_total ?? 0) / 100));

    if (email) {
      try {
        await sendThankYouEmail({ email, amount });
        console.log(`[webhook] Remerciement envoyé à ${email} (don ${amount} €)`);
      } catch (err) {
        console.error('[webhook] Erreur envoi remerciement:', err);
        // Non bloquant : le don est encaissé, l'email est un bonus.
      }
    } else {
      console.log(`[webhook] Don anonyme reçu (${amount} €)`);
    }
  }

  return NextResponse.json({ received: true });
}
