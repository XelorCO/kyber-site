import { Metadata } from 'next';
import Link from 'next/link';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';

export const metadata: Metadata = {
  title: { absolute: 'Passkeys : la fin des mots de passe ? Ce qu\'elles ne remplacent pas' },
  description:
    "Les passkeys remplacent-elles vraiment un gestionnaire de mots de passe ? Couverture réelle, dépendance à Apple ou Google, récupération de compte et résistance quantique : l'analyse complète en 2026.",
  keywords: [
    'passkeys',
    'passkey gestionnaire de mots de passe',
    'passkeys fin des mots de passe',
    'passkey vs mot de passe',
    'clé d\'accès windows',
    'passkeys inconvénients',
    'passkey post-quantique',
  ],
  alternates: {
    canonical: 'https://kyber-security.fr/blog/passkeys-vs-gestionnaire-mots-de-passe',
  },
  openGraph: {
    title: 'Passkeys : la fin des mots de passe ? Ce qu\'elles ne remplacent pas',
    description: "Couverture réelle, dépendance aux écosystèmes, récupération, résistance quantique : pourquoi les passkeys ne rendent pas un coffre-fort inutile.",
    url: 'https://kyber-security.fr/blog/passkeys-vs-gestionnaire-mots-de-passe',
    siteName: 'Kyber Security',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Passkeys : la fin des mots de passe ?',
    description: 'Ce que les passkeys résolvent vraiment, et les quatre choses qu\'elles ne remplacent pas.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Passkeys : la fin des mots de passe ? Ce qu\'elles ne remplacent pas',
  description: "Analyse des passkeys en 2026 : ce qu'elles résolvent réellement, leurs limites de couverture et d'écosystème, et leur exposition aux ordinateurs quantiques.",
  datePublished: '2026-08-09',
  dateModified: '2026-08-09',
  author: { '@type': 'Person', name: 'Enzo Paccard', url: 'https://kyber-security.fr/a-propos' },
  publisher: { '@type': 'Organization', name: 'Kyber Security', url: 'https://kyber-security.fr' },
  url: 'https://kyber-security.fr/blog/passkeys-vs-gestionnaire-mots-de-passe',
  inLanguage: 'fr-FR',
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://kyber-security.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://kyber-security.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Passkeys : la fin des mots de passe ?', item: 'https://kyber-security.fr/blog/passkeys-vs-gestionnaire-mots-de-passe' },
  ],
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Les passkeys remplacent-elles un gestionnaire de mots de passe ?',
      acceptedAnswer: { '@type': 'Answer', text: "Non, pas en 2026. Les passkeys ne fonctionnent que sur les sites qui les prennent en charge, et cette liste reste minoritaire. Vos comptes bancaires, administratifs, professionnels ou anciens continuent d'exiger un mot de passe. Un gestionnaire reste nécessaire pour cette majorité, ainsi que pour les codes de récupération, les secrets d'authentification à deux facteurs et les notes sécurisées." },
    },
    {
      '@type': 'Question',
      name: 'Où sont stockées les passkeys ?',
      acceptedAnswer: { '@type': 'Answer', text: "Par défaut dans le trousseau de votre écosystème : iCloud pour Apple, le gestionnaire de mots de passe Google sur Android et Chrome, ou le compte Microsoft sur Windows. Elles sont donc synchronisées sur des serveurs que vous ne contrôlez pas, ce qui recrée la dépendance au cloud que beaucoup cherchaient à éviter." },
    },
    {
      '@type': 'Question',
      name: 'Les passkeys résistent-elles aux ordinateurs quantiques ?',
      acceptedAnswer: { '@type': 'Answer', text: "Non. Les passkeys reposent sur la cryptographie à courbes elliptiques, principalement ECDSA P-256, qui est cassable par l'algorithme de Shor sur un ordinateur quantique suffisamment puissant. Le risque diffère cependant de celui d'un coffre chiffré : une signature ne peut pas être cassée rétroactivement, l'attaque suppose une machine opérationnelle au moment de l'usurpation." },
    },
    {
      '@type': 'Question',
      name: 'Que se passe-t-il si je perds l\'accès à mon compte Apple ou Google ?',
      acceptedAnswer: { '@type': 'Answer', text: "Vous perdez l'accès aux passkeys qui y étaient synchronisées. La récupération dépend entièrement des procédures de l'éditeur, sur lesquelles vous n'avez aucune prise. C'est la raison pour laquelle il reste indispensable de conserver ailleurs les codes de récupération de vos comptes critiques." },
    },
  ],
};

