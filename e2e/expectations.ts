/** Public pages included in the main nav (and home). */
export const publicPages = [
  { path: '/', articleId: 'index', heading: 'Welcome' },
  { path: '/about', articleId: 'about', heading: 'About Me' },
  { path: '/resume', articleId: 'resume', heading: 'Resume' },
  { path: '/skills', articleId: 'skills', heading: 'Skills' },
  { path: '/certifications', articleId: 'certifications', heading: 'Certifications' },
  { path: '/projects', articleId: 'projects', heading: 'Projects' },
  { path: '/stats', articleId: 'stats', heading: 'Stats' },
  { path: '/contact', articleId: 'contact', heading: 'Contact' },
] as const;
