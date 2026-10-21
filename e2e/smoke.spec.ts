import { expect, test } from '@playwright/test';

import { siteConfig } from '../src/data/config';

test.describe('smoke', () => {
  test('home page loads', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible();
    await expect(
      page.locator('#header').getByRole('link', { name: siteConfig.name, exact: true }),
    ).toBeVisible();
  });

  test('main nav routes render', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('navigation').getByRole('link', { name: 'Resume' }).click();
    await expect(page).toHaveURL(/\/resume\/?$/);
    await expect(page.locator('#resume')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Download PDF' })).toBeVisible();

    await page.getByRole('navigation').getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL(/\/contact\/?$/);
  });

  test('resume PDF is served', async ({ request }) => {
    const response = await request.get(siteConfig.resumePdfPath);
    expect(response.ok()).toBeTruthy();
    expect(response.headers()['content-type']).toContain('pdf');
  });
});
