import { TourPackage } from '../core/models/package.model';

export const MOCK_PACKAGES: TourPackage[] = [
  {
    id: 'pkg-1',
    slug: 'bali-family-fun-escape',
    title: {
      id: '4D3N Bali Family Fun Escape — Nusa Dua & Kuta',
      en: '4D3N Bali Family Fun Escape — Nusa Dua & Kuta',
    },
    tagline: {
      id: 'Liburan ceria tanpa lelah dengan pantai tenang, waterpark seru, dan makan malam matahari terbenam.',
      en: 'Relaxed family getaway featuring calm beaches, world-class waterpark, and iconic sunset dining.',
    },
    description: {
      id: 'Paket liburan keluarga yang dirancang khusus untuk kenyamanan anak-anak dan orang tua. Menawarkan tempo perjalanan yang santai, kunjungan ke pantai berombak tenang di Nusa Dua, keseruan seharian di Waterbom Bali Kuta, serta makan malam seafood khas Jimbaran dengan pemandangan sunset.',
      en: 'A dedicated family holiday package designed for the comfort of both young children and parents. Featuring relaxed pacing, calm waters in Nusa Dua, an exciting day at Waterbom Bali, and sunset seafood dinner on Jimbaran beach.',
    },
    destination: 'Nusa Dua, Kuta, Jimbaran & Uluwatu',
    duration: {
      id: '4 Hari 3 Malam',
      en: '4 Days 3 Nights',
    },
    durationDays: 4,
    price: 3250000,
    priceUnit: {
      id: '/ orang (min. 4 orang)',
      en: '/ person (min. 4 pax)',
    },
    category: 'family',
    badge: {
      id: 'Pilihan Keluarga Favorit',
      en: 'Family Favorite',
    },
    minParticipants: {
      id: 'Minimal 4 orang (dewasa/anak)',
      en: 'Minimum 4 participants (adult/child)',
    },
    highlights: {
      id: [
        'Pantai Tanjung Benoa dengan watersport ramah anak',
        'Tiket seharian ke Waterbom Bali Kuta',
        'Pertunjukan Tari Kecak di tebing Uluwatu',
        'Makan malam seafood segar di tepi Pantai Jimbaran',
        'Armada mobil keluarga pribadi ber-AC dan sopir ramah',
      ],
      en: [
        'Tanjung Benoa beach with family-friendly watersports',
        'Full day access pass to Waterbom Bali Kuta',
        'Uluwatu cliffside Kecak dance performance',
        'Fresh seafood dinner on Jimbaran beach',
        'Dedicated private air-conditioned family vehicle and driver',
      ],
    },
    inclusions: {
      id: [
        'Transportasi pribadi selama 4 hari (Toyota Innova/Hiace ber-AC)',
        'Bahan bakar, biaya tol, dan parkir seluruh destinasi',
        'Tiket masuk seluruh objek wisata sesuai program',
        'Tiket Waterbom Bali kategori Single Day Pass',
        'Tiket Tari Kecak Uluwatu',
        'Makan sesuai program (3x makan siang, 2x makan malam)',
        'Makan malam seafood set di Jimbaran (1x)',
        'Air mineral dingin selama perjalanan',
      ],
      en: [
        'Private 4-day transport (AC Toyota Innova/Hiace)',
        'Fuel, toll fees, and parking at all destinations',
        'Entrance tickets to all listed itinerary sites',
        'Waterbom Bali Single Day Pass admission',
        'Uluwatu Kecak Fire Dance ticket',
        'Meals as scheduled (3 lunches, 2 dinners)',
        'Seafood dinner set at Jimbaran beach (1x)',
        'Chilled bottled mineral water daily',
      ],
    },
    exclusions: {
      id: [
        'Akomodasi hotel (dapat dibundling berdasarkan permintaan)',
        'Tiket pesawat dari/ke kota asal',
        'Pengeluaran pribadi (laundry, minibar, belanja souvenir)',
        'Wahana watersport tambahan di luar program',
        'Tipping sukarela untuk pemandu/pengemudi',
      ],
      en: [
        'Hotel accommodation (available as bundle upon request)',
        'Flight tickets to/from Bali',
        'Personal expenses (laundry, room minibar, shopping)',
        'Optional watersport activities beyond package',
        'Voluntary gratuities for driver/guide',
      ],
    },
    itinerary: [
      {
        day: 1,
        title: {
          id: 'Penjemputan Bandara & Eksplorasi Pantai Melasti',
          en: 'Airport Arrival & Melasti Beach Coastal Drive',
        },
        activities: {
          id: [
            'Penjemputan hangat di Bandara I Gusti Ngurah Rai Bali',
            'Check-in hotel atau istirahat sejenak',
            'Menikmati suasana pasir putih tebing Pantai Melasti',
            'Makan malam santai di restoran lokal bernuansa taman',
          ],
          en: [
            'Warm airport meet & greet at I Gusti Ngurah Rai International Airport',
            'Hotel check-in or quick freshen-up',
            'Scenic drive to the dramatic cliffs and sands of Melasti Beach',
            'Relaxed dinner at a charming local garden restaurant',
          ],
        },
      },
      {
        day: 2,
        title: {
          id: 'Tanjung Benoa & Pura Uluwatu Sunset',
          en: 'Tanjung Benoa Coastal Fun & Uluwatu Sunset',
        },
        activities: {
          id: [
            'Pagi hari menuju Tanjung Benoa: naik Glass Bottom Boat & berkunjung ke Pulau Penyu',
            'Makan siang kuliner khas Bali ramah keluarga',
            'Sore hari menuju kawasan Pura Luhur Uluwatu yang megah di tepi samudra',
            'Menyaksikan pementasan Tari Kecak berlatar lembayung senja',
            'Makan malam seafood di Pantai Jimbaran dengan meja di atas pasir',
          ],
          en: [
            'Morning visit to Tanjung Benoa: glass-bottom boat ride & turtle sanctuary visit',
            'Family-friendly Balinese culinary lunch',
            'Afternoon transfer to the majestic cliffside Uluwatu Temple',
            'Witness the rhythmic Kecak Fire Dance during golden sunset',
            'Beachfront candlelit seafood feast on the sands of Jimbaran',
          ],
        },
      },
      {
        day: 3,
        title: {
          id: 'Petualangan Seharian di Waterbom Bali & Kuta',
          en: 'Full Day Adventure at Waterbom Bali & Kuta',
        },
        activities: {
          id: [
            'Pagi hari diantar menuju Waterbom Bali di jantung Kuta',
            'Waktu bebas menikmati wahana seluncuran dan lazy river kelas dunia',
            'Makan siang santai di dalam area waterpark',
            'Sore hari jalan-jalan santai di Pantai Kuta atau Kuta Art Market',
            'Makan malam di kafe tepi pantai ramah keluarga',
          ],
          en: [
            'Morning drop-off at Waterbom Bali waterpark in Kuta',
            'Full day enjoying world-class lazy rivers and waterslides',
            'Casual lunch within the park grounds',
            'Afternoon stroll around Kuta Beach and local art stalls',
            'Dinner at a welcoming family-friendly oceanfront café',
          ],
        },
      },
      {
        day: 4,
        title: {
          id: 'Belanja Oleh-Oleh Khas Bali & Pengantaran Bandara',
          en: 'Souvenir Shopping & Airport Departure',
        },
        activities: {
          id: [
            'Sarapan di hotel dan proses check-out santai',
            'Singgah di pusat oleh-oleh terpercaya untuk pie susu, kacang, dan kerajinan',
            'Makan siang santai sebelum menuju bandara',
            'Pengantaran tepat waktu ke Bandara Internasional Bali',
          ],
          en: [
            'Breakfast at hotel and stress-free check-out',
            'Visit reputable handicraft and Balinese souvenir centers',
            'Farewell lunch before heading to the departure terminal',
            'Timely transfer to Bali International Airport for flight home',
          ],
        },
      },
    ],
    importantNotes: {
      id: [
        'Jadwal dan rute dapat disesuaikan dengan jam kedatangan dan kepulangan penerbangan Anda.',
        'Harga dapat berubah pada periode musim liburan sekolah (Juni-Juli) dan akhir tahun (Desember).',
        'Kursi bayi / car seat tersedia atas permintaan sebelumnya.',
      ],
      en: [
        'Timing and stops can be adapted to your flight arrival and departure schedules.',
        'Rates are subject to peak season surcharges during school holidays and December holidays.',
        'Child car seats are available upon advance reservation request.',
      ],
    },
    images: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: true,
  },
  {
    id: 'pkg-2',
    slug: 'nusa-penida-island-adventure',
    title: {
      id: '3D2N Nusa Penida Island Adventure — East & West',
      en: '3D2N Nusa Penida Island Adventure — East & West',
    },
    tagline: {
      id: 'Jelajahi keajaiban tebing Kelingking, Diamond Beach, dan pesona alam pulau eksotis.',
      en: 'Explore the iconic Kelingking cliff, sparkling Diamond Beach, and untamed island wonders.',
    },
    description: {
      id: 'Paket petualangan pulau yang cocok untuk rombongan teman atau keluarga aktif. Menyeberang dengan speed boat nyaman dari Sanur untuk mengagumi formasi batu kapur Kelingking Beach, Broken Beach, Angel’s Billabong, serta keindahan Diamond Beach dan Rumah Pohon Molenteng.',
      en: 'An exciting island excursion ideal for groups of friends or active families. Cruise across the strait from Sanur by speedboat to marvel at the famed T-Rex shaped Kelingking cliff, Broken Beach, Angel’s Billabong, and the majestic Diamond Beach.',
    },
    destination: 'Nusa Penida & Sanur',
    duration: {
      id: '3 Hari 2 Malam',
      en: '3 Days 2 Nights',
    },
    durationDays: 3,
    price: 2450000,
    priceUnit: {
      id: '/ orang (min. 6 orang)',
      en: '/ person (min. 6 pax)',
    },
    category: 'group',
    badge: {
      id: 'Cocok untuk Rombongan',
      en: 'Great for Groups',
    },
    minParticipants: {
      id: 'Minimal 6 orang (rombongan)',
      en: 'Minimum 6 participants (group)',
    },
    highlights: {
      id: [
        'Tiket PP Fast Boat Sanur - Nusa Penida',
        'Kelingking Beach (T-Rex Cliff) & Angel’s Billabong',
        'Diamond Beach & Raja Lima Rumah Pohon',
        'Snorkeling opsional di Crystal Bay',
        'Transport khusus pulau ber-AC selama tour',
      ],
      en: [
        'Round-trip Sanur - Nusa Penida fast boat transfers',
        'Kelingking Beach (T-Rex Cliff) & Angel’s Billabong',
        'Diamond Beach & Tree House Molenteng panoramic viewpoint',
        'Optional snorkeling stop at Crystal Bay',
        'Private island transport with local driver-guide',
      ],
    },
    inclusions: {
      id: [
        'Tiket Fast Boat Sanur - Nusa Penida (PP)',
        'Antar jemput dari hotel Bali ke Pelabuhan Sanur',
        'Transport mobil ber-AC selama di Nusa Penida',
        'Pemandu lokal merangkap fotografer selama tour',
        'Tiket masuk seluruh destinasi wisata Nusa Penida',
        'Makan siang lokal 2x selama tour pulau',
        'Air mineral selama perjalanan',
      ],
      en: [
        'Return fast boat tickets (Sanur - Nusa Penida)',
        'Hotel pickup/drop-off to Sanur Harbour',
        'Private AC vehicle transport on Nusa Penida island',
        'Local island guide and photography assistance',
        'All entrance tickets and environmental fees on the island',
        'Local lunches (2x) during island touring',
        'Bottled drinking water throughout the tour',
      ],
    },
    exclusions: {
      id: [
        'Hotel di Nusa Penida (dapat ditambahkan sesuai preferensi)',
        'Peralatan dan perahu sewa snorkeling tambahan',
        'Biaya spot foto berbayar pribadi di Rumah Pohon / ayunan',
        'Pengeluaran pribadi di luar paket',
      ],
      en: [
        'Hotel accommodation on Nusa Penida (can be added upon request)',
        'Optional snorkeling gear and boat rental fees',
        'Personal photo-spot fees for treehouse swing or photo decks',
        'Personal expenses and extra drinks',
      ],
    },
    itinerary: [
      {
        day: 1,
        title: {
          id: 'Penyeberangan Sanur & Eksplorasi Nusa Penida Barat',
          en: 'Sanur Crossing & West Nusa Penida Wonders',
        },
        activities: {
          id: [
            'Penjemputan pagi hari dari hotel di Bali menuju Pelabuhan Sanur',
            'Naik Fast Boat menuju Nusa Penida (sekitar 40 menit)',
            'Mengunjungi Kelingking Beach untuk foto tebing legendaris',
            'Makan siang di restoran lokal tepi bukit',
            'Menikmati formasi alam Broken Beach & Angel’s Billabong',
            'Santai sore menjelang matahari terbenam di Crystal Bay',
          ],
          en: [
            'Morning hotel pickup and transfer to Sanur Harbour',
            'Scenic speedboat crossing to Nusa Penida island (~40 mins)',
            'Visit iconic Kelingking Beach for dramatic coastal photos',
            'Local lunch at a hilltop restaurant',
            'Explore natural archways at Broken Beach & tidal pool at Angel’s Billabong',
            'Sunset relaxation along the palm-fringed shoreline of Crystal Bay',
          ],
        },
      },
      {
        day: 2,
        title: {
          id: 'Eksplorasi Nusa Penida Timur & Pantai Berlian',
          en: 'East Nusa Penida & Diamond Beach Exploration',
        },
        activities: {
          id: [
            'Sarapan dan persiapan tour sisi timur pulau',
            'Mengunjungi Diamond Beach dengan anak tangga tebing putih yang fotogenik',
            'Menikmati keindahan Atuh Beach yang tenang',
            'Foto di Rumah Pohon Molenteng dan pemandangan Raja Lima',
            'Makan siang dengan kuliner khas pulau',
            'Kembali ke penginapan untuk istirahat rombongan',
          ],
          en: [
            'Breakfast and start journey toward the island’s eastern coast',
            'Descend the scenic carved cliff staircase of Diamond Beach',
            'Admire the serene crescent bay of Atuh Beach',
            'Photo stop at the famous Molenteng Treehouse & Thousand Islands vista',
            'Lunch with traditional local flavours',
            'Return to hotel for an evening of group leisure',
          ],
        },
      },
      {
        day: 3,
        title: {
          id: 'Kembali ke Sanur Bali & Wisata Belanja',
          en: 'Return to Bali Mainland & Souvenir Stops',
        },
        activities: {
          id: [
            'Check-out dan menuju pelabuhan Nusa Penida',
            'Penyeberangan kembali ke Pelabuhan Sanur',
            'Makan siang di Denpasar / Sanur',
            'Waktu belanja oleh-oleh sebelum diantar ke bandara atau hotel tujuan',
          ],
          en: [
            'Check-out and transfer to harbor pier',
            'Speedboat cruise back to mainland Sanur Harbour',
            'Lunch in the Sanur or Denpasar area',
            'Souvenir shopping stop before final drop-off at airport or mainland hotel',
          ],
        },
      },
    ],
    importantNotes: {
      id: [
        'Kondisi jalanan di Nusa Penida sebagian berupa perbukitan; rombongan diharapkan dalam kondisi fisik yang sehat.',
        'Membawa pakaian ganti, tabir surya, dan alas kaki yang nyaman sangat disarankan.',
      ],
      en: [
        'Roads on Nusa Penida include hilly terrain; moderate physical fitness is recommended.',
        'Please bring comfortable walking shoes, sun protection, and a change of clothes.',
      ],
    },
    images: [
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: true,
  },
  {
    id: 'pkg-3',
    slug: 'ubud-cultural-nature-retreat',
    title: {
      id: '3D2N Ubud Cultural & Nature Retreat',
      en: '3D2N Ubud Cultural & Nature Retreat',
    },
    tagline: {
      id: 'Rasakan kedamaian terasering sawah Tegallalang, hutan monyet, dan seni budaya Bali.',
      en: 'Immerse in lush rice terraces, sacred monkey forest, and Ubud’s rich artistic heritage.',
    },
    description: {
      id: 'Paket wisata yang menyuguhkan sisi tenang dan artistik Pulau Dewata. Sangat cocok bagi keluarga maupun pasangan yang menginginkan liburan bertempo santai, menikmati udara sejuk terasering sawah Tegallalang, berinteraksi dengan satwa di Sacred Monkey Forest, dan menjelajahi pasar seni Ubud.',
      en: 'A soothing travel package celebrating Bali’s cultural heartbeat and emerald green highlands. Perfect for families or couples seeking a calm pace, taking in the terraced paddies of Tegallalang, the Sacred Monkey Forest sanctuary, and local craft ateliers.',
    },
    destination: 'Ubud, Gianyar & Kintamani',
    duration: {
      id: '3 Hari 2 Malam',
      en: '3 Days 2 Nights',
    },
    durationDays: 3,
    price: 2150000,
    priceUnit: {
      id: '/ orang (min. 2 orang)',
      en: '/ person (min. 2 pax)',
    },
    category: 'family',
    badge: {
      id: 'Nuansa Alam & Seni',
      en: 'Nature & Culture',
    },
    minParticipants: {
      id: 'Minimal 2 orang',
      en: 'Minimum 2 participants',
    },
    highlights: {
      id: [
        'Terasering Sawah Tegallalang & Kafe Panorama',
        'Sacred Monkey Forest Sanctuary Ubud',
        'Puri Saren Agung (Istana Ubud) & Pasar Seni Tradisional',
        'Makan siang berlatar Danau & Gunung Batur Kintamani',
        'Kunjungan ke perkebunan kopi luwak dan herbal organik',
      ],
      en: [
        'Tegallalang green rice terraces and scenic café stop',
        'Sacred Monkey Forest Sanctuary in Ubud center',
        'Ubud Royal Palace & traditional art market walk',
        'Buffet lunch overlooking Mount Batur and lake caldera',
        'Organic Balinese coffee and spice farm walk',
      ],
    },
    inclusions: {
      id: [
        'Transportasi pribadi selama 3 hari ber-AC',
        'Bahan bakar dan biaya parkir destinasi',
        'Tiket masuk objek wisata (Monkey Forest, Tegallalang, Tirta Empul)',
        'Makan siang buffet panorama di Kintamani (1x)',
        'Makan siang kuliner bebek khas Ubud (1x)',
        'Air mineral dingin selama perjalanan',
      ],
      en: [
        'Private 3-day AC vehicle and courteous driver',
        'All fuel, road tolls, and destination parking',
        'Entrance fees to Monkey Forest, Tegallalang, Tirta Empul',
        'Panoramic caldera buffet lunch in Kintamani (1x)',
        'Authentic Crispy Duck Ubud lunch set (1x)',
        'Bottled drinking water during tours',
      ],
    },
    exclusions: {
      id: [
        'Akomodasi hotel di Ubud (dapat dipilih lewat katalog hotel kami)',
        'Tiket penerbangan',
        'Wahana ayunan ekstrem (extreme swing) di Tegallalang',
        'Pengeluaran belanja pribadi dan laundry',
      ],
      en: [
        'Ubud hotel accommodation (can be selected via our hotel catalog)',
        'Flight tickets',
        'Optional jungle swing rides at Tegallalang',
        'Personal shopping expenses and tips',
      ],
    },
    itinerary: [
      {
        day: 1,
        title: {
          id: 'Tiba di Ubud, Monkey Forest & Pusat Kerajinan Seni',
          en: 'Arrival in Ubud, Monkey Forest Sanctuary & Art Villages',
        },
        activities: {
          id: [
            'Penjemputan di bandara atau hotel area Bali Selatan',
            'Perjalanan menuju Ubud melewati desa perajin perak Celuk dan ukiran kayu Mas',
            'Jalan santai di bawah kanopi rindang Sacred Monkey Forest',
            'Check-in penginapan di Ubud dan menikmati ketenangan pedesaan',
            'Makan malam di restoran tepi sawah khas Ubud',
          ],
          en: [
            'Pickup from airport or south Bali accommodation',
            'Drive to Ubud through master silver artisan and woodcarving villages',
            'Peaceful walk under ancient banyan trees at Sacred Monkey Forest',
            'Check-in to Ubud accommodation and enjoy tranquil rural views',
            'Dinner at a riverside or paddy-view Ubud restaurant',
          ],
        },
      },
      {
        day: 2,
        title: {
          id: 'Tegallalang, Kintamani Batur & Pura Tirta Empul',
          en: 'Tegallalang Terraces, Kintamani Volcano & Tirta Empul',
        },
        activities: {
          id: [
            'Pagi hari menikmati pemandangan terasering sawah Tegallalang',
            'Melanjutkan perjalanan ke dataran tinggi Kintamani',
            'Makan siang buffet dengan pemandangan dramatis Gunung dan Danau Batur',
            'Singgah di Pura Tirta Empul Tampaksiring untuk melihat mata air suci bersejarah',
            'Sore hari menikmati suasana sore di Istana Ubud',
          ],
          en: [
            'Morning visit to Tegallalang rice paddies for photo walks',
            'Ascend to the cool highland ridge of Kintamani',
            'Buffet lunch admiring dramatic vistas of Mount and Lake Batur',
            'Visit the historic water temple Tirta Empul Tampaksiring',
            'Late afternoon heritage walk around Ubud Royal Palace courtyard',
          ],
        },
      },
      {
        day: 3,
        title: {
          id: 'Pasar Seni Ubud & Perjalanan Kepulangan',
          en: 'Ubud Traditional Art Market & Departure Transfer',
        },
        activities: {
          id: [
            'Sarapan santai di hotel Ubud',
            'Berburu suvenir, lukisan, dan kain pantai di Pasar Seni Ubud',
            'Makan siang santai menu lokal sebelum perjalanan kepulangan',
            'Pengantaran ke bandara atau destinasi hotel berikutnya di Bali',
          ],
          en: [
            'Leisurely breakfast at hotel',
            'Browse handcrafted rattan bags, linen wear, and art at Ubud Art Market',
            'Relaxed farewell lunch',
            'Transfer to airport or onward hotel destination in Bali',
          ],
        },
      },
    ],
    importantNotes: {
      id: [
        'Kawasan Ubud cenderung sejuk dan sering hujan ringan di sore hari; payung kecil dapat berguna.',
        'Pakaian sopan (kami sediakan selendang/sarung) wajib digunakan saat memasuki area pura.',
      ],
      en: [
        'Ubud features a highland climate with occasional afternoon showers; light jacket or umbrella is handy.',
        'Respectful attire is required inside temple sanctuaries (sarongs provided).',
      ],
    },
    images: [
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: true,
  },
  {
    id: 'pkg-4',
    slug: 'bali-corporate-gathering-bedugul',
    title: {
      id: '3D2N Bali Corporate & Group Gathering — Bedugul & Jimbaran',
      en: '3D2N Bali Corporate & Group Gathering — Bedugul & Jimbaran',
    },
    tagline: {
      id: 'Rute terpadu untuk acara rombongan perusahaan, komunitas, dan keluarga besar.',
      en: 'Structured touring package tailored for company outings, communities, and large gatherings.',
    },
    description: {
      id: 'Solusi perjalanan terpadu untuk rombongan kantor, paguyuban, dan reuni keluarga. Meliputi sewa armada bus pariwisata ber-AC yang nyaman, kunjungan ke Danau Beratan Bedugul, kebun raya yang luas untuk sesi kebersamaan, serta malam keakraban dengan makan malam seafood di Jimbaran.',
      en: 'A turnkey group excursion crafted for corporate retreats, associations, and large family reunions. Features chartered touring buses, visits to Lake Beratan Bedugul, expansive botanic grounds ideal for team activities, and a farewell banquet on Jimbaran beach.',
    },
    destination: 'Bedugul, Tanah Lot, Kuta & Jimbaran',
    duration: {
      id: '3 Hari 2 Malam',
      en: '3 Days 2 Nights',
    },
    durationDays: 3,
    price: 1850000,
    priceUnit: {
      id: '/ orang (min. 15 orang)',
      en: '/ person (min. 15 pax)',
    },
    category: 'group',
    badge: {
      id: 'Rombongan & Gathering',
      en: 'Corporate & Gathering',
    },
    minParticipants: {
      id: 'Minimal 15 orang (rombongan)',
      en: 'Minimum 15 participants (group)',
    },
    highlights: {
      id: [
        'Bus Pariwisata ber-AC standar eksekutif & koordinator lapangan',
        'Pura Ulun Danu Beratan Bedugul di tepi danau yang sejuk',
        'Kawasan Kebun Raya Bali untuk sesi santai rombongan',
        'Sunset spektakuler di Pura Tanah Lot',
        'Makan malam keakraban seafood di Pantai Jimbaran',
      ],
      en: [
        'Executive touring bus with dedicated trip coordinator',
        'Ulun Danu Beratan Temple set on cool misty lake waters',
        'Expansive Bali Botanic Garden grounds for group bonding',
        'Spectacular ocean sunset at Tanah Lot Temple',
        'Group seafood banquet on the beach at Jimbaran',
      ],
    },
    inclusions: {
      id: [
        'Sewa bus pariwisata ber-AC (Medium Bus / Big Bus) 3 hari',
        'Bahan bakar, tol, biaya parkir bus di seluruh lokasi',
        'Koordinator perjalanan (tour leader) profesional',
        'Tiket masuk seluruh objek wisata rombongan',
        'Makan sesuai jadwal (3x makan siang buffet, 2x makan malam)',
        'Spanduk / banner rombongan berukuran 3x1 meter (1 buah)',
        'Air mineral botol untuk seluruh peserta setiap hari',
      ],
      en: [
        'Chartered AC touring bus (Medium / Big Bus) for 3 full days',
        'All fuel, road tolls, and bus parking allowances',
        'Professional dedicated tour coordinator/leader',
        'All group admission tickets for listed attractions',
        'Group meals as scheduled (3 buffet lunches, 2 dinners)',
        'Custom group welcome banner (3x1m)',
        'Chilled bottled water provided daily for all participants',
      ],
    },
    exclusions: {
      id: [
        'Akomodasi hotel rombongan (tersedia opsi bundling)',
        'Fasilitator fun games outbound khusus / sewa sound system tambahan',
        'Tiket penerbangan grup',
        'Pengeluaran belanja pribadi masing-masing peserta',
      ],
      en: [
        'Hotel accommodation (group room block bundle available)',
        'Specialist outbound team-building games facilitators / extra audio setup',
        'Group airfare',
        'Individual personal expenses',
      ],
    },
    itinerary: [
      {
        day: 1,
        title: {
          id: 'Kedatangan Rombongan & Sunset Tanah Lot',
          en: 'Group Arrival & Tanah Lot Sunset',
        },
        activities: {
          id: [
            'Penjemputan rombongan di Bandara Bali dengan bus pariwisata',
            'Makan siang prasmanan masakan nusantara',
            'Menuju kawasan Pura Tanah Lot untuk menikmati panorama samudra',
            'Check-in hotel dan waktu istirahat bebas untuk peserta',
            'Makan malam prasmanan di restoran lokal',
          ],
          en: [
            'Airport pickup for the group with executive touring coach',
            'Indonesian buffet lunch for the entire party',
            'Scenic drive to the legendary offshore shrine of Tanah Lot',
            'Hotel check-in and free leisure time for participants',
            'Group buffet dinner at a nearby local restaurant',
          ],
        },
      },
      {
        day: 2,
        title: {
          id: 'Dataran Tinggi Bedugul & Danau Beratan',
          en: 'Highland Bedugul, Lake Beratan & Botanic Garden',
        },
        activities: {
          id: [
            'Perjalanan menuju pegunungan Bedugul yang sejuk',
            'Kunjungan dan foto bersama di Pura Ulun Danu Beratan',
            'Waktu luang rombongan di Kebun Raya Eka Karya Bali',
            'Makan siang buffet di restoran lokal Bedugul',
            'Sore hari kembali ke Bali Selatan',
            'Malam keakraban dan makan malam seafood di Pantai Jimbaran',
          ],
          en: [
            'Morning journey to the cool highlands of Bedugul',
            'Group photography and temple exploration at Ulun Danu Beratan',
            'Relaxed group gathering time in Bali Botanic Gardens',
            'Buffet lunch at a panoramic highland restaurant',
            'Afternoon return drive to South Bali',
            'Group bonding dinner with seafood BBQ on Jimbaran beach',
          ],
        },
      },
      {
        day: 3,
        title: {
          id: 'Belanja Oleh-Oleh & Pengantaran Bandara',
          en: 'Group Souvenir Shopping & Departure Transfer',
        },
        activities: {
          id: [
            'Sarapan pagi dan proses check-out rombongan',
            'Mengunjungi pusat oleh-oleh modern dengan area parkir bus leluasa',
            'Makan siang bersama sebelum pengantaran',
            'Pengantaran rombongan tepat waktu ke Bandara Ngurah Rai',
          ],
          en: [
            'Breakfast and coordinated group check-out',
            'Shopping at comprehensive souvenir center with ample bus parking',
            'Farewell lunch together',
            'Coordinated transfer to Bali Airport for scheduled departure',
          ],
        },
      },
    ],
    importantNotes: {
      id: [
        'Harga per orang berlaku untuk minimal peserta 15 orang; jumlah peserta lebih besar akan mendapatkan penyesuaian tarif bus yang lebih efisien.',
        'Menu makanan prasmanan dapat disesuaikan dengan permintaan vegetarian atau halal.',
      ],
      en: [
        'Per-person rate applies to groups of at least 15 pax; larger parties benefit from greater coach scale efficiencies.',
        'Buffet meal menus can be customized for dietary requirements or halal preferences.',
      ],
    },
    images: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: true,
  },
  {
    id: 'pkg-5',
    slug: 'romantic-bali-honeymoon-serenity',
    title: {
      id: '4D3N Romantic Bali Serenity — Seminyak & Uluwatu',
      en: '4D3N Romantic Bali Serenity — Seminyak & Uluwatu',
    },
    tagline: {
      id: 'Momen intim dan hangat untuk pasangan dengan makan malam romantis dan suasana tepi laut.',
      en: 'Intimate and peaceful moments for couples featuring romantic sunset dinner and coastal beauty.',
    },
    description: {
      id: 'Paket liburan istimewa untuk pasangan yang merayakan bulan madu atau ulang tahun pernikahan. Menggabungkan akomodasi bernuansa privat, makan malam dengan dekorasi bunga di tepi pantai, serta eksplorasi santai pantai-pantai eksklusif di Seminyak dan tebing Uluwatu.',
      en: 'A romantic travel package tailored for couples celebrating honeymoons or wedding anniversaries. Blends private boutique comfort, candlelit flower-adorned beach dinner, and serene exploration of Seminyak and Uluwatu coastlines.',
    },
    destination: 'Seminyak, Nusa Dua & Uluwatu',
    duration: {
      id: '4 Hari 3 Malam',
      en: '4 Days 3 Nights',
    },
    durationDays: 4,
    price: 4600000,
    priceUnit: {
      id: '/ pasangan (2 orang)',
      en: '/ couple (2 pax)',
    },
    category: 'couple',
    badge: {
      id: 'Pilihan Pasangan',
      en: 'Romantic Getaway',
    },
    minParticipants: {
      id: 'Khusus 2 orang (pasangan)',
      en: 'Specially for 2 participants (couple)',
    },
    highlights: {
      id: [
        'Mobil pribadi nyaman dengan sopir ramah selama tour',
        'Makan malam romantis dengan dekorasi lilin di Jimbaran',
        'Sunset santai di klub pantai Seminyak yang estetik',
        'Pemandangan tebing dan Tari Kecak Uluwatu',
        'Waktu santai yang leluasa tanpa jadwal terburu-buru',
      ],
      en: [
        'Private chauffeured car throughout the itinerary',
        'Candlelight beach dinner setup with floral touches in Jimbaran',
        'Golden hour relaxation at an aesthetic Seminyak beach lounge',
        'Cliffside sunset vista and Uluwatu Kecak performance',
        'Unrushed itinerary leaving plenty of private time',
      ],
    },
    inclusions: {
      id: [
        'Transportasi pribadi ber-AC untuk 2 orang (Toyota Avanza/Innova)',
        'Bahan bakar dan tiket parkir seluruh lokasi',
        'Makan malam romantis pantai Jimbaran untuk 2 orang (1x)',
        'Tiket Tari Kecak Uluwatu untuk 2 orang',
        'Tiket masuk seluruh objek wisata sesuai program',
        'Air mineral dingin selama perjalanan',
      ],
      en: [
        'Private chauffeured AC car for 2 pax',
        'All fuel, road tolls, and parking fees',
        'Romantic beachfront candlelight dinner set for two in Jimbaran (1x)',
        'Uluwatu Kecak Dance admission for 2 pax',
        'All itinerary entrance admissions',
        'Chilled bottled water daily',
      ],
    },
    exclusions: {
      id: [
        'Akomodasi villa/hotel (dapat dibundling dengan pilihan katalog kami)',
        'Tiket pesawat PP',
        'Konsumsi di beach club di luar program yang ditentukan',
        'Pengeluaran belanja pribadi',
      ],
      en: [
        'Villa or hotel stay (available as bundle with our hotel listings)',
        'Roundtrip flight tickets',
        'Personal orders at beach clubs beyond itinerary inclusions',
        'Personal shopping and discretionary gratuities',
      ],
    },
    itinerary: [
      {
        day: 1,
        title: {
          id: 'Penyambutan Hangat & Santai Seminyak',
          en: 'Warm Welcome & Seminyak Coastal Leisure',
        },
        activities: {
          id: [
            'Penjemputan privat di Bandara I Gusti Ngurah Rai',
            'Perjalanan menuju penginapan di kawasan Seminyak / Canggu',
            'Waktu istirahat santai bersama pasangan',
            'Menikmati suasana senja pertama di kafe tepi pantai Seminyak',
          ],
          en: [
            'Private meet & greet upon airport arrival',
            'Direct transfer to your stay in Seminyak or Canggu',
            'Unwind and settle into your holiday accommodation',
            'Catch your first Bali sunset at a relaxed beachfront café',
          ],
        },
      },
      {
        day: 2,
        title: {
          id: 'Pantai Pandawa, Tebing Uluwatu & Candlelight Dinner',
          en: 'Pandawa Beach, Uluwatu Cliff & Candlelit Dinner',
        },
        activities: {
          id: [
            'Jalan santai di pantai berpasir putih kawasan Kuta Selatan',
            'Makan siang berdua di restoran dengan pemandangan lembah',
            'Sore hari mengagumi pemandangan tebing Pura Luhur Uluwatu',
            'Makan malam romantis di Pantai Jimbaran dengan meja bertabur bunga',
          ],
          en: [
            'Mid-morning scenic drive to south peninsula beaches',
            'Intimate couple lunch at a hillside garden eatery',
            'Late afternoon visit to Uluwatu Temple cliffs',
            'Candlelit dinner set on the sands of Jimbaran with special floral setup',
          ],
        },
      },
      {
        day: 3,
        title: {
          id: 'Hari Santai: Spa Tradisional & Eksplorasi Kafe Estetik',
          en: 'Leisure Day: Balinese Spa & Aesthetic Cafés',
        },
        activities: {
          id: [
            'Sarapan santai di tempat menginap',
            'Sesi relaksasi spa tradisional Bali berdua (opsional/rekomendasi)',
            'Eksplorasi butik dan kafe estetik di kawasan Seminyak',
            'Waktu luang berkualitas tanpa terikat jadwal padat',
          ],
          en: [
            'Slow morning breakfast at your accommodation',
            'Traditional couple spa session (optional recommendation)',
            'Browse lifestyle boutiques and artisan coffee houses in Seminyak',
            'Uninterrupted private relaxation time',
          ],
        },
      },
      {
        day: 4,
        title: {
          id: 'Check-out & Pengantaran Menuju Bandara',
          en: 'Check-out & Airport Transfer',
        },
        activities: {
          id: [
            'Sarapan pagi dan proses check-out santai',
            'Singgah membeli suvenir atau cinderamata kenangan',
            'Pengantaran privat kembali ke Bandara Bali',
          ],
          en: [
            'Breakfast and relaxed check-out',
            'Quick visit to local specialty shop for keepsake gifts',
            'Private transfer to the airport for your flight home',
          ],
        },
      },
    ],
    importantNotes: {
      id: [
        'Dapat dikombinasikan dengan reservasi villa kolam renang privat (private pool villa).',
        'Mohon beritahukan kami jika Anda memiliki preferensi makanan khusus untuk makan malam romantis.',
      ],
      en: [
        'Can be paired with private pool villa bookings upon consultation.',
        'Please inform us of any dietary preferences for the romantic dinner.',
      ],
    },
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: false,
  },
  {
    id: 'pkg-6',
    slug: 'east-bali-ocean-discovery',
    title: {
      id: '2D1N East Bali Ocean Discovery — Amed & Candidasa',
      en: '2D1N East Bali Ocean Discovery — Amed & Candidasa',
    },
    tagline: {
      id: 'Keindahan pesisir timur Bali yang tenang dengan terumbu karang alami dan istana air.',
      en: 'Tranquil eastern coastal beauty with pristine coral reefs and royal water palaces.',
    },
    description: {
      id: 'Paket singkat namun memikat untuk menjelajahi pesisir timur Pulau Bali yang jauh dari keramaian. Menyuguhkan kejernihan air laut Amed untuk snorkeling terumbu karang, kemegahan Istana Air Tirta Gangga, serta ketenangan Pantai Pasir Putih Virgin Beach di Karangasem.',
      en: 'A concise yet captivating tour introducing East Bali’s peaceful coastlines away from the crowds. Highlights the calm waters and coral gardens of Amed, the majestic Tirta Gangga water palace, and pristine sands of Virgin Beach in Karangasem.',
    },
    destination: 'Amed, Candidasa & Karangasem',
    duration: {
      id: '2 Hari 1 Malam',
      en: '2 Days 1 Night',
    },
    durationDays: 2,
    price: 1650000,
    priceUnit: {
      id: '/ orang (min. 4 orang)',
      en: '/ person (min. 4 pax)',
    },
    category: 'group',
    badge: {
      id: 'Eksplorasi Bahari',
      en: 'Ocean & Heritage',
    },
    minParticipants: {
      id: 'Minimal 4 orang',
      en: 'Minimum 4 participants',
    },
    highlights: {
      id: [
        'Snorkeling melihat terumbu karang dan ikan hias di perairan tenang Amed',
        'Tirta Gangga Water Palace dengan kolam ikan koi bersejarah',
        'Istana Taman Ujung Sukasada berlatar laut timur',
        'Santai di Virgin Beach (Pantai Perasi) pasir putih Karangasem',
        'Perjalanan menyusuri pedesaan Bali timur yang asri',
      ],
      en: [
        'Snorkeling calm coral gardens and colorful reef fish in Amed',
        'Tirta Gangga historic royal water palace with stepping stones',
        'Taman Ujung Sukasada palace flanked by water pavilions',
        'Leisure time at Karangasem’s white-sand Virgin Beach',
        'Scenic drive through lush eastern countryside',
      ],
    },
    inclusions: {
      id: [
        'Transportasi pribadi ber-AC selama 2 hari',
        'Bahan bakar, tol, dan parkir seluruh lokasi',
        'Tiket masuk Tirta Gangga dan Taman Ujung',
        'Sewa peralatan snorkeling standar di Amed (masker, snorkel, life vest)',
        'Makan siang kuliner lokal 2x',
        'Air mineral selama perjalanan',
      ],
      en: [
        'Private 2-day AC transport with courteous driver',
        'Fuel, tolls, and parking at all stops',
        'Admission tickets to Tirta Gangga and Taman Ujung palaces',
        'Standard snorkeling gear rental in Amed (mask, snorkel, life jacket)',
        'Local lunches (2x)',
        'Chilled bottled drinking water',
      ],
    },
    exclusions: {
      id: [
        'Penginapan hotel di Amed / Candidasa (dapat dipilih di katalog)',
        'Perahu jukung tradisional sewa khusus jika ingin spot snorkeling jauh',
        'Tiket penerbangan',
        'Pengeluaran pribadi peserta',
      ],
      en: [
        'Overnight hotel in Amed/Candidasa (can be selected via hotel catalog)',
        'Private chartered jukung outrigger boat for outer reef snorkeling',
        'Flight tickets',
        'Personal expenses and gratuities',
      ],
    },
    itinerary: [
      {
        day: 1,
        title: {
          id: 'Perjalanan ke Timur, Tirta Gangga & Senja Amed',
          en: 'Journey East, Tirta Gangga Palace & Amed Sunset',
        },
        activities: {
          id: [
            'Penjemputan pagi hari dari hotel di Bali Selatan atau Denpasar',
            'Menikmati keindahan kolam dan pancuran air kerajaan di Tirta Gangga',
            'Makan siang dengan menu ikan bakar lokal khas Karangasem',
            'Check-in penginapan di pesisir Amed atau Candidasa',
            'Menikmati senja tenang dengan siluet Gunung Agung dari Pantai Amed',
          ],
          en: [
            'Morning pickup from South Bali or Denpasar accommodation',
            'Explore the stone carvings and koi ponds at Tirta Gangga Palace',
            'Freshly grilled local seafood lunch in Karangasem',
            'Check-in to seaside stay in Amed or Candidasa',
            'Witness tranquil sunset overlooking Mount Agung silhouette from Amed shore',
          ],
        },
      },
      {
        day: 2,
        title: {
          id: 'Snorkeling Amed, Taman Ujung & Virgin Beach',
          en: 'Amed Coral Snorkeling, Taman Ujung & Virgin Beach',
        },
        activities: {
          id: [
            'Pagi hari snorkeling di perairan jernih Amed',
            'Mengunjungi arsitektur megah Taman Ujung Sukasada',
            'Makan siang di dekat pantai pasir putih Virgin Beach Karangasem',
            'Santai sore menikmati kelapa muda segar di tepi pantai',
            'Perjalanan kembali menuju bandara atau hotel di Bali Selatan',
          ],
          en: [
            'Morning snorkeling over vibrant coral gardens in calm Amed waters',
            'Visit the neoclassical water pavilion complex at Taman Ujung',
            'Lunch near the peaceful shoreline of Virgin Beach (Perasi)',
            'Afternoon relaxation with fresh young coconuts by the waves',
            'Evening scenic drive back to airport or south Bali base',
          ],
        },
      },
    ],
    importantNotes: {
      id: [
        'Perjalanan ke Bali Timur membutuhkan waktu tempuh darat sekitar 2-2.5 jam dari area Kuta/Bandara.',
        'Kondisi laut dan snorkeling bergantung pada cuaca harian.',
      ],
      en: [
        'East Bali is approximately 2 to 2.5 hours driving time from the airport area.',
        'Snorkeling visibility is subject to ocean conditions.',
      ],
    },
    images: [
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    ],
    featured: false,
  },
];
