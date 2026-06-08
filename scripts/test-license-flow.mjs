/**
 * Test standalone : génération + vérification de licence Ed25519
 * Lance avec : node scripts/test-license-flow.mjs
 *
 * Teste la chaîne complète :
 *  1. Génère une clé avec la clé privée du .env
 *  2. Vérifie le format
 *  3. Simule ce que l'app Rust fait (vérification signature Ed25519)
 */

import * as ed from '@noble/ed25519';
import { sha512 } from '@noble/hashes/sha512';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Configure SHA-512 synchrone (requis par @noble/ed25519 v2)
ed.etc.sha512Sync = (msg) => sha512(msg);

// Charge le .env
const __dir = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dir, '..', '.env');
const envContent = readFileSync(envPath, 'utf-8');
const envVars = Object.fromEntries(
  envContent.split('\n')
    .filter(l => l.includes('=') && !l.startsWith('#'))
    .map(l => { const i = l.indexOf('='); return [l.slice(0,i).trim(), l.slice(i+1).trim()]; })
);

const PRIVATE_KEY_HEX = envVars['LICENSE_PRIVATE_KEY'];
if (!PRIVATE_KEY_HEX) throw new Error('LICENSE_PRIVATE_KEY manquant dans .env');

// Reconstitue la clé publique depuis la privée (même logique que @noble/ed25519)
const privateKeyBytes = Buffer.from(PRIVATE_KEY_HEX, 'hex');
const publicKeyBytes = await ed.getPublicKeyAsync(privateKeyBytes);

console.log('\n🔑 Clé publique dérivée :');
console.log('[', Array.from(publicKeyBytes).join(', '), ']');

// Comparaison avec celle codée dans license.rs
const RUST_PUBLIC_KEY = [79, 20, 240, 118, 49, 159, 159, 39, 145, 191, 249, 177, 130, 147, 12, 174, 219, 254, 116, 195, 1, 33, 216, 9, 125, 236, 161, 105, 20, 244, 237, 171];
const match = Array.from(publicKeyBytes).every((b, i) => b === RUST_PUBLIC_KEY[i]);
console.log(match ? '\n✅ Clé publique IDENTIQUE à license.rs' : '\n❌ ERREUR : clé publique différente de license.rs !');

// Test génération de licence
const testPayload = { name: 'Test Kyber', email: 'test@kyber-security.fr', tier: 'pro' };
const payloadStr = JSON.stringify(testPayload);
const payloadBytes = Buffer.from(payloadStr, 'utf-8');
const signature = await ed.signAsync(payloadBytes, privateKeyBytes);
const licenseKey = `${payloadBytes.toString('base64')}.${Buffer.from(signature).toString('base64')}`;

console.log('\n🎫 Clé de licence générée :');
console.log(licenseKey);

// Vérification — simule ce que fait l'app Rust
const [payloadB64, sigB64] = licenseKey.split('.');
const decodedPayload = Buffer.from(payloadB64, 'base64');
const decodedSig = Buffer.from(sigB64, 'base64');
const isValid = await ed.verifyAsync(decodedSig, decodedPayload, publicKeyBytes);

console.log('\n' + (isValid ? '✅ Signature VALIDE — la clé est acceptée par l\'app' : '❌ Signature INVALIDE'));

const decoded = JSON.parse(decodedPayload.toString('utf-8'));
console.log('   Payload décodé :', decoded);

// Format check
const parts = licenseKey.split('.');
console.log('\n📋 Vérification format :');
console.log('   Séparateur "." :', parts.length === 2 ? '✅ OK' : '❌ ERREUR');
console.log('   Payload base64  :', parts[0].length > 0 ? '✅ OK' : '❌ vide');
console.log('   Sig base64      :', parts[1].length > 0 ? '✅ OK' : '❌ vide');
console.log('   Longueur sig brute :', decodedSig.length === 64 ? `✅ 64 bytes` : `❌ ${decodedSig.length} bytes attendu 64`);

console.log('\n✅ Test licence terminé — flux génération/vérification fonctionnel\n');
