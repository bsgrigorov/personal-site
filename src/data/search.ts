/**
 * Search index data aggregator
 * Combines all site data into a searchable format for Fuse.js
 */

import work from './resume/work';
import degrees from './resume/degrees';
import { skills } from './skills';
import projects from './projects';
import certifications from './certifications';
import { siteConfig } from './config';
import { slugify } from '@/utils/slugify';

export interface SearchItem {
  id: string;
  type: 'work' | 'skill' | 'project' | 'certification' | 'education' | 'about';
  title: string;
  subtitle?: string;
  content: string;
  link: string;
  date?: string;
}


// Build the search index
export const buildSearchIndex = (): SearchItem[] => {
  const items: SearchItem[] = [];

  // Work experience
  work.forEach((job, idx) => {
    const id = `work-${idx}`;
    items.push({
      id,
      type: 'work',
      title: job.position,
      subtitle: job.name,
      content: `${job.name} - ${job.position}. ${(job.highlights ?? []).join(' ')}`,
      link: `/resume/?highlight=${id}`,
      date: job.startDate,
    });
  });

  // Skills
  Object.entries(skills).forEach(([category, skillList]) => {
    skillList.forEach((skill, idx) => {
      const id = `skill-${slugify(category)}-${idx}`;
      const level =
        skill.competency >= 5
          ? 'Expert'
          : skill.competency >= 4
            ? 'Advanced'
            : skill.competency >= 3
              ? 'Intermediate'
              : 'Beginner';
      items.push({
        id,
        type: 'skill',
        title: skill.title,
        subtitle: category,
        content: `${skill.title} - ${category} - ${level} level${skill.favourite ? ' (Favourite)' : ''}`,
        link: `/skills/?highlight=${id}`,
      });
    });
  });

  // Projects
  projects.forEach((project, idx) => {
    const id = `project-${idx}`;
    items.push({
      id,
      type: 'project',
      title: project.title,
      content: project.desc,
      link: `/projects/?highlight=${id}`,
      date: project.date,
    });
  });

  // Certifications
  certifications.forEach((cert, idx) => {
    const id = `cert-${idx}`;
    items.push({
      id,
      type: 'certification',
      title: cert.label,
      content: `${cert.label} certification`,
      link: `/certifications/?highlight=${id}`,
      date: cert.date,
    });
  });

  // Education
  degrees.forEach((degree, idx) => {
    const id = `edu-${idx}`;
    items.push({
      id,
      type: 'education',
      title: degree.school,
      subtitle: `${degree.degree} ${degree.specialization}`,
      content: `${degree.school} - ${degree.degree} in ${degree.specialization}, ${degree.location}, ${degree.year}`,
      link: `/resume/?highlight=${id}`,
    });
  });

  // About / General info
  items.push({
    id: 'general-info',
    type: 'about',
    title: siteConfig.name,
    subtitle: siteConfig.jobTitle,
    content: `${siteConfig.name} (${siteConfig.nickname}) - ${siteConfig.jobTitle} at ${siteConfig.company}. Based in ${siteConfig.location}. ${siteConfig.description}`,
    link: '/about/',
  });

  return items;
};

// Pre-built index for static export
export const searchIndex = buildSearchIndex();
