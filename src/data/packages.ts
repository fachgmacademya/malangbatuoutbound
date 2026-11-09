export interface SubProgramItem {
  id: string;
  slug: string;
  title: string;
  badge?: string;
  summary: string;
  description: string;
  targetAudience: string;
  duration: string;
  activities: string[];
  benefits: string[];
  includedHighlights: string[];
  whatsappMessage: string;
  image?: string;
  alt?: string;
}

export interface PackageItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  badge?: string;
  summary: string;
  targetAudience: string;
  activities: string[];
  programs: SubProgramItem[];
  duration: string;
  includedHighlights: string[];
  excludedHighlights?: string[];
  recommendedVenues?: string[];
  image: string;
  alt: string;
  whatsappMessage: string;
  detailUrl: string;
}

// 4 Paket Utama Katalog & Halaman Detail (/paket/ & /paket/[slug].html)
export const catalogPackages: PackageItem[] = [
  {
    id: 'outbound-perusahaan',
    slug: 'outbound-perusahaan',
    detailUrl: '/paket/outbound-perusahaan.html',
    title: 'Outbound Perusahaan',
    category: 'Corporate, BUMN & Instansi',
    badge: 'Paling Diminati Perusahaan',
    summary:
      'Program simulasi dinamika kelompok dan experiential learning terstruktur untuk membangun kekompakan tim, sinergi lintas divisi, kepemimpinan, dan etos kerja produktif di alam terbuka Malang Batu.',
    targetAudience: 'Karyawan perusahaan swasta, BUMN, instansi pemerintah, manajemen, dan divisi operasional.',
    duration: '1 Hari (Full Day) / 2 Hari 1 Malam',
    includedHighlights: [
      'Master Fasilitator & Trainer Outbound Berpengalaman',
      'Peralatan Game & Simulasi Lengkap Standar Safety',
      'Sound System Lapangan Outdoor & Area Ground Outbound',
      'Tim Medis Siaga P3K & Standard Operating Procedure (SOP)',
      'Air Mineral Selama Kegiatan Berlangsung',
      'Banner Selamat Datang Rombongan Perusahaan'
    ],
    excludedHighlights: [
      'Transportasi bus rombongan menuju venue (tersedia opsi add-on)',
      'Biaya penginapan hotel/resort (tersedia pada paket menginap 2D1N)',
      'Pengeluaran pribadi peserta di luar fasilitas resmi'
    ],
    recommendedVenues: [
      'Coban Rondo Green Ground (Pujon)',
      'Hotel Jambuluwuk Resort & Convention (Batu)',
      'Kawasan Wisata Songgoriti & Selecta (Batu)',
      'Coban Talun Pine Ground (Bumiaji)'
    ],
    image: '/images/package-outbound-perusahaan.webp',
    alt: 'Kegiatan Outbound Perusahaan simulasi team building kelompok di lapangan hijau terbuka Kota Batu',
    whatsappMessage: 'Halo, saya ingin menanyakan paket Outbound Perusahaan di Malang Batu.',
    activities: [
      'Ice Breaking & Dinamika Kelompok (Group Dynamic)',
      'Trust Building & Effective Communication Challenges',
      'Problem Solving Challenge & Strategic Collaboration Game',
      'Synergy Project: Menggabungkan Kekuatan Antar Tim',
      'Final Project: Komitmen Bersama & Evaluasi Reflektif'
    ],
    programs: [
      {
        id: 'team-building',
        slug: 'team-building',
        title: 'Team Building',
        badge: 'Modul Sinergi Utama',
        summary:
          'Simulasi dinamika kelompok intensif yang menitikberatkan pada perkuatan kerja sama, koordinasi lintas fungsi, dan penyelesaian masalah secara kolektif.',
        description:
          'Program Team Building dirancang khusus untuk memecah silo antar departemen perusahaan. Melalui rangkaian tantangan terstruktur di alam terbuka pegunungan Batu Malang, peserta diajak menyadari peran penting setiap individu dalam keberhasilan tim, merumuskan strategi bersama, dan meningkatkan komunikasi dua arah yang konstruktif.',
        targetAudience: 'Manajemen, staf divisi kerja, tim proyek, dan unit operasional lintas bidang.',
        duration: '1 Hari Penuh (08.00 - 16.00 WIB) atau Sesi Setengah Hari',
        activities: [
          'Ice Breaking & Grouping Dinamis (Pencairan Sekat Antar Departemen)',
          'Communication Blind Walk & Listening Challenge (Komunikasi Efektif)',
          'Strategic Bridge Building & Resource Management (Manajemen Sumber Daya)',
          'High Synergy Giant Rope Challenge (Refleksi Kekuatan Bersama)',
          'Debriefing Terarah: Menarik Relevansi Pelajaran ke Lingkungan Kerja'
        ],
        benefits: [
          'Mempererat rasa saling percaya antar rekan kerja lintas unit',
          'Mereduksi hambatan komunikasi dan miskomunikasi internal',
          'Meningkatkan efisiensi kerja tim dalam menyelesaikan target perusahaan'
        ],
        includedHighlights: [
          'Fasilitator & Master Game Bersertifikasi BNSP',
          'Peralatan simulasi kelompok berstandar keamanan tinggi',
          'Ground outbound berumput luas dengan udara sejuk',
          'Sound system outdoor, P3K lapangan, dan air mineral berkala'
        ],
        whatsappMessage: 'Halo, saya ingin menanyakan detail Program Team Building Perusahaan di Malang Batu.'
      },
      {
        id: 'fun-games',
        slug: 'fun-games',
        title: 'Fun Games',
        badge: 'Penyegar Suasana',
        summary:
          'Rangkaian permainan rekreasi ceria tanpa beban fisik berlebih, cocok untuk melepas penat dan membangun kegembiraan bersama rekan kantor.',
        description:
          'Fun Games mengutamakan unsur hiburan, tawa bersama, dan keakraban santai. Modul ini sangat ideal bagi rombongan instansi yang menginginkan refreshing dari rutinitas kantor tanpa kompetisi fisik berat. Dipandu oleh pemandu acara yang humoris dan komunikatif di udara sejuk Malang Batu.',
        targetAudience: 'Seluruh karyawan perusahaan, staf pendukung, keluarga karyawan, dan instansi umum.',
        duration: 'Half Day (3 - 4 Jam) / Sesi Pagi atau Siang',
        activities: [
          'Energizer Games & Senam Tawa Pembuka',
          'Grouping Interaktif & Yel-Yel Kocak Kelompok',
          'Estafet Ketangkasan Ringan (Hula Hoop, Ball Transfer, Water Relay)',
          'Games Tebak Kata & Sinkronisasi Gerak Spontan',
          'Momen Puncak: Foto Bersama Pose Ceria Rombongan'
        ],
        benefits: [
          'Melepaskan penat dan stres dari ritme kerja harian',
          'Menghadirkan suasana kerja yang lebih hangat dan akrab',
          'Membangkitkan kembali antusiasme serta energi positif tim'
        ],
        includedHighlights: [
          'Master of Ceremony (MC) / Game Master energik',
          'Properti permainan lengkap dan aman',
          'Audio sound system lapangan berdaya jernih',
          'Tim pendamping ramah dan dokumentasi momen ceria'
        ],
        whatsappMessage: 'Halo, saya ingin menanyakan detail Program Fun Games Perusahaan di Malang Batu.'
      },
      {
        id: 'leadership-camp',
        slug: 'leadership-camp',
        title: 'Leadership Camp',
        badge: 'Pengembangan Kepemimpinan',
        summary:
          'Pelatihan kepemimpinan berbasis experiential learning untuk mengasah inisiatif, delegasi tugas, pengambilan keputusan cepat, dan ketahanan mental.',
        description:
          'Leadership Camp memposisikan peserta pada situasi dinamis dan penuh tantangan di alam terbuka. Program ini menuntut keberanian mengambil keputusan di bawah tekanan waktu, kemampuan mendelegasikan wewenang, dan kepedulian terhadap anggota tim. Dilengkapi sesi evaluasi mendalam oleh fasilitator berpengalaman.',
        targetAudience: 'Supervisor, Manager, Management Trainee (MT), calon pemimpin instansi, dan kepala bagian.',
        duration: '1 Hari Penuh atau Paket Menginap 2 Hari 1 Malam (Camp/Resort)',
        activities: [
          'Leadership Diagnostic & Goal Setting Orientation',
          'Crisis Management & Decision Under Uncertainty Challenge',
          'Navigasi Lapangan & Team Accountability Trek',
          'Simulasi Negosiasi & Alokasi Sumber Daya Kritis',
          'Night Reflection Session (Khusus Paket Menginap) & Action Plan Commitment'
        ],
        benefits: [
          'Mengasah kepekaan situasional dan ketegasan dalam mengambil keputusan',
          'Melatih teknik delegasi tugas yang terukur dan berorientasi hasil',
          'Membentuk mentalitas pemimpin yang adaptif terhadap perubahan'
        ],
        includedHighlights: [
          'Trainer & Coach Kepemimpinan berpengalaman mendampingi korporat',
          'Modul evaluasi kepemimpinan dan lembar kerja refleksi',
          'Lokasi ground/camping ground privat yang kondusif',
          'Peralatan keselamatan lapangan dan pendampingan tim medis siaga'
        ],
        whatsappMessage: 'Halo, saya ingin menanyakan detail Program Leadership Camp Perusahaan di Malang Batu.'
      },
      {
        id: 'corporate-gathering',
        slug: 'corporate-gathering',
        title: 'Corporate Gathering',
        badge: 'Perayaan & Apresiasi',
        summary:
          'Perpaduan acara kebersamaan tahunan, apresiasi pencapaian instansi, rekreasi alam, dan hiburan panggung yang mengikat solidaritas keluarga besar kantor.',
        description:
          'Corporate Gathering dirancang sebagai momen apresiasi tahunan dari manajemen kepada seluruh jajaran karyawan. Acara menggabungkan sesi fun gathering di luar ruangan dengan agenda seremonial, pembagian doorprize, sajian kuliner lezat, dan panggung hiburan interaktif berlatar panorama alam pegunungan Kota Batu.',
        targetAudience: 'Seluruh divisi kantor, dewan direksi, mitra kerja, dan rombongan keluarga karyawan.',
        duration: '1 Hari Santai (09.00 - 15.00 WIB) atau Paket Menginap Resort 2D1N',
        activities: [
          'Penyambutan Hangat & Welcome Drink Segar',
          'Sesi Kebersamaan Ceria & Fun Gathering Terarah',
          'Panggung Apresiasi Perusahaan & Penghargaan Karyawan',
          'Hiburan Musik Live / Akustik & Doorprize Interaktif',
          'Santap Bersama Prasmanan Khas Nusantara & Waktu Eksplorasi Venue'
        ],
        benefits: [
          'Memperkuat loyalitas dan rasa memiliki (sense of belonging) karyawan',
          'Merayakan pencapaian target perusahaan dalam suasana membahagiakan',
          'Menjalin silaturahmi yang setara antara pimpinan dan staf'
        ],
        includedHighlights: [
          'Manajemen alur acara terpadu oleh tim event organizer profesional',
          'Venue resort atau taman alam yang representatif dan nyaman',
          'Sound system panggung, panggung hiburan, dan dekorasi sambutan',
          'Dukungan koordinasi katering makan siang dan snack rehat'
        ],
        whatsappMessage: 'Halo, saya ingin menanyakan detail Program Corporate Gathering di Malang Batu.'
      }
    ]
  },
  {
    id: 'family-gathering',
    slug: 'family-gathering',
    detailUrl: '/paket/family-gathering.html',
    title: 'Family Gathering',
    category: 'Keluarga, Alumni & Komunitas',
    badge: 'Ramah Segala Usia',
    summary:
      'Aktivitas luar ruang yang hangat, menyenangkan, dan ramah untuk segala rentang usia (anak-anak hingga lansia). Menghadirkan keakraban keluarga, silaturahmi komunitas, dan rekreasi alam yang berkesan.',
    targetAudience: 'Keluarga besar karyawan, paguyuban, alumni sekolah/kampus, dan komunitas hobi.',
    duration: 'Half Day (3 - 4 Jam) / Full Day (5 - 7 Jam)',
    includedHighlights: [
      'Master Game / Pemandu Ramah Anak & Seluruh Anggota Keluarga',
      'Perlengkapan Permainan Rekreatif yang Aman & Edukatif',
      'Sound System Outdoor & Venue Nyaman Ramah Lansia & Anak',
      'Area Ground Bersih dengan Akses Sanitasi Memadai',
      'P3K Standar & Dokumentasi Foto Momen Kebersamaan',
      'Dukungan Pengaturan Konsumsi & Area Santap Siang'
    ],
    excludedHighlights: [
      'Hadiah doorprize utama (dapat dikoordinasikan panitia)',
      'Kendaraan pribadi rombongan (tersedia rental shuttle/bus)',
      'Wahana berbayar mandiri di luar tiket masuk venue utama'
    ],
    recommendedVenues: [
      'Taman Rekreasi Selecta (Batu)',
      'Kawasan Pinus Coban Rais (Batu)',
      'Payung Pinus & Pujon Kidul Agro Wisata',
      'Area Rekreasi Lembah Songgoriti'
    ],
    image: '/images/package-family-gathering.webp',
    alt: 'Suasana kebersamaan Family Gathering di tengah alam pegunungan Kota Batu Malang',
    whatsappMessage: 'Halo, saya ingin menanyakan paket Family Gathering di Malang Batu.',
    activities: [
      'Family Bonding Games & Interaksi Orang Tua - Anak',
      'Ice Breaking Ringan Penuh Tawa (Bebas Beban Fisik Berat)',
      'Fun Relay Games & Kuis Kompak Antar Keluarga',
      'Panggung Gembira Kebersamaan & Door Prize Session',
      'Sesi Foto Bersama di Latar Pemandangan Alam Pegunungan'
    ],
    programs: [
      {
        id: 'paket-hemat',
        slug: 'paket-hemat',
        title: 'Paket Hemat',
        badge: 'Ekonomis & Ringkas',
        summary:
          'Pilihan gathering keluarga berbiaya hemat dan efisien, berdurasi setengah hari dengan fokus murni pada keceriaan permainan keakraban.',
        description:
          'Paket Hemat Family Gathering disusun untuk komunitas atau instansi dengan alokasi anggaran efisien namun tetap menginginkan kegiatan outdoor berbobot. Program berdurasi 3-4 jam diisi permainan ice breaking ceria dan rekreasi ringan di lapangan rumput asri Kota Batu.',
        targetAudience: 'Paguyuban warga, arisan keluarga besar, komunitas hobi, dan panitia gathering beranggaran terbatas.',
        duration: 'Half Day (3 - 4 Jam) / Sesi Pagi',
        activities: [
          'Ice Breaking Santai & Pemanasan Ceria Lintas Generasi',
          'Permainan Balon Kebersamaan & Estafet Tali Kasih',
          'Kuis Kompak Pasangan & Anak-Orang Tua',
          'Sesi Tukar Kado / Pembagian Hadiah Internal',
          'Foto Bersama Rombongan Berlatar Hutan Pinus'
        ],
        benefits: [
          'Biaya per orang yang sangat terjangkau tanpa mengurangi kualitas panduan',
          'Waktu kegiatan fleksibel sehingga rombongan memiliki sisa waktu untuk wisata mandiri',
          'Fasilitasi permainan yang ramah anak kecil dan lansia'
        ],
        includedHighlights: [
          'Pemandu game yang sabar dan menghibur rombongan',
          'Peralatan game ramah keluarga dan sound system portabel',
          'Izin sewa ground outbound dan air mineral kemasan',
          'Kotak P3K standar'
        ],
        whatsappMessage: 'Halo, saya ingin menanyakan detail Paket Hemat Family Gathering di Malang Batu.'
      },
      {
        id: 'paket-standard',
        slug: 'paket-standard',
        title: 'Paket Standard',
        badge: 'Pilihan Terpopuler',
        summary:
          'Program gathering keluarga lengkap satu hari dengan variasi permainan bonding keluarga, sound system memadai, dan fasilitas santap siang.',
        description:
          'Paket Standard merupakan pilihan paling diminati rombongan keluarga karyawan. Menyajikan kombinasi ideal antara permainan pembangun kelekatan keluarga di pagi hari, makan siang bersama menu khas Batu Malang, serta waktu santai menikmati fasilitas taman wisata alam.',
        targetAudience: 'Keluarga karyawan perusahaan, reuni akbar alumni, dan paguyuban keluarga besar.',
        duration: '1 Hari Penuh (08.30 - 15.00 WIB)',
        activities: [
          'Welcome Energizer & Senam Pagi Ceria Keluarga',
          'Family Cooperative Challenges (Membangun Kerja Sama Orang Tua - Anak)',
          'Lomba Ketangkasan Lucu Berhadiah (Fun Games All Ages)',
          'Makan Siang Bersama Prasmanan Khas Pedesaan',
          'Acara Bebas Eksplorasi Wahana & Spot Foto Indah'
        ],
        benefits: [
          'Jadwal acara tertata rapi dari kedatangan hingga penutupan',
          'Konsumsi makan siang prasmanan sudah terkoordinasi dengan baik',
          'Memberikan waktu istirahat dan interaksi sosial yang seimbang bagi peserta'
        ],
        includedHighlights: [
          'Fasilitator & MC Family Gathering komunikatif',
          'Tiket masuk kawasan wisata & sewa area ground outbound privat',
          'Konsumsi makan siang prasmanan & snack rehat pagi',
          'Sound system outdoor, dokumentasi foto, dan spanduk backdrop acara'
        ],
        whatsappMessage: 'Halo, saya ingin menanyakan detail Paket Standard Family Gathering di Malang Batu.'
      },
      {
        id: 'paket-premium',
        slug: 'paket-premium',
        title: 'Paket Premium',
        badge: 'Fasilitas Eksklusif',
        summary:
          'Pengalaman gathering keluarga istimewa dengan venue resort berbintang, menu kuliner spesial, live music akustik, dan dokumentasi video cinematik.',
        description:
          'Paket Premium menyajikan kenyamanan level tinggi untuk instansi atau keluarga besar yang mengutamakan privasi dan fasilitas prima. Berlokasi di resort terpilih di Kota Batu dengan hall indoor dan taman outdoor terawat, diiringi alunan musik live dan sajian kuliner istimewa.',
        targetAudience: 'Eksekutif perusahaan, keluarga direksi, reuni akbar silver/emas, dan komunitas eksklusif.',
        duration: '1 Hari Eksklusif (Full Day) atau Paket Staycation Menginap 2D1N',
        activities: [
          'Penyambutan VIP dengan Refreshment & Live Gamelan / Akustik',
          'Sesi Permainan Interaktif Eksklusif di Taman Privat',
          'Kids Activity Corner khusus anak-anak dengan pemandu terpisah',
          'Santap Siang Buffet Premium Hotel / Resort Bintang 4',
          'Panggung Hiburan Keluarga, Doorprize Show & Penyerahan Kenang-kenangan'
        ],
        benefits: [
          'Kenyamanan maksimal untuk seluruh usia dengan aksesibilitas ramah lansia & stroller',
          'Privasi tinggi tanpa terganggu pengunjung umum di area umum',
          'Hasil dokumentasi video sinematik berkualitas tinggi siap arsip'
        ],
        includedHighlights: [
          'Area privat hotel / resort bintang di Kota Batu (Jambuluwuk / setara)',
          'Katering buffet premium & coffee break dua kali',
          'Panggung hiburan lengkap dengan sound profesional dan pengiring musik',
          'Fotografer & videografer profesional (termasuk klip reel / highlight video)'
        ],
        whatsappMessage: 'Halo, saya ingin menanyakan detail Paket Premium Family Gathering di Malang Batu.'
      },
      {
        id: 'paket-custom',
        slug: 'paket-custom',
        title: 'Paket Custom',
        badge: 'Fleksibel Sepenuhnya',
        summary:
          'Konsep gathering keluarga yang dirancang bebas menyesuaikan kebutuhan khusus, penambahan wahana wisata, durasi menginap, dan preferensi menu.',
        description:
          'Bila rombongan Anda memiliki rancangan acara unik, tema khusus, atau ingin menggabungkan family gathering dengan kunjungan ke destinasi wisata petik apel, museum angkut, atau glamping, tim kami siap menyusun penawaran yang dipersonalisasi sepenuhnya.',
        targetAudience: 'Instansi dengan rancangan tema spesifik, rombongan lintas kota, dan komunitas khusus.',
        duration: 'Disesuaikan dengan jadwal rombongan (Half Day / Full Day / Multi-Day)',
        activities: [
          'Konsultasi alur acara dan penyesuaian tema keluarga',
          'Pilihan kombinasi outbound dengan wisata petik buah atau wahana tematik',
          'Pengaturan opsi transportasi bus pariwisata atau akomodasi villa besar',
          'Sesi kebersamaan kustom (barbeque party, api unggun malam, dsb.)'
        ],
        benefits: [
          'Setiap komponen acara disusun sesuai plafon anggaran yang ditetapkan',
          'Bebas menentukan lokasi venue ground di seluruh penjuru Malang & Batu',
          'Pendampingan event koordinator dari tahap perencanaan hingga selesai'
        ],
        includedHighlights: [
          'Proposal penawaran resmi transparan dan fleksibel',
          'Dedicated Event Manager yang mengawal dari persiapan hingga hari-H',
          'Pilihan penyesuaian fasilitas (katering, akomodasi, transportasi, souvenir)'
        ],
        whatsappMessage: 'Halo, saya ingin konsultasi Paket Custom Family Gathering di Malang Batu.'
      }
    ]
  },
  {
    id: 'outbound-sekolah',
    slug: 'outbound-sekolah',
    detailUrl: '/paket/outbound-sekolah.html',
    title: 'Outbound Sekolah',
    category: 'Edukasi, Pelajar & Mahasiswa',
    badge: 'Pendidikan Karakter & Kepemimpinan',
    summary:
      'Program edukasi alam terbuka dan experiential training yang dirancang khusus untuk melatih kemandirian, kedisiplinan, kepemimpinan siswa (LDKS), serta rasa empati dan kerja sama antar rekan sebaya.',
    targetAudience: 'Siswa SD, SMP, SMA/SMK, pengurus OSIS/MPK, santri pondok pesantren, dan mahasiswa.',
    duration: '1 Hari (Pagi hingga Sore) / Paket Kemah 2D1N',
    includedHighlights: [
      'Fasilitator Berpengalaman & Menguasai Karakter Psikologi Remaja',
      'Peralatan Game Standar Keamanan Tinggi & Terawat',
      'Area Ground Khusus Pelajar yang Aman & Terpantau Penuh',
      'Briefing Keselamatan Ekstra & Tim Medis P3K Siaga',
      'Air Mineral Kemasan Selama Kegiatan',
      'Sertifikat Partisipasi Outbound Sekolah (Berdasarkan Permintaan)'
    ],
    excludedHighlights: [
      'Transportasi armada jemputan sekolah ke venue',
      'Tenda perkemahan (hanya opsional untuk paket camp 2D1N)',
      'Makan snack tambahan di luar paket yang disepakati'
    ],
    recommendedVenues: [
      'Coban Talun Pine Forest (Bumiaji, Batu)',
      'Coban Putri Outbound Field (Batu)',
      'Kawasan Hutan Pinus Coban Rondo (Pujon)',
      'Bumi Perkemahan Bedengan (Dau, Malang)'
    ],
    image: '/images/package-outbound-sekolah.webp',
    alt: 'Siswa sekolah mengikuti kegiatan Outbound Edukatif dan LDKS kepemimpinan di alam terbuka',
    whatsappMessage: 'Halo, saya ingin menanyakan paket Outbound Sekolah di Malang Batu.',
    activities: [
      'Pembentukan Karakter & Disiplin Barisan Ceria',
      'Simulasi Kepemimpinan Lapangan & Problem Solving Kelompok',
      'Tantangan Ketangkasan Alam Terbuka & Ketelitian Regu',
      'Edukasi Konservasi Alam, Flora, & Pengenalan Ekosistem',
      'Debriefing Pembelajaran Nilai Moral, Kejujuran & Tanggung Jawab'
    ],
    programs: [
      {
        id: 'outbound-pelajar',
        slug: 'outbound-pelajar',
        title: 'Outbound Pelajar',
        badge: 'Ceria & Kompak',
        summary:
          'Kegiatan outdoor edukatif penuh keceriaan untuk melatih kekompakan kelas, sportivitas, dan interaksi positif siswa di luar ruang kelas formal.',
        description:
          'Program Outbound Pelajar dirancang untuk menyegarkan suasana belajar siswa sekolah. Berisi aktivitas permainan berkelompok yang memicu gelak tawa sekaligus memupuk rasa saling menghargai antarteman. Cocok untuk kegiatan jeda semester, class meeting outdoor, atau perpisahan angkatan.',
        targetAudience: 'Siswa jenjang SD tingkat atas, SMP, dan SMA/SMK sederajat.',
        duration: '1 Hari (08.00 - 13.30 WIB)',
        activities: [
          'Ice Breaking Pelajar & Yel-Yel Semangat Kelas',
          'Permainan Sinergi Bola Estafet & Pipa Bocor Seru',
          'Tantangan Matras Terbang & Kompak Melangkah',
          'Kompetisi Ceria Antar Kelas dengan Hadiah Edukatif',
          'Sesi Refleksi Persahabatan & Menghargai Keragaman Teman'
        ],
        benefits: [
          'Meredam potensi perundungan (anti-bullying) lewat pembauran kelompok',
          'Meningkatkan rasa percaya diri siswa yang cenderung pendiam',
          'Memberikan pengalaman belajar di alam yang menyegarkan fisik dan pikiran'
        ],
        includedHighlights: [
          'Instruktur ramah remaja dengan pendekatan psikologis positif',
          'Peralatan permainan aman dan bebas bahaya fisik',
          'Area ground luas terlindung rindangnya pohon pinus',
          'Kotak P3K lapangan lengkap dan air mineral konsumsi'
        ],
        whatsappMessage: 'Halo, saya ingin menanyakan detail Program Outbound Pelajar di Malang Batu.'
      },
      {
        id: 'character-building',
        slug: 'character-building',
        title: 'Character Building',
        badge: 'Pembentukan Akhlak & Mental',
        summary:
          'Pelatihan pembentukan karakter tangguh, penanaman integritas, kedisiplinan, dan tanggung jawab moral bagi generasi muda.',
        description:
          'Melalui simulasi experiential education, Character Building mengajak siswa meresapi nilai-nilai kejujuran, kegigihan, empati, dan pantang menyerah saat menghadapi rintangan. Dipandu fasilitator yang mengombinasikan ketegasan instruksi dengan kehangatan edukator.',
        targetAudience: 'Siswa baru masa orientasi (MPLS), siswa kelas tingkat akhir, santri pesantren, dan mahasiswa baru.',
        duration: '1 Hari Penuh atau 2 Hari 1 Malam (Include Sesi Malam)',
        activities: [
          'Disiplin Baris Berbaris Ceria & Tata Tertib Kelompok',
          'Tantangan Blind Trust Walk (Menumbuhkan Kejujuran & Kepercayaan)',
          'Simulasi Survival Team Challenge (Pantang Menyerah Mengatasi Masalah)',
          'Eksplorasi Empati & Gotong Royong Tanpa Pamrih',
          'Sesi Debriefing Mendalam: Komitmen Menjadi Pelajar Berakhlak Mulia'
        ],
        benefits: [
          'Menumbuhkan rasa tanggung jawab atas tindakan dan tugas pribadi',
          'Memperkuat ketahanan mental siswa menghadapi tekanan akademik',
          'Membangun respek dan tata krama yang baik terhadap guru serta orang tua'
        ],
        includedHighlights: [
          'Trainer Character Building tersertifikasi dan berjiwa pendidik',
          'Modul pengamatan karakter siswa untuk dilaporkan ke pihak sekolah',
          'Peralatan simulasi berstandar keselamatan tinggi',
          'Sertifikat kelulusan program Character Building untuk setiap siswa'
        ],
        whatsappMessage: 'Halo, saya ingin menanyakan detail Program Character Building Sekolah di Malang Batu.'
      },
      {
        id: 'ldks-leadership',
        slug: 'ldks-leadership',
        title: 'LDKS & Leadership',
        badge: 'Kader Pemimpin Muda',
        summary:
          'Latihan Dasar Kepemimpinan Siswa (LDKS) formal dan praktikal untuk membekali pengurus OSIS, MPK, dan pramuka dengan kecakapan manajerial.',
        description:
          'Program LDKS & Leadership dirancang sebagai kawah candradimuka pengurus organisasi intra sekolah. Materi mencakup dasar-dasar kepemimpinan, manajemen rapat dan koordinasi acara, penyusunan strategi pemecahan masalah, hingga simulasi krisis lapangan yang menguji ketenangan calon pemimpin.',
        targetAudience: 'Pengurus OSIS, MPK, Pramuka, Palang Merah Remaja (PMR), dan ketua ekstrakurikuler sekolah.',
        duration: '2 Hari 1 Malam (Direkomendasikan) atau 1 Hari Penuh Intensif',
        activities: [
          'Orientasi Kepemimpinan & Manajemen Waktu Organisasi',
          'Simulasi Perancangan Program Kerja Lapangan',
          'Tantangan Jalur Komando & Pemecahan Masalah Kritis',
          'Simulasi Sidang & Manajemen Dinamika Konflik Antar Seksi',
          'Upacara Pengukuhan Kepemimpinan & Ikrar Sumpah Jabatan'
        ],
        benefits: [
          'Siswa siap mengelola roda organisasi sekolah secara mandiri dan efektif',
          'Meningkatkan kecakapan berbicara di depan umum (public speaking)',
          'Menanamkan loyalitas dan tanggung jawab terhadap amanah kepemimpinan'
        ],
        includedHighlights: [
          'Instruktur berpengalaman melatih kepemimpinan pelajar & mahasiswa',
          'Materi handout panduan kepemimpinan dan lembar kerja simulasi',
          'Area perkemahan / barak / wisma retreat yang representatif di Batu',
          'Pendampingan keamanan siaga 24 jam selama kegiatan berlangsung'
        ],
        whatsappMessage: 'Halo, saya ingin menanyakan detail Program LDKS & Leadership Sekolah di Malang Batu.'
      },
      {
        id: 'edukasi-alam',
        slug: 'edukasi-alam',
        title: 'Edukasi & Alam',
        badge: 'Cinta Lingkungan Hidup',
        summary:
          'Penjelajahan alam terbuka ramah anak untuk mengenalkan keanekaragaman hayati, ekosistem hutan pinus, dan aksi nyata pelestarian alam.',
        description:
          'Program Edukasi & Alam mengajak siswa belajar langsung dari laboratorium alam terbuka Malang Raya. Di bawah naungan pohon pinus dan aliran sungai jernih, siswa diajak mengamati flora fauna lokal, memahami siklus air pegunungan, serta melakukan aksi penanaman pohon atau pembersihan sampah lingkungan.',
        targetAudience: 'Siswa SD seluruh jenjang, SMP, komunitas pencinta alam cilik, dan sanggar belajar.',
        duration: '1 Hari (08.30 - 14.00 WIB)',
        activities: [
          'Trekking Ringan Menyusuri Jalur Hutan Pinus Berpemandu',
          'Observasi Flora Hutan & Pengenalan Tanaman Herbal Lokal',
          'Simulasi Filtrasi Air Alami & Menjaga Sumber Mata Air',
          'Aksi Bersih Hutan Cilik & Praktik Memilah Sampah Organik/Anorganik',
          'Games Edukasi Lingkungan Hidup & Menggambar Alam Sekitar'
        ],
        benefits: [
          'Menumbuhkan rasa cinta dan kepedulian mendalam terhadap bumi sejak dini',
          'Mengurangi ketergantungan gawai (gadget detox) melalui kontak langsung dengan alam',
          'Melatih kepekaan pancaindra anak di udara pegunungan yang bersih dan segar'
        ],
        includedHighlights: [
          'Pemandu edukasi alam yang komunikatif dan ramah anak-anak',
          'Bibit pohon / tanaman untuk sesi edukasi tanam bersama',
          'Buku saku panduan flora dan lembar mewarnai alam',
          'Tiket masuk kawasan konservasi hutan & air mineral rombongan'
        ],
        whatsappMessage: 'Halo, saya ingin menanyakan detail Program Edukasi & Alam Sekolah di Malang Batu.'
      }
    ]
  },
  {
    id: 'outbound-wisata',
    slug: 'outbound-wisata',
    detailUrl: '/paket/outbound-wisata.html',
    title: 'Outbound Wisata',
    category: 'Wisata Alam, Petualangan & Adrenalin',
    badge: 'Kombinasi Petualangan & Wisata',
    summary:
      'Perpaduan sempurna antara simulasi fun outbound dengan petualangan alam seru seperti arung jeram (rafting), offroad jeep 4x4, camping alam bebas, serta kunjungan ke destinasi wisata ikonik Malang Batu.',
    targetAudience: 'Komunitas adventure, instansi dinamis, keluarga berjiwa petualang, dan rombongan refreshing.',
    duration: '1 Hari Penuh (Full Day) / 2 Hari 1 Malam',
    includedHighlights: [
      'Peralatan Petualangan Lengkap Standar Internasional',
      'Guide & Rescue Team Profesional Bersertifikasi Khusus',
      'Asuransi Aktivitas Petualangan & Tiket Masuk Wisata',
      'Transportasi Shuttle / Jeep Lokal Selama Rute Petualangan',
      'Bilas Nyaman, Air Mineral & Sajian Makan Khas Pedesaan',
      'Dokumentasi Aksi Seru Petualangan & Video Cuplikan'
    ],
    excludedHighlights: [
      'Pakaian ganti & kebutuhan pribadi peserta',
      'Dokumentasi drone udara premium (tersedia opsi add-on)',
      'Pengeluaran belanja oleh-oleh pribadi'
    ],
    recommendedVenues: [
      'Kaliwatu Rafting & Coban Rondo (Batu & Pujon)',
      'Kasembon Rafting Adventure (Kabupaten Malang)',
      'Jalur Offroad Coban Talun & Bumiaji Pinus',
      'Ekspedisi Sunrise Bromo Tengger Semeru'
    ],
    image: '/images/package-outbound-wisata.webp',
    alt: 'Kegiatan Outbound Wisata petualangan rafting dan offroad jeep di alam terbuka Malang Batu',
    whatsappMessage: 'Halo, saya ingin menanyakan paket Outbound Wisata di Malang Batu.',
    activities: [
      'Pemanasan Ice Breaking & Fun Team Games di Ground',
      'Arung Jeram Rafting Sungai Kasembon / Kaliwatu Rafting',
      'Offroad Jeep Melintasi Jalur Hutan Pinus & Perkebunan',
      'Eksplorasi Keindahan Air Terjun (Coban Rondo / Tumpak Sewu)',
      'Api Unggun Malam & Barbeque Party (Opsi Camping/Menginap)'
    ],
    programs: [
      {
        id: 'outbound-wisata',
        slug: 'outbound-wisata',
        title: 'Outbound + Wisata',
        badge: 'Kombinasi Wisata Terpadu',
        summary:
          'Paket terintegrasi yang memadukan sesi fun outbound team building di pagi hari dilanjutkan kunjungan rekreasi ke spot destinasi wisata unggulan Kota Batu.',
        description:
          'Outbound + Wisata menjadi solusi bagi rombongan yang ingin mendapatkan manfaat pelatihan kebersamaan tim sekaligus menikmati waktu rekreasi santai di objek wisata populer Kota Batu (seperti Flora Wisata San Terra, Coban Rondo Labyrinth, atau Jatim Park).',
        targetAudience: 'Rombongan instansi luar kota, rombongan keluarga besar, dan reuni yang ingin berwisata santai.',
        duration: '1 Hari Penuh (08.00 - 17.00 WIB)',
        activities: [
          'Sesi Fun Outbound & Ice Breaking di Ground Alam Sejuk (Pagi)',
          'Makan Siang Bersama Menu Khas Pegunungan di Saung Alam',
          'Perjalanan Rombongan Menuju Destinasi Wisata Pilihan',
          'Waktu Bebas Eksplorasi Wahana & Berburu Foto Estetik',
          'Belanja Oleh-Oleh Khas Batu Malang & Penutupan Acara'
        ],
        benefits: [
          'Efisiensi waktu: dua agenda (outbound & wisata) selesai dalam satu hari',
          'Seluruh tiket masuk dan perizinan telah disiapkan tanpa perlu antre',
          'Peserta merasakan kekompakan tim sekaligus kegembiraan berwisata'
        ],
        includedHighlights: [
          'Fasilitator fun outbound berpengalaman & properti game lengkap',
          'Tiket masuk venue ground outbound dan tiket masuk destinasi wisata terpilih',
          'Makan siang prasmanan lezat dan air mineral selama perjalanan',
          'Banner rombongan dan dokumentasi foto kegiatan'
        ],
        whatsappMessage: 'Halo, saya ingin menanyakan detail Program Outbound + Wisata di Malang Batu.'
      },
      {
        id: 'outbound-rafting',
        slug: 'outbound-rafting',
        title: 'Outbound + Rafting',
        badge: 'Tantangan Jeram Seru',
        summary:
          'Kombinasi uji kekompakan outbound di lapangan dilanjutkan petualangan arung jeram (rafting) menyusuri sungai deras berpanorama asri di Kaliwatu atau Kasembon.',
        description:
          'Program ini memadukan pembentukan sinergi tim di darat dengan ujian kekompakan nyata di atas perahu karet. Mengarungi jeram sungai grade 2-3 dengan bimbingan skipper profesional berstandar keselamatan internasional, menyuguhkan adrenalin sekaligus tawa lepas.',
        targetAudience: 'Karyawan muda, komunitas hobi petualangan, instansi dinamis, dan pencari sensasi adrenalin.',
        duration: '1 Hari Penuh (08.00 - 15.30 WIB)',
        activities: [
          'Pemanasan Fun Games & Team Trust Building di Lapangan Basecamp',
          'Safety Briefing & Simulasi Penyelamatan Rafting oleh Skipper',
          'Pengarungan Arung Jeram 7 - 9 Km (± 2 Jam di Atas Sungai Deras)',
          'Sesi Rescue Action & Lompat Tebing (Cliff Jumping Aman)',
          'Bilas Air Hangat, Santap Siang Masakan Desa & Wedang Jahe Hangat'
        ],
        benefits: [
          'Membangun kekompakan dan kepatuhan komando tim secara spontan',
          'Menghilangkan kejenuhan mental dengan terapi adrenalin alami aliran air',
          'Menciptakan memori perjuangan bersama melintasi jeram sungai'
        ],
        includedHighlights: [
          'Perahu karet, dayung, helm keselamatan, dan pelampung standar internasional',
          'Skipper profesional berpengalaman & tim rescue siaga di titik jeram kritis',
          'Asuransi petualangan resmi bagi seluruh peserta pengarungan',
          'Fasilitas bilas bersih, ruang ganti, sajian makan siang & minuman hangat'
        ],
        whatsappMessage: 'Halo, saya ingin menanyakan detail Program Outbound + Rafting di Malang Batu.'
      },
      {
        id: 'outbound-offroad',
        slug: 'outbound-offroad',
        title: 'Outbound + Offroad',
        badge: 'Jelajah Jeep 4x4',
        summary:
          'Sensasi petualangan mengendarai armada jeep 4x4 melintasi trek ekstrem perbukitan pinus, perkebunan apel, dan lumpur berlian Kota Batu Malang.',
        description:
          'Kombinasikan pemanasan outbound team building dengan aksi menantang berkeliling lanskap pegunungan menggunakan armada Jeep 4x4 klasik terbuka. Rute melewati jalur hutan pinus Coban Talun atau lintasan perkebunan sayur Bumiaji yang memanjakan mata dengan pemandangan dramatis.',
        targetAudience: 'Pecinta petualangan, instansi korporat, klub otomotif, dan rombongan keluarga berjiwa petualang.',
        duration: '1 Hari Penuh (08.00 - 16.00 WIB)',
        activities: [
          'Ice Breaking & Yel-Yel Rombongan di Ground Titik Kumpul',
          'Konvoi Armada Jeep 4x4 Melintasi Perbukitan & Hutan Pinus',
          'Manuver Trek Lumpur Berlian & Jalur Air Menantang',
          'Pemberhentian Spot Panorama Eksotis untuk Sesi Foto Rombongan',
          'Makan Siang Pedesaan di Kawasan Rest Area Hutan'
        ],
        benefits: [
          'Memberikan pengalaman berpetualang yang prestisius dan tidak biasa',
          'Menikmati keindahan alam tersembunyi yang tidak bisa dijangkau bus biasa',
          'Memperkuat ikatan solidaritas tim dalam satu armada jeep petualangan'
        ],
        includedHighlights: [
          'Armada Jeep 4x4 terawat dengan driver lokal ahli rute pegunungan',
          'Bahan bakar minyak (BBM) dan tiket masuk kawasan wisata offroad',
          'Fasilitasi fun games outbound dan perlengkapan simulasi darat',
          'Dokumentasi foto aksi laga jeep di tengah rute'
        ],
        whatsappMessage: 'Halo, saya ingin menanyakan detail Program Outbound + Offroad di Malang Batu.'
      },
      {
        id: 'outbound-camping',
        slug: 'outbound-camping',
        title: 'Outbound + Camping',
        badge: 'Malam Keakraban Alam Bebas',
        summary:
          'Pengalaman bermalam di tenda perkemahan alam terbuka dengan udara sejuk pinus Batu, dilengkapi api unggun hangat, barbeque, dan outbound pagi.',
        description:
          'Outbound + Camping mengajak peserta lepas sepenuhnya dari hiruk-pikuk perkotaan. Menginap di bawah gemerlap bintang pegunungan, berkumpul mengitari kehangatan api unggun, menyanyikan lagu kebersamaan, dan menyambut fajar dengan senam dan simulasi outbound penyemangat jiwa.',
        targetAudience: 'Komunitas, organisasi pemuda, karyawan instansi, dan keluarga pencinta alam.',
        duration: '2 Hari 1 Malam (Menginap di Tenda Camp)',
        activities: [
          'Kedatangan, Pembagian Tenda, & Orientasi Tata Tertib Perkemahan',
          'Sesi Fun Games Kebersamaan Sore di Lapangan Rumput Hijau',
          'Malam Keakraban: Menyalakan Api Unggun & Santap Barbeque / Jagung Bakar',
          'Morning Energizer & Sesi Refleksi Bersama Menatap Matahari Terbit',
          'Trekking Sejuk Menuju Air Terjun Terdekat & Penutupan Acara'
        ],
        benefits: [
          'Menciptakan ruang dialog terbuka dan keintiman emosional antaranggota',
          'Detoksifikasi pikiran di tengah keheningan alam tanpa polusi suara',
          'Melatih adaptasi dan kesederhanaan hidup bersama di alam terbuka'
        ],
        includedHighlights: [
          'Tenda dome berkualitas waterproof lengkap matras dan sleeping bag',
          'Kayu bakar resmi untuk api unggun dan perlengkapan malam keakraban',
          'Katering lengkap: 3x makan (siang, malam, pagi) & coffee break',
          'Fasilitas toilet sanitasi bersih, listrik penerangan, dan keamanan camping ground'
        ],
        whatsappMessage: 'Halo, saya ingin menanyakan detail Program Outbound + Camping di Malang Batu.'
      }
    ]
  }
];

