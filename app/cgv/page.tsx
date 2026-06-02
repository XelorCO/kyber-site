export const metadata = {
  title: 'Conditions Générales de Vente — Kyber',
};

export default function CGV() {
  return (
    <div className="min-h-screen bg-[#070711] text-white">
      <div className="max-w-3xl mx-auto px-6 py-20">

        <a href="/" className="text-slate-500 hover:text-white text-sm transition-colors mb-10 inline-block">
          ← Retour à l'accueil
        </a>

        <h1 className="text-4xl font-bold mb-2">Conditions Générales de Vente</h1>
        <p className="text-slate-500 text-sm mb-12">Dernière mise à jour : juin 2026</p>

        <div className="space-y-10 text-slate-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Vendeur</h2>
            <p>
              <strong className="text-white">Kyber Security</strong><br />
              Site web : <a href="https://kyber-security.fr" className="text-blue-400 hover:text-blue-300 transition-colors">kyber-security.fr</a><br />
              Email : <a href="mailto:contact@kyber-security.fr" className="text-blue-400 hover:text-blue-300 transition-colors">contact@kyber-security.fr</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Produits</h2>
            <p>
              Kyber Security commercialise une <strong className="text-white">licence logicielle perpétuelle</strong> pour
              l'application <strong className="text-white">Kyber</strong>, gestionnaire de mots de passe post-quantique.
              Il s'agit d'un <strong className="text-white">bien numérique</strong> livré par voie électronique.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Prix</h2>
            <p>
              Le prix de la licence <strong className="text-white">Kyber Pro</strong> est de{' '}
              <strong className="text-white">15,00 € TTC</strong> (paiement unique, licence perpétuelle pour 1 utilisateur).
              Les prix sont indiqués en euros, toutes taxes comprises.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Commande et paiement</h2>
            <p className="mb-3">
              La commande est validée au moment du paiement via notre prestataire sécurisé{' '}
              <strong className="text-white">Stripe</strong>. Les moyens de paiement acceptés sont :
              carte bancaire (Visa, Mastercard, CB).
            </p>
            <p>
              Après confirmation du paiement, la clé de licence est générée et envoyée
              automatiquement à l'adresse email renseignée lors de la commande,{' '}
              <strong className="text-white">dans les minutes suivant l'achat</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Livraison</h2>
            <p>
              La livraison est effectuée par voie électronique (email). Le client reçoit sa clé
              d'activation unique à l'adresse email fournie lors du paiement. Le client est
              responsable de l'exactitude de l'adresse email renseignée.
            </p>
            <p className="mt-3">
              En cas de non-réception de l'email dans les 30 minutes, le client est invité à vérifier
              ses courriers indésirables (spam) et à contacter{' '}
              <a href="mailto:contact@kyber-security.fr" className="text-blue-400 hover:text-blue-300 transition-colors">
                contact@kyber-security.fr
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Droit de rétractation et remboursement</h2>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 mb-4">
              <p className="text-amber-300 font-medium mb-2">⚠️ Bien numérique — exception légale</p>
              <p className="text-slate-300 text-sm">
                Conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation
                ne s'applique pas aux <strong className="text-white">contenus numériques non fournis sur support matériel</strong> dont
                l'exécution a commencé avec l'accord du consommateur.
              </p>
            </div>
            <p className="mb-3">
              En acceptant la livraison immédiate de la clé de licence (bien numérique), le client
              renonce expressément à son droit de rétractation.{' '}
              <strong className="text-white">Aucun remboursement ne sera accordé</strong> sauf dans le cas
              exclusif suivant :
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="font-semibold text-white mb-2">Cas unique de remboursement :</p>
              <p>
                Si la clé de licence fournie est <strong className="text-white">techniquement non fonctionnelle</strong> — c'est-à-dire
                qu'elle ne s'active pas dans l'application Kyber malgré une saisie correcte — le client
                peut demander un remboursement en apportant la{' '}
                <strong className="text-white">preuve technique de la non-fonctionnalité</strong>{' '}
                (capture d'écran du message d'erreur, logs applicatifs) dans un délai de{' '}
                <strong className="text-white">14 jours</strong> suivant l'achat.
              </p>
              <p className="mt-3 text-slate-400 text-sm">
                Les problèmes liés à l'installation, à la configuration ou à l'utilisation de
                l'application ne constituent pas une défaillance de la clé de licence et ne donnent
                pas droit à remboursement.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Licence et utilisation</h2>
            <p className="mb-3">
              La licence achetée est <strong className="text-white">personnelle, non transférable et non cessible</strong>.
              Elle autorise l'utilisation de l'application Kyber sur les appareils personnels de
              l'acheteur uniquement.
            </p>
            <p>
              Il est interdit de partager, revendre, distribuer ou sous-licencier la clé d'activation.
              Tout usage frauduleux entraînera la révocation immédiate de la licence.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Responsabilité</h2>
            <p className="mb-3">
              Kyber Security s'engage à fournir une clé de licence fonctionnelle permettant
              l'activation de l'application. Notre responsabilité est limitée au montant de
              l'achat effectué.
            </p>
            <p>
              Kyber Security ne saurait être tenu responsable d'une perte de données, d'une
              incompatibilité matérielle ou logicielle, ou de tout dommage indirect résultant
              de l'utilisation de l'application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Données personnelles</h2>
            <p>
              Le traitement des données personnelles est détaillé dans notre{' '}
              <a href="/politique-de-confidentialite" className="text-blue-400 hover:text-blue-300 transition-colors">
                Politique de confidentialité
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Droit applicable et litiges</h2>
            <p className="mb-3">
              Les présentes CGV sont soumises au <strong className="text-white">droit français</strong>.
              En cas de litige, une solution amiable sera recherchée en priorité.
            </p>
            <p>
              En cas d'échec, le litige sera soumis aux tribunaux compétents de France.
              Le client peut également recourir gratuitement à la médiation de la consommation
              via la plateforme européenne de règlement en ligne des litiges :{' '}
              <a href="https://ec.europa.eu/consumers/odr" className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener">
                ec.europa.eu/consumers/odr
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Contact</h2>
            <p>
              Pour toute question relative à ces CGV :{' '}
              <a href="mailto:contact@kyber-security.fr" className="text-blue-400 hover:text-blue-300 transition-colors">
                contact@kyber-security.fr
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
