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

    expect(await quoteText.textContent()).toContain("I thoroughly enjoyed working closely with Michael on several projects at FGCU. His positive approach and readiness to go the extra mile were evident in every task. His dedication to constant improvement and collaborative spirit make him a valuable asset to any team. I highly recommend Michael for any opportunity he pursues.");
    expect(await authorName.textContent()).toBe("Kaylo Leon");
    expect(await authorDesignation.textContent()).toBe("FGCU Colleague");
    expect(await linkedinLink.getAttribute('href')).toBe("https://www.linkedin.com/in/kayloleon/");
  });

  test('displays the second endorsement details', async ({ page }) => {
    const quoteText = await page.locator('.quote-text').nth(1);
    const authorName = await page.locator('.author-name').nth(1);
    const authorDesignation = await page.locator('.author-designation').nth(1);
    const linkedinLink = await page.locator('.linkedin-link').nth(1);

    expect(await quoteText.textContent()).toContain("I worked with Michael on our senior project at FGCU. He was great to work with and was always enthusiastic for opportunities to learn. Even now, he is constantly growing, self-driven and open-minded.");
    expect(await authorName.textContent()).toBe("Govinda Ramrattan");
    expect(await authorDesignation.textContent()).toBe("FGCU Colleague");
    expect(await linkedinLink.getAttribute('href')).toBe("https://www.linkedin.com/in/govindaramrattan/");
  });

  test('displays the third endorsement details', async ({ page }) => {
    const quoteText = await page.locator('.quote-text').nth(2);
    const authorName = await page.locator('.author-name').nth(2);
    const authorDesignation = await page.locator('.author-designation').nth(2);
    const linkedinLink = await page.locator('.linkedin-link').nth(2);

    expect(await quoteText.textContent()).toContain("Having worked closely with Michael at Under Armour, I can confidently attest to his exceptional skills and qualities that will translate seamlessly into a software development and team role. I am confident that Michael will bring these strengths to his new role and excel as a valuable member of any team he is a part of.");
    expect(await authorName.textContent()).toBe("Benjamin Furlonger");
    expect(await authorDesignation.textContent()).toBe("Under Armour");
    expect(await linkedinLink.getAttribute('href')).toBe("https://www.linkedin.com/in/benjamin-furlonger-4998126b/");
  });

  test('endorsements section has proper layout', async ({ page }) => {
    const endorsementsSection = await page.locator('.testimonials-section');
    const sectionBoundingBox = await endorsementsSection.boundingBox();

    expect(sectionBoundingBox).not.toBeNull();
    expect(sectionBoundingBox.width).toBeGreaterThan(0);
    expect(sectionBoundingBox.height).toBeGreaterThan(0);
  });
});