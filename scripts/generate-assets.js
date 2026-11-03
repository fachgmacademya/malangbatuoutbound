import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('public/images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function createHeroSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0E2338"/>
      <stop offset="40%" stop-color="#1A3B5C"/>
      <stop offset="70%" stop-color="#2D5F8B"/>
      <stop offset="100%" stop-color="#5B93C4"/>
    </linearGradient>
    <linearGradient id="sunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFDD80" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#FF9E44" stop-opacity="0.2"/>
    </linearGradient>
    <linearGradient id="mountainBack" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#234E70"/>
      <stop offset="100%" stop-color="#14324B"/>
    </linearGradient>
    <linearGradient id="mountainFront" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#24583A"/>
      <stop offset="100%" stop-color="#133822"/>
    </linearGradient>
    <linearGradient id="grassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#347C49"/>
      <stop offset="100%" stop-color="#1D4A2B"/>
    </linearGradient>
    <radialGradient id="mist" cx="50%" cy="80%" r="60%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Sky & Mountains (Gunung Panderman / Arjuno Silhouette) -->
  <rect width="1200" height="800" fill="url(#skyGrad)"/>
  <circle cx="950" cy="240" r="160" fill="url(#sunGrad)"/>

  <!-- Back Mountain Range -->
  <polygon points="0,520 220,380 480,480 720,310 980,450 1200,340 1200,800 0,800" fill="url(#mountainBack)" opacity="0.85"/>
  <!-- Front Mountain Range -->
  <polygon points="0,590 180,470 380,540 620,410 880,520 1100,430 1200,490 1200,800 0,800" fill="url(#mountainFront)"/>

  <!-- Pine Tree Silhouettes -->
  <g fill="#0E2D1B" opacity="0.95">
    <!-- Left grove -->
    <polygon points="60,630 35,720 85,720"/>
    <polygon points="60,600 40,660 80,660"/>
    <polygon points="110,610 80,720 140,720"/>
    <polygon points="110,570 88,640 132,640"/>
    <polygon points="160,640 135,730 185,730"/>
    <!-- Right grove -->
    <polygon points="1040,590 1010,710 1070,710"/>
    <polygon points="1040,550 1018,630 1062,630"/>
    <polygon points="1110,610 1080,730 1140,730"/>
    <polygon points="1160,580 1135,700 1185,700"/>
  </g>

  <!-- Ground Meadow -->
  <ellipse cx="600" cy="850" rx="900" ry="280" fill="url(#grassGrad)"/>
  <rect width="1200" height="800" fill="url(#mist)"/>

  <!-- Outbound Teamwork Activity Vector -->
  <g transform="translate(600, 580)">
    <!-- Base field shadow -->
    <ellipse cx="0" cy="65" rx="360" ry="22" fill="#0C2012" opacity="0.4"/>

    <!-- Team Unity Circle & Banner Elements -->
    <!-- Flag Banner -->
    <line x1="-240" y1="-80" x2="-240" y2="60" stroke="#FFD166" stroke-width="5" stroke-linecap="round"/>
    <polygon points="-240,-80 -170,-60 -240,-40" fill="#EF476F"/>
    
    <!-- Character Figures Collaborating -->
    <!-- Center Person (Leader) -->
    <circle cx="0" cy="-35" r="16" fill="#F4A261"/>
    <path d="M-18,25 C-18,-15 18,-15 18,25 Z" fill="#2A9D8F"/>
    <path d="M-15,-5 L-42,-25" stroke="#2A9D8F" stroke-width="7" stroke-linecap="round"/>
    <path d="M15,-5 L42,-25" stroke="#2A9D8F" stroke-width="7" stroke-linecap="round"/>

    <!-- Left Partner 1 -->
    <circle cx="-75" cy="-25" r="15" fill="#F4A261"/>
    <path d="M-90,30 C-90,-5 -60,-5 -60,30 Z" fill="#E76F51"/>
    <path d="M-60,0 L-35,-15" stroke="#E76F51" stroke-width="6" stroke-linecap="round"/>

    <!-- Right Partner 2 -->
    <circle cx="75" cy="-25" r="15" fill="#F4A261"/>
    <path d="M60,30 C60,-5 90,-5 90,30 Z" fill="#1D3557"/>
    <path d="M60,0 L35,-15" stroke="#1D3557" stroke-width="6" stroke-linecap="round"/>

    <!-- Outer Left Partner 3 -->
    <circle cx="-150" cy="-15" r="14" fill="#E76F51"/>
    <path d="M-165,35 C-165,5 -135,5 -135,35 Z" fill="#457B9D"/>
    <path d="M-135,10 L-95,0" stroke="#457B9D" stroke-width="6" stroke-linecap="round"/>

    <!-- Outer Right Partner 4 -->
    <circle cx="150" cy="-15" r="14" fill="#E76F51"/>
    <path d="M135,35 C135,5 165,5 165,35 Z" fill="#F4A261"/>
    <path d="M135,10 L95,0" stroke="#F4A261" stroke-width="6" stroke-linecap="round"/>

    <!-- Team Challenge Ring/Rope in Hand -->
    <ellipse cx="0" cy="10" rx="140" ry="16" fill="none" stroke="#FFD166" stroke-width="4" stroke-dasharray="8 4"/>
  </g>

  <!-- Location Badge Overlay -->
  <g transform="translate(100, 100)">
    <rect width="360" height="74" rx="37" fill="#0E2338" fill-opacity="0.75" stroke="#65B7E8" stroke-width="1.5"/>
    <circle cx="40" cy="37" r="22" fill="#2563A6"/>
    <path d="M40,24 C33,24 28,29 28,36 C28,45 40,52 40,52 C40,52 52,45 52,36 C52,29 47,24 40,24 Z" fill="#FFFFFF"/>
    <circle cx="40" cy="34" r="4" fill="#2563A6"/>
    <text x="75" y="32" fill="#65B7E8" font-family="system-ui, sans-serif" font-size="12" font-weight="700" letter-spacing="1.5">LOKASI ALAM SEJUK</text>
    <text x="75" y="52" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="15" font-weight="600">Kawasan Malang dan Kota Batu</text>
  </g>
</svg>`;
}

function createCardSvg(title, category, color1, color2, iconType) {
  let iconSvg = '';
  if (iconType === 'users') {
    iconSvg = `<g transform="translate(350, 160)" fill="#FFFFFF" opacity="0.9">
      <circle cx="0" cy="-30" r="25"/>
      <path d="M-35,40 C-35,5 35,5 35,40 Z"/>
      <circle cx="-55" cy="-20" r="18" opacity="0.75"/>
      <path d="M-80,45 C-80,18 -30,18 -30,45 Z" opacity="0.75"/>
      <circle cx="55" cy="-20" r="18" opacity="0.75"/>
      <path d="M30,45 C30,18 80,18 80,45 Z" opacity="0.75"/>
    </g>`;
  } else if (iconType === 'target') {
    iconSvg = `<g transform="translate(350, 160)">
      <circle cx="0" cy="0" r="50" fill="none" stroke="#FFFFFF" stroke-width="8" opacity="0.8"/>
      <circle cx="0" cy="0" r="30" fill="none" stroke="#FFFFFF" stroke-width="6" opacity="0.9"/>
      <circle cx="0" cy="0" r="14" fill="#FFD166"/>
      <line x1="-65" y1="0" x2="65" y2="0" stroke="#FFFFFF" stroke-width="3" opacity="0.6"/>
      <line x1="0" y1="-65" x2="0" y2="65" stroke="#FFFFFF" stroke-width="3" opacity="0.6"/>
    </g>`;
  } else if (iconType === 'adventure') {
    iconSvg = `<g transform="translate(350, 160)">
      <!-- Raft Boat & Waves -->
      <path d="M-50,20 Q0,40 50,20 L60,-5 Q0,10 -60,-5 Z" fill="#FFD166"/>
      <circle cx="-25" cy="-20" r="14" fill="#FFFFFF"/>
      <circle cx="20" cy="-20" r="14" fill="#FFFFFF"/>
      <line x1="-35" y1="-5" x2="-65" y2="25" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
      <line x1="10" y1="-5" x2="40" y2="25" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
      <path d="M-80,45 Q-40,30 0,45 T80,45" fill="none" stroke="#65B7E8" stroke-width="5" stroke-linecap="round"/>
    </g>`;
  } else if (iconType === 'education') {
    iconSvg = `<g transform="translate(350, 160)">
      <polygon points="0,-45 55,-20 0,5 -55,-20" fill="#FFD166"/>
      <polygon points="0,5 55,-20 55,-10 0,15 -55,-10 -55,-20" fill="#E09F3E"/>
      <path d="M-35,-5 L-35,30 Q0,50 35,30 L35,-5" fill="none" stroke="#FFFFFF" stroke-width="6"/>
      <line x1="55" y1="-15" x2="65" y2="25" stroke="#FFD166" stroke-width="4"/>
      <circle cx="65" cy="27" r="5" fill="#FFD166"/>
    </g>`;
  } else {
    iconSvg = `<g transform="translate(350, 160)">
      <circle cx="0" cy="0" r="45" fill="#65B7E8" opacity="0.25"/>
      <circle cx="0" cy="0" r="28" fill="#FFD166"/>
      <path d="M-15,-2 C-8,-15 8,-15 15,-2" fill="none" stroke="#102A43" stroke-width="4" stroke-linecap="round"/>
      <circle cx="-8" cy="-8" r="3" fill="#102A43"/>
      <circle cx="8" cy="-8" r="3" fill="#102A43"/>
    </g>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 450" width="700" height="450">
  <defs>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${color1}"/>
      <stop offset="100%" stop-color="${color2}"/>
    </linearGradient>
    <pattern id="cardPattern" width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="20" cy="20" r="1.5" fill="#FFFFFF" opacity="0.12"/>
    </pattern>
  </defs>

  <rect width="700" height="450" fill="url(#cardGrad)"/>
  <rect width="700" height="450" fill="url(#cardPattern)"/>

  <!-- Mountain Hills in Background of card -->
  <path d="M0,380 Q180,310 350,340 T700,310 L700,450 L0,450 Z" fill="#000000" opacity="0.18"/>
  <path d="M0,400 Q200,360 420,380 T700,360 L700,450 L0,450 Z" fill="#000000" opacity="0.25"/>

  <!-- Center Decorative Icon -->
  ${iconSvg}

  <!-- Category Badge -->
  <g transform="translate(45, 45)">
    <rect width="210" height="34" rx="17" fill="#0B1F33" fill-opacity="0.6" stroke="#65B7E8" stroke-width="1.2"/>
    <text x="105" y="22" fill="#65B7E8" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle" letter-spacing="1">${category.toUpperCase()}</text>
  </g>

  <!-- Title Bottom Ribbon -->
  <g transform="translate(45, 360)">
    <rect width="610" height="54" rx="12" fill="#0B1F33" fill-opacity="0.82" stroke="#FFFFFF" stroke-opacity="0.15" stroke-width="1"/>
    <text x="30" y="34" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="18" font-weight="600">${title}</text>
  </g>
</svg>`;
}

// Generate assets
const hero = createHeroSvg();
fs.writeFileSync(path.join(outDir, 'hero-outbound-malang.svg'), hero);
fs.writeFileSync(path.join(outDir, 'og-default.svg'), hero);

const cardConfigs = [
  { name: 'package-team-building.svg', title: 'Team Building & Synergy Dynamics', cat: 'Corporate Program', c1: '#102A43', c2: '#205486', icon: 'target' },
  { name: 'package-gathering.svg', title: 'Company Outing & Fun Gathering', cat: 'Refreshing Tim', c1: '#143825', c2: '#2E7A4A', icon: 'users' },
  { name: 'package-family.svg', title: 'Family & Community Gathering', cat: 'Semua Usia', c1: '#432810', c2: '#8C5221', icon: 'smile' },
  { name: 'package-sekolah.svg', title: 'Outbound Edukatif & Karakter Pelajar', cat: 'Sekolah & Siswa', c1: '#1F2937', c2: '#374151', icon: 'education' },
  { name: 'package-adventure.svg', title: 'Rafting Kaliwatu & Adventure Batu', cat: 'Sensasi Petualangan', c1: '#0B3C49', c2: '#16697A', icon: 'adventure' },

  // Facilities
  { name: 'facility-ground.svg', title: 'Ground Outbound Asri & Sejuk', cat: 'Venue Terpilih', c1: '#183B25', c2: '#2B6A3F', icon: 'target' },
  { name: 'facility-equipment.svg', title: 'Peralatan Simulasi Standar Tinggi', cat: 'Properti Lengkap', c1: '#102A43', c2: '#2C4F7C', icon: 'users' },
  { name: 'facility-sound.svg', title: 'Sound System Lapangan Jernih', cat: 'Audio Terarah', c1: '#251E3E', c2: '#45356D', icon: 'smile' },
  { name: 'facility-safety.svg', title: 'P3K Siaga & Tanggap Darurat', cat: 'Standar Keamanan', c1: '#4A1525', c2: '#8B263E', icon: 'target' },
  { name: 'facility-catering.svg', title: 'Hidangan Prasmanan & Snack Hangat', cat: 'Konsumsi Higienis', c1: '#543D16', c2: '#8C6727', icon: 'smile' },
  { name: 'facility-doc.svg', title: 'Dokumentasi Foto & Video Resolusi Tinggi', cat: 'Momen Berkesan', c1: '#1A2938', c2: '#33506D', icon: 'users' },

  // Gallery
  { name: 'gallery-ice-breaking.svg', title: 'Ice Breaking Ceria di Coban Rondo', cat: 'Fun Games', c1: '#16382B', c2: '#2C6E52', icon: 'smile' },
  { name: 'gallery-team-strategy.svg', title: 'Simulasi Problem Solving Songgoriti', cat: 'Team Building', c1: '#102A43', c2: '#23598C', icon: 'target' },
  { name: 'gallery-family-moment.svg', title: 'Keseruan Balon Ria Family Gathering', cat: 'Gathering', c1: '#4A2A18', c2: '#874D29', icon: 'users' },
  { name: 'gallery-rafting.svg', title: 'Arung Jeram Sungai Kaliwatu Batu', cat: 'Adventure', c1: '#0A3340', c2: '#1B657D', icon: 'adventure' },
  { name: 'gallery-trust-fall.svg', title: 'Latihan Kepercayaan Tim Coban Talun', cat: 'Team Building', c1: '#1E2836', c2: '#3D4F67', icon: 'target' },
  { name: 'gallery-closing-group.svg', title: 'Foto Kebersamaan Penutup Kegiatan', cat: 'Keluarga Besar', c1: '#102A43', c2: '#1B5282', icon: 'users' }
];

for (const c of cardConfigs) {
  const content = createCardSvg(c.title, c.cat, c.c1, c.c2, c.icon);
  fs.writeFileSync(path.join(outDir, c.name), content);
}

// Logo SVG
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" width="320" height="80">
  <defs>
    <linearGradient id="logoBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563A6"/>
      <stop offset="100%" stop-color="#102A43"/>
    </linearGradient>
  </defs>
  <rect x="10" y="10" width="60" height="60" rx="16" fill="url(#logoBg)"/>
  <!-- Mountain & Tree in Logo -->
  <polygon points="40,22 24,54 56,54" fill="#FFFFFF"/>
  <polygon points="40,32 30,54 50,54" fill="#65B7E8"/>
  <polygon points="48,36 38,54 58,54" fill="#FFD166" opacity="0.9"/>
  <!-- Text -->
  <text x="84" y="38" fill="#102A43" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="800" letter-spacing="-0.5">MALANG BATU</text>
  <text x="84" y="58" fill="#2563A6" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" letter-spacing="3.5">OUTBOUND</text>
</svg>`;
fs.writeFileSync(path.join(outDir, 'logo-mbo.svg'), logoSvg);

console.log('Successfully generated all image assets in public/images!');

