'use client';

import { useState } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  const [contact, setContact] = useState({
    company: '',
    firstName: '',
    lastName: '',
    email: '',
    teamSize: '1-10',
    message: '',
  });
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutLoading(true);
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: buyerName, email: buyerEmail }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else setCheckoutLoading(false);
    } catch {
      setCheckoutLoading(false);
    }
  };

  const handleContact = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact),
      });
      setContactStatus(res.ok ? 'sent' : 'error');
    } catch {
      setContactStatus('error');
    }
  };

  const features = [
    {
      icon: '🔷',
      title: 'Kyber1024 Post-Quantique',
      desc: "Algorithme sélectionné par le NIST comme standard post-quantique. Résistant aux attaques des ordinateurs quantiques aujourd'hui et dans 20 ans.",
    },
    {
      icon: '🔐',
      title: 'AES-256-GCM',
      desc: 'Chiffrement symétrique authentifié de niveau militaire. Vos données sont protégées contre toute lecture ou modification non autorisée.',
    },
    {
      icon: '🛡️',
      title: 'Argon2id',
      desc: 'Dérivation de clé primée, paramétrable à 64 MB de mémoire. Résistant aux attaques GPU, ASIC et par force brute.',
    },
    {
      icon: '⚡',
      title: 'Auto-remplissage',
      desc: "Détection automatique des champs de mot de passe. Injectez vos identifiants en un clic dans n'importe quelle application.",
    },
    {
      icon: '📊',
      title: 'Analyse de sécurité',
      desc: 'Détectez les mots de passe faibles, réutilisés ou trop anciens. Tableau de bord de santé complet pour votre coffre.',
    },
    {
      icon: '💾',
      title: 'Import universel',
      desc: 'Migrez depuis Bitwarden, 1Password ou tout gestionnaire supportant le CSV. Migration en quelques secondes.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#070711] text-white overflow-x-hidden">

      {/* ── HEADER ─────────────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#070711]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Kyber
            </span>
            <span className="text-xs text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full hidden sm:inline">
              Post-Quantique
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">Fonctionnalités</a>
            <a href="#pricing" className="hover:text-white transition-colors">Tarifs</a>
            <a href="#enterprise" className="hover:text-white transition-colors">Entreprises</a>
            <a href="#download" className="hover:text-white transition-colors">Télécharger</a>
          </nav>
          <a
            href="#download"
            className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Télécharger
          </a>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section id="home" className="relative pt-36 pb-24 px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="glow-blob absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="glow-blob-2 absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm mb-8">
            <span>🇫🇷</span>
            <span>Premier gestionnaire de mots de passe post-quantique français</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Protégez vos mots de passe contre{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              les ordinateurs quantiques
            </span>
          </h1>

          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Kyber combine le chiffrement{' '}
            <strong className="text-white">Kyber1024</strong> post-quantique avec{' '}
            <strong className="text-white">AES-256-GCM</strong> pour une protection inégalée,
            aujourd'hui et pour les 20 prochaines années.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#download"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/25"
            >
              Télécharger gratuitement
            </a>
            <a
              href="#pricing"
              className="border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 px-8 py-3.5 rounded-xl font-semibold transition-all"
            >
              Voir les tarifs →
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-slate-500">
            <span>✓ Windows 10 / 11</span>
            <span>✓ macOS 12+</span>
            <span>✓ Linux Debian / Ubuntu</span>
            <span>✓ Open Source</span>
          </div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────────────────────── */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Sécurité de niveau militaire</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              Chaque composant cryptographique a été sélectionné pour résister aux attaques classiques{' '}
              <em>et</em> quantiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 hover:bg-white/[0.07] transition-all"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────────────── */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple et transparent</h2>
            <p className="text-slate-400 text-lg">Pas d'abonnement. Une licence, à vie.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Free */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
              <div className="mb-6">
                <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">Gratuit</span>
                <div className="text-5xl font-bold mt-2">0 €</div>
                <p className="text-slate-500 text-sm mt-1">Pour tester Kyber</p>
              </div>
              <ul className="space-y-3 mb-8 text-sm flex-1">
                {[
                  '3 mots de passe maximum',
                  'Générateur de mots de passe',
                  'Chiffrement post-quantique',
                  'Analyse de sécurité',
                  'Auto-remplissage',
                  'Import CSV',
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-slate-300">
                    <span className="text-green-400 flex-shrink-0">✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href="#download"
                className="block text-center border border-white/20 hover:border-white/40 hover:bg-white/5 py-3 rounded-xl text-sm font-medium transition-all"
              >
                Télécharger gratuitement
              </a>
            </div>

            {/* Pro */}
            <div className="relative bg-gradient-to-b from-blue-600/20 to-purple-600/20 border border-blue-500/40 rounded-2xl p-8 flex flex-col">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                Recommandé
              </div>
              <div className="mb-6">
                <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">Kyber Pro</span>
                <div className="flex items-end gap-2 mt-2">
                  <span className="text-5xl font-bold">15 €</span>
                  <span className="text-slate-400 text-sm mb-1.5">paiement unique</span>
                </div>
                <p className="text-slate-400 text-sm mt-1">Licence perpétuelle — 1 utilisateur</p>
              </div>
              <ul className="space-y-3 mb-8 text-sm flex-1">
                {[
                  'Mots de passe illimités',
                  'Toutes les fonctionnalités gratuites',
                  'Mises à jour à vie',
                  'Export CSV',
                  'Support prioritaire',
                  'Licence perpétuelle',
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-slate-300">
                    <span className="text-blue-400 flex-shrink-0">✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowModal(true)}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-3.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-blue-500/25"
              >
                Acheter — 15 €
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENTERPRISE ──────────────────────────────────────────────────── */}
      <section id="enterprise" className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Solution entreprise</h2>
            <p className="text-slate-400 text-lg">
              Besoin de licences pour une équipe ? Tarifs dégressifs disponibles.
            </p>
          </div>

          {contactStatus === 'sent' ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="font-semibold text-xl mb-2">Message envoyé !</h3>
              <p className="text-slate-400">Nous vous répondrons dans les 24 heures.</p>
            </div>
          ) : (
            <form onSubmit={handleContact} className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-400 mb-1.5 block">Prénom *</label>
                  <input
                    required
                    value={contact.firstName}
                    onChange={(e) => setContact({ ...contact, firstName: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm text-slate-400 mb-1.5 block">Nom *</label>
                  <input
                    required
                    value={contact.lastName}
                    onChange={(e) => setContact({ ...contact, lastName: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-slate-400 mb-1.5 block">Société *</label>
                <input
                  required
                  value={contact.company}
                  onChange={(e) => setContact({ ...contact, company: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-slate-400 mb-1.5 block">Email professionnel *</label>
                <input
                  required
                  type="email"
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-slate-400 mb-1.5 block">Taille de l'équipe</label>
                <select
                  value={contact.teamSize}
                  onChange={(e) => setContact({ ...contact, teamSize: e.target.value })}
                  className="w-full bg-[#0d0d1e] border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="1-10">1 – 10 personnes</option>
                  <option value="11-50">11 – 50 personnes</option>
                  <option value="51-200">51 – 200 personnes</option>
                  <option value="200+">200+ personnes</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-slate-400 mb-1.5 block">Message</label>
                <textarea
                  rows={4}
                  value={contact.message}
                  onChange={(e) => setContact({ ...contact, message: e.target.value })}
                  placeholder="Décrivez votre besoin, vos contraintes, vos questions…"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={contactStatus === 'sending'}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 py-3.5 rounded-xl text-sm font-semibold transition-all"
              >
                {contactStatus === 'sending' ? 'Envoi en cours…' : 'Envoyer la demande'}
              </button>
              {contactStatus === 'error' && (
                <p className="text-red-400 text-sm text-center">
                  Une erreur est survenue. Veuillez réessayer ou nous contacter directement.
                </p>
              )}
            </form>
          )}
        </div>
      </section>

      {/* ── DOWNLOAD ────────────────────────────────────────────────────── */}
      <section id="download" className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Télécharger Kyber</h2>
          <p className="text-slate-400 text-lg mb-14">Gratuit. Disponible sur toutes les plateformes.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: '🪟',
                platform: 'Windows',
                versions: '10 & 11 (64-bit)',
                ext: 'setup.exe',
                label: 'Télécharger .exe',
                note: 'Installateur NSIS',
              },
              {
                icon: '🍎',
                platform: 'macOS',
                versions: '12 Monterey et supérieur',
                ext: 'macos.dmg',
                label: 'Télécharger .dmg',
                note: 'Apple Silicon & Intel',
              },
              {
                icon: '🐧',
                platform: 'Linux',
                versions: 'Debian / Ubuntu',
                ext: 'linux.AppImage',
                label: 'Télécharger .AppImage',
                note: 'Compatible Debian & Ubuntu',
              },
            ].map((p) => (
              <div
                key={p.platform}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 hover:bg-white/[0.07] transition-all"
              >
                <div className="text-5xl mb-3">{p.icon}</div>
                <h3 className="font-semibold text-lg">{p.platform}</h3>
                <p className="text-slate-500 text-xs mb-1">{p.versions}</p>
                <p className="text-slate-600 text-xs mb-5">{p.note}</p>
                <a
                  href={`https://github.com/kyber-security/kyber/releases/latest/download/Kyber_${p.ext}`}
                  className="inline-block text-blue-400 hover:text-blue-300 text-sm font-medium border border-blue-500/30 hover:border-blue-500/60 px-5 py-2 rounded-lg transition-all"
                >
                  {p.label}
                </a>
              </div>
            ))}
          </div>

          <p className="text-slate-600 text-xs mt-10">
            Version 1.0.0 ·{' '}
            <a
              href="https://github.com/kyber-security/kyber"
              className="hover:text-slate-400 transition-colors underline"
            >
              Code source sur GitHub
            </a>
          </p>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <div>
            <span className="font-bold text-white">Kyber</span> — © 2026 Kyber Security. Made in France 🇫🇷
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">CGV</a>
            <a
              href="mailto:contact@kyber-security.fr"
              className="hover:text-white transition-colors"
            >
              contact@kyber-security.fr
            </a>
          </div>
        </div>
      </footer>

      {/* ── MODAL PAIEMENT ──────────────────────────────────────────────── */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
        >
          <div className="bg-[#0d0d1e] border border-white/20 rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-bold text-xl">Kyber Pro — 15 €</h3>
                <p className="text-slate-400 text-sm mt-1">
                  Entrez vos informations pour recevoir votre licence par email
                </p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-white text-xl leading-none ml-4 mt-0.5"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCheckout} className="space-y-4">
              <div>
                <label className="text-sm text-slate-400 mb-1.5 block">Prénom et Nom *</label>
                <input
                  required
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  placeholder="Jean Dupont"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-slate-400 mb-1.5 block">Email * (pour recevoir la licence)</label>
                <input
                  required
                  type="email"
                  value={buyerEmail}
                  onChange={(e) => setBuyerEmail(e.target.value)}
                  placeholder="vous@exemple.fr"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-xs text-blue-300">
                📧 Votre clé de licence sera envoyée à cet email immédiatement après le paiement.
              </div>

              <button
                type="submit"
                disabled={checkoutLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-60 py-3.5 rounded-xl font-semibold transition-all text-sm"
              >
                {checkoutLoading ? 'Redirection vers Stripe…' : 'Continuer vers le paiement →'}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                <span>🔒</span>
                <span>Paiement sécurisé via Stripe · Visa, Mastercard, CB</span>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
