import { Metadata } from 'next';
import Link from 'next/link';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';

export const metadata: Metadata = {
  title: { absolute: 'Comment envoyer un document sensible par email en toute sécurité (2026)' },
  description:
    "RIB, pièce d'identité, contrat, bulletin de salaire : la méthode simple et gratuite pour envoyer un document confidentiel par email sans qu'il soit lisible en cas de piratage de la boîte mail.",
  keywords: [
    'envoyer document sensible par email',
    'envoyer un RIB par mail sécurisé',
    "envoyer pièce d'identité par email",
    'chiffrer un fichier avant envoi',
    'email sécurisé document confidentiel',
    'protéger pièce jointe email',
    'chiffrement fichier gratuit',
    'envoyer document confidentiel',
    'sécuriser pièce jointe',
    'crypter un fichier',
  ],
  alternates: {
    canonical: 'https://kyber-security.fr/blog/envoyer-document-securise-email',
  },
  openGraph: {
    title: 'Comment envoyer un document sensible par email en toute sécurité (2026)',
    description: "La méthode simple et gratuite pour qu'un RIB ou une pièce d'identité envoyée par mail reste illisible même si la boîte est piratée.",
    url: 'https://kyber-security.fr/blog/envoyer-document-securise-email',
    siteName: 'Kyber Security',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Envoyer un document sensible par email en toute sécurité',
    description: 'La méthode simple et gratuite, sans inscription, directement dans le navigateur.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Comment envoyer un document sensible par email en toute sécurité (2026)',
  description: "Guide pratique pour chiffrer un document confidentiel avant de l'envoyer par email, avec un outil gratuit fonctionnant dans le navigateur.",
  datePublished: '2026-07-09',
  dateModified: '2026-07-09',
  author: { '@type': 'Person', name: 'Enzo Paccard', url: 'https://kyber-security.fr/a-propos' },
  publisher: { '@type': 'Organization', name: 'Kyber Security', url: 'https://kyber-security.fr' },
  url: 'https://kyber-security.fr/blog/envoyer-document-securise-email',
  inLanguage: 'fr-FR',
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://kyber-security.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://kyber-security.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Comment envoyer un document sensible par email en toute sécurité', item: 'https://kyber-security.fr/blog/envoyer-document-securise-email' },
  ],
};

const howToLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Envoyer un document sensible par email en toute sécurité',
  description: "Chiffrer un fichier dans le navigateur puis l'envoyer par email, le mot de passe passant par un canal séparé.",
  totalTime: 'PT3M',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Chiffrer le fichier', text: 'Déposez le fichier sur kyber-security.fr/chiffrer-fichier et choisissez un mot de passe fort. Le chiffrement se fait dans votre navigateur, rien ne quitte votre machine.' },
    { '@type': 'HowToStep', position: 2, name: 'Envoyer le fichier chiffré', text: 'Joignez le fichier .kyber obtenu à votre email. Même intercepté, il est illisible.' },
    { '@type': 'HowToStep', position: 3, name: 'Transmettre le mot de passe par un autre canal', text: 'Communiquez le mot de passe par téléphone, SMS ou messagerie chiffrée : jamais dans le même email.' },
    { '@type': 'HowToStep', position: 4, name: 'Déchiffrer côté destinataire', text: 'Le destinataire ouvre la même page, dépose le fichier .kyber et saisit le mot de passe pour récupérer le document.' },
  ],
};

