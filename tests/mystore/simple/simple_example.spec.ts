import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('http://automationpractice.com/index.php');
  const contact_us = page.locator('#contact-link');
  await expect(contact_us).toHaveText('Contact us');
});