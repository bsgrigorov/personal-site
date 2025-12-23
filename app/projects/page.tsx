import Link from 'next/link';

import Cell from '@/components/Projects/Cell';
import projects from '@/data/projects';

import PageWrapper from '../components/PageWrapper';

export default function ProjectsPage() {
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
          {projects.map((project) => (
            <Cell data={project} key={project.title} />
          ))}
        </div>
      </article>
    </PageWrapper>
  );
}
