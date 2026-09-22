import { Metadata } from 'next';
import Link from 'next/link';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';

export const metadata: Metadata = {
  title: { absolute: 'Comment créer un mot de passe fort en 2026 : le guide complet' },
  description:
    'Longueur, entropie, passphrases : la méthode concrète pour créer des mots de passe vraiment incassables en 2026, avec les temps de cassage réels par un attaquant équipé de GPU.',
  keywords: [
    'mot de passe fort',
    'créer un mot de passe fort',
    'mot de passe sécurisé',
    'générateur de mot de passe',
    'passphrase',
    'entropie mot de passe',
    'mot de passe incassable',
    'combien de caractères mot de passe',
    'exemple mot de passe fort',
    'phrase de passe',
  ],
  alternates: {
    canonical: 'https://kyber-security.fr/blog/mot-de-passe-fort-2026',
  },
  openGraph: {
    title: 'Comment créer un mot de passe fort en 2026 : le guide complet',
    description: 'La méthode concrète pour créer des mots de passe vraiment incassables, avec les temps de cassage réels.',
    url: 'https://kyber-security.fr/blog/mot-de-passe-fort-2026',
    siteName: 'Kyber Security',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comment créer un mot de passe fort en 2026',
    description: 'Longueur, entropie, passphrases : la méthode concrète, sans mythes.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Comment créer un mot de passe fort en 2026 : le guide complet',
  description: 'Guide pratique : longueur, entropie, méthode des passphrases et temps de cassage réels par GPU en 2026.',
  datePublished: '2026-07-09',
  dateModified: '2026-07-09',
  author: { '@type': 'Person', name: 'Enzo Paccard', url: 'https://kyber-security.fr/a-propos' },
  publisher: { '@type': 'Organization', name: 'Kyber Security', url: 'https://kyber-security.fr' },
  url: 'https://kyber-security.fr/blog/mot-de-passe-fort-2026',
  inLanguage: 'fr-FR',
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://kyber-security.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://kyber-security.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Comment créer un mot de passe fort en 2026', item: 'https://kyber-security.fr/blog/mot-de-passe-fort-2026' },
  ],
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien de caractères pour un mot de passe fort en 2026 ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "16 caractères minimum pour un mot de passe aléatoire, 5 à 6 mots pour une passphrase. En dessous de 12 caractères aléatoires, un attaquant équipé de GPU modernes peut casser le mot de passe en un temps raisonnable si le service utilise un hachage rapide.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il changer ses mots de passe régulièrement ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Non. L'ANSSI et le NIST ont abandonné cette recommandation : le changement forcé pousse vers des mots de passe faibles et prévisibles. Changez un mot de passe uniquement s'il a fuité ou si vous suspectez une compromission.",
      },
    },
    {
      '@type': 'Question',
      name: "Une passphrase est-elle plus sûre qu'un mot de passe complexe ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "À longueur d'entropie égale, les deux se valent mathématiquement. Mais une passphrase de 6 mots aléatoires (environ 77 bits d'entropie) est à la fois plus forte et plus facile à mémoriser qu'un mot de passe de 10 caractères 'complexe'. Pour tout ce qui n'a pas besoin d'être mémorisé, un générateur aléatoire reste le meilleur choix.",
      },
    },
  ],
};

