import type { Content, Section } from './sv';

// Engelsk översättning – bör granskas av verksamheten (särskilt facktermer och titlar).
export const en: Content = {
  code: 'en',
  htmlLang: 'en',
  dir: 'ltr',
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
    languagesLabel: 'Languages',
    langNames: { sv: 'Swedish', en: 'English', fa: 'Persian' },
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
    trust: ['Specialist physician in psychiatry', 'Licensed psychotherapist', 'In-person or online visits', 'Swedish, English and Persian'],
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
    title: 'Services – psychiatry, psychotherapy, family therapy and certificates',
    description: 'Psychiatric assessment, psychotherapy, family and couples counselling, second opinions and certificates in Stockholm. Also supervision for organisations.',
    h1: 'Services',
    lead: 'Psychiatric assessment, psychotherapy, family therapy and counselling for children, young people, couples and adults – in person or online. We also work with organisations.',
    orgCard: { title: 'Assessment, training and supervision', summary: 'For companies and organisations: assessments, lectures, training and supervision.' },
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
    description: 'Prices for psychotherapy, couples and family therapy, doctor visits and certificates at Dialogisk Praxis in Stockholm. Healthcare is VAT-exempt.',
    h1: 'Prices',
    lead: 'Clear prices for our most common services.',
    colService: 'Service',
    colPrice: 'Price',
    orgs: { before: 'Looking for assessments, training or supervision for organisations?', link: 'Read more here', after: 'or contact us for a quote.' },
  },

  orgsPage: {
    title: 'For institutions and organisations',
    description: 'Supervision, consultation, training, assessments and network work for social services, care homes, insurers and primary care centres.',
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
    { id: 'languages', q: 'Which languages can I get help in?', a: () => 'We work in Swedish, English and Persian. Let us know which language you prefer when you contact us.' },
    { id: 'book', q: 'How do I book?', a: () => 'Contact us by email or phone. Contact details are on the contact page.', link: { to: 'contact', label: 'Go to the contact page' } },
  ],

  approachPage: {
    title: 'Our approach – the dialogical perspective',
    description: 'Our practice is built on dialogical theories: relationships, meaning-making and ethical responsibility in the encounter with the Other.',
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
  },

  therapists: [
    {
      slug: 'hengameh-fransson',
      role: 'Specialist physician in psychiatry',
      short: 'Psychiatrist experienced in child, adolescent and adult psychiatry and talk therapy.',
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
      short: 'Supervisor experienced in trauma, depression and anxiety.',
      alt: 'Siamak Noroozy, social worker and licensed psychotherapist',
      bio: [
        'Siamak is a trained social worker with an intercultural focus and a licensed psychotherapist. He is qualified as both a supervisor and a teacher of psychotherapy.',
        'Siamak has many years of proven experience in evidence-based psychological treatment in child, adolescent and adult psychiatry. He works with people who have lived through traumatic experiences such as war, violence, sexual abuse and neglect, as well as low mood, depression, anxiety, social phobia and similar psychiatric difficulties.',
      ],
    },
  ],

  services: [
    {
      id: "psychotherapy",
      slug: "psychotherapy",
      title: "Psychotherapy",
      summary: "Conversations that help you understand what feels difficult, find your direction again and discover new possibilities in life.",
      description: "Psychotherapy for adults, children and young people in Stockholm, based on a dialogical approach. See what it involves, what it costs and how to book.",
      body: [] as string[],
      sections: [
        { h: "What is psychotherapy?", paras: ["Psychotherapy is a form of treatment where you, together with a therapist, have room to explore what affects your well-being and your life situation. It may concern anxiety, low mood, stress, relationship difficulties, trauma, life crises, or things that repeatedly limit you and make life harder to live. In therapy there is room for feelings, experiences, relationships and life conditions. The aim is not only to reduce symptoms, but to create greater understanding, more freedom of action and the possibility of living in a more sustainable way."] },
        { h: "How does the treatment work?", paras: ["Treatment takes place through regular conversations in a safe and respectful setting where you are listened to and taken seriously. Together we explore what hurts, what has become stuck and what has not yet found words. Through the conversations new perspectives can emerge, earlier experiences can be understood in new ways and unexpected possibilities can become visible. Change often happens step by step, but can be profoundly significant.", "The sessions are adapted to your needs and situation. For children and young people, parents or other important adults can also be involved when it helps. In case of relationship difficulties, sessions can also take place together with a partner or family members."] },
        { h: "Who can get help?", paras: ["We offer psychotherapy, family counselling and supportive conversations for adults, children, young people, couples and families. You can seek help for example for:"], list: ["anxiety and worry", "low mood or depression", "stress and exhaustion", "trauma and difficult life events", "crisis after separation, violence or loss", "relationship difficulties", "conflicts in the family", "difficulties in communication", "self-esteem and identity", "emotional or behavioural difficulties in children and young people"] },
      ] as Section[],
      priceLabels: ["Psychotherapy, 45 minutes", "Psychotherapy, 45 minutes, student price"],
    },
    {
      id: "psychiatric-care",
      slug: "psychiatric-care",
      title: "Psychiatric care",
      summary: "Get a thorough psychiatric assessment and a clear plan for your treatment.",
      description: "Specialist psychiatric assessment and treatment in Stockholm. Meet a doctor with special expertise in psychiatry, in person or online.",
      body: [] as string[],
      sections: [
        { h: "What is a specialist psychiatric assessment?", paras: ["In a specialist psychiatric assessment you meet a doctor with special expertise in psychiatry. Your symptoms, life situation and previous care history are mapped to understand the cause of your difficulties."] },
        { h: "What does the visit involve?", paras: ["The visit begins with an in-depth conversation where you describe how you are feeling. The assessment may include diagnostics, any necessary investigation and planning of further treatment."] },
        { h: "What happens after the assessment?", paras: ["After the visit you receive an individual treatment plan, which may include medication, psychotherapy or other interventions."] },
      ] as Section[],
      priceLabels: ["Doctor visit, 60 minutes"],
    },
    {
      id: "family-therapy",
      slug: "family-therapy",
      title: "Family therapy and parental support",
      summary: "Strengthen relationships and create better conditions for the whole family.",
      description: "Family therapy and parental support in Stockholm. Strengthen relationships and find new ways to handle conflicts and difficulties in the family.",
      body: [] as string[],
      sections: [
        { h: "What is family therapy?", paras: ["Family therapy focuses on the interaction between family members and how relationships affect well-being. Parental treatment offers support in the parenting role and tools for handling everyday challenges."] },
        { h: "How does the treatment work?", paras: ["During the sessions you work together with the therapist to understand patterns, improve communication and find new ways of handling conflicts and difficulties."] },
        { h: "When can family therapy be relevant?", paras: ["The treatment can help with conflicts in the family, difficulties in parenting, or when a child or young person is not doing well."] },
      ] as Section[],
      priceLabels: ["Family therapy, 90 minutes"],
    },
    {
      id: "family-counselling",
      slug: "couples-and-family-counselling",
      title: "Couples and family counselling",
      summary: "Get support in your relationship and help finding a way forward together.",
      description: "Couples and family counselling in Stockholm. Get support with communication, conflicts and the challenges in your relationship.",
      body: [] as string[],
      sections: [
        { h: "What is couples and family counselling?", paras: ["Couples and family counselling is a form of conversation for couples and families who want to work on their relationship. The focus is on communication, understanding and handling conflicts."] },
        { h: "How do the sessions work?", paras: ["During the sessions you are supported by a professional counsellor to explore the strengths and challenges of the relationship. You get tools to improve communication and create change."] },
        { h: "When can couples and family counselling be relevant?", paras: ["It can be relevant in case of relationship problems, crises, thoughts of separation, or when you want to strengthen your relationship."] },
      ] as Section[],
      priceLabels: ["Couples therapy, 90 minutes", "Family counselling, 90 minutes"],
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
      sections: [] as Section[],
      priceLabels: [],
    },
    {
      id: 'certificates',
      slug: 'certificates',
      title: 'Certificates for authorities',
      summary: 'Medical certificates for police training, military enlistment and more.',
      description: 'Medical certificates from a specialist physician in psychiatry for the Police Authority, the Armed Forces and the Defence Conscription and Assessment Agency.',
      body: [
        'We can carry out assessments and issue certificates for authorities, for example the Swedish Police Authority, the Swedish Armed Forces and the Swedish Defence Conscription and Assessment Agency.',
        'When applying to the Police Academy, a medical certificate from a specialist physician in psychiatry is required if you have ever had certain diagnoses, including depression, anxiety, eating disorders, ADHD and ADD. The certificate is used as the basis for an individual assessment before admission. The Armed Forces have similar requirements for conscripts with an ADHD diagnosis. Details on which diagnoses are covered are available from each authority.',
        'Every case is individual and the process is person-centred. You are welcome to contact us for a consultation.',
      ],
      sections: [] as Section[],
      priceLabels: ['Certificate for military enlistment assessment', 'Certificate for application to police training'],
    },
  ],
};
