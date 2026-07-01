/**
 * Chiffrement de fichiers .kyber — 100 % côté client (le fichier ne quitte jamais le navigateur).
 *
 * Chaîne cryptographique identique au coffre v2 de l'application Kyber :
 *   mot de passe → Argon2id (64 Mio, t=4, p=1) → seed_key
 *   ML-KEM-1024 (Kyber) : keypair + encapsulation → shared secret pq_ss
 *   HKDF-SHA256(seed_key ‖ pq_ss) → clé finale AES-256
 *   AES-256-GCM → ciphertext authentifié
 * La clé secrète ML-KEM est scellée sous seed_key : seul le mot de passe permet d'ouvrir.
 *
 * Format binaire KYBP v1 (distinct du magic KYBF de l'application, qui chiffre
 * avec la clé d'un coffre et non un mot de passe) :
 *   [0..4)      magic "KYBP"
 *   [4]         version = 0x01
 *   [5..21)     salt Argon2id (16 B)
 *   [21..1589)  pq_ct ML-KEM-1024 (1568 B)
 *   [1589..1601) pq_sk_nonce (12 B)
 *   [1601..4785) pq_sk_enc = sk ML-KEM (3168 B) + tag GCM (16 B)
 *   [4785..4797) nonce payload (12 B)
 *   [4797..)    ciphertext payload
 * Payload en clair : [4 B meta_len LE][JSON {name, gzip}][données gzip]
 */

import { argon2id } from 'hash-wasm';
import { MlKem1024 } from 'mlkem';
import { gzip, gunzip } from 'fflate';

const MAGIC_KYBP = [0x4b, 0x59, 0x42, 0x50] as const; // "KYBP" — web, par mot de passe
const MAGIC_KYBF = [0x4b, 0x59, 0x42, 0x46] as const; // "KYBF" — app, par clé de coffre
const VERSION = 0x01;
const SALT_LEN = 16;
const NONCE_LEN = 12;
const GCM_TAG_LEN = 16;
const PQ_CT_LEN = 1568;
const PQ_SK_LEN = 3168;
const HEADER_LEN = 4 + 1 + SALT_LEN + PQ_CT_LEN + NONCE_LEN + (PQ_SK_LEN + GCM_TAG_LEN) + NONCE_LEN;
const HKDF_INFO = 'KyberFile-v1-final-key';

export const MIN_PASSWORD_LEN = 16;
export const MAX_FILE_BYTES = 200 * 1024 * 1024; // 200 Mo

export type KyberFileMeta = { name: string; gzip: boolean };
export type ProgressPhase = 'derive' | 'kem' | 'compress' | 'cipher' | 'done';

/** Uint8Array garanti adossé à un ArrayBuffer (exigé par WebCrypto). */
type Bytes = Uint8Array<ArrayBuffer>;

const enc = new TextEncoder();
const dec = new TextDecoder();

// ─── Primitives ──────────────────────────────────────────────────────────────

/** Argon2id — mêmes paramètres que l'application (m=65536 Kio, t=4, p=1, 32 B). */
async function deriveSeedKey(password: string, salt: Uint8Array): Promise<Bytes> {
  return argon2id({
    password,
    salt,
    parallelism: 1,
    iterations: 4,
    memorySize: 65536,
    hashLength: 32,
    outputType: 'binary',
  }) as Promise<Bytes>;
}

/** HKDF-SHA256(seed_key ‖ pq_ss) → clé finale 32 B — miroir de derive_final_key (crypto.rs). */
async function deriveFinalKey(seedKey: Uint8Array, pqSs: Uint8Array): Promise<Bytes> {
  const ikm = concat(seedKey, pqSs);
  const key = await crypto.subtle.importKey('raw', ikm, 'HKDF', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'HKDF', hash: 'SHA-256', salt: new Uint8Array(0), info: enc.encode(HKDF_INFO) },
    key,
    256,
  );
  return new Uint8Array(bits);
}

