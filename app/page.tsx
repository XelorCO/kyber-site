'use client';

import { useState, useEffect } from 'react';
import { ScrollProgress, Parallax } from '@/components/ScrollFx';
import Link from 'next/link';

// ── Visualisations des étapes crypto ──────────────────────────────────────

function VizPassphrase() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-6 py-4">
      <div className="text-center mb-2">
        <p className="text-xs text-stone-500 mb-4">Vous tapez votre passphrase dans l&apos;app</p>
        <div className="bg-blue-50 border border-blue-200 rounded-xl px-6 py-4 font-mono inline-block">
          <div className="text-xs text-stone-400 mb-2 text-left">Déverrouiller le coffre</div>
          <div className="flex items-center gap-1">
            <span className="text-blue-500 text-xl tracking-[0.3em]">●●●●●●●●●●●●</span>
            <span className="cursor-blink inline-block w-0.5 h-5 bg-blue-500 ml-1" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-xs w-full max-w-xs">
        {[
          { color: 'green', label: 'Restée dans la RAM uniquement' },
          { color: 'green', label: 'Jamais écrite sur le disque' },
          { color: 'green', label: 'Jamais transmise sur le réseau' },
        ].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full bg-${color}-500 animate-pulse flex-shrink-0`} />
            <span className={`text-${color}-600`}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function VizArgon2() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-5 py-4">
      <p className="text-xs text-stone-500 text-center">Argon2id alloue 64 MB de RAM / impossible à paralléliser sur GPU</p>
      <div className="w-full max-w-xs space-y-3">
        {[
          { label: 'Allocation mémoire', val: '64 MB', delay: '' },
          { label: 'Calcul itératif', val: '3 passes', delay: 'mem-bar-2' },
          { label: 'Résistance brute-force', val: '~50 H/s GPU', delay: 'mem-bar-3' },
        ].map(({ label, val, delay }) => (
          <div key={label}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-stone-600">{label}</span>
              <span className="text-cyan-700 font-mono">{val}</span>
            </div>
            <div className="h-1.5 bg-stone-200 rounded-full overflow-hidden">
              <div className={`h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full ${delay || 'mem-bar'}`} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 text-xs mt-2">
        <div className="flex items-center gap-1.5 bg-red-50 border border-red-200 rounded-full px-3 py-1">
          <span className="text-red-600">✗</span>
          <span className="text-red-600">GPU farm inefficace</span>
        </div>
        <div className="flex items-center gap-1.5 bg-red-50 border border-red-200 rounded-full px-3 py-1">
          <span className="text-red-600">✗</span>
          <span className="text-red-600">ASIC bloqué</span>
        </div>
      </div>
    </div>
  );
}

function VizKyber() {
  const dots = [
    { x: '20%', y: '25%', size: 'w-3 h-3' },
    { x: '50%', y: '15%', size: 'w-2.5 h-2.5' },
    { x: '78%', y: '28%', size: 'w-3 h-3' },
    { x: '12%', y: '55%', size: 'w-2 h-2' },
    { x: '42%', y: '50%', size: 'w-4 h-4' },
    { x: '72%', y: '58%', size: 'w-2.5 h-2.5' },
    { x: '28%', y: '78%', size: 'w-3 h-3' },
    { x: '60%', y: '75%', size: 'w-2 h-2' },
    { x: '85%', y: '72%', size: 'w-3 h-3' },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 py-4">
      <p className="text-xs text-stone-500 text-center">Réseau euclidien (Module-LWE) / insoluble par algorithme de Shor</p>
      <div className="relative w-full max-w-xs h-40 bg-indigo-50 rounded-xl border border-indigo-200 overflow-hidden">
        {dots.map((d, i) => (
          <div
            key={i}
            className={`lattice-dot absolute ${d.size} rounded-full bg-gradient-to-br from-indigo-400 to-blue-400 opacity-80`}
            style={{ left: d.x, top: d.y, transform: 'translate(-50%,-50%)' }}
          />
        ))}
        <div className="absolute inset-0 flex items-end justify-center pb-3">
          <span className="text-xs text-indigo-500 font-mono">Module-LWE lattice</span>
        </div>
      </div>
      <div className="flex gap-3 text-xs">
        <div className="bg-indigo-50 border border-indigo-200 rounded-full px-3 py-1 text-indigo-700">NIST FIPS 203</div>
        <div className="bg-blue-50 border border-blue-200 rounded-full px-3 py-1 text-blue-700">ML-KEM-1024</div>
      </div>
    </div>
  );
}

function VizAES() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-5 py-4">
      <p className="text-xs text-stone-500 text-center">AES-256-GCM chiffre et authentifie chaque octet du coffre</p>
      <div className="w-full max-w-xs space-y-3">
        <div className="bg-stone-100 border border-stone-300 rounded-lg p-3">
          <div className="text-xs text-stone-500 mb-2">Données brutes :</div>
          <div className="font-mono text-xs text-stone-700">
            {`{ "url":"banque.fr", "pass":"secret" }`}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-green-600 text-lg flow-arrow">↓</div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <div className="text-xs text-green-700 mb-2">Chiffré (AES-256-GCM) :</div>
          <div className="font-mono text-xs text-green-600 break-all">
            a3f8c2e1d09b4725f1a8c3d4e5f60718
            293a4b5c6d7e8f901a2b3c4d5e6f7081
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-green-600">Tag GCM : toute modification détectée</span>
      </div>
    </div>
  );
}

function VizVault() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-5 py-4">
      <p className="text-xs text-stone-500 text-center">Le fichier chiffré n&apos;existe que sur votre appareil</p>
      <div className="vault-shield bg-green-50 border border-green-200 rounded-xl p-6 text-center w-full max-w-xs">
        <div className="text-4xl mb-3">◆</div>
        <div className="font-mono text-sm text-green-700">coffre.vault</div>
        <div className="text-xs text-stone-400 mt-1">~/.kyber/coffre.vault</div>
      </div>
      <div className="flex flex-col gap-2 text-xs w-full max-w-xs">
        {[
          { icon: '✗', color: 'red', label: 'Pas sur nos serveurs' },
          { icon: '✗', color: 'red', label: 'Pas dans le cloud' },
          { icon: '✓', color: 'green', label: 'Uniquement sur votre disque' },
        ].map(({ icon, color, label }) => (
          <div key={label} className="flex items-center gap-2">
            <span className={`text-${color}-600 font-bold w-4`}>{icon}</span>
            <span className={`text-${color}-600`}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Page principale ────────────────────────────────────────────────────────
export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const cryptoSteps = [
    {
      num: '01',
      title: 'Passphrase',
      subtitle: 'Seul vous la connaissez',
      color: 'blue',
      viz: <VizPassphrase />,
    },
    {
      num: '02',
      title: 'Argon2id',
      subtitle: '64 MB · résistant GPU',
      color: 'cyan',
      viz: <VizArgon2 />,
    },
    {
      num: '03',
      title: 'Kyber1024',
      subtitle: 'Standard NIST FIPS 203',
      color: 'purple',
      viz: <VizKyber />,
    },
    {
      num: '04',
      title: 'AES-256-GCM',
      subtitle: 'Chiffrement authentifié',
      color: 'green',
      viz: <VizAES />,
    },
    {
      num: '05',
      title: 'Fichier .vault',
      subtitle: 'Sur votre disque uniquement',
      color: 'orange',
      viz: <VizVault />,
    },
  ];

  const colorMap: Record<string, string> = {
    blue:   'border-blue-200 bg-blue-50 text-blue-700',
    cyan:   'border-cyan-200 bg-cyan-50 text-cyan-700',
    purple: 'border-indigo-200 bg-indigo-50 text-indigo-700',
    green:  'border-green-200 bg-green-50 text-green-700',
    orange: 'border-amber-200 bg-amber-50 text-amber-700',
  };

  const connectorColorMap: Record<string, string> = {
    blue:   'from-blue-300 to-cyan-300',
    cyan:   'from-cyan-300 to-blue-300',
    purple: 'from-indigo-300 to-blue-300',
    green:  'from-green-300 to-amber-300',
    orange: 'from-amber-300 to-amber-200',
  };

  return (
    <div className="min-h-screen bg-[#f4f2ef] text-stone-900 overflow-x-hidden">

      {/* ── HEADER ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f4f2ef]/90 backdrop-blur-md border-b border-stone-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Kyber
            </span>
            <span className="text-xs text-stone-500 border border-stone-300 px-2 py-0.5 rounded-full hidden sm:inline">
              Post-Quantique
            </span>
          </div>
          <nav className="hidden lg:flex items-center gap-7 text-sm text-stone-500">
            <a href="#how-it-works" className="hover:text-stone-900 transition-colors">Comment ça marche</a>
            <a href="#pricing" className="hover:text-stone-900 transition-colors">Tarifs</a>
            <a href="/blog" className="hover:text-stone-900 transition-colors">Blog</a>
            <a href="/a-propos" className="hover:text-stone-900 transition-colors">À propos</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="/telechargement"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 px-4 py-2 rounded-lg text-sm font-medium transition-opacity text-white shadow-sm"
            >
              Télécharger
            </a>
            <button
              className="lg:hidden p-2 rounded-lg border border-stone-300 bg-white text-stone-600 hover:bg-stone-50 transition-colors"
              onClick={() => setMobileMenuOpen(v => !v)}
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              )}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-[#f4f2ef]/98 backdrop-blur-md">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {[
                { href: '#how-it-works', label: 'Comment ça marche' },
                { href: '#pricing', label: 'Tarifs' },
                { href: '/blog', label: 'Blog' },
                { href: '/a-propos', label: 'À propos' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm text-stone-600 hover:bg-stone-100 hover:text-stone-900 transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setMobileMenuOpen(false)} aria-hidden="true" />
      )}

      <ScrollProgress />

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Parallax drift={80} className="glow-blob absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-3xl" />
          <Parallax drift={-60} className="glow-blob-2 absolute top-1/3 right-1/6 w-[400px] h-[400px] bg-indigo-200/30 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(circle, #78716c 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm mb-8 font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Premier gestionnaire post-quantique français
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight text-stone-900">
            Vos mots de passe{' '}
            <span className="gradient-shimmer">résistants au quantique</span>
          </h1>

          <p className="text-lg text-stone-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Kyber combine <strong className="text-stone-900">Kyber1024</strong> (standard NIST 2024),{' '}
            <strong className="text-stone-900">Argon2id</strong> et <strong className="text-stone-900">AES-256-GCM</strong>{' '}
            pour chiffrer vos mots de passe localement / aucune donnée ne quitte votre machine.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="/telechargement"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-blue-300/30 text-sm text-white"
            >
              Télécharger gratuitement
            </a>
            <a
              href="#how-it-works"
              className="border border-stone-300 hover:border-stone-400 bg-white hover:bg-stone-50 px-8 py-3.5 rounded-xl font-semibold transition-all text-sm text-stone-700 shadow-sm"
            >
              Voir comment ça marche ↓
            </a>
          </div>

        </div>
      </section>

      {/* ── COMMENT ÇA MARCHE / schéma interactif ── */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-900">
              Comment Kyber protège vos mots de passe
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              Cinq couches de protection, de votre passphrase jusqu&apos;au fichier stocké sur votre disque.
              Cliquez sur chaque étape pour comprendre le rôle de chaque algorithme.
            </p>
          </div>

          <div className="reveal reveal-delay-1">
            {/* Stepper horizontal */}
            <div className="relative flex items-stretch gap-0 mb-8 overflow-x-auto pb-2">
              {cryptoSteps.map((step, i) => (
                <div key={i} className="flex items-center flex-1 min-w-[120px]">
                  <button
                    onClick={() => setActiveStep(i)}
                    className={`relative flex flex-col items-center gap-2 px-4 py-4 rounded-xl border transition-all flex-1 text-center ${
                      activeStep === i
                        ? `${colorMap[step.color]} shadow-sm`
                        : 'border-[#c8c8c8] bg-white text-[#808080] hover:border-[#a0a0a0] hover:bg-stone-50 shadow-sm'
                    }`}
                  >
                    <span className={`text-xs font-mono font-bold ${activeStep === i ? '' : 'text-[#808080]'}`}>
                      {step.num}
                    </span>
                    <span className="font-semibold text-sm leading-tight">{step.title}</span>
                    <span className={`text-xs leading-tight ${activeStep === i ? 'opacity-80' : 'text-[#808080]'}`}>
                      {step.subtitle}
                    </span>
                  </button>

                  {/* Connecteur entre étapes */}
                  {i < cryptoSteps.length - 1 && (
                    <div className="flex-shrink-0 px-1">
                      <div className={`h-0.5 w-6 rounded-full transition-all duration-500 ${
                        activeStep > i
                          ? `bg-gradient-to-r ${connectorColorMap[step.color]}`
                          : 'bg-[#c0c0c0]'
                      }`} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Panel de visualisation */}
            <div className={`bg-white border rounded-2xl p-8 transition-all duration-300 min-h-[280px] shadow-md ${colorMap[cryptoSteps[activeStep].color]}`}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Viz animée */}
                <div className="min-h-[200px]" key={activeStep}>
                  {cryptoSteps[activeStep].viz}
                </div>
                {/* Explication */}
                <div>
                  <div className={`text-xs font-mono font-bold mb-2 opacity-60`}>
                    Étape {cryptoSteps[activeStep].num}
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-3">
                    {cryptoSteps[activeStep].title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    {[
                      'Votre passphrase ne quitte jamais votre mémoire vive. Elle n\'est jamais écrite sur le disque ni transmise sur le réseau. C\'est le seul secret que vous possédez, et il reste exclusivement chez vous.',
                      'Argon2id transforme votre passphrase en une seed cryptographique en allouant 64 MB de RAM. Cette contrainte mémoire rend la parallélisation sur GPU ou ASIC impraticable / un attaquant ne peut pas accélérer le brute-force.',
                      'La seed génère une paire de clés ML-KEM-1024 (Kyber1024). Cet algorithme standardisé par le NIST en 2024 (FIPS 203) résiste aux attaques de l\'algorithme de Shor, même sur un ordinateur quantique puissant.',
                      'La clé finale, dérivée via HKDF-SHA256, chiffre votre coffre avec AES-256-GCM. Le mode GCM garantit l\'authenticité : toute modification du fichier .vault est immédiatement détectée à l\'ouverture.',
                      'Le fichier .vault chiffré est stocké sur votre disque. Nulle part ailleurs. Pas sur nos serveurs, pas dans un cloud, pas dans une base de données centralisée. Il n\'existe aucun serveur à pirater.',
                    ][activeStep]}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {[
                      ['Passphrase humaine', 'RAM uniquement'],
                      ['PHC winner 2015', 'OWASP recommandé', '64 MB mémoire'],
                      ['NIST FIPS 203', 'ML-KEM-1024', 'Post-quantique'],
                      ['AES-256 bits', 'Authentification GCM', 'Nonce aléatoire'],
                      ['100% local', '0 serveurs', 'Zéro télémétrie'],
                    ][activeStep].map((tag) => (
                      <span key={tag} className={`text-xs px-2 py-1 rounded-full border ${colorMap[cryptoSteps[activeStep].color]} opacity-80`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation rapide */}
            <div className="flex justify-between mt-4 text-xs text-stone-400">
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className="hover:text-stone-600 transition-colors disabled:opacity-30"
              >
                ← Étape précédente
              </button>
              <button
                onClick={() => setActiveStep(Math.min(cryptoSteps.length - 1, activeStep + 1))}
                disabled={activeStep === cryptoSteps.length - 1}
                className="hover:text-stone-600 transition-colors disabled:opacity-30"
              >
                Étape suivante →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCAL VS CLOUD ── */}
      <section className="py-24 px-6 bg-stone-100 border-y border-stone-300">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-900">
              Stockage local : la différence fondamentale
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              Le chiffrement post-quantique dans le cloud protège le transport.
              Mais si votre coffre est sur un serveur, il peut être volé.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 reveal reveal-delay-1">
            {/* Cloud */}
            <div className="cloud-danger bg-red-50 border border-red-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-red-500 text-lg">⚠︎</span>
                <h3 className="font-bold text-red-700">Gestionnaire cloud</h3>
                <span className="ml-auto text-xs text-red-500 border border-red-200 px-2 py-0.5 rounded-full">
                  Bitwarden, 1Password…
                </span>
              </div>

              <div className="space-y-3">
                {[
                  { icon: '▣', label: 'Votre appareil', sub: 'Vous tapez votre mot de passe', color: 'slate' },
                  { icon: '◯', label: 'Internet', sub: 'Transit chiffré (PQC ou TLS)', color: 'slate' },
                  { icon: '▤', label: 'Serveurs du fournisseur', sub: 'Coffre chiffré stocké ici', color: 'red' },
                  { icon: '⚠︎', label: 'Exposition', sub: 'Brèche possible (cf. LastPass 2022)', color: 'red' },
                ].map(({ icon, label, sub, color }, i) => (
                  <div key={i}>
                    <div className={`flex items-center gap-3 ${color === 'red' ? 'bg-red-100 border border-red-200' : 'bg-white border border-stone-300'} rounded-xl px-4 py-3`}>
                      <span className="text-lg">{icon}</span>
                      <div>
                        <div className={`text-sm font-medium ${color === 'red' ? 'text-red-700' : 'text-stone-700'}`}>{label}</div>
                        <div className="text-xs text-stone-400">{sub}</div>
                      </div>
                    </div>
                    {i < 3 && (
                      <div className="flex justify-center py-1">
                        <span className={`text-sm flow-arrow ${color === 'red' ? 'text-red-500' : 'text-stone-300'}`}>↓</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Kyber local */}
            <div className="vault-shield bg-green-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-green-600 text-lg">✓</span>
                <h3 className="font-bold text-green-800">Kyber / 100% local</h3>
                <span className="ml-auto text-xs text-green-600 border border-green-200 px-2 py-0.5 rounded-full">
                  Votre appareil uniquement
                </span>
              </div>

              <div className="space-y-3">
                {[
                  { icon: '▣', label: 'Votre appareil', sub: 'Vous tapez votre passphrase', color: 'slate' },
                  { icon: '⬡', label: 'Kyber1024 + Argon2id + AES-256-GCM', sub: 'Chiffrement complet en local', color: 'green' },
                  { icon: '◆', label: 'Fichier .vault sur votre disque', sub: 'N\'existe que chez vous', color: 'green' },
                  { icon: '✓', label: 'Aucun serveur à attaquer', sub: 'Inatteignable depuis internet', color: 'green' },
                ].map(({ icon, label, sub, color }, i) => (
                  <div key={i}>
                    <div className={`flex items-center gap-3 ${color === 'green' ? 'bg-green-100 border border-green-200' : 'bg-white border border-stone-300'} rounded-xl px-4 py-3`}>
                      <span className="text-lg">{icon}</span>
                      <div>
                        <div className={`text-sm font-medium ${color === 'green' ? 'text-green-700' : 'text-stone-700'}`}>{label}</div>
                        <div className="text-xs text-stone-400">{sub}</div>
                      </div>
                    </div>
                    {i < 3 && (
                      <div className="flex justify-center py-1">
                        <span className={`text-sm flow-arrow ${color === 'green' ? 'text-green-500' : 'text-stone-300'}`}>↓</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-5 text-center text-sm text-stone-600 reveal reveal-delay-2">
            En décembre 2022, des millions de coffres LastPass ont été volés depuis leurs serveurs. Chiffrés, certes /
            mais maintenant en possession d&apos;attaquants, déchiffrables dans le futur.{' '}
            <Link href="/blog/kyber-local-vs-cloud" className="text-blue-600 hover:text-blue-700 transition-colors underline">
              Analyse complète →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FONCTIONNALITÉS / 9 ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-900">Tout ce dont vous avez besoin</h2>
            <p className="text-stone-500">Simple. Local. Sûr.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                ),
                title: 'Kyber1024 Post-Quantique',
                desc: 'Algorithme d\'encapsulation de clé standardisé par le NIST en 2024 (ML-KEM). Résistant à l\'algorithme de Shor et aux futurs ordinateurs quantiques. Votre coffre sera encore sécurisé dans 20 ans.',
                tag: 'Post-quantique',
                link: { href: '/chiffrement-kyber1024', label: 'En savoir plus sur Kyber1024 →' },
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                ),
                title: 'AES-256-GCM',
                desc: 'Chiffrement symétrique authentifié de niveau militaire. Le "GCM" garantit que vos données ne peuvent pas être modifiées sans être détectées. Standard utilisé par les banques et l\'armée.',
                tag: 'Militaire',
                link: null,
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                  </svg>
                ),
                title: 'Argon2id / Dérivation de clé',
                desc: 'Vainqueur de la Password Hashing Competition 2015. Paramétré à 64 MB de mémoire : rend les attaques GPU et ASIC économiquement impossibles. Votre passphrase ne peut pas être forcée brute.',
                tag: 'PHC Winner',
                link: null,
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                  </svg>
                ),
                title: 'Auto-remplissage',
                desc: 'Kyber détecte automatiquement les champs mot de passe dans n\'importe quelle application de votre système. Injection en un clic sans jamais copier-coller votre mot de passe dans le presse-papiers.',
                tag: 'Productivité',
                link: null,
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                ),
                title: 'Analyse de sécurité',
                desc: 'Tableau de bord complet : détection des mots de passe faibles (entropie < 50 bits), réutilisés sur plusieurs sites, ou trop anciens. Score de sécurité global de votre coffre.',
                tag: 'Intégré',
                link: null,
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                  </svg>
                ),
                title: 'Import universel (CSV)',
                desc: 'Migrez depuis Bitwarden, 1Password, LastPass ou n\'importe quel gestionnaire exportant en CSV. Migration complète en quelques secondes, sans effort.',
                tag: 'Migration',
                link: { href: '/comparatif-bitwarden-1password-kyber', label: 'Voir le comparatif →' },
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                  </svg>
                ),
                title: 'Chiffrement de fichiers',
                desc: 'Chiffrez n\'importe quel fichier ou dossier entier avec le même algorithme Kyber1024 + AES-256-GCM. Essayez gratuitement dans votre navigateur : 100 % local, sans inscription.',
                tag: 'Pro',
                link: { href: '/chiffrer-fichier', label: 'Essayer dans le navigateur →' },
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 0 1 21.75 8.25Z" />
                  </svg>
                ),
                title: 'Générateur de mots de passe',
                desc: 'Génération cryptographiquement sûre via le CSPRNG du système. Longueur, caractères spéciaux, chiffres : tout est paramétrable. Entropie affichée en temps réel en bits.',
                tag: 'Intégré',
                link: null,
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
                  </svg>
                ),
                title: '100% local / Zéro cloud',
                desc: 'Votre coffre .vault est un fichier chiffré sur votre disque. Aucune donnée ne transite par internet. Pas de compte, pas de télémétrie, pas de serveur de notre côté. Vous êtes le seul propriétaire.',
                tag: 'Privacy',
                link: null,
              },
            ].map((f, i) => (
              <div
                key={f.title}
                className={`reveal reveal-delay-${(i % 4) + 1} bg-white border border-stone-400 rounded-2xl p-6 hover:border-blue-400 hover:shadow-md transition-all shadow-sm flex flex-col`}
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0 bg-stone-100 rounded-xl p-2.5">{f.icon}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-stone-900">{f.title}</h3>
                      <span className="text-xs text-stone-400 border border-stone-300 px-2 py-0.5 rounded-full">{f.tag}</span>
                    </div>
                    <p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
                {f.link && (
                  <div className="mt-4 ml-14">
                    <Link href={f.link.href} className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
                      {f.link.label}
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 px-6 bg-stone-100 border-y border-stone-300">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-900">Simple et transparent</h2>
            <p className="text-stone-500 text-lg">Pas d&apos;abonnement. Une licence, à vie.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Free */}
            <div className="bg-white border border-stone-400 rounded-2xl p-8 flex flex-col reveal reveal-delay-1 shadow-sm">
              <div className="mb-6">
                <span className="text-stone-500 text-sm font-medium uppercase tracking-wider">Gratuit</span>
                <div className="text-5xl font-bold mt-2 text-stone-900">0 €</div>
                <p className="text-stone-400 text-sm mt-1">Pour tester Kyber</p>
              </div>
              <ul className="space-y-3 mb-8 text-sm flex-1">
                {[
                  '3 mots de passe maximum',
                  'Générateur de mots de passe',
                  'Chiffrement post-quantique (Kyber1024)',
                  'Chiffrement de fichiers & dossiers',
                  'Analyse de sécurité',
                  'Auto-remplissage',
                  'Import CSV',
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-stone-700">
                    <span className="text-green-600 flex-shrink-0">✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href="/telechargement"
                className="block text-center border border-stone-300 hover:border-stone-400 hover:bg-stone-50 py-3 rounded-xl text-sm font-medium transition-all text-stone-700"
              >
                Télécharger gratuitement
              </a>
            </div>

            {/* Pro */}
            <div className="relative bg-gradient-to-b from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 flex flex-col reveal reveal-delay-2 shadow-md">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                Recommandé
              </div>
              <div className="mb-6">
                <span className="text-blue-600 text-sm font-medium uppercase tracking-wider">Kyber Pro</span>
                <div className="flex items-end gap-2 mt-2">
                  <span className="text-5xl font-bold text-stone-900">24,99 €</span>
                  <span className="text-stone-500 text-sm mb-1.5">paiement unique</span>
                </div>
                <p className="text-stone-500 text-sm mt-1">Licence perpétuelle / 1 utilisateur</p>
              </div>
              <ul className="space-y-3 mb-8 text-sm flex-1">
                {[
                  'Mots de passe illimités',
                  'Toutes les fonctionnalités gratuites',
                  'Export CSV',
                  'Mises à jour à vie',
                  'Support prioritaire',
                  'Licence perpétuelle',
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-stone-700">
                    <span className="text-blue-600 flex-shrink-0">✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowModal(true)}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 py-3.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-blue-300/30 text-white"
              >
                Acheter / 24,99 €
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── TÉLÉCHARGEMENT ── */}
      <section id="download" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal text-stone-900">Télécharger Kyber</h2>
          <p className="text-stone-500 text-lg mb-14 reveal reveal-delay-1">Gratuit. Windows disponible / Linux &amp; macOS de retour très bientôt.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                  </svg>
                ),
                platform: 'Windows',
                versions: '10 & 11 (64-bit)',
                href: '/downloads/Kyber_1.1.0_x64-setup.exe',
                label: 'Télécharger .exe',
                note: 'Installateur NSIS',
                available: true,
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-stone-400" viewBox="0 0 24 24" fill="currentColor">
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
                    <ellipse cx="32" cy="48" rx="15" ry="18" fill="#78716c"/>
                    <ellipse cx="32" cy="50" rx="9" ry="12" fill="#e7e5e4"/>
                    <circle cx="32" cy="22" r="13" fill="#78716c"/>
                    <circle cx="27" cy="18" r="3.5" fill="white"/>
                    <circle cx="37" cy="18" r="3.5" fill="white"/>
                    <circle cx="28" cy="19" r="1.8" fill="#1c1917"/>
                    <circle cx="38" cy="19" r="1.8" fill="#1c1917"/>
                    <ellipse cx="32" cy="27" rx="4.5" ry="3" fill="#f59e0b"/>
                    <ellipse cx="23" cy="72" rx="7" ry="3" fill="#f59e0b"/>
                    <ellipse cx="41" cy="72" rx="7" ry="3" fill="#f59e0b"/>
                    <ellipse cx="16" cy="46" rx="5" ry="11" fill="#78716c" transform="rotate(-15 16 46)"/>
                    <ellipse cx="48" cy="46" rx="5" ry="11" fill="#78716c" transform="rotate(15 48 46)"/>
                  </svg>
                ),
                platform: 'Linux',
                versions: 'Debian / Ubuntu',
                href: null,
                label: 'De retour très bientôt',
                note: 'Version 1.1.0 en préparation',
                available: false,
              },
            ].map((p, i) => (
              <div
                key={p.platform}
                className={`reveal reveal-delay-${i + 1} bg-white border border-stone-400 rounded-2xl p-6 hover:border-blue-400 hover:shadow-md transition-all shadow-sm`}
              >
                <div className="mb-3">{p.icon}</div>
                <h3 className="font-semibold text-lg text-stone-900">{p.platform}</h3>
                <p className="text-stone-400 text-xs mb-1">{p.versions}</p>
                <p className="text-stone-300 text-xs mb-5">{p.note}</p>
                {p.available ? (
                  <a
                    href={p.href!}
                    download
                    className="inline-block text-blue-600 hover:text-blue-700 text-sm font-medium border border-blue-300 hover:border-blue-400 px-5 py-2 rounded-lg transition-all"
                  >
                    {p.label}
                  </a>
                ) : (
                  <span className="inline-block text-stone-400 text-sm font-medium border border-stone-300 px-5 py-2 rounded-lg cursor-not-allowed">
                    {p.label}
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="text-stone-400 text-xs mt-10">Version 1.1.0 / mises à jour automatiques signées</p>
        </div>
      </section>

      {/* ── ENTERPRISE ── */}
      <section id="enterprise" className="py-24 px-6 bg-stone-100 border-y border-stone-300">
        <div className="max-w-2xl mx-auto text-center reveal">
          <h2 className="text-3xl font-bold mb-4 text-stone-900">Solution entreprise</h2>
          <p className="text-stone-500 mb-8 max-w-xl mx-auto leading-relaxed">
            Déployez Kyber dans votre équipe avec des tarifs dégressifs, une facturation entreprise,
            et une conformité RGPD garantie par architecture. Aucun serveur centralisé.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/entreprise"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 px-8 py-3.5 rounded-xl font-semibold text-sm text-white transition-all shadow-md"
            >
              Voir les offres entreprise →
            </a>
            <a
              href="mailto:contact@kyber-security.fr?subject=Kyber Enterprise / demande de devis"
              className="border border-stone-300 hover:border-stone-400 px-8 py-3.5 rounded-xl font-semibold text-sm text-stone-700 transition-all"
            >
              contact@kyber-security.fr
            </a>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            {[
              { icon: '◆', label: 'Zéro serveur centralisé' },
              { icon: 'FR', label: 'RGPD par conception' },
              { icon: '⧉', label: 'Démarche CSPN ANSSI' },
            ].map(({ icon, label }) => (
              <div key={label} className="bg-white border border-stone-400 rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm">
                <span className="text-lg">{icon}</span>
                <span className="text-stone-700 font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8 reveal">
            <h2 className="text-xl font-bold text-stone-900">Derniers articles</h2>
            <Link href="/blog" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
              Voir tout →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 reveal reveal-delay-1">
            {[
              {
                href: '/blog/meilleur-gestionnaire-mots-de-passe-rgpd-france-2026',
                cat: 'Comparatif',
                catColor: 'text-green-700 bg-green-50 border-green-200',
                title: 'Meilleur gestionnaire de mots de passe RGPD France 2026',
                date: '15 juin 2026',
                read: '10 min',
              },
              {
                href: '/blog/keepass-alternative-post-quantique',
                cat: 'Comparatif',
                catColor: 'text-cyan-700 bg-cyan-50 border-cyan-200',
                title: 'KeePass alternative post-quantique 2026 : pourquoi migrer vers Kyber',
                date: '15 juin 2026',
                read: '9 min',
              },
              {
                href: '/blog/kyber-local-vs-cloud',
                cat: 'Analyse',
                catColor: 'text-blue-700 bg-blue-50 border-blue-200',
                title: 'Kyber local vs cloud : lequel vous protège vraiment ?',
                date: '8 juin 2026',
                read: '8 min',
              },
              {
                href: '/blog/ordinateurs-quantiques-mots-de-passe',
                cat: 'Sécurité',
                catColor: 'text-red-700 bg-red-50 border-red-200',
                title: 'Faut-il avoir peur des ordinateurs quantiques pour ses mots de passe ?',
                date: '9 juin 2026',
                read: '8 min',
              },
            ].map((a) => (
              <Link key={a.href} href={a.href} className="group block bg-white border border-stone-400 rounded-xl p-5 hover:border-stone-500 hover:shadow-md transition-all shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${a.catColor}`}>{a.cat}</span>
                  <span className="text-xs text-stone-400">{a.date} · {a.read}</span>
                </div>
                <h3 className="text-sm font-semibold group-hover:text-blue-600 transition-colors leading-snug text-stone-800">
                  {a.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-stone-300 py-12 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-stone-500">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span><span className="font-bold text-stone-900">Kyber</span> / © 2026 Kyber Security. Made in France</span>
            <span>
              Créé avec soin par{' '}
              <a href="https://softpac.fr" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-700 transition-colors">
                Softpac.fr
              </a>
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/blog" className="hover:text-stone-900 transition-colors">Blog</a>
            <a href="/gestionnaire-mots-de-passe-post-quantique" className="hover:text-stone-900 transition-colors">Fonctionnalités</a>
            <a href="/comparatif-bitwarden-1password-kyber" className="hover:text-stone-900 transition-colors">Comparatif</a>
            <a href="/chiffrement-kyber1024" className="hover:text-stone-900 transition-colors">Technique</a>
            <a href="/a-propos" className="hover:text-stone-900 transition-colors">À propos</a>
            <a href="/politique-de-confidentialite" className="hover:text-stone-900 transition-colors">Confidentialité</a>
            <a href="/cgv" className="hover:text-stone-900 transition-colors">CGV</a>
            <a href="mailto:contact@kyber-security.fr" className="hover:text-stone-900 transition-colors">contact@kyber-security.fr</a>
          </div>
        </div>
      </footer>

      {/* ── MODAL PAIEMENT ── */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
        >
          <div className="bg-white border border-stone-400 rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-bold text-xl text-stone-900">Kyber Pro / 24,99 €</h3>
                <p className="text-stone-500 text-sm mt-1">Entrez vos informations pour recevoir votre licence par email</p>
              </div>
              <button onClick={() => setShowModal(false)} className="text-stone-400 hover:text-stone-600 text-xl leading-none ml-4 mt-0.5">✕</button>
            </div>

            <form onSubmit={handleCheckout} className="space-y-4">
              <div>
                <label className="text-sm text-stone-600 mb-1.5 block">Prénom et Nom *</label>
                <input required value={buyerName} onChange={(e) => setBuyerName(e.target.value)} placeholder="Prénom, Nom"
                  className="w-full bg-stone-50 border border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 transition-colors text-stone-900 placeholder:text-stone-400" />
              </div>
              <div>
                <label className="text-sm text-stone-600 mb-1.5 block">Email * (pour recevoir la licence)</label>
                <input required type="email" value={buyerEmail} onChange={(e) => setBuyerEmail(e.target.value)} placeholder="vous@exemple.fr"
                  className="w-full bg-stone-50 border border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 transition-colors text-stone-900 placeholder:text-stone-400" />
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs text-blue-700">
                Votre clé de licence sera envoyée à cet email immédiatement après le paiement.
              </div>
              <button type="submit" disabled={checkoutLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 disabled:opacity-60 py-3.5 rounded-xl font-semibold transition-all text-sm text-white">
                {checkoutLoading ? 'Redirection vers Stripe…' : 'Continuer vers le paiement →'}
              </button>
              <div className="flex items-center justify-center gap-2 text-xs text-stone-400">
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
