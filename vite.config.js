import { defineConfig } from 'vite';

export default defineConfig({
  // Required for https://OleNY1.github.io/rooted-wellness/
  base: '/rooted-wellness/',
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
