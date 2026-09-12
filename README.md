# kyber-security.fr / Site officiel de Kyber

Site vitrine + téléchargement de Kyber, gestionnaire de mots de passe post-quantique
**gratuit et open source** (Apache-2.0). Live : https://kyber-security.fr (Vercel, domaine Ionos).

Le code de l'application : https://github.com/XelorCO/kyber-app

## Stack

- Next.js (App Router) + TypeScript + Tailwind
- **Dons** : Stripe Checkout (`price_data` dynamique, mode LIVE) / webhook `checkout.session.completed`
- **Email** : Resend (`lib/email.ts`, remerciement après don)
- **Chiffrement de fichiers web** : `/chiffrer-fichier`, 100% navigateur (`lib/kyberfile.ts`, format KYBP)

## Modèle économique

Kyber est gratuit, sans licence ni limite. Le site ne vend rien : le tunnel Stripe
sert uniquement aux **dons** ponctuels (« offrez un café »), sans contrepartie.

Le montant transite par `metadata.amount` ; il est borné (2–500 €) dans
`app/api/create-checkout-session/route.ts`.

## Flux de don

1. Section « Soutenir » de la homepage (ancre `#soutenir`) → modale → `POST /api/create-checkout-session` (`amount`, `email?`)
2. Stripe Checkout → paiement → webhook `/api/webhooks/stripe`
3. Webhook : si un email est fourni, `sendThankYouEmail({ email, amount })` (Resend). Aucune licence, aucune clé.
4. Redirection vers `/success` (« Merci pour votre soutien »).

## Distribution de l'app

- Binaires dans `public/downloads/` (installateurs Windows signés minisign)
- Manifest updater : `public/updates/latest.json` / à mettre à jour à CHAQUE release (voir README du repo `kyber-app`)

## SEO / GEO

- `app/sitemap.ts`, `app/robots.ts`, JSON-LD par page, breadcrumbs sur le blog
- `public/llms.txt` + `public/llms-full.txt` : documentation pour les assistants IA / à maintenir à chaque changement de fonctionnalité

## Directives design (Enzo)

- Thème sombre graphite (`#0e1015`, cartes `#151922`), accent bleu → indigo
- AUCUN emoji sur le site / symboles typographiques uniquement (◆ ✓ ✗ → ↓)
- AUCUN tiret long (— –) dans les textes / utiliser « / »
- Curseur custom losange (gem)

## Dev

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # vérification avant push
```

Variables d'env requises (Vercel) : `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`,
`STRIPE_WEBHOOK_SECRET`, `RESEND_API_KEY`, `NEXT_PUBLIC_BASE_URL`, `ADMIN_EMAIL`.

`LICENSE_PRIVATE_KEY` n'est plus utilisée (système de licence supprimé) / à retirer de Vercel.
