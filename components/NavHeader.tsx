'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/gestionnaire-mots-de-passe-post-quantique', label: 'Fonctionnalités' },
  { href: '/chiffrement-kyber1024', label: 'Cryptographie' },
  { href: '/comparatif-bitwarden-1password-kyber', label: 'Comparatif' },
  { href: '/blog', label: 'Blog' },
];

export default function NavHeader() {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f6]/90 backdrop-blur-md border-b border-stone-200">
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
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 via-rose-400 to-amber-400 bg-clip-text text-transparent">
            Kyber
          </span>
          <span className="text-xs text-stone-500 border border-stone-300 px-2 py-0.5 rounded-full hidden sm:inline">
            Post-Quantique
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-stone-500">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-stone-900 transition-colors ${pathname.startsWith(href) ? 'text-stone-900 font-medium' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/telechargement"
          className="bg-gradient-to-r from-blue-500 via-rose-400 to-amber-400 hover:opacity-90 px-4 py-2 rounded-lg text-sm font-medium transition-opacity text-white shadow-sm"
        >
          Télécharger
        </Link>
      </div>
    </header>
  );
}
