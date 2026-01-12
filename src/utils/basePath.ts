// Get basePath for GitHub Pages deployment
// On GitHub Pages: /personal-site, On Vercel: ''
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repoName = process.env.GITHUB_REPOSITORY_NAME || '';

export const basePath = isGitHubPages ? `/${repoName}` : '';

// Helper to prefix paths with basePath (for images in public folder)
export const withBasePath = (path: string): string => `${basePath}${path}`;
