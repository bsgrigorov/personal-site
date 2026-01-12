# Roadmap

This site has been a work in progress since 2014. It was originally forked from [mldangelo/personal-site](https://github.com/mldangelo/personal-site) and has since been modernized with Next.js 16, TypeScript, and current best practices. It will continue to evolve as a WIP guided by the following goals.

## ✅ Completed

- **Next.js Migration** - Migrated from Create React App to Next.js 16 with App Router
- **TypeScript** - Full TypeScript conversion for type safety
- **Turbopack** - Using Turbopack for fast development builds
- **Static Export** - Built-in static export replacing react-snap
- **ESLint 9** - Modern flat config ESLint setup
- **Prettier** - Consistent code formatting
- **Husky** - Git hooks for pre-commit linting and formatting
- **Fuse.js Search** - Fuzzy search across all site content (experience, skills, projects)
- **Font Optimization** - Next.js font loading for optimal performance
- **SEO Improvements** - Structured data (JSON-LD), Open Graph, Twitter Cards
- **Security Headers** - Configured via `vercel.json`
- **pnpm** - Modern, fast package manager
- **Path Aliases** - Clean imports with `@/` prefix

## 🔄 In Progress

- Better test coverage (Jest + React Testing Library)
- Performance optimization (bundle analysis, code splitting)

## 🎯 Future Direction

### Improvements

- [ ] Use [JSON Resume](https://jsonresume.org/) standard for resume data
- [ ] Improve code splitting - some bundles are very small
- [ ] Make styles more modular (CSS Modules or Tailwind consideration)
- [ ] Build Font Awesome icon library to reduce bundle size
- [ ] Simplify favicon setup - see [minimal favicon approach](https://news.ycombinator.com/item?id=25520655)
- [ ] Add Puppeteer/Playwright for E2E testing
- [ ] Google Lighthouse CI integration

### New Features

- [ ] Blog/posts section with MDX support
- [ ] Dark mode toggle
- [ ] i18n/internationalization support
- [ ] PDF resume generation
- [ ] Reading list / bookmarks section

### Repository

- [ ] Branch protection rules for `main`
- [ ] Automated releases with semantic versioning
- [ ] Better issue templates
- [ ] Dependabot for automated dependency updates

## 📊 Metrics to Track

- Lighthouse scores (Performance, Accessibility, Best Practices, SEO)
- Bundle size trends
- Core Web Vitals (LCP, FID, CLS)

## References

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Platform](https://vercel.com/)
- [JAMstack Best Practices](https://jamstack.org/best-practices/)
