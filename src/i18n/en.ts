import type { Content } from './sv';

// Engelsk översättning – bör granskas av verksamheten (särskilt facktermer och titlar).
export const en: Content = {
  code: 'en',
  htmlLang: 'en',
  ogLocale: 'en_GB',
  short: 'EN',
  native: 'English',
  place: 'Vicente Clinic',
  vatNote: 'All prices include VAT; healthcare is VAT-exempt (0 %).',
  orgDescription: 'Psychiatry and psychotherapy in Stockholm, with a dialogical approach.',
  currency: (n: number) => `SEK ${n.toLocaleString('en-US')}`,

  ui: {
    skip: 'Skip to content',
    brandLabel: 'Dialogisk Praxis – home',
    menu: 'Menu',
    menuToggle: 'Show or hide the menu',
    mainNav: 'Main menu',
    langSwitch: 'Change language',
    breadcrumbs: 'Breadcrumbs',
    start: 'Home',
    readMore: 'Read more',
    about: 'about',
    contactUs: 'Contact us',
    showOnMap: 'Show on map',
    email: 'Email',
    phone: 'Phone',
    footer: {
      pagesNav: 'Footer – pages',
      pagesTitle: 'Pages',
      servicesNav: 'Footer – services',
      servicesTitle: 'Services',
    },
    cta: {
      title: 'Want to know more or book an appointment?',
      text: 'Get in touch and we will help you take the next step.',
      button: 'Contact us',
    },
  },

  pageNames: {
    therapists: 'Therapists',
    services: 'Services',
    organisations: 'Organisations',
    approach: 'Our approach',
    contact: 'Contact',
    prices: 'Prices',
    faq: 'FAQ',
  },

  home: {
    title: 'Dialogisk Praxis – psychiatry and psychotherapy in Stockholm',
    description: 'Psychiatric care, psychotherapy, couples and family therapy in Östermalm, Stockholm. Meet psychiatrist Hengameh Fransson and psychotherapist Siamak Noroozy.',
    hero: {
      alt: 'Hengameh Fransson and Siamak Noroozy',
      eyebrow: 'Östermalm, Stockholm',
      h1: 'Psychiatry and psychotherapy in Stockholm',
      lead: 'We meet children, young people and adults with a dialogical approach – where care comes before thought.',
      secondary: 'See what we offer',
    },
    trust: ['Specialist physician in psychiatry', 'Licensed psychotherapist', 'In-person or online visits'],
    services: {
      eyebrow: 'For individuals',
      h2: 'What we offer',
      text: 'Psychiatric assessment and treatment, psychotherapy, and couples and family therapy. Combining family sessions with individual sessions, and vice versa, is often the most rewarding.',
      pricesLink: 'See our prices',
    },
    approach: {
      eyebrow: 'Our approach',
      quote: 'Care comes before thought.',
      text: 'Our practice is built on dialogical theories – on relationships between people and on the role of the Other in how we create meaning.',
      button: 'Read about our approach',
      imgAlt: 'Therapy room at the clinic',
    },
    team: { eyebrow: 'The team', h2: 'Meet our therapists' },
    orgs: {
      eyebrow: 'For organisations',
      h2: 'Working with social services, healthcare and insurers',
      text: 'We offer supervision, training, assessments and network work for social services, residential care homes, insurance companies and primary care centres.',
      button: 'More for organisations',
      items: [
        { title: 'Assessments', text: 'Psychological and psychosocial assessments' },
        { title: 'Training and supervision', text: 'Tailored to your organisation' },
        { title: 'Network work', text: 'Collaboration around the person' },
      ],
    },
    find: { eyebrow: 'Find us', h2: 'Clinic in Östermalm' },
    faqCard: {
      h2: 'Frequently asked questions',
      text: 'What does a visit cost? Can I meet you online? Answers to what we are asked most often.',
      button: 'Read the FAQ',
    },
  },

  therapistsPage: {
    title: 'Our therapists – psychiatrist and psychotherapist',
    description: 'Meet Hengameh Fransson, specialist physician in psychiatry, and Siamak Noroozy, licensed psychotherapist, at Dialogisk Praxis in Stockholm.',
    h1: 'Our therapists',
    lead: 'Meet the psychiatrist and psychotherapist you may see at our clinic.',
  },
  therapistDetail: {
    contact: (first: string) => `Contact ${first}`,
    description: (name: string, role: string, short: string) => `${name}, ${role.toLowerCase()} in Stockholm. ${short}`,
  },

  servicesPage: {
    title: 'Services – psychiatry, psychotherapy and certificates',
    description: 'Psychiatric care, psychotherapy, couples and family therapy, second opinions and certificates for authorities in Stockholm. See what we offer, what it costs and how to book.',
    h1: 'Services',
    lead: 'Assessment, treatment and therapy for children, young people and adults – in person or online.',
    orgs: {
      h2: 'Companies and organisations',
      text: 'We also offer assessments, training and supervision for social services, residential care homes, insurance companies and primary care centres.',
      button: 'To organisations',
    },
    price: { h2: 'What does it cost?', text: 'See all prices in one place.', button: 'See prices' },
  },
  serviceDetail: {
    title: (t: string) => `${t} in Stockholm`,
    pricesCaption: 'Prices',
    aside: { h2: 'Book or ask', text: 'Contact us and we will tell you more and find a time that suits you.' },
    more: 'More services',
  },

  pricesPage: {
    title: 'Prices – psychotherapy and doctor visits in Stockholm',
    description: 'Prices for psychotherapy, couples therapy, family therapy, doctor visits and certificates at Dialogisk Praxis in Stockholm. All prices include VAT; healthcare is VAT-exempt.',
    h1: 'Prices',
    lead: 'Clear prices for our most common services.',
    colService: 'Service',
    colPrice: 'Price',
    orgs: { before: 'Looking for assessments, training or supervision for organisations?', link: 'Read more here', after: 'or contact us for a quote.' },
  },

  orgsPage: {
    title: 'For institutions and organisations',
    description: 'Supervision, consultation, training, psychological and psychosocial assessments and network work for social services, residential care homes, insurance companies and primary care centres.',
    crumb: 'For organisations',
    h1: 'For organisations',
    lead: 'We work with social services, residential care homes, insurance companies and primary care centres.',
    intro: [
      'We offer supervision, consultation, training, psychological and psychosocial assessments, psychiatric assessment and treatment, and network work.',
      'We are happy to start with a meeting where we explore the conditions together with you and find out what is possible and how we can help.',
    ],
    imgAlt: 'Waiting room at the clinic',
    h2: 'Assignments we take on',
    items: [
      { id: 'assessment', title: 'Psychological and psychosocial assessments', text: 'Every assignment is a collaboration between the commissioning parties, Dialogisk Praxis and the people the assessment concerns. Questions and ways of working are shaped together.' },
      { id: 'training', title: 'Training and supervision', text: 'Conversations with children, trauma, sexual abuse, violence and intercultural communication. Tailored to your organisation.' },
      { id: 'psychiatry', title: 'Psychiatric assessment and treatment', text: 'Qualified assessment and treatment of mental ill-health in children, young people and adults.' },
      { id: 'network', title: 'Network work and consultation', text: 'Collaboration around the person together with social services, healthcare and other parties.' },
    ],
    cta: { title: 'Would you like to discuss an assignment?', text: 'We are happy to begin with a meeting to explore the conditions.', button: 'Contact us' },
  },

  faqPage: {
    title: 'FAQ about psychiatry and psychotherapy',
    description: 'Answers to common questions about Dialogisk Praxis in Stockholm: where we are, what a visit costs, online visits, who we help and how to book.',
    h1: 'Frequently asked questions',
    lead: 'Answers to what we are asked most often.',
    cta: { title: 'Did not find your answer?', text: 'Get in touch and we will answer your questions.' },
  },
  faq: [
    { id: 'where', q: 'Where is the clinic?', a: (a) => `We are at ${a.place}, ${a.street}, ${a.postalCode} ${a.city}.` },
    { id: 'digital', q: 'Can I meet you online?', a: () => 'Yes, for psychiatric care you can choose between an in-person or an online visit.' },
    { id: 'price', q: 'What does a visit cost?', a: (_, p) => `Psychotherapy, 45 minutes, costs ${p.therapy} (student price ${p.student}). A 60-minute doctor visit costs ${p.doctor}. ${p.vat}`, link: { to: 'prices', label: 'See the full price list' } },
    { id: 'who', q: 'Who can you help?', a: () => 'We see children, young people and adults – individually, as couples or as families. We also work with institutions such as social services, residential care homes, insurance companies and primary care centres.' },
    { id: 'book', q: 'How do I book?', a: () => 'Contact us by email or phone. Contact details are on the contact page.', link: { to: 'contact', label: 'Go to the contact page' } },
  ],

  approachPage: {
    title: 'Our approach – the dialogical perspective',
    description: 'Our practice is built on dialogical theories: relationships, meaning-making and ethical responsibility in the encounter with the Other. Read about how we work with psychotherapy and psychiatry.',
    h1: 'Our approach',
    lead: 'Our practice is built on the dialogical perspective.',
    intro: {
      eyebrow: 'Our starting point',
      h2: 'The dialogical perspective',
      paras: [
        'Dialogical theories can be seen as a fundamental theory of meaning-making in language and communication. Dialogism is a scientific approach to communication, cognition, language and meaning-making, and it is built on relationships – between people, and between people and their physical, social and cultural surroundings.',
        'Dialogical theories are an alternative to psychology that starts from the individual, such as behaviourism and cognitivism. Instead, they emphasise the role of the Other in how individuals and groups create meaning.',
      ],
    },
    imgAlt: 'Therapy room at the clinic',
    principles: {
      eyebrow: 'Core ideas',
      h2: 'The encounter and ethics',
      meeting: {
        title: 'The encounter',
        text: 'When we communicate we use words, gestures and actions, and new meaning is constantly created when we meet. Every situation has unique conditions for new meaning-making, and those taking part influence each other mutually.',
      },
      ethics: {
        title: 'Ethics',
        paras: [
          'Dialogical theories entail an ethical responsibility in the encounter with the Other, where care comes before thought. Ethics arises in every human encounter and means an original and unavoidable responsibility for the Other.',
          'The Other is not something I can reduce, categorise or make mine. Care is pursued through openness and receptiveness to what is not me and mine – alterity, represented by the Other.',
        ],
      },
    },
    closing: {
      quote: 'Care comes before thought.',
      text: 'This is how we meet you – in psychiatry, in psychotherapy and in our work with organisations.',
      primary: 'See what we offer',
      secondary: 'Meet the therapists',
    },
  },

  contactPage: {
    title: (a) => `Contact – clinic at ${a.street}, ${a.city}`,
    description: (name, a, names) => `Contact ${name}. Clinic at ${a.place}, ${a.street}, ${a.postalCode} ${a.city}. Email and phone for ${names}.`,
    and: 'and',
    h1: 'Contact',
    lead: 'Get in touch by email or phone and we will help you take the next step.',
    visit: 'Visiting address',
    general: 'General enquiries:',
  },

  notFound: {
    title: 'Page not found',
    description: 'The page you are looking for does not exist. Go to the home page or contact Dialogisk Praxis in Stockholm.',
    text: 'The page you are looking for does not exist or has been moved.',
    button: 'Go to the home page',
    otherLang: 'Sidan hittades inte – till den svenska sidan',
  },

  therapists: [
    {
      slug: 'hengameh-fransson',
      role: 'Specialist physician in psychiatry',
      short: 'Psychiatrist with experience in child, adolescent and adult psychiatry as well as talk therapy.',
      alt: 'Hengameh Fransson, specialist physician in psychiatry',
      bio: [
        'Hengameh is a trained specialist physician in psychiatry (psychiatrist). She assesses and treats all kinds of mental ill-health and has experience in child and adolescent as well as adult psychiatry.',
        'Hengameh also works with talk therapy. She has completed basic psychotherapy training (step 1) and is currently studying the Psychotherapist Programme at Stockholm University to become a licensed psychotherapist.',
        'For Hengameh it is important not only to focus on medicating away symptoms, but also to work through the underlying causes of the client’s difficulties.',
      ],
    },
    {
      slug: 'siamak-noroozy',
      role: 'Social worker and licensed psychotherapist',
      short: 'Licensed psychotherapist and supervisor with experience in trauma, depression and anxiety.',
      alt: 'Siamak Noroozy, social worker and licensed psychotherapist',
      bio: [
        'Siamak is a trained social worker with an intercultural focus and a licensed psychotherapist. He is qualified as both a supervisor and a teacher of psychotherapy.',
        'Siamak has many years of proven experience in evidence-based psychological treatment in child, adolescent and adult psychiatry. He works with people who have lived through traumatic experiences such as war, violence, sexual abuse and neglect, as well as low mood, depression, anxiety, social phobia and similar psychiatric difficulties.',
      ],
    },
  ],

  services: [
    {
      id: 'psychotherapy',
      slug: 'psychotherapy',
      title: 'Psychotherapy',
      summary: 'Individual, couples and family therapy from a dialogical perspective.',
      description: 'Psychotherapy, couples therapy and family therapy in Stockholm from a dialogical perspective. See what it involves, what it costs and how to book.',
      body: [
        'Psychotherapy, psychological treatment, means treating mental, relational and existential problems with psychological methods. Psychotherapy is based on science and proven experience.',
        'The psychotherapists guide the process towards making room for contradictory voices and unspoken experiences to be heard and to enter into dialogue with each other. In this way individuals can find their own way forward, with greater freedom of action and improved health.',
        'According to the dialogical perspective, psychotherapy is not limited to one particular form, such as individual therapy or family therapy. The choice of form is negotiable and changeable and depends on each person’s unique circumstances.',
      ],
      priceLabels: ['Psychotherapy, 45 minutes', 'Psychotherapy, 45 minutes, student price', 'Couples therapy, 90 minutes', 'Family therapy and family counselling, 90 minutes'],
    },
    {
      id: 'psychiatric-care',
      slug: 'psychiatric-care',
      title: 'Psychiatric care',
      summary: 'Assessment and treatment of mental ill-health in children, young people and adults.',
      description: 'Psychiatric outpatient clinic in Stockholm for assessment and treatment of depression, anxiety, trauma, stress and more. In-person or online visit.',
      body: [
        'We are a psychiatric outpatient clinic offering qualified assessment and treatment of mental ill-health in children, young people and adults. We offer person-centred care – both medical treatment and psychotherapy.',
        'If you suffer from depression, anxiety, sleep disorders, eating disorders, trauma and crisis reactions, bipolar disorder, stress or burnout, or something similar, you are welcome to contact us for either an in-person or an online visit.',
      ],
      priceLabels: ['Doctor visit, 60 minutes'],
    },
    {
      id: 'second-opinion',
      slug: 'second-opinion',
      title: 'Second opinion and reassessment',
      summary: 'Reassess, change or remove a diagnosis.',
      description: 'Second opinion, reassessment and removal of a psychiatric diagnosis with a specialist physician in psychiatry in Stockholm. In-person or online visit.',
      body: [
        'If you feel you have received the wrong diagnosis, experience other difficulties that do not fit the diagnosis you were given, or feel you should not have a diagnosis at all, we offer the possibility to reassess, change, declare you free of, or remove the diagnosis.',
        'Every case is individual and the process is person-centred. Assessment therefore takes different amounts of time and work. You are welcome to contact us for a consultation.',
      ],
      priceLabels: [],
    },
    {
      id: 'certificates',
      slug: 'certificates',
      title: 'Certificates for authorities',
      summary: 'Medical certificates for police training, military enlistment and more.',
      description: 'Medical certificates from a specialist physician in psychiatry for the Swedish Police Authority, the Swedish Armed Forces and the Swedish Defence Conscription and Assessment Agency. See prices.',
      body: [
        'We can carry out assessments and issue certificates for authorities, for example the Swedish Police Authority, the Swedish Armed Forces and the Swedish Defence Conscription and Assessment Agency.',
        'When applying to the Police Academy, a medical certificate from a specialist physician in psychiatry is required if you have ever had certain diagnoses, including depression, anxiety, eating disorders, ADHD and ADD. The certificate is used as the basis for an individual assessment before admission. The Armed Forces have similar requirements for conscripts with an ADHD diagnosis. Details on which diagnoses are covered are available from each authority.',
        'Every case is individual and the process is person-centred. You are welcome to contact us for a consultation.',
      ],
      priceLabels: ['Certificate for military enlistment assessment', 'Certificate for application to police training'],
    },
  ],
};
