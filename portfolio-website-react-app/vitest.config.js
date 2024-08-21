// vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['unit-tests/**/*.test.js', 'unit-tests/**/*.spec.js', 'unit-tests/**/*.test.jsx'],
  },
});
