import { TourPackage } from '../../core/models/package.model';

export const BUDGET_PACKAGES: TourPackage[] = [
  {
    id: 'bdg-2h1m',
    slug: 'paket-tour-bali-hemat-2h1m',
    code: 'BP-HMT-21',
    title: {
      id: 'Paket Tour Bali Hemat 2 Hari 1 Malam (2H1M)',
      en: 'Value Bali Private Tour 2 Days 1 Night (2D1N)',
    },
    tagline: {
      id: 'Liburan singkat super ekonomis tetap menggunakan mobil privat: Pantai Melasti, Uluwatu, Jimbaran & Tanah Lot.',
      en: 'Pocket-friendly 2D1N getaway with 100% private car covering Melasti Beach, Uluwatu, Jimbaran & Tanah Lot.',
    },
    description: {
      id: 'Ingin berlibur singkat ke Bali dengan anggaran efisien namun tetap mengutamakan privasi? Paket Tour Bali Hemat 2H1M memberikan fasilitas mobil ber-AC privat penuh (tidak digabung tamu lain) serta tiket masuk destinasi populer seperti Pantai Melasti, Pura Uluwatu, dan Tanah Lot, dengan pengaturan konsumsi fleksibel yang hemat biaya.',
      en: 'Want a quick Bali escape on a smart budget without sacrificing privacy? Our 2D1N Value Package gives you a 100% private AC car and driver plus admission tickets to top sights like Melasti Beach, Uluwatu, and Tanah Lot while keeping dining flexible and economical.',
    },
    destination: 'Pantai Melasti, Uluwatu, Kuta & Tanah Lot',
    duration: {
      id: '2 Hari 1 Malam',
      en: '2 Days 1 Night',
    },
    durationDays: 2,
    price: 790000,
    priceUnit: {
      id: '/ orang',
      en: '/ person',
    },
    category: 'budget',
    badge: {
      id: 'Super Hemat',
      en: 'Smart Value',
    },
    minParticipants: {
      id: 'Minimal 2 orang (Private Car)',
      en: 'Minimum 2 pax (Private Car)',
    },
    highlights: {
      id: [
        'Tetap 100% Private Tour — kendaraan khusus rombongan Anda sendiri',
        'Tebing kapur eksotis Pantai Melasti / Pantai Pandawa',
        'Panorama senja Pura Luhur Uluwatu & kunjungan Pantai Jimbaran',
        'Ikon Pura Tanah Lot & pusat oleh-oleh Krisna / Joger Bali',
      ],
      en: [
        'Still 100% Private Tour — vehicle exclusively for your group',
        'Turquoise waters and limestone cliffs of Melasti or Pandawa Beach',
        'Sunset ocean views at Uluwatu Temple & Jimbaran Bay visit',
        'Iconic Tanah Lot Temple & souvenir stop at Krisna / Joger',
      ],
    },
    inclusions: {
      id: [
        'Mobil ber-AC privat bersih selama 2 hari + pengemudi ramah & BBM',
        'Menginap 1 malam di Hotel Budget Nyaman ★2/★3 (untuk opsi +Hotel)',
        'Sarapan pagi di hotel 1x (untuk opsi +Hotel)',
        'Tiket masuk seluruh objek wisata sesuai jadwal program',
        'Biaya parkir kendaraan dan air mineral dingin harian',
      ],
      en: [
        '2 days private AC car + friendly driver & fuel',
        '1 night stay at a clean 2/3-Star Budget Hotel (for +Hotel option)',
        '1x hotel breakfast (for +Hotel option)',
        'All sightseeing entrance tickets listed in the itinerary',
        'Parking fees and daily chilled bottled water',
      ],
    },
    exclusions: {
      id: [
        'Makan siang & makan malam (sopir siap mengantar ke kuliner enak & terjangkau)',
        'Tiket pesawat PP & pengeluaran pribadi peserta',
      ],
      en: [
        'Lunches & dinners (driver happily recommends great affordable local eateries)',
        'Flight tickets & personal expenses',
      ],
    },
    childPolicy: {
      id: [
        'Balita < 3 tahun: Gratis.',
        'Anak usia 3–10 tahun tanpa extra bed: 50% dari harga dewasa.',
      ],
      en: [
        'Infants under 3 years: Free of charge.',
        'Children aged 3–10 years sharing bed: 50% of adult rate.',
      ],
    },
    itinerary: [
      {
        day: 1,
        title: { id: 'Penjemputan Bandara, Pantai Melasti, Pura Uluwatu & Check-in', en: 'Airport Pickup, Melasti Beach, Uluwatu Sunset & Check-in' },
        activities: {
          id: [
            'Penjemputan di Bandara Ngurah Rai sesuai jadwal kedatangan',
            'Singgah makan siang mandiri di warung kuliner populer Bali',
            'Menjelajahi keindahan Pantai Melasti Ungasan & Pura Luhur Uluwatu',
            'Singgah di kawasan Pantai Jimbaran / Kuta lalu check-in hotel',
          ],
          en: [
            'Private pickup at Ngurah Rai Airport aligned with your flight',
            'Stop for affordable local Balinese lunch',
            'Explore scenic Melasti Beach cliffs & Uluwatu Temple sunset',
            'Evening stop near Jimbaran / Kuta before hotel check-in',
          ],
        },
      },
      {
        day: 2,
        title: { id: 'Pura Tanah Lot, Agrowisata Kopi, Oleh-Oleh & Bandara', en: 'Tanah Lot Sea Temple, Coffee Stop, Souvenirs & Airport' },
        activities: {
          id: [
            'Sarapan pagi di hotel & check-out',
            'Mengunjungi Pura Tanah Lot & mencicipi kopi lokal Bali',
            'Berbelanja buah tangan di Krisna Oleh-Oleh Bali',
            'Pengantaran tepat waktu menuju Bandara Ngurah Rai',
          ],
          en: [
            'Hotel breakfast & check-out',
            'Visit iconic Tanah Lot Temple & local coffee tasting garden',
            'Souvenir shopping at Krisna Bali',
            'Timely drop-off at Ngurah Rai International Airport',
          ],
        },
      },
    ],
    pricingTable: [
      {
        id: 'tier-bdg2-land',
        tierName: { id: 'Paket Hemat Tanpa Hotel (Land Tour)', en: 'Value Land Tour (No Hotel)' },
        brackets: [
          { paxLabel: { id: '2–3 Orang', en: '2–3 Pax' }, pricePerPax: 950000 },
          { paxLabel: { id: '4–6 Orang', en: '4–6 Pax' }, pricePerPax: 840000 },
          { paxLabel: { id: '7–10 Orang', en: '7–10 Pax' }, pricePerPax: 790000 },
        ],
      },
      {
        id: 'tier-bdg2-hotel',
        tierName: { id: 'Paket Hemat + Hotel Nyaman (★3)', en: 'Value Package + Cozy 3-Star Hotel' },
        hotelsExample: { id: '1 Malam di Pop! Kuta / Favehotel / Neo Jelantik atau setaraf', en: '1 Night at Pop! Kuta / Favehotel / Neo Jelantik or similar' },
        brackets: [
          { paxLabel: { id: '2–3 Orang', en: '2–3 Pax' }, pricePerPax: 1220000 },
          { paxLabel: { id: '4–6 Orang', en: '4–6 Pax' }, pricePerPax: 1110000 },
          { paxLabel: { id: '7–10 Orang', en: '7–10 Pax' }, pricePerPax: 1050000 },
        ],
      },
    ],
    importantNotes: {
      id: [
        'Pengaturan makan siang dan malam dibuat fleksibel (bayar sendiri di tempat) agar Anda bebas menyesuaikan selera dan budget kuliner.',
      ],
      en: [
        'Lunches and dinners are kept flexible (pay-as-you-order) so your group has complete freedom over culinary preferences and budget.',
      ],
    },
    images: [
      'https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    ],
    recommendedHotelAreas: ['Seminyak', 'Jimbaran'],
    featured: false,
  },
  {
    id: 'bdg-3h2m',
    slug: 'paket-tour-bali-hemat-3h2m',
    code: 'BP-HMT-32',
    title: {
      id: 'Paket Tour Bali Hemat 3 Hari 2 Malam (3H2M)',
      en: 'Value Bali Private Tour 3 Days 2 Nights (3D2N)',
    },
    tagline: {
      id: 'Pilihan hemat paling laris: keliling Bedugul, Tanah Lot, Pantai Melasti, Uluwatu & Kuta dengan biaya bersahabat.',
      en: 'Top-selling budget 3D2N tour covering Bedugul, Tanah Lot, Melasti Beach, Uluwatu & Kuta with private car.',
    },
    description: {
      id: 'Solusi cerdas bagi sahabat, mahasiswa, maupun keluarga muda yang menginginkan liburan 3 Hari 2 Malam lengkap ke destinasi ikonik Bali dengan biaya sangat hemat. Seluruh transportasi privat, bahan bakar, parkir, dan tiket masuk objek wisata sudah ditanggung — termasuk bonus 1x Makan Malam Seafood di Pantai Jimbaran!',
      en: 'A smart, affordable 3D2N holiday ideal for friends, young travelers, and budget-conscious families. Covers all private AC transport, fuel, parking, and attraction tickets across Bedugul, Tanah Lot, and South Bali — plus 1x included Beachfront Seafood Dinner in Jimbaran!',
    },
    destination: 'Bedugul, Tanah Lot, Pantai Melasti, Uluwatu & Jimbaran',
    duration: {
      id: '3 Hari 2 Malam',
      en: '3 Days 2 Nights',
    },
    durationDays: 3,
    price: 1190000,
    priceUnit: {
      id: '/ orang',
      en: '/ person',
    },
    category: 'budget',
    badge: {
      id: 'Hemat Terlaris',
      en: 'Best Value 3D2N',
    },
    minParticipants: {
      id: 'Minimal 2 orang (Private Car)',
      en: 'Minimum 2 pax (Private Car)',
    },
    highlights: {
      id: [
        'Sudah termasuk 1x Makan Malam Seafood di tepi Pantai Jimbaran',
        'Pura Ulun Danu Beratan Bedugul & Sunset Pura Tanah Lot',
        'Pantai Melasti Ungasan, Pura Luhur Uluwatu & kawasan Pantai Kuta',
        '100% Mobil Privat Ber-AC + Sopir Ramah & Tiket Masuk Wisata',
      ],
      en: [
        'Includes 1x Beachfront Grilled Seafood Dinner on Jimbaran Beach',
        'Ulun Danu Beratan Lake Temple in Bedugul & Tanah Lot Sunset',
        'Melasti Beach white cliffs, Uluwatu Temple & Kuta Beach area',
        '100% Private AC Car + Friendly Driver & All Entrance Tickets',
      ],
    },
    inclusions: {
      id: [
        'Mobil ber-AC privat penuh selama 3 hari + pengemudi & BBM',
        'Menginap 2 malam di Hotel Nyaman ★3 Kuta/Legian (untuk opsi +Hotel)',
        '2x sarapan pagi di hotel (untuk opsi +Hotel)',
        '1x Makan Malam BBQ Seafood di Pantai Jimbaran',
        'Tiket masuk seluruh objek wisata sesuai jadwal program',
        'Biaya parkir kendaraan dan air mineral dingin harian',
      ],
      en: [
        '3 days private AC vehicle + driver-guide & fuel',
        '2 nights stay at a comfortable 3-Star Hotel in Kuta/Legian (+Hotel tier)',
        '2x hotel breakfasts (+Hotel tier)',
        '1x Beachfront BBQ Seafood Dinner on Jimbaran Beach',
        'All attraction entrance fees per itinerary',
        'All parking charges and daily chilled bottled water',
      ],
    },
    exclusions: {
      id: [
        'Makan siang harian (sopir mengantar ke tempat makan favorit & ramah kantong)',
        'Tiket pesawat PP & pengeluaran pribadi',
      ],
      en: [
        'Daily lunches (flexible stops at tasty, budget-friendly local restaurants)',
        'Flight tickets & personal shopping expenses',
      ],
    },
    childPolicy: {
      id: [
        'Balita < 3 tahun: Gratis.',
        'Anak usia 3–10 tahun tanpa extra bed: 50% dari harga dewasa.',
      ],
      en: [
        'Infants under 3 years: Free of charge.',
        'Children aged 3–10 years without extra bed: 50% of adult rate.',
      ],
    },
    itinerary: [
      {
        day: 1,
        title: { id: 'Penjemputan Bandara, Pantai Melasti, Uluwatu & Dinner Jimbaran', en: 'Airport Arrival, Melasti Beach, Uluwatu & Jimbaran Dinner' },
        activities: {
          id: [
            'Penjemputan privat di Bandara Ngurah Rai Bali',
            'Mengunjungi keindahan tebing kapur Pantai Melasti & Pura Uluwatu',
            'Makan malam Seafood Bakar di tepi Pantai Jimbaran (Termasuk Paket)',
            'Check-in hotel dan waktu istirahat',
          ],
          en: [
            'Private pickup at Ngurah Rai International Airport',
            'Explore Melasti Beach coastal cliffs & Uluwatu Temple',
            'Included Beachfront Seafood Dinner on Jimbaran Beach',
            'Check-in to your hotel and relax',
          ],
        },
      },
      {
        day: 2,
        title: { id: 'Pura Ulun Danu Bedugul, Kebun Kopi & Sunset Pura Tanah Lot', en: 'Ulun Danu Bedugul, Coffee Garden & Tanah Lot Sunset' },
        activities: {
          id: [
            'Sarapan pagi di hotel & berangkat pukul 08.30 WITA',
            'Menikmati udara sejuk & berfoto di Pura Ulun Danu Beratan Bedugul',
            'Singgah mencicipi kopi dan cokelat hangat di Agrowisata Baturiti',
            'Menyaksikan panorama senja di Pura Tanah Lot sebelum kembali ke hotel',
          ],
          en: [
            'Hotel breakfast & 08:30 AM departure',
            'Enjoy cool mountain air & lakeside views at Ulun Danu Beratan Bedugul',
            'Complimentary coffee and herbal tea tasting in Baturiti',
            'Golden sunset views at Tanah Lot Temple before returning to hotel',
          ],
        },
      },
      {
        day: 3,
        title: { id: 'Jalan Santai Pantai Kuta, Pusat Oleh-Oleh & Bandara', en: 'Kuta Beach Stroll, Souvenir Shopping & Airport Transfer' },
        activities: {
          id: [
            'Sarapan pagi di hotel & check-out',
            'Jalan santai di kawasan Pantai Kuta / Beachwalk',
            'Berbelanja buah tangan lengkap di Krisna / Joger Bali',
            'Pengantaran tepat waktu menuju Bandara Ngurah Rai',
          ],
          en: [
            'Hotel breakfast & check-out',
            'Morning stroll around Kuta Beach / Beachwalk promenade',
            'Souvenir shopping at Krisna or Joger Bali',
            'Punctual drop-off at Ngurah Rai International Airport',
          ],
        },
      },
    ],
    pricingTable: [
      {
        id: 'tier-bdg3-land',
        tierName: { id: 'Paket Hemat Tanpa Hotel (Land Tour)', en: 'Value Land Tour (No Hotel)' },
        brackets: [
          { paxLabel: { id: '2–3 Orang', en: '2–3 Pax' }, pricePerPax: 1390000 },
          { paxLabel: { id: '4–6 Orang', en: '4–6 Pax' }, pricePerPax: 1260000 },
          { paxLabel: { id: '7–10 Orang', en: '7–10 Pax' }, pricePerPax: 1190000 },
        ],
      },
      {
        id: 'tier-bdg3-hotel',
        tierName: { id: 'Paket Hemat + Hotel Bintang 3 (★3)', en: 'Value Package + 3-Star Hotel (★3)' },
        hotelsExample: { id: '2 Malam di Favehotel / Neo Jelantik / Quest San atau setaraf', en: '2 Nights at Favehotel / Neo Jelantik / Quest San or similar' },
        brackets: [
          { paxLabel: { id: '2–3 Orang', en: '2–3 Pax' }, pricePerPax: 1920000 },
          { paxLabel: { id: '4–6 Orang', en: '4–6 Pax' }, pricePerPax: 1780000 },
          { paxLabel: { id: '7–10 Orang', en: '7–10 Pax' }, pricePerPax: 1690000 },
        ],
      },
    ],
    importantNotes: {
      id: [
        'Sangat cocok untuk liburan grup sahabat 4–8 orang karena biaya per orang menjadi jauh lebih hemat.',
      ],
      en: [
        'Ideal for small groups of 4–8 friends or family members seeking maximum value per person.',
      ],
    },
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1200&q=80',
    ],
    recommendedHotelAreas: ['Seminyak', 'Sanur'],
    featured: true,
  },
  {
    id: 'bdg-4h3m',
    slug: 'paket-tour-bali-hemat-4h3m',
    code: 'BP-HMT-43',
    title: {
      id: 'Paket Tour Bali Hemat 4 Hari 3 Malam (4H3M)',
      en: 'Value Bali Private Tour 4 Days 3 Nights (4D3N)',
    },
    tagline: {
      id: 'Puas 4 hari keliling Bedugul, Tanah Lot, Kintamani, Desa Penglipuran, Ubud & Pantai Selatan dengan tarif hemat.',
      en: '4 full days exploring Bedugul, Tanah Lot, Kintamani, Penglipuran, Ubud & South Bali at an unbeatable rate.',
    },
    description: {
      id: 'Nikmati liburan panjang 4 Hari 3 Malam yang mencakup hampir seluruh objek wisata populer Pulau Bali tanpa menguras kantong. Menggunakan mobil privat ber-AC penuh selama 4 hari, tiket wisata lengkap, serta bonus 1x Makan Malam Seafood Pantai Jimbaran.',
      en: 'Enjoy an extended 4-day, 3-night Bali holiday covering north, central, and southern landmarks without stretching your budget. Includes 4 days of private AC transport, all listed entrance fees, and 1x Beachfront Jimbaran Seafood Dinner.',
    },
    destination: 'Bedugul, Tanah Lot, Kintamani, Penglipuran, Ubud & Uluwatu',
    duration: {
      id: '4 Hari 3 Malam',
      en: '4 Days 3 Nights',
    },
    durationDays: 4,
    price: 1590000,
    priceUnit: {
      id: '/ orang',
      en: '/ person',
    },
    category: 'budget',
    badge: {
      id: 'Puas & Ekonomis',
      en: 'Extended Value',
    },
    minParticipants: {
      id: 'Minimal 2 orang (Private Car)',
      en: 'Minimum 2 pax (Private Car)',
    },
    highlights: {
      id: [
        'Danau Beratan Bedugul & Sunset Pura Tanah Lot',
        'Panorama Gunung Batur Kintamani, Desa Penglipuran & Terasering Ubud',
        'Pantai Melasti, Pura Luhur Uluwatu & 1x Dinner Seafood Jimbaran',
        'Transportasi Privat Ber-AC 4 Hari Penuh + Seluruh Tiket Wisata',
      ],
      en: [
        'Ulun Danu Beratan Lake Temple & Tanah Lot Sunset',
        'Mount Batur Kintamani vista, Penglipuran Village & Ubud Terraces',
        'Melasti Beach cliffs, Uluwatu Temple & 1x Jimbaran Seafood Dinner',
        '4 Full Days Private AC Vehicle + All Listed Entrance Tickets',
      ],
    },
    inclusions: {
      id: [
        'Mobil ber-AC privat penuh selama 4 hari + pengemudi & BBM',
        'Menginap 3 malam di Hotel Nyaman ★3 (untuk opsi +Hotel)',
        '3x sarapan pagi di hotel (untuk opsi +Hotel)',
        '1x Makan Malam BBQ Seafood di Pantai Jimbaran',
        'Tiket masuk seluruh objek wisata sesuai jadwal program',
        'Biaya parkir kendaraan dan air mineral dingin harian',
      ],
      en: [
        '4 days private AC vehicle + driver-guide & fuel',
        '3 nights stay at a cozy 3-Star Hotel (for +Hotel option)',
        '3x hotel breakfasts (for +Hotel option)',
        '1x Beachfront BBQ Seafood Dinner on Jimbaran Beach',
        'All attraction admission fees per itinerary',
        'All parking charges and daily chilled mineral water',
      ],
    },
    exclusions: {
      id: [
        'Makan siang harian & makan malam hari ke-2/3 (fleksibel sesuai selera)',
        'Tiket pesawat PP & pengeluaran belanja pribadi',
      ],
      en: [
        'Daily lunches & non-listed dinners (flexible local dining stops)',
        'Round-trip flights & personal shopping expenses',
      ],
    },
    childPolicy: {
      id: [
        'Balita < 3 tahun: Gratis.',
        'Anak usia 3–10 tahun tanpa extra bed: 50% dari harga dewasa.',
      ],
      en: [
        'Infants under 3 years: Free of charge.',
        'Children aged 3–10 years without extra bed: 50% of adult rate.',
      ],
    },
    itinerary: [
      {
        day: 1,
        title: { id: 'Penjemputan Bandara, Pantai Melasti, Uluwatu & Dinner Jimbaran', en: 'Airport Arrival, Melasti Beach, Uluwatu & Jimbaran Dinner' },
        activities: {
          id: [
            'Penjemputan di Bandara Ngurah Rai Bali',
            'Mengunjungi Pantai Melasti Ungasan & Pura Luhur Uluwatu',
            'Makan malam Seafood di tepi Pantai Jimbaran & check-in hotel',
          ],
          en: [
            'Pickup at Ngurah Rai International Airport',
            'Visit Melasti Beach cliffs & Uluwatu Temple',
            'Included Jimbaran Beach Seafood Dinner & hotel check-in',
          ],
        },
      },
      {
        day: 2,
        title: { id: 'Danau Beratan Bedugul, Agrowisata Kopi & Sunset Tanah Lot', en: 'Ulun Danu Bedugul, Coffee Garden & Tanah Lot Sunset' },
        activities: {
          id: [
            'Sarapan hotel, perjalanan menuju Pura Ulun Danu Beratan Bedugul',
            'Singgah di Agrowisata Kopi Baturiti & menikmati sore di Pura Tanah Lot',
          ],
          en: [
            'Hotel breakfast, scenic drive to Ulun Danu Beratan Temple',
            'Balinese coffee garden tasting & sunset at Tanah Lot Temple',
          ],
        },
      },
      {
        day: 3,
        title: { id: 'Desa Penglipuran, Panorama Kintamani & Terasering Sawah Ubud', en: 'Penglipuran Village, Kintamani Volcano & Ubud Terraces' },
        activities: {
          id: [
            'Sarapan pagi di hotel lalu menyusuri keasrian Desa Adat Penglipuran',
            'Menikmati pemandangan kaldera Gunung & Danau Batur Kintamani',
            'Berfoto di Terasering Sawah Tegallalang Ubud sebelum kembali ke hotel',
          ],
          en: [
            'Hotel breakfast followed by cultural walk in Penglipuran Village',
            'Take in sweeping volcano views of Mount Batur in Kintamani',
            'Explore Tegallalang Rice Terraces in Ubud before returning',
          ],
        },
      },
      {
        day: 4,
        title: { id: 'Pantai Kuta, Pusat Oleh-Oleh Khas Bali & Pengantaran Bandara', en: 'Kuta Coast, Souvenir Shopping & Airport Departure' },
        activities: {
          id: [
            'Sarapan hotel & check-out santai',
            'Jalan pagi di kawasan Pantai Kuta & belanja oleh-oleh di Krisna / Joger',
            'Pengantaran tepat waktu menuju Bandara Ngurah Rai',
          ],
          en: [
            'Hotel breakfast & check-out',
            'Morning stop near Kuta Beach & souvenir shopping at Krisna / Joger',
            'Punctual drop-off at Ngurah Rai International Airport',
          ],
        },
      },
    ],
    pricingTable: [
      {
        id: 'tier-bdg4-land',
        tierName: { id: 'Paket Hemat Tanpa Hotel (Land Tour)', en: 'Value Land Tour (No Hotel)' },
        brackets: [
          { paxLabel: { id: '2–3 Orang', en: '2–3 Pax' }, pricePerPax: 1850000 },
          { paxLabel: { id: '4–6 Orang', en: '4–6 Pax' }, pricePerPax: 1690000 },
          { paxLabel: { id: '7–10 Orang', en: '7–10 Pax' }, pricePerPax: 1590000 },
        ],
      },
      {
        id: 'tier-bdg4-hotel',
        tierName: { id: 'Paket Hemat + Hotel Bintang 3 (★3)', en: 'Value Package + 3-Star Hotel (★3)' },
        hotelsExample: { id: '3 Malam di Favehotel / Neo Jelantik / Quest San atau setaraf', en: '3 Nights at Favehotel / Neo Jelantik / Quest San or similar' },
        brackets: [
          { paxLabel: { id: '2–3 Orang', en: '2–3 Pax' }, pricePerPax: 2650000 },
          { paxLabel: { id: '4–6 Orang', en: '4–6 Pax' }, pricePerPax: 2450000 },
          { paxLabel: { id: '7–10 Orang', en: '7–10 Pax' }, pricePerPax: 2320000 },
        ],
      },
    ],
    importantNotes: {
      id: [
        'Ingin upgrade hotel ke Bintang 4 namun tetap memakai skema Paket Hemat? Hubungi admin kami melalui WhatsApp untuk simulasi cepat.',
      ],
      en: [
        'Want to upgrade your stay to a 4-Star Hotel while keeping this value tour structure? Message our admin on WhatsApp anytime.',
      ],
    },
    images: [
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    ],
    recommendedHotelAreas: ['Seminyak', 'Ubud'],
    featured: false,
  },
];
