'use client';

import { useCallback, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  encryptKyberFile,
  decryptKyberFile,
  generateStrongPassword,
  validatePassword,
  MIN_PASSWORD_LEN,
  MAX_FILE_BYTES,
  type ProgressPhase,
} from '@/lib/kyberfile';

type Mode = 'encrypt' | 'decrypt';
type Status = 'idle' | 'working' | 'done' | 'error';

const PHASE_LABELS: Record<ProgressPhase, string> = {
  compress: 'Compression du fichier…',
  derive: 'Dérivation de la clé (Argon2id, 64 Mio)…',
  kem: 'Encapsulation post-quantique (ML-KEM-1024)…',
  cipher: 'Chiffrement AES-256-GCM…',
  done: 'Terminé',
};

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} o`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} Ko`;
  return `${(bytes / 1024 / 1024).toFixed(1)} Mo`;
}

function passwordScore(pwd: string): number {
  let s = 0;
  if (pwd.length >= MIN_PASSWORD_LEN) s += 30;
  if (pwd.length >= 24) s += 20;
  if (/[A-Z]/.test(pwd)) s += 12;
  if (/[a-z]/.test(pwd)) s += 8;
  if (/[0-9]/.test(pwd)) s += 15;
  if (/[^A-Za-z0-9]/.test(pwd)) s += 15;
  return Math.min(s, 100);
}

