import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { siteConfig } from '@/data/config';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${siteConfig.name} - ${siteConfig.jobTitle}. Connect via email, LinkedIn, GitHub, or social media.`,
  alternates: {
    canonical: `${siteConfig.siteUrl}/contact/`,
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
