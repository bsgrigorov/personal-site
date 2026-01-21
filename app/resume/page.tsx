'use client';

import Link from 'next/link';

// import Courses from '@/components/Resume/Courses';
import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import LinkedInRecommendations from '@/components/Resume/LinkedInRecommendations';
import References from '@/components/Resume/References';
import ScrollNav from '@/components/ScrollNav/ScrollNav';
import { useSearchHighlight } from '@/components/Search/useSearchHighlight';
// import courses from '@/data/resume/courses';
import degrees from '@/data/resume/degrees';
import work from '@/data/resume/work';

import PageWrapper from '../components/PageWrapper';

const sections = [
  { name: 'Education', id: 'education' },
  { name: 'Experience', id: 'experience' },
  // { name: 'Courses', id: 'courses' },
  { name: 'Recommendations', id: 'recommendations' },
  { name: 'References', id: 'references' },
];

export default function ResumePage() {
  useSearchHighlight();

  return (
    <PageWrapper>
      <ScrollNav sections={sections} />
      <article className="post" id="resume">
        <header>
          <div className="title">
            <h2>
              <Link href="/resume">Resume</Link>
            </h2>
            <div className="link-container">
              {sections.map((section) => (
                <h4 key={section.id}>
                  <a href={`#${section.id}`}>{section.name}</a>
                </h4>
              ))}
            </div>
          </div>
        </header>

        <section id="education" className="resume-section education">
          <Education data={degrees} />
        </section>

        <section id="experience" className="resume-section experience">
          <Experience data={work} />
        </section>

        {/* <section id="courses" className="resume-section courses">
          <Courses data={courses} />
        </section> */}

        <section id="recommendations" className="resume-section recommendations">
          <LinkedInRecommendations />
        </section>

        <section id="references" className="resume-section references">
          <References />
        </section>
      </article>
    </PageWrapper>
  );
}
