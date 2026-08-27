// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.kdplasteringrenderingservices.co.uk',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      // The style guide is noindex — keep it out of the sitemap too, so we
      // aren't sending search engines contradictory signals.
      filter: (page) => !['/style-guide', '/logo-lab'].some((p) => page.includes(p)),
    }),
  ],
});