import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills',
  description: "Borislav Grigorov's Skills and Technologies.",
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
