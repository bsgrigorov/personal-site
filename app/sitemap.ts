import { siteConfig } from '@/data/config';

export const dynamic = 'force-static';

// Route definitions with their properties
const routes = [
  { path: '', changeFrequency: 'monthly' as const, priority: 1 },
  { path: 'about', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: 'resume', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: 'skills', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: 'certifications', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: 'projects', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: 'contact', changeFrequency: 'yearly' as const, priority: 0.5 },
  { path: 'stats', changeFrequency: 'weekly' as const, priority: 0.5 },
];

// Use array format instead of MetadataRoute.Sitemap to preserve trailing slashes
// Next.js strips trailing slashes from sitemap URLs when using the typed interface
export default function sitemap() {
  const baseUrl = siteConfig.siteUrl;
  const currentDate = new Date();

  return routes.map((route) => ({
    // Ensure trailing slashes are preserved for all routes
    // Root path gets just baseUrl/, others get baseUrl/path/
    url: route.path === '' ? `${baseUrl}/` : `${baseUrl}/${route.path}/`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
