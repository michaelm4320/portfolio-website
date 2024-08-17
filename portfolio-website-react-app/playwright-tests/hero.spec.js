// tests/hero.spec.js
const { test, expect } = require('@playwright/test');

test('hero section has greeting text', async ({ page }) => {
  await page.goto('/'); // Base URL from playwright.config.cjs
  const greeting = await page.textContent('.hero-section-greeting');
  expect(greeting).toBe("Hello, I'm Michael");
});
