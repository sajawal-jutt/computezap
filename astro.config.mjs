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
    // Category URL redirects (old flat URLs → new category/slug URLs)
    '/atm-to-bar':               '/converters/atm-to-bar',
    '/bar-to-psi':               '/converters/bar-to-psi',
    '/dwt-to-grams':             '/converters/dwt-to-grams',
    '/gallons-to-liters':        '/converters/gallons-to-liters',
    '/grain-to-mg':              '/converters/grain-to-mg',
    '/mph-to-knots':             '/converters/mph-to-knots',
    '/oz-to-pint':               '/converters/oz-to-pint',
    '/quart-to-gallon':          '/converters/quart-to-gallon',
    '/troy-ounces-to-pounds':    '/converters/troy-ounces-to-pounds',
    '/401k-calculator':          '/finance/401k-calculator',
    '/amortization-calculator':  '/finance/amortization-calculator',
    '/apr-calculator':           '/finance/apr-calculator',
    '/compound-interest-calculator': '/finance/compound-interest-calculator',
    '/cost-of-living-calculator':    '/finance/cost-of-living-calculator',
    '/roth-ira-calculator':      '/finance/roth-ira-calculator',
    '/savings-calculator':       '/finance/savings-calculator',
    '/bac-calculator':           '/health/bac-calculator',
    '/binary-to-text':           '/calculators/binary-to-text',
    '/concrete-calculator':      '/calculators/concrete-calculator',
    '/hours-in-a-week':          '/date-time/hours-in-a-week',
    '/military-time-converter':  '/date-time/military-time-converter',
  },
});
