# Dialogisk Praxis – webbplats

Ny, statisk webbplats för [dialogisk.se](https://dialogisk.se/) (psykiatri och psykoterapi i Stockholm). Byggd med [Astro](https://astro.build/), utan JavaScript i webbläsaren.

## Kom igång

```sh
npm install
npm run dev       # utveckling på http://localhost:4321
npm run build     # bygger till dist/
npm run preview   # förhandsgranska bygget
```

## Struktur

| Sökväg | Innehåll |
|---|---|
| `src/data.ts` | Allt innehåll: kontaktuppgifter, meny, terapeuter, tjänster, priser, vanliga frågor |
| `src/pages/` | Sidor (`/`, `terapeuter`, `vi-erbjuder`, `priser`, `for-organisationer`, `vanliga-fragor`, `sa-jobbar-vi`, `kontakt`, 404) |
| `src/layouts/Base.astro` | Gemensam layout: SEO-taggar, JSON-LD, header, footer |
| `src/components/` | Återanvändbara komponenter (kort, ikoner, CTA m.m.) |
| `src/styles/global.css` | Hela designsystemet (färger, typografi, komponenter) |
| `src/assets/` | Källbilder i WebP, optimeras och skalas av Astro vid bygget |
| `public/` | `robots.txt`, `_headers`, favicon och `og.jpg` (delningsbild) |

Terapeut- och tjänstesidor genereras från `src/data.ts`. Lägg till en post där för att skapa en ny sida.

## SEO och prestanda

- Egen titel, beskrivning och canonical per sida, Open Graph och Twitter-kort
- JSON-LD: `MedicalBusiness`, `BreadcrumbList`, `FAQPage`, `Service`
- Sitemap genereras automatiskt (`/sitemap-index.xml`)
- Självhostade typsnitt, responsiva bilder och inget klientskript

## Hosting

Endast statisk hosting. Publicera innehållet i `dist/` på valfri CDN eller statisk host. `public/_headers` innehåller säkerhetsrubriker, CSP och cachning och används av t.ex. Netlify och Cloudflare Pages. Andra hostar behöver motsvarande konfiguration.

Kontakt sker via `mailto:` och `tel:`, det finns inget formulär eller backend.

## Språk (i18n)

- Svenska ligger på `/`, övriga språk under `/<kod>/` (`/en/`, `/fa/`).
- Texter: `src/i18n/sv.ts`, `en.ts` och `fa.ts` (persiska, höger-till-vänster via `dir: 'rtl'`). Språkneutral data (kontakt, priser): `src/data.ts`.
- Nytt språk: skapa `src/i18n/<kod>.ts` (kopiera `en.ts`), registrera i `src/i18n/index.ts` (`locales`, `contents`, `segments`) och lägg till i `sitemap`-`i18n` i `astro.config.mjs`.
- Sidmallar: `src/views/`, routing: `src/pages/[...path].astro`.
