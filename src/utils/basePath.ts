// Get basePath for GitHub Pages deployment
// On GitHub Pages: /personal-site, On Vercel: ''
// Using NEXT_PUBLIC_ prefix so it's available in client-side JS
const isGitHubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true';
const repoName = process.env.NEXT_PUBLIC_GITHUB_REPOSITORY_NAME || '';

export const basePath = isGitHubPages ? `/${repoName}` : '';

// Helper to prefix paths with basePath (for images in public folder)
export const withBasePath = (path: string): string => `${basePath}${path}`;
