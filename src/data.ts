import hengameh from './assets/hengameh.webp';
import siamak from './assets/siamak.webp';

// Språkoberoende data. Översättningsbara texter finns i src/i18n/.
export const site = {
  name: 'Dialogisk Praxis',
  url: 'https://dialogisk.se',
  email: 'info@dialogisk.se',
  address: {
    street: 'Artillerigatan 28',
    postalCode: '114 51',
    city: 'Stockholm',
  },
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Artillerigatan+28+114+51+Stockholm',
};

export const therapistBase = [
  {
    slug: 'hengameh-fransson',
    name: 'Hengameh Fransson',
    image: hengameh,
    focus: '50% 35%',
    email: 'hengameh@dialogisk.se',
    phone: '076-252 22 43',
    phoneIntl: '+46 76 252 22 43',
    tel: '+46762522243',
  },
  {
    slug: 'siamak-noroozy',
    name: 'Siamak Noroozy',
    image: siamak,
    focus: '45% 35%',
    email: 'siamak@dialogisk.se',
    phone: '073-708 01 30',
    phoneIntl: '+46 73 708 01 30',
    tel: '+46737080130',
  },
] as const;

export type ServiceIcon = 'heart-handshake' | 'stethoscope' | 'search-check' | 'file-check';

export const serviceBase: { id: string; icon: ServiceIcon; prices: number[] }[] = [
  { id: 'psychotherapy', icon: 'heart-handshake', prices: [1400, 900, 2000, 2000] },
  { id: 'psychiatric-care', icon: 'stethoscope', prices: [2200] },
  { id: 'second-opinion', icon: 'search-check', prices: [] },
  { id: 'certificates', icon: 'file-check', prices: [9500, 13500] },
];
