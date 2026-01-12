'use client';

import Link from 'next/link';

import Cell from '@/components/Projects/Cell';
import { useSearchHighlight } from '@/components/Search/useSearchHighlight';
import projects from '@/data/projects';

import PageWrapper from '../components/PageWrapper';

export default function ProjectsPage() {
  useSearchHighlight();

  return (
    <PageWrapper>
      <article className="post" id="projects">
        <header>
          <div className="title">
            <h2>
              <Link href="/projects">Projects</Link>
            </h2>
            <p>A selection of projects that I&apos;m not too ashamed of</p>
          </div>
        </header>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <Cell data={project} key={project.title} id={`project-${idx}`} />
          ))}
        </div>
      </article>
    </PageWrapper>
  );
}
