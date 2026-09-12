export const metadata = { robots: { index: false, follow: false } };

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#0e1015] text-stone-100 flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="text-7xl mb-8">✓</div>
        <h1 className="text-4xl font-bold mb-4 text-stone-100">Merci pour votre soutien</h1>
        <p className="text-stone-400 text-lg mb-8">
          Votre don a bien été reçu. Kyber est et restera gratuit et open source ;
          votre contribution finance le temps passé dessus.
        </p>

        <div className="bg-[#151922] border border-stone-700 rounded-2xl p-6 text-left mb-8 shadow-sm">
          <p className="text-stone-400 text-sm leading-relaxed">
            Aucune action de votre part : il n&apos;y a pas de licence à activer, toutes les
            fonctionnalités sont déjà débloquées dans l&apos;application. Si vous avez indiqué
            une adresse email, un reçu vous a été envoyé.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <a href="/telechargement" className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all">
            Télécharger Kyber
          </a>
          <a href="https://github.com/XelorCO/kyber-app" target="_blank" rel="noopener" className="border border-stone-700 hover:border-stone-500 px-6 py-3 rounded-xl text-sm font-semibold text-stone-300 transition-all">
            Voir le code sur GitHub
          </a>
        </div>

        <p className="text-stone-500 text-sm mb-6">
          Une question ?{' '}
          <a href="mailto:contact@kyber-security.fr" className="text-blue-400 hover:text-blue-300 transition">
            contact@kyber-security.fr
          </a>
        </p>

        <a href="/" className="text-stone-500 hover:text-stone-100 text-sm transition">
          ← Retour à l&apos;accueil
        </a>
      </div>
    </div>
  );
}
