# Design Goals

This project follows these design principles. Feedback and discussion are encouraged. Please feel free to submit an issue or get in touch.

## Simple

1. Someone learning web development should be able to clone this repo and start making it their own within a few minutes.
2. Does not require reading extensive documentation to get started.
3. Clear project structure with intuitive file organization.

## Fast

1. Follows [JAMStack best practices](https://jamstack.org/best-practices/). Everything that can be pre-rendered is pre-rendered via static export.
2. Time to interact should be very fast (< 250 ms). Optimized for small bundle sizes.
3. Uses Next.js built-in optimizations (font loading, code splitting, static generation).
4. Turbopack for instant development feedback.

## Good Developer Experience

1. **Modular**
   - Relatively straightforward to replace content or add new features
   - Good separation of concerns - components manage their own state
   - Limited vertical depth (changes are self-encapsulated)
   - Correct abstractions - Next.js handles complexity, developers focus on content

2. **Type-Safe**
   - Full TypeScript throughout the codebase
   - Interfaces define data shapes clearly
   - Catch errors at compile time, not runtime

3. **Good Documentation**
   - Comments exist where appropriate
   - Code is readable and self-documenting
   - Comprehensive docs in `/docs` folder

4. **Lean**
   - Actively prune old and dead code
   - New features affecting the entire project are carefully considered
   - Buy, don't build - use popular npm libraries when possible

5. **Consistent**
   - ESLint + Prettier for consistent code style
   - Husky pre-commit hooks prevent style violations
   - Path aliases (`@/`) for clean imports
   - Functional components with hooks

## Stable

1. **Modern but Boring**
   - TypeScript over experimental language features
   - Prefer popular, well-maintained npm packages
   - Next.js App Router (stable since Next.js 13.4)

2. **Maintainable**
   - Easy setup with pnpm
   - Static export works anywhere
   - Limited external dependencies
   - Dependencies kept up-to-date

3. **Well Tested**
   - Jest + React Testing Library
   - Type checking as first line of defense
   - Linting catches common issues

4. **Stable API**
   - Easy for forks to adopt changes from main
   - Data files are clearly structured
   - Breaking changes are documented

## Technology Choices

| Choice | Rationale |
|--------|-----------|
| **Next.js** | Industry standard React framework, excellent static export |
| **TypeScript** | Type safety, better IDE support, self-documenting |
| **pnpm** | Fast, disk-efficient, strict by default |
| **SCSS** | Familiar CSS syntax with variables, nesting, mixins |
| **Fuse.js** | Lightweight fuzzy search, works with static export |
| **Vercel** | Zero-config Next.js deployment |
| **Husky** | Enforce quality before commits reach the repo |

## References

- [Next.js Design Principles](https://nextjs.org/docs)
- [React Design Principles](https://legacy.reactjs.org/docs/design-principles.html)
- [The Twelve-Factor App](https://12factor.net/)
