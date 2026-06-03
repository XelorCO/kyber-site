'use client';

import { useState, useEffect } from 'react';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Kyber',
      applicationCategory: 'SecurityApplication',
      operatingSystem: 'Windows 10, Windows 11, macOS 12, Linux',
      description: 'Premier gestionnaire de mots de passe post-quantique français. Chiffrement Kyber1024 + AES-256-GCM + Argon2id.',
      url: 'https://kyber-security.fr',
      inLanguage: 'fr-FR',
      offers: [
        {
          '@type': 'Offer',
          name: 'Kyber Gratuit',
          price: '0',
          priceCurrency: 'EUR',
          description: "Version gratuite — jusqu'à 3 mots de passe",
        },
        {
          '@type': 'Offer',
          name: 'Kyber Pro',
          price: '15.00',
          priceCurrency: 'EUR',
          description: 'Licence perpétuelle — mots de passe illimités',
        },
      ],
      featureList: [
        'Chiffrement post-quantique Kyber1024',
        'AES-256-GCM',
        'Argon2id key derivation',
        'Auto-remplissage des mots de passe',
        'Analyse de sécurité du coffre',
        'Import Bitwarden / 1Password',
        'Fonctionnement 100% local',
      ],
    },
    {
      '@type': 'Organization',
      name: 'Kyber Security',
      url: 'https://kyber-security.fr',
      logo: 'https://kyber-security.fr/opengraph-image',
      founder: { '@type': 'Person', name: 'Enzo Paccard' },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'contact@kyber-security.fr',
        contactType: 'customer support',
        availableLanguage: 'French',
      },
      address: { '@type': 'PostalAddress', addressCountry: 'FR' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: "Qu'est-ce que le chiffrement post-quantique ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Le chiffrement post-quantique utilise des algorithmes résistants aux ordinateurs quantiques. Kyber utilise Kyber1024, sélectionné par le NIST comme standard post-quantique, combiné à AES-256-GCM.",
          },
        },
        {
          '@type': 'Question',
          name: 'Kyber est-il gratuit ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, Kyber est gratuit jusqu'à 3 mots de passe. La licence Pro à 15€ (paiement unique, perpétuelle) débloque les mots de passe illimités.",
          },
        },
        {
          '@type': 'Question',
          name: 'Sur quels systèmes Kyber fonctionne-t-il ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kyber est compatible Windows 10 et 11, macOS 12 (Monterey) et supérieur, et Linux (Debian, Ubuntu).',
          },
        },
        {
          '@type': 'Question',
          name: 'Mes mots de passe sont-ils envoyés sur internet ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Non. Kyber fonctionne entièrement en local. Vos mots de passe sont chiffrés et stockés sur votre appareil uniquement. Aucune donnée n'est transmise à nos serveurs.",
          },
        },
      ],
    },
  ],
};

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
      ),
      title: 'Kyber1024 Post-Quantique',
      desc: "Algorithme sélectionné par le NIST comme standard post-quantique. Résistant aux attaques des ordinateurs quantiques aujourd'hui et dans 20 ans.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
      ),
      title: 'AES-256-GCM',
      desc: 'Chiffrement symétrique authentifié de niveau militaire. Vos données sont protégées contre toute lecture ou modification non autorisée.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
      ),
      title: 'Argon2id',
      desc: 'Dérivation de clé primée, paramétrable à 64 MB de mémoire. Résistant aux attaques GPU, ASIC et par force brute.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
        </svg>
      ),
      title: 'Auto-remplissage',
      desc: "Détection automatique des champs de mot de passe. Injectez vos identifiants en un clic dans n'importe quelle application.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
      ),
      title: 'Analyse de sécurité',
      desc: 'Détectez les mots de passe faibles, réutilisés ou trop anciens. Tableau de bord de santé complet pour votre coffre.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
        </svg>
      ),
      title: 'Import universel',
      desc: 'Migrez depuis Bitwarden, 1Password ou tout gestionnaire supportant le CSV. Migration en quelques secondes.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#070711] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
      <section id="home" className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="glow-blob absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
          <div className="glow-blob-2 absolute top-1/3 right-1/6 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* ── Texte ── */}
            <div>
              <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-sm mb-8 font-medium">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                Premier gestionnaire post-quantique français
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
                Vos mots de passe{' '}
                <span className="gradient-shimmer">
                  résistants au quantique
                </span>
              </h1>

              <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
                Kyber combine{' '}
                <strong className="text-white">Kyber1024</strong> post-quantique avec{' '}
                <strong className="text-white">AES-256-GCM</strong> pour une protection inégalée,
                aujourd&apos;hui et pour les 20 prochaines années.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href="#download"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/25 text-sm"
                >
                  Télécharger gratuitement
                </a>
                <a
                  href="#pricing"
                  className="border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 px-8 py-3.5 rounded-xl font-semibold transition-all text-sm"
                >
                  Voir les tarifs →
                </a>
              </div>

              <div className="flex flex-wrap gap-5 text-sm text-slate-500">
                {['Windows 10/11', 'macOS 12+', 'Linux', 'Open Source'].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Mockup app ── */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="app-mockup w-full max-w-md">
                <div className="bg-[#0d0d1a] border border-white/10 rounded-2xl shadow-2xl shadow-blue-500/10 overflow-hidden">
                  {/* Title bar */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.03]">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-500/60" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <span className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                    <span className="text-xs text-slate-500 mx-auto pr-6">Kyber — Coffre-Fort</span>
                  </div>
                  {/* Search */}
                  <div className="px-4 pt-4 pb-2">
                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                      <span className="text-xs text-slate-600">Rechercher un mot de passe…</span>
                    </div>
                  </div>
                  {/* Entries */}
                  <div className="px-4 pb-4 space-y-2 mt-1">
                    {[
                      { name: 'Crédit Agricole', user: 'jean.dupont@gmail.com', color: 'from-green-600 to-green-400' },
                      { name: 'Google', user: 'jean.dupont@gmail.com', color: 'from-red-500 to-yellow-400' },
                      { name: 'Facebook', user: 'jean.dupont@gmail.com', color: 'from-blue-600 to-blue-400' },
                      { name: 'Discord', user: 'JeanDupont#4271', color: 'from-indigo-500 to-purple-500' },
                    ].map((e) => (
                      <div key={e.name} className="flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 rounded-xl px-3 py-2.5 transition-colors cursor-default">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${e.color} flex items-center justify-center flex-shrink-0`}>
                          <span className="text-xs font-bold text-white/90">{e.name[0]}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-white">{e.name}</p>
                          <p className="text-xs text-slate-500 truncate">{e.user}</p>
                        </div>
                        <div className="text-xs text-slate-600 font-mono tracking-widest">••••••••</div>
                      </div>
                    ))}
                  </div>
                  {/* Footer badge */}
                  <div className="px-4 pb-4">
                    <div className="flex items-center justify-between bg-blue-500/10 border border-blue-500/20 rounded-xl px-3 py-2">
                      <span className="text-xs text-blue-400 font-medium">Chiffrement Kyber1024</span>
                      <span className="text-xs text-green-400 font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Actif
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`reveal reveal-delay-${i + 1} bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 hover:bg-white/[0.07] transition-all`}
              >
                <div className="mb-4">{f.icon}</div>
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
              <div className="flex justify-center mb-4"><svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg></div>
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
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                  </svg>
                ),
                platform: 'Windows',
                versions: '10 & 11 (64-bit)',
                href: '/downloads/Kyber_1.0.0_x64-setup.exe',
                label: 'Télécharger .exe',
                note: 'Installateur NSIS',
                available: true,
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-slate-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                  </svg>
                ),
                platform: 'macOS',
                versions: '12 Monterey et supérieur',
                href: null,
                label: 'Disponible bientôt',
                note: 'Apple Silicon & Intel',
                available: false,
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 64 80" fill="none">
                    <ellipse cx="32" cy="48" rx="15" ry="18" fill="#2d2d3d"/>
                    <ellipse cx="32" cy="50" rx="9" ry="12" fill="#e8e8f0"/>
                    <circle cx="32" cy="22" r="13" fill="#2d2d3d"/>
                    <circle cx="27" cy="18" r="3.5" fill="white"/>
                    <circle cx="37" cy="18" r="3.5" fill="white"/>
                    <circle cx="28" cy="19" r="1.8" fill="#111827"/>
                    <circle cx="38" cy="19" r="1.8" fill="#111827"/>
                    <ellipse cx="32" cy="27" rx="4.5" ry="3" fill="#f59e0b"/>
                    <ellipse cx="23" cy="72" rx="7" ry="3" fill="#f59e0b"/>
                    <ellipse cx="41" cy="72" rx="7" ry="3" fill="#f59e0b"/>
                    <ellipse cx="16" cy="46" rx="5" ry="11" fill="#2d2d3d" transform="rotate(-15 16 46)"/>
                    <ellipse cx="48" cy="46" rx="5" ry="11" fill="#2d2d3d" transform="rotate(15 48 46)"/>
                  </svg>
                ),
                platform: 'Linux',
                versions: 'Debian / Ubuntu',
                href: '/downloads/Kyber_1.0.0_amd64.AppImage',
                label: 'Télécharger .AppImage',
                note: 'Debian, Ubuntu, Kali & Red Hat',
                available: true,
              },
            ].map((p, i) => (
              <div
                key={p.platform}
                className={`reveal reveal-delay-${i + 1} bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 hover:bg-white/[0.07] transition-all`}
              >
                <div className="mb-3">{p.icon}</div>
                <h3 className="font-semibold text-lg">{p.platform}</h3>
                <p className="text-slate-500 text-xs mb-1">{p.versions}</p>
                <p className="text-slate-600 text-xs mb-5">{p.note}</p>
                {p.available ? (
                  <a
                    href={p.href!}
                    download
                    className="inline-block text-blue-400 hover:text-blue-300 text-sm font-medium border border-blue-500/30 hover:border-blue-500/60 px-5 py-2 rounded-lg transition-all"
                  >
                    {p.label}
                  </a>
                ) : (
                  <span className="inline-block text-slate-600 text-sm font-medium border border-white/10 px-5 py-2 rounded-lg cursor-not-allowed">
                    {p.label}
                  </span>
                )}
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
          <div className="flex flex-col items-center md:items-start gap-1">
            <span><span className="font-bold text-white">Kyber</span> — © 2026 Kyber Security. Made in France 🇫🇷</span>
            <span>
              Créé avec ❤️ par{' '}
              <a
                href="https://softpac.fr"
                target="_blank"
                rel="noopener"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Softpac.fr
              </a>
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/politique-de-confidentialite" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="/cgv" className="hover:text-white transition-colors">CGV</a>
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
                  placeholder="Prénom, Nom"
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
                Votre clé de licence sera envoyée à cet email immédiatement après le paiement.
              </div>

              <button
                type="submit"
                disabled={checkoutLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-60 py-3.5 rounded-xl font-semibold transition-all text-sm"
              >
                {checkoutLoading ? 'Redirection vers Stripe…' : 'Continuer vers le paiement →'}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>
                <span>Paiement sécurisé via Stripe · Visa, Mastercard, CB</span>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