async function aesGcmEncrypt(keyBytes: Bytes, plaintext: Bytes): Promise<{ ciphertext: Bytes; nonce: Bytes }> {
  const nonce = crypto.getRandomValues(new Uint8Array(NONCE_LEN));
  const key = await crypto.subtle.importKey('raw', keyBytes, 'AES-GCM', false, ['encrypt']);
  const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv: nonce }, key, plaintext);
  return { ciphertext: new Uint8Array(ct), nonce };
}

async function aesGcmDecrypt(keyBytes: Bytes, nonce: Bytes, ciphertext: Bytes): Promise<Bytes> {
  const key = await crypto.subtle.importKey('raw', keyBytes, 'AES-GCM', false, ['decrypt']);
  const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: nonce }, key, ciphertext);
  return new Uint8Array(pt);
}

const gzipAsync = (data: Uint8Array) =>
  new Promise<Uint8Array>((resolve, reject) =>
    gzip(data, { level: 6 }, (err, out) => (err ? reject(err) : resolve(out))));

const gunzipAsync = (data: Uint8Array) =>
  new Promise<Uint8Array>((resolve, reject) =>
    gunzip(data, (err, out) => (err ? reject(err) : resolve(out))));

function concat(...parts: Uint8Array[]): Bytes {
  const total = parts.reduce((n, p) => n + p.length, 0);
  const out = new Uint8Array(total);
  let off = 0;
  for (const p of parts) { out.set(p, off); off += p.length; }
  return out;
}

function matchesMagic(bytes: Uint8Array, magic: readonly number[]): boolean {
  return magic.every((b, i) => bytes[i] === b);
}

// ─── Payload : [4B meta_len LE][JSON meta][données] (même forme que filelock.rs) ──

function buildPayload(meta: KyberFileMeta, data: Uint8Array): Bytes {
  const metaJson = enc.encode(JSON.stringify(meta));
  const metaLen = new Uint8Array(4);
  new DataView(metaLen.buffer).setUint32(0, metaJson.length, true);
  return concat(metaLen, metaJson, data);
}

function parsePayload(plaintext: Uint8Array): { meta: KyberFileMeta; data: Uint8Array } {
  if (plaintext.length < 4) throw new Error('Payload corrompu.');
  const metaLen = new DataView(plaintext.buffer, plaintext.byteOffset).getUint32(0, true);
  if (plaintext.length < 4 + metaLen) throw new Error('Métadonnées corrompues.');
  const meta = JSON.parse(dec.decode(plaintext.subarray(4, 4 + metaLen))) as KyberFileMeta;
  return { meta, data: plaintext.subarray(4 + metaLen) };
}

// ─── API publique ─────────────────────────────────────────────────────────────

export function validatePassword(password: string): string | null {
  if (password.length < MIN_PASSWORD_LEN) {
    return `Le mot de passe doit contenir au moins ${MIN_PASSWORD_LEN} caractères.`;
  }
  return null;
}

