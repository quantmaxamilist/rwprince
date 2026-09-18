export const site = {
  name: 'R W Prince',
  phone: '01935 849 250',
  phoneHref: 'tel:01935849250',
  email: 'dawn@podimorerecycling.co.uk',
  address: 'R W Prince Ltd, Podimore, Yeovil, Somerset, BA22 8JG',
  addressShort: 'Podimore, Yeovil, Somerset BA22 8JG',
  companyNumber: 'R W Prince Ltd · Company #4861402',
};

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'Aggregates', href: '/aggregates' },
  { label: 'Asphalt', href: '/asphalt' },
  { label: 'Plant Hire', href: '/plant-hire' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerHours = [
  { day: 'Mon–Fri', hours: '7:30am–5:00pm' },
  { day: 'Saturday', hours: 'By arrangement' },
  { day: 'Sunday', hours: 'Tarmac & asphalt only' },
];

export const galleryImages = [
  '/images/slide-07.jpg',
  '/images/slide-02.jpg',
  '/images/slide-06.jpg',
  '/images/slide-08.jpg',
];

export type NumberedService = {
  number: string;
  href: string;
  image: string;
  imagePosition?: string;
  /** Raw inner SVG markup (paths/rects/circles), rendered with set:html so
   * shapes that aren't a single <path> (e.g. rect+circle wheels) match the
   * original markup exactly. */
  iconSvg: string;
  title: string;
  bullets: string[];
};

export const numberedServices: NumberedService[] = [
  {
    number: '01',
    href: '/aggregates',
    image: '/images/slide-09.jpg',
    iconSvg: '<path d="M3 20l5-10 4 5 3-7 6 12H3z"/>',
    title: 'Aggregates & Materials',
    bullets: [
      'Recycled & non-recycled aggregates',
      'Type 1, sand, gravel & scalpings',
      'Collected or delivered',
    ],
  },
  {
    number: '02',
    href: '/asphalt',
    image: '/images/slide-03.jpg',
    iconSvg: '<rect x="3" y="12" width="18" height="7" rx="1"/><circle cx="8" cy="19" r="2"/><circle cx="16" cy="19" r="2"/>',
    title: 'Asphalt & Tarmac',
    bullets: [
      'Plant at the A303/A37 junction',
      'Hot boxes available',
      'Sunday supply available',
    ],
  },
  {
    number: '03',
    href: '/services',
    image: '/images/slide-04.jpg',
    iconSvg: '<path d="M12 3l4 3-4 3M16 6H8a3 3 0 0 0-3 3v2M12 21l-4-3 4-3M8 18h8a3 3 0 0 0 3-3v-2"/>',
    title: 'Waste Disposal & Tipping',
    bullets: [
      'Tipping facilities & muck away',
      'Concrete & soil tipping',
      'Site collection across the South West',
    ],
  },
  {
    number: '04',
    href: '/services',
    image: '/images/slide-04.jpg',
    imagePosition: 'center 30%',
    iconSvg: '<path d="M4 4v16h16M8 16l3-4 3 3 4-6"/>',
    title: 'Crushing & Recycling',
    bullets: [
      'On-site crushing & screening',
      'Waste recycled back into aggregate',
      'Lower cost than primary materials',
    ],
  },
  {
    number: '05',
    href: '/plant-hire',
    image: '/images/slide-01.jpg',
    iconSvg: '<rect x="2" y="11" width="10" height="6" rx="1"/><path d="M12 13h4l3 3v1H12z"/><circle cx="6" cy="19" r="2"/><circle cx="15" cy="19" r="2"/>',
    title: 'Grab & Tipper Hire',
    bullets: [
      'Grab lorries for quick loading',
      'Tipper & 20 tonne lorries',
      'Local, experienced drivers',
    ],
  },
  {
    number: '06',
    href: '/plant-hire',
    image: '/images/slide-05.jpg',
    iconSvg: '<path d="M4 20h6v-6l6-8h4v4l-6 4v6H4z"/>',
    title: 'Excavator Hire & Contracting',
    bullets: [
      '13–20 tonne excavators',
      'Hired alone or with our operators',
      'For jobs of any size',
    ],
  },
];

export type DirectoryGroup = {
  title: string;
  image: string;
  reverse?: boolean;
  linkLabel?: string;
  linkHref?: string;
  items: string[];
};

export const directoryGroups: DirectoryGroup[] = [
  {
    title: 'Aggregates & Materials',
    image: '/images/slide-09.jpg',
    linkLabel: 'Full aggregates page →',
    linkHref: '/aggregates',
    items: [
      'Type 1',
      'Road Planings',
      'Gravel',
      'Scalpings',
      'Clean Stone',
      'Top Soil',
      'Washed Sand',
      'Coarse Sand',
      'Building Sand',
      'Crushed Concrete',
      'Asphalt Products',
    ],
  },
  {
    title: 'Asphalt & Surfacing',
    image: '/images/slide-03.jpg',
    reverse: true,
    linkLabel: 'Full asphalt page →',
    linkHref: '/asphalt',
    items: ['Asphalt / Tarmac Supply', 'Hot Boxes', 'Tarmac & Asphalt on Sundays'],
  },
  {
    title: 'Recycling & Waste Disposal',
    image: '/images/slide-04.jpg',
    items: [
      'Waste Disposal',
      'Tipping Facilities',
      'Muck Away',
      'Concrete Tipping',
      'Soil Tipping',
      'Crushing & Screening',
      'Aggregate Recycling',
    ],
  },
  {
    title: 'Plant Hire & Contracting',
    image: '/images/slide-05.jpg',
    reverse: true,
    linkLabel: 'Full plant hire page →',
    linkHref: '/plant-hire',
    items: ['Grab Lorry Hire', 'Tipper Lorry Hire', '20 Tonne Lorry Hire', '13–20 Tonne Excavator Hire'],
  },
];
