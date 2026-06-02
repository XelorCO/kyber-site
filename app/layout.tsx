import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kyber — Gestionnaire de mots de passe post-quantique',
  description:
    'Premier gestionnaire de mots de passe post-quantique français. Chiffrement Kyber1024 + AES-256-GCM. Disponible sur Windows, macOS et Linux.',
  keywords: ['gestionnaire mots de passe', 'post-quantique', 'Kyber', 'sécurité', 'chiffrement'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
