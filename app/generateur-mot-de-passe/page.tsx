import { Metadata } from 'next';
import Link from 'next/link';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';
import PasswordGenerator from '@/components/PasswordGenerator';

const toolJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Générateur de mot de passe Kyber',
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'Any',
  browserRequirements: 'Navigateur moderne avec WebCrypto',
  url: 'https://kyber-security.fr/generateur-mot-de-passe',
  description:
    'Générateur de mots de passe et de phrases secrètes 100 % local : tirage cryptographique dans le navigateur, entropie réelle affichée, aucun envoi de données.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'fr-FR',
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://kyber-security.fr' },
    { '@type': 'ListItem', position: 2, name: 'Générateur de mot de passe', item: 'https://kyber-security.fr/generateur-mot-de-passe' },
  ],
};

export const metadata: Metadata = {
  title: { absolute: 'Générateur de mot de passe sécurisé (100 % local) | Kyber Security' },
  description:
    'Générez un mot de passe fort ou une phrase secrète en français, directement dans votre navigateur. Entropie réelle affichée, tirage cryptographique sans biais, aucune donnée envoyée. Gratuit et sans inscription.',
  keywords: [
    'générateur de mot de passe',
    'generateur mot de passe securise',
    'créer un mot de passe fort',
    'générateur de phrase secrète',
    'mot de passe aléatoire',
    'générateur mot de passe gratuit',
    'entropie mot de passe',
    'générateur mot de passe local',
  ],
  alternates: { canonical: 'https://kyber-security.fr/generateur-mot-de-passe' },
  openGraph: {
    title: 'Générateur de mot de passe sécurisé / 100 % local',
    description:
      'Mot de passe ou phrase secrète française, tirés par le générateur cryptographique de votre navigateur. Entropie réelle affichée, rien ne quitte votre machine.',
    url: 'https://kyber-security.fr/generateur-mot-de-passe',
    siteName: 'Kyber Security',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Générateur de mot de passe Kyber' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Générateur de mot de passe sécurisé / 100 % local',
    description: 'Entropie réelle affichée, tirage cryptographique, aucune donnée envoyée.',
    images: ['/opengraph-image'],
  },
};

