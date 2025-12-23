import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { siteConfig } from '@/data/config';

export const metadata: Metadata = {
  title: 'Skills',
  description: `${siteConfig.name}'s Skills and Technologies.`,
};

export default function SkillsLayout({ children }: { children: ReactNode }) {
  return children;
}
