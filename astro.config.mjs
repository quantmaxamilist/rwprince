// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rwprince.example.com',
  server: {
    port: 4331,
  },
  integrations: [sitemap()],
});
