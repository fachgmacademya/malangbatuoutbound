import fs from 'node:fs';
import path from 'node:path';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 500" width="700" height="500">
  <defs>
    <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#102A43"/>
      <stop offset="60%" stop-color="#1A3B5C"/>
      <stop offset="100%" stop-color="#24583A"/>
    </linearGradient>
    <pattern id="dotPattern" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" opacity="0.12"/>
    </pattern>
  </defs>

  <rect width="700" height="500" rx="24" fill="url(#aboutGrad)"/>
  <rect width="700" height="500" rx="24" fill="url(#dotPattern)"/>

  <!-- Mountain Peaks in Background -->
  <polygon points="0,420 180,260 360,380 540,210 700,340 700,500 0,500" fill="#0E2338" opacity="0.8"/>
  <polygon points="0,450 140,340 300,420 480,290 660,400 700,370 700,500 0,500" fill="#143822" opacity="0.9"/>

  <!-- Pine Trees -->
  <g fill="#0B2013" opacity="0.95">
    <polygon points="80,380 50,470 110,470"/>
    <polygon points="80,340 60,400 100,400"/>
    <polygon points="620,360 590,460 650,460"/>
    <polygon points="620,320 600,380 640,380"/>
  </g>

  <!-- Team Harmony Vector Silhouette -->
  <g transform="translate(350, 340)">
    <!-- Base Shadow -->
    <ellipse cx="0" cy="55" rx="220" ry="18" fill="#000000" opacity="0.35"/>

    <!-- Characters Holding Hands in Outdoor Circle -->
    <!-- Center Person -->
    <circle cx="0" cy="-40" r="18" fill="#F4A261"/>
    <path d="M-20,25 C-20,-20 20,-20 20,25 Z" fill="#2A9D8F"/>
    
    <!-- Left Person 1 -->
    <circle cx="-65" cy="-30" r="16" fill="#F4A261"/>
    <path d="M-82,30 C-82,-10 -48,-10 -48,30 Z" fill="#E76F51"/>
    <path d="M-50,-2 L-18,-12" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" opacity="0.8"/>

    <!-- Right Person 2 -->
    <circle cx="65" cy="-30" r="16" fill="#F4A261"/>
    <path d="M48,30 C48,-10 82,-10 82,30 Z" fill="#457B9D"/>
    <path d="M18,-12 L50,-2" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" opacity="0.8"/>

    <!-- Outer Left 3 -->
    <circle cx="-130" cy="-20" r="15" fill="#E76F51"/>
    <path d="M-145,35 C-145,0 -115,0 -115,35 Z" fill="#F4A261"/>
    <path d="M-115,5 L-82,0" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" opacity="0.8"/>

    <!-- Outer Right 4 -->
    <circle cx="130" cy="-20" r="15" fill="#E76F51"/>
    <path d="M115,35 C115,0 145,0 145,35 Z" fill="#2A9D8F"/>
    <path d="M82,0 L115,5" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" opacity="0.8"/>
  </g>

  <!-- Floating Badge: Komitmen Pelayanan -->
  <g transform="translate(40, 45)">
    <rect width="260" height="58" rx="29" fill="#0B1F33" fill-opacity="0.85" stroke="#65B7E8" stroke-width="1.5"/>
    <circle cx="34" cy="29" r="18" fill="#2563A6"/>
    <path d="M34,18 C28,18 24,22 24,28 C24,35 34,40 34,40 C34,40 44,35 44,28 C44,22 40,18 34,18 Z" fill="#FFFFFF"/>
    <text x="64" y="25" fill="#65B7E8" font-family="system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="1.2">KONTROL KUALITAS</text>
    <text x="64" y="42" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="13" font-weight="600">Berorientasi Sinergi Tim</text>
  </g>

  <!-- Bottom Info Card -->
  <g transform="translate(40, 415)">
    <rect width="620" height="55" rx="14" fill="#0B1F33" fill-opacity="0.9" stroke="#FFFFFF" stroke-opacity="0.15" stroke-width="1"/>
    <text x="25" y="34" fill="#65B7E8" font-family="system-ui, sans-serif" font-size="13" font-weight="700">AREA UTAMA:</text>
    <text x="130" y="34" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="13" font-weight="500">Kota Batu • Kota Malang • Kabupaten Malang • Pujon • Coban Rondo</text>
  </g>
</svg>`;

fs.writeFileSync(path.resolve('public/images/about-malang-outbound.svg'), svg);
console.log('Created about-malang-outbound.svg');

