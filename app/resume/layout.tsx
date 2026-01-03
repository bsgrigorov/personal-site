import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { siteConfig } from '@/data/config';

export const metadata: Metadata = {
  title: 'Resume',
  description: `${siteConfig.name}'s professional resume - Experience as ${siteConfig.jobTitle} at ${siteConfig.company}, education, and career history.`,
  alternates: {
    canonical: `${siteConfig.siteUrl}/resume/`,
  },
  openGraph: {
    url: `${siteConfig.siteUrl}/resume/`,
  },
};

export default function ResumeLayout({ children }: { children: ReactNode }) {
  return children;
}
