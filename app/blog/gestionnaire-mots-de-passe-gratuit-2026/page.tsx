import { Metadata } from 'next';
import Link from 'next/link';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';

export const metadata: Metadata = {
  title: { absolute: 'Gestionnaire de mots de passe gratuit 2026 : lequel choisir vraiment ?' },
  description:
    "Bitwarden, KeePassXC, Proton Pass, coffre du navigateur ou Kyber : comparatif honnête des gestionnaires de mots de passe gratuits en 2026, avec ce que chaque offre gratuite cache réellement.",
  keywords: [
    'gestionnaire de mots de passe gratuit',
    'meilleur gestionnaire mot de passe gratuit 2026',
    'coffre fort mot de passe gratuit',
    'bitwarden gratuit',
    'keepass gratuit',
    'gestionnaire mots de passe gratuit français',
    'gestionnaire mot de passe sans abonnement',
  ],
  alternates: {
    canonical: 'https://kyber-security.fr/blog/gestionnaire-mots-de-passe-gratuit-2026',
  },
  openGraph: {
    title: 'Gestionnaire de mots de passe gratuit 2026 : lequel choisir vraiment ?',
    description:
      "Comparatif honnête des offres gratuites : Bitwarden, KeePassXC, Proton Pass, navigateur, Kyber. Ce que « gratuit » veut dire dans chaque cas.",
    url: 'https://kyber-security.fr/blog/gestionnaire-mots-de-passe-gratuit-2026',
    siteName: 'Kyber Security',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gestionnaire de mots de passe gratuit 2026 : lequel choisir vraiment ?',
    description: 'Comparatif honnête des offres gratuites, sans faire semblant que la nôtre gagne partout.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Gestionnaire de mots de passe gratuit 2026 : lequel choisir vraiment ?',
  description:
    "Comparatif des gestionnaires de mots de passe gratuits en 2026 : Bitwarden, KeePassXC, Proton Pass, coffre du navigateur et Kyber, avec les limites réelles de chaque offre gratuite.",
  datePublished: '2026-08-19',
  dateModified: '2026-08-19',
  author: { '@type': 'Person', name: 'Enzo Paccard', url: 'https://kyber-security.fr/a-propos' },
  publisher: { '@type': 'Organization', name: 'Kyber Security', url: 'https://kyber-security.fr' },
  url: 'https://kyber-security.fr/blog/gestionnaire-mots-de-passe-gratuit-2026',
  inLanguage: 'fr-FR',
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://kyber-security.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://kyber-security.fr/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Gestionnaire de mots de passe gratuit 2026',
      item: 'https://kyber-security.fr/blog/gestionnaire-mots-de-passe-gratuit-2026',
    },
  ],
};

