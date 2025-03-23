// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), react(),],

  vite: {
    plugins: [tailwindcss()],
    server: {
      fs: {
        // Allow serving files from one level up to the project root
        allow: ['/'],
      },
    },
  },
});