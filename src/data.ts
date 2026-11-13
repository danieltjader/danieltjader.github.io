import hengameh from './assets/hengameh.webp';
import siamak from './assets/siamak.webp';

export const site = {
  name: 'Dialogisk Praxis',
  url: 'https://dialogisk.se',
  email: 'info@dialogisk.se',
  address: {
    street: 'Artillerigatan 28',
    postalCode: '114 51',
    city: 'Stockholm',
    place: 'Vicente-mottagningen',
  },
  vatNote: 'Alla priser är inklusive moms, 0 % på hälsovård.',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Artillerigatan+28+114+51+Stockholm',
};

export const nav = [
  { href: '/terapeuter/', label: 'Terapeuter' },
  { href: '/vi-erbjuder/', label: 'Vi erbjuder' },
  { href: '/for-organisationer/', label: 'Organisationer' },
  { href: '/sa-jobbar-vi/', label: 'Så jobbar vi' },
  { href: '/kontakt/', label: 'Kontakt' },
];

export const therapists = [
  {
    slug: 'hengameh-fransson',
    name: 'Hengameh Fransson',
    role: 'Specialistläkare i psykiatri',
    short: 'Psykiater med erfarenhet av barn-, ungdoms- och vuxenpsykiatri samt samtalsterapi.',
    image: hengameh,
    focus: '50% 35%',
    alt: 'Hengameh Fransson, specialistläkare i psykiatri',
    email: 'hengameh@dialogisk.se',
    phone: '076-252 22 43',
    tel: '+46762522243',
    bio: [
      'Hengameh är utbildad specialistläkare i psykiatri (psykiater). Hon arbetar med bedömning och behandling av alla typer av psykisk ohälsa och har erfarenhet inom barn/ungdom- och vuxenpsykiatri.',
      'Hengameh jobbar även med samtalsterapi. Hon har genomgått grundläggande psykoterapiutbildning (steg 1) och går för närvarande Psykoterapeutprogrammet på Stockholms Universitet för att bli legitimerad psykoterapeut.',
      'För Hengameh är det viktigt att inte bara fokusera på att medicinera bort symtomen, utan även lägga vikt vid att bearbeta bakomliggande orsaker till klientens besvär.',
    ],
  },
  {
    slug: 'siamak-noroozy',
    name: 'Siamak Noroozy',
    role: 'Socionom och legitimerad psykoterapeut',
    short: 'Legitimerad psykoterapeut och handledare med erfarenhet av trauma, depression och ångest.',
    image: siamak,
    focus: '45% 35%',
    alt: 'Siamak Noroozy, socionom och legitimerad psykoterapeut',
    email: 'siamak@dialogisk.se',
    phone: '073-708 01 30',
    tel: '+46737080130',
    bio: [
      'Siamak är utbildad socionom med interkulturell inriktning och legitimerad psykoterapeut. Han har kompetens som både handledare och lärare i psykoterapi.',
      'Siamak har mångårig beprövad erfarenhet av psykologisk behandling på vetenskaplig grund inom barn-, ungdoms- och vuxenpsykiatri. Han arbetar med personer som varit med om traumatiska upplevelser, såsom krig, våld, sexuella övergrepp och försummelse, samt nedstämdhet, depression, ångest, social fobi och liknande psykiatriska svårigheter.',
    ],
  },
] as const;

export interface Price { label: string; price: string }
export interface Service {
  slug: string;
  icon: 'heart-handshake' | 'stethoscope' | 'search-check' | 'file-check';
  title: string;
  summary: string;
  description: string;
  body: string[];
  prices: Price[];
}

