import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume',
  description: "Borislav Grigorov's Resume.",
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
