import type { ServiceIcon } from '../data';

export interface Section { h: string; paras: string[]; list?: string[] }

interface Address { street: string; postalCode: string; city: string; place: string }

export const sv = {
  code: 'sv' as string,
  htmlLang: 'sv',
  dir: 'ltr' as string,
  ogLocale: 'sv_SE',
  short: 'SV',
  native: 'Svenska',
  place: 'Vicente-mottagningen',
  vatNote: 'Alla priser är inklusive moms, 0 % på hälsovård.',
  orgDescription: 'Psykiatri och psykoterapi i Stockholm, med ett dialogiskt förhållningssätt.',
  currency: (n: number) => `${n.toLocaleString('sv-SE').replace(/\s/g, '\u00a0')} kr`,

  ui: {
    skip: 'Hoppa till innehållet',
    brandLabel: 'Dialogisk Praxis – startsida',
    menu: 'Meny',
    menuToggle: 'Visa eller dölj menyn',
    mainNav: 'Huvudmeny',
    langSwitch: 'Byt språk',
    breadcrumbs: 'Brödsmulor',
    start: 'Start',
    readMore: 'Läs mer',
    about: 'om',
    contactUs: 'Kontakta oss',
    showOnMap: 'Visa på karta',
    email: 'E-post',
    phone: 'Telefon',
    languagesLabel: 'Språk',
    langNames: { sv: 'svenska', en: 'engelska', fa: 'persiska' },
    footer: {
      pagesNav: 'Sidfot – sidor',
      pagesTitle: 'Sidor',
      servicesNav: 'Sidfot – tjänster',
      servicesTitle: 'Tjänster',
    },
    cta: {
      title: 'Vill du veta mer eller boka tid?',
      text: 'Hör av dig så hjälper vi dig vidare.',
      button: 'Kontakta oss',
    },
  },

  pageNames: {
    therapists: 'Terapeuter',
    services: 'Vi erbjuder',
    organisations: 'Organisationer',
    approach: 'Så jobbar vi',
    contact: 'Kontakt',
    prices: 'Priser',
    faq: 'Vanliga frågor',
  },

  home: {
    title: 'Dialogisk Praxis – psykiatri och psykoterapi i Stockholm',
    description: 'Psykiatrisk vård, psykoterapi, par- och familjerådgivning på Östermalm i Stockholm. Möt psykiater Hengameh Fransson och psykoterapeut Siamak Noroozy.',
    hero: {
      alt: 'Hengameh Fransson och Siamak Noroozy',
      eyebrow: 'Östermalm, Stockholm',
      h1: 'Psykiatri och psykoterapi i Stockholm',
      lead: 'Vi möter barn, ungdomar och vuxna med ett dialogiskt förhållningssätt – där omtanken kommer före tanken.',
      secondary: 'Se vad vi erbjuder',
    },
    trust: ['Specialistläkare i psykiatri', 'Legitimerad psykoterapeut', 'Fysiskt eller digitalt besök', 'Svenska, engelska och persiska'],
    services: {
      eyebrow: 'För privatpersoner',
      h2: 'Vad vi erbjuder',
      text: 'Psykiatrisk utredning och behandling, psykoterapi samt par- och familjeterapi. Ofta är det mest givande att varva familjesamtal med enskilda samtal, och vice versa.',
      pricesLink: 'Se våra priser',
    },
    approach: {
      eyebrow: 'Så jobbar vi',
      quote: 'Omtanken föregår tanken.',
      text: 'Vår praktik bygger på dialogiska teorier – på relationer mellan människor och på vikten av den Andres roll i hur vi skapar mening.',
      button: 'Läs om vårt synsätt',
      imgAlt: 'Samtalsrum på mottagningen',
    },
    team: { eyebrow: 'Teamet', h2: 'Möt våra terapeuter' },
    orgs: {
      eyebrow: 'För organisationer',
      h2: 'Samarbete med socialtjänst, vård och försäkring',
      text: 'Vi erbjuder handledning, utbildning, utredning och nätverksarbete till socialtjänst, behandlingshem, försäkringsbolag och vårdcentraler.',
      button: 'Läs mer för organisationer',
      items: [
        { title: 'Utredning', text: 'Psykologisk och psykosocial utredning' },
        { title: 'Utbildning och handledning', text: 'Skräddarsydd efter er verksamhet' },
        { title: 'Nätverksarbete', text: 'Samarbete runt personen' },
      ],
    },
    find: { eyebrow: 'Hitta hit', h2: 'Mottagning på Östermalm' },
    faqCard: {
      h2: 'Vanliga frågor',
      text: 'Vad kostar ett besök? Kan jag träffa er digitalt? Svar på det vi oftast får frågor om.',
      button: 'Läs vanliga frågor',
    },
  },

  therapistsPage: {
    title: 'Våra terapeuter – psykiater och psykoterapeut',
    description: 'Möt Hengameh Fransson, specialistläkare i psykiatri, och Siamak Noroozy, legitimerad psykoterapeut, hos Dialogisk Praxis i Stockholm.',
    h1: 'Våra terapeuter',
    lead: 'Möt psykiatern och psykoterapeuten du kan komma att träffa hos oss.',
  },
  therapistDetail: {
    contact: (first: string) => `Kontakta ${first}`,
    description: (name: string, role: string, short: string) => `${name}, ${role.toLowerCase()} i Stockholm. ${short}`,
  },

  servicesPage: {
    title: 'Vi erbjuder – psykiatri, psykoterapi, familjeterapi och intyg',
    description: 'Psykiatrisk bedömning, psykoterapi, familjeterapi, par- och familjerådgivning, second opinion och intyg i Stockholm. Även handledning för organisationer.',
    h1: 'Vi erbjuder',
    lead: 'Psykiatrisk bedömning, psykoterapi, familjeterapi och rådgivning för barn, ungdomar, par och vuxna – fysiskt eller digitalt. Vi arbetar också med organisationer.',
    orgCard: { title: 'Utredning, utbildning och handledning', summary: 'För företag och organisationer: utredning, föreläsning, utbildning och handledning.' },
    orgs: {
      h2: 'Företag och organisationer',
      text: 'Vi erbjuder också utredning, utbildning och handledning till socialtjänst, behandlingshem, försäkringsbolag och vårdcentraler.',
      button: 'Till organisationer',
    },
    price: { h2: 'Vad kostar det?', text: 'Se alla priser samlade på ett ställe.', button: 'Se priser' },
  },
  serviceDetail: {
    title: (t: string) => `${t} i Stockholm`,
    pricesCaption: 'Priser',
    aside: { h2: 'Boka eller fråga', text: 'Kontakta oss så berättar vi mer och hittar en tid som passar.' },
    more: 'Fler tjänster',
  },

  pricesPage: {
    title: 'Priser – psykoterapi och läkarbesök i Stockholm',
    description: 'Priser för psykoterapi, parterapi, familjeterapi, läkarbesök och intyg hos Dialogisk Praxis i Stockholm. Alla priser inklusive moms, 0 % på hälsovård.',
    h1: 'Priser',
    lead: 'Tydliga priser för våra vanligaste tjänster.',
    colService: 'Tjänst',
    colPrice: 'Pris',
    orgs: { before: 'Gäller det utredning, utbildning eller handledning för organisationer?', link: 'Läs mer här', after: 'eller kontakta oss för offert.' },
  },

  orgsPage: {
    title: 'För institutioner och organisationer',
    description: 'Handledning, konsultation, utbildning, psykologisk och psykosocial utredning samt nätverksarbete för socialtjänst, behandlingshem, försäkringsbolag och vårdcentraler.',
    crumb: 'För organisationer',
    h1: 'För organisationer',
    lead: 'Vi samarbetar med socialtjänst, behandlingshem, försäkringsbolag och vårdcentraler.',
    intro: [
      'Vi erbjuder handledning, konsultation, utbildning, psykologisk och psykosocial utredning, psykiatrisk utredning och behandling samt nätverksarbete.',
      'Vi inleder gärna med ett möte där vi tillsammans med er utforskar förutsättningarna och tar reda på vad som är möjligt och hur vi kan vara till hjälp.',
    ],
    imgAlt: 'Väntrum på mottagningen',
    h2: 'Uppdrag vi tar',
    items: [
      { id: 'utredning', title: 'Psykologisk och psykosocial utredning', text: 'Varje uppdrag blir ett samarbete mellan uppdragsgivarna, Dialogisk Praxis och de personer utredningen gäller. Frågeställningar och arbetsformer utformas tillsammans.' },
      { id: 'utbildning', title: 'Utbildning och handledning', text: 'Samtal med barn, trauma, sexuella övergrepp, våld och interkulturell kommunikation. Skräddarsydd efter er verksamhet.' },
      { id: 'psykiatri', title: 'Psykiatrisk utredning och behandling', text: 'Kvalificerad utredning och behandling av psykisk ohälsa hos barn, ungdomar och vuxna.' },
      { id: 'natverk', title: 'Nätverksarbete och konsultation', text: 'Samarbete runt personen tillsammans med socialtjänst, vård och andra aktörer.' },
    ],
    cta: { title: 'Vill ni diskutera ett uppdrag?', text: 'Vi börjar gärna med ett möte för att utforska förutsättningarna.', button: 'Kontakta oss' },
  },

  faqPage: {
    title: 'Vanliga frågor om psykiatri och psykoterapi',
    description: 'Svar på vanliga frågor om Dialogisk Praxis i Stockholm: var vi finns, vad ett besök kostar, digitala besök, vilka vi hjälper och hur du bokar.',
    h1: 'Vanliga frågor',
    lead: 'Svar på det vi oftast får frågor om.',
    cta: { title: 'Hittade du inte svaret?', text: 'Hör av dig så svarar vi på dina frågor.' },
  },
  faq: [
    { id: 'where', q: 'Var finns mottagningen?', a: (a: Address) => `Vi finns i ${a.place} på ${a.street}, ${a.postalCode} ${a.city}.` },
    { id: 'digital', q: 'Kan jag träffa er digitalt?', a: () => 'Ja, du kan välja mellan fysiskt eller digitalt besök vid psykiatrisk vård.' },
    { id: 'price', q: 'Vad kostar ett besök?', a: (_: Address, p: { therapy: string; student: string; doctor: string; vat: string }) => `Psykoterapi 45 minuter kostar ${p.therapy} (studentpris ${p.student}). Läkarbesök på 60 minuter kostar ${p.doctor}. ${p.vat}`, link: { to: 'prices' as const, label: 'Se hela prislistan' } },
    { id: 'who', q: 'Vilka kan ni hjälpa?', a: () => 'Vi möter barn, ungdomar och vuxna, enskilt, som par eller som familj. Vi arbetar också med institutioner som socialtjänst, behandlingshem, försäkringsbolag och vårdcentraler.' },
    { id: 'languages', q: 'På vilka språk kan jag få hjälp?', a: () => 'Vi arbetar på svenska, engelska och persiska. Meddela gärna vilket språk du vill ha samtalet på när du kontaktar oss.' },
    { id: 'book', q: 'Hur bokar jag?', a: () => 'Kontakta oss via e-post eller telefon. Kontaktuppgifterna finns på kontaktsidan.', link: { to: 'contact' as const, label: 'Gå till kontaktsidan' } },
  ],

  approachPage: {
    title: 'Så jobbar vi – det dialogiska synsättet',
    description: 'Vår praktik bygger på dialogiska teorier: relationer, meningsskapande och etiskt ansvar i mötet med den Andre. Läs om hur vi arbetar med psykoterapi och psykiatri.',
    h1: 'Så jobbar vi',
    lead: 'Vår praktik bygger på det dialogiska synsättet.',
    intro: {
      eyebrow: 'Utgångspunkten',
      h2: 'Det dialogiska synsättet',
      paras: [
        'Dialogiska teorier kan ses som en grundläggande teori för meningsskapande i språk och kommunikation. Dialogismen är ett vetenskapligt förhållningssätt till kommunikation, kognition, språk och meningsskapande, och den bygger på relationer – mellan människor och mellan människor och deras fysiska, sociala och kulturella omvärld.',
        'De dialogiska teorierna är ett alternativ till psykologi som utgår från individen, till exempel behaviorism och kognitivism. I stället lyfter de fram den Andres roll i individers och gruppers meningsskapande.',
      ],
    },
    imgAlt: 'Samtalsrum på mottagningen',
    principles: {
      eyebrow: 'Grundtankar',
      h2: 'Mötet och etiken',
      meeting: {
        title: 'Mötet',
        text: 'När vi kommunicerar använder vi ord, gester och handlingar, och ny mening skapas ständigt när vi möts. Varje situation har unika förutsättningar för nytt meningsskapande, och de som deltar påverkar varandra ömsesidigt.',
      },
      ethics: {
        title: 'Etiken',
        paras: [
          'De dialogiska teorierna medför ett etiskt ansvar i mötet med den Andre, där omtanken föregår tanken. Etiken uppstår i varje mänskligt möte och innebär ett ursprungligt och oundvikligt ansvar för den Andre.',
          'Den Andre är inte något jag kan reducera, kategorisera eller göra till mitt. Omtanken eftersträvas genom öppenhet och mottaglighet för det som inte är jag och mitt – alteriteten, representerad av den Andre.',
        ],
      },
    },
    closing: {
      quote: 'Omtanken föregår tanken.',
      text: 'Så möter vi dig – i psykiatrin, i psykoterapin och i arbetet med organisationer.',
      primary: 'Se vad vi erbjuder',
      secondary: 'Möt terapeuterna',
    },
  },

  contactPage: {
    title: (a: Address) => `Kontakt – mottagning på ${a.street}, ${a.city}`,
    description: (name: string, a: Address, names: string) => `Kontakta ${name}. Mottagning i ${a.place}, ${a.street}, ${a.postalCode} ${a.city}. E-post och telefon till ${names}.`,
    and: 'och',
    h1: 'Kontakt',
    lead: 'Hör av dig via e-post eller telefon så hjälper vi dig vidare.',
    visit: 'Besöksadress',
    general: 'Allmänna förfrågningar:',
  },

  notFound: {
    title: 'Sidan hittades inte',
    description: 'Sidan du letar efter finns inte. Gå till startsidan eller kontakta Dialogisk Praxis i Stockholm.',
    text: 'Sidan du letar efter finns inte eller har flyttats.',
    button: 'Till startsidan',
  },

  therapists: [
    {
      slug: 'hengameh-fransson',
      role: 'Specialistläkare i psykiatri',
      short: 'Psykiater med erfarenhet av barn-, ungdoms- och vuxenpsykiatri samt samtalsterapi.',
      alt: 'Hengameh Fransson, specialistläkare i psykiatri',
      bio: [
        'Hengameh är utbildad specialistläkare i psykiatri (psykiater). Hon arbetar med bedömning och behandling av alla typer av psykisk ohälsa och har erfarenhet inom barn/ungdom- och vuxenpsykiatri.',
        'Hengameh jobbar även med samtalsterapi. Hon har genomgått grundläggande psykoterapiutbildning (steg 1) och går för närvarande Psykoterapeutprogrammet på Stockholms Universitet för att bli legitimerad psykoterapeut.',
        'För Hengameh är det viktigt att inte bara fokusera på att medicinera bort symtomen, utan även lägga vikt vid att bearbeta bakomliggande orsaker till klientens besvär.',
      ],
    },
    {
      slug: 'siamak-noroozy',
      role: 'Socionom och legitimerad psykoterapeut',
      short: 'Legitimerad psykoterapeut och handledare med erfarenhet av trauma, depression och ångest.',
      alt: 'Siamak Noroozy, socionom och legitimerad psykoterapeut',
      bio: [
        'Siamak är utbildad socionom med interkulturell inriktning och legitimerad psykoterapeut. Han har kompetens som både handledare och lärare i psykoterapi.',
        'Siamak har mångårig beprövad erfarenhet av psykologisk behandling på vetenskaplig grund inom barn-, ungdoms- och vuxenpsykiatri. Han arbetar med personer som varit med om traumatiska upplevelser, såsom krig, våld, sexuella övergrepp och försummelse, samt nedstämdhet, depression, ångest, social fobi och liknande psykiatriska svårigheter.',
      ],
    },
  ],

  services: [
    {
      id: "psychotherapy",
      slug: "psykoterapi",
      title: "Psykoterapi",
      summary: "Samtal som hjälper dig att förstå det som känns svårt, återfinna din riktning och upptäcka nya möjligheter i livet.",
      description: "Psykoterapi för vuxna, barn och ungdomar i Stockholm utifrån ett dialogiskt synsätt. Se vad det innebär, vad det kostar och hur du bokar.",
      body: [] as string[],
      sections: [
        { h: "Vad innebär psykoterapi?", paras: ["Psykoterapi är en behandlingsform där du tillsammans med en terapeut får utrymme att utforska det som påverkar ditt mående och din livssituation. Det kan handla om oro, nedstämdhet, stress, relationssvårigheter, trauma, livskriser eller sådant som gång på gång begränsar dig och gör livet svårare att leva. I terapin får både känslor, erfarenheter, relationer och livsvillkor plats. Målet är inte enbart att minska symtom, utan att skapa ökad förståelse, större handlingsutrymme och möjlighet att leva på ett mer bärande sätt."] },
        { h: "Hur går behandlingen till?", paras: ["Behandlingen sker genom regelbundna samtal i en trygg och respektfull miljö där du blir lyssnad till och tagen på allvar. Tillsammans utforskar vi det som gör ont, det som låst sig och det som ännu inte fått språk. Genom samtalen kan nya perspektiv växa fram, tidigare erfarenheter förstås på nya sätt och oanade möjligheter bli synliga. Förändring sker ofta stegvis, men kan få djupgående betydelse.", "Samtalen anpassas efter dina behov och din situation. För barn och ungdomar kan även föräldrar eller andra viktiga vuxna involveras när det är hjälpsamt. Vid relationssvårigheter kan samtalen även ske tillsammans med partner eller familjemedlemmar."] },
        { h: "Vem kan få hjälp?", paras: ["Vi erbjuder psykoterapi, familjerådgivning och samtalsstöd för vuxna, barn, ungdomar, par och familjer. Du kan söka hjälp vid exempelvis:"], list: ["ångest och oro", "nedstämdhet eller depression", "stress och utmattning", "trauma och svåra livshändelser", "kris efter separation, våld eller förlust", "relationssvårigheter", "konflikter i familjen", "svårigheter i kommunikationen", "självkänsla och identitet", "känslomässiga eller beteendemässiga svårigheter hos barn och unga"] },
      ] as Section[],
      priceLabels: ["Psykoterapi 45 minuter", "Psykoterapi 45 minuter, studentpris"],
    },
    {
      id: "psychiatric-care",
      slug: "psykiatrisk-vard",
      title: "Psykiatrisk vård",
      summary: "Få en grundlig psykiatrisk bedömning och en tydlig plan för din behandling.",
      description: "Specialistpsykiatrisk bedömning och behandling i Stockholm. Träffa en läkare med särskild kompetens inom psykiatri, fysiskt eller digitalt.",
      body: [] as string[],
      sections: [
        { h: "Vad innebär specialistpsykiatrisk bedömning?", paras: ["Vid en specialistpsykiatrisk bedömning får du träffa en läkare med särskild kompetens inom psykiatri. Här kartläggs dina symtom, din livssituation och tidigare vårdhistorik för att förstå orsaken till dina besvär."] },
        { h: "Hur går besöket till?", paras: ["Besöket inleds med ett fördjupat samtal där du får beskriva ditt mående. Bedömningen kan inkludera diagnostik, eventuell utredning och planering av fortsatt behandling."] },
        { h: "Vad händer efter bedömningen?", paras: ["Efter besöket får du en individuell behandlingsplan som kan inkludera läkemedelsbehandling, psykoterapi eller andra insatser."] },
      ] as Section[],
      priceLabels: ["Läkarbesök, 60 minuter"],
    },
    {
      id: "family-therapy",
      slug: "familjeterapi",
      title: "Familjeterapi och föräldrastöd",
      summary: "Stärk relationer och skapa bättre förutsättningar för hela familjen.",
      description: "Familjeterapi och föräldrastöd i Stockholm. Stärk relationerna och hitta nya sätt att hantera konflikter och svårigheter i familjen.",
      body: [] as string[],
      sections: [
        { h: "Vad innebär familjeterapi?", paras: ["Familjeterapi fokuserar på samspelet mellan familjemedlemmar och hur relationer påverkar måendet. Föräldrabehandling ger stöd i föräldrarollen och verktyg för att hantera utmaningar i vardagen."] },
        { h: "Hur går behandlingen till?", paras: ["Under samtalen arbetar ni tillsammans med terapeuten för att förstå mönster, förbättra kommunikation och hitta nya sätt att hantera konflikter och svårigheter."] },
        { h: "När kan familjeterapi vara aktuellt?", paras: ["Behandlingen kan vara hjälpsam vid konflikter i familjen, svårigheter i föräldraskapet eller när ett barn eller en ungdom inte mår bra."] },
      ] as Section[],
      priceLabels: ["Familjeterapi 90 minuter"],
    },
    {
      id: "family-counselling",
      slug: "par-och-familjeradgivning",
      title: "Par- och familjerådgivning",
      summary: "Få stöd i relationen och hjälp att hitta vägar framåt tillsammans.",
      description: "Par- och familjerådgivning i Stockholm. Få stöd med kommunikation, konflikter och relationens utmaningar.",
      body: [] as string[],
      sections: [
        { h: "Vad är par- och familjerådgivning?", paras: ["Par- och familjerådgivning är en samtalsform som riktar sig till par och familjer som vill arbeta med sin relation. Fokus ligger på kommunikation, förståelse och att hantera konflikter."] },
        { h: "Hur går samtalen till?", paras: ["Under samtalen får ni stöd av en professionell rådgivare för att utforska relationens styrkor och utmaningar. Ni får verktyg för att förbättra kommunikationen och skapa förändring."] },
        { h: "När kan par- och familjerådgivning vara aktuellt?", paras: ["Det kan vara aktuellt vid relationsproblem, kriser, separationstankar eller när ni vill stärka er relation."] },
      ] as Section[],
      priceLabels: ["Parterapi 90 minuter", "Familjerådgivning 90 minuter"],
    },
    {
      id: 'second-opinion',
      slug: 'second-opinion',
      title: 'Second opinion och omprövning',
      summary: 'Ompröva, ändra eller ta bort en diagnos.',
      description: 'Second opinion, omprövning och friskförklaring av psykiatrisk diagnos hos specialistläkare i psykiatri i Stockholm. Fysiskt eller digitalt besök.',
      body: [
        'Om du upplever att du har fått fel diagnos, upplever andra svårigheter som inte stämmer in på den ställda diagnosen eller upplever att du inte borde ha en diagnos över huvud taget erbjuder vi möjlighet att ompröva, ändra, friskförklara från eller ta bort diagnosen.',
        'Varje fall är individuellt och processen är personcentrerad. Utredning och bedömning tar därför olika lång tid och arbete i anspråk. Välkommen att kontakta oss för en konsultation.',
      ],
      sections: [] as Section[],
      priceLabels: [] as string[],
    },
    {
      id: 'certificates',
      slug: 'intyg',
      title: 'Intyg till myndigheter',
      summary: 'Läkarintyg för polisutbildning, mönstring med mera.',
      description: 'Läkarintyg från specialistläkare i psykiatri till Polismyndigheten, Försvarsmakten och Plikt- och prövningsverket. Se priser.',
      body: [
        'Vi kan genomföra utredning och utfärda intyg till myndigheter, exempelvis Polismyndigheten, Försvarsmakten och Plikt- och prövningsverket.',
        'Vid ansökan till polishögskolan krävs ett läkarintyg från specialistläkare i psykiatri om man någon gång har haft specifika diagnoser, bl.a. depression, ångest, ätstörning, ADHD, ADD. Intyget används som underlag för en individuell bedömning inför antagning. Försvarsmakten har liknande krav för mönstrande med ADHD-diagnos. Detaljer om vilka diagnoser som omfattas finns hos respektive myndighet.',
        'Varje fall är individuellt och processen är personcentrerad. Välkommen att kontakta oss för en konsultation.',
      ],
      sections: [] as Section[],
      priceLabels: ['Intyg i samband med mönstring', 'Intyg vid ansökan till polisutbildning'],
    },
  ],
};

export type Content = typeof sv;
export type { ServiceIcon };
