import { Metadata } from 'next';
import Link from 'next/link';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';

export const metadata: Metadata = {
  title: 'Blog Kyber Security — Cryptographie post-quantique et sécurité des mots de passe',
  description:
    'Articles et analyses sur la cryptographie post-quantique, la sécurité des mots de passe, et la protection des données en 2026. Par Kyber Security.',
  keywords: [
    'blog cryptographie post-quantique',
    'sécurité mots de passe',
    'kyber security blog',
    'ordinateur quantique données',
    'protection données personnelles',
  ],
  alternates: {
    canonical: 'https://kyber-security.fr/blog',
  },
  openGraph: {
    title: 'Blog Kyber Security — Cryptographie post-quantique',
    description: 'Articles sur la cryptographie post-quantique, la sécurité des mots de passe et la souveraineté numérique.',
    url: 'https://kyber-security.fr/blog',
  },
};

const articles = [
  {
    slug: 'kyber-local-vs-cloud',
    title: 'Kyber local vs Kyber cloud : lequel vous protège vraiment ?',
    excerpt:
      'Keeper Security a intégré Kyber1024 dans son cloud en mars 2026. Mais que signifie réellement "chiffrement post-quantique dans le cloud" ? Et pourquoi le stockage local change tout.',
    date: '8 juin 2026',
    readTime: '8 min',
    category: 'Analyse',
    categoryColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    featured: true,
  },
];

const comingSoon = [
  {
    title: "Qu'est-ce que la cryptographie post-quantique ?",
    desc: 'Une explication accessible du problème, de l\'algorithme de Shor, et des solutions standardisées par le NIST.',
    category: 'Éducation',
  },
  {
    title: 'Argon2id vs PBKDF2 vs bcrypt : quel est le meilleur KDF ?',
    desc: 'Analyse comparative des trois algorithmes de dérivation de clé les plus utilisés en 2026.',
    category: 'Technique',
  },
  {
    title: 'Faut-il avoir peur des ordinateurs quantiques pour ses mots de passe ?',
    desc: "Timeline réaliste du Q-day et ce que vous pouvez faire dès aujourd'hui pour vous préparer.",
    category: 'Sécurité',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#070711] text-white overflow-x-hidden">
      <NavHeader />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">

          {/* ── HERO ── */}
          <div className="py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Blog{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Kyber Security
              </span>
            </h1>
            <p className="text-lg text-slate-400">
              Analyses, explications et actualités sur la cryptographie post-quantique et la sécurité des données.
            </p>
          </div>

          {/* ── ARTICLE VEDETTE ── */}
          {articles.filter((a) => a.featured).map((article) => (
            <section key={article.slug} className="mb-12">
              <Link href={`/blog/${article.slug}`} className="group block">
                <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-2xl p-8 hover:border-blue-500/60 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full border ${article.categoryColor}`}>
                      {article.category}
                    </span>
                    <span className="text-slate-500 text-xs">Nouveau</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-blue-300 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime} de lecture</span>
                    </div>
                    <span className="text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                      Lire l&apos;article →
                    </span>
                  </div>
                </div>
              </Link>
            </section>
          ))}

          {/* ── ARTICLES À VENIR ── */}
          <section>
            <h2 className="text-xl font-semibold mb-6 text-slate-300">Prochains articles</h2>
            <div className="space-y-4">
              {comingSoon.map((a) => (
                <div key={a.title} className="bg-white/5 border border-white/10 rounded-xl p-5 opacity-60">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs text-slate-500 border border-white/10 px-2 py-0.5 rounded-full mb-2 inline-block">
                        {a.category}
                      </span>
                      <h3 className="font-semibold mb-1">{a.title}</h3>
                      <p className="text-slate-500 text-sm">{a.desc}</p>
                    </div>
                    <span className="text-xs text-slate-600 flex-shrink-0 mt-1">À venir</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA NEWSLETTER ── */}
          <section className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold mb-3">Rester informé</h2>
            <p className="text-slate-400 text-sm mb-6">
              Nouveaux articles sur la cryptographie post-quantique directement dans votre boîte mail.
              Pas de spam — juste du contenu technique de qualité.
            </p>
            <a
              href="mailto:contact@kyber-security.fr?subject=Newsletter Kyber Security"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-xl font-semibold transition-all text-sm"
            >
              S&apos;inscrire par email
            </a>
          </section>

        </div>
      </main>

      <NavFooter />
    </div>
  );
}
