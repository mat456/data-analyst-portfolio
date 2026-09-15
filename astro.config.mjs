import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mat-dataportfolio.netlify.app',
  vite: {
    optimizeDeps: {
      noDiscovery: true
    }
  }
});
