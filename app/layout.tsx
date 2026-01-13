import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Orbitron, Exo_2, JetBrains_Mono } from 'next/font/google';

import GoogleAnalytics from '@/components/Template/GoogleAnalytics';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import JsonLd from '@/components/Template/JsonLd';

// Vercel sets VERCEL=1 automatically during builds
const isVercel = process.env.VERCEL === '1';
import Navigation from '@/components/Template/Navigation';
import { siteConfig } from '@/data/config';
import '@/static/css/main.scss';

// Cyberpunk theme fonts
const orbitron = Orbitron({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const exo2 = Exo_2({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

// Viewport configuration (separated from metadata in Next.js 14+)
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0a0a0f' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - ${siteConfig.jobTitle}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  metadataBase: new URL(siteConfig.siteUrl),

  // Favicon and icons - using bg-logo.png as primary icon
  icons: {
    icon: [
      { url: '/images/favicon/bg-logo.png', type: 'image/png' },
      { url: '/images/favicon/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/images/favicon/bg-logo.png',
    apple: '/images/favicon/bg-logo.png',
    other: [
      { rel: 'mask-icon', url: '/images/favicon/bg-logo.png', color: '#00ffff' },
    ],
  },

  // Web app manifest
  manifest: '/manifest.webmanifest',

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - ${siteConfig.jobTitle}`,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.jobTitle}`,
        type: 'image/png',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - ${siteConfig.jobTitle}`,
    description: siteConfig.description,
    site: `@${siteConfig.social.twitter}`,
    creator: `@${siteConfig.social.twitter}`,
    images: [`${siteConfig.siteUrl}/images/og-image.png`],
  },

  // Robots
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

  // Verification (add your verification codes here)
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },

  // Canonical URL for the homepage (with trailing slash for consistency)
  alternates: {
    canonical: `${siteConfig.siteUrl}/`,
  },

  // Category
  category: 'technology',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${exo2.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to Google Analytics for faster loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <JsonLd />
      </head>
      <body>
        <div id="wrapper">
          <Navigation />
          {children}
        </div>
        <GoogleAnalytics />
        {isVercel && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  );
}
