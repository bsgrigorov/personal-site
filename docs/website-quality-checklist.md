# The Mark of a Good Website

A comprehensive checklist for building production-quality websites that are performant, secure, accessible, and optimized for discovery.

---

## 📊 Performance

### Core Web Vitals (Google's Key Metrics)

| Metric | Target | What It Measures |
|--------|--------|------------------|
| **LCP** (Largest Contentful Paint) | < 2.5s | How fast the main content loads |
| **INP** (Interaction to Next Paint) | < 200ms | How responsive the page feels |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Visual stability (no jumping content) |
| **TTFB** (Time to First Byte) | < 800ms | Server response time |

### Bundle & Asset Optimization

- [ ] **Tree shaking** - Remove unused code from bundles
- [ ] **Code splitting** - Load only what's needed per page
- [ ] **Lazy loading** - Defer off-screen images and components
- [ ] **Font optimization** - Use `display: swap`, subset fonts, preload critical fonts
- [ ] **Image optimization** - WebP/AVIF formats, responsive sizes, proper dimensions
- [ ] **Minification** - Compress JS, CSS, and HTML
- [ ] **Compression** - Enable Gzip/Brotli on server

### Caching Strategy

- [ ] **Immutable assets** - Hash-based filenames with long cache (`max-age=31536000, immutable`)
- [ ] **HTML** - Short cache or `no-cache` with revalidation
- [ ] **API responses** - Appropriate `Cache-Control` based on freshness needs

### Resource Hints

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://www.google-analytics.com">
<link rel="preload" href="/critical.css" as="style">
```

---

## 🔍 SEO (Search Engine Optimization)

### Essential Meta Tags

```html
<title>Page Title - Site Name</title>
<meta name="description" content="150-160 character description">
<meta name="keywords" content="relevant, keywords, here">
<link rel="canonical" href="https://example.com/page/">
```

### Structured Data (JSON-LD)

Required schemas for rich search results:

- [ ] **Person** - For personal/portfolio sites
- [ ] **Organization** - For business sites
- [ ] **WebSite** - Site-level info with search box potential
- [ ] **BreadcrumbList** - Navigation path
- [ ] **Article** - For blog posts (with author, date, etc.)

Example:
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "jobTitle": "Your Title",
  "url": "https://yoursite.com",
  "sameAs": ["https://linkedin.com/in/you", "https://github.com/you"]
}
```

### Technical SEO

- [ ] **sitemap.xml** - List all pages with priorities and update frequencies
- [ ] **robots.txt** - Guide crawlers, reference sitemap
- [ ] **Canonical URLs** - Prevent duplicate content issues
- [ ] **Trailing slash consistency** - Pick one and stick to it
- [ ] **HTTPS** - Required for modern SEO
- [ ] **Mobile-friendly** - Responsive design, proper viewport
- [ ] **Page speed** - Directly impacts rankings

---

## 🌐 Social Sharing

### Open Graph (Facebook, LinkedIn, etc.)

```html
<meta property="og:type" content="website">
<meta property="og:url" content="https://example.com/page/">
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Page description">
<meta property="og:image" content="https://example.com/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:site_name" content="Site Name">
<meta property="og:locale" content="en_US">
```

