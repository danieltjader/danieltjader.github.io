import { site, therapistBase, serviceBase } from '../data';
import { sv } from './sv';
import { en } from './en';
import { fa } from './fa';
import type { Content } from './sv';

export const locales = ['sv', 'en', 'fa'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'sv';

const contents: Record<Locale, Content> = { sv, en, fa };
export const getContent = (lang: Locale) => contents[lang];

export function langFromUrl(url: URL): Locale {
  const first = url.pathname.split('/')[1];
  return (locales as readonly string[]).includes(first) && first !== defaultLocale ? (first as Locale) : defaultLocale;
}

export type PageKey = 'home' | 'therapists' | 'services' | 'prices' | 'organisations' | 'faq' | 'approach' | 'contact';

// URL-segment per sida och språk. Lägg till ett språk här och i src/i18n/.
export const segments: Record<PageKey, Record<Locale, string>> = {
  home: { sv: '', en: '', fa: '' },
  therapists: { sv: 'terapeuter', en: 'therapists', fa: 'therapists' },
  services: { sv: 'vi-erbjuder', en: 'services', fa: 'services' },
  prices: { sv: 'priser', en: 'prices', fa: 'prices' },
  organisations: { sv: 'for-organisationer', en: 'organisations', fa: 'organisations' },
  faq: { sv: 'vanliga-fragor', en: 'faq', fa: 'faq' },
  approach: { sv: 'sa-jobbar-vi', en: 'our-approach', fa: 'our-approach' },
  contact: { sv: 'kontakt', en: 'contact', fa: 'contact' },
};

export const navKeys: PageKey[] = ['therapists', 'services', 'organisations', 'approach', 'contact'];
export const footerKeys: PageKey[] = ['prices', 'faq'];

export function getTherapists(lang: Locale) {
  const c = getContent(lang);
  return therapistBase.map((b) => ({ ...b, ...c.therapists.find((t) => t.slug === b.slug)! }));
}

export function getServices(lang: Locale) {
  const c = getContent(lang);
  return serviceBase.map((b) => {
    const t = c.services.find((s) => s.id === b.id)!;
    return { ...b, ...t, prices: b.prices.map((amount, i) => ({ label: t.priceLabels[i], amount, price: c.currency(amount) })) };
  });
}

export function pathFor(lang: Locale, key: PageKey, id?: string): string {
  let p = lang === defaultLocale ? '/' : `/${lang}/`;
  const seg = segments[key][lang];
  if (seg) p += `${seg}/`;
  if (id) {
    const slug = key === 'services' ? getContent(lang).services.find((s) => s.id === id)!.slug : id;
    p += `${slug}/`;
  }
  return p;
}

export function getFaq(lang: Locale) {
  const c = getContent(lang);
  const svc = getServices(lang);
  const priceOf = (id: string, i: number) => svc.find((s) => s.id === id)!.prices[i].price;
  const prices = { therapy: priceOf('psychotherapy', 0), student: priceOf('psychotherapy', 1), doctor: priceOf('psychiatric-care', 0), vat: c.vatNote };
  const address = { ...site.address, place: c.place };
  return c.faq.map((f) => ({
    q: f.q,
    a: f.a(address, prices),
    link: 'link' in f && f.link ? { href: pathFor(lang, f.link.to), label: f.link.label } : undefined,
  }));
}

export function allRoutes() {
  const out: { path: string | undefined; view: string; id?: string }[] = [];
  for (const lang of locales) {
    const strip = (p: string) => (p === '/' ? undefined : p.replace(/^\/|\/$/g, ''));
    for (const key of Object.keys(segments) as PageKey[]) out.push({ path: strip(pathFor(lang, key)), view: key });
    for (const t of therapistBase) out.push({ path: strip(pathFor(lang, 'therapists', t.slug)), view: 'therapist', id: t.slug });
    for (const s of serviceBase) out.push({ path: strip(pathFor(lang, 'services', s.id)), view: 'service', id: s.id });
  }
  return out;
}

export function useI18n(url: URL) {
  const lang = langFromUrl(url);
  const c = getContent(lang);
  return {
    lang,
    c,
    p: (key: PageKey, id?: string) => pathFor(lang, key, id),
    therapists: getTherapists(lang),
    services: getServices(lang),
    address: { ...site.address, place: c.place },
  };
}
