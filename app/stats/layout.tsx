import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { siteConfig } from '@/data/config';

export const metadata: Metadata = {
  title: 'Stats',
  description: `Fun statistics about ${siteConfig.name} — personal trivia and how this site is built.`,
  alternates: {
    canonical: `${siteConfig.siteUrl}/stats/`,
  },
};

export default function StatsLayout({ children }: { children: ReactNode }) {
  return children;
}
