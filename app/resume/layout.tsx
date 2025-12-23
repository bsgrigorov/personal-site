import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { siteConfig } from '@/data/config';

export const metadata: Metadata = {
  title: 'Resume',
  description: `${siteConfig.name}'s Resume.`,
};

export default function ResumeLayout({ children }: { children: ReactNode }) {
  return children;
}
