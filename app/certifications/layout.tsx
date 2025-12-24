import type { Metadata } from 'next';

import { siteConfig } from '@/data/config';

export const metadata: Metadata = {
  title: 'Certifications',
  description: `${siteConfig.name}'s professional certifications - AWS, GCP, Azure, Kubernetes (CKAD), and cloud engineering credentials.`,
  alternates: {
    canonical: '/certifications/',
  },
};

export default function CertificationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
