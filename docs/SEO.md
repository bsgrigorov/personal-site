# SEO & Security Configuration

## Quick Test Links

| Tool | URL |
|------|-----|
| **Open Graph** | [opengraph.xyz](https://www.opengraph.xyz/url/https%3A%2F%2Fbgrigorov.com) |
| **Security Headers** | [securityheaders.com](https://securityheaders.com/?q=bgrigorov.com) |
| **Twitter Card** | [cards-dev.twitter.com](https://cards-dev.twitter.com/validator) |
| **Facebook Debugger** | [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug/) |
| **LinkedIn Inspector** | [linkedin.com/post-inspector](https://www.linkedin.com/post-inspector/) |
| **Rich Results** | [search.google.com/test/rich-results](https://search.google.com/test/rich-results) |

---

## SEO Setup

### Meta Tags (`app/layout.tsx`)
- Title template: `%s | Borislav Grigorov`
- Description, keywords, author
- Open Graph (Facebook, LinkedIn)
- Twitter Cards
- Canonical URLs
- Theme color for mobile

### Structured Data (`src/components/Template/JsonLd.tsx`)
- `Person` schema (name, job, social links)
- `WebSite` schema

### Sitemap & Robots
- `app/sitemap.ts` - Auto-generated sitemap
- `public/robots.txt` - Includes sitemap URL

---

## Security Headers (`vercel.json`)

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### Test locally:
```bash
curl -I https://bgrigorov.com | grep -iE "x-frame|x-content|referrer|permissions"
```

### Note: Cloudflare
If headers don't appear (Cloudflare proxy mode), add them via:
**Cloudflare Dashboard** → **Rules** → **Transform Rules** → **Modify Response Header**

---

## OG Image

### Generate new image:
```bash
open scripts/generate-og-image.html
```

1. Open in Chrome
2. DevTools → Right-click image → "Capture node screenshot"
3. Save to `public/images/og-image.png`

**Dimensions:** 1200 x 630px

---

## Favicon

Files in `public/images/favicon/`:
- `bg-logo.png` - Primary icon (512x512)
- `favicon.ico` - Legacy browsers

### Regenerate favicon.ico:
```bash
npx png-to-ico public/images/favicon/bg-logo.png > public/images/favicon/favicon.ico
```

---

## Google Analytics

Set in `.env.local`:
```bash
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
```

## Google Search Console

1. Add property at [search.google.com/search-console](https://search.google.com/search-console)
2. Get verification code
3. Add to `.env.local`:
```bash
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-code
```
4. Submit sitemap: `https://bgrigorov.com/sitemap.xml`

