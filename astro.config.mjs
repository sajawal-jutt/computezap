// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://computezap.com',
  integrations: [sitemap()],
  // Keep legacy programmatic URLs working in local dev/preview as well as
  // production. Vercel mirrors these redirects with permanent 301 rules.
  redirects: {
    '/[n]-days-from-today': '/days-from-today/[n]-days-from-today',
    '/[kg]-kg-to-lbs': '/kg-to-lbs/[kg]-kg-to-lbs',
    '/[mb]-mb-to-gb': '/mb-to-gb/[mb]-mb-to-gb',
    '/[yards]-yards-to-meters': '/yards-to-meters/[yards]-yards-to-meters',
    '/[feet]-feet-[inches]-inches-in-cm': '/height/[feet]-feet-[inches]-inches-in-cm',
    '/[x]-percent-off-[y]': '/percent-off/[x]-percent-off-[y]',
  },
});
