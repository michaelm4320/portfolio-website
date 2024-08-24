// playwright-tests/portfolio.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Portfolio Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/'); // Adjust based on your routing
  });

  test('displays the My Portfolio title', async ({ page }) => {
    const portfolioTitle = await page.textContent('.section--heading');
    expect(portfolioTitle).toBe("My Portfolio");
  });

  test('has the correct number of portfolio items', async ({ page }) => {
    const portfolioItems = await page.locator('.portfolio--section--card');
    expect(await portfolioItems.count()).toBe(3); // Expecting 3 items based on the provided data
  });

  test('displays the first portfolio item details', async ({ page }) => {
    const projectTitle = await page.locator('.portfolio--section--title:text("AI-Enhanced File Management Tool")');
    const projectDescription = await page.locator('.text-md:text("A Java-based web scraper and file management tool with GPT-3.5-turbo AI integration, capable of extracting web data and allowing users to load, view, edit, and delete text files.")');
    const viewInGithubLink = await page.locator('.portfolio--link a:text("View In Github")').first();

    expect(await projectTitle.isVisible()).toBe(true);
    expect(await projectDescription.isVisible()).toBe(true);
    expect(await viewInGithubLink.isVisible()).toBe(true);
  });

  test('displays the second portfolio item details', async ({ page }) => {
    const projectTitle = await page.locator('.portfolio--section--title:text("Portfolio Website")');
    const projectDescription = await page.locator('.text-md:text("A personal portfolio website with stunning 3D visuals, showcasing my experience, projects, testimonials, and a contact form, built using modern web technologies for a professional and responsive design.")');
    const viewInGithubLink = await page.locator('.portfolio--link a:text("View In Github")').nth(1);

    expect(await projectTitle.isVisible()).toBe(true);
    expect(await projectDescription.isVisible()).toBe(true);
    expect(await viewInGithubLink.isVisible()).toBe(true);
  });

  test('displays the third portfolio item details', async ({ page }) => {
    const projectTitle = await page.locator('.portfolio--section--title:text("Healthcare Investment Tool")');
    const projectDescription = await page.locator('.text-md:text("Developed a full-stack web application that processes and analyzes patient records, featuring a dynamic dashboard, user authentication, and interactive data visualization for informed decision-making in healthcare investments.")');
    const viewInGithubLink = await page.locator('.portfolio--link a:text("View In Github")').nth(2);

    expect(await projectTitle.isVisible()).toBe(true);
    expect(await projectDescription.isVisible()).toBe(true);
    expect(await viewInGithubLink.isVisible()).toBe(true);
  });

  test('portfolio links open the correct GitHub page', async ({ page }) => {
    const links = [
      'https://github.com/michaelm4320/WebScraper',
      'https://github.com/michaelm4320/portfolio-website',
      'https://github.com/michaelm4320/Healthcare_Investment_Tool'
    ];

    for (let i = 0; i < links.length; i++) {
      const projectLink = await page.locator('.portfolio--link a').nth(i);
      const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        projectLink.click(),
      ]);
      await expect(newPage).toHaveURL(links[i]);
      await newPage.close(); // Close the newly opened GitHub page
    }
  });

  test('Visit My GitHub button opens the correct page', async ({ page }) => {
    const githubButton = await page.locator('.btn-github');
    const [newPage] = await Promise.all([
      page.waitForEvent('popup'),
      githubButton.click(),
    ]);
    await expect(newPage).toHaveURL('https://github.com/michaelm4320');
  });

  test('portfolio section has proper layout', async ({ page }) => {
    const portfolioSection = await page.locator('.portfolio--section');
    const sectionBoundingBox = await portfolioSection.boundingBox();

    expect(sectionBoundingBox).not.toBeNull();
    expect(sectionBoundingBox.width).toBeGreaterThan(0);
    expect(sectionBoundingBox.height).toBeGreaterThan(0);
  });
});