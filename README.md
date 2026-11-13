# Dialogisk Praxis – webbplats

Statisk, flerspråkig webbplats för [dialogisk.se](https://dialogisk.se/) (psykiatri och psykoterapi i Stockholm). Byggd med [Astro](https://astro.build/), utan JavaScript i webbläsaren. Språk: svenska (`/`), engelska (`/en/`) och persiska (`/fa/`, höger-till-vänster).

## Kom igång

```sh
npm install
npm run dev       # utveckling på http://localhost:4321
npm run build     # bygger till dist/
npm run preview   # förhandsgranska bygget
```

## Struktur och källa till sanning

| Vad | Var |
|---|---|
| Språkoberoende fakta: namn, juridiskt namn, URL, e-post, adress, färger för `theme-color`/manifest, terapeuternas kontaktuppgifter och språk, tjänsternas ikon och priser | `src/data.ts` |
| Alla översättningsbara texter (sidor, meny, FAQ, terapeuter, tjänster) | `src/i18n/sv.ts`, `en.ts`, `fa.ts` |
| Språk, URL-segment, sidnycklar och hjälpfunktioner (`pathFor`, `getServices`, `allRoutes`) | `src/i18n/index.ts` |
| Sidmallar | `src/views/` |
| Routing (genererar alla sidor för alla språk) | `src/pages/[...path].astro`, `404.astro` |
| `robots.txt` och `site.webmanifest` (genereras från `src/data.ts`) | `src/pages/robots.txt.ts`, `site.webmanifest.ts` |
| Layout: SEO-taggar, hreflang, JSON-LD, header, footer, språkmeny | `src/layouts/Base.astro` |
| Komponenter | `src/components/` |
| Designsystem (färgvariabler i `:root`, RTL-stöd) | `src/styles/global.css` |
| Bilder (WebP, optimeras av Astro vid bygget) | `src/assets/` |
| Favicon, ikoner, `og.jpg`, `_headers` | `public/` |

Regler:
- Telefon, e-post, adress och priser får bara finnas i `src/data.ts`. Texter och JSON-LD hämtar dem därifrån.
- Priser anges som belopp i `serviceBase`. Visningen (valuta, siffror) formateras per språk via `currency` i respektive språkfil.
- Primärfärgen finns som CSS-variabel `--primary` och som `site.themeColor` (ändra båda).
- Terapeut- och tjänstesidor genereras från data. Ny tjänst: lägg till i `serviceBase` och en post med samma `id` i varje språkfil.

## SEO

- Unik titel (utan varumärkessuffix), beskrivning (max ~160 tecken), canonical och Open Graph/Twitter-kort per sida
- `hreflang` för sv/en/fa och `x-default` (svenska) på alla sidor, samt `og:locale:alternate`
- Sitemap (`/sitemap-index.xml`) med språkalternativ via `@astrojs/sitemap`; 404 är `noindex` och ingår inte
- JSON-LD: `MedicalBusiness`/`LocalBusiness` (på alla sidor), `Person`, `BreadcrumbList`, `FAQPage`, `Service`
- `robots.txt` pekar på sitemapen; `<html lang dir>` sätts per språk
- Prestanda: självhostade typsnitt (Josefin Sans, EB Garamond, Vazirmatn för persiska), responsiva WebP-bilder, inget klientskript

## Språk (i18n)

- Svenska ligger på `/`, övriga språk under `/<kod>/`. Alla sidor finns på alla språk; URL-segment (`segments`) och tjänste-slugs är per språk.
- Persiska använder `dir: 'rtl'`. CSS använder logiska egenskaper och `[dir='rtl']` för pilar.
- Språkmenyn är en `<details>`-meny (ingen JS) som listar språken via `native` i respektive språkfil.
- 404 visas på alla språk samtidigt, eftersom statisk hosting bara har en `404.html`.
- Nytt språk: skapa `src/i18n/<kod>.ts` (kopiera `en.ts`), registrera i `src/i18n/index.ts` (`locales`, `contents`, `segments`), lägg till i `sitemap`-`i18n` i `astro.config.mjs`, lägg till språket i `ui.langNames` (används i språkinformationen) i alla språkfiler och i `spokenLanguages` om kliniken talar det. RTL-språk behöver `dir: 'rtl'` och ett typsnitt.
- Den persiska texten är ett utkast som ska granskas av en person som talar persiska.

## Hosting och publicering

Sajten är helt statisk. Det som publiceras är innehållet i `dist/`. Servern behöver ingen Node, databas eller backend, så det fungerar på vilket webbhotell eller vilken statisk host som helst.

### Publicera på Loopia (eller annat webbhotell med FTP)

1. Installera Node.js (version 22 eller nyare) och kör i projektmappen:
   ```sh
   npm install
   npm run build
   ```
2. Kontrollera bygget lokalt med `npm run preview` (http://localhost:4321).
3. Hämta FTP-uppgifter i Loopia Kundzon (webbhotellet → FTP-konton). Skapa ett konto om det saknas och notera server, användarnamn och lösenord. Välj SFTP eller FTPS om det finns.
4. Anslut med en FTP-klient (t.ex. FileZilla eller Cyberduck) och gå till webbrotsmappen, hos Loopia `public_html`.
5. Ta bort gammalt innehåll i `public_html` (ta en backup först om där ligger en gammal sajt).
6. Ladda upp **innehållet i** `dist/`, inte själva mappen `dist`, till `public_html`. `dist/index.html` ska ligga direkt i `public_html/`. Alla undermappar och `_astro/` ska med.
7. Aktivera HTTPS: beställ det gratis SSL-certifikatet (Let's Encrypt) för domänen i Kundzon och vänta tills det är aktivt.
8. Kontrollera att domänen pekar på webbhotellet (normalt redan rätt om domän och webbhotell ligger hos Loopia) och öppna https://dialogisk.se/.
9. Testa startsidan, `/en/`, `/fa/`, en undersida och en sida som inte finns (ska visa 404-sidan).
10. Vid varje ändring: kör `npm run build` och ladda upp `dist/` igen.

### Valfritt: säkerhetsrubriker, cachning och 404 på Apache (t.ex. Loopia)

Det här behövs **inte** för att sajten ska fungera. Det är en förbättring som ger:

- **Säkerhetsrubriker** (CSP m.fl.): webbläsaren får regler för vad sidan får ladda, vilket ger extra skydd och bättre betyg på t.ex. securityheaders.com.
- **Cachning:** bilder och CSS sparas i webbläsaren, så återbesök går snabbare.
- **Egen 404-sida:** utan `ErrorDocument` visar webbhotellet sin standardsida för sidor som saknas.

`public/_headers` gör motsvarande på Netlify och Cloudflare Pages men läses inte av Apache. På Apache-hotell skapar du i stället en `.htaccess` i `public_html/` (lägg den i `public/` så följer den med i `dist/`):

```apache
ErrorDocument 404 /404.html
Options -Indexes

<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set Permissions-Policy "camera=(), microphone=(), geolocation=()"
  Header set Content-Security-Policy "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'"
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
</IfModule>
```

Filen finns inte i repot än. Håll CSP:n i synk med `public/_headers`.

### Andra värdar

- **Netlify och Cloudflare Pages:** kör `npm run build` och publicera `dist/`. `public/_headers` läses automatiskt.

Kontakt sker via `mailto:` och `tel:`; det finns inget formulär eller backend.
