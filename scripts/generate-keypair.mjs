/**
 * Génère une paire de clés Ed25519 pour le système de licences Kyber.
 *
 * Usage : npm run keygen
 *
 * Ce script génère :
 *   - La clé PRIVÉE (à mettre dans .env → LICENSE_PRIVATE_KEY)
 *   - La clé PUBLIQUE formatée pour Rust (à coller dans Kyber/src-tauri/src/license.rs)
 */

import * as ed from '@noble/ed25519';
import { sha512 } from '@noble/hashes/sha512';
import { randomBytes } from 'crypto';

ed.etc.sha512Sync = (...m) => sha512(...m);

const privateKey = randomBytes(32);
const publicKey = await ed.getPublicKey(privateKey);

const rustArray = '[\n    ' + Array.from(publicKey).join(', ') + '\n]';

console.log('\n╔══════════════════════════════════════════════════════╗');
console.log('║        Kyber License Keypair (PRODUCTION)            ║');
console.log('╚══════════════════════════════════════════════════════╝\n');

console.log('1) Ajoute dans ton fichier .env :\n');
console.log(`   LICENSE_PRIVATE_KEY=${Buffer.from(privateKey).toString('hex')}\n`);

console.log('2) Remplace PUBLIC_KEY_BYTES dans Kyber/src-tauri/src/license.rs :\n');
console.log(`   const PUBLIC_KEY_BYTES: [u8; 32] = ${rustArray};\n`);

console.log('⚠️  GARDE LA CLÉ PRIVÉE SECRÈTE. Ne la commite JAMAIS dans git.\n');
