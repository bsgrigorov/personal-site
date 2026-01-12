import type { NextConfig } from 'next';
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// GitHub Pages requires basePath when not using custom domain
// Using NEXT_PUBLIC_ prefix so values are available in client-side JS too
const isGitHubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true';
const repoName = process.env.NEXT_PUBLIC_GITHUB_REPOSITORY_NAME || '';

const nextConfig: NextConfig = {
  output: 'export', // Static export for GitHub Pages
  basePath: isGitHubPages ? `/${repoName}` : '',
  assetPrefix: isGitHubPages ? `/${repoName}/` : '',
  allowedDevOrigins: ['3000.darkhold.dev'], // Cloudflare tunnel
  images: {
    unoptimized: true, // Required for static export
  },
  sassOptions: {
    includePaths: ['./src/static/css'],
    silenceDeprecations: ['import'], // Silence @import deprecation warnings
  },
  trailingSlash: true,

  // Turbopack configuration
  turbopack: {
    resolveExtensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },

  // Compiler optimizations - target modern browsers, reduce polyfills
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Experimental features
  experimental: {
    optimizePackageImports: [
      '@fortawesome/react-fontawesome',
      '@fortawesome/fontawesome-svg-core',
    ],
  },
};

export default withBundleAnalyzer(nextConfig);
