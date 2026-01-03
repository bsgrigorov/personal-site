import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { siteConfig } from '@/data/config';

export const metadata: Metadata = {
  title: 'Projects',
  description: `Explore ${siteConfig.name}'s portfolio of DevOps, blockchain, and infrastructure projects including open-source contributions.`,
  alternates: {
    canonical: `${siteConfig.siteUrl}/projects/`,
  },
  openGraph: {
    url: `${siteConfig.siteUrl}/projects/`,
  },
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return children;
}
