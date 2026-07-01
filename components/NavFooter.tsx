import Link from 'next/link';

export default function NavFooter() {
  return (
    <footer className="border-t border-stone-300 py-12 px-6 mt-12 bg-stone-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-stone-500">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span>
            <span className="font-bold text-stone-900">Kyber</span> / © 2026 Kyber Security. Made in France
          </span>
          <span>
            Créé avec soin par{' '}
            <a
              href="https://softpac.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              Softpac.fr
            </a>
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/blog" className="hover:text-stone-900 transition-colors">Blog</Link>
          <Link href="/gestionnaire-mots-de-passe-post-quantique" className="hover:text-stone-900 transition-colors">Fonctionnalités</Link>
          <Link href="/chiffrement-kyber1024" className="hover:text-stone-900 transition-colors">Cryptographie</Link>
          <Link href="/comparatif-bitwarden-1password-kyber" className="hover:text-stone-900 transition-colors">Comparatif</Link>
          <Link href="/roadmap" className="hover:text-stone-900 transition-colors">Roadmap</Link>
          <Link href="/entreprise" className="hover:text-stone-900 transition-colors">Entreprise</Link>
          <Link href="/a-propos" className="hover:text-stone-900 transition-colors">À propos</Link>
          <Link href="/politique-de-confidentialite" className="hover:text-stone-900 transition-colors">Confidentialité</Link>
          <Link href="/cgv" className="hover:text-stone-900 transition-colors">CGV</Link>
          <a href="mailto:contact@kyber-security.fr" className="hover:text-stone-900 transition-colors">
            contact@kyber-security.fr
          </a>
        </div>
      </div>
    </footer>
  );
}
