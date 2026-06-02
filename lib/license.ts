import * as ed from '@noble/ed25519';
import { sha512 } from '@noble/hashes/sha512';

// Configure SHA-512 synchrone requis par @noble/ed25519 v2
ed.etc.sha512Sync = (...m) => sha512(...m);

export interface LicensePayload {
  name: string;
  email: string;
  tier: string;
}

/**
 * Génère une clé de licence Ed25519 au format attendu par l'app Kyber :
 * base64(json_payload).base64(signature)
 *
 * La clé privée doit être 32 octets en hex dans LICENSE_PRIVATE_KEY.
 * La clé publique correspondante doit être dans Kyber/src-tauri/src/license.rs.
 * Génère ta paire avec : npm run keygen
 */
export async function generateLicenseKey(payload: LicensePayload): Promise<string> {
  const privateKeyHex = process.env.LICENSE_PRIVATE_KEY;
  if (!privateKeyHex) throw new Error('LICENSE_PRIVATE_KEY non définie');

  const payloadStr = JSON.stringify(payload);
  const payloadBytes = Buffer.from(payloadStr, 'utf-8');
  const privateKeyBytes = Buffer.from(privateKeyHex, 'hex');

  const signature = await ed.sign(payloadBytes, privateKeyBytes);

  const payloadB64 = payloadBytes.toString('base64');
  const signatureB64 = Buffer.from(signature).toString('base64');

  return `${payloadB64}.${signatureB64}`;
}
