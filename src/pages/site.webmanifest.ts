import type { APIRoute } from 'astro';
import { site } from '../data';

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      name: site.name,
      short_name: site.name.split(' ')[0],
      lang: 'sv',
      start_url: '/',
      display: 'browser',
      background_color: site.backgroundColor,
      theme_color: site.themeColor,
      icons: [
        { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
      ],
    }),
    { headers: { 'Content-Type': 'application/manifest+json' } },
  );
