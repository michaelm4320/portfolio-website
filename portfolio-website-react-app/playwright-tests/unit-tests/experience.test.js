// playwright-tests/experience.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Experience Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/'); // Adjust based on where your Experience section is rendered
  });

  test('displays the Tech Stack title', async ({ page }) => {
    const techStackTitle = await page.locator('text=Tech Stack');
    expect(await techStackTitle.isVisible()).toBe(true);
  });

  test('displays the Experience title', async ({ page }) => {
    const experienceTitle = await page.textContent('.experience-title');
    expect(experienceTitle).toBe("Experience");
  });

  test('has the correct number of tech stack icons', async ({ page }) => {
    const techStackIcons = await page.locator('.tech-stack-icon');
    expect(await techStackIcons.count()).toBeGreaterThan(0); // Ensure there are tech stack icons
  });

  test('displays the experience item details', async ({ page }) => {
    const jobTitle = await page.locator('text=Front-End Developer');
    const companyName = await page.locator('text=Intevations LLC');
    const dates = await page.locator('text=Sept 2022 - May 2023');
    const descriptionItems = await page.locator('.experience-item li');

    expect(await jobTitle.isVisible()).toBe(true);
    expect(await companyName.isVisible()).toBe(true);
    expect(await dates.isVisible()).toBe(true);
    expect(await descriptionItems.count()).toBeGreaterThan(0); // Ensure there are list items
  });

  test('experience section has proper layout', async ({ page }) => {
    // Example test to check layout
    const experienceSection = await page.locator('.experience-section');
    const sectionBoundingBox = await experienceSection.boundingBox();

    expect(sectionBoundingBox).not.toBeNull();
    expect(sectionBoundingBox.width).toBeGreaterThan(0);
    expect(sectionBoundingBox.height).toBeGreaterThan(0);
  });
});
