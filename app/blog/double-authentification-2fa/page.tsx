import { Metadata } from 'next';
import Link from 'next/link';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';

export const metadata: Metadata = {
  title: { absolute: 'Double authentification (2FA) : le guide complet 2026' },
  description:
    "SMS, application TOTP, clé physique : quelle double authentification choisir en 2026, dans quel ordre l'activer, et pourquoi stocker vos codes 2FA dans votre gestionnaire de mots de passe annule le second facteur.",
  keywords: [
    'double authentification',
    '2fa',
    'authentification à deux facteurs',
    'code totp',
    'application authentificator',
    'sms 2fa sécurité',
    'clé de sécurité fido2',
    'codes de récupération',
  ],
  alternates: {
    canonical: 'https://kyber-security.fr/blog/double-authentification-2fa',
  },
  openGraph: {
    title: 'Double authentification (2FA) : le guide complet 2026',
    description:
      "Quelle méthode choisir, dans quel ordre activer la 2FA, et l'erreur très répandue qui transforme deux facteurs en un seul.",
    url: 'https://kyber-security.fr/blog/double-authentification-2fa',
    siteName: 'Kyber Security',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Double authentification (2FA) : le guide complet 2026',
    description: "Quelle méthode choisir, et l'erreur qui transforme deux facteurs en un seul.",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Double authentification (2FA) : le guide complet 2026',
  description:
    "Comparatif des méthodes de double authentification en 2026 : SMS, TOTP, clés physiques et passkeys, ordre d'activation recommandé et gestion des codes de récupération.",
  datePublished: '2026-08-19',
  dateModified: '2026-08-19',
  author: { '@type': 'Person', name: 'Enzo Paccard', url: 'https://kyber-security.fr/a-propos' },
  publisher: { '@type': 'Organization', name: 'Kyber Security', url: 'https://kyber-security.fr' },
  url: 'https://kyber-security.fr/blog/double-authentification-2fa',
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
      name: 'Double authentification (2FA) : le guide complet 2026',
      item: 'https://kyber-security.fr/blog/double-authentification-2fa',
    },
  ],
};

