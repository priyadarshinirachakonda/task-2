import { defineConfig } from 'vite';
import { resolve } from 'path';
import nunjucks from 'vite-plugin-nunjucks';

export default defineConfig({
  root: resolve(__dirname, 'src/templates'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
  plugins: [
    nunjucks(),
  ],
});