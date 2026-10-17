import { Hotel } from '../core/models/hotel.model';

export const MOCK_HOTELS: Hotel[] = [
  {
    id: 'htl-1',
    slug: 'the-samaya-beach-resort-seminyak',
    name: 'The Samaya Beachfront Resort & Villa',
    location: 'Jl. Kayu Aya, Seminyak Beach',
    area: 'Seminyak',
    category: 'resort',
    categoryLabel: {
      id: 'Resor Tepi Pantai',
      en: 'Beachfront Resort',
    },
    badge: {
      id: 'Akses Pantai Langsung',
      en: 'Direct Beach Access',
    },
    shortDescription: {
      id: 'Resor vila eksklusif tepat di bibir Pantai Seminyak dengan kolam renang pribadi dan restoran tepi laut terkemuka.',
      en: 'Exclusive villa resort perched directly on Seminyak Beach with private pools and renowned seaside dining.',
    },
    description: {
      id: 'Terletak di kawasan utama Seminyak yang dinamis namun menyajikan privasi maksimal. Setiap unit vila dilengkapi kolam renang pribadi, tempat berjemur yang luas, serta akses langsung ke pasir keemasan Pantai Seminyak. Cocok bagi pasangan yang menginginkan ketenangan maupun keluarga kecil yang menyukai akses cepat ke kafe dan butik Seminyak.',
      en: 'Positioned in the prime vibrant district of Seminyak while preserving complete privacy. Every private villa unit boasts its own swimming pool, spacious sundecks, and direct steps to the golden sands of Seminyak Beach. Ideal for discerning couples or small families wanting instant proximity to dining and lifestyle boutiques.',
    },
    pricePerNight: 3850000,
    priceUnit: {
      id: '/ malam',
      en: '/ night',
    },
    priceNote: {
      id: 'Harga indikatif kamar contoh, konfirmasi ketersediaan & tarif terkini ke admin WhatsApp.',
      en: 'Indicative sample rate; please verify live availability and final rates with admin.',
    },
    facilities: {
      id: [
        'Kolam renang pribadi di setiap unit vila',
        'Kolam renang utama tepi laut dengan sundeck',
        'Restoran fine-dining tepi pantai (Breeze)',
        'Layanan spa relaksasi dan pijat tradisional',
        'Akses Wi-Fi berkecepatan tinggi gratis',
        'Layanan butler 24 jam & buggy transport',
        'Pusat kebugaran ber-AC',
      ],
      en: [
        'Private lap pool in each standalone villa',
        'Beachfront infinity main pool and lounge',
        'Oceanfront dining restaurant (Breeze)',
        'Traditional wellness spa and therapy pavilions',
        'Complimentary high-speed Wi-Fi',
        'Dedicated 24-hour butler service & resort buggy',
        'Air-conditioned fitness center',
      ],
    },
    roomTypes: [
      {
        name: {
          id: 'One Bedroom Pool Villa',
          en: 'One Bedroom Pool Villa',
        },
        bed: {
          id: '1 King Bed berukuran besar',
          en: '1 Plush King Size Bed',
        },
        view: {
          id: 'Taman tropis privat & kolam renang pribadi',
          en: 'Private tropical garden & plunge pool',
        },
        capacity: {
          id: '2 Dewasa + 1 Anak',
          en: '2 Adults + 1 Child',
        },
      },
      {
        name: {
          id: 'Royal Courtyard Villa',
          en: 'Royal Courtyard Villa',
        },
        bed: {
          id: '1 King Bed atau 2 Single Beds',
          en: '1 King Bed or 2 Single Beds',
        },
        view: {
          id: 'Halaman asri dan kolam renang luas',
          en: 'Spacious landscaped courtyard & pool',
        },
        capacity: {
          id: '2 Dewasa + 2 Anak',
          en: '2 Adults + 2 Children',
        },
      },
    ],
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: true,
    nearbyAttractions: {
      id: [
        'Pantai Seminyak (0 meter - akses langsung)',
        'Pusat Kuliner Jl. Kayu Aya (5 menit jalan kaki)',
        'Pantai Petitenget & Ku De Ta (8 menit jalan kaki)',
      ],
      en: [
        'Seminyak Beach (0 meters - direct access)',
        'Kayu Aya Dining Street (5 mins walk)',
        'Petitenget Beach & Ku De Ta (8 mins walk)',
      ],
    },
  },
  {
    id: 'htl-2',
    slug: 'padma-resort-ubud-valley',
    name: 'Padma Valley Nature Resort Ubud',
    location: 'Banjar Carik, Desa Puhu, Payangan, Ubud',
    area: 'Ubud',
    category: 'resort',
    categoryLabel: {
      id: 'Resor Lembah Alami',
      en: 'Valley Nature Resort',
    },
    badge: {
      id: 'Kolam Hangat Lembah',
      en: 'Heated Valley Pool',
    },
    shortDescription: {
      id: 'Resor bintang lima tersembunyi di lembah Payangan Ubud dengan kolam renang infinity air hangat berpemandangan hutan tropis.',
      en: 'Secluded luxury resort set in Ubud’s northern river valley featuring a world-famous heated infinity pool facing bamboo forests.',
    },
    description: {
      id: 'Menyajikan panorama lembah hijau yang menenangkan dan udara pegunungan segar di utara Ubud. Dilengkapi fasilitas kolam renang infinity dengan pengatur suhu air hangat sepanjang 89 meter, kebun binatang mini (animal garden), jalur jogging hutan, serta aktivitas edukatif untuk keluarga dan anak.',
      en: 'Features serene valley vistas and crisp highland air north of Ubud. Celebrated for its 89-meter temperature-controlled heated infinity pool overlooking mist-shrouded bamboo canopies, an animal garden for children, jungle jogging trails, and enriching family activities.',
    },
    pricePerNight: 3100000,
    priceUnit: {
      id: '/ malam',
      en: '/ night',
    },
    priceNote: {
      id: 'Harga indikatif kamar contoh, konfirmasi ketersediaan & tarif terkini ke admin WhatsApp.',
      en: 'Indicative sample rate; please verify live availability and final rates with admin.',
    },
    facilities: {
      id: [
        'Kolam renang infinity air hangat berpemandangan lembah',
        'Taman satwa edukatif & taman kelinci untuk anak',
        'Kids Club dengan jadwal aktivitas gratis harian',
        'Restoran The Puhu dengan panorama 180 derajat',
        'Spa bintang lima dan paviliun yoga terbuka',
        'Layanan antar-jemput gratis ke pusat kota Ubud',
      ],
      en: [
        'Heated 89-meter infinity pool overlooking river valley',
        'Educational mini animal farm & bunny playground',
        'Supervised Kids Club with daily craft activities',
        'The Puhu Restaurant offering 180-degree forest vista',
        'Luxury spa suites and open-air yoga shala',
        'Complimentary shuttle service to central Ubud market',
      ],
    },
    roomTypes: [
      {
        name: {
          id: 'Premier Deluxe Room',
          en: 'Premier Deluxe Room',
        },
        bed: {
          id: '1 King Bed atau 2 Twin Beds',
          en: '1 King Bed or 2 Twin Beds',
        },
        view: {
          id: 'Lembah hijau bambu & taman tropis',
          en: 'Valley forest and lush gardens',
        },
        capacity: {
          id: '2 Dewasa + 1 Anak',
          en: '2 Adults + 1 Child',
        },
      },
      {
        name: {
          id: 'Premier Club Lounge Suite',
          en: 'Premier Club Lounge Suite',
        },
        bed: {
          id: '1 King Bed mewah + Sofa santai',
          en: '1 Luxury King Bed + Lounge Daybed',
        },
        view: {
          id: 'Panorama lembah terbuka dari balkon privat',
          en: 'Panoramic valley vista from private balcony',
        },
        capacity: {
          id: '2 Dewasa + 2 Anak',
          en: '2 Adults + 2 Children',
        },
      },
    ],
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: true,
    nearbyAttractions: {
      id: [
        'Terasering Sawah Tegallalang (15 menit berkendara)',
        'Perkebunan Kopi Kintamani (25 menit berkendara)',
        'Pusat Ubud & Monkey Forest (35 menit perjalanan)',
      ],
      en: [
        'Tegallalang Rice Terraces (15 mins drive)',
        'Kintamani Highlands (25 mins drive)',
        'Central Ubud & Monkey Forest (35 mins drive)',
      ],
    },
  },
  {
    id: 'htl-3',
    slug: 'grand-mirage-family-resort-nusa-dua',
    name: 'Grand Mirage Family All-Inclusive Resort',
    location: 'Jl. Pratama No. 72, Tanjung Benoa, Nusa Dua',
    area: 'Nusa Dua',
    category: 'family-resort',
    categoryLabel: {
      id: 'Resor Keluarga All-Inclusive',
      en: 'Family All-Inclusive Resort',
    },
    badge: {
      id: 'Favorit Keluarga & Anak',
      en: 'Top Family Choice',
    },
    shortDescription: {
      id: 'Resor tepi pantai berpasir putih Tanjung Benoa dengan kolam anak interaktif, water slide, dan area bermain mini waterpark.',
      en: 'Beachfront resort on calm Tanjung Benoa sands featuring interactive kids pools, waterslides, and dedicated family suites.',
    },
    description: {
      id: 'Pilihan nomor satu untuk liburan keluarga besar bersama anak-anak. Terletak di tepi pantai Tanjung Benoa yang berombak tenang dan aman untuk berenang. Dilengkapi wahana mini waterpark anak, ruang permainan indoor (Bamboo Kids Club & Gaming Room), panahan, dan pilihan paket makan keluarga all-inclusive.',
      en: 'A premier resort tailored for family holidays with children of all ages. Situated on the gentle, sheltered shores of Tanjung Benoa. Packed with children’s splash zones, waterslides, Bamboo Kids Club, gaming lounges, beach volleyball, and optional all-inclusive family dining packages.',
    },
    pricePerNight: 2450000,
    priceUnit: {
      id: '/ malam',
      en: '/ night',
    },
    priceNote: {
      id: 'Harga indikatif kamar contoh, konfirmasi ketersediaan & tarif terkini ke admin WhatsApp.',
      en: 'Indicative sample rate; please verify live availability and final rates with admin.',
    },
    facilities: {
      id: [
        'Mini Waterpark anak dengan seluncuran & ember tumpah',
        'Kolam renang utama tepi laut dengan swim-up bar',
        'Bamboo Kids Club & Ruang Game konsol remaja',
        'Akses langsung ke pantai berpasir putih aman anak',
        '8 pilihan restoran dan kafe tepi pantai',
        'Penyewaan kayak, paddleboard, dan sepeda',
      ],
      en: [
        'Kids Mini Waterpark with slides and splash buckets',
        'Lagoon beachfront main pool with swim-up bar',
        'Bamboo Kids Club and teen gaming arcade',
        'Direct access to calm, safe swimming beach',
        '8 themed restaurants and beachfront dining venues',
        'Complimentary ocean kayaks, paddleboards, and bikes',
      ],
    },
    roomTypes: [
      {
        name: {
          id: 'Family Room Deluxe with Bunk Bed',
          en: 'Family Room Deluxe with Bunk Bed',
        },
        bed: {
          id: '1 King Bed + 1 Ranjang Tingkat Anak',
          en: '1 King Bed + 1 Themed Bunk Bed',
        },
        view: {
          id: 'Taman tropis atau kolam renang anak',
          en: 'Lush tropical grounds or kids pool',
        },
        capacity: {
          id: '2 Dewasa + 2 Anak',
          en: '2 Adults + 2 Children',
        },
      },
      {
        name: {
          id: 'Ocean View Suite',
          en: 'Ocean View Suite',
        },
        bed: {
          id: '1 King Bed + Sofa Bed',
          en: '1 King Bed + Convertible Sofa Bed',
        },
        view: {
          id: 'Panorama laut lepas dan kolam laguna',
          en: 'Open ocean panorama & lagoon pool',
        },
        capacity: {
          id: '2 Dewasa + 1 Anak',
          en: '2 Adults + 1 Child',
        },
      },
    ],
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: true,
    nearbyAttractions: {
      id: [
        'Pusat Watersport Tanjung Benoa (2 menit jalan kaki)',
        'Bali Collection Mall Nusa Dua (10 menit berkendara)',
        'Waterblow Nusa Dua (12 menit berkendara)',
      ],
      en: [
        'Tanjung Benoa Watersports Hub (2 mins walk)',
        'Bali Collection Shopping Mall (10 mins drive)',
        'Waterblow Peninsula Nusa Dua (12 mins drive)',
      ],
    },
  },
  {
    id: 'htl-4',
    slug: 'alila-villas-cliff-uluwatu',
    name: 'Alila Cliffside Haven Uluwatu',
    location: 'Jl. Belimbing Sari, Tambiyak, Pecatu, Uluwatu',
    area: 'Uluwatu',
    category: 'villa',
    categoryLabel: {
      id: 'Vila Mewah Tebing Laut',
      en: 'Cliffside Luxury Villa',
    },
    badge: {
      id: 'Arsitektur Ikonik',
      en: 'Iconic Architecture',
    },
    shortDescription: {
      id: 'Vila spektakuler di atas tebing kapur setinggi 100 meter dengan paviliun sunset terapung dan privasi mutlak.',
      en: 'Architectural masterpiece perched 100 meters above the Indian Ocean with floating sunset cabana.',
    },
    description: {
      id: 'Karya arsitektur modern ramah lingkungan yang berdiri megah di tepi tebing kapur Uluwatu. Setiap vila menyajikan kolam renang pribadi, paviliun bersantai di luar ruangan dengan pemandangan Samudra Hindia tanpa batas, serta layanan butler pribadi yang siap memenuhi setiap kebutuhan liburan Anda.',
      en: 'An eco-luxury architectural icon suspended dramatically atop limestone cliffs in southern Uluwatu. Every villa features an expansive private pool, an outdoor relaxation cabana framing endless Indian Ocean horizons, and customized butler assistance for an unforgettable stay.',
    },
    pricePerNight: 8500000,
    priceUnit: {
      id: '/ malam',
      en: '/ night',
    },
    priceNote: {
      id: 'Harga indikatif kamar contoh, konfirmasi ketersediaan & tarif terkini ke admin WhatsApp.',
      en: 'Indicative sample rate; please verify live availability and final rates with admin.',
    },
    facilities: {
      id: [
        'Private pool & cabana bersantai di setiap vila',
        'Kolam renang infinity tebing laut 50 meter',
        'Sunset Cabana ikonik yang menjorok ke samudra',
        'Restoran gourmet The Warung & CIRE',
        'Spa Alila dengan perawatan alami holistik',
        'Butler pribadi terlatih 24 jam',
      ],
      en: [
        'Private pool & outdoor living cabana in every villa',
        '50-meter cliff-edge infinity swimming pool',
        'Iconic cantilevered Sunset Cabana over ocean',
        'Gourmet fine dining at The Warung & CIRE',
        'Spa Alila offering holistic natural wellness therapies',
        'Dedicated 24-hour private villa host',
      ],
    },
    roomTypes: [
      {
        name: {
          id: 'One Bedroom Pool Villa',
          en: 'One Bedroom Pool Villa',
        },
        bed: {
          id: '1 King Bed berbalut linen katun organik',
          en: '1 King Bed with organic cotton linens',
        },
        view: {
          id: 'Samudra Hindia dan taman batu kapur privat',
          en: 'Indian Ocean horizon & private courtyard',
        },
        capacity: {
          id: '2 Dewasa',
          en: '2 Adults',
        },
      },
      {
        name: {
          id: 'Two Bedroom Cliffside Villa',
          en: 'Two Bedroom Cliffside Villa',
        },
        bed: {
          id: '2 King Beds mewah di ruang terpisah',
          en: '2 Luxury King Beds in separate pavilions',
        },
        view: {
          id: 'Pemandangan laut 180 derajat tanpa halangan',
          en: 'Unobstructed 180-degree ocean horizon',
        },
        capacity: {
          id: '4 Dewasa + 2 Anak',
          en: '4 Adults + 2 Children',
        },
      },
    ],
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: false,
    nearbyAttractions: {
      id: [
        'Pura Luhur Uluwatu (10 menit berkendara)',
        'Pantai Suluban & Padang Padang (15 menit berkendara)',
        'Pantai Melasti (18 menit berkendara)',
      ],
      en: [
        'Uluwatu Temple (10 mins drive)',
        'Suluban & Padang Padang Surf Beaches (15 mins drive)',
        'Melasti Beach (18 mins drive)',
      ],
    },
  },
  {
    id: 'htl-5',
    slug: 'maya-sanur-beach-resort',
    name: 'Maya Sanur Eco Luxury Resort',
    location: 'Jl. Danau Tamblingan No. 89, Sanur Beach',
    area: 'Sanur',
    category: 'resort',
    categoryLabel: {
      id: 'Resor Tepi Pantai Asri',
      en: 'Eco Beachfront Resort',
    },
    badge: {
      id: 'Suasana Tenang & Hangat',
      en: 'Tranquil & Welcoming',
    },
    shortDescription: {
      id: 'Resor tepi pantai berkonsep arsitektur hijau di Sanur dengan jalur sepeda pantai dan kolam laguna 158 meter.',
      en: 'Green architectural beachfront resort in calm Sanur with seaside promenade cycling and a 158-meter lagoon pool.',
    },
    description: {
      id: 'Menghadirkan pesona Sanur yang santai dan ramah keluarga. Terhubung langsung dengan jalur pedestrian pantai Sanur yang teduh dan cocok untuk bersepeda pagi bersama anak. Resor ini terkenal dengan atap hijau berumput (green eco-roof), kolam renang laguna yang membentang sepanjang resor, serta sarapan lezat di tepi pantai.',
      en: 'Embraces the timeless, gentle charm of Sanur. Step directly onto the paved beach boardwalk ideal for morning family cycling and watching the sunrise. Features eco-friendly rooftop vegetation, a 158-meter winding lagoon swimming pool, and oceanfront dining.',
    },
    pricePerNight: 2850000,
    priceUnit: {
      id: '/ malam',
      en: '/ night',
    },
    priceNote: {
      id: 'Harga indikatif kamar contoh, konfirmasi ketersediaan & tarif terkini ke admin WhatsApp.',
      en: 'Indicative sample rate; please verify live availability and final rates with admin.',
    },
    facilities: {
      id: [
        'Kolam renang laguna 158 meter dengan akses langsung kamar tertentu',
        'Kolam renang infinity tepi pantai untuk melihat sunrise',
        'Penyewaan sepeda santai untuk jalur pedestrian pantai',
        'Restoran Jepang Kuu & Restoran Tepi Laut Graze',
        'The Spa at Maya dengan paviliun terbuka tepi air',
        'Layanan penitipan anak & area bermain keluarga',
      ],
      en: [
        '158-meter winding lagoon pool with lagoon access rooms',
        'Oceanfront infinity pool overlooking morning sunrise',
        'Classic beach cruiser bikes for boardwalk riding',
        'Authentic Japanese Kuu eatery & seaside Graze restaurant',
        'The Spa at Maya surrounded by tranquil water features',
        'Babysitting services & family activity programming',
      ],
    },
    roomTypes: [
      {
        name: {
          id: 'Deluxe Lagoon View Room',
          en: 'Deluxe Lagoon View Room',
        },
        bed: {
          id: '1 King Bed atau 2 Twin Beds',
          en: '1 King Bed or 2 Twin Beds',
        },
        view: {
          id: 'Pemandangan kolam laguna biru yang jernih',
          en: 'Balcony overlooking sparkling lagoon pool',
        },
        capacity: {
          id: '2 Dewasa + 1 Anak',
          en: '2 Adults + 1 Child',
        },
      },
      {
        name: {
          id: 'Deluxe Lagoon Direct Access',
          en: 'Deluxe Lagoon Direct Access',
        },
        bed: {
          id: '1 King Bed berukuran besar',
          en: '1 King Size Bed',
        },
        view: {
          id: 'Teras pribadi dengan tangga langsung masuk ke kolam',
          en: 'Private terrace with steps directly into the pool',
        },
        capacity: {
          id: '2 Dewasa',
          en: '2 Adults',
        },
      },
    ],
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: false,
    nearbyAttractions: {
      id: [
        'Jalur Sepeda Pantai Sanur (0 meter)',
        'Pelabuhan Penyeberangan Fast Boat Nusa Penida (7 menit)',
        'Kawasan Kafe & Restoran Danau Tamblingan (1 menit jalan kaki)',
      ],
      en: [
        'Sanur Beach Boardwalk (0 meters)',
        'Sanur Fast Boat Harbour to Nusa Penida (7 mins drive)',
        'Danau Tamblingan Dining Strip (1 min walk)',
      ],
    },
  },
  {
    id: 'htl-6',
    slug: 'rimba-jimbaran-bali-resort',
    name: 'Rimba Jimbaran Forest & Ocean Resort',
    location: 'Karang Mas Estate, Jl. Karang Mas Sejahtera, Jimbaran',
    area: 'Jimbaran',
    category: 'resort',
    categoryLabel: {
      id: 'Resor Hutan Tropis & Laut',
      en: 'Forest & Ocean Resort',
    },
    badge: {
      id: 'Akses 14 Kolam Renang',
      en: 'Access to 14 Pools',
    },
    shortDescription: {
      id: 'Resor terpadu bintang lima di dalam kompleks megah seluas 90 hektar dengan 14 kolam renang dan akses ke Rock Bar legendaris.',
      en: 'Integrated 90-hectare hillside forest resort offering access to 14 pools, private Kubu Beach, and world-famous Rock Bar.',
    },
    description: {
      id: 'Pengalaman resor megah yang menggabungkan kehijauan kanopi hutan tropis dengan pemandangan matahari terbenam Samudra Hindia. Para tamu menikmati fasilitas terpadu termasuk akses ke 14 kolam renang berbagai tipe, pantai privat Kubu Beach, pusat kebugaran lengkap, dan akses prioritas ke Rock Bar Bali.',
      en: 'A grand resort experience integrating verdant forest greenery with sweeping Indian Ocean sunsets. Guests enjoy access to 14 magnificent swimming pools, private Kubu Beach accessed via cliff inclinator, world-class spas, and priority entry to the world-renowned Rock Bar.',
    },
    pricePerNight: 3400000,
    priceUnit: {
      id: '/ malam',
      en: '/ night',
    },
    priceNote: {
      id: 'Harga indikatif kamar contoh, konfirmasi ketersediaan & tarif terkini ke admin WhatsApp.',
      en: 'Indicative sample rate; please verify live availability and final rates with admin.',
    },
    facilities: {
      id: [
        'Akses ke 14 kolam renang di seluruh kompleks resor',
        'Akses eksklusif ke Kubu Beach dengan inclinator tebing',
        'Prioritas reservasi di Rock Bar Bali',
        'Kids Club dengan aktivitas luar ruangan dan kebun edukasi',
        '26 restoran dan bar di dalam satu area kawasan',
        'Trem keliling gratis setiap 10 menit di dalam area',
      ],
      en: [
        'Access to 14 swimming pools across the 90-hectare estate',
        'Exclusive Kubu Beach access via scenic cliff inclinator',
        'Priority sunset admission to world-famous Rock Bar Bali',
        'Dedicated Kids Club with petting farm and nature workshops',
        '26 international restaurants, lounges, and bars',
        'Complimentary resort tram service every 10 minutes',
      ],
    },
    roomTypes: [
      {
        name: {
          id: 'Hillside Forest Room',
          en: 'Hillside Forest Room',
        },
        bed: {
          id: '1 King Bed atau 2 Twin Beds',
          en: '1 King Bed or 2 Twin Beds',
        },
        view: {
          id: 'Kanopi hutan tropis yang rimbun dan asri',
          en: 'Lush tropical forest canopy and distant hills',
        },
        capacity: {
          id: '2 Dewasa + 1 Anak',
          en: '2 Adults + 1 Child',
        },
      },
      {
        name: {
          id: 'Pool Access Suite',
          en: 'Pool Access Suite',
        },
        bed: {
          id: '1 King Bed luas',
          en: '1 Expansive King Bed',
        },
        view: {
          id: 'Teras langsung menuju kolam laguna bertingkat',
          en: 'Terrace stepping directly into tiered lagoon pool',
        },
        capacity: {
          id: '2 Dewasa + 2 Anak',
          en: '2 Adults + 2 Children',
        },
      },
    ],
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: false,
    nearbyAttractions: {
      id: [
        'Pantai Jimbaran Seafood Cafés (10 menit berkendara)',
        'Bandara Internasional I Gusti Ngurah Rai (20 menit)',
        'Garuda Wisnu Kencana (GWK) Cultural Park (12 menit)',
      ],
      en: [
        'Jimbaran Bay Seafood Cafés (10 mins drive)',
        'Ngurah Rai International Airport (20 mins drive)',
        'Garuda Wisnu Kencana (GWK) Cultural Park (12 mins drive)',
      ],
    },
  },
];
