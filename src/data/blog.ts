export interface BlogPost {
  slug: string;
  title: string;
  category: 'Panduan Perusahaan' | 'Tips Lokasi' | 'Edukasi & Sekolah' | 'Tips Acara';
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  image: string;
  alt: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      points?: string[];
    }[];
    conclusion: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'cara-memilih-outbound-perusahaan-malang',
    title: 'Cara Memilih Kegiatan Outbound yang Tepat untuk Perusahaan di Malang & Batu',
    category: 'Panduan Perusahaan',
    date: '2 November 2026',
    author: 'Tim Fasilitator MBO',
    readTime: '4 menit baca',
    excerpt: 'Panduan strategis bagi HRD dan panitia internal dalam menentukan format team building, simulasi games, dan pemilihan venue sesuai target kinerja instansi.',
    image: '/images/package-outbound-perusahaan.jpg',
    alt: 'Fasilitator memandu sesi team building outbound perusahaan di kawasan alam Kota Batu',
    content: {
      intro:
        'Merencanakan kegiatan luar ruang untuk instansi atau korporasi bukan sekadar memilih tanggal di kalender dan memesan bus pariwisata. Diperlukan analisis kebutuhan terarah agar investasi waktu dan anggaran memberikan return emosional dan produktivitas nyata pasca-kegiatan.',
      sections: [
        {
          heading: '1. Petakan Target Utama Manajemen',
          body:
            'Tentukan apakah kegiatan ini berfokus pada refreshing santai (Fun Gathering), pencairan sekat antar divisi (Team Building Kolaboratif), atau pembentukan kepemimpinan (Leadership Training). Sasaran yang jelas akan menentukan tingkat intensitas simulasi fisik di lapangan.'
        },
        {
          heading: '2. Kenali Profil dan Rentang Usia Peserta',
          body:
            'Komposisi usia rombongan sangat memengaruhi rancangan aktivitas. Untuk kelompok lintas generasi dengan peserta senior, utamakan simulasi strategi logika dan komunikasi santai daripada tantangan fisik berisiko tinggi.'
        },
        {
          heading: '3. Pilih Lokasi Ground yang Sesuai Musim',
          body:
            'Kawasan pegunungan Malang dan Batu memiliki iklim sejuk. Pastikan lokasi ground memiliki aula cadangan atau pendopo beratap untuk mengantisipasi potensi hujan sewaktu-waktu.'
        }
      ],
      conclusion:
        'Dengan pemetaan awal yang tepat, program outbound akan menjadi momen berkesan yang mempererat kekompakan kerja seluruh staf di kantor.'
    }
  },
  {
    slug: 'perbedaan-outbound-team-building-gathering',
    title: 'Perbedaan Mendasar Antara Outbound, Team Building, dan Family Gathering',
    category: 'Panduan Perusahaan',
    date: '28 Oktober 2026',
    author: 'Tim Edukasi MBO',
    readTime: '5 menit baca',
    excerpt: 'Kerap dianggap sama, ketiga jenis kegiatan ini memiliki fokus sasaran, struktur simulasi, dan intensitas dinamika yang sangat berbeda.',
    image: '/images/package-family-gathering.jpg',
    alt: 'Simulasi kelompok di lapangan hijau pegunungan Jawa Timur',
    content: {
      intro:
        'Banyak panitia perusahaan bingung saat harus menentukan proposal kegiatan luar ruang: apakah harus mengambil paket outbound, team building, atau gathering? Mari kita bedah perbedaannya secara praktis.',
      sections: [
        {
          heading: 'Outbound: Pembelajaran Berbasis Alam Bebas',
          body:
            'Outbound adalah payung besar kegiatan luar ruang (experiential learning) yang mengombinasikan petualangan fisik, ketangkasan, dan refleksi nilai pribadi serta kelompok di alam terbuka.'
        },
        {
          heading: 'Team Building: Simulasi Pemecahan Masalah Terarah',
          body:
            'Fokus utamanya adalah sinergi kelompok kerja. Setiap game dirancang memiliki benang merah terhadap tantangan kerja nyata, seperti problem solving, trust building, dan komunikasi efektif yang diakhiri sesi debriefing mendalam.'
        },
        {
          heading: 'Gathering: Relaksasi, Apresiasi & Keakraban Sosial',
          body:
            'Bertujuan utama mempererat silaturahmi tanpa beban penilaian. Mengedepankan fun games ceria, makan bersama, hiburan musik, dan doorprize santai bagi karyawan beserta keluarga.'
        }
      ],
      conclusion:
        'Sesuaikan pilihan program dengan kondisi psikologis tim kerja Anda saat ini untuk hasil yang maksimal.'
    }
  },
  {
    slug: 'tips-memilih-lokasi-outbound-batu',
    title: '5 Hal Penting yang Wajib Diperhatikan Saat Memilih Lokasi Outbound di Batu Malang',
    category: 'Tips Lokasi',
    date: '24 Oktober 2026',
    author: 'Koordinator Lapangan MBO',
    readTime: '4 menit baca',
    excerpt: 'Mulai dari aksesibilitas bus besar, kontur rumput terbuka, ketersediaan aula pendopo cadangan, hingga higienitas fasilitas sanitasi.',
    image: '/images/package-outbound-wisata.jpg',
    alt: 'Hamparan lapangan rumput luas dikelilingi hutan pinus di kawasan Batu Malang',
    content: {
      intro:
        'Kota Batu dan sekitarnya menawarkan puluhan pilihan venue alam mulai dari Coban Rondo, Coban Talun, Coban Rais, hingga resort convention. Namun tidak semua lokasi cocok untuk profil setiap rombongan.',
      sections: [
        {
          heading: '1. Aksesibilitas Armada dan Kapasitas Parkir',
          body:
            'Jika rombongan menggunakan bus pariwisata medium atau besar (50 seat), pastikan jalan menuju pintu masuk tidak sempit dan area parkir mampu menampung manuver armada tanpa kemacetan.'
        },
        {
          heading: '2. Kontur Tanah dan Keamanan Lapangan',
          body:
            'Pilihlah ground dengan rumput tebal yang terawat, bebas dari pecahan batu tajam atau lubang tersembunyi yang berisiko mencederai peserta saat berlari.'
        },
        {
          heading: '3. Ketersediaan Aula Pendopo & Sanitasi Bersih',
          body:
            'Cuaca pegunungan bisa berubah cepat. Lokasi ideal wajib memiliki pendopo berteduh serta jumlah bilik toilet yang memadai agar peserta tidak mengantre panjang.'
        }
      ],
      conclusion:
        'Selalu luangkan waktu untuk konsultasi kondisi aktual lokasi bersama provider berpengalaman sebelum menetapkan tanggal pelaksanaan.'
    }
  },
  {
    slug: 'rekomendasi-persiapan-outbound-sekolah-ldks',
    title: 'Rekomendasi Persiapan Outbound Sekolah & LDKS Karakter di Alam Pegunungan',
    category: 'Edukasi & Sekolah',
    date: '19 Oktober 2026',
    author: 'Fasilitator LDKS MBO',
    readTime: '4 menit baca',
    excerpt: 'Tips bagi guru dan pembina OSIS dalam menyusun Latihan Dasar Kepemimpinan Siswa yang aman, disiplin, dan menanamkan nilai kemandirian.',
    image: '/images/package-outbound-sekolah.jpg',
    alt: 'Siswa-siswi sekolah berbaris rapi mengikuti arahan instruktur outbound',
    content: {
      intro:
        'Kegiatan LDKS dan outbound sekolah di alam terbuka merupakan medium terbaik untuk mengikis ketergantungan gawai serta membentuk karakter tangguh generasi muda.',
      sections: [
        {
          heading: '1. Pengawasan Kesehatan dan Riwayat Medis Siswa',
          body:
            'Pastikan pihak sekolah telah mengumpulkan surat pernyataan riwayat penyakit khusus (asma, riwayat cedera) dari orang tua murid untuk mitigasi tim medis lapangan.'
        },
        {
          heading: '2. Keseimbangan Antara Disiplin dan Nilai Edukasi',
          body:
            'Hindari konsep perpeloncoan fisik yang tidak terarah. Utamakan simulasi kepemimpinan, kerja sama kelompok kecil, dan sesi refleksi empati bersama teman sebaya.'
        },
        {
          heading: '3. Perlengkapan Pribadi yang Tepat',
          body:
            'Bimbing siswa membawa pakaian ganti, jaket hangat, sepatu olahraga beralas karet, jas hujan plastik, dan botol minum pribadi (tumbler).'
        }
      ],
      conclusion:
        'LDKS di alam bebas yang dirancang dengan SOP benar akan melahirkan kenangan positif dan karakter kepemimpinan yang membekas seumur hidup.'
    }
  },
  {
    slug: 'checklist-merencanakan-corporate-gathering',
    title: 'Checklist Lengkap Merencanakan Corporate Gathering Perusahaan Tanpa Ribet',
    category: 'Tips Acara',
    date: '15 Oktober 2026',
    author: 'Event Planner MBO',
    readTime: '5 menit baca',
    excerpt: 'Daftar langkah kerja mulai dari H-60 hingga hari pelaksanaan agar panitia kantor dapat bekerja teratur dan tenang.',
    image: '/images/package-outbound-perusahaan.jpg',
    alt: 'Panitia gathering perusahaan berdiskusi merancang rundown acara',
    content: {
      intro:
        'Ditunjuk menjadi ketua panitia gathering kantor sering kali mendatangkan stres karena banyaknya detail yang harus dikelola. Gunakan panduan checklist terstruktur ini.',
      sections: [
        {
          heading: 'Fase 1: Penentuan Konsep & Anggaran (H-60)',
          body:
            'Tetapkan tanggal acara, survei jumlah peserta definitif, dan tentukan apakah konsep acara satu hari penuh (Full Day) atau menginap (2D1N) di resort/villa.'
        },
        {
          heading: 'Fase 2: Pemilihan Provider & Booking Venue (H-30)',
          body:
            'Kunci ketersediaan venue dan provider outbound terpercaya. Diskusikan alur rundown, menu catering prasmanan, dan kebutuhan seragam kaos kegiatan.'
        },
        {
          heading: 'Fase 3: Finalisasi Logistik & Pembagian Kamar (H-7)',
          body:
            'Kirimkan daftar room list akomodasi, koordinasikan rute armada bus, dan siapkan susunan tim untuk pembagian rompi regu di lapangan.'
        }
      ],
      conclusion:
        'Pendelegasian yang baik kepada mitra penyelenggara profesional akan membuat seluruh panitia internal dapat ikut menikmati acara dengan riang gembira.'
    }
  },
  {
    slug: 'perlengkapan-wajib-kegiatan-outdoor-malang',
    title: 'Perlengkapan Wajib yang Perlu Disiapkan Peserta Outbound di Kawasan Sejuk Malang',
    category: 'Tips Acara',
    date: '10 Oktober 2026',
    author: 'Tim Logistik MBO',
    readTime: '3 menit baca',
    excerpt: 'Daftar barang bawaan esensial agar peserta tetap nyaman, bebas bergerak, dan terlindung dari cuaca pegunungan yang dinamis.',
    image: '/images/package-outbound-wisata.jpg',
    alt: 'Peserta mengenakan pakaian olahraga nyaman siap mengikuti simulasi outbound',
    content: {
      intro:
        'Kenyamanan di lapangan sangat dipengaruhi oleh persiapan perlengkapan pribadi. Berikut panduan barang bawaan yang perlu diinfokan kepada seluruh peserta.',
      sections: [
        {
          heading: '1. Sepatu Olahraga Beralas Karet (Grip Baik)',
          body:
            'Gunakan sneakers atau sepatu kets dengan grip sol yang tidak licin di atas rumput berembun atau tanah basah. Hindari menggunakan sandal jepit atau flat shoes santai.'
        },
        {
          heading: '2. Pakaian Olahraga Menyerap Keringat & Baju Ganti',
          body:
            'Gunakan kaos berbahan katun atau dry-fit yang leluasa untuk bergerak. Selalu bawa minimal satu stel pakaian ganti lengkap beserta kantong plastik untuk pakaian basah/kotor.'
        },
        {
          heading: '3. Jaket Hangat & Obat Pribadi',
          body:
            'Hawa sore di Batu dan Coban Rondo bisa turun drastis hingga 18-20°C. Siapkan jaket windbreaker dan pastikan obat-obatan pribadi bagi yang memiliki riwayat khusus tersimpan di tas kecil.'
        }
      ],
      conclusion:
        'Dengan perlengkapan yang lengkap, Anda siap menikmati setiap detik petualangan dan keceriaan outbound tanpa hambatan.'
    }
  }
];

