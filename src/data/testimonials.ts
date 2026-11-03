export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  avatarText: string;
  rating: number;
  comment: string;
  programType: string;
  location: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'testi-1',
    name: 'Bambang Prasetyo',
    role: 'HR & People Operations',
    organization: 'Perusahaan Manufaktur Swasta',
    avatarText: 'BP',
    rating: 5,
    comment:
      'Koordinasi dari awal konsultasi konsep games sampai pelaksanaan di Songgoriti sangat rapi. Fasilitator mampu menghidupkan suasana dan simulasi komunikasinya kena banget untuk evaluasi divisi kami.',
    programType: 'Outbound Team Building',
    location: 'Songgoriti, Kota Batu'
  },
  {
    id: 'testi-2',
    name: 'Dra. Nurul Hidayati',
    role: 'Wakil Kesiswaan',
    organization: 'SMA Swasta Jawa Timur',
    avatarText: 'NH',
    rating: 5,
    comment:
      'Anak-anak sangat antusias mengikuti kegiatan di Coban Rondo. Simulasi kepemimpinan dan kemandiriannya dikemas menyenangkan tapi disiplin, serta tim medis P3K selalu siaga memantau siswa.',
    programType: 'Outbound Edukasi Pelajar',
    location: 'Coban Rondo, Pujon'
  },
  {
    id: 'testi-3',
    name: 'Hendrik Wijaya',
    role: 'Ketua Panitia Gathering',
    organization: 'Komunitas Pengusaha Muda',
    avatarText: 'HW',
    rating: 5,
    comment:
      'Pilihan venue sejuk, sound system terdengar jelas di seluruh lapangan, dan alur fun games santai sangat pas untuk rombongan keluarga. Semua peserta merasa terhibur dan terlayani dengan baik.',
    programType: 'Family & Community Gathering',
    location: 'Bumiaji, Kota Batu'
  }
];

