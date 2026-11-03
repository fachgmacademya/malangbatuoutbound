export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  siteUrl: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappUrl: string;
  defaultWaMessage: string;
  addressSummary: string;
  operatingHours: string;
  areasServed: string[];
  navItems: { label: string; href: string }[];
}

export const siteConfig: SiteConfig = {
  name: 'Malang Batu Outbound',
  shortName: 'MBO',
  tagline: 'Outbound, Gathering & Team Building di Malang dan Batu',
  description:
    'Layanan perencanaan dan fasilitasi kegiatan outbound, team building, corporate gathering, dan outdoor event di wilayah Malang, Kota Batu, dan sekitarnya. Program fleksibel, terarah, dan didampingi fasilitator berpengalaman.',
  siteUrl: 'https://malangbatuoutbound.web.id',
  phoneDisplay: '0822-1122-1909',
  phoneRaw: '6282211221909',
  whatsappUrl: 'https://wa.me/6282211221909',
  defaultWaMessage: 'Halo, saya ingin konsultasi kegiatan outbound di Malang Batu.',
  addressSummary: 'Kawasan Layanan: Kota Malang, Kota Batu, Kabupaten Malang & sekitarnya, Jawa Timur',
  operatingHours: 'Setiap Hari: 08.00 - 21.00 WIB (Konsultasi WhatsApp)',
  areasServed: [
    'Kota Batu (Songgoriti, Bumiaji, Selecta, Coban Talun, Oro-oro Ombo)',
    'Kota Malang (Taman Rekreasi, Area Kampus, Pusat Kota)',
    'Kabupaten Malang (Coban Rondo, Pujon, Kasembon, Dau, Tumpang)'
  ],
  navItems: [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang Kami', href: '/tentang-kami/' },
    { label: 'Paket', href: '/paket/' },
    { label: 'Fasilitas', href: '/fasilitas/' },
    { label: 'Galeri', href: '/galeri/' },
    { label: 'Blog', href: '/blog/' }
  ]
};

export interface PackageDropdownCategory {
  title: string;
  href?: string;
  items: { label: string; href: string }[];
}

export const packageDropdownCategories: PackageDropdownCategory[] = [
  {
    title: 'OUTBOUND PERUSAHAAN',
    href: '/paket/outbound-perusahaan.html',
    items: [
      { label: 'Team Building', href: '/paket/outbound-perusahaan/team-building.html' },
      { label: 'Fun Games', href: '/paket/outbound-perusahaan/fun-games.html' },
      { label: 'Leadership Camp', href: '/paket/outbound-perusahaan/leadership-camp.html' },
      { label: 'Corporate Gathering', href: '/paket/outbound-perusahaan/corporate-gathering.html' }
    ]
  },
  {
    title: 'FAMILY GATHERING',
    href: '/paket/family-gathering.html',
    items: [
      { label: 'Paket Hemat', href: '/paket/family-gathering/paket-hemat.html' },
      { label: 'Paket Standard', href: '/paket/family-gathering/paket-standard.html' },
      { label: 'Paket Premium', href: '/paket/family-gathering/paket-premium.html' },
      { label: 'Paket Custom', href: '/paket/family-gathering/paket-custom.html' }
    ]
  },
  {
    title: 'OUTBOUND SEKOLAH',
    href: '/paket/outbound-sekolah.html',
    items: [
      { label: 'Outbound Pelajar', href: '/paket/outbound-sekolah/outbound-pelajar.html' },
      { label: 'Character Building', href: '/paket/outbound-sekolah/character-building.html' },
      { label: 'LDKS & Leadership', href: '/paket/outbound-sekolah/ldks-leadership.html' },
      { label: 'Edukasi & Alam', href: '/paket/outbound-sekolah/edukasi-alam.html' }
    ]
  },
  {
    title: 'OUTBOUND WISATA',
    href: '/paket/outbound-wisata.html',
    items: [
      { label: 'Outbound + Wisata', href: '/paket/outbound-wisata/outbound-wisata.html' },
      { label: 'Outbound + Rafting', href: '/paket/outbound-wisata/outbound-rafting.html' },
      { label: 'Outbound + Offroad', href: '/paket/outbound-wisata/outbound-offroad.html' },
      { label: 'Outbound + Camping', href: '/paket/outbound-wisata/outbound-camping.html' }
    ]
  }
];

export function getWhatsAppUrl(customMessage?: string): string {
  const msg = customMessage || siteConfig.defaultWaMessage;
  return `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(msg)}`;
}

