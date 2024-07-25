// tests/home.spec.js
const { test, expect } = require('@playwright/test');

test('home section has greeting text', async ({ page }) => {
  await page.goto('/'); // Base URL from playwright.config.cjs
  const greeting = await page.textContent('.home-section-greeting');
  expect(greeting).toBe("Hello, I'm Michael");
});
