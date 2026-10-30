import { TourPackage } from '../../core/models/package.model';

export const HONEYMOON_PACKAGES: TourPackage[] = [
  {
    id: 'hny-3h2m',
    slug: 'paket-honeymoon-bali-3h2m',
    code: 'BP-HNY-32',
    title: {
      id: 'Paket Honeymoon Bali 3 Hari 2 Malam (3H2M)',
      en: 'Romantic Bali Honeymoon Package 3 Days 2 Nights (3D2N)',
    },
    tagline: {
      id: 'Bulan madu manis & intim: dekorasi bunga kamar romantis, sunset Tari Kecak Uluwatu, dan Candlelight Dinner Pantai Jimbaran.',
      en: 'Sweet romantic escape featuring floral room setup, Uluwatu sunset Kecak dance, and Jimbaran Candlelight Dinner.',
    },
    description: {
      id: 'Rayakan awal perjalanan cinta Anda di Pulau Dewata dengan Paket Honeymoon 3 Hari 2 Malam yang dirancang penuh kehangatan dan privasi. Dilengkapi kamar berdekorasi bulan madu (atau opsi Private Pool Villa), mobil privat khusus berdua, sesi makan malam romantis bertabur bunga dan lilin di tepi Pantai Jimbaran, serta eksplorasi santai Bedugul, Tanah Lot, dan tebing Uluwatu.',
      en: 'Celebrate your love story on the Island of the Gods with a 3D2N Honeymoon journey crafted for intimacy and comfort. Includes honeymoon floral room setup (or Private Pool Villa upgrade), private chauffeured car exclusively for two, a romantic beachfront candlelight seafood dinner in Jimbaran, and scenic tours of Bedugul, Tanah Lot, and Uluwatu.',
    },
    destination: 'Seminyak, Bedugul, Tanah Lot, Uluwatu & Jimbaran',
    duration: {
      id: '3 Hari 2 Malam',
      en: '3 Days 2 Nights',
    },
    durationDays: 3,
    price: 5250000,
    priceUnit: {
      id: '/ pasangan (2 orang)',
      en: '/ couple (2 pax)',
    },
    category: 'honeymoon',
    badge: {
      id: 'Honeymoon Favorit',
      en: 'Popular Honeymoon',
    },
    minParticipants: {
      id: 'Harga untuk 1 Pasangan (2 Orang)',
      en: 'Priced per Couple (2 Pax)',
    },
    highlights: {
      id: [
        'Dekorasi bunga bulan madu (Honeymoon Flower Setup) di kamar saat check-in',
        'Romantic Beachfront Candlelight Seafood Dinner untuk berdua di Pantai Jimbaran',
        'Menikmati senja romantis di Pura Uluwatu & pertunjukan Tari Kecak',
        'Udara pegunungan sejuk Danau Beratan Bedugul & siluet Pura Tanah Lot',
        'Mobil privat nyaman khusus 1 pasangan dengan sopir ramah membantu dokumentasi foto',
      ],
      en: [
        'Honeymoon floral bed & bath decoration upon check-in',
        'Romantic Beachfront Candlelight Seafood Dinner for two on Jimbaran Beach',
        'Cliffside sunset views at Uluwatu Temple & Kecak Fire Dance tickets',
        'Misty highland lake views in Bedugul & sunset silhouette at Tanah Lot',
        'Exclusive private car for one couple with helpful driver for couple photos',
      ],
    },
    inclusions: {
      id: [
        'Akomodasi 2 malam di Hotel Romantis ★4 atau One-Bedroom Private Pool Villa (sesuai pilihan)',
        'Honeymoon room setup (rangkaian kelopak bunga di tempat tidur & welcome drink)',
        'Transportasi mobil ber-AC privat penuh selama 3 hari khusus 1 pasangan',
        'Kalungan bunga penyambutan saat tiba di Bandara Ngurah Rai',
        '1x Romantic Candlelight Seafood Dinner di tepi Pantai Jimbaran',
        '2x sarapan pagi, 2x makan siang romantis, 1x makan malam lokal',
        'Tiket masuk seluruh objek wisata, Tari Kecak Uluwatu, parkir & air mineral',
      ],
      en: [
        '2 nights stay at a Romantic 4-Star Hotel or One-Bedroom Private Pool Villa',
        'Complimentary honeymoon flower bed decoration & welcome drinks',
        'Full 3-day private AC vehicle dedicated exclusively to one couple',
        'Fresh flower garland welcome upon Bali Airport arrival',
        '1x Romantic Candlelight Seafood Dinner on Jimbaran Beach',
        '2 breakfasts, 2 scenic lunches, and 1 evening dinner',
        'All attraction tickets, Uluwatu Kecak Dance tickets, parking & bottled water',
      ],
    },
    exclusions: {
      id: [
        'Tiket pesawat PP dari kota asal pasangan',
        'Sesi fotografer profesional khusus (dapat ditambahkan atas permintaan)',
        'Pengeluaran pribadi di villa/hotel & tipping sukarela',
      ],
      en: [
        'Round-trip flight tickets',
        'Optional dedicated professional honeymoon photographer package',
        'Personal villa/hotel incidentals & discretionary tipping',
      ],
    },
    childPolicy: {
      id: [
        'Paket ini dirancang khusus untuk 2 orang dewasa (1 pasangan).',
        'Untuk liburan pasangan yang membawa buah hati, silakan konsultasikan penyesuaian kamar keluarga dengan admin kami.',
      ],
      en: [
        'This package is specially tailored and priced per couple (2 adults).',
        'Traveling with a child? Chat with our admin to customize family room arrangements.',
      ],
    },
    itinerary: [
      {
        day: 1,
        title: { id: 'Penyambutan Bandara, Pantai Melasti, Uluwatu & Candlelight Dinner', en: 'Airport Welcome, Melasti Cliffs, Uluwatu & Candlelight Dinner' },
        activities: {
          id: [
            'Penjemputan privat di Bandara Ngurah Rai dengan kalungan bunga pasangan',
            'Menikmati panorama laut biru kehijauan di Pantai Melasti Ungasan',
            'Pura Luhur Uluwatu & menyaksikan Tari Kecak berlatar senja',
            'Romantic Candlelight Seafood Dinner dengan meja khusus di tepi Pantai Jimbaran',
            'Check-in ke hotel / private pool villa dengan dekorasi bunga bulan madu',
          ],
          en: [
            'Private airport greeting at Ngurah Rai with couple flower garlands',
            'Scenic coastal drive through Melasti Beach’s dramatic white cliffs',
            'Cliffside sunset walk at Uluwatu Temple & Kecak Fire Dance',
            'Romantic Candlelight Seafood Dinner set right on Jimbaran Beach',
            'Check-in to your floral-decorated hotel room or private pool villa',
          ],
        },
      },
      {
        day: 2,
        title: { id: 'Kesejukan Danau Beratan Bedugul, Kebun Kopi & Senja Tanah Lot', en: 'Misty Lake Beratan Bedugul, Coffee Garden & Tanah Lot Sunset' },
        activities: {
          id: [
            'Sarapan santai berdua di hotel / floating breakfast di villa (untuk paket Villa)',
            'Berfoto romantis di Gerbang Handara & Pura Ulun Danu Beratan Bedugul',
            'Makan siang nyaman dengan udara pegunungan sejuk',
            'Mencicipi cokelat hangat dan kopi di kebun organik Baturiti',
            'Menyaksikan matahari terbenam di Pura Tanah Lot & makan malam sebelum kembali ke penginapan',
          ],
          en: [
            'Leisurely couple breakfast (floating breakfast included for Pool Villa tier)',
            'Romantic photo stops at Handara Gate & Ulun Danu Beratan Lake Temple',
            'Cozy highland lunch in cool Bedugul',
            'Warm artisanal chocolate and coffee tasting in Baturiti',
            'Golden sunset views at Tanah Lot Sea Temple & dinner before returning',
          ],
        },
      },
      {
        day: 3,
        title: { id: 'Quality Time di Villa/Hotel, Kafe Seminyak & Belanja Cendera Mata', en: 'Leisure Morning at Villa/Hotel, Seminyak Stroll & Departure' },
        activities: {
          id: [
            'Waktu pagi bebas menikmati kolam renang dan fasilitas penginapan tanpa terburu-buru',
            'Check-out pukul 11.30 WITA dilanjutkan makan siang di kawasan Seminyak / Kuta',
            'Singgah membeli oleh-oleh khas Bali untuk keluarga',
            'Pengantaran privat menuju Bandara Internasional Ngurah Rai',
          ],
          en: [
            'Unrushed morning enjoying your private pool or resort amenities',
            'Check-out at 11:30 AM followed by lunch in vibrant Seminyak or Kuta',
            'Stop for keepsake gifts and Balinese delicacies',
            'Private transfer to Ngurah Rai International Airport',
          ],
        },
      },
    ],
    pricingTable: [
      {
        id: 'tier-hny-4star',
        tierName: { id: 'Paket Hotel Romantis Bintang 4 (★4)', en: 'Romantic 4-Star Boutique Hotel (★4)' },
        hotelsExample: { id: '2 Malam di The ONE Legian / Swiss-Belhotel Rainforest / Mercure', en: '2 Nights at The ONE Legian / Swiss-Belhotel / Mercure' },
        brackets: [
          { paxLabel: { id: 'Harga / Pasangan (2 Pax)', en: 'Rate / Couple (2 Pax)' }, pricePerPax: 5250000 },
        ],
      },
      {
        id: 'tier-hny-villa',
        tierName: { id: 'Paket One-Bedroom Private Pool Villa', en: 'One-Bedroom Private Pool Villa' },
        hotelsExample: { id: '2 Malam di Ini Vie Villa / Aksari Seminyak / La Walon Pool Villa + Floating Breakfast', en: '2 Nights Private Pool Villa in Seminyak/Legian + 1x Floating Breakfast' },
        brackets: [
          { paxLabel: { id: 'Harga / Pasangan (2 Pax)', en: 'Rate / Couple (2 Pax)' }, pricePerPax: 6950000 },
        ],
      },
    ],
    importantNotes: {
      id: [
        'Harga yang tertera sudah merupakan harga TOTAL untuk 1 Pasangan (2 Orang), bukan harga per kepala.',
        'Khusus pilihan Private Pool Villa sudah termasuk 1x pengalaman Floating Breakfast di kolam renang pribadi.',
      ],
      en: [
        'Displayed rates cover the TOTAL package for 1 Couple (2 Adults), not per individual.',
        'Selecting the Private Pool Villa tier includes 1x complimentary Floating Breakfast experience.',
      ],
    },
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    ],
    recommendedHotelAreas: ['Seminyak', 'Jimbaran', 'Uluwatu'],
    featured: true,
  },
  {
    id: 'hny-4h3m',
    slug: 'paket-honeymoon-bali-4h3m',
    code: 'BP-HNY-43',
    title: {
      id: 'Paket Honeymoon Bali 4 Hari 3 Malam (4H3M) Spa & Serenity',
      en: 'Romantic Bali Honeymoon 4 Days 3 Nights (4D3N) Spa & Serenity',
    },
    tagline: {
      id: 'Harmoni romantis Ubud & Pantai Selatan lengkap dengan Balinese Couple Spa 120 menit dan Candlelight Dinner.',
      en: 'Romantic harmony of Ubud greenery & South Bali coasts with 120-minute Balinese Couple Spa and Candlelight Dinner.',
    },
    description: {
      id: 'Paket Honeymoon 4 Hari 3 Malam terpopuler yang menyeimbangkan petualangan romantis dan waktu relaksasi mendalam. Selain menjelajahi keindahan alam Ubud, Kintamani, dan pesisir tebing Uluwatu, pasangan akan dimanjakan dengan perawatan tradisional Balinese Couple Spa & Flower Bath selama 2 jam serta makan malam romantis di tepi Pantai Jimbaran.',
      en: 'Our signature 4D3N honeymoon experience balancing scenic exploration with indulgent relaxation. Alongside touring Ubud’s emerald valleys, Kintamani’s caldera, and Uluwatu’s dramatic cliffs, couples enjoy a rejuvenating 2-hour Balinese Couple Spa & Flower Bath and a beachfront Candlelight Dinner in Jimbaran.',
    },
    destination: 'Seminyak, Ubud, Kintamani, Uluwatu & Jimbaran',
    duration: {
      id: '4 Hari 3 Malam',
      en: '4 Days 3 Nights',
    },
    durationDays: 4,
    price: 6850000,
    priceUnit: {
      id: '/ pasangan (2 orang)',
      en: '/ couple (2 pax)',
    },
    category: 'honeymoon',
    badge: {
      id: 'Termasuk Couple Spa',
      en: 'Includes Couple Spa',
    },
    minParticipants: {
      id: 'Harga untuk 1 Pasangan (2 Orang)',
      en: 'Priced per Couple (2 Pax)',
    },
    highlights: {
      id: [
        '120 Menit Traditional Balinese Couple Massage & Aromatic Flower Bath',
        'Romantic Beachfront Candlelight Seafood Dinner di Pantai Jimbaran',
        'Eksplorasi romantis Terasering Tegallalang Ubud, Desa Penglipuran & Kintamani',
        'Pantai Melasti, Pura Uluwatu & Pementasan Tari Kecak Sunset',
        'Pilihan menginap di Hotel ★4 atau Private Pool Villa dengan dekorasi bulan madu',
      ],
      en: [
        '120-Minute Traditional Balinese Couple Spa & Flower Petal Bath',
        'Romantic Beachfront Candlelight Seafood Dinner on Jimbaran Beach',
        'Scenic couple tour of Tegallalang Rice Terraces, Penglipuran & Kintamani',
        'Melasti Beach cliffs, Uluwatu Temple & Sunset Kecak Fire Dance',
        '3 nights in a 4-Star Boutique Hotel or Private Pool Villa with floral setup',
      ],
    },
    inclusions: {
      id: [
        'Menginap 3 malam di Hotel ★4 atau One-Bedroom Private Pool Villa',
        'Dekorasi bunga bulan madu di kamar + welcome drink saat check-in',
        '1x Paket Perawatan Couple Spa 120 Menit untuk 2 orang',
        '1x Romantic Candlelight Seafood Dinner di Pantai Jimbaran',
        'Mobil ber-AC privat penuh selama 4 hari + pengemudi ramah & BBM',
        '3x sarapan pagi, 3x makan siang romantis, 2x makan malam',
        'Tiket masuk seluruh destinasi wisata, Tari Kecak, parkir & air mineral',
      ],
      en: [
        '3 nights stay at 4-Star Boutique Hotel or One-Bedroom Private Pool Villa',
        'Honeymoon floral room decoration + welcome drinks on arrival',
        '1x 120-Minute Balinese Couple Spa & Flower Bath session for two',
        '1x Romantic Candlelight Seafood Dinner on Jimbaran Beach',
        '4 days private AC car exclusively for one couple + driver & fuel',
        '3 breakfasts, 3 scenic lunches, and 2 evening dinners',
        'All sightseeing tickets, Kecak Dance tickets, parking & bottled water',
      ],
    },
    exclusions: {
      id: [
        'Tiket penerbangan PP',
        'Pengeluaran pribadi di hotel/villa & tipping sukarela',
      ],
      en: [
        'Round-trip flight tickets',
        'Personal incidentals & discretionary gratuities',
      ],
    },
    childPolicy: {
      id: ['Harga paket berlaku untuk 1 pasangan (2 orang dewasa).'],
      en: ['Package rate applies per couple (2 adults).'],
    },
    itinerary: [
      {
        day: 1,
        title: { id: 'Penyambutan Bandara, Check-in Romantis & Sunset Seminyak', en: 'Airport Greeting, Romantic Check-in & Seminyak Sunset' },
        activities: {
          id: [
            'Penjemputan privat di Bandara Ngurah Rai dengan kalungan bunga',
            'Check-in ke hotel / private pool villa yang telah didekorasi nuansa honeymoon',
            'Sore hari bersantai menikmati senja di pesisir Pantai Seminyak & makan malam',
          ],
          en: [
            'Private airport welcome with fresh flower garlands',
            'Check-in to your honeymoon-decorated boutique room or pool villa',
            'Late afternoon sunset stroll on Seminyak Beach followed by dinner',
          ],
        },
      },
      {
        day: 2,
        title: { id: 'Terasering Ubud, Desa Penglipuran & Panorama Kaldera Kintamani', en: 'Ubud Rice Terraces, Penglipuran Village & Kintamani Panorama' },
        activities: {
          id: [
            'Sarapan berdua di hotel/villa & keberangkatan pukul 08.30 WITA',
            'Berfoto romantis di Terasering Sawah Tegallalang & kebun kopi Ubud',
            'Makan siang dengan pemandangan sejuk Gunung & Danau Batur Kintamani',
            'Menyusuri suasana damai Desa Adat Penglipuran sebelum kembali beristirahat',
          ],
          en: [
            'Couple breakfast at hotel/villa & 08:30 AM departure',
            'Scenic photo walk at Tegallalang Rice Terraces & Ubud coffee garden',
            'Romantic highland lunch overlooking Mount and Lake Batur in Kintamani',
            'Peaceful afternoon walk in Penglipuran Village before returning',
          ],
        },
      },
      {
        day: 3,
        title: { id: 'Relaksasi Couple Spa 2 Jam, Tebing Uluwatu & Candlelight Dinner', en: '2-Hour Couple Spa, Uluwatu Sunset & Jimbaran Candlelight Dinner' },
        activities: {
          id: [
            'Pagi santai menikmati kolam renang penginapan dilanjutkan makan siang',
            'Memanjakan diri selama 120 menit dalam sesi Balinese Couple Spa & mandi bunga',
            'Menuju Pura Luhur Uluwatu & menyaksikan Tari Kecak saat matahari terbenam',
            'Makan malam istimewa Candlelight Seafood Dinner di tepi Pantai Jimbaran',
          ],
          en: [
            'Slow morning enjoying your pool or resort amenities followed by lunch',
            'Indulge in a 120-minute Balinese Couple Massage & aromatic flower bath',
            'Visit cliffside Uluwatu Temple & watch the Sunset Kecak Fire Dance',
            'Intimate Candlelight Seafood Dinner by the waves on Jimbaran Beach',
          ],
        },
      },
      {
        day: 4,
        title: { id: 'Santai Pagi, Belanja Cendera Mata & Pengantaran Bandara', en: 'Leisure Morning, Keepsake Shopping & Airport Departure' },
        activities: {
          id: [
            'Sarapan pagi dan waktu bebas berdua sebelum proses check-out',
            'Makan siang & berbelanja oleh-oleh khas Bali di Krisna / The Keranjang',
            'Pengantaran privat menuju Bandara Ngurah Rai',
          ],
          en: [
            'Breakfast and relaxed private morning before check-out',
            'Farewell lunch & souvenir shopping at Krisna / The Keranjang',
            'Private transfer back to Ngurah Rai International Airport',
          ],
        },
      },
    ],
    pricingTable: [
      {
        id: 'tier-hny4-4star',
        tierName: { id: 'Paket Hotel Romantis Bintang 4 (★4)', en: 'Romantic 4-Star Boutique Hotel (★4)' },
        hotelsExample: { id: '3 Malam di Hotel ★4 Kuta/Seminyak + Couple Spa + Candlelight Dinner', en: '3 Nights 4-Star Hotel + Couple Spa + Candlelight Dinner' },
        brackets: [
          { paxLabel: { id: 'Harga / Pasangan (2 Pax)', en: 'Rate / Couple (2 Pax)' }, pricePerPax: 6850000 },
        ],
      },
      {
        id: 'tier-hny4-combo',
        tierName: { id: 'Kombinasi 2 Malam Hotel ★4 + 1 Malam Private Pool Villa', en: 'Combo: 2N 4-Star Hotel + 1N Private Pool Villa' },
        hotelsExample: { id: 'Favorit: 2 Malam Hotel Pantai + 1 Malam Private Pool Villa + Floating Breakfast', en: 'Best Value: 2N Beach Hotel + 1N Private Pool Villa + Floating Breakfast' },
        brackets: [
          { paxLabel: { id: 'Harga / Pasangan (2 Pax)', en: 'Rate / Couple (2 Pax)' }, pricePerPax: 8150000 },
        ],
      },
      {
        id: 'tier-hny4-villa',
        tierName: { id: 'Full 3 Malam One-Bedroom Private Pool Villa', en: 'Full 3 Nights One-Bedroom Private Pool Villa' },
        hotelsExample: { id: '3 Malam Penuh di Private Pool Villa Seminyak / Ubud + Floating Breakfast', en: 'Full 3 Nights Private Pool Villa in Seminyak / Ubud + Floating Breakfast' },
        brackets: [
          { paxLabel: { id: 'Harga / Pasangan (2 Pax)', en: 'Rate / Couple (2 Pax)' }, pricePerPax: 9650000 },
        ],
      },
    ],
    importantNotes: {
      id: [
        'Harga sudah mencakup keseluruhan biaya untuk 2 orang (1 pasangan).',
        'Tersedia kombinasi menginap Ubud Jungle Pool Villa + Seminyak Pool Villa atas permintaan.',
      ],
      en: [
        'Total price covers 1 Couple (2 Adults) all-inclusive of listed experiences.',
        'Split-stay Ubud Jungle Villa + Seminyak Beach Villa upgrades available upon consultation.',
      ],
    },
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    ],
    recommendedHotelAreas: ['Ubud', 'Seminyak', 'Uluwatu'],
    featured: false,
  },
  {
    id: 'hny-5h4m',
    slug: 'paket-honeymoon-bali-5h4m',
    code: 'BP-HNY-54',
    title: {
      id: 'Paket Honeymoon Bali 5 Hari 4 Malam (5H4M) Luxury & Nusa Penida',
      en: 'Luxury Bali Honeymoon 5 Days 4 Nights (5D4N) + Nusa Penida',
    },
    tagline: {
      id: 'Pengalaman bulan madu paripurna: Private Pool Villa, Couple Spa, Private Tour Nusa Penida, Ubud & Sunset Dinner Cruise / Jimbaran.',
      en: 'Ultimate honeymoon retreat: Private Pool Villa, Couple Spa, Private Nusa Penida Island Trip, Ubud & Candlelight Dinner.',
    },
    description: {
      id: 'Persembahan bulan madu paling eksklusif selama 5 Hari 4 Malam dari Bali Persada. Memadukan kenyamanan menginap penuh privasi, perjalanan privat berdua menyeberang ke pulau eksotis Nusa Penida, kesejukan alam Ubud & Danau Bedugul, sesi relaksasi Couple Spa 120 menit, hingga makan malam romantis tak terlupakan di tepi laut.',
      en: 'Our most complete 5D4N honeymoon collection. Combines serene boutique or private pool villa stays, a private couple excursion to exotic Nusa Penida island, Ubud & Bedugul highland beauty, a 120-minute Balinese Couple Spa ritual, and unforgettable seaside candlelight dining.',
    },
    destination: 'Seminyak, Ubud, Bedugul, Uluwatu, Jimbaran & Nusa Penida',
    duration: {
      id: '5 Hari 4 Malam',
      en: '5 Days 4 Nights',
    },
    durationDays: 5,
    price: 8950000,
    priceUnit: {
      id: '/ pasangan (2 orang)',
      en: '/ couple (2 pax)',
    },
    category: 'honeymoon',
    badge: {
      id: 'Honeymoon Eksklusif',
      en: 'Luxury Escape',
    },
    minParticipants: {
      id: 'Harga untuk 1 Pasangan (2 Orang)',
      en: 'Priced per Couple (2 Pax)',
    },
    highlights: {
      id: [
        'Private Couple Excursion ke Pulau Nusa Penida Barat (Fast Boat PP + Mobil Privat)',
        '120 Menit Balinese Couple Spa & Flower Bath + Romantic Candlelight Dinner Jimbaran',
        'Eksplorasi Danau Beratan Bedugul, Tanah Lot, Ubud Tegallalang & Tebing Uluwatu',
        'Pilihan kombinasi 2 Malam Ubud Valley + 2 Malam Seminyak Private Pool Villa',
      ],
      en: [
        'Private Couple Day Trip to West Nusa Penida (Return Fast Boat + Private Car)',
        '120-Minute Balinese Couple Spa + Beachfront Candlelight Dinner in Jimbaran',
        'Explore Lake Beratan Bedugul, Tanah Lot, Ubud Terraces & Uluwatu Cliffs',
        'Option for 2 Nights Ubud Jungle Villa + 2 Nights Seminyak Private Pool Villa',
      ],
    },
    inclusions: {
      id: [
        'Menginap 4 malam di Hotel ★4 / Kombinasi Villa / Full Private Pool Villa',
        'Honeymoon flower setup, welcome drink & 1x Floating Breakfast (untuk tipe Villa)',
        'Tiket Fast Boat Sanur – Nusa Penida PP & mobil privat pasangan di pulau',
        '1x Paket Couple Spa 120 Menit & 1x Romantic Candlelight Dinner Jimbaran',
        'Transportasi mobil ber-AC privat penuh selama 5 hari di Bali',
        '4x sarapan, 4x makan siang, 3x makan malam + seluruh tiket wisata',
      ],
      en: [
        '4 nights stay in 4-Star Hotel, Hotel+Villa Combo, or Full Private Pool Villa',
        'Honeymoon floral room decor, welcome drink & 1x Floating Breakfast (Villa tiers)',
        'Return Fast Boat tickets to Nusa Penida & private island car for two',
        '1x 120-Minute Couple Spa session & 1x Jimbaran Candlelight Seafood Dinner',
        '5 days dedicated private AC vehicle in Bali',
        '4 breakfasts, 4 lunches, 3 dinners + all attraction admissions',
      ],
    },
    exclusions: {
      id: [
        'Tiket pesawat terbang PP',
        'Pengeluaran pribadi pasangan & tipping sukarela',
      ],
      en: [
        'Round-trip flight tickets',
        'Personal incidentals & voluntary gratuities',
      ],
    },
    childPolicy: {
      id: ['Harga paket adalah total untuk 1 pasangan (2 orang dewasa).'],
      en: ['Displayed rate is the total package price for 1 couple (2 adults).'],
    },
    itinerary: [
      {
        day: 1,
        title: { id: 'Penjemputan Bandara, Check-in Romantis & Senja Pantai', en: 'Airport Arrival, Honeymoon Check-in & Sunset Leisure' },
        activities: {
          id: [
            'Penjemputan privat di Bandara Ngurah Rai dengan kalungan bunga',
            'Check-in penginapan berdekorasi bulan madu & waktu istirahat santai',
            'Makan malam selamat datang di restoran bernuansa hangat',
          ],
          en: [
            'Private airport greeting with fresh flower garlands',
            'Check-in to your floral-adorned room or villa & unwind',
            'Welcome couple dinner at a cozy local restaurant',
          ],
        },
      },
      {
        day: 2,
        title: { id: 'Danau Beratan Bedugul, Kebun Kopi & Sunset Pura Tanah Lot', en: 'Bedugul Highlands, Coffee Garden & Tanah Lot Sunset' },
        activities: {
          id: [
            'Sarapan pagi, mengunjungi Gerbang Handara & Pura Ulun Danu Bedugul',
            'Makan siang sejuk di dataran tinggi & mencicipi kopi/cokelat Bali',
            'Menikmati siluet matahari terbenam di Pura Tanah Lot & makan malam',
          ],
          en: [
            'Breakfast, photo stop at Handara Gate & Ulun Danu Beratan Temple',
            'Highland lunch & artisanal Balinese coffee/cocoa tasting',
            'Romantic ocean sunset at Tanah Lot Temple followed by dinner',
          ],
        },
      },
      {
        day: 3,
        title: { id: 'Private Couple Trip ke Pulau Nusa Penida Barat', en: 'Private Couple Island Trip to West Nusa Penida' },
        activities: {
          id: [
            'Menyeberang pagi dengan Fast Boat dari Sanur menuju Nusa Penida',
            'Berfoto berdua di tebing Kelingking Beach, Broken Beach & Angel’s Billabong',
            'Makan siang di pulau & bersantai di Crystal Bay sebelum kembali ke Bali',
          ],
          en: [
            'Morning Fast Boat crossing from Sanur to Nusa Penida',
            'Couple sightseeing at Kelingking Cliff, Broken Beach & Angel’s Billabong',
            'Island lunch & Crystal Bay beach stop before returning to mainland Bali',
          ],
        },
      },
      {
        day: 4,
        title: { id: 'Relaksasi Couple Spa 120 Menit, Uluwatu & Candlelight Dinner', en: '120-Min Couple Spa, Uluwatu Kecak & Jimbaran Candlelight Dinner' },
        activities: {
          id: [
            'Pagi santai menikmati Floating Breakfast / fasilitas kolam renang',
            'Perawatan tradisional Balinese Couple Spa & Flower Bath selama 2 jam',
            'Menuju Pura Uluwatu, menonton Tari Kecak & Romantic Candlelight Dinner Jimbaran',
          ],
          en: [
            'Relaxed morning enjoying Floating Breakfast or resort pool leisure',
            '2-hour Traditional Balinese Couple Massage & flower petal bath',
            'Uluwatu Temple sunset, Kecak Dance & Jimbaran Beach Candlelight Dinner',
          ],
        },
      },
      {
        day: 5,
        title: { id: 'Waktu Santai, Belanja Buah Tangan & Pengantaran Bandara', en: 'Slow Morning, Keepsake Shopping & Airport Transfer' },
        activities: {
          id: [
            'Sarapan pagi terakhir & proses check-out santai',
            'Makan siang & belanja oleh-oleh khas Bali sebelum diantar ke Bandara Ngurah Rai',
          ],
          en: [
            'Leisurely final breakfast & check-out',
            'Farewell lunch & souvenir stop before private airport drop-off',
          ],
        },
      },
    ],
    pricingTable: [
      {
        id: 'tier-hny5-4star',
        tierName: { id: 'Paket 4 Malam Hotel Romantis Bintang 4 (★4)', en: '4 Nights Romantic 4-Star Hotel (★4)' },
        brackets: [
          { paxLabel: { id: 'Harga / Pasangan (2 Pax)', en: 'Rate / Couple (2 Pax)' }, pricePerPax: 8950000 },
        ],
      },
      {
        id: 'tier-hny5-combo',
        tierName: { id: 'Kombinasi 2 Malam Hotel ★4 + 2 Malam Private Pool Villa', en: 'Combo: 2N 4-Star Hotel + 2N Private Pool Villa' },
        brackets: [
          { paxLabel: { id: 'Harga / Pasangan (2 Pax)', en: 'Rate / Couple (2 Pax)' }, pricePerPax: 10850000 },
        ],
      },
      {
        id: 'tier-hny5-villa',
        tierName: { id: 'Full 4 Malam One-Bedroom Private Pool Villa (Ubud + Seminyak)', en: 'Full 4 Nights Private Pool Villa (2N Ubud + 2N Seminyak)' },
        brackets: [
          { paxLabel: { id: 'Harga / Pasangan (2 Pax)', en: 'Rate / Couple (2 Pax)' }, pricePerPax: 12750000 },
        ],
      },
    ],
    importantNotes: {
      id: [
        'Harga di atas sudah mencakup keseluruhan biaya untuk 1 pasangan (2 orang).',
        'Rute Nusa Penida pada Hari ke-3 dapat ditukar dengan Ubud Nature & Romantic Jungle Dinner bila tidak ingin menyeberang laut.',
      ],
      en: [
        'Rates displayed cover the entire package for 1 couple (2 adults).',
        'Prefer skipping boat travel? Day 3 Nusa Penida can be swapped for Ubud Highlands & Valley Dining.',
      ],
    },
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    ],
    recommendedHotelAreas: ['Ubud', 'Seminyak', 'Jimbaran'],
    featured: false,
  },
];
