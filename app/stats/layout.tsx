import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stats',
  description: 'Some statistics about Borislav Grigorov and bgrigorov.com',
};

export default function StatsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
