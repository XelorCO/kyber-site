import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';

export const metadata = {
  title: 'Conditions Générales / Kyber',
};

export default function CGV() {
  return (
    <div className="min-h-screen bg-[#0e1015] text-stone-100 overflow-x-hidden">
      <NavHeader />

      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6 py-8">

          <h1 className="text-4xl font-bold mb-2 text-stone-100">Conditions Générales</h1>
          <p className="text-stone-500 text-sm mb-12">Dernière mise à jour : septembre 2026</p>

          <div className="space-y-10 text-stone-300 leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-stone-100 mb-3">1. Éditeur</h2>
              <p>
                <strong className="text-stone-100">Kyber Security</strong><br />
                Responsable : Enzo Paccard<br />
                SIRET : 94467475300016<br />
                Site web : <a href="https://kyber-security.fr" className="text-blue-400 hover:text-blue-300 transition-colors">kyber-security.fr</a><br />
                Email : <a href="mailto:contact@kyber-security.fr" className="text-blue-400 hover:text-blue-300 transition-colors">contact@kyber-security.fr</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-100 mb-3">2. Nature du logiciel</h2>
              <p>
                <strong className="text-stone-100">Kyber</strong> est un logiciel libre distribué sous licence{' '}
                <strong className="text-stone-100">Apache-2.0</strong>.
                Il est mis à disposition <strong className="text-stone-100">gratuitement</strong>, sans restriction d&apos;usage,
                sur <a href="https://github.com/XelorCO/kyber-app" className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener">GitHub</a> et sur ce site.
                Aucune licence commerciale n&apos;est requise.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-100 mb-3">3. Responsabilité</h2>
              <p className="mb-3">
                Le logiciel est fourni <strong className="text-stone-100">&laquo; tel quel &raquo;</strong>, sans garantie
                d&apos;aucune sorte, expresse ou implicite. Kyber Security ne saurait être tenu responsable d&apos;une
                perte de données, d&apos;une incompatibilité matérielle ou logicielle, ou de tout dommage indirect
                résultant de l&apos;utilisation de l&apos;application.
              </p>
              <p>
                La passphrase de votre coffre est la seule clé d&apos;accès à vos données. En cas de perte,{' '}
                <strong className="text-stone-100">aucune récupération n&apos;est possible</strong> / ni par vous, ni par nous.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-100 mb-3">4. Données personnelles</h2>
              <p>
                Le traitement des données personnelles est détaillé dans notre{' '}
                <a href="/politique-de-confidentialite" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Politique de confidentialité
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-100 mb-3">5. Droit applicable</h2>
              <p>
                Les présentes conditions sont soumises au <strong className="text-stone-100">droit français</strong>.
                En cas de litige, une solution amiable sera recherchée en priorité. Le client peut également
                recourir à la plateforme européenne de résolution des litiges :{' '}
                <a href="https://ec.europa.eu/consumers/odr" className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener">
                  ec.europa.eu/consumers/odr
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-100 mb-3">6. Contact</h2>
              <p>
                Pour toute question :{' '}
                <a href="mailto:contact@kyber-security.fr" className="text-blue-400 hover:text-blue-300 transition-colors">
                  contact@kyber-security.fr
                </a>
              </p>
            </section>

          </div>
        </div>
      </main>

      <NavFooter />
    </div>
  );
}
