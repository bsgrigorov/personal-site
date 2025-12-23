import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certifications',
  description: "Learn about Borislav Grigorov's certifications.",
};

export default function CertificationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
