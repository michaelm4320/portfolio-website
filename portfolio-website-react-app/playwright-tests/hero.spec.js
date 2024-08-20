// tests/hero.spec.js
const { test, expect } = require('@playwright/test');

test('hero section has greeting text', async ({ page }) => {
  await page.goto('/'); // Base URL from playwright.config.cjs
  const greeting = await page.textContent('.hero-section-greeting');
  const name = await page.textContent('hero-section-name');

  expect(greeting).toBe("Hi, my name is&nbsp;");
  expect(name).toBe("Michael Martinez");
});
