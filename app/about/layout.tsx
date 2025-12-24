import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { siteConfig } from '@/data/config';

export const metadata: Metadata = {
  title: 'About',
  description: `Learn about ${siteConfig.name} - ${siteConfig.jobTitle} at ${siteConfig.company}. ${siteConfig.description}`,
  alternates: {
    canonical: '/about/',
  },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
