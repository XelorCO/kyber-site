import { Metadata } from 'next';
import Link from 'next/link';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';

export const metadata: Metadata = {
  title: { absolute: 'KeePass alternative post-quantique 2026 : pourquoi migrer vers Kyber' },
  description:
    'Vous utilisez KeePass mais vous inquiétez des ordinateurs quantiques ? Découvrez pourquoi Kyber est la meilleure alternative à KeePass avec chiffrement post-quantique Kyber1024.',
  keywords: [
    'keepass alternative post-quantique',
    'alternative keepass 2026',
    'keepass vs kyber',
    'keepass post-quantique',
    'gestionnaire mots de passe post-quantique local',
    'migrer keepass kyber',
    'remplacer keepass',
    'keepass quantique',
    'meilleure alternative keepass',
    'keepass import migration',
  ],
  alternates: {
    canonical: 'https://kyber-security.fr/blog/keepass-alternative-post-quantique',
  },
  openGraph: {
    title: 'KeePass alternative post-quantique 2026 : pourquoi migrer vers Kyber',
    description: 'KeePass est solide, mais son chiffrement AES-256 est vulnérable aux algorithmes quantiques. Kyber est la prochaine étape.',
    url: 'https://kyber-security.fr/blog/keepass-alternative-post-quantique',
    siteName: 'Kyber Security',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KeePass alternative post-quantique 2026',
    description: 'KeePass est solide, mais sans protection post-quantique. Kyber est la prochaine étape.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'KeePass alternative post-quantique 2026 : pourquoi migrer vers Kyber',
  description: 'Analyse comparative entre KeePass et Kyber Security pour les utilisateurs soucieux de la cryptographie post-quantique.',
  datePublished: '2026-06-15',
  dateModified: '2026-06-15',
  author: { '@type': 'Person', name: 'Enzo Paccard', url: 'https://kyber-security.fr/a-propos' },
  publisher: { '@type': 'Organization', name: 'Kyber Security', url: 'https://kyber-security.fr' },
  url: 'https://kyber-security.fr/blog/keepass-alternative-post-quantique',
  inLanguage: 'fr-FR',
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://kyber-security.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://kyber-security.fr/blog' },
    { '@type': 'ListItem', position: 3, name: "KeePass alternative post-quantique 2026 : pourquoi migrer vers Kyber", item: 'https://kyber-security.fr/blog/keepass-alternative-post-quantique' },
  ],
};

