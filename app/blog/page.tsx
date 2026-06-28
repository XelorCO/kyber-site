import { Metadata } from 'next';
import Link from 'next/link';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';

export const metadata: Metadata = {
  title: { absolute: 'Blog Kyber | Cryptographie post-quantique' },
  description:
    'Analyses sur la cryptographie post-quantique, la sécurité des mots de passe et la souveraineté numérique. Par Kyber Security, logiciel français.',
  keywords: [
    'blog cryptographie post-quantique',
    'sécurité mots de passe',
    'kyber security blog',
    'ordinateur quantique données',
    'protection données personnelles',
    'souveraineté numérique',
    'ANSSI post-quantique',
    'harvest now decrypt later',
  ],
  alternates: {
    canonical: 'https://kyber-security.fr/blog',
  },
  openGraph: {
    title: 'Blog Kyber | Cryptographie post-quantique',
    description: 'Analyses sur la cryptographie post-quantique, sécurité des mots de passe et souveraineté numérique. Par Kyber Security.',
    url: 'https://kyber-security.fr/blog',
    siteName: 'Kyber Security',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Blog Kyber Security' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Kyber | Cryptographie post-quantique',
    description: 'Analyses sur la cryptographie post-quantique, sécurité des mots de passe et souveraineté numérique.',
    images: ['/opengraph-image'],
  },
};

const articles = [
  {
    slug: 'meilleur-gestionnaire-mots-de-passe-rgpd-france-2026',
    title: 'Meilleur gestionnaire de mots de passe RGPD France 2026',
    excerpt:
      'Comparatif complet des gestionnaires de mots de passe conformes RGPD en France : Kyber, KeePass, Bitwarden, 1Password. CLOUD Act, souveraineté numérique — lequel choisir ?',
    date: '15 juin 2026',
    readTime: '10 min',
    category: 'Comparatif',
    categoryColor: 'text-green-700 bg-green-50 border-green-200',
    featured: true,
  },
  {
    slug: 'keepass-alternative-post-quantique',
    title: 'KeePass alternative post-quantique 2026 : pourquoi migrer vers Kyber',
    excerpt:
      "KeePass est solide mais AES-256 seul ne résiste pas aux attaques quantiques. Guide de migration KeePass → Kyber en 5 minutes avec import CSV.",
    date: '15 juin 2026',
    readTime: '9 min',
    category: 'Comparatif',
    categoryColor: 'text-cyan-700 bg-cyan-50 border-cyan-200',
    featured: false,
  },
  {
    slug: 'kyber-local-vs-cloud',
    title: 'Kyber local vs Kyber cloud : lequel vous protège vraiment ?',
    excerpt:
      'Keeper Security a intégré Kyber1024 dans son cloud en mars 2026. Mais que signifie réellement "chiffrement post-quantique dans le cloud" ? Et pourquoi le stockage local change tout.',
    date: '8 juin 2026',
    readTime: '8 min',
    category: 'Analyse',
    categoryColor: 'text-blue-700 bg-blue-50 border-blue-200',
    featured: false,
  },
  {
    slug: 'cryptographie-post-quantique',
    title: "Qu'est-ce que la cryptographie post-quantique ?",
    excerpt:
      "Algorithme de Shor, menace quantique sur RSA et ECDSA, standards NIST 2024 (ML-KEM, Dilithium). Tout comprendre sur la cryptographie post-quantique en 10 minutes.",
    date: '9 juin 2026',
    readTime: '10 min',
    category: 'Éducation',
    categoryColor: 'text-rose-700 bg-rose-50 border-rose-200',
    featured: false,
  },
  {
    slug: 'argon2id-vs-pbkdf2',
    title: 'Argon2id vs PBKDF2 vs bcrypt : quel est le meilleur KDF ?',
    excerpt:
      "Analyse comparative des algorithmes de dérivation de clé les plus utilisés. Résistance GPU, ASIC, recommandations OWASP 2026 — et pourquoi Argon2id gagne.",
    date: '9 juin 2026',
    readTime: '9 min',
    category: 'Technique',
    categoryColor: 'text-cyan-700 bg-cyan-50 border-cyan-200',
    featured: false,
  },
  {
    slug: 'ordinateurs-quantiques-mots-de-passe',
    title: 'Faut-il avoir peur des ordinateurs quantiques pour ses mots de passe ?',
    excerpt:
      "Timeline réaliste du Q-day, menace harvest-now-decrypt-later déjà active, et ce que vous pouvez faire dès aujourd'hui. Réponses aux objections courantes.",
    date: '9 juin 2026',
    readTime: '8 min',
    category: 'Sécurité',
    categoryColor: 'text-red-700 bg-red-50 border-red-200',
    featured: false,
  },
];

