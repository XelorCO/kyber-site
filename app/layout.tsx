import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import CustomCursor from '@/components/CustomCursor';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const BASE_URL = 'https://kyber-security.fr';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Kyber',
      applicationCategory: 'SecurityApplication',
      operatingSystem: 'Windows 10, Windows 11',
      description: 'Premier gestionnaire de mots de passe post-quantique français. Chiffrement Kyber1024 + AES-256-GCM + Argon2id.',
      url: 'https://kyber-security.fr',
      inLanguage: 'fr-FR',
      offers: [
        {
          '@type': 'Offer',
          name: 'Kyber Gratuit',
          price: '0',
          priceCurrency: 'EUR',
          description: "Version gratuite / jusqu'à 10 mots de passe",
        },
        {
          '@type': 'Offer',
          name: 'Kyber Pro',
          price: '29.00',
          priceCurrency: 'EUR',
          description: 'Licence perpétuelle / mots de passe illimités / paiement unique, prix de lancement',
        },
        {
          '@type': 'Offer',
          name: 'Kyber Famille',
          price: '49.00',
          priceCurrency: 'EUR',
          description: 'Licence perpétuelle / 5 postes / paiement unique',
        },
      ],
      featureList: [
        'Chiffrement post-quantique Kyber1024',
        'AES-256-GCM',
        'Argon2id key derivation',
        'Auto-remplissage des mots de passe',
        'Analyse de sécurité du coffre',
        'Import Bitwarden / 1Password',
        'Chiffrement de fichiers et dossiers',
        'Générateur de mots de passe fort',
        'Fonctionnement 100% local, zéro cloud',
      ],
    },
    {
      '@type': 'Organization',
      name: 'Kyber Security',
      url: 'https://kyber-security.fr',
      logo: 'https://kyber-security.fr/opengraph-image',
      founder: { '@type': 'Person', name: 'Enzo Paccard' },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'contact@kyber-security.fr',
        contactType: 'customer support',
        availableLanguage: 'French',
      },
      address: { '@type': 'PostalAddress', addressCountry: 'FR' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: "Qu'est-ce que le chiffrement post-quantique ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Le chiffrement post-quantique utilise des algorithmes résistants aux ordinateurs quantiques. Kyber utilise Kyber1024, sélectionné par le NIST comme standard post-quantique, combiné à AES-256-GCM.",
          },
        },
        {
          '@type': 'Question',
          name: 'Kyber est-il gratuit ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, Kyber est gratuit jusqu'à 10 mots de passe. La licence Pro à 29 € (paiement unique, perpétuelle) débloque les mots de passe illimités.",
          },
        },
        {
          '@type': 'Question',
          name: 'Sur quels systèmes Kyber fonctionne-t-il ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kyber est disponible sur Windows 10 et 11. Les versions macOS 12 (Monterey) et supérieur, et Linux (Debian, Ubuntu), sont en préparation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Mes mots de passe sont-ils envoyés sur internet ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Non. Kyber fonctionne entièrement en local. Vos mots de passe sont chiffrés et stockés sur votre appareil uniquement. Aucune donnée n'est transmise à nos serveurs.",
          },
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'Kyber / Gestionnaire de mots de passe post-quantique',
    template: '%s / Kyber',
  },
  description:
    'Premier gestionnaire de mots de passe post-quantique français. Chiffrement Kyber1024 + AES-256-GCM + Argon2id. Gratuit jusqu\'à 10 mots de passe. Disponible sur Windows.',

  keywords: [
    'gestionnaire mots de passe',
    'gestionnaire mots de passe post-quantique',
    'gestionnaire mots de passe gratuit',
    'gestionnaire mots de passe français',
    'gestionnaire mots de passe local',
    'gestionnaire mots de passe sans cloud',
    'gestionnaire mots de passe RGPD',
    'coffre-fort numérique',
    'password manager',
    'password manager post quantum',
    'Kyber1024',
    'ML-KEM',
    'AES-256-GCM',
    'Argon2id',
    'chiffrement post-quantique',
    'cryptographie post-quantique',
    'ANSSI post-quantique',
    'souveraineté numérique',
    'sécurité informatique',
    'logiciel sécurité',
    'logiciel sécurité français',
    'coffre mots de passe',
    'kyber security',
    'alternative bitwarden locale',
  ],

  authors: [{ name: 'Kyber Security / Enzo Paccard', url: BASE_URL }],
  creator: 'Kyber Security',
  publisher: 'Kyber Security',

  alternates: {
    canonical: BASE_URL,
    languages: { 'fr-FR': BASE_URL },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: BASE_URL,
    siteName: 'Kyber',
    title: 'Kyber / Gestionnaire de mots de passe post-quantique',
    description:
      'Premier gestionnaire de mots de passe post-quantique français. Kyber1024 + AES-256-GCM. Gratuit, disponible sur Windows.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Kyber / Gestionnaire de mots de passe post-quantique' }],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Kyber / Gestionnaire de mots de passe post-quantique',
    description: 'Chiffrement Kyber1024 + AES-256-GCM. Gratuit jusqu\'à 10 mots de passe.',
    images: ['/opengraph-image'],
  },

  category: 'technology',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