const faq = [
  {
    q: 'Un gestionnaire de mots de passe gratuit est-il vraiment sûr ?',
    a: "Oui, à condition de choisir un produit dont le modèle économique est clair. Un logiciel libre financé par ses versions payantes ou par des dons est fiable. Une application gratuite d'un éditeur qu'on ne connaît pas, sans code auditable ni modèle de revenus visible, l'est beaucoup moins : la question à se poser est toujours « qui paie, et avec quoi ».",
  },
  {
    q: 'Quel est le meilleur gestionnaire de mots de passe gratuit en 2026 ?',
    a: "Si la synchronisation cloud entre plusieurs appareils est votre priorité, Bitwarden reste l'offre gratuite la plus complète du marché. Si vous voulez que vos mots de passe ne quittent jamais votre machine, le choix se fait entre KeePassXC, austère mais éprouvé, et Kyber, dont la version gratuite couvre 10 mots de passe avec une interface moderne et un chiffrement post-quantique.",
  },
  {
    q: 'Pourquoi Kyber limite-t-il sa version gratuite à 10 mots de passe ?',
    a: "Parce que Kyber est développé par une personne, sans levée de fonds ni revente de données. La version gratuite existe pour que vous puissiez vraiment tester le logiciel sur vos comptes principaux avant d'acheter, pas pour faire semblant d'être illimitée. Au delà, la licence Pro est un paiement unique de 29 €, sans abonnement.",
  },
  {
    q: 'Le gestionnaire intégré à Chrome ou Edge suffit-il ?',
    a: "Il est gratuit et pratique, mais vos identifiants sont liés à votre compte Google ou Microsoft, donc protégés par ce compte et hébergés hors d'Europe. Il ne couvre pas non plus les mots de passe hors navigateur, et le déverrouillage automatique fait que quiconque accède à votre session accède à vos comptes.",
  },
  {
    q: 'Peut-on migrer d\'un gestionnaire gratuit à un autre ?',
    a: "Oui. Tous les gestionnaires sérieux exportent en CSV et importent le CSV des autres. La migration prend quelques minutes. Pensez simplement à supprimer le fichier CSV exporté aussitôt l'import terminé : il contient tous vos mots de passe en clair.",
  },
];

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function ArticleGestionnaireGratuit() {
  return (
    <div className="min-h-screen bg-[#0e1015] text-stone-100 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, breadcrumbLd, faqLd]) }} />
      <NavHeader />

      <main className="pt-24 pb-16">
        <article className="max-w-3xl mx-auto px-6">

          {/* ── HEADER ── */}
          <header className="py-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium px-3 py-1 rounded-full border text-indigo-300 bg-indigo-950/50 border-indigo-800">
                Comparatif
              </span>
              <span className="text-stone-500 text-xs">19 août 2026 · 9 min de lecture</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-stone-100 leading-tight">
              Gestionnaire de mots de passe gratuit 2026 : lequel choisir vraiment ?
            </h1>
            <p className="text-lg text-stone-400 leading-relaxed">
              Tous les gestionnaires ont une offre gratuite, et aucune n&apos;est gratuite pour les mêmes raisons.
              Comparatif sans complaisance / y compris pour la nôtre.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-stone-400">
              <span>Par</span>
              <Link href="/a-propos" className="font-medium text-stone-100 hover:text-blue-400 transition-colors">
                Enzo Paccard
              </Link>
              <span>·</span>
              <span>Fondateur de Kyber Security</span>
            </div>
          </header>

          {/* ── CONTENU ── */}
          <div className="prose prose-stone max-w-none space-y-10 text-stone-300 leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">La vraie question : qui paie ?</h2>
              <p>
                Un gestionnaire de mots de passe est un logiciel critique. Il détient la totalité de vos accès :
                banque, messagerie, impôts, comptes professionnels. Avant de regarder les fonctionnalités
                d&apos;une offre gratuite, il faut comprendre comment son éditeur gagne de l&apos;argent, parce que
                c&apos;est ce modèle qui déterminera dans deux ans si le produit reste sûr, s&apos;il est vendu, ou
                si la version gratuite est brutalement fermée.
              </p>
              <p>
                Trois modèles cohabitent en 2026, et ils n&apos;ont pas les mêmes conséquences pour vous.
              </p>
              <div className="grid sm:grid-cols-3 gap-3 not-prose">
                {[
                  { t: 'Freemium cloud', d: 'Le gratuit sert d\'entonnoir vers l\'abonnement. Le service tourne sur les serveurs de l\'éditeur, donc chaque utilisateur gratuit coûte de l\'argent : les limites se durcissent avec le temps.' },
                  { t: 'Logiciel libre', d: 'Financé par des dons, des contrats de support ou du bénévolat. Rien ne peut vous être retiré, mais l\'ergonomie et le rythme d\'évolution dépendent des contributeurs disponibles.' },
                  { t: 'Licence unique', d: 'Le gratuit est une démonstration bornée, l\'achat est ponctuel. Pas de coût serveur, donc pas d\'intérêt à durcir le gratuit avec le temps, mais pas d\'usage illimité sans payer.' },
                ].map(({ t, d }) => (
                  <div key={t} className="bg-[#151922] border border-stone-800 rounded-xl p-4">
                    <h3 className="font-semibold text-stone-100 text-sm mb-2">{t}</h3>
                    <p className="text-xs text-stone-400 leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-6">Comparatif des offres gratuites</h2>
              <div className="overflow-x-auto rounded-2xl border border-stone-800 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-stone-800 border-b border-stone-800">
                      <th className="text-left px-4 py-3 font-semibold text-stone-300">Solution</th>
                      <th className="text-left px-4 py-3 font-semibold text-stone-300">Ce que couvre le gratuit</th>
                      <th className="text-left px-4 py-3 font-semibold text-stone-300">Stockage</th>
                      <th className="text-left px-4 py-3 font-semibold text-stone-300">La limite réelle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Bitwarden', 'Mots de passe illimités, tous appareils', 'Cloud (États-Unis)', 'Partage et rapports de sécurité réservés au payant'],
                      ['KeePassXC', 'Tout, sans limite', 'Local (fichier .kdbx)', 'Synchronisation à monter soi-même, interface austère'],
                      ['Proton Pass', 'Usage personnel de base', 'Cloud (Suisse)', 'Alias et fonctions avancées derrière l\'abonnement'],
                      ['Coffre du navigateur', 'Mots de passe web uniquement', 'Cloud (compte Google / Microsoft)', 'Lié à votre session, rien hors du navigateur'],
                      ['Kyber', '10 mots de passe, toutes fonctions', 'Local (fichier .vault)', 'Au delà de 10 entrées, licence 29 € une fois'],
                    ].map(([sol, gratuit, stockage, limite]) => (
                      <tr key={sol} className={`border-b border-stone-800 last:border-0 ${sol === 'Kyber' ? 'bg-blue-950/30' : ''}`}>
                        <td className="px-4 py-2.5 font-medium text-stone-200 bg-stone-900">{sol}</td>
                        <td className="px-4 py-2.5 text-stone-400">{gratuit}</td>
                        <td className="px-4 py-2.5 text-stone-400">{stockage}</td>
                        <td className="px-4 py-2.5 text-stone-400">{limite}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone-500 mt-3">
                Les offres évoluent vite : Dashlane a supprimé son plan gratuit, plusieurs éditeurs ont augmenté
                leurs tarifs en 2025 et 2026. Vérifiez toujours les conditions au moment où vous vous inscrivez.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Disons le franchement : Bitwarden gratuit est très bon</h2>
              <p>
                Si votre besoin est « un coffre gratuit, synchronisé entre mon téléphone et mon ordinateur, sans
                rien configurer », Bitwarden reste en 2026 l&apos;offre gratuite la plus généreuse du marché, avec un
                code ouvert et des audits publiés. Le recommander n&apos;a rien de contradictoire avec la vente de
                Kyber : ce n&apos;est simplement pas le même compromis.
              </p>
              <div className="bg-[#151922] border border-stone-700 rounded-xl p-5">
                <h3 className="font-semibold text-stone-100 mb-2">Le compromis qu&apos;implique le cloud</h3>
                <p className="text-sm text-stone-400 leading-relaxed">
                  Un coffre synchronisé est un coffre copié sur des serveurs. Le contenu y est chiffré de bout en
                  bout, votre mot de passe maître ne quitte pas votre appareil, et c&apos;est du sérieux. Il reste
                  que ces serveurs constituent une cible permanente : la fuite LastPass de 2022 a montré que même
                  chiffrées, des archives dérobées permettent une attaque hors ligne, sans limite de tentatives,
                  contre chaque mot de passe maître. Votre sécurité se réduit alors à la force de ce seul secret.
                </p>
              </div>
              <p>
                C&apos;est exactement cette exposition que supprime un coffre local : il n&apos;y a pas de copie à
                dérober ailleurs que sur votre machine. Le sujet est développé dans{' '}
                <Link href="/blog/kyber-local-vs-cloud" className="text-blue-400 hover:text-blue-300 transition-colors">
                  coffre local ou cloud
                </Link>{' '}
                et dans notre{' '}
                <Link href="/blog/alternative-lastpass-gratuite" className="text-blue-400 hover:text-blue-300 transition-colors">
                  comparatif des alternatives à LastPass
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Comment choisir en trois questions</h2>
              <div className="space-y-3 not-prose">
                {[
                  {
                    q: 'Avez vous besoin de vos mots de passe sur mobile en permanence ?',
                    r: 'Si oui, il vous faut de la synchronisation : Bitwarden ou Proton Pass. Un coffre local ne couvre pas encore ce besoin chez nous, la version mobile de Kyber est sur la roadmap 2027.',
                  },
                  {
                    q: 'Êtes vous prêt à gérer un fichier vous même ?',
                    r: 'Si oui, KeePassXC ou Kyber conviennent. Vous sauvegardez le fichier de coffre comme n\'importe quel document important, sur un disque externe ou un NAS, et personne d\'autre n\'en détient de copie.',
                  },
                  {
                    q: 'Combien de comptes gérez vous réellement ?',
                    r: 'Les dix premiers comptes concentrent l\'essentiel du risque : messagerie, banque, impôts, réseaux sociaux principaux. C\'est le raisonnement derrière la version gratuite de Kyber, qui les couvre entièrement.',
                  },
                ].map(({ q, r }) => (
                  <div key={q} className="bg-[#151922] border border-stone-800 rounded-xl p-5">
                    <h3 className="font-semibold text-stone-100 mb-2 text-sm">{q}</h3>
                    <p className="text-sm text-stone-400 leading-relaxed">{r}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Ce que Kyber apporte que les autres n&apos;ont pas</h2>
              <p>
                Un point technique distingue Kyber de toutes les solutions citées : la chaîne de chiffrement intègre
                ML-KEM-1024, l&apos;algorithme post-quantique standardisé par le NIST sous la référence FIPS 203, en
                complément d&apos;AES-256-GCM et d&apos;Argon2id. Soyons précis sur ce que cela signifie, car le
                marketing raconte souvent n&apos;importe quoi sur ce sujet : AES-256 est déjà considéré comme
                résistant aux ordinateurs quantiques, et la protection principale de votre coffre reste la qualité
                de votre mot de passe maître. La couche post-quantique est une défense en profondeur, pas un
                bouclier magique.
              </p>
              <p>
                L&apos;autre différence est le modèle : paiement unique de 29 € au lieu d&apos;un abonnement, aucun
                compte à créer, et le fichier de coffre reste chez vous. Les détails techniques sont sur la page{' '}
                <Link href="/chiffrement-kyber1024" className="text-blue-400 hover:text-blue-300 transition-colors">
                  chiffrement Kyber1024
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-6">Questions fréquentes</h2>
              <div className="space-y-4">
                {faq.map(({ q, a }) => (
                  <details key={q} className="bg-[#151922] border border-stone-700 rounded-xl px-5 py-4 shadow-sm group">
                    <summary className="font-medium text-stone-100 cursor-pointer list-none flex items-center justify-between gap-3 text-sm">
                      {q}
                      <span className="text-stone-500 flex-shrink-0 group-open:rotate-180 transition-transform">↓</span>
                    </summary>
                    <p className="mt-3 text-stone-400 text-sm leading-relaxed">{a}</p>
                  </details>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Conclusion</h2>
              <p>
                Il n&apos;existe pas de meilleur gestionnaire gratuit dans l&apos;absolu, seulement un meilleur
                compromis pour votre usage. Si vous voulez de la synchronisation sans y penser, prenez Bitwarden.
                Si vous voulez que vos mots de passe restent sur votre disque et que rien ne dépende d&apos;un
                serveur, essayez Kyber sur vos dix comptes les plus sensibles / c&apos;est gratuit, sans compte, et
                cela vous dira en une soirée si ce modèle vous convient.
              </p>
            </section>

          </div>

          {/* ── CTA ── */}
          <div className="mt-16 bg-gradient-to-br from-blue-950/40 to-indigo-950/40 border border-blue-800 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold mb-3 text-stone-100">Essayez la version gratuite de Kyber</h2>
            <p className="text-stone-400 text-sm mb-6 max-w-md mx-auto">
              10 mots de passe, toutes les fonctionnalités, aucun compte à créer. Le coffre reste sur votre disque.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/telechargement"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all shadow-md"
              >
                Télécharger gratuitement
              </Link>
              <Link
                href="/generateur-mot-de-passe"
                className="border border-stone-700 hover:border-stone-600 px-6 py-3 rounded-xl font-semibold text-sm text-stone-300 transition-all"
              >
                Générer un mot de passe →
              </Link>
            </div>
          </div>

          {/* ── NAVIGATION BLOG ── */}
          <nav className="mt-12 flex items-center justify-between">
            <Link href="/blog" className="text-sm text-stone-400 hover:text-stone-100 transition-colors">
              ← Retour au blog
            </Link>
            <Link href="/blog/double-authentification-2fa" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              Le guide de la double authentification →
            </Link>
          </nav>

        </article>
      </main>

      <NavFooter />
    </div>
  );
}
