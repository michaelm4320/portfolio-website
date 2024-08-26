import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  // Navigate to the page containing the contact form before each test
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact'); // Update the path to where your Contact component is rendered
  });

  test('should render contact form correctly', async ({ page }) => {
    // Check that the title is rendered
    const title = await page.locator('.contact-title');
    await expect(title).toHaveText('Contact Me');

    // Check that all form fields are present
    const nameInput = await page.locator('#name');
    const emailInput = await page.locator('#email');
    const subjectInput = await page.locator('#subject');
    const messageInput = await page.locator('#message');
    const sendButton = await page.locator('.btn-contact-send');

    await expect(nameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(subjectInput).toBeVisible();
    await expect(messageInput).toBeVisible();
    await expect(sendButton).toBeVisible();
  });

  test('should allow user to fill out and submit the form', async ({ page }) => {
    // Fill out the form fields
    await page.fill('#name', 'John Doe');
    await page.fill('#email', 'johndoe@example.com');
    await page.fill('#subject', 'Test Subject');
    await page.fill('#message', 'This is a test message.');

    // Submit the form
    await page.click('.btn-contact-send');

    // Ensure the form submission was handled correctly (this might depend on your implementation)
    // Here, we're checking the console log for the submitted form data as an example
    page.on('console', (msg) => {
      const messageText = msg.text();
      if (messageText.includes('Form submitted:')) {
        expect(messageText).toContain('"name":"John Doe"');
        expect(messageText).toContain('"email":"johndoe@example.com"');
        expect(messageText).toContain('"subject":"Test Subject"');
        expect(messageText).toContain('"message":"This is a test message."');
      }
    });

    // Optionally, you could add more checks here based on what happens after form submission
  });
});
