import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { siteConfig } from '@/data/config';

export const metadata: Metadata = {
  title: 'Stats',
  description: `Some statistics about ${siteConfig.name} and bgrigorov.com`,
};

export default function StatsLayout({ children }: { children: ReactNode }) {
  return children;
}
