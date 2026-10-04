---
version: alpha
name: bgrigorov-com
description: Cyberpunk personal portfolio — dark purple tint, cyan/magenta accents, Orbitron headings.
colors:
  bg: "#0d0d12"
  bg-alt: "#13131a"
  fg: "#c0c0cc"
  fg-bold: "#e0e0f0"
  fg-light: "#6b6b7a"
  accent: "#06b6d4"
  accent-secondary: "#c026d3"
  accent-tertiary: "#8b5cf6"
  favourite: "#facc15"
typography:
  h1:
    fontFamily: Orbitron
    fontSize: 2.5rem
    fontWeight: 700
    letterSpacing: "0.15em"
  body-md:
    fontFamily: Exo 2
    fontSize: 1rem
    lineHeight: 1.65
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
rounded:
  sm: 4px
  md: 8px
spacing:
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg}"
    rounded: "{rounded.sm}"
    padding: 12px
---

## Overview

Cyberpunk portfolio aesthetic: deep dark surfaces with purple tint, cyan primary accent, magenta and purple secondary accents, gold highlights. Next.js 16 App Router, static export (`output: 'export'`), SCSS modules. Page transitions via next-view-transitions. Product principles (simplicity, speed): see `docs/design-goals.md` (not visual tokens).

## Colors

Palette in `src/static/css/libs/_vars.scss` map `$palette`. Border tokens use rgba purple tints (`border`, `border-bg`, `border-alt`); glow helpers in `$palette` (`glow-cyan`, etc.).

## Typography

Google Fonts via layout CSS variables:

- **Headings:** Orbitron (`--font-heading`)
- **Body:** Exo 2 (`--font-body`)
- **Mono:** JetBrains Mono (`--font-mono`)

## Layout

- App routes: `app/` with `PageWrapper`, `<article className="post">` per page.
- Breakpoints: xlarge, large, medium, small, xsmall (SCSS).
- Content: static imports from `src/data/`.

## Components

Reusable components in `src/components/`. Font Awesome icons via `@fortawesome/react-fontawesome`.

## Motion

Page enter/exit: slide left on enter, slide right on exit. Durations in `$duration` map (`menu`, `transition`).

## Do's and Don'ts

- **Do** edit `$palette` and `$font` in `_vars.scss` first, then sync this file.
- **Do** run `npx @google/design.md lint DESIGN.md` when changing tokens here.
- **Don't** use raw hex in new TSX/SCSS outside `_vars.scss` (existing one-offs: fix only when touched).
- **Don't** use SSR, API routes, or ISR (static export constraints in `AGENTS.md`).
