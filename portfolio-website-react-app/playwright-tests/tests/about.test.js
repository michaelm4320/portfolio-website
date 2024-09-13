// tests/AboutMe.test.js
const { test, expect } = require('@playwright/test');

test('about me section has title text', async ({ page }) => {
  await page.goto('/'); // Ensure this URL is correct for your setup
  const title = await page.textContent('.about-section-title');
  expect(title).toBe("About Me");
});

test('about me section has description text', async ({ page }) => {
  await page.goto('/'); // Ensure this URL is correct for your setup
  const description = await page.textContent('.about-section-description');

  // Normalize whitespace to handle any irregular spacing
  const normalizedDescription = description.replace(/\s+/g, ' ').trim();

  expect(normalizedDescription).toBe("I'm Michael, a Software Engineer driven by a passion for creating " +
  "innovative software solutions that shape a brighter tomorrow. I graduated from Florida Gulf Coast University with a " +
  "bachelor's degree in Software Engineering in December 2023. My journey in technology began when I picked up my first " +
  "Nintendo controller, sparking a lifelong enthusiasm for all things tech. Since then, I've committed myself to continuous " +
  "learning, from building computers to developing websites. I'm always striving to design smarter, more robust software " +
  "applications. With each project, I'm constantly pushing the boundaries of my development skills, one line of code at a " +
  "time. My goal is to bring joy and put smiles on people's faces through the software I build, helping to make a positive " +
  "impact on our community. And when I'm not coding, I'm playing my favorite video games and exploring ways to enhance the " +
  "games I grew up with by creating mods for games like Minecraft using Java.");
});

test('about me section has an image', async ({ page }) => {
  await page.goto('/'); // Ensure this URL is correct for your setup
  const image = await page.$('.about-section-img img'); // Selector for the image
  expect(image).not.toBeNull(); // Ensure the image element is present

  const imageAlt = await image.getAttribute('alt');
  expect(imageAlt).toBe("Picture of Michael"); // Check the alt text for the image
});