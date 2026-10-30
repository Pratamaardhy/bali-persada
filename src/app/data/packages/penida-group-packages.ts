import { TourPackage } from '../../core/models/package.model';

export const PENIDA_GROUP_PACKAGES: TourPackage[] = [
  {
    id: 'pnd-west',
    slug: 'paket-nusa-penida-barat-1-hari',
    code: 'BP-PND-W',
    title: {
      id: 'Paket Tour 1 Hari Nusa Penida Barat',
      en: 'West Nusa Penida One-Day Island Tour',
    },
    tagline: {
      id: 'Ikon paling populer Nusa Penida: tebing T-Rex Kelingking Beach, Broken Beach, Angel’s Billabong & Crystal Bay.',
      en: 'Nusa Penida’s iconic west coast: Kelingking T-Rex Cliff, Broken Beach, Angel’s Billabong & Crystal Bay.',
    },
    description: {
      id: 'Jelajahi empat keajaiban pesisir barat Nusa Penida dalam perjalanan satu hari penuh pulang-pergi menggunakan Fast Boat nyaman dari Pelabuhan Sanur. Setibanya di pulau, Anda langsung disambut pengemudi lokal privat yang siap mengantar sekaligus membantu mengambil foto terbaik di Kelingking Beach, Broken Beach, Angel’s Billabong, dan Crystal Bay.',
      en: 'Discover the four legendary wonders of West Nusa Penida on a seamless round-trip day tour by Fast Boat from Sanur Harbour. Upon arrival, travel comfortably in a private AC car with a local driver-guide who assists with scenic photos at Kelingking Beach, Broken Beach, Angel’s Billabong, and Crystal Bay.',
    },
    destination: 'Nusa Penida Barat (Kelingking, Broken Beach, Angel’s Billabong, Crystal Bay)',
    duration: {
      id: '1 Hari Penuh (06.30–17.30)',
      en: 'Full Day (06:30–17:30)',
    },
    durationDays: 1,
    price: 750000,
    priceUnit: {
      id: '/ orang',
      en: '/ person',
    },
    category: 'penida',
    badge: {
      id: 'Penida Terfavorit',
      en: 'Most Popular Penida',
    },
    minParticipants: {
      id: 'Minimal 2 orang (Mobil Pulau Privat)',
      en: 'Minimum 2 pax (Private Island Car)',
    },
    highlights: {
      id: [
        'Tiket Fast Boat PP (Sanur – Nusa Penida – Sanur) resmi & berasuransi',
        'Mobil ber-AC privat khusus grup Anda di Pulau Nusa Penida',
        'Kelingking Beach — panorama tebing batu kapur berbentuk T-Rex yang mendunia',
        'Broken Beach (Pasih Uug) & kolam karang alami Angel’s Billabong',
        'Pantai pasir putih Crystal Bay & makan siang restoran lokal pulau',
      ],
      en: [
        'Official insured round-trip Fast Boat tickets (Sanur – Nusa Penida – Sanur)',
        'Private AC island vehicle exclusively for your group on Nusa Penida',
        'Kelingking Beach — world-famous T-Rex coastal cliff viewpoint',
        'Broken Beach natural archway & Angel’s Billabong tidal infinity pool',
        'Crystal Bay palm-lined beach & lunch at a local island restaurant',
      ],
    },
    inclusions: {
      id: [
        'Antar-jemput hotel Bali ke Pelabuhan Sanur PP (untuk opsi Termasuk Shuttle Bali)',
        'Tiket Fast Boat Sanur – Nusa Penida pulang-pergi',
        'Mobil ber-AC privat di Nusa Penida + sopir merangkap fotografer & BBM',
        'Retribusi masuk pulau & seluruh tiket objek wisata Nusa Penida Barat',
        'Makan siang 1x di restoran lokal Nusa Penida + air mineral',
      ],
      en: [
        'Return hotel transfers to Sanur Harbour (for Mainland Shuttle tier)',
        'Round-trip Fast Boat crossing (Sanur – Nusa Penida)',
        'Private AC car on Nusa Penida + driver/photo assistant & fuel',
        'Official island entry levy & all West Nusa Penida site admissions',
        '1x lunch at a clean local island restaurant + bottled water',
      ],
    },
    exclusions: {
      id: [
        'Pengeluaran pribadi peserta, kelapa muda, atau camilan tambahan',
        'Tipping sukarela untuk sopir lokal Nusa Penida',
      ],
      en: [
        'Personal drinks/snacks beyond scheduled lunch meal',
        'Voluntary tipping for local island driver-guide',
      ],
    },
    childPolicy: {
      id: [
        'Balita < 3 tahun: Gratis (dipangku di Fast Boat).',
        'Anak usia 3–10 tahun: Dikenakan 75% dari tarif dewasa.',
      ],
      en: [
        'Infants under 3 years: Free of charge (lap-seated on Fast Boat).',
        'Children aged 3–10 years: 75% of adult rate.',
      ],
    },
    itinerary: [
      {
        day: 1,
        title: { id: 'Pelabuhan Sanur, Kelingking, Broken Beach, Angel’s Billabong & Crystal Bay', en: 'Sanur Crossing, Kelingking, Broken Beach, Angel’s Billabong & Crystal Bay' },
        activities: {
          id: [
            '06.30 — Penjemputan dari hotel area Bali Selatan menuju Pelabuhan Baru Sanur',
            '07.30 — Check-in tiket & keberangkatan Fast Boat menuju Nusa Penida (~40 menit)',
            '09.30 — Menikmati panorama spektakuler tebing Kelingking Beach',
            '11.30 — Mengunjungi lengkungan karang Broken Beach & Angel’s Billabong',
            '13.00 — Makan siang nyaman di restoran lokal Nusa Penida',
            '14.30 — Bersantai di tepi Pantai Crystal Bay',
            '16.30 — Fast Boat bertolak kembali ke Pelabuhan Sanur & diantar ke hotel',
          ],
          en: [
            '06:30 — Hotel pickup in South Bali & transfer to Sanur Harbour terminal',
            '07:30 — Boarding & 40-minute Fast Boat crossing to Nusa Penida',
            '09:30 — Capture sweeping cliff views at iconic Kelingking Beach',
            '11:30 — Explore Broken Beach sea arch & Angel’s Billabong rock pool',
            '13:00 — Enjoy Indonesian lunch at a local island restaurant',
            '14:30 — Relax along the palm-fringed sands of Crystal Bay',
            '16:30 — Return Fast Boat to Sanur Harbour & transfer back to hotel',
          ],
        },
      },
    ],
    pricingTable: [
      {
        id: 'tier-pndw-full',
        tierName: { id: 'Paket Lengkap (Termasuk Antar-Jemput Hotel Bali ke Sanur PP)', en: 'Full Door-to-Door (Includes Bali Hotel – Sanur Transfers)' },
        brackets: [
          { paxLabel: { id: '2 Orang', en: '2 Pax' }, pricePerPax: 950000 },
          { paxLabel: { id: '3–4 Orang', en: '3–4 Pax' }, pricePerPax: 840000 },
          { paxLabel: { id: '5–8 Orang', en: '5–8 Pax' }, pricePerPax: 780000 },
        ],
      },
      {
        id: 'tier-pndw-port',
        tierName: { id: 'Meeting Point Pelabuhan Sanur (Tanpa Jemputan Hotel Bali)', en: 'Meet at Sanur Harbour Terminal (Self-Transfer to Port)' },
        brackets: [
          { paxLabel: { id: '2 Orang', en: '2 Pax' }, pricePerPax: 830000 },
          { paxLabel: { id: '3–4 Orang', en: '3–4 Pax' }, pricePerPax: 775000 },
          { paxLabel: { id: '5–8 Orang', en: '5–8 Pax' }, pricePerPax: 750000 },
        ],
      },
    ],
    importantNotes: {
      id: [
        'Gunakan sepatu kets / sandal gunung yang nyaman serta tabir surya (sunblock) dan topi.',
      ],
      en: [
        'Wear comfortable walking shoes/strapped sandals and bring sunscreen, sunglasses, and a hat.',
      ],
    },
    images: [
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    ],
    recommendedHotelAreas: ['Sanur', 'Seminyak'],
    featured: true,
  },
  {
    id: 'pnd-east',
    slug: 'paket-nusa-penida-timur-1-hari',
    code: 'BP-PND-E',
    title: {
      id: 'Paket Tour 1 Hari Nusa Penida Timur',
      en: 'East Nusa Penida One-Day Island Tour',
    },
    tagline: {
      id: 'Kemilau pasir putih Diamond Beach, Atuh Beach, panorama Raja Lima Rumah Pohon Molenteng & Bukit Teletubbies.',
      en: 'Sparkling white sands of Diamond Beach, Atuh Beach, Raja Lima Molenteng Treehouse & Teletubbies Hills.',
    },
    description: {
      id: 'Sisi timur Pulau Nusa Penida menawarkan pemandangan bahari yang tak kalah memukau dan dramatis. Susuri anak tangga tebing batu putih di Diamond Beach yang berair biru jernih, nikmati gugusan pulau karang Raja Lima (Pulau Seribu) dari gardu pandang Rumah Pohon Molenteng, serta perbukitan hijau Bukit Teletubbies.',
      en: 'Nusa Penida’s eastern coastline boasts breathtaking cliff-carved stairways and turquoise coves. Marvel at the jewel-toned waters of Diamond Beach and Atuh Beach, gaze over the Raja Lima (Thousand Islands) islets near Molenteng Treehouse, and pass the rolling green mounds of Teletubbies Hills.',
    },
    destination: 'Nusa Penida Timur (Diamond Beach, Atuh Beach, Raja Lima, Bukit Teletubbies)',
    duration: {
      id: '1 Hari Penuh (06.30–17.30)',
      en: 'Full Day (06:30–17:30)',
    },
    durationDays: 1,
    price: 780000,
    priceUnit: {
      id: '/ orang',
      en: '/ person',
    },
    category: 'penida',
    badge: {
      id: 'Spot Foto Eksotis',
      en: 'Photogenic East Coast',
    },
    minParticipants: {
      id: 'Minimal 2 orang (Mobil Pulau Privat)',
      en: 'Minimum 2 pax (Private Island Car)',
    },
    highlights: {
      id: [
        'Diamond Beach — tangga tebing ikonik dengan hamparan laut biru toska',
        'Atuh Beach — teluk pasir putih tenang diapit tebing karang megah',
        'Gardu Pandang Raja Lima (Pulau Seribu) & kawasan Rumah Pohon Molenteng',
        'Hamparan perbukitan hijau bergelombang di Bukit Teletubbies Nusa Penida',
        'Tiket Fast Boat Sanur PP + Mobil Privat Pulau + Makan Siang',
      ],
      en: [
        'Diamond Beach — iconic carved limestone stairway above turquoise surf',
        'Atuh Beach — serene crescent bay framed by towering rock arches',
        'Raja Lima (Thousand Islands) lookout & Molenteng Treehouse vista',
        'Rolling emerald domes of Teletubbies Hills',
        'Return Sanur Fast Boat + Private Island AC Car + Local Lunch',
      ],
    },
    inclusions: {
      id: [
        'Antar-jemput hotel Bali ke Pelabuhan Sanur PP (untuk opsi Termasuk Shuttle Bali)',
        'Tiket Fast Boat Sanur – Nusa Penida PP',
        'Mobil ber-AC privat selama tour di Nusa Penida + pengemudi lokal & BBM',
        'Retribusi masuk pulau & tiket objek wisata Nusa Penida Timur',
        'Makan siang 1x di restoran lokal + air mineral dingin',
      ],
      en: [
        'Return hotel transfers to Sanur Harbour (Mainland Shuttle tier)',
        'Round-trip Fast Boat tickets (Sanur – Nusa Penida)',
        'Private AC island vehicle + local driver-guide & fuel',
        'Official island levy & East Nusa Penida attraction tickets',
        '1x island restaurant lunch + bottled drinking water',
      ],
    },
    exclusions: {
      id: [
        'Tiket naik tangga khusus foto pribadi di atas Rumah Pohon Molenteng (opsional bayar di tempat)',
        'Pengeluaran pribadi & tipping sukarela pengemudi',
      ],
      en: [
        'Optional personal photo-ticket to climb onto the wooden Molenteng Treehouse deck',
        'Personal snacks & voluntary driver tipping',
      ],
    },
    childPolicy: {
      id: [
        'Balita < 3 tahun: Gratis.',
        'Anak usia 3–10 tahun: Dikenakan 75% dari tarif dewasa.',
      ],
      en: [
        'Infants under 3 years: Free of charge.',
        'Children aged 3–10 years: 75% of adult rate.',
      ],
    },
    itinerary: [
      {
        day: 1,
        title: { id: 'Sanur Fast Boat, Raja Lima Molenteng, Diamond Beach & Bukit Teletubbies', en: 'Sanur Crossing, Raja Lima Lookout, Diamond Beach & Teletubbies Hills' },
        activities: {
          id: [
            '06.30 — Penjemputan hotel menuju Pelabuhan Sanur & penyeberangan Fast Boat 07.30',
            '09.45 — Menikmati panorama gugusan karang Raja Lima & Rumah Pohon Molenteng',
            '11.15 — Mengunjungi keindahan spektakuler Diamond Beach & Atuh Beach',
            '13.00 — Makan siang di restoran lokal pulau',
            '14.30 — Berfoto di lanskap perbukitan Bukit Teletubbies',
            '16.30 — Fast Boat kembali ke Pelabuhan Sanur & pengantaran hotel',
          ],
          en: [
            '06:30 — Hotel pickup to Sanur Harbour & 07:30 Fast Boat departure',
            '09:45 — Panoramic photo stop at Raja Lima & Molenteng Treehouse viewpoint',
            '11:15 — Explore stunning Diamond Beach stairway & Atuh Beach bay',
            '13:00 — Lunch at a local island eatery',
            '14:30 — Scenic stop across rolling Teletubbies Hills',
            '16:30 — Afternoon Fast Boat back to Sanur & hotel drop-off',
          ],
        },
      },
    ],
    pricingTable: [
      {
        id: 'tier-pnde-full',
        tierName: { id: 'Paket Lengkap (Termasuk Antar-Jemput Hotel Bali ke Sanur PP)', en: 'Full Door-to-Door (Includes Bali Hotel – Sanur Transfers)' },
        brackets: [
          { paxLabel: { id: '2 Orang', en: '2 Pax' }, pricePerPax: 980000 },
          { paxLabel: { id: '3–4 Orang', en: '3–4 Pax' }, pricePerPax: 870000 },
          { paxLabel: { id: '5–8 Orang', en: '5–8 Pax' }, pricePerPax: 810000 },
        ],
      },
      {
        id: 'tier-pnde-port',
        tierName: { id: 'Meeting Point Pelabuhan Sanur (Tanpa Jemputan Hotel Bali)', en: 'Meet at Sanur Harbour Terminal (Self-Transfer to Port)' },
        brackets: [
          { paxLabel: { id: '2 Orang', en: '2 Pax' }, pricePerPax: 860000 },
          { paxLabel: { id: '3–4 Orang', en: '3–4 Pax' }, pricePerPax: 805000 },
          { paxLabel: { id: '5–8 Orang', en: '5–8 Pax' }, pricePerPax: 780000 },
        ],
      },
    ],
    importantNotes: {
      id: [
        'Tersedia juga Paket Mix (Kombinasi Barat + Timur: Kelingking + Diamond Beach) dalam 1 hari atas permintaan via WhatsApp.',
      ],
      en: [
        'Want both coasts in one day? Ask our admin on WhatsApp for the Mix West + East (Kelingking + Diamond Beach) upgrade!',
      ],
    },
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
    ],
    recommendedHotelAreas: ['Sanur', 'Nusa Dua'],
    featured: false,
  },
  {
    id: 'pnd-snorkel',
    slug: 'paket-nusa-penida-snorkeling-1-hari',
    code: 'BP-PND-SNK',
    title: {
      id: 'Paket Tour 1 Hari Nusa Penida + Snorkeling 3 Spot',
      en: 'Nusa Penida Land Tour + 3-Spot Snorkeling Day Package',
    },
    tagline: {
      id: 'Petualangan ganda darat & bawah laut: Snorkeling Gamat Bay, Wall Point & Manta/Crystal Bay + Tour Tebing Kelingking!',
      en: 'Dual land & sea adventure: 3-spot coral snorkeling (Gamat Bay, Wall Point, Manta/Crystal Bay) + Kelingking Cliff!',
    },
    description: {
      id: 'Paket paling seru bagi pencinta wisata bahari! Pagi hari Anda akan diajak berlayar menggunakan kapal snorkeling menyusuri tiga titik terumbu karang terbaik perairan Nusa Penida lengkap dengan dokumentasi kamera bawah air (GoPro), dilanjutkan makan siang dan tour darat menggunakan mobil privat mengunjungi ikon tebing Kelingking Beach.',
      en: 'The ultimate marine adventure! Spend the morning snorkeling three crystal-clear reef bays around Nusa Penida complete with underwater GoPro documentation, followed by lunch and a private car land tour to the iconic Kelingking Beach cliff viewpoint.',
    },
    destination: 'Perairan Snorkeling Nusa Penida + Kelingking Beach',
    duration: {
      id: '1 Hari Penuh (06.30–17.30)',
      en: 'Full Day (06:30–17:30)',
    },
    durationDays: 1,
    price: 890000,
    priceUnit: {
      id: '/ orang',
      en: '/ person',
    },
    category: 'penida',
    badge: {
      id: 'Snorkeling + GoPro',
      en: 'Snorkel + GoPro',
    },
    minParticipants: {
      id: 'Minimal 2 orang',
      en: 'Minimum 2 pax',
    },
    highlights: {
      id: [
        'Sesi Snorkeling 3 Spot Terbaik (Manta Bay/Crystal Bay, Gamat Bay, Wall Point)',
        'Lengkap peralatan masker, snorkel, pelampung & dokumentasi foto/video bawah air',
        'Tour darat mobil ber-AC privat menuju tebing ikonik Kelingking Beach',
        'Tiket Fast Boat Sanur PP + Makan Siang Restoran Lokal',
      ],
      en: [
        '3-Spot Guided Snorkeling (Manta/Crystal Bay, Gamat Bay, Wall Point)',
        'Full mask, snorkel, life vest & complimentary underwater GoPro photos',
        'Afternoon private AC car land tour to Kelingking T-Rex Cliff',
        'Round-trip Sanur Fast Boat tickets + Island Restaurant Lunch',
      ],
    },
    inclusions: {
      id: [
        'Antar-jemput hotel Bali ke Pelabuhan Sanur PP (untuk opsi Termasuk Shuttle Bali)',
        'Tiket Fast Boat Sanur – Nusa Penida PP',
        'Kapal snorkeling sharing/privat, pemandu snorkeling, alat lengkap & GoPro underwater',
        'Mobil ber-AC privat untuk tour darat ke Kelingking Beach (+ Broken Beach bila waktu cukup)',
        'Makan siang 1x, retribusi pulau, tiket wisata & air mineral',
      ],
      en: [
        'Return hotel transfers to Sanur Harbour (Mainland Shuttle tier)',
        'Round-trip Fast Boat crossing (Sanur – Nusa Penida)',
        'Snorkeling boat session, guide, full gear & underwater GoPro documentation',
        'Private AC car for afternoon land tour to Kelingking Beach',
        '1x island lunch, island entry levy, attraction tickets & bottled water',
      ],
    },
    exclusions: {
      id: [
        'Handuk mandi pribadi & pakaian ganti (harap dibawa masing-masing)',
        'Pengeluaran pribadi & tipping sukarela kru/sopir',
      ],
      en: [
        'Personal bath towel & dry change of clothes (please bring your own)',
        'Personal drinks & discretionary crew/driver gratuities',
      ],
    },
    childPolicy: {
      id: [
        'Direkomendasikan untuk peserta usia 6 tahun ke atas yang nyaman beraktivitas di air.',
        'Anak usia 6–10 tahun: Dikenakan 80% dari tarif dewasa.',
      ],
      en: [
        'Recommended for guests aged 6+ comfortable with ocean water activities.',
        'Children aged 6–10 years: 80% of adult rate.',
      ],
    },
    itinerary: [
      {
        day: 1,
        title: { id: 'Fast Boat Sanur, Snorkeling 3 Spot Bahari, Makan Siang & Kelingking Beach', en: 'Sanur Fast Boat, 3-Spot Reef Snorkeling, Lunch & Kelingking Cliff' },
        activities: {
          id: [
            '06.30 — Penjemputan hotel menuju Pelabuhan Sanur & penyeberangan Fast Boat 07.30',
            '09.00 — Persiapan alat & mulai sesi Snorkeling di 3 spot jernih perairan Nusa Penida',
            '12.00 — Bilas air tawar & menikmati makan siang di restoran lokal',
            '13.30 — Tour darat menggunakan mobil privat menuju tebing Kelingking Beach',
            '16.30 — Fast Boat kembali menuju Pelabuhan Sanur & pengantaran hotel',
          ],
          en: [
            '06:30 — Hotel pickup to Sanur Harbour & 07:30 Fast Boat crossing',
            '09:00 — Gear fitting & 3-spot guided snorkeling session around Nusa Penida',
            '12:00 — Fresh-water rinse & hearty lunch at an island restaurant',
            '13:30 — Private AC car land excursion to iconic Kelingking Beach cliff',
            '16:30 — Return Fast Boat to Sanur Harbour & hotel drop-off',
          ],
        },
      },
    ],
    pricingTable: [
      {
        id: 'tier-pnds-full',
        tierName: { id: 'Paket Lengkap (Sharing Snorkel Boat + Mobil Darat Privat + Shuttle Bali)', en: 'Complete Package (Shared Snorkel Boat + Private Car + Bali Transfers)' },
        brackets: [
          { paxLabel: { id: '2 Orang', en: '2 Pax' }, pricePerPax: 1090000 },
          { paxLabel: { id: '3–4 Orang', en: '3–4 Pax' }, pricePerPax: 970000 },
          { paxLabel: { id: '5–8 Orang', en: '5–8 Pax' }, pricePerPax: 890000 },
        ],
      },
      {
        id: 'tier-pnds-priv',
        tierName: { id: 'Upgrade Private Snorkeling Boat Khusus Grup Anda + Shuttle Bali', en: 'Private Chartered Snorkeling Boat Upgrade + Bali Transfers' },
        brackets: [
          { paxLabel: { id: '2 Orang', en: '2 Pax' }, pricePerPax: 1550000 },
          { paxLabel: { id: '3–4 Orang', en: '3–4 Pax' }, pricePerPax: 1250000 },
          { paxLabel: { id: '5–8 Orang', en: '5–8 Pax' }, pricePerPax: 1090000 },
        ],
      },
    ],
    importantNotes: {
      id: [
        'Kunjungan ke titik Manta Bay menyesuaikan kondisi arus dan tinggi gelombang laut demi keselamatan seluruh peserta.',
      ],
      en: [
        'Access to Manta Bay depends on daily ocean swell conditions to ensure complete guest safety.',
      ],
    },
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
    ],
    recommendedHotelAreas: ['Sanur', 'Nusa Dua'],
    featured: false,
  },
  {
    id: 'grp-custom',
    slug: 'paket-group-gathering-custom-bali',
    code: 'BP-GRP-CST',
    title: {
      id: 'Paket Gathering Kantor & Rombongan Custom Bali (3H2M / Fleksibel)',
      en: 'Corporate Outing & Custom Group Gathering Bali (3D2N / Flexible)',
    },
    tagline: {
      id: 'Penanganan profesional untuk rombongan 15 hingga 200+ peserta: Bus Pariwisata Eksekutif, Tour Leader, Fun Games & Gala Dinner.',
      en: 'Turnkey group coordination for 15 to 200+ guests: Executive Coaches, Tour Leaders, Team Building & Gala Dinner.',
    },
    description: {
      id: 'Merencanakan outing perusahaan, kunjungan kerja instansi, study tour kampus/sekolah, maupun reuni keluarga besar di Pulau Bali? Tim Group Desk Bali Persada merancangkan solusi menyeluruh mulai dari armada Toyota Hiace Premio, Medium Bus hingga Big Bus Pariwisata terbaru, pemesanan blok kamar hotel bintang 3–5, sesi outbound/team building di Kebun Raya Bedugul atau pantai, hingga malam keakraban Gala Dinner di Pantai Jimbaran.',
      en: 'Organizing a corporate retreat, institutional visit, university study tour, or large family reunion in Bali? Bali Persada’s Group Desk coordinates seamless end-to-end logistics including modern Hiace Premio vans and Executive Touring Buses, 3-to-5-star group hotel blocks, outdoor team-building games, and memorable Gala Dinners on Jimbaran Beach.',
    },
    destination: 'Kustom Sesuai Kebutuhan Grup (Bedugul, Tanah Lot, Ubud, Nusa Dua, Jimbaran)',
    duration: {
      id: '3 Hari 2 Malam (Bisa Custom 2H–5H)',
      en: '3 Days 2 Nights (Customizable 2D–5D)',
    },
    durationDays: 3,
    price: 1650000,
    priceUnit: {
      id: '/ orang (min. 15 pax)',
      en: '/ person (min. 15 pax)',
    },
    category: 'group',
    badge: {
      id: 'Corporate & Grup',
      en: 'Corporate & Groups',
    },
    minParticipants: {
      id: 'Rombongan 15 – 200+ Peserta',
      en: 'Groups of 15 – 200+ Guests',
    },
    highlights: {
      id: [
        'Armada Hiace Premio / Medium Bus / Big Bus Eksekutif terbaru ber-AC dingin & audio karaoke',
        'Didampingi Tour Leader berlisensi & spanduk selamat datang khusus nama instansi/grup',
        'Rute dan durasi hari 100% dapat dikustomisasi mengikuti agenda acara internal Anda',
        'Opsi paket tambahan: Fun Games Outbound, Dokumentasi Drone & Gala Dinner Seafood + Live Acoustic',
      ],
      en: [
        'Modern Hiace Premio / Medium / Executive Big Buses with cold AC & onboard entertainment',
        'Dedicated licensed Tour Leader & custom printed group welcome banner',
        '100% customizable itinerary, meeting room bookings, and daily schedule pacing',
        'Optional add-ons: Team-Building Facilitators, Drone Videography & Gala Dinner with Live Music',
      ],
    },
    inclusions: {
      id: [
        'Armada Bus Pariwisata Eksekutif ber-AC sesuai kapasitas rombongan',
        'Akomodasi hotel pilihan (Twin/Triple Share) dengan sarapan prasmanan',
        'Tour Leader profesional mendampingi sejak tiba hingga kepulangan di bandara',
        'Makan siang prasmanan restoran luas & Makan Malam Keakraban Seafood Pantai Jimbaran',
        'Tiket masuk seluruh objek wisata, spanduk grup (3x1 m), parkir bus, tol & air mineral',
      ],
      en: [
        'Chartered Executive AC Touring Bus matched to your group size',
        'Selected hotel room blocks (Twin/Triple occupancy) with daily buffet breakfast',
        'Licensed Tour Leader accompanying the group from airport arrival to departure',
        'Group buffet lunches at spacious venues & Jimbaran Beachfront Bonding Dinner',
        'All attraction tickets, custom 3x1m group banner, bus parking, tolls & mineral water',
      ],
    },
    exclusions: {
      id: [
        'Tiket pesawat grup (kami dapat membantu informasi jadwal penerbangan yang seragam)',
        'Paket fasilitator outbound/MC khusus & sewa sound system panggung bila diperlukan',
        'Pengeluaran pribadi masing-masing anggota rombongan',
      ],
      en: [
        'Group flight tickets',
        'Optional specialized MC/outbound game master & exclusive stage sound system',
        'Individual personal expenses',
      ],
    },
    childPolicy: {
      id: [
        'Untuk rombongan keluarga besar, tarif peserta anak-anak dihitung fleksibel menyesuaikan kebutuhan tempat tidur kamar.',
      ],
      en: [
        'For extended family gatherings, child rates are flexibly tailored based on room bedding arrangements.',
      ],
    },
    itinerary: [
      {
        day: 1,
        title: { id: 'Penyambutan Rombongan di Bandara, Sunset Tanah Lot & Makan Malam', en: 'Airport Group Welcome, Tanah Lot Sunset & Buffet Dinner' },
        activities: {
          id: [
            'Penjemputan terkoordinasi di Bandara Ngurah Rai + foto spanduk rombongan',
            'Makan siang prasmanan Nusantara di restoran berkapasitas grup besar',
            'Mengunjungi kawasan ikonik Pura Tanah Lot saat sore hari',
            'Check-in hotel rombongan & makan malam prasmanan',
          ],
          en: [
            'Coordinated airport welcome at Ngurah Rai + group banner photo',
            'Indonesian buffet lunch at a spacious group-friendly restaurant',
            'Late afternoon coastal visit to iconic Tanah Lot Temple',
            'Smooth group hotel check-in & evening buffet dinner',
          ],
        },
      },
      {
        day: 2,
        title: { id: 'Kebun Raya & Danau Bedugul (Fun Bonding), GWK & Gala Dinner Jimbaran', en: 'Bedugul Highlands & Botanic Bonding, GWK & Jimbaran Gala Dinner' },
        activities: {
          id: [
            'Sarapan pagi di hotel, menuju kesejukan Kebun Raya Bali & Pura Ulun Danu Bedugul',
            'Sesi kebersamaan rombongan / fun games santai & makan siang prasmanan',
            'Sore hari mengunjungi Garuda Wisnu Kencana (GWK) / Pantai Melasti',
            'Malam Keakraban & Makan Malam BBQ Seafood bersama di tepi Pantai Jimbaran',
          ],
          en: [
            'Hotel breakfast, journey to cool Bali Botanic Garden & Ulun Danu Bedugul',
            'Group bonding session / optional fun games & highland buffet lunch',
            'Afternoon visit to GWK Cultural Park or Melasti Beach',
            'Evening Group Gala Seafood BBQ Dinner on the sands of Jimbaran Beach',
          ],
        },
      },
      {
        day: 3,
        title: { id: 'Wisata Belanja Oleh-Oleh Rombongan & Pengantaran Bandara', en: 'Group Souvenir Shopping & Coordinated Airport Departure' },
        activities: {
          id: [
            'Sarapan pagi di hotel & proses check-out terkoordinasi oleh Tour Leader',
            'Berbelanja buah tangan di Krisna / The Keranjang dengan parkir bus luas',
            'Makan siang bersama sebelum diantar tepat waktu ke Bandara Ngurah Rai',
          ],
          en: [
            'Hotel breakfast & coordinated group luggage check-out',
            'One-stop souvenir shopping at Krisna / The Keranjang Bali',
            'Farewell group lunch before punctual airport transfer',
          ],
        },
      },
    ],
    pricingTable: [
      {
        id: 'tier-grp-land',
        tierName: { id: 'Land Arrangement Rombongan (Tanpa Hotel)', en: 'Group Land Arrangement (Without Hotel)' },
        brackets: [
          { paxLabel: { id: '15–25 Pax', en: '15–25 Pax' }, pricePerPax: 1350000 },
          { paxLabel: { id: '26–40 Pax', en: '26–40 Pax' }, pricePerPax: 1220000 },
          { paxLabel: { id: '41+ Pax', en: '41+ Pax' }, pricePerPax: 1150000 },
        ],
      },
      {
        id: 'tier-grp-3star',
        tierName: { id: 'Paket Gathering + Hotel Bintang 3 (★3) 2 Malam', en: 'Group Package + 3-Star Hotel (★3) 2 Nights' },
        brackets: [
          { paxLabel: { id: '15–25 Pax', en: '15–25 Pax' }, pricePerPax: 1850000 },
          { paxLabel: { id: '26–40 Pax', en: '26–40 Pax' }, pricePerPax: 1720000 },
          { paxLabel: { id: '41+ Pax', en: '41+ Pax' }, pricePerPax: 1650000 },
        ],
      },
      {
        id: 'tier-grp-4star',
        tierName: { id: 'Paket Gathering + Hotel Bintang 4 (★4) 2 Malam', en: 'Group Package + 4-Star Hotel (★4) 2 Nights' },
        brackets: [
          { paxLabel: { id: '15–25 Pax', en: '15–25 Pax' }, pricePerPax: 2350000 },
          { paxLabel: { id: '26–40 Pax', en: '26–40 Pax' }, pricePerPax: 2190000 },
          { paxLabel: { id: '41+ Pax', en: '41+ Pax' }, pricePerPax: 2090000 },
        ],
      },
    ],
    importantNotes: {
      id: [
        'Kami menyediakan proposal resmi (PDF) lengkap rincian RAB untuk pengajuan panitia kantor atau instansi Anda — silakan hubungi tim kami via WhatsApp.',
      ],
      en: [
        'We prepare formal itemized PDF proposals for corporate committees and institutions — reach out via WhatsApp to request yours.',
      ],
    },
    images: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    ],
    recommendedHotelAreas: ['Nusa Dua', 'Seminyak', 'Jimbaran'],
    featured: true,
  },
];