const faq = [
  {
    q: 'Le mot de passe généré transite-t-il par un serveur ?',
    a: "Non. Le tirage se fait dans votre navigateur avec crypto.getRandomValues, l'interface de génération aléatoire cryptographique du système. Aucune requête réseau n'est émise pendant la génération : vous pouvez couper votre connexion internet une fois la page chargée, l'outil continue de fonctionner. Rien n'est journalisé ni stocké.",
  },
  {
    q: 'Qu\'est-ce que l\'entropie, et pourquoi l\'afficher ?',
    a: "L'entropie mesure en bits le nombre de tentatives nécessaires pour deviner un mot de passe par force brute. Chaque bit double la difficulté. Un mot de passe de 12 caractères tirés dans un alphabet de 90 symboles vaut environ 78 bits ; en dessous de 60 bits, un attaquant équipé de cartes graphiques modernes s'en sort en quelques jours. La plupart des indicateurs « faible / moyen / fort » sont arbitraires : nous affichons le calcul réel pour que vous puissiez le vérifier.",
  },
  {
    q: 'Faut-il préférer un mot de passe ou une phrase secrète ?',
    a: "Pour tout ce qui est stocké dans un gestionnaire, prenez un mot de passe long et aléatoire : vous n'aurez jamais à le retenir. Réservez la phrase secrète aux quelques secrets que vous devez taper de mémoire, en premier lieu le mot de passe maître de votre coffre et le mot de passe de votre boîte mail. Sept mots tirés au hasard dans notre liste de 1 303 mots dépassent 70 bits tout en restant mémorisables.",
  },
  {
    q: 'Le générateur exclut-il les caractères ambigus ?',
    a: "Par défaut oui : I, l, 1, O, 0 ainsi que les guillemets sont écartés, car ils provoquent des erreurs de saisie quand un mot de passe doit être recopié à la main ou dicté. Cela réduit légèrement l'alphabet, et l'entropie affichée en tient compte automatiquement.",
  },
  {
    q: 'Puis-je réutiliser un mot de passe généré sur plusieurs sites ?',
    a: "Non, jamais. La force d'un mot de passe ne protège pas contre le credential stuffing : si un site où vous êtes inscrit subit une fuite, la combinaison email plus mot de passe est immédiatement testée sur des centaines d'autres services. Un mot de passe unique par compte est la règle, et c'est précisément le rôle d'un gestionnaire.",
  },
  {
    q: 'Comment conserver le mot de passe généré ?',
    a: "Dans un gestionnaire de mots de passe. Kyber stocke le vôtre dans un fichier chiffré sur votre disque, avec Argon2id, une encapsulation post-quantique ML-KEM-1024 et AES-256-GCM, sans compte ni synchronisation cloud imposée. C&apos;est 100 % gratuit et open source.",
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const entropyRows: [string, string, string, string][] = [
  ['« Soleil2026! »', 'Motif humain classique', '~ 28 bits', 'Quelques secondes'],
  ['8 caractères aléatoires', 'Alphabet complet', '~ 52 bits', 'Environ 1 heure'],
  ['12 caractères aléatoires', 'Alphabet complet', '~ 78 bits', 'Des milliers d\'années'],
  ['16 caractères aléatoires', 'Alphabet complet', '~ 104 bits', 'Hors de portée'],
  ['5 mots tirés au hasard', 'Phrase secrète', '~ 50 bits', 'Environ 1 heure'],
  ['7 mots tirés au hasard', 'Phrase secrète', '~ 70 bits', 'Des centaines d\'années'],
];

export default function PageGenerateurMotDePasse() {
  return (
    <div className="min-h-screen bg-[#0e1015] text-stone-100 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([toolJsonLd, breadcrumbLd, faqJsonLd]) }} />
      <NavHeader />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">

          {/* ── HERO ── */}
          <div className="py-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-stone-100">
              Générateur de mot de passe{' '}
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                qui ne quitte pas votre navigateur
              </span>
            </h1>
            <p className="text-lg text-stone-400 max-w-2xl mx-auto">
              Mot de passe aléatoire ou phrase secrète en français, tirés par le générateur cryptographique de votre
              machine. L&apos;entropie réelle est affichée / pas un indicateur de couleur arbitraire.
            </p>
          </div>

          {/* ── OUTIL ── */}
          <PasswordGenerator />

          {/* ── POURQUOI LOCAL ── */}
          <section className="mt-20">
            <h2 className="text-2xl font-bold mb-6 text-center text-stone-100">
              Pourquoi un générateur en ligne pose problème
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  icon: '⚠︎',
                  title: 'Génération côté serveur',
                  desc: 'Beaucoup de générateurs web fabriquent le mot de passe sur leur serveur et vous le renvoient. Il a donc existé ailleurs que chez vous, et vous n\'avez aucun moyen de le vérifier.',
                },
                {
                  icon: '◆',
                  title: 'Aléa de mauvaise qualité',
                  desc: 'Un tirage basé sur Math.random n\'est pas cryptographique et reste prédictible. Ici, chaque caractère vient de crypto.getRandomValues, avec rejet du biais modulo.',
                },
                {
                  icon: '⬡',
                  title: 'Vérifiable par vous-même',
                  desc: 'Ouvrez l\'onglet Réseau de votre navigateur, coupez votre connexion : la page génère toujours. C\'est la seule preuve qui compte.',
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bg-[#151922] border border-stone-800 rounded-2xl p-6 shadow-sm">
                  <div className="text-2xl mb-3 text-blue-400">{icon}</div>
                  <h3 className="font-semibold mb-2 text-stone-100">{title}</h3>
                  <p className="text-sm text-stone-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── TABLEAU ENTROPIE ── */}
          <section className="mt-20">
            <h2 className="text-2xl font-bold mb-3 text-stone-100">Ce que vaut vraiment un mot de passe</h2>
            <p className="text-stone-400 mb-6 text-sm leading-relaxed">
              Estimations pour une attaque hors ligne à 10<sup>12</sup> essais par seconde, soit une machine équipée
              de plusieurs cartes graphiques face à un site qui aurait mal protégé ses hachages. Un service bien
              conçu est bien plus lent à attaquer / mais vous ne choisissez pas la qualité de sa protection.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-stone-800 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-stone-800 border-b border-stone-800">
                    <th className="text-left px-4 py-3 font-semibold text-stone-300">Mot de passe</th>
                    <th className="text-left px-4 py-3 font-semibold text-stone-300">Type</th>
                    <th className="text-left px-4 py-3 font-semibold text-stone-300">Entropie</th>
                    <th className="text-left px-4 py-3 font-semibold text-stone-300 bg-blue-950/50">Temps de cassage</th>
                  </tr>
                </thead>
                <tbody>
                  {entropyRows.map(([exemple, type, entropie, temps]) => (
                    <tr key={exemple} className="border-b border-stone-800 last:border-0">
                      <td className="px-4 py-2.5 font-mono text-xs text-stone-300 bg-stone-900">{exemple}</td>
                      <td className="px-4 py-2.5 text-stone-400">{type}</td>
                      <td className="px-4 py-2.5 text-stone-400 font-mono">{entropie}</td>
                      <td className="px-4 py-2.5 text-stone-200 bg-blue-950/50">{temps}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-stone-500 mt-4">
              La leçon tient en une ligne : la longueur bat la complexité. Remplacer un « o » par un « 0 » ajoute
              moins d&apos;un bit, ajouter quatre caractères aléatoires en ajoute environ vingt-six.
            </p>
          </section>

          {/* ── LES 3 REGLES ── */}
          <section className="mt-20">
            <h2 className="text-2xl font-bold mb-6 text-stone-100">Les trois règles qui comptent</h2>
            <div className="space-y-4">
              {[
                {
                  n: '1',
                  title: 'Long avant tout',
                  desc: 'Visez 16 caractères aléatoires minimum pour un compte stocké dans un gestionnaire, ou 6 à 7 mots pour une phrase que vous devez retenir. Les règles « une majuscule, un chiffre, un symbole » produisent surtout des mots de passe prévisibles.',
                },
                {
                  n: '2',
                  title: 'Unique par compte',
                  desc: 'Un mot de passe réutilisé transforme la fuite d\'un site quelconque en compromission de tous vos comptes. C\'est le scénario le plus courant, et le plus facile à éliminer.',
                },
                {
                  n: '3',
                  title: 'Stocké dans un coffre, pas dans un fichier',
                  desc: 'Un carnet, un fichier texte ou un tableur ne protègent rien. Un gestionnaire chiffre l\'ensemble sous un seul secret / le seul que vous ayez à mémoriser, et celui-là mérite une vraie phrase secrète.',
                },
              ].map(({ n, title, desc }) => (
                <div key={n} className="flex gap-4 bg-[#151922] border border-stone-800 rounded-2xl p-5">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center font-bold text-white text-sm">
                    {n}
                  </span>
                  <div>
                    <h3 className="font-semibold text-stone-100 mb-1">{title}</h3>
                    <p className="text-sm text-stone-400 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-stone-400 mt-6">
              Pour le détail du raisonnement, lisez notre guide{' '}
              <Link href="/blog/mot-de-passe-fort-2026" className="text-blue-400 hover:text-blue-300 transition-colors">
                comment créer un mot de passe fort en 2026
              </Link>
              .
            </p>
          </section>

          {/* ── FAQ ── */}
          <section className="mt-20">
            <h2 className="text-2xl font-bold mb-6 text-center text-stone-100">Questions fréquentes</h2>
            <div className="space-y-4">
              {faq.map(({ q, a }) => (
                <details key={q} className="group bg-[#151922] border border-stone-800 rounded-xl px-5 py-4 shadow-sm">
                  <summary className="font-medium text-stone-200 cursor-pointer list-none flex justify-between items-center gap-3">
                    {q}
                    <span className="text-stone-500 group-open:rotate-45 transition-transform text-lg leading-none flex-shrink-0">+</span>
                  </summary>
                  <p className="text-sm text-stone-400 leading-relaxed mt-3">{a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="mt-16 bg-gradient-to-b from-blue-950/40 to-indigo-950/40 border border-blue-800 rounded-2xl p-8 text-center shadow-sm">
            <h2 className="text-2xl font-bold mb-3 text-stone-100">Où ranger tout ça ?</h2>
            <p className="text-stone-400 mb-6 max-w-xl mx-auto">
              Générer est facile, retenir ne l&apos;est pas. Kyber garde vos mots de passe dans un coffre chiffré
              stocké sur votre disque / pas sur nos serveurs, puisque nous n&apos;en avons pas. Gratuit jusqu&apos;à
              100 % gratuit et open source, sans compte.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/telechargement"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 px-8 py-3.5 rounded-xl font-semibold transition-all text-sm text-white shadow-md"
              >
                Télécharger Kyber →
              </Link>
              <Link
                href="/chiffrer-fichier"
                className="border border-stone-700 hover:border-stone-600 px-8 py-3.5 rounded-xl font-semibold text-sm text-stone-300 transition-colors"
              >
                Chiffrer un fichier
              </Link>
            </div>
          </section>
        </div>
      </main>

      <NavFooter />
    </div>
  );
}
