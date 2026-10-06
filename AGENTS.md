# Agent guidelines — personal-site (bgrigorov.com)

See `README.md` for setup and scripts. Product principles: `docs/design-goals.md`.

## Stack

- Next.js 16 App Router, React 19, TypeScript, SCSS (CSS modules pattern via global SCSS)
- Fonts: Orbitron, Exo 2, JetBrains Mono (Google Fonts)
- Icons: FontAwesome · Package manager: **pnpm only** (never npm/yarn)
- Static export: `output: 'export'` in `next.config.ts`

## Project structure

```
app/                    # App Router pages (layout + page per route)
  components/           # PageWrapper
src/components/         # Reusable UI
src/data/               # Static content (config, resume, projects, …)
src/static/css/         # SCSS (tokens in libs/_vars.scss)
public/                 # Static assets
```

## Visual design

- Before layout, color, type, or motion changes: read root **`DESIGN.md`** ([Google design.md spec](https://github.com/google-labs-code/design.md)).
- Token source of truth: **`src/static/css/libs/_vars.scss`** (`$palette`, `$font`, `$size`, `$duration`).
- After token changes: `npx @google/design.md lint DESIGN.md`.
- Maintain cyberpunk dark theme with neon accents; do not retheme without explicit ask.

## Patterns

- Pages use `PageWrapper`; main content in `<article className="post">`.
- Data from `src/data/` imports only (no ad hoc fetch for page content).

## Static export — do not use

- `getServerSideProps`, API routes (`app/api/`), dynamic routes without `generateStaticParams`
- `useSearchParams()` without Suspense handling
- `cookies()`, `headers()`, ISR, default Image optimization (`unoptimized: true`)

## Resume PDF (site download)

- Edit `BorislavGrigorov2026-website.pdf` outside the repo (e.g. Google Drive `Work Search/`).
- Refresh the site copy read-only: `cp -p "<source>/BorislavGrigorov2026-website.pdf" public/resume/Borislav-Grigorov-Resume.pdf`
- Never write to Drive paths from automation.

## Commands

```bash
pnpm dev
pnpm build        # run before push — catches SSG errors
pnpm lint
pnpm lint:fix
pnpm format
pnpm type-check
```

Deploy: Vercel / GitHub Pages / Cloudflare Pages (see README).