export default function ArticleEnvoyerDocument() {
  return (
    <div className="min-h-screen bg-[#0e1015] text-stone-100 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, breadcrumbLd, howToLd]) }} />
      <NavHeader />

      <main className="pt-24 pb-16">
        <article className="max-w-3xl mx-auto px-6">

          {/* ── HEADER ── */}
          <header className="py-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium px-3 py-1 rounded-full border text-green-300 bg-green-950/50 border-green-800">
                Guide pratique
              </span>
              <span className="text-stone-500 text-xs">9 juillet 2026 · 7 min de lecture</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-stone-100 leading-tight">
              Comment envoyer un document sensible par email en toute sécurité
            </h1>
            <p className="text-lg text-stone-400 leading-relaxed">
              RIB, pièce d&apos;identité, contrat, bulletin de salaire, dossier médical : on envoie
              tous des documents confidentiels par email. Voici pourquoi c&apos;est risqué,
              et la méthode simple et gratuite pour le faire proprement.
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

            {/* LE PROBLÈME */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Le problème : un email n&apos;est pas une enveloppe scellée</h2>
              <p>
                Un email avec pièce jointe, c&apos;est une copie de votre document qui atterrit au minimum
                à quatre endroits : votre boîte d&apos;envoi, le serveur de votre fournisseur, le serveur du
                fournisseur du destinataire, et sa boîte de réception. Chacun de ces points est une cible.
              </p>
              <p>
                Et ces copies sont <strong className="text-stone-100">éternelles</strong> : le RIB envoyé à votre agence
                immobilière en 2020 est probablement encore dans une boîte mail quelque part. Si cette
                boîte est compromise un jour (phishing, mot de passe réutilisé, fuite du fournisseur),
                tous les documents qu&apos;elle contient tombent avec elle. Les brouteurs et les
                usurpateurs d&apos;identité cherchent exactement ça : des pièces d&apos;identité et des RIB
                en pièce jointe.
              </p>
              <div className="bg-amber-950/50 border border-amber-800 rounded-xl p-5">
                <h3 className="font-semibold text-amber-200 mb-2">Le réflexe à abandonner : le ZIP avec mot de passe</h3>
                <p className="text-amber-300 text-sm">
                  Le chiffrement ZIP classique (ZipCrypto) se casse en quelques minutes avec des outils
                  publics. Le ZIP AES-256 est meilleur mais sa dérivation de clé est faible : un mot de
                  passe moyen tombe vite en brute-force. Et beaucoup d&apos;outils d&apos;entreprise refusent
                  les ZIP chiffrés en pièce jointe.
                </p>
              </div>
            </section>

            {/* LA MÉTHODE */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">La méthode : chiffrer avant d&apos;envoyer, mot de passe par un autre canal</h2>
              <p>
                Le principe tient en une phrase : <strong className="text-stone-100">le document voyage chiffré,
                le mot de passe voyage ailleurs</strong>. Même si l&apos;email est intercepté ou la boîte piratée
                dans dix ans, la pièce jointe reste un bloc illisible.
              </p>

              <div className="space-y-3 mt-4">
                {[
                  {
                    step: '1',
                    title: 'Chiffrez le fichier dans votre navigateur',
                    desc: "Ouvrez kyber-security.fr/chiffrer-fichier, déposez votre document (jusqu'à 200 Mo), choisissez un mot de passe fort ou laissez le générateur en créer un. Vous récupérez un fichier .kyber. Tout se passe dans votre navigateur : le document ne quitte jamais votre machine (vérifiable dans l'onglet Réseau des outils développeur).",
                  },
                  {
                    step: '2',
                    title: 'Envoyez le fichier .kyber par email',
                    desc: "Joignez le fichier chiffré à votre email comme n'importe quelle pièce jointe. Son contenu est protégé par Argon2id + ML-KEM-1024 + AES-256-GCM : la même chaîne cryptographique qu'un coffre Kyber.",
                  },
                  {
                    step: '3',
                    title: 'Transmettez le mot de passe par un AUTRE canal',
                    desc: "Téléphone, SMS, Signal... peu importe, tant que ce n'est pas le même email. C'est la règle d'or : si quelqu'un met la main sur l'email, il n'a pas le mot de passe ; s'il intercepte le SMS, il n'a pas le fichier.",
                  },
                  {
                    step: '4',
                    title: 'Le destinataire déchiffre sur la même page',
                    desc: "Il ouvre kyber-security.fr/chiffrer-fichier, dépose le .kyber, saisit le mot de passe et récupère le document original. Aucune installation, aucun compte, n'importe quel appareil.",
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
            </section>

            {/* POURQUOI C'EST MIEUX */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-6">Comparatif des solutions courantes</h2>
              <div className="overflow-x-auto rounded-2xl border border-stone-800 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-stone-800 border-b border-stone-800">
                      <th className="text-left px-4 py-3 font-semibold text-stone-300">Solution</th>
                      <th className="text-left px-4 py-3 font-semibold text-stone-300">Sécurité</th>
                      <th className="text-left px-4 py-3 font-semibold text-stone-300">Limites</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Pièce jointe simple', 'Aucune', 'Lisible par quiconque accède à la boîte, pour toujours'],
                      ['ZIP avec mot de passe', 'Faible', 'ZipCrypto cassable en minutes, KDF faible même en AES'],
                      ['Lien cloud (Drive, WeTransfer)', 'Moyenne', 'Le document est sur un serveur tiers ; le lien suffit souvent'],
                      ['PGP / S-MIME', 'Forte', 'Configuration complexe, il faut que les deux côtés soient équipés'],
                      ['Fichier .kyber + canal séparé', 'Forte', 'Il faut transmettre le mot de passe proprement (règle du canal séparé)'],
                    ].map(([solution, securite, limites]) => (
                      <tr key={solution} className="border-b border-stone-800 last:border-0">
                        <td className="px-4 py-2.5 font-medium text-stone-300 bg-stone-900">{solution}</td>
                        <td className="px-4 py-2.5 text-stone-400">{securite}</td>
                        <td className="px-4 py-2.5 text-stone-400">{limites}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                L&apos;avantage décisif du chiffrement dans le navigateur par rapport aux services de
                transfert « sécurisés » : <strong className="text-stone-100">il n&apos;y a aucun serveur à faire
                confiance</strong>. Le document est chiffré avant de quitter votre machine, et il n&apos;est
                envoyé nulle part pendant l&apos;opération. Vous pouvez couper votre connexion après le
                chargement de la page : ça fonctionne toujours.
              </p>
            </section>

            {/* BON MOT DE PASSE */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Quel mot de passe pour le fichier ?</h2>
              <p>
                La protection finale repose sur le mot de passe : c&apos;est lui qui alimente Argon2id.
                Utilisez le générateur intégré (28 caractères aléatoires) ou une passphrase de 5-6 mots.
                Un minimum de 16 caractères est imposé par l&apos;outil / ce n&apos;est pas du zèle, c&apos;est
                ce qui rend le brute-force hors de portée. Pour comprendre pourquoi,
                voir notre <Link href="/blog/mot-de-passe-fort-2026" className="text-blue-400 hover:text-blue-300">guide du mot de passe fort</Link>.
              </p>
              <p>
                Et si vous envoyez régulièrement des documents sensibles, stockez les mots de passe
                d&apos;échange dans un gestionnaire plutôt que dans un fichier texte : c&apos;est exactement
                leur rôle.
              </p>
            </section>

            {/* CONCLUSION */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Conclusion</h2>
              <p>
                Envoyer un document sensible en clair par email, c&apos;est accepter qu&apos;il soit lisible
                par n&apos;importe qui accédera à cette boîte mail un jour. La parade tient en trois minutes :
                chiffrer le fichier dans le navigateur, l&apos;envoyer chiffré, faire passer le mot de passe
                par un autre canal. C&apos;est gratuit, sans compte, et le document ne transite par aucun
                serveur.
              </p>
            </section>

          </div>

          {/* ── CTA ── */}
          <div className="mt-16 bg-gradient-to-br from-blue-950/40 to-indigo-950/40 border border-blue-800 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold mb-3 text-stone-100">Chiffrez votre premier fichier maintenant</h2>
            <p className="text-stone-400 text-sm mb-6 max-w-md mx-auto">
              Gratuit, sans inscription, sans limite d&apos;usage. Le fichier ne quitte jamais
              votre navigateur.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/chiffrer-fichier"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all shadow-md"
              >
                Chiffrer un fichier gratuitement
              </Link>
              <Link
                href="/telechargement"
                className="border border-stone-700 hover:border-stone-500 px-6 py-3 rounded-xl font-semibold text-sm text-stone-300 transition-all"
              >
                Découvrir Kyber →
              </Link>
            </div>
          </div>

          {/* ── NAVIGATION BLOG ── */}
          <nav className="mt-12 flex items-center justify-between">
            <Link href="/blog" className="text-sm text-stone-400 hover:text-stone-100 transition-colors">
              ← Retour au blog
            </Link>
            <Link href="/blog/mot-de-passe-fort-2026" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              Créer un mot de passe fort →
            </Link>
          </nav>

        </article>
      </main>

      <NavFooter />
    </div>
  );
}
