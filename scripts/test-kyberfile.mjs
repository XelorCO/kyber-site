// Test du module lib/kyberfile.ts — exécuter : node scripts/test-kyberfile.mjs
// (Node 22+ : type stripping natif pour l'import .ts)
import {
  encryptKyberFile,
  decryptKyberFile,
  generateStrongPassword,
  validatePassword,
} from '../lib/kyberfile.ts';

let failures = 0;
const ok = (name) => console.log(`  ✅ ${name}`);
const ko = (name, e) => { failures++; console.error(`  ❌ ${name} — ${e}`); };

async function expectThrow(name, fn, msgPart) {
  try {
    await fn();
    ko(name, 'aucune erreur levée');
  } catch (e) {
    const m = String(e.message || e);
    if (msgPart && !m.includes(msgPart)) ko(name, `message inattendu : "${m}"`);
    else ok(`${name} → "${m}"`);
  }
}

console.log('── Tests kyberfile (KYBP v1) ──');

// Données de test : 2 Mo pseudo-aléatoires + texte compressible
const data = new Uint8Array(2 * 1024 * 1024);
for (let i = 0; i < data.length; i++) data[i] = (i * 7 + 13) % 256;
const password = generateStrongPassword();
console.log(`  mot de passe généré : ${password.length} caractères`);

// 1. Roundtrip
const t0 = Date.now();
const encrypted = await encryptKyberFile(data, 'rapport confidentiel.pdf', password);
const tEnc = Date.now() - t0;
const { meta, data: decrypted } = await decryptKyberFile(encrypted, password);
const tAll = Date.now() - t0;

if (meta.name !== 'rapport confidentiel.pdf') ko('roundtrip nom', meta.name);
else ok('nom original restitué');
if (decrypted.length !== data.length || !decrypted.every((b, i) => b === data[i])) {
  ko('roundtrip données', `longueurs ${decrypted.length} vs ${data.length}`);
} else ok(`données intactes après roundtrip (chiffrement ${tEnc} ms, total ${tAll} ms)`);
console.log(`  taille chiffrée : ${encrypted.length} octets (compression incluse)`);

// 2. Mauvais mot de passe → rejeté proprement
await expectThrow('mauvais mot de passe rejeté',
  () => decryptKyberFile(encrypted, 'MauvaisMotDePasse123!ABC'), 'Mot de passe incorrect');

// 3. Fichier altéré (1 octet du ciphertext) → rejeté par le tag GCM
const tampered = encrypted.slice();
tampered[tampered.length - 1] ^= 0xff;
await expectThrow('fichier altéré rejeté', () => decryptKyberFile(tampered, password), 'corrompu');

// 4. Fichier KYBF (app) → message explicite
const kybf = new Uint8Array(5000);
kybf.set([0x4b, 0x59, 0x42, 0x46]);
await expectThrow('.kyber de l\'application → message clair', () => decryptKyberFile(kybf, password), 'application Kyber');

// 5. Fichier quelconque → rejeté
const junk = new Uint8Array(5000).fill(0x41);
await expectThrow('fichier non-Kyber rejeté', () => decryptKyberFile(junk, password), 'pas un fichier Kyber');

// 6. Mot de passe trop court → refusé AVANT chiffrement
await expectThrow('mot de passe < 16 caractères refusé',
  () => encryptKyberFile(data, 'x.txt', 'court123!'), 'au moins 16');

// 7. Validation
if (validatePassword('a'.repeat(16)) !== null) ko('validatePassword 16 chars', 'devrait passer');
else ok('validatePassword accepte 16 caractères');

// 8. Deux chiffrements du même fichier → sorties différentes (salt/nonce frais)
const enc2 = await encryptKyberFile(data.subarray(0, 1024), 'a.bin', password);
const enc3 = await encryptKyberFile(data.subarray(0, 1024), 'a.bin', password);
if (enc2.length === enc3.length && enc2.every((b, i) => b === enc3[i])) ko('non-déterminisme', 'sorties identiques !');
else ok('salt + nonces frais à chaque chiffrement (sorties distinctes)');

console.log(failures === 0 ? '\n🎉 TOUS LES TESTS PASSENT' : `\n💥 ${failures} échec(s)`);
process.exit(failures === 0 ? 0 : 1);
