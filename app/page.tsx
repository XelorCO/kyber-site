'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// ── Visualisations des étapes crypto ──────────────────────────────────────

function VizPassphrase() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-6 py-4">
      <div className="text-center mb-2">
        <p className="text-xs text-slate-500 mb-4">Vous tapez votre passphrase dans l&apos;app</p>
        <div className="bg-[#0a0a18] border border-blue-500/30 rounded-xl px-6 py-4 font-mono inline-block">
          <div className="text-xs text-slate-600 mb-2 text-left">Déverrouiller le coffre</div>
          <div className="flex items-center gap-1">
            <span className="text-blue-300 text-xl tracking-[0.3em]">●●●●●●●●●●●●</span>
            <span className="cursor-blink inline-block w-0.5 h-5 bg-blue-400 ml-1" />
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
            <span className={`w-2 h-2 rounded-full bg-${color}-400 animate-pulse flex-shrink-0`} />
            <span className={`text-${color}-400`}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function VizArgon2() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-5 py-4">
      <p className="text-xs text-slate-500 text-center">Argon2id alloue 64 MB de RAM — impossible à paralléliser sur GPU</p>
      <div className="w-full max-w-xs space-y-3">
        {[
          { label: 'Allocation mémoire', val: '64 MB', delay: '' },
          { label: 'Calcul itératif', val: '3 passes', delay: 'mem-bar-2' },
          { label: 'Résistance brute-force', val: '~50 H/s GPU', delay: 'mem-bar-3' },
        ].map(({ label, val, delay }) => (
          <div key={label}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-400">{label}</span>
              <span className="text-cyan-400 font-mono">{val}</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div className={`h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full ${delay || 'mem-bar'}`} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 text-xs mt-2">
        <div className="flex items-center gap-1.5 bg-red-500/10 border border-red-500/20 rounded-full px-3 py-1">
          <span className="text-red-400">✗</span>
          <span className="text-red-400">GPU farm inefficace</span>
        </div>
        <div className="flex items-center gap-1.5 bg-red-500/10 border border-red-500/20 rounded-full px-3 py-1">
          <span className="text-red-400">✗</span>
          <span className="text-red-400">ASIC bloqué</span>
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
      <p className="text-xs text-slate-500 text-center">Réseau euclidien (Module-LWE) — insoluble par algorithme de Shor</p>
      <div className="relative w-full max-w-xs h-40 bg-[#0a0a18] rounded-xl border border-purple-500/20 overflow-hidden">
        {dots.map((d, i) => (
          <div
            key={i}
            className={`lattice-dot absolute ${d.size} rounded-full bg-gradient-to-br from-purple-400 to-blue-400 opacity-80`}
            style={{ left: d.x, top: d.y, transform: 'translate(-50%,-50%)' }}
          />
        ))}
        <div className="absolute inset-0 flex items-end justify-center pb-3">
          <span className="text-xs text-purple-400/60 font-mono">Module-LWE lattice</span>
        </div>
      </div>
      <div className="flex gap-3 text-xs">
        <div className="bg-purple-500/10 border border-purple-500/20 rounded-full px-3 py-1 text-purple-300">NIST FIPS 203</div>
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1 text-blue-300">ML-KEM-1024</div>
      </div>
    </div>
  );
}

function VizAES() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-5 py-4">
      <p className="text-xs text-slate-500 text-center">AES-256-GCM chiffre et authentifie chaque octet du coffre</p>
      <div className="w-full max-w-xs space-y-3">
        <div className="bg-[#0a0a18] border border-white/10 rounded-lg p-3">
          <div className="text-xs text-slate-500 mb-2">Données brutes :</div>
          <div className="font-mono text-xs text-slate-300">
            {`{ "url":"banque.fr", "pass":"secret" }`}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-green-400 text-lg flow-arrow">↓</div>
        </div>
        <div className="bg-[#0a0a18] border border-green-500/30 rounded-lg p-3">
          <div className="text-xs text-green-500 mb-2">Chiffré (AES-256-GCM) :</div>
          <div className="font-mono text-xs text-green-400/70 break-all">
            a3f8c2e1d09b4725f1a8c3d4e5f60718
            293a4b5c6d7e8f901a2b3c4d5e6f7081
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-green-400">Tag GCM : toute modification détectée</span>
      </div>
    </div>
  );
}

