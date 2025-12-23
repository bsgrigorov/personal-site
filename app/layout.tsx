import type { Metadata } from 'next';
import { Raleway, Source_Sans_3 } from 'next/font/google';
import React from 'react';

import GoogleAnalytics from '@/components/Template/GoogleAnalytics';
import Navigation from '@/components/Template/Navigation';
import '@/static/css/main.scss';

// Next.js font optimization - these create CSS variables used in _vars.scss
const sourceSans = Source_Sans_3({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

const raleway = Raleway({
  weight: ['400', '800', '900'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Borislav Grigorov',
    template: '%s | Borislav Grigorov',
  },
  description: 'Seattle based DevOps Engineer, UBC Alumni, and blockchain enthusiast.',
  keywords: [
    'Borislav Grigorov',
    'DevOps',
    'DevSecOps',
    'Kubernetes',
    'blockchain',
    'MetaMask',
    'Consensys',
  ],
  authors: [{ name: 'Borislav Grigorov' }],
  creator: 'Borislav Grigorov',
  metadataBase: new URL('https://bgrigorov.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bgrigorov.com',
    siteName: 'Borislav Grigorov',
    title: 'Borislav Grigorov',
    description: 'Seattle based DevOps Engineer, UBC Alumni, and blockchain enthusiast.',
    images: [
      {
        url: '/images/me.jpg',
        width: 1200,
        height: 630,
        alt: 'Borislav Grigorov',
      },
    ],
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${raleway.variable}`}>
      <body>
        <div id="wrapper">
          <Navigation />
          {children}
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
