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


// Keyword synonyms for better discoverability
const WORK_KEYWORDS = 'job jobs work experience employment career history resume cv';
const SKILL_KEYWORDS = 'skill skills technology tech stack technologies expertise proficiency';
const PROJECT_KEYWORDS = 'project projects portfolio work side-project';
const CERT_KEYWORDS = 'certification certifications certificate certificates badge badges credential credentials';
const EDU_KEYWORDS = 'education school university college degree diploma academic';

// Build the search index
export const buildSearchIndex = (): SearchItem[] => {
  const items: SearchItem[] = [];

  // Category-level entries for generic searches
  items.push({
    id: 'category-work',
    type: 'work',
    title: 'Work Experience',
    subtitle: 'Jobs & Career History',
    content: `${WORK_KEYWORDS} - View all work experience and employment history`,
    link: '/resume/',
  });

  items.push({
    id: 'category-skills',
    type: 'skill',
    title: 'Skills',
    subtitle: 'Technologies & Expertise',
    content: `${SKILL_KEYWORDS} - View all technical skills and proficiencies`,
    link: '/skills/',
  });

  items.push({
    id: 'category-projects',
    type: 'project',
    title: 'Projects',
    subtitle: 'Portfolio & Side Projects',
    content: `${PROJECT_KEYWORDS} - View all projects and portfolio items`,
    link: '/projects/',
  });

  items.push({
    id: 'category-certifications',
    type: 'certification',
    title: 'Certifications',
    subtitle: 'Credentials & Badges',
    content: `${CERT_KEYWORDS} - View all professional certifications`,
    link: '/certifications/',
  });

  items.push({
    id: 'category-education',
    type: 'education',
    title: 'Education',
    subtitle: 'Academic Background',
    content: `${EDU_KEYWORDS} - View education and academic history`,
    link: '/resume/',
  });

  // Work experience
  work.forEach((job, idx) => {
    const id = `work-${idx}`;
    items.push({
      id,
      type: 'work',
      title: job.position,
      subtitle: job.name,
      content: `${WORK_KEYWORDS} ${job.name} - ${job.position}. ${(job.highlights ?? []).join(' ')}`,
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
        content: `${SKILL_KEYWORDS} ${skill.title} - ${category} - ${level} level${skill.favourite ? ' (Favourite)' : ''}`,
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
      content: `${PROJECT_KEYWORDS} ${project.desc}`,
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
      content: `${CERT_KEYWORDS} ${cert.label}`,
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
      content: `${EDU_KEYWORDS} ${degree.school} - ${degree.degree} in ${degree.specialization}, ${degree.location}, ${degree.year}`,
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
