export interface GalleryItem {
  id: string;
  title: string;
  category: 'Team Building' | 'Fun Games' | 'Gathering' | 'Adventure';
  location: string;
  image: string;
  alt: string;
  caption: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Sesi Ice Breaking Penghangat Suasana',
    category: 'Fun Games',
    location: 'Coban Rondo, Pujon - Malang',
    image: '/images/gallery-ice-breaking.jpg',
    alt: 'Puluhan peserta membentuk lingkaran besar saat sesi ice breaking ceria di bawah rimbun pohon pinus',
    caption: 'Tawa ceria peserta saat sesi energizer pagi pembuka kegiatan untuk mencairkan suasana.'
  },
  {
    id: 'gal-2',
    title: 'Simulasi Strategi & Kolaborasi Tim',
    category: 'Team Building',
    location: 'Songgoriti, Kota Wisata Batu',
    image: '/images/gallery-team-strategy.jpg',
    alt: 'Kelompok peserta outbound berdiskusi aktif menyelesaikan tantangan pipa bocor dan transfer bola',
    caption: 'Latihan komunikasi efektif dan kepemimpinan dalam simulasi pemecahan masalah kelompok.'
  },
  {
    id: 'gal-3',
    title: 'Kebersamaan Family Gathering Asri',
    category: 'Gathering',
    location: 'Selecta & Bumiaji, Kota Batu',
    image: '/images/gallery-family-moment.jpg',
    alt: 'Keluarga peserta tersenyum riang mengikuti games estafet balon di atas rumput hijau',
    caption: 'Momen kehangatan keluarga dan relaksasi di tengah sejuknya udara pegunungan Batu.'
  },
  {
    id: 'gal-4',
    title: 'Arung Jeram & Petualangan Air Menantang',
    category: 'Adventure',
    location: 'Sungai Kaliwatu, Bumiaji - Batu',
    image: '/images/gallery-rafting.jpg',
    alt: 'Peserta mengenakan helm dan pelampung mendayung perahu karet menembus jeram sungai yang jernih',
    caption: 'Sensasi seru mendayung perahu karet menyusuri aliran sungai alami Kota Batu dengan aman.'
  },
  {
    id: 'gal-5',
    title: 'Tantangan Trust Fall & Kepercayaan',
    category: 'Team Building',
    location: 'Coban Talun, Bumiaji - Batu',
    image: '/images/gallery-trust-fall.jpg',
    alt: 'Seorang peserta bersiap melakukan tantangan trust fall dengan rekan tim yang sigap menjaga di bawah',
    caption: 'Membangun rasa saling percaya dan empati mendalam antar sesama rekan satu divisi.'
  },
  {
    id: 'gal-6',
    title: 'Foto Kebersamaan Penutup Acara',
    category: 'Gathering',
    location: 'Kawasan Wisata Alam Malang',
    image: '/images/gallery-closing-group.jpg',
    alt: 'Seluruh peserta dan panitia membentangkan banner acara sambil berpose ceria penuh semangat',
    caption: 'Kebanggaan dan kehangatan saat seluruh tantangan hari berhasil dilalui bersama tim.'
  },
  {
    id: 'gal-7',
    title: 'Konvoi Jeep Offroad Lautan Pasir',
    category: 'Adventure',
    location: 'Kawasan TNBTS, Bromo',
    image: '/images/gallery-offroad-bromo.jpg',
    alt: 'Iring-iringan jeep hardtop 4x4 melintasi lautan pasir Bromo saat gathering korporat',
    caption: 'Petualangan eksklusif menembus kabut pasir vulkanik menuju sunrise point Penanjakan.'
  },
  {
    id: 'gal-8',
    title: 'Latihan Kepemimpinan & Karakter Siswa (LDKS)',
    category: 'Team Building',
    location: 'Coban Rondo, Pujon - Malang',
    image: '/images/gallery-ldks-sekolah.jpg',
    alt: 'Siswa-siswi sekolah berbaris disiplin mengikuti simulasi survival dan leadership di hutan pinus',
    caption: 'Pembentukan mental tangguh, disiplin, dan kekompakan pelajar dalam program LDKS alam.'
  },
  {
    id: 'gal-9',
    title: 'Gala Dinner & Malam Keakraban Perusahaan',
    category: 'Gathering',
    location: 'Hotel Jambuluwuk Resort, Kota Batu',
    image: '/images/gallery-resort-gathering.jpg',
    alt: 'Suasana hangat malam awarding dan gala dinner di convention hall resort berbintang',
    caption: 'Penutupan rangkaian outbound dengan malam keakraban santai dan awarding tim terbaik.'
  }
];
