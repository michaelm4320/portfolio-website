// playwright-tests/endorsements.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Endorsements Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/'); // Adjust based on your routing
  });

  test('displays the Endorsements title', async ({ page }) => {
    const endorsementsTitle = await page.textContent('.testimonials-title');
    expect(endorsementsTitle).toBe("Endorsements");
  });

  test('has the correct number of endorsement items', async ({ page }) => {
    const endorsementItems = await page.locator('.testimonial-card');
    expect(await endorsementItems.count()).toBe(3); // Expecting 3 items based on the provided data
  });

  test('displays the first endorsement details', async ({ page }) => {
    const quoteText = await page.locator('.quote-text').first();
    const authorName = await page.locator('.author-name').first();
    const authorDesignation = await page.locator('.author-designation').first();
    const linkedinLink = await page.locator('.linkedin-link').first();

    expect(await quoteText.textContent()).toContain("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique");
    expect(await authorName.textContent()).toBe("Dianne Russel");
    expect(await authorDesignation.textContent()).toBe("Starbucks");
    expect(await linkedinLink.getAttribute('href')).toBe("https://www.linkedin.com/in/kayloleon/");
  });

  test('displays the second endorsement details', async ({ page }) => {
    const quoteText = await page.locator('.quote-text').nth(1);
    const authorName = await page.locator('.author-name').nth(1);
    const authorDesignation = await page.locator('.author-designation').nth(1);
    const linkedinLink = await page.locator('.linkedin-link').nth(1);

    expect(await quoteText.textContent()).toContain("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique");
    expect(await authorName.textContent()).toBe("Kristin Watson");
    expect(await authorDesignation.textContent()).toBe("Louis Vuitton");
    expect(await linkedinLink.getAttribute('href')).toBe("https://www.linkedin.com/in/kayloleon/");
  });

  test('displays the third endorsement details', async ({ page }) => {
    const quoteText = await page.locator('.quote-text').nth(2);
    const authorName = await page.locator('.author-name').nth(2);
    const authorDesignation = await page.locator('.author-designation').nth(2);
    const linkedinLink = await page.locator('.linkedin-link').nth(2);

    expect(await quoteText.textContent()).toContain("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique");
    expect(await authorName.textContent()).toBe("Kathryn Murphy");
    expect(await authorDesignation.textContent()).toBe("McDonalds");
    expect(await linkedinLink.getAttribute('href')).toBe("https://www.linkedin.com/in/kayloleon/");
  });

  test('endorsements section has proper layout', async ({ page }) => {
    const endorsementsSection = await page.locator('.testimonials-section');
    const sectionBoundingBox = await endorsementsSection.boundingBox();

    expect(sectionBoundingBox).not.toBeNull();
    expect(sectionBoundingBox.width).toBeGreaterThan(0);
    expect(sectionBoundingBox.height).toBeGreaterThan(0);
  });
});