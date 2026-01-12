# Personal Website

See: [bgrigorov.com](https://bgrigorov.com).

My personal website. An [MIT](https://github.com/bsgrigorov/personal-site/blob/main/LICENSE) licensed, simple, easily modifiable, statically-exportable [Next.js](https://nextjs.org/) application built with TypeScript. Deploys automatically using [Vercel](https://vercel.com/) or [GitHub Pages](https://pages.github.com/).

## ✨ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | [Next.js 16](https://nextjs.org/) with App Router |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | SCSS with CSS Modules |
| **Package Manager** | [pnpm](https://pnpm.io/) |
| **Hosting** | [Vercel](https://vercel.com/), [GitHub Pages](https://pages.github.com/), [Cloudflare Pages](https://pages.cloudflare.com/) |
| **CDN/DNS** | [Cloudflare](https://www.cloudflare.com/) |
| **Analytics** | [Google Analytics 4](https://analytics.google.com/) + [Vercel Analytics](https://vercel.com/analytics) (optional) |
| **Search** | [Fuse.js](https://fusejs.io/) for fuzzy search across experience, skills, projects |
| **Icons** | [Font Awesome](https://fontawesome.com/) via `@fortawesome/react-fontawesome` |
| **Markdown** | [markdown-to-jsx](https://github.com/quantizor/markdown-to-jsx) |
| **Dates** | [Day.js](https://day.js.org/) |
| **Testing** | [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/) |
| **Linting** | [ESLint 9](https://eslint.org/) (flat config) + [Prettier](https://prettier.io/) |
| **Git Hooks** | [Husky](https://typicode.github.io/husky/) |

## 🛠 Adapting this Project

Want to create your own personal website based on this project? You can set it up in as little as 30 minutes! Follow the setup instructions below and check out the **[detailed guide and checklist](./docs/adapting-guide.md)**.

## 🤝 Contributing

Your contributions are warmly welcomed! Please review the [design goals](./docs/design-goals.md), [roadmap](./docs/roadmap.md), and [contributing guidelines](./docs/contributing.md).

## 🔧 Dependencies

Ensure you have:
- [Node.js](https://nodejs.org/) v22.x (see `engines` in `package.json`)
- [pnpm](https://pnpm.io/) v10.x or later

Optionally, use [nvm](https://github.com/nvm-sh/nvm) to manage Node versions.

## 🚀 Setup and Running

1. Ensure you're on Node v22:

    ```bash
    nvm install 22
    node --version
    ```

2. Install pnpm (if not already installed):

    ```bash
    corepack enable
    corepack prepare pnpm@latest --activate
    ```

3. Install dependencies:

    ```bash
    pnpm install
    ```

4. Create environment file:

    ```bash
    cp sample.env .env.local
    ```

5. Start the development server:

    ```bash
    pnpm dev
    ```

The application will be available at [http://localhost:3000/](http://localhost:3000/).

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start dev server with Turbopack (hot reload) |
| `pnpm build` | Create production build in `out/` |
| `pnpm start` | Build and serve production files locally |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Run ESLint with auto-fix |
| `pnpm format` | Format code with Prettier |
| `pnpm format:check` | Check formatting |
| `pnpm type-check` | Run TypeScript type checking |
| `pnpm test` | Run Jest tests |
| `pnpm analyze` | Analyze bundle size |

## 🚢 Deploying

The site generates a static export that can be hosted anywhere. Run `pnpm build` to generate files in `out/`.

### Vercel (Recommended)

1. Push your repository to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Vercel auto-detects Next.js and deploys

Set environment variables in Vercel dashboard:
- `NEXT_PUBLIC_GA_TRACKING_ID` - Google Analytics 4 Measurement ID

### GitHub Pages

1. Update the workflow in `.github/workflows/github-pages.yml`
2. Adjust the `homepage` value in `package.json`
3. Update `public/CNAME` with your custom domain (or remove it)
4. Push to `main` - deployment is automatic via GitHub Actions

### Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create**
2. Connect your GitHub repository
3. Set build command: `pnpm build` and output directory: `out`
4. Deploy!

### Static Export

For manual deployment to any static host:

```bash
pnpm build
```

This generates a static site in the `out/` directory.

## 📁 Project Structure

```
personal-site/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, analytics, nav)
│   ├── page.tsx            # Home page
│   ├── about/              # /about route
│   ├── resume/             # /resume route
│   ├── skills/             # /skills route
│   └── ...
├── src/
│   ├── components/         # Reusable React components
│   ├── data/               # Site content (TypeScript)
│   │   ├── resume/         # Work experience, education
│   │   ├── skills.ts       # Skills data
│   │   └── ...
│   └── static/css/         # SCSS stylesheets
├── public/                 # Static assets
├── docs/                   # Documentation
└── out/                    # Static export output (gitignored)
```

See [NEXTJS_MIGRATION.md](./docs/NEXTJS_MIGRATION.md) for detailed architecture documentation.

## 🔍 Features

### Fuzzy Search

The site includes a powerful fuzzy search powered by [Fuse.js](https://fusejs.io/) that searches across:
- Work experience
- Skills and technologies
- Projects
- Certifications
- Education

Press `/` or click the search icon to open the search modal.

### SEO & Analytics

- Automatic sitemap generation (`app/sitemap.ts`)
- Open Graph and Twitter Card meta tags
- Structured data (JSON-LD) for rich search results
- Google Analytics 4 integration
- Security headers via `vercel.json`

See [SEO.md](./docs/SEO.md) and [google-analytics.md](./docs/google-analytics.md) for details.

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [Adapting Guide](./docs/adapting-guide.md) | How to customize this site for yourself |
| [Next.js Migration](./docs/NEXTJS_MIGRATION.md) | Architecture and technical details |
| [Design Goals](./docs/design-goals.md) | Project philosophy and principles |
| [Roadmap](./docs/roadmap.md) | Future plans and improvements |
| [Contributing](./docs/contributing.md) | How to contribute |
| [SEO](./docs/SEO.md) | SEO configuration |
| [Google Analytics](./docs/google-analytics.md) | Analytics setup |
| [Cloudflared](./docs/cloudflared.md) | Local tunnel setup |

## 🙌 Acknowledgements

- Initial template from [Future Imperfect](https://html5up.net/future-imperfect) by [@ajlkn](https://github.com/ajlkn) for [HTML5 UP](https://html5up.net).
- Originally forked from [mldangelo/personal-site](https://github.com/mldangelo/personal-site).
