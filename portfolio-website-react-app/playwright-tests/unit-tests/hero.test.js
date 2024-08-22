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

test('hero section has title description', async ({ page }) => {
  await page.goto('/'); // Base URL from playwright.config.cjs
  const description = await page.textContent('.hero-section-description');

  expect(description).toBe("I design innovative software solutions to solve real-world challenges.");
});

test('contact button is rendered in the hero section', async ({ page }) => {
  await page.goto('/'); // Base URL from playwright.config.cjs
  const contactButton = await page.$('.btn-contact'); // Selector for the contact button
  expect(contactButton).not.toBeNull();
  expect(await contactButton.textContent()).toBe('Get in Touch');
});