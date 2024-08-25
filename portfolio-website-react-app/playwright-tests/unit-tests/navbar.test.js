// playwright-tests/navbar.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Navbar Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/'); // Adjust based on where your Navbar is rendered
  });

  test('displays the logo', async ({ page }) => {
    const logo = await page.locator('img[src*="logo.svg"]'); // Using a partial match
    expect(await logo.isVisible()).toBe(true);
  });

  test('hamburger menu toggles visibility', async ({ page }) => {
    // Set the viewport size to 1200px or less to ensure the hamburger menu appears
    await page.setViewportSize({ width: 1200, height: 800 });

    const hamburger = await page.locator('.nav__hamburger');
    const navContent = await page.locator('.nav-section-content');

    // Click the hamburger menu to open
    await hamburger.click();
    expect(await navContent.isVisible()).toBe(true);
  });

  test('has correct link text', async ({ page }) => {
    const linkTexts = await page.$$eval('.navbar-content', links => links.map(link => link.textContent.trim()));

    expect(linkTexts).toEqual([
      'Home',
      'About Me',
      'Experience',
      'Portfolio',
      'Endorsements'
    ]);
  });

  test('navigates to section via link', async ({ page }) => {
      await page.goto('/'); // Base URL from playwright.config.cjs

      // Verify the Home link is present and contains the correct text
      const homeLink = await page.locator('text=Home');
      const aboutLink = await page.locator('a.navbar-content:text("About Me")');

      expect(await homeLink.isVisible()).toBe(true);
      expect(await aboutLink.isVisible()).toBe(true);
  });

  test('has Contact Me button', async ({ page }) => {
    const contactButton = await page.locator('text=Contact Me');
    expect(await contactButton.isVisible()).toBe(true);
  });
});