const faq = [
  {
    q: 'La double authentification par SMS est-elle vraiment dangereuse ?',
    a: "Elle vaut infiniment mieux que pas de second facteur du tout, mais c'est la méthode la plus faible. Un attaquant peut obtenir un duplicata de votre carte SIM auprès de l'opérateur en se faisant passer pour vous, technique connue sous le nom de SIM swapping, ou intercepter le message. Activez le SMS si c'est la seule option proposée, remplacez le par une application TOTP dès que le service le permet.",
  },
  {
    q: 'Faut-il stocker ses codes 2FA dans son gestionnaire de mots de passe ?',
    a: "C'est très pratique et cela réduit réellement votre sécurité. Si le même coffre contient le mot de passe et le générateur de code, quiconque ouvre ce coffre détient les deux facteurs : vous êtes revenu à une authentification simple avec une étape supplémentaire. Gardez vos codes TOTP dans une application séparée, sur un appareil distinct si possible.",
  },
  {
    q: 'Où conserver les codes de récupération ?',
    a: "Hors ligne et chiffrés. Imprimez les et rangez les avec vos papiers importants, ou chiffrez le fichier de codes avec un outil comme notre chiffreur de fichiers et conservez le sur une clé USB. Ne les laissez ni dans un email, ni dans un fichier texte sur le bureau, ni dans le même coffre que le reste : ce sont des clés de contournement complet de la 2FA.",
  },
  {
    q: 'Les passkeys remplacent elles la double authentification ?',
    a: "Une passkey combine en une seule étape la possession de l'appareil et son déverrouillage biométrique, donc elle joue le rôle des deux facteurs. Sur les sites qui la proposent, c'est la meilleure option disponible. Elle ne couvre encore qu'une minorité de services, et pose ses propres questions de récupération et de dépendance à un écosystème.",
  },
  {
    q: 'Sur quels comptes activer la 2FA en priorité ?',
    a: "Sur votre boîte mail avant tout : elle sert à réinitialiser les mots de passe de tous les autres services, elle est donc la clé de voûte. Ensuite la banque, les impôts, le gestionnaire de mots de passe s'il en propose, puis les comptes professionnels et les réseaux sociaux liés à votre identité.",
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

const methods: { name: string; niveau: string; tone: string; forces: string; faiblesses: string }[] = [
  {
    name: 'SMS',
    niveau: 'Faible',
    tone: 'text-red-300 bg-red-950/50 border-red-800',
    forces: 'Disponible partout, aucune installation, compris de tous.',
    faiblesses: 'SIM swapping, interception, dépendance au réseau et à l\'opérateur.',
  },
  {
    name: 'Email',
    niveau: 'Faible',
    tone: 'text-red-300 bg-red-950/50 border-red-800',
    forces: 'Simple, sans matériel supplémentaire.',
    faiblesses: 'Si la boîte mail tombe, tout tombe avec elle. Ce n\'est pas un vrai second facteur.',
  },
  {
    name: 'Application TOTP',
    niveau: 'Solide',
    tone: 'text-green-300 bg-green-950/50 border-green-800',
    forces: 'Hors ligne, gratuit, standardisé (RFC 6238), accepté par la quasi totalité des services.',
    faiblesses: 'Reste hameçonnable : un site contrefait peut vous demander le code et le rejouer aussitôt.',
  },
  {
    name: 'Clé physique FIDO2',
    niveau: 'Très solide',
    tone: 'text-blue-300 bg-blue-950/50 border-blue-800',
    forces: 'Résiste au hameçonnage par conception : la clé vérifie le domaine avant de répondre.',
    faiblesses: 'Achat de matériel, et il en faut deux (une de secours) pour éviter le blocage définitif.',
  },
  {
    name: 'Passkey',
    niveau: 'Très solide',
    tone: 'text-blue-300 bg-blue-950/50 border-blue-800',
    forces: 'Remplace le mot de passe et le second facteur en une étape, résistant au hameçonnage.',
    faiblesses: 'Couverture encore partielle des sites, récupération souvent liée à un compte Apple ou Google.',
  },
];

export default function ArticleDoubleAuthentification() {
  return (
    <div className="min-h-screen bg-[#0e1015] text-stone-100 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, breadcrumbLd, faqLd]) }} />
      <NavHeader />

      <main className="pt-24 pb-16">
        <article className="max-w-3xl mx-auto px-6">

          {/* ── HEADER ── */}
          <header className="py-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium px-3 py-1 rounded-full border text-green-300 bg-green-950/50 border-green-800">
                Guide pratique
              </span>
              <span className="text-stone-500 text-xs">19 août 2026 · 8 min de lecture</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-stone-100 leading-tight">
              Double authentification (2FA) : le guide complet 2026
            </h1>
            <p className="text-lg text-stone-400 leading-relaxed">
              Toutes les méthodes ne se valent pas, et la plus pratique d&apos;entre elles annule discrètement le
              bénéfice du second facteur. Voici comment activer la 2FA correctement, dans le bon ordre.
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
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Ce que la 2FA protège réellement</h2>
              <p>
                Un mot de passe, aussi long soit il, peut fuir sans que vous fassiez la moindre erreur : le site où
                vous êtes inscrit se fait pirater, un logiciel espion traîne sur une machine, un site contrefait
                vous le fait saisir. La double authentification ajoute une seconde preuve, indépendante de la
                première, pour que la perte du mot de passe ne suffise plus à ouvrir le compte.
              </p>
              <p>
                Elle ne remplace pas un bon mot de passe, elle limite les dégâts du jour où celui ci circule. Les
                deux mesures sont complémentaires, et notre guide{' '}
                <Link href="/blog/mot-de-passe-fort-2026" className="text-blue-400 hover:text-blue-300 transition-colors">
                  comment créer un mot de passe fort
                </Link>{' '}
                couvre la première.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-6">Les cinq méthodes, classées</h2>
              <div className="space-y-3 not-prose">
                {methods.map(({ name, niveau, tone, forces, faiblesses }) => (
                  <div key={name} className="bg-[#151922] border border-stone-800 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <h3 className="font-semibold text-stone-100">{name}</h3>
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${tone}`}>{niveau}</span>
                    </div>
                    <p className="text-sm text-stone-400 leading-relaxed mb-1.5">
                      <span className="text-green-400">✓</span> {forces}
                    </p>
                    <p className="text-sm text-stone-400 leading-relaxed">
                      <span className="text-amber-400">⚠︎</span> {faiblesses}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-stone-400 mt-6">
                Pour la plupart des gens, la bonne réponse en 2026 est une application TOTP sur les comptes
                courants, et une clé physique ou une passkey sur les deux ou trois comptes qui font vraiment mal.
                Le sujet des passkeys est détaillé dans{' '}
                <Link href="/blog/passkeys-vs-gestionnaire-mots-de-passe" className="text-blue-400 hover:text-blue-300 transition-colors">
                  passkeys : ce qu&apos;elles ne remplacent pas
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">L&apos;erreur qui annule votre second facteur</h2>
              <div className="bg-red-950/50 border border-red-800 rounded-xl p-5">
                <h3 className="font-semibold text-red-200 mb-2">
                  Mot de passe et code TOTP dans le même coffre = un seul facteur
                </h3>
                <p className="text-red-300 text-sm leading-relaxed">
                  La majorité des gestionnaires proposent aujourd&apos;hui de générer vos codes à six chiffres
                  directement à côté du mot de passe. C&apos;est confortable, et cela réunit dans un même
                  contenant les deux éléments censés être séparés. Un coffre ouvert sur une machine compromise, un
                  mot de passe maître deviné, une session laissée déverrouillée : dans chacun de ces cas
                  l&apos;attaquant obtient les deux facteurs d&apos;un coup. Le principe même de la 2FA est que les
                  deux preuves ne tombent pas ensemble.
                </p>
              </div>
              <p>
                C&apos;est la raison pour laquelle Kyber ne stocke pas vos codes TOTP et n&apos;a pas prévu de le
                faire. Ce n&apos;est pas une fonctionnalité manquante, c&apos;est un choix : le coffre garde les
                mots de passe, une application dédiée garde les seconds facteurs. Utilisez une application
                d&apos;authentification indépendante, de préférence libre et fonctionnant hors ligne, sur votre
                téléphone.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Les codes de récupération, le point aveugle</h2>
              <p>
                Quand vous activez la 2FA, le service vous affiche une liste de codes de secours à usage unique.
                Ils permettent de reprendre la main si vous perdez votre téléphone / autrement dit, ils
                contournent entièrement la double authentification. Ils méritent donc le même soin que le mot de
                passe maître.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 not-prose">
                {[
                  { ok: true, t: 'Imprimés, rangés avec vos papiers importants ou dans un coffre physique.' },
                  { ok: true, t: 'Dans un fichier chiffré par mot de passe, sur une clé USB gardée hors ligne.' },
                  { ok: false, t: 'Dans un email « à moi même » ou une note du téléphone.' },
                  { ok: false, t: 'Dans le même coffre que les mots de passe des comptes concernés.' },
                ].map(({ ok, t }) => (
                  <div
                    key={t}
                    className={`flex items-start gap-2 text-sm rounded-lg px-4 py-3 border ${
                      ok ? 'bg-green-950/40 border-green-800 text-green-200' : 'bg-red-950/40 border-red-800 text-red-200'
                    }`}
                  >
                    <span className="flex-shrink-0">{ok ? '✓' : '✗'}</span>
                    {t}
                  </div>
                ))}
              </div>
              <p>
                Pour la seconde option, notre{' '}
                <Link href="/chiffrer-fichier" className="text-blue-400 hover:text-blue-300 transition-colors">
                  chiffreur de fichiers en ligne
                </Link>{' '}
                fait le travail sans rien envoyer nulle part : le fichier obtenu est illisible sans le mot de
                passe, y compris pour nous.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Par où commencer, concrètement</h2>
              <div className="space-y-3 not-prose">
                {[
                  { n: '1', t: 'Votre boîte mail', d: 'Elle réinitialise tous les autres comptes. Activez y une application TOTP, ou une clé physique si le service le permet.' },
                  { n: '2', t: 'Banque et impôts', d: 'Souvent imposé par SMS sans alternative. Acceptez le SMS faute de mieux, mais vérifiez si une application dédiée est proposée.' },
                  { n: '3', t: 'Comptes professionnels', d: 'Messagerie d\'entreprise, accès distants, outils d\'administration. Ce sont les cibles à valeur pour les attaquants.' },
                  { n: '4', t: 'Réseaux sociaux et boutiques', d: 'Moins critiques, mais liés à votre identité et à vos moyens de paiement enregistrés.' },
                ].map(({ n, t, d }) => (
                  <div key={n} className="flex gap-4 bg-[#151922] border border-stone-800 rounded-xl p-5">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center font-bold text-white text-sm">
                      {n}
                    </span>
                    <div>
                      <h3 className="font-semibold text-stone-100 mb-1 text-sm">{t}</h3>
                      <p className="text-sm text-stone-400 leading-relaxed">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-stone-400 mt-6">
                Si vous découvrez au passage qu&apos;un de vos comptes figure dans une fuite connue, suivez le plan
                de{' '}
                <Link href="/blog/fuite-de-donnees-que-faire" className="text-blue-400 hover:text-blue-300 transition-colors">
                  que faire après une fuite de données
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
                La double authentification est la mesure au meilleur rapport effort sur bénéfice de toute
                l&apos;hygiène numérique : une dizaine de minutes par compte, une fois pour toutes. Retenez deux
                règles. Une application TOTP plutôt qu&apos;un SMS partout où c&apos;est possible. Et surtout, ne
                rangez pas les deux facteurs au même endroit / sinon il n&apos;en reste qu&apos;un.
              </p>
            </section>

          </div>

          {/* ── CTA ── */}
          <div className="mt-16 bg-gradient-to-br from-blue-950/40 to-indigo-950/40 border border-blue-800 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold mb-3 text-stone-100">Le premier facteur, lui, mérite un vrai coffre</h2>
            <p className="text-stone-400 text-sm mb-6 max-w-md mx-auto">
              Kyber garde vos mots de passe chiffrés sur votre disque, sans compte ni cloud. Gratuit jusqu&apos;à
              100 % gratuit et open source.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/telechargement"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all shadow-md"
              >
                Télécharger Kyber
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
            <Link href="/blog/gestionnaire-mots-de-passe-gratuit-2026" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              Quel gestionnaire gratuit choisir ? →
            </Link>
          </nav>

        </article>
      </main>

      <NavFooter />
    </div>
  );
}
