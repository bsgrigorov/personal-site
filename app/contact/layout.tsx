import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { siteConfig } from '@/data/config';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${siteConfig.name}`,
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
