import { defineConfig } from 'vite';

export default defineConfig({
  // Custom domain (rootedwf.com) is served from the site root
  base: '/',
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
