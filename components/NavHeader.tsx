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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#070711]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Kyber
          </span>
          <span className="text-xs text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full hidden sm:inline">
            Post-Quantique
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-white transition-colors ${pathname.startsWith(href) ? 'text-white' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/telechargement"
          className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Télécharger
        </Link>
      </div>
    </header>
  );
}
