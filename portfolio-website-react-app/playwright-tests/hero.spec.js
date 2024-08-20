// tests/hero.spec.js
const { test, expect } = require('@playwright/test');

test('hero section has greeting text', async ({ page }) => {
  await page.goto('/'); // Base URL from playwright.config.cjs
  const greeting = await page.textContent('.hero-section-greeting');

  // Normalize whitespace to handle any irregular spacing
  const normalizedGreeting = greeting.replace(/\s+/g, ' ').trim();

  expect(normalizedGreeting).toBe("Hi, my name is Michael Martinez");
});
