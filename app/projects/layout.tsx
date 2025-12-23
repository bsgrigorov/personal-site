import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: "Learn about Borislav Grigorov's projects.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
