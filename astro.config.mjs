import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dialogisk.se',
  trailingSlash: 'always',
  integrations: [sitemap({ i18n: { defaultLocale: 'sv', locales: { sv: 'sv-SE', en: 'en-GB', fa: 'fa-IR' } } })],
  build: { inlineStylesheets: 'auto' },
});
