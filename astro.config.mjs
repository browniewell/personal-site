// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Final domain goes here once it's registered (used for RSS + sitemap links).
  site: 'https://ryanbrownewell.com',
  integrations: [sitemap()],
});
