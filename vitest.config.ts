import type {} from 'vitest';

import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    setupFiles: ['./setupTest.ts'],
  },
});
