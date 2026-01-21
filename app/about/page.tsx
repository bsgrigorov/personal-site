'use client';

import Markdown from 'markdown-to-jsx';
import Link from 'next/link';

import { aboutMarkdown } from '@/data/about';
import ScrollNav from '@/components/ScrollNav/ScrollNav';
import { H1WithId } from '@/components/Markdown/HeadingWithId';
import { extractSections } from '@/utils/markdown';

import PageWrapper from '../components/PageWrapper';

const sections = extractSections(aboutMarkdown);
const count = (str: string) => str.split(/\s+/).filter((word) => word !== '').length;

export default function AboutPage() {
  return (
    <PageWrapper>
      <ScrollNav sections={sections} />
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2>
              <Link href="/about">About Me</Link>
            </h2>
            <p>(in about {count(aboutMarkdown)} words)</p>
          </div>
        </header>
        <Markdown options={{ overrides: { h1: H1WithId } }}>{aboutMarkdown}</Markdown>
      </article>
    </PageWrapper>
  );
}
