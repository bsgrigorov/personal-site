# Personal Site Development Rules

## Project Overview

This is a personal portfolio website built with Next.js 16 (App Router) and React 19.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: SCSS (Sass)
- **Fonts**: Orbitron, Exo 2, JetBrains Mono (Google Fonts)
- **Page Transitions**: next-view-transitions (native View Transitions API)
- **Icons**: FontAwesome
- **Package Manager**: pnpm (always use pnpm, never npm or yarn)

## Project Structure

```
app/                    # Next.js App Router pages
  components/           # App-specific components (PageWrapper)
  [page]/               # Each page has layout.tsx and page.tsx
src/
  components/           # Reusable React components
  data/                 # Static data (config, resume, projects, etc.)
  static/css/           # SCSS stylesheets
  types/                # TypeScript type definitions
public/                 # Static assets (images, favicon)
```

## Key Patterns

### Page Structure
- All pages use `PageWrapper` component for consistent layout and animations
- Each page has an `<article className="post">` as the main content container
- Page transitions: slide left on enter, slide right on exit

### Styling
- Uses SCSS with variables defined in `src/static/css/libs/_vars.scss`
- Cyberpunk theme with neon accents
- Responsive breakpoints: xlarge, large, medium, small, xsmall

### Data
- Site configuration in `src/data/config.ts`
- Content data in `src/data/` (about.ts, projects.ts, resume/, etc.)

## Commands

```bash
pnpm dev          # Start dev server with Turbopack
pnpm build        # Production build
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint issues
pnpm format       # Format with Prettier
pnpm type-check   # TypeScript check
```

## Deployment

- Deployed on Vercel
- Static export enabled (`output: 'export'` in next.config.ts)
- CNAME configured for custom domain

## Important Notes

1. Always use `pnpm` - this project uses pnpm as package manager
2. Run `source /Users/bsgrigorov/dev/repos/home/zsh-env/shell/cursor-entrypoint-extended.sh` if pnpm is not available
3. Check lints after making changes to TypeScript/React files
4. The site uses a cyberpunk aesthetic - maintain dark theme with neon accents