export default function ArticleMotDePasseFort() {
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
                Guide pratique
              </span>
              <span className="text-stone-500 text-xs">9 juillet 2026 · 9 min de lecture</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-stone-100 leading-tight">
              Comment créer un mot de passe fort en 2026 : le guide complet
            </h1>
            <p className="text-lg text-stone-400 leading-relaxed">
              Oubliez les règles absurdes du type « une majuscule, un chiffre, un symbole ».
              La force d&apos;un mot de passe se mesure en bits d&apos;entropie, et la méthode pour
              en créer un vraiment incassable tient en trois règles simples.
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

            {/* TLDR */}
            <section className="bg-blue-950/50 border border-blue-800 rounded-2xl p-6">
              <p className="text-blue-300 font-medium mb-2">La réponse courte</p>
              <p className="text-blue-300 text-sm">
                Un mot de passe fort en 2026, c&apos;est : <strong>16 caractères aléatoires minimum</strong> généré
                par un outil (pas par votre cerveau), <strong>unique</strong> pour chaque service, et stocké dans
                un gestionnaire de mots de passe. Pour le seul mot de passe que vous devez mémoriser
                (celui du gestionnaire) : une <strong>passphrase de 5 à 6 mots aléatoires</strong>.
                Tout le reste de cet article explique pourquoi.
              </p>
            </section>

            {/* ENTROPIE */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">La seule mesure qui compte : l&apos;entropie</h2>
              <p>
                La force d&apos;un mot de passe ne se mesure pas à sa « complexité » visuelle mais à son
                <strong className="text-stone-100"> entropie</strong>, exprimée en bits : le nombre de tentatives
                qu&apos;un attaquant devrait faire pour être sûr de le trouver. Chaque bit double le nombre
                de possibilités.
              </p>
              <p>
                Le calcul est simple : entropie = longueur × log2(taille de l&apos;alphabet). Un caractère
                pris au hasard parmi les 95 caractères imprimables apporte environ 6,6 bits. Un mot pris
                au hasard dans une liste de 7776 mots (méthode diceware) apporte environ 12,9 bits.
              </p>
              <div className="bg-amber-950/50 border border-amber-800 rounded-xl p-5">
                <h3 className="font-semibold text-amber-200 mb-2">Le piège : l&apos;entropie suppose le hasard</h3>
                <p className="text-amber-300 text-sm">
                  « Chaton2026! » fait 11 caractères mais son entropie réelle est minuscule : les
                  attaquants testent en priorité mot du dictionnaire + année + ponctuation finale.
                  Les outils de cassage modernes (hashcat + règles) connaissent toutes les astuces
                  humaines : majuscule en tête, @ à la place du a, chiffres à la fin. Un mot de passe
                  inventé par un humain n&apos;est jamais aléatoire.
                </p>
              </div>
            </section>

            {/* TEMPS DE CASSAGE */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-6">Temps de cassage réels en 2026</h2>
              <p className="mb-4">
                Ordres de grandeur pour une attaque hors-ligne contre un hachage rapide (le pire cas :
                une base de données fuitée avec un hachage faible), avec une machine à 8 GPU récents :
              </p>
              <div className="overflow-x-auto rounded-2xl border border-stone-800 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-stone-800 border-b border-stone-800">
                      <th className="text-left px-4 py-3 font-semibold text-stone-300">Mot de passe</th>
                      <th className="text-left px-4 py-3 font-semibold text-stone-300">Entropie</th>
                      <th className="text-left px-4 py-3 font-semibold text-stone-300">Temps de cassage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['8 caractères aléatoires', '~52 bits', 'Quelques heures'],
                      ['« Chaton2026! » (humain)', '~30 bits effectifs', 'Instantané'],
                      ['12 caractères aléatoires', '~79 bits', 'Plusieurs siècles'],
                      ["16 caractères aléatoires", '~105 bits', "Âge de l'univers"],
                      ['Passphrase 6 mots diceware', '~77 bits', 'Plusieurs siècles'],
                      ['Passphrase 6 mots + Argon2id', '~77 bits + KDF lent', 'Hors de portée'],
                    ].map(([mdp, entropie, temps]) => (
                      <tr key={mdp} className="border-b border-stone-800 last:border-0">
                        <td className="px-4 py-2.5 font-medium text-stone-300 bg-stone-900">{mdp}</td>
                        <td className="px-4 py-2.5 text-stone-400">{entropie}</td>
                        <td className="px-4 py-2.5 text-stone-200">{temps}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                Détail important : ces chiffres dépendent énormément de la façon dont le service stocke
                votre mot de passe. Avec un KDF lent comme Argon2id, chaque tentative coûte des dizaines
                de millisecondes et de la mémoire GPU : le brute-force devient hors de prix même pour des
                mots de passe moyens. C&apos;est <Link href="/blog/argon2id-vs-pbkdf2" className="text-blue-400 hover:text-blue-300">tout l&apos;enjeu du choix du KDF</Link>,
                et la raison pour laquelle Kyber utilise Argon2id avec 64 Mo de mémoire par tentative.
              </p>
            </section>

            {/* LA MÉTHODE */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">La méthode en 3 règles</h2>
              <div className="space-y-3 mt-4">
                {[
                  {
                    step: '1',
                    title: 'Un seul mot de passe à mémoriser : une passphrase de 5-6 mots',
                    desc: "Tirez 5 à 6 mots au hasard (vraiment au hasard : dés, générateur, pas votre intuition). « corbeau piscine ardoise vantail meringue octet » se mémorise en quelques jours et vaut ~77 bits. C'est votre mot de passe maître, celui qui protège tous les autres.",
                  },
                  {
                    step: '2',
                    title: 'Tous les autres : générés aléatoirement, 16+ caractères, uniques',
                    desc: "Vous n'avez pas à les connaître ni à les retenir : c'est le travail du gestionnaire de mots de passe. Un mot de passe par service, jamais réutilisé. Si un site fuite, les autres comptes ne tombent pas avec.",
                  },
                  {
                    step: '3',
                    title: "Ne les changez que s'ils ont fuité",
                    desc: "Le changement périodique forcé est une pratique abandonnée par l'ANSSI et le NIST : il produit des mots de passe faibles (motdepasse1, motdepasse2...). Changez immédiatement en cas de fuite avérée, sinon laissez.",
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

            {/* CE QU'IL NE FAUT PLUS FAIRE */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Ce qu&apos;il ne faut plus faire en 2026</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Réutiliser un mot de passe sur plusieurs sites',
                  'Substituer des lettres (P@ssw0rd) : les outils connaissent',
                  'Utiliser des infos personnelles (dates, prénoms)',
                  'Suivre un « schéma » par site (motdepasse+amazon)',
                  'Stocker ses mots de passe dans le navigateur non chiffré',
                  'Les noter dans un fichier texte ou un carnet au bureau',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-sm text-stone-300 bg-red-950/50 border border-red-800 rounded-lg px-3 py-2">
                    <span className="text-red-400 flex-shrink-0">✗</span>
                    {point}
                  </div>
                ))}
              </div>
              <p className="mt-4">
                Le schéma par site mérite une mention : « MonMdp!amazon », « MonMdp!google »...
                Il suffit qu&apos;UN site fuite en clair pour que l&apos;attaquant comprenne le motif et
                déduise tous vos autres mots de passe. C&apos;est l&apos;une des premières choses testées
                lors du credential stuffing.
              </p>
            </section>

            {/* ET DEMAIN */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Et la menace quantique dans tout ça ?</h2>
              <p>
                Les ordinateurs quantiques ne « devinent » pas les mots de passe plus vite de façon
                magique : l&apos;algorithme de Grover ne fait que diviser par deux l&apos;entropie effective
                d&apos;une recherche exhaustive. Une passphrase de 6 mots derrière Argon2id reste hors de
                portée. La vraie menace quantique pèse sur le chiffrement qui protège vos données en
                transit et au repos / c&apos;est le problème du
                {' '}<Link href="/blog/ordinateurs-quantiques-mots-de-passe" className="text-blue-400 hover:text-blue-300">harvest now, decrypt later</Link>,
                et la raison d&apos;être des <Link href="/blog/cryptographie-post-quantique" className="text-blue-400 hover:text-blue-300">standards post-quantiques du NIST</Link>.
              </p>
              <p>
                Concrètement : un bon mot de passe ne suffit pas si le coffre qui le stocke n&apos;est
                pas prêt pour l&apos;ère quantique. Les deux vont ensemble.
              </p>
            </section>

            {/* CONCLUSION */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Conclusion</h2>
              <p>
                Un mot de passe fort en 2026 n&apos;est pas un mot de passe « compliqué », c&apos;est un mot de
                passe <strong className="text-stone-100">long, aléatoire et unique</strong>. Puisque personne ne peut
                mémoriser 80 mots de passe de 16 caractères aléatoires, la seule architecture réaliste
                est : une passphrase forte dans votre tête, tout le reste dans un gestionnaire chiffré
                qui ne quitte jamais votre machine.
              </p>
            </section>

          </div>

          {/* ── CTA ── */}
          <div className="mt-16 bg-gradient-to-br from-blue-950/40 to-indigo-950/40 border border-blue-800 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold mb-3 text-stone-100">Générez et stockez vos mots de passe en local</h2>
            <p className="text-stone-400 text-sm mb-6 max-w-md mx-auto">
              Essayez notre générateur en ligne, qui affiche l&apos;entropie réelle et ne fait sortir aucune donnée
              de votre navigateur. Kyber stocke ensuite vos coffres chiffrés en post-quantique, 100 % sur votre
              machine. 100 % gratuit et open source.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/generateur-mot-de-passe"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all shadow-md"
              >
                Générer un mot de passe
              </Link>
              <Link
                href="/telechargement"
                className="border border-stone-700 hover:border-stone-500 px-6 py-3 rounded-xl font-semibold text-sm text-stone-300 transition-all"
              >
                Télécharger Kyber →
              </Link>
            </div>
          </div>

          {/* ── NAVIGATION BLOG ── */}
          <nav className="mt-12 flex items-center justify-between">
            <Link href="/blog" className="text-sm text-stone-400 hover:text-stone-100 transition-colors">
              ← Retour au blog
            </Link>
            <Link href="/blog/argon2id-vs-pbkdf2" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              Argon2id vs PBKDF2 →
            </Link>
          </nav>

        </article>
      </main>

      <NavFooter />
    </div>
  );
}
