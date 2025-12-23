import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Borislav Grigorov',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