function VizVault() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-5 py-4">
      <p className="text-xs text-slate-500 text-center">Le fichier chiffré n&apos;existe que sur votre appareil</p>
      <div className="vault-shield bg-[#0a0a18] border border-green-500/30 rounded-xl p-6 text-center w-full max-w-xs">
        <div className="text-4xl mb-3">🔒</div>
        <div className="font-mono text-sm text-green-300">coffre.vault</div>
        <div className="text-xs text-slate-500 mt-1">~/.kyber/coffre.vault</div>
      </div>
      <div className="flex flex-col gap-2 text-xs w-full max-w-xs">
        {[
          { icon: '✗', color: 'red', label: 'Pas sur nos serveurs' },
          { icon: '✗', color: 'red', label: 'Pas dans le cloud' },
          { icon: '✓', color: 'green', label: 'Uniquement sur votre disque' },
        ].map(({ icon, color, label }) => (
          <div key={label} className="flex items-center gap-2">
            <span className={`text-${color}-400 font-bold w-4`}>{icon}</span>
            <span className={`text-${color}-400`}>{label}</span>
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
    blue:   'border-blue-500/50 bg-blue-500/10 text-blue-300',
    cyan:   'border-cyan-500/50 bg-cyan-500/10 text-cyan-300',
    purple: 'border-purple-500/50 bg-purple-500/10 text-purple-300',
    green:  'border-green-500/50 bg-green-500/10 text-green-300',
    orange: 'border-orange-500/50 bg-orange-500/10 text-orange-300',
  };

  const connectorColorMap: Record<string, string> = {
    blue:   'from-blue-500 to-cyan-500',
    cyan:   'from-cyan-500 to-purple-500',
    purple: 'from-purple-500 to-green-500',
    green:  'from-green-500 to-orange-500',
    orange: 'from-orange-500 to-orange-300',
  };

  return (
    <div className="min-h-screen bg-[#070711] text-white overflow-x-hidden">

      {/* ── HEADER ── */}
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
            <a href="#how-it-works" className="hover:text-white transition-colors">Comment ça marche</a>
            <a href="#pricing" className="hover:text-white transition-colors">Tarifs</a>
            <a href="/blog" className="hover:text-white transition-colors">Blog</a>
          </nav>
          <a
            href="/telechargement"
            className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Télécharger
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="glow-blob absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
          <div className="glow-blob-2 absolute top-1/3 right-1/6 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-sm mb-8 font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Premier gestionnaire post-quantique français
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Vos mots de passe{' '}
            <span className="gradient-shimmer">résistants au quantique</span>
          </h1>

          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Kyber combine <strong className="text-white">Kyber1024</strong> (standard NIST 2024),{' '}
            <strong className="text-white">Argon2id</strong> et <strong className="text-white">AES-256-GCM</strong>{' '}
            pour chiffrer vos mots de passe localement — aucune donnée ne quitte votre machine.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="/telechargement"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/25 text-sm"
            >
              Télécharger gratuitement
            </a>
            <a
              href="#how-it-works"
              className="border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 px-8 py-3.5 rounded-xl font-semibold transition-all text-sm"
            >
              Voir comment ça marche ↓
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-5 text-sm text-slate-500">
            {['Windows 10/11', 'macOS 12+', 'Linux'].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMENT ÇA MARCHE — schéma interactif ── */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comment Kyber protège vos mots de passe
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
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
                        ? `${colorMap[step.color]} border-opacity-100`
                        : 'border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:bg-white/[0.07]'
                    }`}
                  >
                    <span className={`text-xs font-mono font-bold ${activeStep === i ? '' : 'text-slate-600'}`}>
                      {step.num}
                    </span>
                    <span className="font-semibold text-sm leading-tight">{step.title}</span>
                    <span className={`text-xs leading-tight ${activeStep === i ? 'opacity-80' : 'text-slate-600'}`}>
                      {step.subtitle}
                    </span>
                  </button>

                  {/* Connecteur entre étapes */}
                  {i < cryptoSteps.length - 1 && (
                    <div className="flex-shrink-0 px-1">
                      <div className={`h-0.5 w-6 rounded-full transition-all duration-500 ${
                        activeStep > i
                          ? `bg-gradient-to-r ${connectorColorMap[step.color]}`
                          : 'bg-white/10'
                      }`} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Panel de visualisation */}
            <div className={`bg-[#0d0d1e] border rounded-2xl p-8 transition-all duration-300 min-h-[280px] ${colorMap[cryptoSteps[activeStep].color]}`}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Viz animée */}
                <div className="min-h-[200px]" key={activeStep}>
                  {cryptoSteps[activeStep].viz}
                </div>
                {/* Explication */}
                <div>
                  <div className={`text-xs font-mono font-bold mb-2 opacity-70`}>
                    Étape {cryptoSteps[activeStep].num}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {cryptoSteps[activeStep].title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {[
                      'Votre passphrase ne quitte jamais votre mémoire vive. Elle n\'est jamais écrite sur le disque ni transmise sur le réseau. C\'est le seul secret que vous possédez, et il reste exclusivement chez vous.',
                      'Argon2id transforme votre passphrase en une seed cryptographique en allouant 64 MB de RAM. Cette contrainte mémoire rend la parallélisation sur GPU ou ASIC impraticable — un attaquant ne peut pas accélérer le brute-force.',
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
            <div className="flex justify-between mt-4 text-xs text-slate-600">
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className="hover:text-slate-400 transition-colors disabled:opacity-30"
              >
                ← Étape précédente
              </button>
              <button
                onClick={() => setActiveStep(Math.min(cryptoSteps.length - 1, activeStep + 1))}
                disabled={activeStep === cryptoSteps.length - 1}
                className="hover:text-slate-400 transition-colors disabled:opacity-30"
              >
                Étape suivante →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCAL VS CLOUD ── */}
      <section className="py-24 px-6 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stockage local : la différence fondamentale
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Le chiffrement post-quantique dans le cloud protège le transport.
              Mais si votre coffre est sur un serveur, il peut être volé.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 reveal reveal-delay-1">
            {/* Cloud */}
            <div className="cloud-danger bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-red-400 text-lg">⚠</span>
                <h3 className="font-bold text-red-300">Gestionnaire cloud</h3>
                <span className="ml-auto text-xs text-red-400/60 border border-red-500/20 px-2 py-0.5 rounded-full">
                  Bitwarden, 1Password…
                </span>
              </div>

              <div className="space-y-3">
                {[
                  { icon: '💻', label: 'Votre appareil', sub: 'Vous tapez votre mot de passe', color: 'slate' },
                  { icon: '🌐', label: 'Internet', sub: 'Transit chiffré (PQC ou TLS)', color: 'slate' },
                  { icon: '🖥️', label: 'Serveurs du fournisseur', sub: 'Coffre chiffré stocké ici', color: 'red' },
                  { icon: '⚠️', label: 'Exposition', sub: 'Brèche possible (cf. LastPass 2022)', color: 'red' },
                ].map(({ icon, label, sub, color }, i) => (
                  <div key={i}>
                    <div className={`flex items-center gap-3 bg-${color === 'red' ? 'red' : 'white'}/5 border border-${color === 'red' ? 'red-500/20' : 'white/10'} rounded-xl px-4 py-3`}>
                      <span className="text-lg">{icon}</span>
                      <div>
                        <div className={`text-sm font-medium ${color === 'red' ? 'text-red-300' : 'text-slate-300'}`}>{label}</div>
                        <div className="text-xs text-slate-500">{sub}</div>
                      </div>
                    </div>
                    {i < 3 && (
                      <div className="flex justify-center py-1">
                        <span className={`text-sm flow-arrow ${color === 'red' ? 'text-red-500' : 'text-slate-600'}`}>↓</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Kyber local */}
            <div className="vault-shield bg-green-500/5 border border-green-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-green-400 text-lg">🛡</span>
                <h3 className="font-bold text-green-300">Kyber — 100% local</h3>
                <span className="ml-auto text-xs text-green-400/60 border border-green-500/20 px-2 py-0.5 rounded-full">
                  Votre appareil uniquement
                </span>
              </div>

              <div className="space-y-3">
                {[
                  { icon: '💻', label: 'Votre appareil', sub: 'Vous tapez votre passphrase', color: 'slate' },
                  { icon: '🔐', label: 'Kyber1024 + Argon2id + AES-256-GCM', sub: 'Chiffrement complet en local', color: 'green' },
                  { icon: '🔒', label: 'Fichier .vault sur votre disque', sub: 'N\'existe que chez vous', color: 'green' },
                  { icon: '✓', label: 'Aucun serveur à attaquer', sub: 'Inatteignable depuis internet', color: 'green' },
                ].map(({ icon, label, sub, color }, i) => (
                  <div key={i}>
                    <div className={`flex items-center gap-3 bg-${color === 'green' ? 'green' : 'white'}/5 border border-${color === 'green' ? 'green-500/20' : 'white/10'} rounded-xl px-4 py-3`}>
                      <span className="text-lg">{icon}</span>
                      <div>
                        <div className={`text-sm font-medium ${color === 'green' ? 'text-green-300' : 'text-slate-300'}`}>{label}</div>
                        <div className="text-xs text-slate-500">{sub}</div>
                      </div>
                    </div>
                    {i < 3 && (
                      <div className="flex justify-center py-1">
                        <span className={`text-sm flow-arrow ${color === 'green' ? 'text-green-500' : 'text-slate-600'}`}>↓</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-500/5 border border-blue-500/20 rounded-xl p-5 text-center text-sm text-slate-400 reveal reveal-delay-2">
            En décembre 2022, des millions de coffres LastPass ont été volés depuis leurs serveurs. Chiffrés, certes —
            mais maintenant en possession d&apos;attaquants, déchiffrables dans le futur.{' '}
            <Link href="/blog/kyber-local-vs-cloud" className="text-blue-400 hover:text-blue-300 transition-colors underline">
              Analyse complète →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FONCTIONNALITÉS — 4 clés ── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tout ce dont vous avez besoin</h2>
            <p className="text-slate-400">Simple. Local. Sûr.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                  </svg>
                ),
                title: 'Auto-remplissage',
                desc: 'Détection automatique des champs de connexion dans toutes vos applications. Injectez vos identifiants en un clic.',
                tag: 'Productivité',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                  </svg>
                ),
                title: 'Import depuis Bitwarden / 1Password',
                desc: 'Migrez depuis n\'importe quel gestionnaire supportant le CSV. Aucune donnée perdue, migration en quelques secondes.',
                tag: 'Migration',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                  </svg>
                ),
                title: 'Chiffrement de fichiers & dossiers',
                desc: 'Chiffrez n\'importe quel fichier avec votre clé coffre. Format .kyber illisible sans votre passphrase.',
                tag: 'Pro',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                ),
                title: 'Analyse de sécurité',
                desc: 'Tableau de bord santé : mots de passe faibles, réutilisés ou anciens détectés automatiquement. Renforcez votre coffre.',
                tag: 'Intégré',
              },
            ].map((f, i) => (
              <div
                key={f.title}
                className={`reveal reveal-delay-${i + 1} bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 hover:bg-white/[0.07] transition-all`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-white/5 rounded-xl p-2.5">{f.icon}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold">{f.title}</h3>
                      <span className="text-xs text-slate-600 border border-white/10 px-2 py-0.5 rounded-full">{f.tag}</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 px-6 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple et transparent</h2>
            <p className="text-slate-400 text-lg">Pas d&apos;abonnement. Une licence, à vie.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Free */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col reveal reveal-delay-1">
              <div className="mb-6">
                <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">Gratuit</span>
                <div className="text-5xl font-bold mt-2">0 €</div>
                <p className="text-slate-500 text-sm mt-1">Pour tester Kyber</p>
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
                  <li key={feat} className="flex items-center gap-3 text-slate-300">
                    <span className="text-green-400 flex-shrink-0">✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href="/telechargement"
                className="block text-center border border-white/20 hover:border-white/40 hover:bg-white/5 py-3 rounded-xl text-sm font-medium transition-all"
              >
                Télécharger gratuitement
              </a>
            </div>

            {/* Pro */}
            <div className="relative bg-gradient-to-b from-blue-600/20 to-purple-600/20 border border-blue-500/40 rounded-2xl p-8 flex flex-col reveal reveal-delay-2">
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
                  'Export CSV',
                  'Mises à jour à vie',
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

      {/* ── TÉLÉCHARGEMENT ── */}
      <section id="download" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Télécharger Kyber</h2>
          <p className="text-slate-400 text-lg mb-14 reveal reveal-delay-1">Gratuit. Disponible sur toutes les plateformes.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
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
          <p className="text-slate-600 text-xs mt-10">Version 1.0.0</p>
        </div>
      </section>

      {/* ── ENTERPRISE ── */}
      <section id="enterprise" className="py-24 px-6 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10 reveal">
            <h2 className="text-3xl font-bold mb-3">Solution entreprise</h2>
            <p className="text-slate-400">Besoin de licences pour une équipe ? Tarifs dégressifs disponibles.</p>
          </div>

          {contactStatus === 'sent' ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4"><svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg></div>
              <h3 className="font-semibold text-xl mb-2">Message envoyé !</h3>
              <p className="text-slate-400">Nous vous répondrons dans les 24 heures.</p>
            </div>
          ) : (
            <form onSubmit={handleContact} className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4 reveal reveal-delay-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-400 mb-1.5 block">Prénom *</label>
                  <input required value={contact.firstName} onChange={(e) => setContact({ ...contact, firstName: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div>
                  <label className="text-sm text-slate-400 mb-1.5 block">Nom *</label>
                  <input required value={contact.lastName} onChange={(e) => setContact({ ...contact, lastName: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
              </div>
              <div>
                <label className="text-sm text-slate-400 mb-1.5 block">Société *</label>
                <input required value={contact.company} onChange={(e) => setContact({ ...contact, company: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
              <div>
                <label className="text-sm text-slate-400 mb-1.5 block">Email professionnel *</label>
                <input required type="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
              <div>
                <label className="text-sm text-slate-400 mb-1.5 block">Taille de l&apos;équipe</label>
                <select value={contact.teamSize} onChange={(e) => setContact({ ...contact, teamSize: e.target.value })}
                  className="w-full bg-[#0d0d1e] border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors">
                  <option value="1-10">1 – 10 personnes</option>
                  <option value="11-50">11 – 50 personnes</option>
                  <option value="51-200">51 – 200 personnes</option>
                  <option value="200+">200+ personnes</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-slate-400 mb-1.5 block">Message</label>
                <textarea rows={4} value={contact.message} onChange={(e) => setContact({ ...contact, message: e.target.value })}
                  placeholder="Décrivez votre besoin, vos contraintes, vos questions…"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none" />
              </div>
              <button type="submit" disabled={contactStatus === 'sending'}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 py-3.5 rounded-xl text-sm font-semibold transition-all">
                {contactStatus === 'sending' ? 'Envoi en cours…' : 'Envoyer la demande'}
              </button>
              {contactStatus === 'error' && (
                <p className="text-red-400 text-sm text-center">Une erreur est survenue. Réessayez ou contactez-nous directement.</p>
              )}
            </form>
          )}
        </div>
      </section>

      {/* ── BLOG ── */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8 reveal">
            <h2 className="text-xl font-bold">Derniers articles</h2>
            <Link href="/blog" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              Voir tout →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 reveal reveal-delay-1">
            {[
              {
                href: '/blog/kyber-local-vs-cloud',
                cat: 'Analyse',
                catColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
                title: 'Kyber local vs cloud : lequel vous protège vraiment ?',
                date: '8 juin 2026',
                read: '8 min',
              },
              {
                href: '/blog/ordinateurs-quantiques-mots-de-passe',
                cat: 'Sécurité',
                catColor: 'text-red-400 bg-red-500/10 border-red-500/20',
                title: 'Faut-il avoir peur des ordinateurs quantiques pour ses mots de passe ?',
                date: '9 juin 2026',
                read: '8 min',
              },
              {
                href: '/blog/cryptographie-post-quantique',
                cat: 'Éducation',
                catColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
                title: "Qu'est-ce que la cryptographie post-quantique ?",
                date: '9 juin 2026',
                read: '10 min',
              },
              {
                href: '/blog/argon2id-vs-pbkdf2',
                cat: 'Technique',
                catColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
                title: 'Argon2id vs PBKDF2 vs bcrypt : quel KDF choisir ?',
                date: '9 juin 2026',
                read: '9 min',
              },
            ].map((a) => (
              <Link key={a.href} href={a.href} className="group block bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20 hover:bg-white/[0.07] transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${a.catColor}`}>{a.cat}</span>
                  <span className="text-xs text-slate-600">{a.date} · {a.read}</span>
                </div>
                <h3 className="text-sm font-semibold group-hover:text-blue-300 transition-colors leading-snug">
                  {a.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span><span className="font-bold text-white">Kyber</span> — © 2026 Kyber Security. Made in France 🇫🇷</span>
            <span>
              Créé avec ❤️ par{' '}
              <a href="https://softpac.fr" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 transition-colors">
                Softpac.fr
              </a>
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/blog" className="hover:text-white transition-colors">Blog</a>
            <a href="/gestionnaire-mots-de-passe-post-quantique" className="hover:text-white transition-colors">Fonctionnalités</a>
            <a href="/comparatif-bitwarden-1password-kyber" className="hover:text-white transition-colors">Comparatif</a>
            <a href="/chiffrement-kyber1024" className="hover:text-white transition-colors">Technique</a>
            <a href="/politique-de-confidentialite" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="/cgv" className="hover:text-white transition-colors">CGV</a>
            <a href="mailto:contact@kyber-security.fr" className="hover:text-white transition-colors">contact@kyber-security.fr</a>
          </div>
        </div>
      </footer>

      {/* ── MODAL PAIEMENT ── */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
        >
          <div className="bg-[#0d0d1e] border border-white/20 rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-bold text-xl">Kyber Pro — 15 €</h3>
                <p className="text-slate-400 text-sm mt-1">Entrez vos informations pour recevoir votre licence par email</p>
              </div>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-white text-xl leading-none ml-4 mt-0.5">✕</button>
            </div>

            <form onSubmit={handleCheckout} className="space-y-4">
              <div>
                <label className="text-sm text-slate-400 mb-1.5 block">Prénom et Nom *</label>
                <input required value={buyerName} onChange={(e) => setBuyerName(e.target.value)} placeholder="Prénom, Nom"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
              <div>
                <label className="text-sm text-slate-400 mb-1.5 block">Email * (pour recevoir la licence)</label>
                <input required type="email" value={buyerEmail} onChange={(e) => setBuyerEmail(e.target.value)} placeholder="vous@exemple.fr"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-xs text-blue-300">
                Votre clé de licence sera envoyée à cet email immédiatement après le paiement.
              </div>
              <button type="submit" disabled={checkoutLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-60 py-3.5 rounded-xl font-semibold transition-all text-sm">
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