const comingSoon: { title: string; desc: string; category: string }[] = [];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#faf8f6] text-stone-900 overflow-x-hidden">
      <NavHeader />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">

          {/* ── HERO ── */}
          <div className="py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900">
              Blog{' '}
              <span className="bg-gradient-to-r from-blue-500 via-rose-400 to-amber-400 bg-clip-text text-transparent">
                Kyber Security
              </span>
            </h1>
            <p className="text-lg text-stone-500">
              Analyses, explications et actualités sur la cryptographie post-quantique et la sécurité des données.
            </p>
          </div>

          {/* ── ARTICLE VEDETTE ── */}
          {articles.filter((a) => a.featured).map((article) => (
            <section key={article.slug} className="mb-12">
              <Link href={`/blog/${article.slug}`} className="group block">
                <div className="bg-gradient-to-br from-blue-50 to-rose-50 border border-blue-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-md transition-all shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full border ${article.categoryColor}`}>
                      {article.category}
                    </span>
                    <span className="text-stone-400 text-xs">À la une</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-blue-600 transition-colors text-stone-900">
                    {article.title}
                  </h2>
                  <p className="text-stone-500 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-stone-400">
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime} de lecture</span>
                    </div>
                    <span className="text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors">
                      Lire l&apos;article →
                    </span>
                  </div>
                </div>
              </Link>
            </section>
          ))}

          {/* ── AUTRES ARTICLES ── */}
          {articles.filter((a) => !a.featured).length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold mb-6 text-stone-700">Tous les articles</h2>
              <div className="space-y-4">
                {articles.filter((a) => !a.featured).map((article) => (
                  <Link key={article.slug} href={`/blog/${article.slug}`} className="group block">
                    <div className="bg-white border border-stone-400 rounded-xl p-5 hover:border-stone-500 hover:shadow-md transition-all shadow-sm">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${article.categoryColor}`}>
                              {article.category}
                            </span>
                          </div>
                          <h3 className="font-semibold mb-1 group-hover:text-blue-600 transition-colors text-stone-900">
                            {article.title}
                          </h3>
                          <p className="text-stone-400 text-sm line-clamp-2">{article.excerpt}</p>
                          <div className="flex items-center gap-3 mt-2 text-xs text-stone-400">
                            <span>{article.date}</span>
                            <span>·</span>
                            <span>{article.readTime} de lecture</span>
                          </div>
                        </div>
                        <span className="text-stone-400 group-hover:text-blue-500 transition-colors flex-shrink-0 mt-1 text-sm">→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* ── ARTICLES À VENIR ── */}
          {comingSoon.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-6 text-stone-700">Prochains articles</h2>
              <div className="space-y-4">
                {comingSoon.map((a) => (
                  <div key={a.title} className="bg-white border border-stone-400 rounded-xl p-5 opacity-60 shadow-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-xs text-stone-400 border border-stone-300 px-2 py-0.5 rounded-full mb-2 inline-block">
                          {a.category}
                        </span>
                        <h3 className="font-semibold mb-1 text-stone-900">{a.title}</h3>
                        <p className="text-stone-400 text-sm">{a.desc}</p>
                      </div>
                      <span className="text-xs text-stone-400 flex-shrink-0 mt-1">À venir</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>
      </main>

      <NavFooter />
    </div>
  );
}
