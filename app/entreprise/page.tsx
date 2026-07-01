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

export default function PageEntrepriseWrapper() {
  return <EntrepriseClient />;
}
