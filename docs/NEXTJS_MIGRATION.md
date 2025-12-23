# Next.js Migration Documentation

This document describes the migration from Create React App (CRA) to Next.js 16 with the App Router.

## Overview

| Aspect | Before | After |
|--------|--------|-------|
| Framework | Create React App | Next.js 16 |
| Language | JavaScript | TypeScript |
| Routing | react-router-dom | Next.js App Router |
| Bundler | Webpack | Turbopack (dev) |
| SSG | react-snap | Built-in static export |
| Linting | ESLint 8 | ESLint 9 (flat config) |

## Project Structure

```
personal-site/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (fonts, analytics, nav)
│   ├── page.tsx                  # Home page (/)
│   ├── not-found.tsx             # 404 page
│   ├── sitemap.ts                # Auto-generated sitemap
│   ├── favicon.ico
│   ├── components/
│   │   └── PageWrapper.tsx       # Sidebar + scroll-to-top wrapper
│   ├── types/
│   │   └── markdown.d.ts
│   ├── about/
│   │   ├── layout.tsx            # Metadata for /about
│   │   └── page.tsx              # Page component
│   ├── resume/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── skills/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── certifications/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── projects/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── contact/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── stats/
│       ├── layout.tsx
│       └── page.tsx
├── src/
│   ├── components/               # Reusable components (.tsx)
│   │   ├── Certifications/
│   │   ├── Contact/
│   │   ├── Projects/
│   │   ├── Resume/
│   │   ├── Skills/
│   │   ├── Stats/
│   │   └── Template/             # Navigation, SideBar, etc.
│   ├── data/                     # Data files (.ts)
│   │   ├── about.ts              # Markdown as string constant
│   │   ├── certifications.ts
│   │   ├── contact.ts
│   │   ├── projects.ts
│   │   ├── routes.ts
│   │   ├── skills.ts
│   │   ├── resume/
│   │   │   ├── courses.ts
│   │   │   ├── degrees.ts
│   │   │   └── work.ts
│   │   └── stats/
│   │       ├── personal.tsx
│   │       └── site.ts
│   ├── static/
│   │   └── css/                  # SCSS styles
│   └── types/
│       └── jest-dom.d.ts
├── public/                       # Static assets
│   └── images/
├── out/                          # Static export output (git-ignored)
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── .prettierrc
├── jest.config.ts
├── jest.setup.ts
├── postcss.config.js
└── package.json
```

## Key Concepts

### App Router

Next.js App Router uses file-based routing in the `app/` directory:

- `app/page.tsx` → `/`
- `app/about/page.tsx` → `/about`
- `app/resume/page.tsx` → `/resume`

Each route can have:
- `page.tsx` - The page component
- `layout.tsx` - Layout wrapper + metadata

### Server vs Client Components

By default, components in the `app/` directory are **Server Components**. Components that need browser APIs or React hooks must be marked as **Client Components**:

```tsx
'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
```

**Client Components in this project:**
- `app/components/PageWrapper.tsx`
- `src/components/Template/Navigation.tsx`
- `src/components/Template/SideBar.tsx`
- `src/components/Template/Hamburger.tsx`
- `src/components/Skills/Skills.tsx`
- `src/components/Contact/EmailLink.tsx`

### Static Export

The site is configured for static export in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,  // Required for static export
  },
  trailingSlash: true,  // Generates /about/index.html
};
```

Running `pnpm build` generates static HTML in the `out/` directory.

### Metadata (SEO)

Each page defines metadata in its `layout.tsx`:

```tsx
// app/about/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about me.',
};
```

The root `app/layout.tsx` defines default metadata and the template:

```tsx
export const metadata: Metadata = {
  title: {
    default: 'Borislav Grigorov',
    template: '%s | Borislav Grigorov',
  },
  // ...
};
```

### Font Optimization

Fonts are loaded via `next/font/google` for optimal performance:

```tsx
// app/layout.tsx
import { Raleway, Source_Sans_3 } from 'next/font/google';

const sourceSans = Source_Sans_3({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});
```

CSS references these via variables with fallbacks:

```scss
// src/static/css/libs/_vars.scss
$font: (
  family: (var(--font-source-sans), 'Source Sans Pro', Helvetica, sans-serif),
  family-heading: (var(--font-raleway), 'Raleway', Helvetica, sans-serif),
);
```

### Path Aliases

Import paths use the `@/` alias configured in `tsconfig.json`:

```tsx
import Navigation from '@/components/Template/Navigation';
import { routes } from '@/data/routes';
```

Maps to:
- `@/components/*` → `src/components/*`
- `@/data/*` → `src/data/*`
- `@/static/*` → `src/static/*`

### Analytics

Google Analytics is integrated via `@next/third-parties`:

```tsx
// src/components/Template/GoogleAnalytics.tsx
import { GoogleAnalytics as GA } from '@next/third-parties/google';

const GoogleAnalytics = () => {
  const gaId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
  if (!gaId) return null;
  return <GA gaId={gaId} />;
};
```

Set the tracking ID in `.env.local`:
```
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
```

## Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start dev server with Turbopack (hot reload) |
| `pnpm build` | Create production build in `out/` |
| `pnpm start` | Build and serve production files |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Run ESLint with auto-fix |
| `pnpm format` | Format code with Prettier |
| `pnpm format:check` | Check formatting |
| `pnpm type-check` | Run TypeScript type checking |
| `pnpm test` | Run Jest tests |

## Deployment

The `out/` directory contains static HTML/CSS/JS that can be deployed to:
- GitHub Pages
- Vercel
- Netlify
- Any static hosting

### GitHub Pages

1. Build: `pnpm build`
2. Deploy the `out/` directory

Or use GitHub Actions to automate this.

## Migration Reference

### Routing Changes

| Before (react-router-dom) | After (Next.js) |
|---------------------------|-----------------|
| `<Link to="/about">` | `<Link href="/about">` |
| `useLocation()` | `usePathname()` |
| `useNavigate()` | `useRouter()` |
| `<Routes><Route path="/">` | `app/page.tsx` |

### Component Changes

| Before | After |
|--------|-------|
| `import { Link } from 'react-router-dom'` | `import Link from 'next/link'` |
| `import { useLocation } from 'react-router-dom'` | `import { usePathname } from 'next/navigation'` |
| `<Helmet><title>...</title></Helmet>` | `export const metadata = { title: '...' }` |
| `<img src="...">` | `<img src="...">` (or `next/image` for optimization) |

### Removed Dependencies

- `react-scripts`
- `react-router-dom`
- `react-helmet-async`
- `react-ga`
- `react-snap`
- `prop-types`

### Added Dependencies

- `next`
- `@next/third-parties`
- `typescript`
- `@types/react`, `@types/react-dom`, `@types/node`
- `eslint` (v9), `typescript-eslint`
- `prettier`