export default function ArticlePasskeys() {
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
                Analyse
              </span>
              <span className="text-stone-500 text-xs">9 août 2026 · 9 min de lecture</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-stone-100 leading-tight">
              Passkeys : la fin des mots de passe ? Ce qu&apos;elles ne remplacent pas
            </h1>
            <p className="text-lg text-stone-400 leading-relaxed">
              Apple, Google et Microsoft annoncent la disparition du mot de passe depuis trois ans.
              Les passkeys sont une vraie avancée / elles règlent le hameçonnage mieux que n&apos;importe
              quelle formation utilisateur. Mais elles ne vident pas votre coffre-fort, et quatre raisons
              expliquent pourquoi.
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

            {/* CE QU EST UNE PASSKEY */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Ce qu&apos;est réellement une passkey</h2>
              <p>
                Une passkey n&apos;est pas un mot de passe plus long. C&apos;est une paire de clés
                cryptographiques. La clé publique part chez le site, la clé privée reste sur votre appareil
                et n&apos;en sort jamais. Pour vous connecter, le site envoie un défi aléatoire, votre
                appareil le signe avec la clé privée, le site vérifie la signature avec la clé publique.
              </p>
              <p>
                La conséquence est majeure : <strong className="text-stone-100">il n&apos;y a plus de secret
                partagé à voler</strong>. Un site piraté ne livre que des clés publiques, inutiles seules.
                Et un faux site ne peut pas récupérer votre passkey, car la signature est liée au nom de
                domaine réel. C&apos;est ce qui rend les passkeys structurellement résistantes au
                hameçonnage, là où le meilleur mot de passe du monde reste recopiable sur une page imitée.
              </p>
              <div className="bg-emerald-950/50 border border-emerald-800 rounded-xl p-5">
                <h3 className="font-semibold text-emerald-200 mb-2">Soyons clairs : c&apos;est un vrai progrès</h3>
                <p className="text-emerald-300 text-sm">
                  Sur les sites qui les prennent en charge, les passkeys sont meilleures que les mots de
                  passe sur presque tous les plans. Rien de ce qui suit ne dit le contraire. La question
                  n&apos;est pas de savoir si elles sont bonnes, mais si elles suffisent.
                </p>
              </div>
            </section>

            {/* LIMITE 1 : COUVERTURE */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Limite 1 / la couverture reste minoritaire</h2>
              <p>
                Une passkey ne fonctionne que si le site l&apos;implémente. En 2026, les grandes plateformes
                l&apos;ont fait : Google, Apple, Microsoft, Amazon, PayPal, les principaux réseaux sociaux.
                Le reste de votre vie numérique, non.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Portails bancaires et assurances',
                  'Sites administratifs et impôts',
                  'Outils métier et intranets d\'entreprise',
                  'Boutiques en ligne de taille moyenne',
                  'Comptes créés il y a dix ans',
                  'Équipements réseau et interfaces d\'administration',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-sm text-stone-300 bg-[#151922] border border-stone-700 rounded-lg px-3 py-2">
                    <span className="text-amber-400 flex-shrink-0">✗</span>
                    {point}
                  </div>
                ))}
              </div>
              <p>
                Faites l&apos;exercice : comptez vos comptes, puis comptez ceux qui acceptent une passkey.
                Le rapport est rarement flatteur. Et la migration ne dépend pas de vous / elle dépend de
                chaque éditeur, dont beaucoup n&apos;ont aucune raison commerciale de se presser.
              </p>
            </section>

            {/* LIMITE 2 : ECOSYSTEME */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Limite 2 / vos clés vivent chez un tiers</h2>
              <p>
                La clé privée ne quitte pas l&apos;appareil, dit la théorie. En pratique, pour que vos
                passkeys vous suivent du téléphone au PC, elles sont synchronisées : trousseau iCloud chez
                Apple, gestionnaire Google sur Android et Chrome, compte Microsoft sur Windows.
              </p>
              <p>
                Autrement dit, le secret qui ouvre vos comptes est stocké chez la même entreprise qui
                détient votre messagerie, votre téléphone et votre système d&apos;exploitation. Pour qui
                cherchait à sortir du cloud, le gain est nul / on a simplement déplacé la dépendance, en
                la rendant plus difficile à quitter.
              </p>
              <div className="bg-[#151922] border border-stone-700 rounded-xl p-5">
                <h3 className="font-semibold text-stone-100 mb-2">Le verrou est plus fort qu&apos;avec un mot de passe</h3>
                <p className="text-sm text-stone-400">
                  Un mot de passe se copie, se note, se transfère d&apos;un outil à l&apos;autre. Une passkey
                  synchronisée dans un écosystème ne s&apos;exporte pas librement. Changer de téléphone entre
                  Android et iOS, ou quitter Chrome, redevient une opération pénible / exactement ce que
                  l&apos;interopérabilité annoncée devait éviter.
                </p>
              </div>
            </section>

            {/* LIMITE 3 : RECUPERATION */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Limite 3 / la récupération ne vous appartient plus</h2>
              <p>
                Perdez l&apos;accès à votre compte Apple, Google ou Microsoft, et vous perdez d&apos;un coup
                toutes les passkeys qui y étaient rattachées. La reprise en main dépend alors entièrement
                des procédures de l&apos;éditeur : formulaires automatisés, délais d&apos;attente, décisions
                sans recours réel.
              </p>
              <p>
                C&apos;est le paradoxe de la promesse « plus de mot de passe à retenir » : le mot de passe
                du compte central, lui, devient un point de défaillance unique. Et les codes de
                récupération que chaque service vous demande de conserver quelque part sont, eux, du texte
                brut à stocker en sécurité. Un coffre-fort, donc.
              </p>
            </section>

            {/* LIMITE 4 : LE RESTE */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Limite 4 / une passkey n&apos;ouvre qu&apos;une session</h2>
              <p>
                Un gestionnaire de mots de passe ne contient pas que des identifiants. Il contient tout ce
                qui doit rester secret et qu&apos;aucune passkey ne saura porter :
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Codes de récupération à usage unique',
                  'Secrets d\'authentification à deux facteurs',
                  'Clés de licence logicielles',
                  'Codes de carte bancaire et RIB',
                  'Phrases de récupération de portefeuilles',
                  'Notes sécurisées et documents chiffrés',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-sm text-stone-300 bg-[#151922] border border-stone-700 rounded-lg px-3 py-2">
                    <span className="text-blue-400 flex-shrink-0">◆</span>
                    {point}
                  </div>
                ))}
              </div>
              <p>
                Même dans un monde où chaque site accepterait les passkeys, cette liste resterait entière.
                Elle justifie à elle seule de conserver un coffre.
              </p>
            </section>

            {/* QUANTIQUE */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Le point que personne ne mentionne : les passkeys ne sont pas post-quantiques</h2>
              <p>
                Les passkeys reposent sur la norme WebAuthn, qui s&apos;appuie aujourd&apos;hui sur de la
                cryptographie asymétrique classique : ECDSA sur la courbe P-256 dans l&apos;immense majorité
                des cas, parfois EdDSA ou RSA. Ce sont précisément les familles que l&apos;algorithme de
                Shor casse sur un ordinateur quantique suffisamment puissant.
              </p>
              <p>
                Il faut être précis sur la nature du risque, parce que les deux situations ne se valent
                pas :
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-red-950/50 border border-red-800 rounded-xl p-5">
                  <h3 className="font-semibold text-red-200 mb-2">Données chiffrées volées aujourd&apos;hui</h3>
                  <p className="text-red-300 text-sm">
                    Le risque est <strong>rétroactif</strong>. Un coffre exfiltré en 2026 peut être conservé
                    puis déchiffré le jour où la machine existe. C&apos;est la logique « récolter maintenant,
                    déchiffrer plus tard ».
                  </p>
                </div>
                <div className="bg-amber-950/50 border border-amber-800 rounded-xl p-5">
                  <h3 className="font-semibold text-amber-200 mb-2">Signature d&apos;une passkey</h3>
                  <p className="text-amber-300 text-sm">
                    Le risque est <strong>futur, pas rétroactif</strong>. Personne ne rejouera vos
                    connexions passées. En revanche, à partir d&apos;une clé publique connue, une machine
                    opérationnelle permettrait de dériver la clé privée et de se faire passer pour vous.
                  </p>
                </div>
              </div>
              <p>
                Conclusion honnête : les passkeys sont moins exposées qu&apos;un coffre chiffré volé, mais
                elles ne sont pas « quantum-safe » pour autant, contrairement à ce que laisse parfois
                entendre la communication marketing autour du sujet. Les travaux de normalisation
                post-quantique pour WebAuthn existent, ils ne sont pas déployés.
              </p>
            </section>

            {/* COMPARATIF */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-6">Passkeys et coffre-fort local, côte à côte</h2>
              <div className="overflow-x-auto rounded-2xl border border-stone-800 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-stone-800 border-b border-stone-800">
                      <th className="text-left px-4 py-3 font-semibold text-stone-300">Critère</th>
                      <th className="text-left px-4 py-3 font-semibold text-stone-300">Passkeys</th>
                      <th className="text-left px-4 py-3 font-semibold text-stone-300 bg-blue-950/50">Coffre local Kyber</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Résistance au hameçonnage', 'Excellente (liée au domaine)', 'Dépend de la vigilance'],
                      ['Couverture des sites', 'Minoritaire en 2026', 'Universelle'],
                      ['Stockage du secret', 'Trousseau Apple / Google / Microsoft', 'Fichier .vault sur votre disque'],
                      ['Compte requis', 'Oui, celui de l\'écosystème', 'Aucun'],
                      ['Récupération', 'Procédure de l\'éditeur', 'Votre sauvegarde, votre responsabilité'],
                      ['Autres secrets (2FA, notes, licences)', 'Non', 'Oui'],
                      ['Cryptographie post-quantique', 'Non (ECDSA P-256)', 'AES-256 + Argon2id, ML-KEM en défense'],
                      ['Fonctionne hors ligne', 'Partiellement', 'Totalement'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-stone-800 last:border-0">
                        <td className="px-4 py-3 font-medium text-stone-300">{row[0]}</td>
                        <td className="px-4 py-3 text-stone-400">{row[1]}</td>
                        <td className="px-4 py-3 text-stone-200 bg-blue-950/30">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* QUOI FAIRE */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Ce qu&apos;il faut faire concrètement</h2>
              <p>
                La bonne posture n&apos;est pas de choisir un camp. Les deux outils répondent à des
                problèmes différents et se complètent bien.
              </p>
              <div className="space-y-3">
                {[
                  ['Activez les passkeys là où elles existent', 'Sur vos comptes les plus sensibles et les plus visés : messagerie principale, comptes financiers, réseaux sociaux. Le gain contre le hameçonnage est immédiat.'],
                  ['Gardez un mot de passe fort en secours', 'La plupart des sites conservent le mot de passe comme méthode de repli. Il reste une porte d\'entrée / il doit rester solide et unique.'],
                  ['Stockez ailleurs vos codes de récupération', 'C\'est le point aveugle des passkeys. Ces codes ne doivent pas dormir dans le même écosystème que les clés qu\'ils servent à récupérer.'],
                  ['Conservez un coffre pour tout le reste', 'Secrets 2FA, licences, notes, documents chiffrés, et les centaines de comptes qui n\'auront jamais de passkey.'],
                ].map(([titre, texte], i) => (
                  <div key={titre} className="flex gap-4 bg-[#151922] border border-stone-700 rounded-xl p-5">
                    <span className="text-blue-400 font-bold flex-shrink-0">{i + 1}</span>
                    <div>
                      <h3 className="font-semibold text-stone-100 mb-1">{titre}</h3>
                      <p className="text-sm text-stone-400">{texte}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CONCLUSION */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">En résumé</h2>
              <p>
                Les passkeys règlent élégamment le problème du secret partagé et du hameçonnage. Elles ne
                règlent ni la couverture, ni la dépendance aux grandes plateformes, ni la conservation des
                secrets qui ne sont pas des identifiants. Et elles n&apos;apportent, en l&apos;état, aucune
                réponse à l&apos;échéance quantique.
              </p>
              <p>
                Annoncer la mort du mot de passe fait un bon titre. Dans les faits, la période qui
                s&apos;ouvre est une longue cohabitation / et pendant cette période, savoir où vivent vos
                secrets compte davantage que la technologie employée pour les présenter.
                C&apos;est exactement le pari de <Link href="/gestionnaire-mots-de-passe-post-quantique" className="text-blue-400 hover:text-blue-300 underline">Kyber</Link> :
                un coffre qui reste sur votre disque, sans compte, avec du chiffrement dimensionné pour
                durer.
              </p>
            </section>

          </div>

          {/* ── CTA ── */}
          <div className="mt-16 bg-gradient-to-br from-blue-950/40 to-indigo-950/40 border border-blue-800 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold mb-3 text-stone-100">Gardez la main sur vos secrets</h2>
            <p className="text-stone-400 text-sm mb-6 max-w-md mx-auto">
              Gratuit jusqu&apos;à 10 mots de passe. Aucun compte requis. Le coffre reste sur votre disque.
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
                Comment Kyber chiffre vos données →
              </Link>
            </div>
          </div>

          {/* ── NAVIGATION BLOG ── */}
          <nav className="mt-12 flex items-center justify-between">
            <Link href="/blog" className="text-sm text-stone-400 hover:text-stone-100 transition-colors">
              ← Retour au blog
            </Link>
            <Link href="/blog/ordinateurs-quantiques-mots-de-passe" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              Ordinateurs quantiques et mots de passe →
            </Link>
          </nav>

        </article>
      </main>

      <NavFooter />
    </div>
  );
}
