import type { Metadata } from 'next';
import EntrepriseClient from './EntrepriseClient';

export const metadata: Metadata = {
  title: { absolute: 'Kyber Enterprise | Gestionnaire de mots de passe pour équipes' },
  description:
    'Déployez Kyber dans votre équipe : licences multi-utilisateurs, conformité RGPD native, tarifs dégressifs. Zéro serveur centralisé / sécurité post-quantique pour les entreprises françaises.',
  keywords: [
    'kyber entreprise',
    'gestionnaire mots de passe entreprise',
    'logiciel sécurité équipe RGPD',
    'gestionnaire mots de passe PME',
    'sécurité post-quantique entreprise france',
    'licence entreprise gestionnaire mots de passe',
    'conformité RGPD gestionnaire mots de passe',
  ],
  alternates: {
    canonical: 'https://kyber-security.fr/entreprise',
  },
  openGraph: {
    title: 'Kyber Enterprise | Gestionnaire de mots de passe pour équipes',
    description: 'Licences multi-utilisateurs, conformité RGPD native, tarifs dégressifs. Zéro serveur centralisé.',
    url: 'https://kyber-security.fr/entreprise',
    siteName: 'Kyber Security',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Comment fonctionne le déploiement dans une équipe ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Chaque collaborateur installe Kyber sur son poste. Il crée son propre coffre protégé par sa passphrase personnelle. La licence est activée depuis l'application en entrant la clé reçue par email. Aucune infrastructure centralisée requise.",
          },
        },
        {
          '@type': 'Question',
          name: 'Peut-on partager des mots de passe entre collègues ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Le partage de coffre chiffré entre utilisateurs est sur la roadmap (T4 2026 / 2027). En attendant, l'export CSV chiffré permet un transfert ponctuel.",
          },
        },
        {
          '@type': 'Question',
          name: "Kyber est-il compatible avec les politiques de sécurité d'entreprise ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui. Kyber ne crée aucune connexion sortante et ne requiert aucun compte en ligne. Il s'installe comme un logiciel standard et respecte les politiques de pare-feu et antivirus. Aucune donnée n'est transmise à l'extérieur.",
          },
        },
        {
          '@type': 'Question',
          name: 'Quelle est votre politique de mise à jour ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Les licences Pro incluent toutes les mises à jour de la branche v1.x. Les nouvelles fonctionnalités majeures sont déployées progressivement. Pas d'abonnement caché / vous payez une fois.",
          },
        },
        {
          '@type': 'Question',
          name: 'Proposez-vous une facturation entreprise (bon de commande, TVA) ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, pour les commandes d'au moins 5 licences, nous émettons une facture avec TVA et pouvons accepter les bons de commande.",
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://kyber-security.fr' },
        { '@type': 'ListItem', position: 2, name: 'Entreprise', item: 'https://kyber-security.fr/entreprise' },
      ],
    },
  ],
};

export default function PageEntrepriseWrapper() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EntrepriseClient />
    </>
  );
}
