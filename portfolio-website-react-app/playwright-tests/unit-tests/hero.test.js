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

// New test: Check LinkedIn icon and link
test('LinkedIn icon link is present and correct', async ({ page }) => {
  await page.goto('/'); // Base URL from playwright.config.cjs

  // Select the LinkedIn anchor element
  const linkedinLink = await page.$('a.hero-linkedin');
  expect(linkedinLink).not.toBeNull();

  // Check if the link directs to the correct URL
  const href = await linkedinLink.getAttribute('href');
  expect(href).toBe('https://www.linkedin.com/in/michaelamartinez4320/');

  // Verify the LinkedIn icon image exists and has correct alt text
  const linkedinIcon = await page.$('a.hero-linkedin img');
  expect(linkedinIcon).not.toBeNull();
  const altText = await linkedinIcon.getAttribute('alt');
  expect(altText).toBe('LinkedIn');
});

// New test: Check GitHub icon and link
test('GitHub icon link is present and correct', async ({ page }) => {
  await page.goto('/'); // Base URL from playwright.config.cjs

  // Select the GitHub anchor element
  const githubLink = await page.$('a.hero-github');
  expect(githubLink).not.toBeNull();

  // Check if the link directs to the correct URL
  const href = await githubLink.getAttribute('href');
  expect(href).toBe('https://github.com/michaelm4320');

  // Verify the GitHub icon image exists and has correct alt text
  const githubIcon = await page.$('a.hero-github img');
  expect(githubIcon).not.toBeNull();
  const altText = await githubIcon.getAttribute('alt');
  expect(altText).toBe('GitHub');
});
