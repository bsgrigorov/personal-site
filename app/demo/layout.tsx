import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Component Demo | Borislav Grigorov',
  description: 'Demo page showcasing template components',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}