// 6 Paket Populer untuk Homepage (Section Paket Unggulan)
export const featuredPackages = [
  {
    id: 'team-building-corporate',
    slug: 'outbound-perusahaan',
    detailUrl: '/paket/outbound-perusahaan.html',
    title: 'Outbound Team Building Perusahaan',
    category: 'Corporate & Instansi',
    badge: 'Program Populer',
    summary:
      'Program simulasi dinamika kelompok terstruktur yang dirancang untuk mempererat sinergi, komunikasi efektif, kepemimpinan, dan penyelesaian masalah antar divisi kerja.',
    targetAudience: 'Karyawan perusahaan, BUMN, instansi pemerintah, dan manajemen tim.',
    activities: [
      'Ice Breaking & Grouping Dinamis',
      'Trust Building & Effective Communication Games',
      'Problem Solving Challenge & Synergy Project',
      'Final Project: Team Commitment & Reflection'
    ],
    duration: '1 Hari (Full Day) / 2 Hari 1 Malam (Opsional)',
    includedHighlights: [
      'Master Fasilitator & Trainer Berpengalaman',
      'Peralatan Game & Safety Kit Lengkap',
      'Sound System Lapangan & Area Ground Outbound',
      'P3K Standar & Air Mineral Kegiatan'
    ],
    image: '/images/package-outbound-perusahaan.webp',
    alt: 'Kegiatan simulasi team building kelompok di lapangan hijau terbuka Kota Batu',
    whatsappMessage: 'Halo, saya ingin bertanya tentang Paket Outbound Team Building Perusahaan di Malang Batu.'
  },
  {
    id: 'corporate-gathering',
    slug: 'outbound-perusahaan',
    detailUrl: '/paket/outbound-perusahaan.html',
    title: 'Company Gathering & Employee Outing',
    category: 'Gathering & Refreshing',
    badge: 'Favorit Perusahaan',
    summary:
      'Perpaduan aktivitas luar ruang bernuansa rekreatif, fun games ringan, dan momen kebersamaan untuk menyegarkan pikiran serta merayakan pencapaian tim bersama.',
    targetAudience: 'Seluruh divisi perusahaan, staf lintas departemen, dan kegiatan tahunan kantor.',
    activities: [
      'Fun Games Ringan & Energizer Interaktif',
      'Kompetisi Kelompok Seru (Non-fisik Berat)',
      'Sesi Kebersamaan & Games Penghangat Suasana',
      'Waktu Bebas Eksplorasi Venue Alam Segar'
    ],
    duration: 'Half Day (4-5 Jam) atau Full Day',
    includedHighlights: [
      'Fasilitator Game yang Menghibur & Energik',
      'Sound System Outdoor & Venue Nyaman',
      'Dokumentasi Tim & Properti Fun Games',
      'Koordinasi Terpadu Kebutuhan Acara'
    ],
    image: '/images/package-outbound-perusahaan.webp',
    alt: 'Suasana keakraban peserta company gathering di area wisata alam pegunungan',
    whatsappMessage: 'Halo, saya ingin menanyakan paket Company Gathering & Employee Outing di Malang Batu.'
  },
  {
    id: 'family-community-gathering',
    slug: 'family-gathering',
    detailUrl: '/paket/family-gathering.html',
    title: 'Family Gathering & Komunitas',
    category: 'Keluarga & Komunitas',
    badge: 'Ramah Semua Usia',
    summary:
      'Kegiatan luar ruang santai dan ramah semua usia (anak-anak hingga dewasa) yang memprioritaskan keakraban keluarga, silaturahmi komunitas, dan hiburan alam terbuka.',
    targetAudience: 'Keluarga besar karyawan, alumni, komunitas hobi, dan paguyuban.',
    activities: [
      'Family Bonding Games & Parent-Child Activity',
      'Permainan Rekreasi Tanpa Beban Fisik Berat',
      'Panggung Mini Kebersamaan & Door Prize Session',
      'Foto Bersama Spot Alam Pegunungan Batu'
    ],
    duration: '1 Hari Santai (3 - 6 Jam)',
    includedHighlights: [
      'Pemandu Acara Ramah Anak & Keluarga',
      'Perlengkapan Permainan Aman & Edukatif',
      'Lokasi Sejuk dengan Fasilitas Sanitasi Bersih',
      'Dukungan Area Makan Bersama'
    ],
    image: '/images/package-family-gathering.webp',
    alt: 'Aktivitas kebersamaan family gathering di alam terbuka dengan pemandangan pinus',
    whatsappMessage: 'Halo, saya ingin konsultasi kegiatan Family Gathering / Komunitas di Malang Batu.'
  },
  {
    id: 'outbound-edukasi-sekolah',
    slug: 'outbound-sekolah',
    detailUrl: '/paket/outbound-sekolah.html',
    title: 'Outbound Edukatif Sekolah & Pelajar',
    category: 'Edukasi & Siswa',
    badge: 'Edukasi Karakter',
    summary:
      'Aktivitas outdoor terarah untuk melatih kemandirian, kepemimpinan siswa, keberanian, dan empati sosial melalui pengalaman belajar langsung di alam terbuka.',
    targetAudience: 'Siswa SD, SMP, SMA/SMK, mahasiswa baru, OSIS, dan organisasi ekstrakurikuler.',
    activities: [
      'Character Building & Leadership Games',
      'Ketangkasan Alam Terbuka & Ketelitian',
      'Edukasi Lingkungan & Sikap Gotong Royong',
      'Debriefing Pembelajaran Nilai Moral Positif'
    ],
    duration: '1 Hari (Pagi hingga Siang/Sore)',
    includedHighlights: [
      'Instruktur Bersertifikat & Paham Karakter Siswa',
      'Peralatan Standar Keamanan Tinggi',
      'Briefing Keselamatan & Pendampingan P3K Siaga',
      'Sertifikat Partisipasi (Berdasarkan Permintaan)'
    ],
    image: '/images/package-outbound-sekolah.webp',
    alt: 'Siswa sekolah mengikuti pelatihan kepemimpinan dan permainan outbound di lapangan',
    whatsappMessage: 'Halo, saya ingin menanyakan program Outbound Edukatif Sekolah di Malang Batu.'
  },
  {
    id: 'outdoor-adventure-kombinasi',
    slug: 'outbound-wisata',
    detailUrl: '/paket/outbound-wisata.html',
    title: 'Outbound Kombinasi Adventure (Rafting / Offroad)',
    category: 'Petualangan & Adrenalin',
    badge: 'Sensasi Petualangan',
    summary:
      'Paket kombinasi fun outbound team building dengan aktivitas petualangan seru seperti arung jeram (rafting) Kaliwatu/Kasembon, simulasi perang paintball, atau jeep tour coban.',
    targetAudience: 'Pecinta tantangan, instansi dinamis, dan tim yang menginginkan pengalaman berkesan.',
    activities: [
      'Pemanasan Fun Games & Team Dynamics',
      'Pilihan: Rafting Sungai Jeram / Tactical Paintball / Offroad Jeep',
      'Pemandu Profesional & Rescue Team Khusus',
      'Bilas Nyaman & Santap Kuliner Khas Daerah'
    ],
    duration: '1 Hari Penuh (Full Day Experience)',
    includedHighlights: [
      'Peralatan Adventure Standar Internasional',
      'Instruktur & Skipper Berpengalaman',
      'Asuransi Aktivitas Petualangan',
      'Transportasi Lapangan Lokal (Sesuai Rute)'
    ],
    image: '/images/package-outbound-wisata.webp',
    alt: 'Aktivitas rafting dan petualangan outdoor seru melintasi jeram sungai di Batu Malang',
    whatsappMessage: 'Halo, saya tertarik dengan paket Outbound Kombinasi Adventure di Malang Batu.'
  },
  {
    id: 'fun-games-rekreasi',
    slug: 'outbound-perusahaan',
    detailUrl: '/paket/outbound-perusahaan.html',
    title: 'Outbound Fun Games & Ice Breaking',
    category: 'Rekreasi & Keakraban',
    badge: 'Paling Terjangkau',
    summary:
      'Program rekreasi outdoor ringan berdurasi singkat yang fokus pada pencairan suasana, tawa bersama, dan keakraban tanpa beban fisik berat di alam terbuka sejuk.',
    targetAudience: 'Rombongan kantor, komunitas, arisan keluarga, dan acara temu alumni.',
    activities: [
      'Energizer & Ice Breaking Histeris Ceria',
      'Fun Grouping & Yel-Yel Semangat Regu',
      'Estafet Ketangkasan Ringan & Rekreatif',
      'Kompetisi Humor & Foto Tim Ekspresif'
    ],
    duration: 'Half Day (3 - 4 Jam)',
    includedHighlights: [
      'Master Game / Ice Breaker Komunikatif',
      'Properti Game Ringan & Audio Lapangan',
      'Peralatan Lengkap & P3K Standar',
      'Dokumentasi Momen Ceria Rombongan'
    ],
    image: '/images/package-family-gathering.webp',
    alt: 'Keseruan peserta mengikuti sesi permainan fun games dan ice breaking ceria',
    whatsappMessage: 'Halo, saya ingin menanyakan Paket Outbound Fun Games & Ice Breaking di Malang Batu.'
  }
];
