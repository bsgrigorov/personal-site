import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { siteConfig } from '@/data/config';

export const metadata: Metadata = {
  title: 'Projects',
  description: `Learn about ${siteConfig.name}'s projects.`,
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return children;
}
