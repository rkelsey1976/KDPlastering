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
      // /thanks/ is noindex: it is a conversion confirmation, not a landing
      // page. Left in the sitemap it can rank, and anyone arriving on it from
      // search fires a conversion that never happened.
      filter: (page) => !['/style-guide', '/logo-lab', '/thanks'].some((p) => page.includes(p)),
    }),
  ],
});