export const services: Service[] = [
  {
    slug: 'psykoterapi',
    icon: 'heart-handshake' as const,
    title: 'Psykoterapi',
    summary: 'Individ-, par- och familjeterapi utifrån ett dialogiskt synsätt.',
    description: 'Psykoterapi, parterapi och familjeterapi i Stockholm utifrån ett dialogiskt synsätt. Se vad det innebär, vad det kostar och hur du bokar.',
    body: [
      'Psykoterapi, psykologisk behandling, innebär behandling av psykiska, relationella och existentiella problem med psykologiska metoder. Psykoterapi bygger på vetenskap och beprövad erfarenhet.',
      'Psykoterapeuterna leder processen mot att ge utrymme för att motsägelsefulla röster och osagda erfarenheter ska komma till tals och gå i dialog med varandra. På det sättet kan individen själv hitta sin egen väg och gå vidare med ett större handlingsutrymme och förbättrat hälsotillstånd.',
      'Enligt det dialogiska synsättet är psykoterapi inte begränsat till en speciell form, t.ex. individualterapi eller familjeterapi. Valet av form är förhandlingsbart och föränderligt och beror på varje persons unika levnadsomständigheter.',
    ],
    prices: [
      { label: 'Psykoterapi 45 minuter', price: '1 400 kr' },
      { label: 'Psykoterapi 45 minuter, studentpris', price: '900 kr' },
      { label: 'Parterapi 90 minuter', price: '2 000 kr' },
      { label: 'Familjeterapi och familjerådgivning 90 minuter', price: '2 000 kr' },
    ],
  },
  {
    slug: 'psykiatrisk-vard',
    icon: 'stethoscope' as const,
    title: 'Psykiatrisk vård',
    summary: 'Utredning och behandling av psykisk ohälsa hos barn, ungdomar och vuxna.',
    description: 'Psykiatrisk öppenvårdsmottagning i Stockholm för utredning och behandling av depression, ångest, trauma, stress med mera. Fysiskt eller digitalt besök.',
    body: [
      'Vi är en psykiatrisk öppenvårdsmottagning som erbjuder kvalificerad utredning och behandling av psykisk ohälsa hos barn, ungdomar och vuxna. Vi erbjuder personcentrerad vård – både medicinsk behandling och psykoterapi.',
      'Lider du av depression, ångestproblematik, sömnstörningar, ätstörning, trauma- och krisreaktion, bipolaritet, stress/utmattning eller liknande är du välkommen att kontakta oss för antingen fysiskt eller digitalt besök.',
    ],
    prices: [{ label: 'Läkarbesök, 60 minuter', price: '2 200 kr' }],
  },
  {
    slug: 'second-opinion',
    icon: 'search-check' as const,
    title: 'Second opinion och omprövning',
    summary: 'Ompröva, ändra eller ta bort en diagnos.',
    description: 'Second opinion, omprövning och friskförklaring av psykiatrisk diagnos hos specialistläkare i psykiatri i Stockholm. Fysiskt eller digitalt besök.',
    body: [
      'Om du upplever att du har fått fel diagnos, upplever andra svårigheter som inte stämmer in på den ställda diagnosen eller upplever att du inte borde ha en diagnos över huvud taget erbjuder vi möjlighet att ompröva, ändra, friskförklara från eller ta bort diagnosen.',
      'Varje fall är individuellt och processen är personcentrerad. Utredning och bedömning tar därför olika lång tid och arbete i anspråk. Välkommen att kontakta oss för en konsultation.',
    ],
    prices: [],
  },
  {
    slug: 'intyg',
    icon: 'file-check' as const,
    title: 'Intyg till myndigheter',
    summary: 'Läkarintyg för polisutbildning, mönstring med mera.',
    description: 'Läkarintyg från specialistläkare i psykiatri till Polismyndigheten, Försvarsmakten och Plikt- och prövningsverket. Se priser.',
    body: [
      'Vi kan genomföra utredning och utfärda intyg till myndigheter, exempelvis Polismyndigheten, Försvarsmakten och Plikt- och prövningsverket.',
      'Vid ansökan till polishögskolan krävs ett läkarintyg från specialistläkare i psykiatri om man någon gång har haft specifika diagnoser, bl.a. depression, ångest, ätstörning, ADHD, ADD. Intyget används som underlag för en individuell bedömning inför antagning. Försvarsmakten har liknande krav för mönstrande med ADHD-diagnos. Detaljer om vilka diagnoser som omfattas finns hos respektive myndighet.',
      'Varje fall är individuellt och processen är personcentrerad. Välkommen att kontakta oss för en konsultation.',
    ],
    prices: [
      { label: 'Intyg i samband med mönstring', price: '9 500 kr' },
      { label: 'Intyg vid ansökan till polisutbildning', price: '13 500 kr' },
    ],
  },
];

const price = (slug: string, i: number) => services.find((s) => s.slug === slug)!.prices[i].price;

export const faq: { q: string; a: string; link?: { href: string; label: string } }[] = [
  { q: 'Var finns mottagningen?', a: 'Vi finns i Vicente-mottagningen på Artillerigatan 28, 114 51 Stockholm.' },
  { q: 'Kan jag träffa er digitalt?', a: 'Ja, du kan välja mellan fysiskt eller digitalt besök vid psykiatrisk vård.' },
  { q: 'Vad kostar ett besök?', a: `Psykoterapi 45 minuter kostar ${price('psykoterapi', 0)} (studentpris ${price('psykoterapi', 1)}). Läkarbesök på 60 minuter kostar ${price('psykiatrisk-vard', 0)}. ${site.vatNote}`, link: { href: '/priser/', label: 'Se hela prislistan' } },
  { q: 'Vilka kan ni hjälpa?', a: 'Vi möter barn, ungdomar och vuxna, enskilt, som par eller som familj. Vi arbetar också med institutioner som socialtjänst, behandlingshem, försäkringsbolag och vårdcentraler.' },
  { q: 'Hur bokar jag?', a: 'Kontakta oss via e-post eller telefon. Kontaktuppgifterna finns på kontaktsidan.', link: { href: '/kontakt/', label: 'Gå till kontaktsidan' } },
];
