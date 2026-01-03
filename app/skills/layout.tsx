import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { siteConfig } from '@/data/config';

export const metadata: Metadata = {
  title: 'Skills',
  description: `${siteConfig.name}'s technical skills - Kubernetes, Docker, Terraform, AWS, GCP, Azure, CI/CD, and blockchain technologies.`,
  alternates: {
    canonical: `${siteConfig.siteUrl}/skills/`,
  },
  openGraph: {
    url: `${siteConfig.siteUrl}/skills/`,
  },
};

export default function SkillsLayout({ children }: { children: ReactNode }) {
  return children;
}
