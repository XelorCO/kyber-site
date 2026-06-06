export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#070711] text-white flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="text-7xl mb-8">🎉</div>
        <h1 className="text-4xl font-bold mb-4">Paiement réussi !</h1>
        <p className="text-slate-400 text-lg mb-8">
          Votre licence{' '}
          <strong className="text-white">Kyber Pro</strong> vous sera envoyée
          par email dans quelques minutes.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left mb-8">
          <p className="font-semibold mb-4 flex items-center gap-2">
            <span>📋</span> Comment activer votre licence :
          </p>
          <ol className="space-y-3 text-slate-400 text-sm">
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
              <span>Ouvrez l&apos;application <strong className="text-white">Kyber</strong> sur votre ordinateur</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
              <span>Dans la barre latérale gauche, cliquez sur <strong className="text-white">⚙️ Paramètres</strong></span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
              <span>Faites défiler jusqu&apos;à la section <strong className="text-white">Licence Kyber</strong></span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
              <span>Collez votre clé reçue par email dans le champ et cliquez sur <strong className="text-white">Activer la licence</strong></span>
            </li>
          </ol>
        </div>

        <p className="text-slate-500 text-sm mb-6">
          Pas de mail reçu dans 5 minutes ?{' '}
          <a href="mailto:contact@kyber-security.fr" className="text-blue-400 hover:text-blue-300 transition">
            Contactez-nous
          </a>
        </p>

        <a href="/" className="text-slate-400 hover:text-white text-sm transition">
          ← Retour à l'accueil
        </a>
      </div>
    </div>
  );
}
