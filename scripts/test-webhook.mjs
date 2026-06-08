/**
 * Simule un webhook Stripe "checkout.session.completed" signé.
 * Envoie une requête réelle à localhost:3000 → génère une vraie licence → envoie un vrai email.
 *
 * Usage : node scripts/test-webhook.mjs [email] [name]
 * Ex    : node scripts/test-webhook.mjs paccard.contact@gmail.com "Enzo Paccard"
 */

import { createHmac } from 'crypto';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dir = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dir, '..', '.env');
const envContent = readFileSync(envPath, 'utf-8');
const envVars = Object.fromEntries(
  envContent.split('\n')
    .filter(l => l.includes('=') && !l.startsWith('#'))
    .map(l => { const i = l.indexOf('='); return [l.slice(0,i).trim(), l.slice(i+1).trim()]; })
);

const WEBHOOK_SECRET = envVars['STRIPE_WEBHOOK_SECRET'];
if (!WEBHOOK_SECRET) throw new Error('STRIPE_WEBHOOK_SECRET manquant dans .env');

const email = process.argv[2] || 'paccard.contact@gmail.com';
const name  = process.argv[3] || 'Enzo Paccard';

// Payload checkout.session.completed avec les bonnes métadonnées
const payload = JSON.stringify({
  id: 'evt_test_kyber_' + Date.now(),
  object: 'event',
  type: 'checkout.session.completed',
  created: Math.floor(Date.now() / 1000),
  data: {
    object: {
      id: 'cs_test_' + Date.now(),
      object: 'checkout.session',
      payment_status: 'paid',
      status: 'complete',
      customer_email: email,
      metadata: { name, email },
      amount_total: 1500,
      currency: 'eur',
    }
  },
  livemode: false,
});

// Signature Stripe : t=timestamp,v1=HMAC-SHA256(timestamp.payload, secret)
const timestamp = Math.floor(Date.now() / 1000).toString();
const signedPayload = `${timestamp}.${payload}`;
const signature = createHmac('sha256', WEBHOOK_SECRET)
  .update(signedPayload)
  .digest('hex');

const stripeSignature = `t=${timestamp},v1=${signature}`;

console.log('\n📡 Envoi du webhook test...');
console.log('   Endpoint : http://localhost:3000/api/webhooks/stripe');
console.log('   Email    :', email);
console.log('   Name     :', name);

const res = await fetch('http://localhost:3000/api/webhooks/stripe', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'stripe-signature': stripeSignature,
  },
  body: payload,
});

const resText = await res.text();
console.log('\n📬 Réponse du serveur :');
console.log('   Status  :', res.status, res.statusText);
console.log('   Body    :', resText);

if (res.status === 200) {
  console.log('\n✅ Webhook traité avec succès !');
  console.log(`   → Une licence Pro a été générée et envoyée à ${email}`);
  console.log('   → Vérifie ta boîte mail dans quelques secondes\n');
} else {
  console.log('\n❌ Le webhook a retourné une erreur. Voir les logs Next.js.\n');
}
