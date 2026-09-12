'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/gestionnaire-mots-de-passe-post-quantique', label: 'Fonctionnalités' },
  { href: '/chiffrement-kyber1024', label: 'Cryptographie' },
  { href: '/comparatif-bitwarden-1password-kyber', label: 'Comparatif' },
  { href: '/chiffrer-fichier', label: 'Chiffrer un fichier' },
  { href: '/generateur-mot-de-passe', label: 'Générateur' },
  { href: '/blog', label: 'Blog' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/a-propos', label: 'À propos' },
];

export default function NavHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e1015]/90 backdrop-blur-md border-b border-stone-700">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <svg viewBox="0 0 190 190" className="w-8 h-8 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <linearGradient id="navCrystalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4F8EF7"/>
                  <stop offset="50%" stopColor="#9B6EF7"/>
                  <stop offset="100%" stopColor="#F76EA8"/>
                </linearGradient>
                <linearGradient id="navShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3A7AE8"/>
                  <stop offset="60%" stopColor="#8B5CF6"/>
                  <stop offset="100%" stopColor="#EC4899"/>
                </linearGradient>
                <linearGradient id="navAccentGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F76EA8" stopOpacity="0.9"/>
                  <stop offset="100%" stopColor="#4F8EF7" stopOpacity="0.9"/>
                </linearGradient>
              </defs>
              <circle cx="95" cy="95" r="95" fill="#252840"/>
              <circle cx="95" cy="95" r="88" fill="none" stroke="url(#navCrystalGrad)" strokeWidth="1" opacity="0.4"/>
              <polygon points="95,3 43,73 43,117 95,145" fill="url(#navShieldGrad)" opacity="0.85"/>
              <polygon points="95,3 147,73 147,117 95,145" fill="url(#navShieldGrad)" opacity="0.65"/>
              <polygon points="43,117 95,145 95,187" fill="url(#navAccentGrad)" opacity="0.9"/>
              <polygon points="147,117 95,145 95,187" fill="url(#navAccentGrad)" opacity="0.7"/>
              <polygon points="43,73 43,117 95,145 95,95" fill="#7C5CE0" opacity="0.5"/>
              <polygon points="147,73 147,117 95,145 95,95" fill="#B95ECC" opacity="0.4"/>
              <polygon points="95,3 43,73 95,95 147,73" fill="white" opacity="0.13"/>
              <polygon points="80,40 60,77 85,87 95,55" fill="white" opacity="0.18"/>
              <polygon points="95,3 43,73 43,117 95,187 147,117 147,73" fill="none" stroke="url(#navCrystalGrad)" strokeWidth="1.5" strokeLinejoin="round"/>
              <line x1="43" y1="73" x2="147" y2="73" stroke="url(#navCrystalGrad)" strokeWidth="0.8" opacity="0.7"/>
              <line x1="43" y1="117" x2="147" y2="117" stroke="url(#navCrystalGrad)" strokeWidth="0.8" opacity="0.5"/>
              <line x1="95" y1="3" x2="95" y2="187" stroke="white" strokeWidth="0.5" opacity="0.12"/>
              <rect x="80" y="89" width="30" height="22" rx="4" fill="none" stroke="white" strokeWidth="1.8" opacity="0.85"/>
              <path d="M86,89 Q86,77 95,77 Q104,77 104,89" fill="none" stroke="white" strokeWidth="1.8" opacity="0.85"/>
              <circle cx="95" cy="100" r="3" fill="white" opacity="0.9"/>
            </svg>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Kyber
            </span>
            <span className="text-xs text-stone-400 border border-stone-700 px-2 py-0.5 rounded-full hidden sm:inline">
              Post-Quantique
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm text-stone-400">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`hover:text-stone-100 transition-colors ${pathname.startsWith(href) ? 'text-stone-100 font-medium' : ''}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/XelorCO/kyber-app"
              target="_blank"
              rel="noopener"
              aria-label="Code source sur GitHub"
              className="hidden sm:flex items-center justify-center w-9 h-9 rounded-lg border border-stone-700 bg-[#151922] text-stone-400 hover:text-stone-100 hover:bg-stone-900 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.79 2.74 1.27 3.41.97.1-.76.41-1.28.74-1.57-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.28 5.69.42.36.79 1.08.79 2.18v3.24c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/>
              </svg>
            </a>
            <Link
              href="/telechargement"
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 px-4 py-2 rounded-lg text-sm font-medium transition-opacity text-white shadow-sm"
            >
              Télécharger
            </Link>

            {/* Burger mobile */}
            <button
              className="lg:hidden p-2 rounded-lg border border-stone-700 bg-[#151922] text-stone-400 hover:bg-stone-900 transition-colors"
              onClick={() => setOpen(v => !v)}
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={open}
            >
              {open ? (
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

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-stone-800 bg-[#0e1015]/98 backdrop-blur-md">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    pathname.startsWith(href)
                      ? 'bg-blue-950/50 text-blue-300 font-medium border border-blue-800'
                      : 'text-stone-400 hover:bg-stone-800 hover:text-stone-100'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Overlay pour fermer en cliquant en dehors */}
      {open && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
