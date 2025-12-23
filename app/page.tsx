import type { Metadata } from 'next';
import Link from 'next/link';

import { siteConfig } from '@/data/config';

import PageWrapper from './components/PageWrapper';

export const metadata: Metadata = {
  description: `${siteConfig.name}'s personal website. ${siteConfig.city} based UBC Alumni and ${siteConfig.jobTitle}.`,
};

export default function HomePage() {
  return (
    <PageWrapper>
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              <Link href="/">About this site</Link>
            </h2>
            <p>
              A beautiful, responsive, statically-generated, react application written with modern
              TypeScript.
            </p>
          </div>
        </header>
        <p>
          Welcome to my website. Please feel free to read more <Link href="/about">about me</Link>,
          or you can check out my <Link href="/resume">resume</Link>, or{' '}
          <Link href="/contact">contact</Link> me.
        </p>
        <p>
          Source available <a href={siteConfig.github.repoUrl}>here</a>.
        </p>
      </article>
    </PageWrapper>
  );
}
