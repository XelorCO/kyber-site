import { Metadata } from 'next';
import Link from 'next/link';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';

export const metadata: Metadata = {
  title: { absolute: 'À propos / Enzo Paccard | Kyber Security' },
  description:
    'Kyber Security est développé par Enzo Paccard, pentesteur et développeur spécialisé en cybersécurité. Découvrez la mission, l\'architecture technique et les valeurs derrière Kyber.',
  keywords: [
    'enzo paccard',
    'kyber security fondateur',
    'pentesteur français',
    'développeur cybersécurité',
    'made in france cybersécurité',
    'gestionnaire mots de passe français',
  ],
  alternates: {
    canonical: 'https://kyber-security.fr/a-propos',
  },
  openGraph: {
    title: 'À propos / Enzo Paccard | Kyber Security',
    description: 'Kyber Security est développé par Enzo Paccard, pentesteur et développeur spécialisé en cybersécurité post-quantique.',
    url: 'https://kyber-security.fr/a-propos',
    siteName: 'Kyber Security',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      name: 'À propos de Kyber Security',
      url: 'https://kyber-security.fr/a-propos',
      inLanguage: 'fr-FR',
      about: { '@id': 'https://kyber-security.fr/#person-enzo-paccard' },
    },
    {
      '@type': 'Person',
      '@id': 'https://kyber-security.fr/#person-enzo-paccard',
      name: 'Enzo Paccard',
      jobTitle: 'Pentesteur / Fondateur',
      description:
        'Pentesteur et développeur spécialisé en cybersécurité, créateur de Kyber Security, gestionnaire de mots de passe post-quantique 100% local.',
      url: 'https://kyber-security.fr/a-propos',
      sameAs: ['https://fr.linkedin.com/in/enzo-paccard-7394a52b1'],
      worksFor: { '@type': 'Organization', name: 'Kyber Security', url: 'https://kyber-security.fr' },
      knowsAbout: [
        'Cryptographie post-quantique',
        'Tests de pénétration',
        'Sécurité applicative',
        'Rust',
        'ML-KEM / Kyber1024',
      ],
      nationality: { '@type': 'Country', name: 'France' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://kyber-security.fr' },
        { '@type': 'ListItem', position: 2, name: 'À propos', item: 'https://kyber-security.fr/a-propos' },
      ],
    },
  ],
};

