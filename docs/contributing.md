# How to Contribute

Contributions are encouraged! Please feel free to get in touch, take a look at the [roadmap](./roadmap.md), or open a PR.

## Getting Started

1. Fork the repository
2. Clone your fork
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Create a branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Run Development Server

```bash
pnpm dev
```

### Before Committing

The project uses Husky to run pre-commit hooks automatically. These hooks:
- Run ESLint to check for code issues
- Run Prettier to format code
- Run type checking

You can run these manually:

```bash
pnpm lint        # Check for lint issues
pnpm lint:fix    # Auto-fix lint issues
pnpm format      # Format code with Prettier
pnpm type-check  # Run TypeScript type checking
pnpm test        # Run tests
```

## Guidelines

Here are recommendations to land PRs quickly:

- **Small PRs are better** - If you do two unrelated things, split into two PRs
- **Review the [design goals](./design-goals.md)** - Ensure your changes align with project philosophy
- **Respect the [Contributor Covenant](https://www.contributor-covenant.org/)**

## Preparing a Pull Request

1. **Write a good summary** in your PR description:
   - Concisely explain your changes
   - Justify why your changes are important
   - Explain how to test your change (if not obvious)

2. **Make sure everything runs:**
   ```bash
   pnpm build      # Ensure production build works
   pnpm lint       # No lint errors
   pnpm type-check # No type errors
   pnpm test       # Tests pass
   ```

3. **Write tests** (if appropriate)

4. **Self-review your branch:**
   - Lint your code
   - Add comments where appropriate
   - Minimize changes in unrelated files
   - Remove extra print statements, commented-out code, unused variables
   - Check your spelling

## Project Structure

| Directory | Purpose |
|-----------|---------|
| `app/` | Next.js App Router pages and layouts |
| `src/components/` | Reusable React components |
| `src/data/` | Site content and configuration |
| `src/static/css/` | SCSS stylesheets |
| `public/` | Static assets (images, favicon) |
| `docs/` | Documentation |

## Code Style

- **TypeScript** - All new code should be TypeScript
- **Functional Components** - Use hooks, not class components
- **Path Aliases** - Use `@/` imports (e.g., `@/components/...`)
- **SCSS** - Use existing SCSS patterns and variables

## References

- [Google Engineering Practices](https://github.com/google/eng-practices) (Recommended Reading)
- [Conventional Commits](https://www.conventionalcommits.org/)