export default function FileEncryptor() {
  const [mode, setMode] = useState<Mode>('encrypt');
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [phase, setPhase] = useState<ProgressPhase | null>(null);
  const [error, setError] = useState('');
  const [result, setResult] = useState<{ url: string; name: string; size: number } | null>(null);
  const [dragging, setDragging] = useState(false);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const score = passwordScore(password);
  const pwdError = password.length > 0 ? validatePassword(password) : null;

  const reset = () => {
    setStatus('idle');
    setPhase(null);
    setError('');
    if (result) URL.revokeObjectURL(result.url);
    setResult(null);
  };

  const acceptFile = useCallback((f: File) => {
    if (f.size > MAX_FILE_BYTES) {
      setError(`Fichier trop volumineux (${formatSize(f.size)}). Limite : 200 Mo.`);
      setStatus('error');
      return;
    }
    setFile(f);
    setMode(f.name.toLowerCase().endsWith('.kyber') ? 'decrypt' : 'encrypt');
    setStatus('idle');
    setPhase(null);
    setError('');
    setResult((r) => { if (r) URL.revokeObjectURL(r.url); return null; });
  }, []);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files?.[0];
    if (f) acceptFile(f);
  }, [acceptFile]);

  const run = async () => {
    if (!file || status === 'working') return;
    const vErr = validatePassword(password);
    if (mode === 'encrypt' && vErr) { setError(vErr); setStatus('error'); return; }
    if (mode === 'decrypt' && !password) { setError('Entrez le mot de passe du fichier.'); setStatus('error'); return; }

    setStatus('working');
    setError('');
    try {
      const bytes = new Uint8Array(await file.arrayBuffer());
      if (mode === 'encrypt') {
        const out = await encryptKyberFile(bytes, file.name, password, setPhase);
        const url = URL.createObjectURL(new Blob([out.slice().buffer], { type: 'application/octet-stream' }));
        setResult({ url, name: `${file.name}.kyber`, size: out.length });
      } else {
        const { meta, data } = await decryptKyberFile(bytes, password, setPhase);
        const url = URL.createObjectURL(new Blob([data.slice().buffer], { type: 'application/octet-stream' }));
        setResult({ url, name: meta.name, size: data.length });
      }
      setStatus('done');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Une erreur est survenue.');
      setStatus('error');
      setPhase(null);
    }
  };

  const genPassword = () => {
    setPassword(generateStrongPassword());
    setShowPwd(true);
  };

  const copyPassword = async () => {
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Bandeau confidentialité */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 bg-emerald-950/50 border border-emerald-800 rounded-xl px-4 py-3 mb-6 text-sm text-emerald-200"
      >
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        <span>
          <strong>100 % local.</strong> Votre fichier ne quitte jamais votre navigateur / aucun envoi,
          aucun serveur, aucune trace. Le chiffrement s&apos;exécute sur votre machine.
        </span>
      </motion.div>

      {/* Sélecteur de mode */}
      <div className="flex gap-2 mb-4 bg-stone-800 border border-stone-800 rounded-xl p-1.5">
        {(['encrypt', 'decrypt'] as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => { setMode(m); reset(); }}
            className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              mode === m
                ? 'bg-[#151922] text-stone-100 shadow-sm border border-stone-800'
                : 'text-stone-400 hover:text-stone-300'
            }`}
          >
            {m === 'encrypt' ? '◆ Chiffrer un fichier' : '◇ Déchiffrer un .kyber'}
          </button>
        ))}
      </div>

      {/* Zone de dépôt */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        onClick={() => inputRef.current?.click()}
        className={`relative cursor-pointer border-2 border-dashed rounded-2xl px-6 py-10 text-center transition-all ${
          dragging
            ? 'border-blue-400 bg-blue-950/50 scale-[1.01]'
            : file
              ? 'border-emerald-700 bg-emerald-950/40'
              : 'border-stone-700 bg-[#151922] hover:border-blue-700 hover:bg-blue-950/50'
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept={mode === 'decrypt' ? '.kyber' : undefined}
          onChange={(e) => { const f = e.target.files?.[0]; if (f) acceptFile(f); e.target.value = ''; }}
        />
        {file ? (
          <div>
            <p className="font-semibold text-stone-100 break-all">{file.name}</p>
            <p className="text-sm text-stone-400 mt-1">{formatSize(file.size)} / cliquez pour changer de fichier</p>
          </div>
        ) : (
          <div>
            <motion.div
              animate={{ y: dragging ? -4 : 0 }}
              className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white text-xl shadow-md"
            >
              {mode === 'encrypt' ? '◆' : '◇'}
            </motion.div>
            <p className="font-medium text-stone-300">
              {mode === 'encrypt'
                ? 'Déposez un fichier ici, ou cliquez pour parcourir'
                : 'Déposez un fichier .kyber ici, ou cliquez pour parcourir'}
            </p>
            <p className="text-xs text-stone-500 mt-2">Jusqu&apos;à 200 Mo / tout type de fichier</p>
          </div>
        )}
      </div>

      {/* Mot de passe */}
      <div className="mt-5">
        <label className="block text-sm font-medium text-stone-300 mb-2">
          {mode === 'encrypt' ? 'Mot de passe de chiffrement' : 'Mot de passe du fichier'}
          {mode === 'encrypt' && (
            <span className="text-stone-500 font-normal"> / {MIN_PASSWORD_LEN} caractères minimum</span>
          )}
        </label>
        <div className="flex flex-wrap gap-2">
          <div className="relative flex-1 min-w-[220px]">
            <input
              type={showPwd ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={mode === 'encrypt' ? 'Un mot de passe énorme et unique…' : 'Le mot de passe utilisé au chiffrement'}
              className="w-full bg-[#151922] border border-stone-700 rounded-xl px-4 py-3 pr-11 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-900"
              autoComplete="off"
              spellCheck={false}
            />
            <button
              type="button"
              onClick={() => setShowPwd((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-400 text-sm"
              aria-label={showPwd ? 'Masquer' : 'Afficher'}
            >
              {showPwd ? '⊘' : '◉'}
            </button>
          </div>
          {mode === 'encrypt' && (
            <>
              <button
                type="button"
                onClick={genPassword}
                className="px-4 py-3 bg-stone-900 text-white rounded-xl text-sm font-medium hover:bg-stone-700 transition-colors whitespace-nowrap"
                title="Générer un mot de passe fort (28 caractères)"
              >
                Générer
              </button>
              {password && (
                <button
                  type="button"
                  onClick={copyPassword}
                  className="px-4 py-3 bg-[#151922] border border-stone-700 rounded-xl text-sm font-medium hover:border-blue-700 transition-colors"
                  title="Copier le mot de passe"
                >
                  {copied ? '✓' : '⧉'}
                </button>
              )}
            </>
          )}
        </div>

        {mode === 'encrypt' && password.length > 0 && (
          <div className="mt-2">
            <div className="h-1.5 bg-stone-700 rounded-full overflow-hidden">
              <motion.div
                animate={{ width: `${score}%` }}
                className={`h-full rounded-full ${score < 45 ? 'bg-red-400' : score < 75 ? 'bg-amber-400' : 'bg-emerald-500'}`}
              />
            </div>
            {pwdError && <p className="text-xs text-red-500 mt-1.5">{pwdError}</p>}
          </div>
        )}

        {mode === 'encrypt' && (
          <div className="flex items-start gap-2 mt-3 text-xs text-amber-300 bg-amber-950/50 border border-amber-800 rounded-lg px-3 py-2.5">
            <span>⚠︎</span>
            <span>
              <strong>Notez ce mot de passe précieusement.</strong> Il n&apos;existe aucun moyen de récupérer
              le fichier sans lui / c&apos;est ce qui rend le chiffrement inviolable, y compris pour nous.
            </span>
          </div>
        )}
      </div>

      {/* Action */}
      <button
        onClick={run}
        disabled={!file || !password || status === 'working' || (mode === 'encrypt' && !!pwdError)}
        className="mt-5 w-full py-3.5 rounded-xl font-semibold text-white text-sm shadow-md transition-all bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {status === 'working'
          ? (phase ? PHASE_LABELS[phase] : 'Traitement…')
          : mode === 'encrypt' ? 'Chiffrer le fichier' : 'Déchiffrer le fichier'}
      </button>

      {/* Progression / résultat / erreur */}
      <AnimatePresence mode="wait">
        {status === 'working' && (
          <motion.div
            key="working"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 flex items-center gap-3 text-sm text-stone-400 bg-[#151922] border border-stone-800 rounded-xl px-4 py-3"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full flex-shrink-0"
            />
            {phase ? PHASE_LABELS[phase] : 'Traitement…'}
          </motion.div>
        )}

        {status === 'done' && result && (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 bg-emerald-950/50 border border-emerald-800 rounded-xl px-5 py-4"
          >
            <p className="text-sm text-emerald-200 mb-3">
              {mode === 'encrypt' ? '◆ Fichier chiffré avec succès.' : '◇ Fichier déchiffré avec succès.'}
              {' '}<span className="text-emerald-400">({formatSize(result.size)})</span>
            </p>
            <a
              href={result.url}
              download={result.name}
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
            >
              ↓ Télécharger {result.name}
            </a>
          </motion.div>
        )}

        {status === 'error' && error && (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-sm text-red-400 bg-red-950/50 border border-red-800 rounded-xl px-4 py-3"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chaîne crypto */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs text-stone-400">
        {['Argon2id', 'ML-KEM-1024 (Kyber)', 'HKDF-SHA256', 'AES-256-GCM'].map((step, i, arr) => (
          <span key={step} className="flex items-center gap-2">
            <span className="bg-[#151922] border border-stone-800 rounded-full px-3 py-1 font-mono">{step}</span>
            {i < arr.length - 1 && <span className="text-stone-600">→</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
