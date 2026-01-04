import type { NextConfig } from 'next';
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  output: 'export', // Static export for GitHub Pages
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

  // Experimental features
  experimental: {
    optimizePackageImports: [
      '@fortawesome/react-fontawesome',
      '@fortawesome/fontawesome-svg-core',
    ],
  },
};

export default withBundleAnalyzer(nextConfig);