### Twitter Cards

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@yourusername">
<meta name="twitter:creator" content="@yourusername">
<meta name="twitter:title" content="Page Title">
<meta name="twitter:description" content="Page description">
<meta name="twitter:image" content="https://example.com/twitter-image.png">
```

### OG Image Best Practices

- **Dimensions**: 1200×630px (2:1 ratio)
- **Format**: PNG or JPG
- **File size**: < 1MB
- **Safe zone**: Keep important content away from edges (some platforms crop)

---

## 🔒 Security

### Essential HTTP Headers

| Header | Value | Purpose |
|--------|-------|---------|
| `X-Content-Type-Options` | `nosniff` | Prevent MIME-type sniffing |
| `X-Frame-Options` | `DENY` | Prevent clickjacking |
| `X-XSS-Protection` | `1; mode=block` | Legacy XSS protection |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Control referrer info |
| `Permissions-Policy` | `camera=(), microphone=()` | Disable unused APIs |

### Advanced Security Headers (Optional)

| Header | Purpose | Complexity |
|--------|---------|------------|
| `Strict-Transport-Security` | Force HTTPS | Easy |
| `Content-Security-Policy` | Prevent XSS, control resource loading | Complex |

### HTTPS

- [ ] Valid SSL certificate
- [ ] Redirect HTTP to HTTPS
- [ ] No mixed content warnings

---

## ♿ Accessibility (a11y)

### WCAG Essentials

- [ ] **Semantic HTML** - Use proper elements (`<nav>`, `<main>`, `<article>`, `<button>`)
- [ ] **Alt text** - Describe images for screen readers
- [ ] **Keyboard navigation** - All interactive elements focusable and usable
- [ ] **Focus indicators** - Visible focus states (don't remove outlines)
- [ ] **Color contrast** - 4.5:1 minimum for normal text, 3:1 for large text
- [ ] **Skip links** - "Skip to main content" for keyboard users
- [ ] **ARIA labels** - Where semantic HTML isn't sufficient
- [ ] **Form labels** - Every input has an associated label
- [ ] **Language attribute** - `<html lang="en">`

### Testing Tools

- Lighthouse (Chrome DevTools)
- axe DevTools browser extension
- WAVE Web Accessibility Evaluator
- Screen reader testing (VoiceOver, NVDA)

---

## 📱 Progressive Web App (PWA)

### Web App Manifest

```json
{
  "name": "Full App Name",
  "short_name": "Short",
  "description": "App description",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

### PWA Checklist

- [ ] **Manifest file** - Enables "Add to Home Screen"
- [ ] **Icons** - Multiple sizes (192px, 512px minimum)
- [ ] **Theme color** - Browser UI color
- [ ] **Service Worker** - Offline support (optional for simple sites)

---

## 📈 Analytics & Monitoring

### Essential Analytics

- [ ] **Page views** - Traffic volume and trends
- [ ] **User behavior** - Navigation paths, time on page
- [ ] **Demographics** - Geography, devices, browsers
- [ ] **Acquisition** - Traffic sources (organic, social, direct)

### Performance Monitoring

- [ ] **Real User Monitoring (RUM)** - Actual user experience data
- [ ] **Core Web Vitals tracking** - LCP, INP, CLS over time
- [ ] **Error tracking** - JavaScript errors, failed requests

### Recommended Tools

| Tool | Purpose | Cost |
|------|---------|------|
| Google Analytics | Traffic analytics | Free |
| Vercel Analytics | Web analytics | Free tier |
| Vercel Speed Insights | Core Web Vitals RUM | Free tier |
| Sentry | Error tracking | Free tier |

---

## 🏗️ Architecture (12-Factor Principles Applied)

| Factor | Website Application |
|--------|---------------------|
| **Codebase** | Single repo, version controlled |
| **Dependencies** | Explicit in `package.json` with lockfile |
| **Config** | Environment variables, not hardcoded |
| **Build** | Reproducible builds, immutable artifacts |
| **Dev/Prod Parity** | Same stack locally and in production |
| **Logs** | Analytics and error reporting as services |
| **Stateless** | No server-side sessions (static or serverless) |
| **Disposability** | Fast deploys, instant rollbacks |

---

## ✅ Pre-Launch Checklist

### Content & Design

- [ ] Favicon (multiple sizes)
- [ ] 404 page
- [ ] Responsive on mobile, tablet, desktop
- [ ] Print stylesheet (if applicable)
- [ ] No lorem ipsum or placeholder content

### Technical

- [ ] All links work (no 404s)
- [ ] Forms submit correctly
- [ ] Console has no errors
- [ ] Works without JavaScript (graceful degradation)

### Legal & Compliance

- [ ] Privacy policy (if collecting data)
- [ ] Cookie consent (if required by jurisdiction)
- [ ] Copyright notice

### Testing

- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile testing (iOS Safari, Android Chrome)
- [ ] Lighthouse score > 90 on all categories
- [ ] Validate HTML (W3C validator)

---

## 🧪 Testing Tools

| Tool | What It Tests |
|------|---------------|
| [PageSpeed Insights](https://pagespeed.web.dev/) | Performance + Core Web Vitals |
| [Lighthouse](https://developer.chrome.com/docs/lighthouse/) | Performance, SEO, a11y, best practices |
| [WebPageTest](https://www.webpagetest.org/) | Deep performance analysis |
| [GTmetrix](https://gtmetrix.com/) | Performance with waterfall |
| [Security Headers](https://securityheaders.com/) | HTTP security headers |
| [SSL Labs](https://www.ssllabs.com/ssltest/) | SSL certificate quality |
| [Rich Results Test](https://search.google.com/test/rich-results) | Structured data validation |
| [Meta Tags](https://metatags.io/) | Social preview testing |
| [WAVE](https://wave.webaim.org/) | Accessibility |

---

## 📚 Resources

- [web.dev](https://web.dev/) - Google's web best practices
- [MDN Web Docs](https://developer.mozilla.org/) - Web standards reference
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Accessibility standards
- [Schema.org](https://schema.org/) - Structured data vocabulary
- [Open Graph Protocol](https://ogp.me/) - Social sharing specification
