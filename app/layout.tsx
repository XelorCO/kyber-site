import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import CustomCursor from '@/components/CustomCursor';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const BASE_URL = 'https://kyber-security.fr';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'Kyber — Gestionnaire de mots de passe post-quantique',
    template: '%s — Kyber',
  },
  description:
    'Premier gestionnaire de mots de passe post-quantique français. Chiffrement Kyber1024 + AES-256-GCM + Argon2id. Gratuit jusqu\'à 3 mots de passe. Windows, macOS, Linux.',

  keywords: [
    'gestionnaire mots de passe',
    'gestionnaire mots de passe post-quantique',
    'gestionnaire mots de passe gratuit',
    'gestionnaire mots de passe français',
    'password manager',
    'password manager post quantum',
    'Kyber1024',
    'AES-256-GCM',
    'chiffrement post-quantique',
    'sécurité informatique',
    'logiciel sécurité',
    'coffre mots de passe',
    'kyber security',
  ],

  authors: [{ name: 'Kyber Security — Enzo Paccard', url: BASE_URL }],
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
    title: 'Kyber — Gestionnaire de mots de passe post-quantique',
    description:
      'Premier gestionnaire de mots de passe post-quantique français. Kyber1024 + AES-256-GCM. Gratuit, dispo Windows / macOS / Linux.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Kyber — Gestionnaire de mots de passe post-quantique' }],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Kyber — Gestionnaire de mots de passe post-quantique',
    description: 'Chiffrement Kyber1024 + AES-256-GCM. Gratuit jusqu\'à 3 mots de passe. 🇫🇷',
    images: ['/opengraph-image'],
  },

  category: 'technology',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
