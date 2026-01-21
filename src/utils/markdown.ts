import { slugify } from './slugify';

export interface Section {
  name: string;
  id: string;
}

/**
 * Extract H1 headings from markdown to create navigation sections
 */
export const extractSections = (markdown: string): Section[] => {
  const headingRegex = /^# (.+)$/gm;
  const sections: Section[] = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const name = match[1].trim();
    sections.push({ name, id: slugify(name) });
  }

  return sections;
};
