import { expect, test } from '@playwright/test';

import certifications from '../src/data/certifications';
import projects from '../src/data/projects';
import routes from '../src/data/routes';
import { siteConfig } from '../src/data/config';
import work from '../src/data/resume/work';
import { publicPages } from './expectations';

test.describe.configure({ mode: 'parallel' });

test.describe('public pages', () => {
  for (const { path, articleId, heading } of publicPages) {
    test(`${path} renders core content`, async ({ page }) => {
      await page.goto(path);
      await expect(page.locator(`article#${articleId}`)).toBeVisible();
      await expect(page.getByRole('heading', { name: heading })).toBeVisible();
      await expect(page.locator('#header nav.links')).toBeVisible();
    });
  }
});

test('document title on home', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(new RegExp(siteConfig.name));
});

test('home canonical link', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    `${siteConfig.siteUrl}/`,
  );
});

test('about page renders markdown content', async ({ page }) => {
  await page.goto('/about');
  await expect(page.getByText("Hey, I'm Bobby", { exact: false })).toBeVisible();
});

test('header nav links match site routes', async ({ page }) => {
  await page.goto('/');
  const nav = page.locator('#header nav.links');
  for (const route of routes.filter((r) => !r.index)) {
    const href = await nav.getByRole('link', { name: route.label, exact: true }).getAttribute('href');
    expect(href).toMatch(new RegExp(`${route.path.replace('/', '\\/')}/?$`));
  }
});

test('client-side navigation updates the URL', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('navigation').getByRole('link', { name: 'About' }).click();
  await expect(page).toHaveURL(/\/about\/?$/);
  await expect(page.locator('article#about')).toBeVisible();
  await page.getByRole('navigation').getByRole('link', { name: 'Projects' }).click();
  await expect(page).toHaveURL(/\/projects\/?$/);
  await expect(page.locator('article#projects')).toBeVisible();
});

test('search navigates with highlight query for resume entries', async ({ page }) => {
  const job = work[0];
  await page.goto('/');
  await page.getByPlaceholder('Search my experience...').fill(job.name);
  await page.locator('.search-results .search-result').first().click();
  await expect(page).toHaveURL(/\/resume\/?\?highlight=work-0/);
  await expect(page.locator('#work-0')).toHaveClass(/search-highlight/);
});

test('resume experience, scroll nav, and PDF download', async ({ page }) => {
  await page.goto('/resume');
  await expect(page.getByText(work[0].name)).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'Page sections' })).toBeVisible();
  await page
    .getByRole('navigation', { name: 'Page sections' })
    .getByRole('button', { name: 'Education' })
    .click();
  await expect(page.locator('#education')).toBeInViewport();
  await expect(page.getByRole('link', { name: 'Download PDF' })).toHaveAttribute(
    'href',
    siteConfig.resumePdfPath,
  );
});

test('skills favourites toggle', async ({ page }) => {
  await page.goto('/skills');
  const toggle = page.getByRole('button', { name: /Favourites/ });
  await expect(toggle).not.toHaveClass(/active/);
  await toggle.click();
  await expect(toggle).toHaveClass(/active/);
});

test('projects list links to featured work', async ({ page }) => {
  await page.goto('/projects');
  const featured = projects[0];
  await expect(page.locator('#project-0').getByRole('link', { name: featured.title }).first()).toBeVisible();
  await expect(page.locator(`#project-0`)).toBeVisible();
});

test('certification badges are linked', async ({ page }) => {
  await page.goto('/certifications');
  const badge = certifications[0];
  await expect(page.getByLabel(badge.label).first()).toHaveAttribute('href', badge.link);
});

test('stats sections render', async ({ page }) => {
  await page.goto('/stats');
  await expect(page.getByRole('heading', { name: 'About me' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'About this site' })).toBeVisible();
});

test('contact email and social links', async ({ page }) => {
  await page.goto('/contact');
  await expect(page.locator(`a[href="mailto:${siteConfig.social.email}"]`)).toBeVisible();
  await expect(page.locator('#contact').getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
    'href',
    new RegExp(siteConfig.social.linkedin),
  );
});

test('demo route is not available in production build', async ({ page }) => {
  await page.goto('/demo');
  await expect(page.getByRole('heading', { name: 'Page Not Found' })).toBeVisible();
});

test('unknown routes show global 404', async ({ page }) => {
  await page.goto('/this-page-does-not-exist');
  await expect(page.getByRole('heading', { name: 'Page Not Found' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Return Home' })).toHaveAttribute('href', '/');
});

test.describe('mobile navigation', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('hamburger menu navigates to contact', async ({ page }) => {
    await page.goto('/');
    await page.locator('.open-menu .menu-hover').click();
    await page.locator('.bm-menu-wrap').getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL(/\/contact\/?$/);
    await expect(page.locator('article#contact')).toBeVisible();
  });
});

test('static assets and manifest', async ({ request }) => {
  const pdf = await request.get(siteConfig.resumePdfPath);
  expect(pdf.ok()).toBeTruthy();
  expect(pdf.headers()['content-type']).toContain('pdf');

  const manifest = await request.get('/manifest.webmanifest');
  expect(manifest.ok()).toBeTruthy();
  const body = await manifest.json();
  expect(body.name).toBeTruthy();

  const robots = await request.get('/robots.txt');
  expect(robots.ok()).toBeTruthy();
  const robotsText = await robots.text();
  expect(robotsText).toContain('Allow: /');
  expect(robotsText).toMatch(/Sitemap:.*sitemap\.xml/);

  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.ok()).toBeTruthy();
  const sitemapXml = await sitemap.text();
  expect(sitemapXml).toContain('<urlset');
  expect(sitemapXml).toContain(`${siteConfig.siteUrl}/about/`);
  expect(sitemapXml).toContain(`${siteConfig.siteUrl}/resume/`);
});
