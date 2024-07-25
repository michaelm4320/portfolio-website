// playwright.config.cjs
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    headless: true, // Set this to false if you want to see the browser window
    baseURL: 'http://localhost:5173/',
  },
  testDir: 'playwright-tests', // Directory where Playwright test files are located
});
