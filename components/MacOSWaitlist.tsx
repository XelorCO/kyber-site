'use client';

import { useState } from 'react';

export default function MacOSWaitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'waitlist-macos' }),
      });
      setStatus(res.ok ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'done') {
    return (
      <div className="text-center py-2">
        <p className="text-green-600 text-sm font-medium">Inscrit ! On vous prévient dès la sortie.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3 space-y-2">
      <p className="text-xs text-stone-400 text-center">Être notifié à la sortie :</p>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="votre@email.fr"
        className="w-full text-xs bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-400 text-stone-800 placeholder:text-stone-400"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full text-xs bg-stone-800 hover:bg-stone-700 disabled:opacity-50 text-white px-3 py-2 rounded-lg transition-colors font-medium"
      >
        {status === 'loading' ? 'Envoi…' : "M'inscrire à la liste d'attente"}
      </button>
      {status === 'error' && <p className="text-red-500 text-xs text-center">Erreur, réessayez.</p>}
    </form>
  );
}
