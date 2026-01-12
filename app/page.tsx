import type { Metadata } from 'next';
import Link from 'next/link';

import { siteConfig } from '@/data/config';
import Search from '@/components/Search/Search';

import PageWrapper from './components/PageWrapper';

export const metadata: Metadata = {
  description: `${siteConfig.name}'s personal website. ${siteConfig.city} based UBC Alumni and ${siteConfig.jobTitle}.`,
  alternates: {
    canonical: `${siteConfig.siteUrl}/`,
  },
};

export default function HomePage() {
  return (
    <PageWrapper>
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              <Link href="/">Welcome</Link>
            </h2>
            <p>Next.js • TypeScript • Vercel</p>
          </div>
        </header>
        <p>
          This is my corner of the internet. Explore my <Link href="/about">story</Link>,
          check out my <Link href="/resume">experience</Link>, browse my{' '}
          <Link href="/projects">projects</Link>, or <Link href="/contact">get in touch</Link>.
        </p>
        <p>
          Built with Next.js and deployed on Vercel. Source on{' '}
          <a href={siteConfig.github.repoUrl}>GitHub</a>.
        </p>
        <Search />
      </article>
    </PageWrapper>
  );
}
