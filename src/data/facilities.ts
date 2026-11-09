export interface FacilityItem {
  id: string;
  title: string;
  location: string;
  category: string;
  status: string;
  description: string;
  features: string[];
  capacity: string;
  suitableFor: string[];
  image: string;
  alt: string;
}

export const facilitiesData: FacilityItem[] = [
  {
    id: 'coban-rondo',
    title: 'Coban Rondo',
    location: 'Pujon, Kab. Malang',
    category: 'Wisata Alam & Pinus',
    status: 'Mitra Terpilih',
    description:
      'Kawasan hutan pinus asri berhawa sejuk dengan lapangan rumput datar yang sangat luas untuk kegiatan outbound massal dan gathering instansi.',
    features: [
      'Ground rumput luas kapasitas hingga 600+ orang',
      'Pendopo aula terbuka, musholla & toilet bersih',
      'Wahana labirin, flying fox & parkir bus lapang'
    ],
    capacity: '50 - 600+ Peserta',
    suitableFor: ['Corporate Gathering', 'Team Building', 'LDKS Sekolah'],
    image: '/images/destination-coban-rondo.webp',
    alt: 'Fasilitas ground outbound dan camping di kawasan wisata alam Coban Rondo Pujon Malang'
  },
  {
    id: 'coban-rais',
    title: 'Coban Rais',
    location: 'Oro-oro Ombo, Kota Batu',
    category: 'Pegunungan & Spot Foto',
    status: 'Mitra Terpilih',
    description:
      'Dataran tinggi lereng Gunung Panderman dengan panorama perbukitan indah, wahana foto modern, dan rute trekking alam yang menyegarkan.',
    features: [
      'Ground bertingkat alami kapasitas 350 orang',
      'Spot Batu Flower Garden & arena fun games',
      'Area camping ground terawat & toilet bersih'
    ],
    capacity: '30 - 350 Peserta',
    suitableFor: ['Fun Games', 'Gathering Komunitas', 'Camping Ceria'],
    image: '/images/destination-coban-rais.webp',
    alt: 'Fasilitas lapangan outbound dan perkemahan di Coban Rais Oro-oro Ombo Kota Batu'
  },
  {
    id: 'coban-putri',
    title: 'Coban Putri',
    location: 'Oro-oro Ombo, Kota Batu',
    category: 'Air Terjun & Offroad',
    status: 'Mitra Terpilih',
    description:
      'Destinasi air terjun bertingkat yang hening dan privat, sangat ideal untuk kombinasi outbound lapangan dengan petualangan Jeep Offroad.',
    features: [
      'Ground tepi aliran sungai kapasitas 250 orang',
      'Titik start & finis lintasan Fun Jeep Offroad',
      'Jembatan bambu ikonik & pendopo teduh'
    ],
    capacity: '30 - 250 Peserta',
    suitableFor: ['Outbound + Offroad', 'Team Building', 'Family Outing'],
    image: '/images/destination-coban-putri.webp',
    alt: 'Fasilitas ground outbound dan lintasan offroad di Coban Putri Kota Batu'
  },
  {
    id: 'coban-talun',
    title: 'Coban Talun',
    location: 'Bumiaji, Kota Batu',
    category: 'Hutan Pinus & Camp',
    status: 'Mitra Terpilih',
    description:
      'Hutan pinus terluas di ketinggian 1.300 mdpl berhawa dingin sejuk dengan multiple ground tematik dan aliran sungai dangkal.',
    features: [
      'Multiple ground terpisah kapasitas 500+ orang',
      'Pondok Apache Camp & glamping tematik unik',
      'Aliran sungai dangkal untuk simulasi games air'
    ],
    capacity: '50 - 500+ Peserta',
    suitableFor: ['Leadership Camp', 'Team Building', 'Glamping Outbound'],
    image: '/images/destination-coban-talun.webp',
    alt: 'Fasilitas area ground outbound dan camping glamping di Coban Talun Bumiaji Batu'
  },
  {
    id: 'payung-pinus',
    title: 'Payung Pinus',
    location: 'Songgoriti, Kota Batu',
    category: 'Gardu Pandang & Gathering',
    status: 'Mitra Terpilih',
    description:
      'Kawasan ketinggian Songgoriti dinaungi pinus rindang berpanorama Kota Batu, sangat pas untuk gathering santai dan keakraban.',
    features: [
      'Ground rumput teduh kapasitas 200 orang',
      'Balkon gardu pandang panorama lembah Batu',
      'Gazebo santai & sentra kuliner hangat khas Batu'
    ],
    capacity: '30 - 200 Peserta',
    suitableFor: ['Fun Games Santai', 'Reuni Komunitas', 'Gathering Senja'],
    image: '/images/destination-payung-pinus.webp',
    alt: 'Fasilitas ground gathering dan pemandangan di kawasan Payung Pinus Songgoriti Batu'
  },
  {
    id: 'kaliwatu-rafting',
    title: 'Kaliwatu Rafting',
    location: 'Bumiaji, Kota Batu',
    category: 'Arung Jeram & Adventure',
    status: 'Mitra Adventure',
    description:
      'Basecamp arung jeram profesional di hulu Sungai Brantas dengan jeram menantang dan aman bagi pemula hingga keluarga.',
    features: [
      'Peralatan rafting safety standar internasional',
      'Puluhan bilik shower bilas & saung makan prasmanan',
      'Ground briefing simulasi darat sebelum masuk air'
    ],
    capacity: '20 - 250 Peserta',
    suitableFor: ['Arung Jeram Rafting', 'Uji Adrenalin', 'Corporate Adventure'],
    image: '/images/destination-kaliwatu-rafting.webp',
    alt: 'Fasilitas basecamp arung jeram dan perlengkapan rafting di Kaliwatu Rafting Kota Batu'
  },
  {
    id: 'gunung-bromo',
    title: 'Gunung Bromo',
    location: 'Kawasan TNBTS, Jawa Timur',
    category: 'Gunung & Jeep 4x4',
    status: 'Kesiapan Terjadwal',
    description:
      'Kaldera vulkanik berkelas dunia untuk corporate outing eksklusif berbasis konvoi Jeep 4x4 melintasi Lautan Pasir dan Savana.',
    features: [
      'Armada Toyota Hardtop 4x4 berlisensi resmi',
      'Ground aktivitas Pasir Berbisik & Bukit Teletubbies',
      'Koordinasi simaksi TNBTS & asuransi resmi'
    ],
    capacity: '20 - 200 Peserta',
    suitableFor: ['Corporate Outing VIP', 'Konvoi Jeep 4x4', 'Sunrise Hunting'],
    image: '/images/destination-gunung-bromo.webp',
    alt: 'Fasilitas armada jeep dan kawasan gathering alam di Gunung Bromo TNBTS Jawa Timur'
  },
  {
    id: 'tumpak-sewu',
    title: 'Air Terjun Tumpak Sewu',
    location: 'Pronojiwo, Perbatasan Malang',
    category: 'Air Terjun & Trekking',
    status: 'Kesiapan Terjadwal',
    description:
      'Air terjun tirai melingkar spektakuler untuk pengalaman ekspedisi alam tangguh, melatih stamina dan kekompakan tim.',
    features: [
      'Viewpoint panorama atas berpagar pengaman kokoh',
      'Pemandu lokal terlatih pendamping rute trekking',
      'Pos transit istirahat teduh, musholla & warung'
    ],
    capacity: '15 - 150 Peserta',
    suitableFor: ['Trekking Ekspedisi', 'Wisata Petualangan', 'Karakter Tangguh'],
    image: '/images/destination-tumpak-sewu.webp',
    alt: 'Fasilitas viewpoint dan jalur trekking di Air Terjun Tumpak Sewu Malang'
  },
  {
    id: 'jambuluwuk-resort',
    title: 'Hotel Jambuluwuk Resort',
    location: 'Songgokerto, Kota Batu',
    category: 'Resort & Convention',
    status: 'Mitra Resort VIP',
    description:
      'Resort bintang 5 terintegrasi dengan villa kayu mewah, convention hall ber-AC, dan lapangan rumput privat khusus outbound rombongan.',
    features: [
      'Lapangan rumput privat kapasitas 400 orang',
      'Ballroom megah ber-AC & sarana meeting pro',
      'Restoran prasmanan bintang 5 & kolam renang'
    ],
    capacity: '30 - 400 Peserta',
    suitableFor: ['Corporate Gathering VIP', 'Raker + Outbound', 'Gala Dinner'],
    image: '/images/destination-jambuluwuk.webp',
    alt: 'Fasilitas lapangan outbound privat dan convention hall di Jambuluwuk Resort Kota Batu'
  }
];
