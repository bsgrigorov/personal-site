# Adapting this Website

This guide will help you customize this website for your own personal use. The project is built with Next.js 16, TypeScript, and modern web technologies, making it easy to modify.

## Before You Start

1. Make sure you have a good text editor. [Visual Studio Code](https://code.visualstudio.com/) or [Cursor](https://cursor.sh/) are recommended.
2. Familiarize yourself with the project structure - see [NEXTJS_MIGRATION.md](./NEXTJS_MIGRATION.md) for details.
3. Review `app/layout.tsx` for the root layout and `src/data/routes.ts` for navigation routes.

## Checklist

### Setup

1. Run the project before making any modifications by following the setup instructions in the main [README.md](../README.md#-setup-and-running).

2. Ensure you have the correct Node version and pnpm installed:

    ```bash
    node --version   # Should be v22.x
    pnpm --version   # Should be v10.x+
    ```

3. Create a `.env.local` file for local development:

    ```bash
    cp sample.env .env.local
    ```

    Set your Google Analytics ID if you have one:
    ```
    NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
    ```

### Adapt Content

Keep the project running as you edit (`pnpm dev`) to see changes in real-time with hot reload.

1. **Update site configuration** - Start with `src/data/config.ts`:
   - Change `name`, `nickname`, `jobTitle`, `company`, `location`
   - Update social links and contact information

2. **Update the sidebar** - Modify `src/components/Template/SideBar.tsx`:
   - Change the profile description
   - Update social links

3. **Add your photo** - Replace `public/images/me.jpg`:
   - Recommended size: approximately 256 x 256 pixels
   - Keep file size small for bandwidth
   - Use [Adobe's online tool](https://www.adobe.com/photoshop/online/resize-image.html) if you need to resize

4. **Modify resume data** - Update files in `src/data/resume/`:
   - `work.ts` - Work experience
   - `degrees.ts` - Education
   - `courses.ts` - Courses and certifications (optional)

5. **Modify other content** - Update remaining data files in `src/data/`:
   - `about.ts` - About page content (Markdown)
   - `skills.ts` - Skills and competencies
   - `projects.ts` - Portfolio projects
   - `certifications.ts` - Professional certifications
   - `contact.ts` - Contact information

6. **Update metadata** - Modify `app/layout.tsx`:
   - Change `metadata.title` to your name
   - Update `metadata.description`
   - Update Open Graph and Twitter card info
   - Change the canonical URL in `metadataBase`

7. **Update favicon** - Replace files in `public/images/favicon/`:
   - `bg-logo.png` - Main icon (512x512)
   - `favicon.ico` - Legacy browsers
   - Use [realfavicongenerator.net](https://realfavicongenerator.net/) for generating favicons

8. **Search for remaining references** - Look for any remaining placeholders:
   ```bash
   grep -r "Borislav" src/ app/
   grep -r "Grigorov" src/ app/
   grep -r "bgrigorov" src/ app/
   ```

### Deploy

The site generates a static export in the `out/` directory, which can be hosted on any static hosting provider.

```bash
pnpm build  # Generates static files in out/
```

#### Option 1: Vercel (Recommended)

The easiest option with zero configuration:

1. Push your repository to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js and deploys automatically
4. Set environment variables in **Settings → Environment Variables**:
   - `NEXT_PUBLIC_GA_TRACKING_ID` (if using Google Analytics)

**Custom domain:** Settings → Domains → Add your domain

#### Option 2: GitHub Pages

Free hosting directly from your GitHub repository:

1. Update `.github/workflows/github-pages.yml` with your repo details
2. Update `homepage` in `package.json` to match your GitHub Pages URL:
   - For `username.github.io`: `"homepage": "https://username.github.io/"`
   - For project page: `"homepage": "https://username.github.io/repo-name/"`
3. For custom domains, update `public/CNAME`:
    ```bash
    echo "yourdomain.com" > public/CNAME
    ```
4. Push to `main` - deployment is automatic via GitHub Actions
5. In repo **Settings → Pages**, select "GitHub Actions" as the source

**Custom domain:** Follow [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

<center><img src="images/gh-pages.png" alt="GitHub Pages settings"></center>

#### Option 3: Cloudflare Pages

Great performance with Cloudflare's global CDN:

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create**
2. Connect your GitHub repository
3. Configure build settings:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `pnpm build`
   - **Build output directory:** `out`
4. Add environment variables if needed
5. Deploy!

**Custom domain:** In project settings, add your domain (works great if already using Cloudflare DNS)

#### Custom Domain DNS Setup

| Provider | DNS Configuration |
|----------|-------------------|
| **Vercel** | Add CNAME pointing to `cname.vercel-dns.com` |
| **GitHub Pages** | Add CNAME pointing to `username.github.io` |
| **Cloudflare Pages** | Add CNAME pointing to `your-project.pages.dev` |

If using **Cloudflare for DNS** with another host:
- Enable "Proxied" (orange cloud) for CDN benefits
- See [cloudflared.md](./cloudflared.md) for local tunnel setup (optional)

## Common Pitfalls

### 1. CSS not rendering / 404 errors

- Check that `homepage` in `package.json` points to where you're hosting
- Ensure `public/CNAME` matches your domain (or remove it if not using a custom domain)
- Verify `next.config.ts` has correct `basePath` if hosting in a subdirectory

### 2. Build errors with TypeScript

- Run `pnpm type-check` to see all type errors
- Fix any missing types in your data files
- Ensure all data follows the interfaces defined in the components

### 3. Images not loading

- Place images in `public/images/`
- Reference them as `/images/yourimage.jpg` (without `public` prefix)
- For projects: put images in `public/images/projects/`

### 4. Environment variables not working

- Local dev: use `.env.local`
- Vercel: set in dashboard under Settings → Environment Variables
- Remember to redeploy after changing env vars (static export bakes values at build time)

### 5. ESLint / Prettier issues

To auto-fix most issues:
```bash
pnpm lint:fix
pnpm format
```

### 6. CRLF / LF line ending issues (Windows)

Configure Git to use LF:
```bash
git config core.autocrlf false
```

Or update ESLint to ignore line endings in `eslint.config.mjs`.

### 7. Search not finding content

The search index is built from `src/data/search.ts`. If you add new data types:
1. Update `buildSearchIndex()` in `src/data/search.ts`
2. Add appropriate type to `SearchItem` interface
3. Rebuild the site

## File Reference

| What to Change | File Location |
|----------------|---------------|
| Site metadata (title, description) | `app/layout.tsx` |
| Navigation routes | `src/data/routes.ts` |
| Site config (name, job, company) | `src/data/config.ts` |
| Sidebar content | `src/components/Template/SideBar.tsx` |
| Work experience | `src/data/resume/work.ts` |
| Education | `src/data/resume/degrees.ts` |
| Skills | `src/data/skills.ts` |
| Projects | `src/data/projects.ts` |
| Certifications | `src/data/certifications.ts` |
| About page content | `src/data/about.ts` |
| Contact info | `src/data/contact.ts` |
| Profile photo | `public/images/me.jpg` |
| Favicon | `public/images/favicon/` |
| OG image | `public/images/og-image.png` |

## Need Help?

If you run into issues:
1. Check the [existing issues](https://github.com/bsgrigorov/personal-site/issues) on GitHub
2. Open a new issue with details about your problem
3. Submit a PR if you find a fix!