/** Génère un mot de passe fort de 28 caractères (CSPRNG, toutes classes garanties). */
export function generateStrongPassword(length = 28): string {
  const sets = [
    'ABCDEFGHJKLMNPQRSTUVWXYZ',
    'abcdefghijkmnopqrstuvwxyz',
    '23456789',
    '!@#$%&*+-=?',
  ];
  const all = sets.join('');
  const rand = (max: number) => {
    // Rejet du biais modulo
    const limit = Math.floor(256 / max) * max;
    const buf = new Uint8Array(1);
    do { crypto.getRandomValues(buf); } while (buf[0] >= limit);
    return buf[0] % max;
  };
  const chars: string[] = [];
  for (const set of sets) chars.push(set[rand(set.length)]);
  while (chars.length < length) chars.push(all[rand(all.length)]);
  // Fisher–Yates
  for (let i = chars.length - 1; i > 0; i--) {
    const j = rand(i + 1);
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  return chars.join('');
}

/**
 * Chiffre un fichier → bytes .kyber (KYBP v1).
 * Compression gzip puis chiffrement, comme le coffre.
 */
export async function encryptKyberFile(
  data: Uint8Array,
  fileName: string,
  password: string,
  onPhase?: (phase: ProgressPhase) => void,
): Promise<Uint8Array> {
  const pwdError = validatePassword(password);
  if (pwdError) throw new Error(pwdError);
  if (data.length > MAX_FILE_BYTES) {
    throw new Error(`Fichier trop volumineux (${Math.round(data.length / 1024 / 1024)} Mo). Limite : 200 Mo.`);
  }

  onPhase?.('compress');
  const compressed = await gzipAsync(data);

  onPhase?.('derive');
  const salt = crypto.getRandomValues(new Uint8Array(SALT_LEN));
  const seedKey = await deriveSeedKey(password, salt);

  onPhase?.('kem');
  const kem = new MlKem1024();
  const [pqPk, pqSk] = await kem.generateKeyPair();
  const [pqCt, pqSs] = await kem.encap(pqPk);
  const finalKey = await deriveFinalKey(seedKey, pqSs);

  // Scelle la clé secrète ML-KEM sous seed_key (récupérable uniquement avec le mot de passe)
  const { ciphertext: pqSkEnc, nonce: pqSkNonce } = await aesGcmEncrypt(seedKey, pqSk as Bytes);

  onPhase?.('cipher');
  const payload = buildPayload({ name: fileName, gzip: true }, compressed);
  const { ciphertext, nonce } = await aesGcmEncrypt(finalKey, payload);

  onPhase?.('done');
  return concat(
    new Uint8Array(MAGIC_KYBP),
    new Uint8Array([VERSION]),
    salt,
    pqCt,
    pqSkNonce,
    pqSkEnc,
    nonce,
    ciphertext,
  );
}

/** Déchiffre des bytes .kyber (KYBP v1) → { meta, data }. */
export async function decryptKyberFile(
  input: Uint8Array,
  password: string,
  onPhase?: (phase: ProgressPhase) => void,
): Promise<{ meta: KyberFileMeta; data: Uint8Array }> {
  const bytes = input as Bytes;
  if (bytes.length < HEADER_LEN + GCM_TAG_LEN) {
    throw new Error('Fichier trop court ou invalide — ce n\'est pas un fichier .kyber.');
  }
  if (matchesMagic(bytes, MAGIC_KYBF)) {
    throw new Error(
      'Ce fichier a été chiffré par l\'application Kyber avec la clé d\'un coffre. ' +
      'Il ne peut être ouvert que dans l\'application, avec le coffre d\'origine.',
    );
  }
  if (!matchesMagic(bytes, MAGIC_KYBP)) {
    throw new Error('Ce fichier n\'est pas un fichier Kyber chiffré (.kyber).');
  }
  if (bytes[4] !== VERSION) {
    throw new Error(`Version de format inconnue (${bytes[4]}). Mettez cette page à jour.`);
  }

  let off = 5;
  const salt = bytes.subarray(off, off + SALT_LEN); off += SALT_LEN;
  const pqCt = bytes.subarray(off, off + PQ_CT_LEN); off += PQ_CT_LEN;
  const pqSkNonce = bytes.subarray(off, off + NONCE_LEN); off += NONCE_LEN;
  const pqSkEnc = bytes.subarray(off, off + PQ_SK_LEN + GCM_TAG_LEN); off += PQ_SK_LEN + GCM_TAG_LEN;
  const nonce = bytes.subarray(off, off + NONCE_LEN); off += NONCE_LEN;
  const ciphertext = bytes.subarray(off);

  onPhase?.('derive');
  const seedKey = await deriveSeedKey(password, salt);

  onPhase?.('kem');
  let pqSk: Uint8Array;
  try {
    pqSk = await aesGcmDecrypt(seedKey, pqSkNonce, pqSkEnc);
  } catch {
    throw new Error('Mot de passe incorrect.');
  }
  const kem = new MlKem1024();
  const pqSs = await kem.decap(pqCt, pqSk);
  const finalKey = await deriveFinalKey(seedKey, pqSs);

  onPhase?.('cipher');
  let payload: Uint8Array;
  try {
    payload = await aesGcmDecrypt(finalKey, nonce, ciphertext);
  } catch {
    throw new Error('Fichier corrompu ou altéré — le déchiffrement a échoué.');
  }

  const { meta, data } = parsePayload(payload);
  const out = meta.gzip ? await gunzipAsync(data) : data;

  onPhase?.('done');
  return { meta, data: out };
}