export default function PageAPropos() {
  return (
    <div className="min-h-screen bg-[#0e1015] text-stone-100 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <NavHeader />

      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">

          {/* ── HERO ── */}
          <section className="py-16">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
              {/* Photo placeholder / remplacer par <Image> quand disponible */}
              <div className="flex-shrink-0 w-36 h-36 rounded-2xl bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border border-stone-800 flex items-center justify-center text-5xl shadow-sm">
                EP
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-3xl md:text-4xl font-bold mb-2 text-stone-100">Enzo Paccard</h1>
                <p className="text-blue-400 font-medium mb-3">Pentesteur · Développeur cybersécurité · Made in France</p>
                <p className="text-stone-400 text-sm leading-relaxed mb-4">
                  Créateur de Kyber Security, gestionnaire de mots de passe post-quantique 100% local.
                  Passionné par la cryptographie appliquée et la sécurité offensive.
                </p>
                <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                  <a
                    href="https://fr.linkedin.com/in/enzo-paccard-7394a52b1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-stone-700 hover:border-blue-400 px-4 py-2 rounded-lg text-sm text-stone-300 hover:text-blue-400 transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href="mailto:contact@kyber-security.fr"
                    className="inline-flex items-center gap-2 border border-stone-700 hover:border-blue-400 px-4 py-2 rounded-lg text-sm text-stone-300 hover:text-blue-400 transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    contact@kyber-security.fr
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* ── MISSION ── */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-stone-100">Pourquoi j&apos;ai créé Kyber</h2>
            <div className="prose prose-stone max-w-none text-stone-400 leading-relaxed space-y-4">
              <p>
                En tant que pentesteur, j&apos;ai passé des années à exploiter les failles de gestionnaires de mots de passe cloud
                lors de missions d&apos;audit. Le constat est sans appel : quand un coffre est stocké sur un serveur tiers, il peut être
                volé / chiffré, certes, mais exposé à une attaque différée.
              </p>
              <p>
                En 2022, la brèche LastPass a confirmé ce que je savais depuis longtemps : des millions de coffres chiffrés
                sont maintenant en possession d&apos;attaquants, attendant patiemment d&apos;être déchiffrés au fur et à mesure que la
                puissance de calcul augmente.
              </p>
              <p>
                J&apos;ai créé Kyber avec une seule règle : <strong className="text-stone-100">aucune donnée ne quitte votre machine</strong>.
                Pas de compte, pas de serveur, pas de synchronisation cloud. Et une cryptographie post-quantique réelle
                / Kyber1024 standardisé par le NIST en 2024 / pour anticiper les ordinateurs quantiques d&apos;aujourd&apos;hui et de demain.
              </p>
            </div>
          </section>

          {/* ── STACK TECHNIQUE ── */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-stone-100">Architecture technique</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Rust + Tauri 2',
                  desc: 'L\'application desktop est écrite en Rust pour la sécurité mémoire et les performances. Tauri 2 assure le packaging natif sur Windows et Linux.',
                  color: 'bg-amber-950/50 border-amber-800',
                },
                {
                  title: 'Kyber1024 (ML-KEM)',
                  desc: 'Standard NIST FIPS 203 / résistant aux algorithmes de Shor et Grover. Utilisé dans le vrai flux de dérivation de clé de chaque coffre.',
                  color: 'bg-indigo-950/50 border-indigo-800',
                },
                {
                  title: 'Argon2id',
                  desc: 'Fonction de dérivation de clé lauréate PHC (Password Hashing Competition). 64 MB de RAM, résistante aux GPU farms et ASIC.',
                  color: 'bg-blue-950/50 border-blue-800',
                },
                {
                  title: 'AES-256-GCM',
                  desc: 'Chiffrement authentifié pour chaque coffre et chaque fichier. Le tag GCM détecte toute modification du fichier .vault.',
                  color: 'bg-green-950/50 border-green-800',
                },
              ].map((item) => (
                <div key={item.title} className={`${item.color} border rounded-xl p-5`}>
                  <h3 className="font-semibold text-stone-100 mb-2 font-mono text-sm">{item.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-stone-400">
              Le code source sera publié sur GitHub avec une licence{' '}
              <strong className="text-stone-300">Business Source License 1.1</strong> / auditable par la communauté cyber,
              utilisable librement à titre personnel, sans possibilité de revente commerciale sans accord.
            </p>
          </section>

          {/* ── PARCOURS ── */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-stone-100">Parcours</h2>
            <div className="space-y-4">
              {[
                {
                  period: '2024 / présent',
                  title: 'Fondateur / Kyber Security',
                  desc: 'Conception et développement du premier gestionnaire de mots de passe post-quantique 100% local made in France.',
                },
                {
                  period: '2022 / présent',
                  title: 'Solutions IT & automatisations IA / Softpac.fr',
                  desc: 'J\'accompagne les PME et ETI françaises en trouvant des solutions informatiques et des automatisations IA sur mesure, toujours alliées à la cybersécurité pour rester protégé.',
                },
                {
                  period: 'Formation',
                  title: 'Cybersécurité & développement',
                  desc: 'Spécialisation en sécurité offensive et cryptographie appliquée. Pratique régulière CTF (Capture The Flag).',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 bg-[#151922] border border-stone-800 rounded-xl p-5 shadow-sm">
                  <div className="flex-shrink-0 text-xs text-stone-500 font-mono pt-0.5 w-28">{item.period}</div>
                  <div>
                    <div className="font-semibold text-stone-100 mb-1">{item.title}</div>
                    <div className="text-stone-400 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── ENTITÉ LÉGALE ── */}
          <section className="mb-12 bg-stone-800 border border-stone-700 rounded-2xl p-6 text-sm text-stone-400">
            <h2 className="font-semibold text-stone-100 mb-3">Entité légale</h2>
            <div className="space-y-1.5">
              <div><span className="text-stone-400">Responsable :</span> <span className="text-stone-200">Enzo Paccard</span></div>
              <div><span className="text-stone-400">Structure :</span> <span className="text-stone-200">Softpac.fr (auto-entrepreneur)</span></div>
              <div><span className="text-stone-400">SIRET :</span> <span className="font-mono text-stone-200">94467475300016</span></div>
              <div><span className="text-stone-400">Contact :</span>{' '}
                <a href="mailto:contact@kyber-security.fr" className="text-blue-400 hover:text-blue-300 transition-colors">
                  contact@kyber-security.fr
                </a>
              </div>
              <div><span className="text-stone-400">Pays :</span> <span className="text-stone-200">France</span></div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="text-center py-8">
            <h2 className="text-xl font-bold mb-3 text-stone-100">Essayez Kyber gratuitement</h2>
            <p className="text-stone-400 text-sm mb-6">10 mots de passe, chiffrement Kyber1024 complet, aucune CB requise.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/telechargement"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all shadow-md"
              >
                Télécharger Kyber
              </Link>
              <Link
                href="/chiffrement-kyber1024"
                className="border border-stone-700 hover:border-stone-700 px-6 py-3 rounded-xl font-semibold text-sm text-stone-300 transition-all"
              >
                Architecture crypto →
              </Link>
            </div>
          </section>

        </div>
      </main>

      <NavFooter />
    </div>
  );
}
