// Fix: Import defineConfig from 'vitest/config' to provide types for the test config.
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use a relative base path. This makes the app work when hosted in a sub-directory
  // or when opened directly via the file:// protocol, which is useful for some
  // development environments and previews.
  base: '',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
  },
})
