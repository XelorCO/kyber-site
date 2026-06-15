'use client';

import { useState } from 'react';

export default function BlogNewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'blog' }),
      });
      setStatus(res.ok ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="mt-16 bg-white border border-stone-300 rounded-2xl p-8 text-center shadow-sm">
      <h2 className="text-xl font-bold mb-3 text-stone-900">Rester informé</h2>
      <p className="text-stone-500 text-sm mb-6">
        Nouveaux articles sur la cryptographie post-quantique directement dans votre boîte mail.
        Pas de spam — 1 email par mois maximum.
      </p>

      {status === 'done' ? (
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-green-700 font-medium text-sm">
          Inscription confirmée — à bientôt dans votre boîte mail.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="votre@email.fr"
            className="flex-1 bg-stone-50 border border-stone-300 hover:border-stone-400 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none transition-colors"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-gradient-to-r from-blue-500 via-rose-400 to-amber-400 hover:opacity-90 disabled:opacity-50 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all whitespace-nowrap"
          >
            {status === 'loading' ? 'Inscription…' : "S'inscrire →"}
          </button>
        </form>
      )}

      {status === 'error' && (
        <p className="mt-3 text-red-500 text-sm">Erreur — réessayez ou écrivez à contact@kyber-security.fr</p>
      )}

      <p className="text-stone-400 text-xs mt-4">
        Désinscription en un clic à tout moment.
      </p>
    </section>
  );
}