export default function ArticleKeePass() {
  return (
    <div className="min-h-screen bg-[#0e1015] text-stone-100 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, breadcrumbLd]) }} />
      <NavHeader />

      <main className="pt-24 pb-16">
        <article className="max-w-3xl mx-auto px-6">

          {/* ── HEADER ── */}
          <header className="py-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium px-3 py-1 rounded-full border text-indigo-300 bg-indigo-950/50 border-indigo-800">
                Comparatif
              </span>
              <span className="text-stone-500 text-xs">15 juin 2026 · 9 min de lecture</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-stone-100 leading-tight">
              KeePass alternative post-quantique 2026 : pourquoi migrer vers Kyber
            </h1>
            <p className="text-lg text-stone-400 leading-relaxed">
              KeePass est l&apos;une des meilleures décisions que vous ayez pu prendre en matière de sécurité.
              Mais son chiffrement AES-256 avec PBKDF2 ne résistera pas aux ordinateurs quantiques.
              Voici pourquoi Kyber est la prochaine étape logique / et comment migrer sans perdre vos données.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-stone-400">
              <span>Par</span>
              <Link href="/a-propos" className="font-medium text-stone-100 hover:text-blue-400 transition-colors">
                Enzo Paccard
              </Link>
              <span>·</span>
              <span>Pentesteur / Fondateur de Kyber Security</span>
            </div>
          </header>

          {/* ── CONTENU ── */}
          <div className="prose prose-stone max-w-none space-y-10 text-stone-300 leading-relaxed">

            {/* HONNÊTETÉ */}
            <section className="bg-blue-950/50 border border-blue-800 rounded-2xl p-6">
              <p className="text-blue-300 font-medium mb-2">Avant de commencer : soyons honnêtes</p>
              <p className="text-blue-300 text-sm">
                Si vous utilisez KeePass, vous faites déjà partie des 5% d&apos;utilisateurs qui ont compris l&apos;intérêt
                du stockage local. Ce n&apos;est pas un article pour vous convaincre que KeePass est mauvais /
                il est excellent. C&apos;est un article sur ce qui manque à KeePass en 2026 : la résistance aux
                algorithmes quantiques.
              </p>
            </section>

            {/* CE QUE KEEPASS FAIT BIEN */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Ce que KeePass fait parfaitement bien</h2>
              <p>
                KeePass existe depuis 2003 et a été audité des dizaines de fois. Son format .kdbx (v4)
                utilise AES-256-CBC avec Argon2 pour la dérivation de clé. Le code est sous GPL, visible
                par tous, et vérifié par la communauté crypto internationale.
              </p>
              <p>
                <strong className="text-stone-100">Le stockage local est la bonne décision.</strong> En choisissant KeePass,
                vous avez écarté les risques de brèches serveur (LastPass 2022), de faillite de prestataire,
                et de surveillance cloud. Ces risques sont réels, et vous avez bien fait de les éviter.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Stockage local / aucun serveur impliqué',
                  'Open source GPL / audité extensivement',
                  'Format .kdbx standardisé',
                  'AES-256 + Argon2 (kdbx v4)',
                  'Multi-plateformes (via ports)',
                  'Plugins extensibles',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-sm text-stone-300 bg-green-950/50 border border-green-800 rounded-lg px-3 py-2">
                    <span className="text-green-400 flex-shrink-0">✓</span>
                    {point}
                  </div>
                ))}
              </div>
            </section>

            {/* LE PROBLÈME QUANTIQUE */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Le problème : AES-256 seul ne suffit plus</h2>
              <p>
                AES-256 est sûr contre les ordinateurs classiques. Grover&apos;s algorithm (quantique) peut en théorie
                réduire sa sécurité de 256 bits à 128 bits / ce qui reste élevé. Mais ce n&apos;est pas l&apos;AES qui
                est le maillon faible dans KeePass.
              </p>
              <p>
                Le vrai problème est la <strong className="text-stone-100">dérivation de clé basée sur un mot de passe humain</strong>.
                KeePass utilise Argon2 pour dériver la clé depuis votre mot de passe maître. Tant qu&apos;Argon2 tient,
                votre coffre est protégé. Mais si votre mot de passe maître est faible ou réutilisé,
                un ordinateur quantique suffirait à accélérer massivement le brute-force.
              </p>
              <div className="bg-amber-950/50 border border-amber-800 rounded-xl p-5">
                <h3 className="font-semibold text-amber-200 mb-2">La menace harvest-now-decrypt-later</h3>
                <p className="text-amber-300 text-sm">
                  Des acteurs étatiques copient des coffres chiffrés dès aujourd&apos;hui, en attendant d&apos;avoir
                  suffisamment de puissance quantique pour les déchiffrer plus tard. Si votre fichier .kdbx
                  est exposé une seule fois (USB perdue, backup cloud, PC volé), il pourrait être déchiffré
                  dans 5-15 ans. Pas hypothétique / <Link href="/blog/ordinateurs-quantiques-mots-de-passe" className="text-amber-300 underline">des programmes HNDL sont documentés</Link>.
                </p>
              </div>
              <p>
                Kyber Security résout ce problème en ajoutant <strong className="text-stone-100">Kyber1024 (ML-KEM FIPS 203)</strong>
                {' '}au flux de dérivation. L&apos;algorithme de Shor, qui casserait RSA et ECDSA, est <em>mathématiquement</em>
                {' '}sans effet sur les réseaux euclidiens (Module-LWE) qu&apos;utilise Kyber1024.
              </p>
            </section>

            {/* COMPARAISON TECHNIQUE */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-6">Comparaison technique : KeePass vs Kyber</h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-800 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-stone-800 border-b border-stone-800">
                      <th className="text-left px-4 py-3 font-semibold text-stone-300">Critère</th>
                      <th className="text-left px-4 py-3 font-semibold text-stone-300">KeePass (kdbx v4)</th>
                      <th className="text-left px-4 py-3 font-semibold text-stone-300 bg-blue-950/50">Kyber Security v2</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Stockage', '100% local (.kdbx)', '100% local (.vault)'],
                      ['KDF', 'Argon2d ou AES-KDF', 'Argon2id (PHC winner)'],
                      ['Chiffrement', 'AES-256-CBC', 'AES-256-GCM (authentifié)'],
                      ['Post-quantique', '✗ Non', '✓ Kyber1024 (NIST FIPS 203)'],
                      ['Protection HNDL', '✗ Partielle', '✓ Résistance totale'],
                      ['Format', 'kdbx (XML chiffré)', 'vault v2 (bincode chiffré)'],
                      ['Open source', '✓ GPL', 'BSL 1.1 (prévu)'],
                      ['Auto-remplissage', '✓ via plugins', '✓ natif (scanner)'],
                      ['Chiffrement fichiers', '✗ Non', '✓ Format .kyber (AES-GCM)'],
                      ['Interface', 'Windows native (vieillissante)', 'Tauri / moderne'],
                      ['Certifications', 'Aucune en cours', 'CSPN ANSSI / initié'],
                    ].map(([critere, keepass, kyber]) => (
                      <tr key={critere} className="border-b border-stone-800 last:border-0">
                        <td className="px-4 py-2.5 font-medium text-stone-300 bg-stone-900">{critere}</td>
                        <td className="px-4 py-2.5 text-stone-400">{keepass}</td>
                        <td className="px-4 py-2.5 text-stone-200 bg-blue-950/50">{kyber}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* MIGRATION */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Comment migrer de KeePass vers Kyber</h2>
              <p>
                La migration est simple grâce à l&apos;export CSV de KeePass et l&apos;import CSV de Kyber.
                Vous ne perdrez aucune entrée (titre, identifiant, URL, mot de passe, notes).
              </p>

              <div className="space-y-3 mt-4">
                {[
                  {
                    step: '1',
                    title: 'Exporter depuis KeePass',
                    desc: 'Dans KeePass : Fichier → Exporter → Format CSV. Cochez "Titre, Identifiant, Mot de passe, URL, Notes". Sauvegardez en local / ne mettez pas ce CSV dans le cloud.',
                  },
                  {
                    step: '2',
                    title: 'Installer Kyber',
                    desc: 'Téléchargez Kyber depuis kyber-security.fr/telechargement. Créez un nouveau coffre avec une passphrase forte (16+ caractères). La passphrase ne doit PAS être celle de KeePass.',
                  },
                  {
                    step: '3',
                    title: 'Importer le CSV dans Kyber',
                    desc: 'Dans Kyber : Paramètres → Importer CSV. Sélectionnez votre export KeePass. Tous vos mots de passe sont importés en quelques secondes.',
                  },
                  {
                    step: '4',
                    title: 'Vérifier et supprimer le CSV',
                    desc: 'Vérifiez que vos entrées sont bien présentes. Supprimez immédiatement le fichier CSV / il contient vos mots de passe en clair. Videz la corbeille.',
                  },
                  {
                    step: '5',
                    title: 'Passer Pro (optionnel)',
                    desc: "Si vous avez plus de 10 mots de passe, la version Kyber Pro (29 € licence à vie) lève la limite. L'import fonctionne même en gratuit / vous verrez juste un avertissement si vous dépassez 10.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 bg-[#151922] border border-stone-700 rounded-xl px-5 py-4 shadow-sm">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-semibold text-stone-100 mb-1">{item.title}</div>
                      <div className="text-stone-400 text-sm leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-amber-950/50 border border-amber-800 rounded-xl p-4 text-sm text-amber-300">
                <strong>À noter :</strong> L&apos;import .kdbx natif (sans passer par CSV) est sur la roadmap Kyber
                pour le T3 2026. En attendant, le CSV fonctionne parfaitement pour la migration.
              </div>
            </section>

            {/* FAQ MIGRATION */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-6">Questions fréquentes sur la migration</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'Puis-je garder KeePass en parallèle pendant la transition ?',
                    a: "Oui. Kyber et KeePass peuvent coexister. Prenez le temps de vous familiariser avec Kyber avant de désactiver KeePass. Il n'y a aucune urgence.",
                  },
                  {
                    q: 'Le format .kdbx sera-t-il directement supporté ?',
                    a: "L'import .kdbx natif est planifié pour le T3 2026. Le CSV intermédiaire fonctionne parfaitement et ne perd aucune donnée essentielle.",
                  },
                  {
                    q: 'Kyber est-il aussi stable que KeePass ?',
                    a: "KeePass existe depuis 2003 et a 20 ans de maturité. Kyber v1.0 est sorti en 2026. Si vous recherchez une stabilité absolue à long terme, gardez KeePass en backup pendant quelques mois.",
                  },
                  {
                    q: 'Puis-je utiliser Kyber sur Linux comme KeePass ?',
                    a: "Oui. Kyber est disponible en AppImage, .deb et .rpm pour Linux. Testé sur Ubuntu, Debian, Kali, Fedora.",
                  },
                ].map((faq) => (
                  <details key={faq.q} className="bg-[#151922] border border-stone-700 rounded-xl px-5 py-4 shadow-sm group">
                    <summary className="font-medium text-stone-100 cursor-pointer list-none flex items-center justify-between gap-3 text-sm">
                      {faq.q}
                      <span className="text-stone-500 flex-shrink-0 group-open:rotate-180 transition-transform">↓</span>
                    </summary>
                    <p className="mt-3 text-stone-400 text-sm leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* CONCLUSION */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Conclusion</h2>
              <p>
                KeePass est un excellent choix qui a prouvé sa valeur pendant 20 ans. Mais la menace
                quantique est réelle, documentée par le NIST, l&apos;ANSSI, et les agences de renseignement
                mondiales. En 2026, se préparer à la transition post-quantique n&apos;est plus optionnel pour
                les données sensibles.
              </p>
              <p>
                Kyber est conçu pour être <strong className="text-stone-100">la prochaine étape logique après KeePass</strong> :
                stockage local, conformité RGPD, mais avec Kyber1024 (NIST FIPS 203) intégré dès la dérivation
                de clé. La migration prend moins de 5 minutes depuis un export CSV.
              </p>
            </section>

          </div>

          {/* ── CTA ── */}
          <div className="mt-16 bg-gradient-to-br from-blue-950/40 to-indigo-950/40 border border-blue-800 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold mb-3 text-stone-100">Migrer de KeePass vers Kyber en 5 minutes</h2>
            <p className="text-stone-400 text-sm mb-6 max-w-md mx-auto">
              Téléchargez Kyber gratuitement. Importez votre CSV KeePass.
              Vos mots de passe sont protégés par Kyber1024.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/telechargement"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all shadow-md"
              >
                Télécharger Kyber gratuitement
              </Link>
              <Link
                href="/chiffrement-kyber1024"
                className="border border-stone-700 hover:border-stone-700 px-6 py-3 rounded-xl font-semibold text-sm text-stone-300 transition-all"
              >
                Architecture crypto →
              </Link>
            </div>
          </div>

          {/* ── NAVIGATION BLOG ── */}
          <nav className="mt-12 flex items-center justify-between">
            <Link href="/blog" className="text-sm text-stone-400 hover:text-stone-100 transition-colors">
              ← Retour au blog
            </Link>
            <Link href="/blog/meilleur-gestionnaire-mots-de-passe-rgpd-france-2026" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              Comparatif RGPD France 2026 →
            </Link>
          </nav>

        </article>
      </main>

      <NavFooter />
    </div>
  );
}
