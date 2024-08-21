// tests/hero.spec.js
const { test, expect } = require('@playwright/test');

test('hero section has greeting text', async ({ page }) => {
  await page.goto('/'); // Base URL from playwright.config.cjs
  const greeting = await page.textContent('.hero-section-greeting');
  // Normalize whitespace to handle any irregular spacing
  const normalizedGreeting = greeting.replace(/\s+/g, ' ').trim();
  expect(normalizedGreeting).toBe("Hi, my name is Michael Martinez");
});

test('hero section has title text', async ({ page }) => {
  await page.goto('/'); // Base URL from playwright.config.cjs
  const title = await page.textContent('.hero-section-title');

  expect(title).toBe("SoftwareEngineer");
});

test('hero section has title text', async ({ page }) => {
  await page.goto('/'); // Base URL from playwright.config.cjs
  const title = await page.textContent('.hero-section-title');

  expect(title).toBe("SoftwareEngineer");
});