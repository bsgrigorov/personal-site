import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { siteConfig } from '@/data/config';

export const metadata: Metadata = {
  title: 'Stats',
  description: `Fun statistics and facts about ${siteConfig.name} - site analytics, GitHub contributions, and personal metrics.`,
  alternates: {
    canonical: '/stats/',
  },
};

export default function StatsLayout({ children }: { children: ReactNode }) {
  return children;
}
