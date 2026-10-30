import { TourPackage } from '../../core/models/package.model';

export const REGULAR_PACKAGES: TourPackage[] = [
  {
    id: 'reg-2h1m',
    slug: 'paket-tour-bali-2h1m',
    code: 'BP-REG-21',
    title: {
      id: 'Paket Tour Bali 2 Hari 1 Malam (2H1M)',
      en: 'Bali Private Tour Package 2 Days 1 Night (2D1N)',
    },
    tagline: {
      id: 'Liburan singkat padat kesan: pesona tebing Uluwatu, GWK, makan malam seafood Jimbaran, dan ikon Tanah Lot.',
      en: 'Compact island getaway covering Uluwatu cliffs, GWK Cultural Park, Jimbaran seafood dinner, and Tanah Lot.',
    },
    description: {
      id: 'Dirancang khusus bagi wisatawan dengan waktu libur akhir pekan singkat namun ingin merasakan esensi terbaik Pulau Bali. Paket privat 2 Hari 1 Malam ini memadukan penjemputan hangat di Bandara Ngurah Rai, eksplorasi pantai selatan Bali yang eksotis, makan malam tepi pantai Jimbaran, hingga kunjungan suvenir khas sebelum kepulangan.',
      en: 'Specially crafted for weekend travelers looking to experience Bali’s signature highlights in a short stay. This 2D1N private tour combines warm airport meet-and-greet, dramatic southern peninsula cliffs, beachfront seafood dining in Jimbaran, and iconic cultural stops.',
    },
    destination: 'Kuta Selatan, Uluwatu, Jimbaran & Tanah Lot',
    duration: {
      id: '2 Hari 1 Malam',
      en: '2 Days 1 Night',
    },
    durationDays: 2,
    price: 1150000,
    priceUnit: {
      id: '/ orang',
      en: '/ person',
    },
    category: 'regular',
    badge: {
      id: 'Weekend Favorit',
      en: 'Weekend Favorite',
    },
    minParticipants: {
      id: 'Minimal 2 orang (Private Tour)',
      en: 'Minimum 2 pax (Private Tour)',
    },
    highlights: {
      id: [
        'Penjemputan privat di Bandara I Gusti Ngurah Rai dengan kalungan bunga',
        'Kemegahan patung Garuda Wisnu Kencana (GWK) Cultural Park',
        'Panorama senja Pura Luhur Uluwatu & opsi Tari Kecak',
        'Makan malam hidangan laut segar di tepi Pantai Jimbaran',
        'Kunjungan pagi ke Pura Tanah Lot & pusat oleh-oleh khas Bali',
      ],
      en: [
        'Private airport pickup at Ngurah Rai with traditional flower garland',
        'Monumental Garuda Wisnu Kencana (GWK) Cultural Park visit',
        'Cliffside sunset panorama at Uluwatu Temple & optional Kecak dance',
        'Fresh grilled seafood dinner right on Jimbaran Beach',
        'Morning heritage stop at Tanah Lot Temple & souvenir center',
      ],
    },
    inclusions: {
      id: [
        'Mobil ber-AC privat bersih + pengemudi berpengalaman & BBM',
        'Akomodasi hotel 1 malam sesuai kelas pilihan (untuk opsi +Hotel)',
        'Kalungan bunga penyambutan saat tiba di Bandara Bali',
        'Tiket masuk seluruh objek wisata sesuai jadwal rute pilihan',
        'Makan sesuai program (1x makan pagi hotel, 2x makan siang, 1x makan malam Jimbaran)',
        'Biaya parkir kendaraan dan retribusi kawasan wisata',
        'Air mineral botol dingin setiap hari selama perjalanan',
      ],
      en: [
        'Clean private AC vehicle + experienced driver-guide & fuel',
        '1-night hotel stay based on selected class (for +Hotel tiers)',
        'Welcome flower garland upon arrival at Bali Airport',
        'All attraction entrance fees listed in the selected route',
        'Meals per itinerary (1 breakfast at hotel, 2 lunches, 1 Jimbaran seafood dinner)',
        'All parking fees and regional tourist levies',
        'Daily chilled bottled mineral water in the vehicle',
      ],
    },
    exclusions: {
      id: [
        'Tiket pesawat terbang menuju dan dari Bali',
        'Pengeluaran pribadi di hotel (laundry, minibar, layanan kamar)',
        'Tiket permainan watersport tambahan atau aktivitas di luar jadwal',
        'Tipping sukarela untuk pengemudi / pemandu wisata',
      ],
      en: [
        'Round-trip flight tickets to and from Bali',
        'Personal hotel expenses (laundry, minibar, room service)',
        'Optional watersports or activities outside the stated program',
        'Voluntary tipping for driver / tour guide',
      ],
    },
    childPolicy: {
      id: [
        'Anak usia di bawah 3 tahun: Gratis (tanpa tambahan fasilitas tempat tidur & kursi makan terpisah).',
        'Anak usia 3–10 tahun sekamar dengan orang tua tanpa extra bed: Dikenakan 50% dari harga dewasa.',
        'Anak usia 3–10 tahun menggunakan extra bed (kasur tambahan): Dikenakan 75% dari harga dewasa.',
      ],
      en: [
        'Infants under 3 years old: Free of charge (sharing existing bedding and meals with parents).',
        'Children aged 3–10 years sharing room without extra bed: Charged 50% of adult rate.',
        'Children aged 3–10 years with hotel extra bed: Charged 75% of adult rate.',
      ],
    },
    itinerary: [
      {
        day: 1,
        title: {
          id: 'Penjemputan Bandara, Pantai Melasti, GWK, Uluwatu & Jimbaran',
          en: 'Airport Arrival, Melasti Beach, GWK, Uluwatu & Jimbaran Dinner',
        },
        summary: {
          id: 'Tiba di Bali, kuliner siang khas lokal, menyusuri pesisir tebing selatan hingga makan malam romantis di Pantai Jimbaran.',
          en: 'Arrive in Bali, enjoy local lunch, explore dramatic southern limestone cliffs, and dine by the sea in Jimbaran.',
        },
        activities: {
          id: [
            'Penjemputan di Bandara Ngurah Rai & sambutan kalungan bunga',
            'Makan siang masakan khas Bali (Ayam Betutu / kuliner Nusantara)',
            'Eksplorasi tebing kapur putih Pantai Melasti Ungasan',
            'Kunjungan ke kawasan budaya Garuda Wisnu Kencana (GWK)',
            'Menikmati pemandangan samudra dari Pura Luhur Uluwatu',
            'Makan malam seafood bakar di tepi pasir Pantai Jimbaran & check-in hotel',
          ],
          en: [
            'Airport pickup at Ngurah Rai & flower garland greeting',
            'Authentic Balinese culinary lunch',
            'Scenic photo stop along Melasti Beach limestone cliffs',
            'Visit Garuda Wisnu Kencana (GWK) Cultural Park',
            'Ocean cliff sunset views at sacred Uluwatu Temple',
            'Grilled seafood dinner on Jimbaran Beach followed by hotel check-in',
          ],
        },
        steps: [
          {
            code: '1.1',
            time: '10.00 WITA',
            title: { id: 'Penjemputan di Bandara Ngurah Rai & Kalungan Bunga', en: 'Airport Pickup & Flower Garland Welcome' },
            description: {
              id: 'Tim kami menyambut kedatangan Anda di pintu kedatangan bandara dengan ramah dilanjutkan pengalungan bunga khas Bali.',
              en: 'Our representative greets you warmly at the arrival hall with a traditional Balinese marigold garland.',
            },
          },
          {
            code: '1.2',
            time: '11.30 WITA',
            title: { id: 'Makan Siang Kuliner Khas Bali', en: 'Traditional Balinese Lunch' },
            description: {
              id: 'Menikmati santap siang hidangan populer khas Pulau Dewata di restoran nyaman kawasan Tuban / Nusa Dua.',
              en: 'Savor signature local dishes at a comfortable, clean restaurant near Tuban or Nusa Dua.',
            },
          },
          {
            code: '1.3',
            time: '13.30 WITA',
            title: { id: 'Pantai Melasti & Garuda Wisnu Kencana (GWK)', en: 'Melasti Beach & GWK Cultural Park' },
            description: {
              id: 'Mengagumi panorama jalan berliku tebing kapur Pantai Melasti lalu berfoto di pelataran mahakarya patung GWK.',
              en: 'Admire the turquoise waters and carved limestone road of Melasti Beach before visiting the towering GWK statue.',
            },
          },
          {
            code: '1.4',
            time: '16.30 WITA',
            title: { id: 'Pura Luhur Uluwatu Sunset', en: 'Uluwatu Cliffside Temple Sunset' },
            description: {
              id: 'Menyaksikan kemegahan pura di pucuk tebing karang setinggi 70 meter di atas Samudra Hindia saat matahari condong ke barat.',
              en: 'Experience the breathtaking cliff-edge sanctuary perched 70 meters above rolling Indian Ocean swells.',
            },
          },
          {
            code: '1.5',
            time: '19.00 WITA',
            title: { id: 'Makan Malam Seafood Pantai Jimbaran & Check-in Hotel', en: 'Jimbaran Beachfront Seafood Dinner & Check-in' },
            description: {
              id: 'Bersantap hidangan laut bakar bumbu khas Jimbaran di tepi pantai sebelum diantar menuju hotel untuk beristirahat.',
              en: 'Dine on freshly grilled Jimbaran-style seafood right on the sand before checking in to your hotel.',
            },
          },
        ],
      },
      {
        day: 2,
        title: {
          id: 'Pura Tanah Lot, Wisata Kafe / Agrowisata & Belanja Oleh-Oleh',
          en: 'Tanah Lot Ocean Temple, Coffee Plantation & Souvenir Shopping',
        },
        summary: {
          id: 'Check-out santai setelah sarapan, mengunjungi ikon Pura Tanah Lot, mencicipi kopi Bali, dan berbelanja buah tangan sebelum ke bandara.',
          en: 'Leisurely check-out after breakfast, visit iconic Tanah Lot Temple, sample Balinese coffee, and shop souvenirs before flight.',
        },
        activities: {
          id: [
            'Sarapan pagi di hotel dan proses check-out',
            'Mengunjungi kemegahan Pura Tanah Lot di atas batu karang laut',
            'Singgah di agrowisata kopi dan cokelat organik khas Bali',
            'Makan siang di restoran bernuansa asri',
            'Berbelanja buah tangan di Krisna / The Keranjang Bali',
            'Pengantaran tepat waktu menuju Bandara I Gusti Ngurah Rai',
          ],
          en: [
            'Breakfast at the hotel and check-out process',
            'Visit iconic Tanah Lot Temple perched on a coastal rock formation',
            'Stop by a traditional Balinese coffee and cocoa garden',
            'Lunch at a scenic local restaurant',
            'Souvenir shopping at Krisna or The Keranjang Bali',
            'Punctual transfer back to Ngurah Rai International Airport',
          ],
        },
        steps: [
          {
            code: '2.1',
            time: '08.30 WITA',
            title: { id: 'Sarapan di Hotel & Check-out', en: 'Breakfast at Hotel & Check-out' },
            description: {
              id: 'Menikmati sarapan pagi di restoran hotel kemudian pengemudi kami siap menjemput di lobi.',
              en: 'Enjoy morning breakfast at your hotel followed by lobby pickup with our private driver.',
            },
          },
          {
            code: '2.2',
            time: '10.00 WITA',
            title: { id: 'Eksplorasi Pura Tanah Lot', en: 'Explore Tanah Lot Offshore Temple' },
            description: {
              id: 'Berjalan santai menikmati lanskap ikonik pura di tengah deburan ombak pantai barat Tabanan.',
              en: 'Stroll the scenic coastal paths overlooking Bali’s famous sea temple on Tabanan’s coast.',
            },
          },
          {
            code: '2.3',
            time: '12.30 WITA',
            title: { id: 'Makan Siang & Pusat Oleh-Oleh Khas Bali', en: 'Lunch & Balinese Souvenir Center' },
            description: {
              id: 'Santap siang nyaman dilanjutkan waktu leluasa berbelanja pie susu, kopi, dan kerajinan tangan khas Bali.',
              en: 'Enjoy lunch before picking up signature Balinese treats, crafts, and gifts for family back home.',
            },
          },
          {
            code: '2.4',
            time: '15.30 WITA',
            title: { id: 'Pengantaran Menuju Bandara (Airport Transfer)', en: 'Airport Departure Transfer' },
            description: {
              id: 'Diantar menuju terminal keberangkatan Bandara Ngurah Rai menyesuaikan jadwal penerbangan Anda.',
              en: 'Smooth drop-off at Ngurah Rai Airport departure terminal aligned with your flight time.',
            },
          },
        ],
      },
    ],
    routeOptions: [
      {
        id: 'opt-21-a',
        code: 'A',
        label: { id: 'Opsi Rute A: Uluwatu, GWK & Tanah Lot', en: 'Route Option A: Uluwatu, GWK & Tanah Lot' },
        subtitle: {
          id: 'Kombinasi favorit pantai selatan tebing karang, makan malam Jimbaran, dan ikon Tanah Lot.',
          en: 'Classic combination of southern cliffs, Jimbaran seafood dinner, and iconic Tanah Lot.',
        },
        itinerary: [],
      },
      {
        id: 'opt-21-b',
        code: 'B',
        label: { id: 'Opsi Rute B: Ubud, Kintamani & Jimbaran', en: 'Route Option B: Ubud, Kintamani & Jimbaran' },
        subtitle: {
          id: 'Kombinasi suasana sejuk pegunungan Kintamani, Desa Penglipuran, terasering Ubud, dan senja Jimbaran.',
          en: 'Highland volcano views in Kintamani, Penglipuran heritage village, Ubud terraces, and Jimbaran.',
        },
        itinerary: [
          {
            day: 1,
            title: {
              id: 'Penjemputan Bandara, Desa Penglipuran, Kintamani & Jimbaran',
              en: 'Airport Arrival, Penglipuran Village, Kintamani & Jimbaran',
            },
            summary: {
              id: 'Menjelajahi keasrian Desa Adat Penglipuran, makan siang panorama Gunung Batur, dan makan malam di Jimbaran.',
              en: 'Visit traditional Penglipuran village, dine overlooking Mount Batur caldera, and enjoy evening seafood at Jimbaran.',
            },
            activities: {
              id: [
                'Penjemputan di Bandara Ngurah Rai dengan kalungan bunga',
                'Menyusuri tata ruang tradisional Desa Wisata Penglipuran Bangli',
                'Makan siang di restoran panorama Gunung & Danau Batur Kintamani',
                'Singgah di terasering sawah hijau kawasan Tegallalang Ubud',
                'Makan malam seafood tepi Pantai Jimbaran & check-in hotel',
              ],
              en: [
                'Airport pickup at Ngurah Rai with flower garland welcome',
                'Walk along the pristine bamboo-lined lanes of Penglipuran Village',
                'Panoramic lunch overlooking Mount and Lake Batur in Kintamani',
                'Photo stop at Tegallalang emerald rice terraces in Ubud',
                'Seafood dinner on Jimbaran Beach and check-in to hotel',
              ],
            },
            steps: [
              {
                code: '1.1',
                time: '09.30 WITA',
                title: { id: 'Penjemputan Bandara & Menuju Bangli', en: 'Airport Pickup & Drive to Bangli' },
                description: {
                  id: 'Penyambutan hangat di bandara lalu perjalanan menuju dataran tengah Pulau Bali.',
                  en: 'Warm airport welcome before ascending toward Bali’s lush central highlands.',
                },
              },
              {
                code: '1.2',
                time: '11.30 WITA',
                title: { id: 'Desa Adat Penglipuran & Kaldera Kintamani', en: 'Penglipuran Village & Kintamani Caldera' },
                description: {
                  id: 'Mengunjungi salah satu desa terbersih di dunia dilanjutkan santap siang berlatar Gunung Batur.',
                  en: 'Explore one of the world’s cleanest heritage villages followed by lunch facing Mount Batur.',
                },
              },
              {
                code: '1.3',
                time: '15.00 WITA',
                title: { id: 'Terasering Tegallalang & Agrowisata Kopi', en: 'Tegallalang Rice Terrace & Coffee Walk' },
                description: {
                  id: 'Menikmati lanskap sawah berundak khas Ubud serta mencicipi seduhan teh dan kopi lokal.',
                  en: 'Admire Ubud’s terraced rice paddies and sample artisanal Balinese teas and coffees.',
                },
              },
              {
                code: '1.4',
                time: '18.30 WITA',
                title: { id: 'Makan Malam Seafood Jimbaran & Check-in', en: 'Jimbaran Beach Dinner & Hotel Check-in' },
                description: {
                  id: 'Kembali ke Bali Selatan untuk makan malam tepi laut di Jimbaran lalu istirahat di hotel.',
                  en: 'Return south for beachfront grilled seafood in Jimbaran before checking in to your hotel.',
                },
              },
            ],
          },
          {
            day: 2,
            title: {
              id: 'Tanjung Benoa / Pantai Kuta & Belanja Oleh-Oleh Khas Bali',
              en: 'Tanjung Benoa / Kuta Coast & Souvenir Shopping',
            },
            summary: {
              id: 'Pagi santai di pesisir Nusa Dua atau Kuta, makan siang lokal, belanja suvenir, dan pengantaran ke bandara.',
              en: 'Relaxed coastal morning in Nusa Dua or Kuta, local lunch, souvenir shopping, and airport drop-off.',
            },
            activities: {
              id: [
                'Sarapan pagi di hotel dan check-out',
                'Kunjungan santai ke pesisir Tanjung Benoa Nusa Dua atau Pantai Kuta',
                'Makan siang kuliner khas Bali',
                'Berbelanja buah tangan di pusat oleh-oleh Krisna / Joger',
                'Pengantaran menuju Bandara Internasional Ngurah Rai',
              ],
              en: [
                'Hotel breakfast and check-out',
                'Morning coastal visit to Tanjung Benoa Nusa Dua or Kuta Beach',
                'Authentic Balinese lunch',
                'Souvenir shopping at Krisna or Joger',
                'Transfer to Ngurah Rai International Airport',
              ],
            },
          },
        ],
      },
    ],
    pricingTable: [
      {
        id: 'tier-land',
        tierName: { id: 'Tanpa Hotel (Land Tour)', en: 'Land Tour Only (No Hotel)' },
        hotelsExample: { id: 'Penginapan diatur sendiri oleh peserta', en: 'Accommodation arranged separately by guests' },
        brackets: [
          { paxLabel: { id: '2–3 Orang', en: '2–3 Pax' }, pricePerPax: 1350000 },
          { paxLabel: { id: '4–6 Orang', en: '4–6 Pax' }, pricePerPax: 1225000 },
          { paxLabel: { id: '7–10 Orang', en: '7–10 Pax' }, pricePerPax: 1150000 },
        ],
      },
      {
        id: 'tier-3star',
        tierName: { id: 'Paket + Hotel Bintang 3 (★3)', en: 'Package + 3-Star Hotel (★3)' },
        hotelsExample: { id: 'Neo Kuta / Favehotel / Quest San atau setaraf', en: 'Neo Kuta / Favehotel / Quest San or similar' },
        brackets: [
          { paxLabel: { id: '2–3 Orang', en: '2–3 Pax' }, pricePerPax: 1650000 },
          { paxLabel: { id: '4–6 Orang', en: '4–6 Pax' }, pricePerPax: 1525000 },
          { paxLabel: { id: '7–10 Orang', en: '7–10 Pax' }, pricePerPax: 1450000 },
        ],
      },
      {
        id: 'tier-4star',
        tierName: { id: 'Paket + Hotel Bintang 4 (★4)', en: 'Package + 4-Star Hotel (★4)' },
        hotelsExample: { id: 'Grand Sovereign / The ONE Legian / Mercure atau setaraf', en: 'Grand Sovereign / The ONE Legian / Mercure or similar' },
        brackets: [
          { paxLabel: { id: '2–3 Orang', en: '2–3 Pax' }, pricePerPax: 1920000 },
          { paxLabel: { id: '4–6 Orang', en: '4–6 Pax' }, pricePerPax: 1790000 },
          { paxLabel: { id: '7–10 Orang', en: '7–10 Pax' }, pricePerPax: 1710000 },
        ],
      },
    ],
    importantNotes: {
      id: [
        'Disarankan mengambil penerbangan tiba di Bali pagi hari (sebelum pukul 11.00 WITA) dan pulang sore/malam hari agar seluruh destinasi terjelajahi optimal.',
        'Kamar hotel dihitung 1 kamar berdua (Twin/Double Share). Peserta ganjil mendapatkan fasilitas Triple Share (Extra Bed).',
        'Terdapat penyesuaian tarif kamar (High Season Surcharge) pada periode Lebaran, libur sekolah Juni-Juli, serta Natal & Tahun Baru.',
      ],
      en: [
        'Morning arrival flights (before 11:00 AM) and late-afternoon/evening departures are recommended to maximize sightseeing.',
        'Hotel rooms are based on Twin/Double occupancy; odd-numbered groups receive an Extra Bed (Triple Share).',
        'High/Peak season hotel surcharges apply during Eid, June–July school holidays, and Christmas/New Year.',
      ],
    },
    images: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    ],
    recommendedHotelAreas: ['Seminyak', 'Jimbaran', 'Nusa Dua'],
    featured: false,
  },
  {
    id: 'reg-3h2m',
    slug: 'paket-tour-bali-3h2m',
    code: 'BP-REG-32',
    title: {
      id: 'Paket Tour Bali 3 Hari 2 Malam (3H2M)',
      en: 'Bali Private Tour Package 3 Days 2 Nights (3D2N)',
    },
    tagline: {
      id: 'Paket best-seller paling seimbang: Danau Bedugul, Tanah Lot, Tanjung Benoa, Tari Kecak Uluwatu & Jimbaran Seafood.',
      en: 'Our #1 best-selling balanced tour: Lake Bedugul, Tanah Lot, Tanjung Benoa, Uluwatu Kecak & Jimbaran Seafood.',
    },
    description: {
      id: 'Paket Tour Bali 3 Hari 2 Malam merupakan pilihan paling diminati oleh keluarga, pasangan, maupun sahabat yang baru pertama maupun kembali berlibur ke Pulau Dewata. Tersedia dua variasi rute unggulan (Opsi A: Bedugul & Pantai Selatan, atau Opsi B: Kintamani, Penglipuran & Pantai Selatan) lengkap dengan kendaraan privat, tiket wisata, hidangan kuliner pilihan, serta fleksibilitas kelas hotel.',
      en: 'Our 3 Days 2 Nights Bali Private Tour is the top choice for families, couples, and friends seeking the quintessential Bali holiday. Choose between two curated route variants (Option A: Bedugul Highlands & South Coast, or Option B: Kintamani Volcano, Penglipuran & South Coast) with full private transport, admission tickets, curated dining, and flexible hotel classes.',
    },
    destination: 'Bedugul, Tanah Lot, Nusa Dua, Uluwatu & Jimbaran',
    duration: {
      id: '3 Hari 2 Malam',
      en: '3 Days 2 Nights',
    },
    durationDays: 3,
    price: 1750000,
    priceUnit: {
      id: '/ orang',
      en: '/ person',
    },
    category: 'regular',
    badge: {
      id: 'Terlaris (Best Seller)',
      en: 'Best Seller',
    },
    minParticipants: {
      id: 'Minimal 2 orang (Private Tour)',
      en: 'Minimum 2 pax (Private Tour)',
    },
    highlights: {
      id: [
        'Sambutan kalungan bunga di Bandara Ngurah Rai & mobil privat penuh',
        'Pura Ulun Danu Beratan Bedugul yang sejuk & Pura Tanah Lot',
        'Keseruan bahari Tanjung Benoa Nusa Dua (termasuk 1x Banana Boat / Pulau Penyu)',
        'Garuda Wisnu Kencana (GWK), Pura Uluwatu & Pementasan Tari Kecak Sunset',
        'Makan malam romantis hidangan laut segar di Pantai Jimbaran',
      ],
      en: [
        'Airport flower garland welcome & dedicated private AC transport',
        'Cool lakeside Ulun Danu Beratan Temple in Bedugul & Tanah Lot',
        'Tanjung Benoa watersport hub visit (includes Banana Boat / Turtle Island)',
        'GWK Cultural Park, Uluwatu Temple & Sunset Kecak Fire Dance ticket',
        'Beachfront grilled seafood feast on the sands of Jimbaran',
      ],
    },
    inclusions: {
      id: [
        'Transportasi mobil ber-AC privat penuh selama 3 hari + sopir ramah & BBM',
        'Menginap 2 malam di hotel pilihan (untuk kategori Paket + Hotel ★3 / ★4 / ★5)',
        'Sambutan kalungan bunga saat penjemputan di Bandara Bali',
        'Tiket masuk seluruh objek wisata sesuai opsi rute yang dipilih',
        'Tiket pertunjukan Tari Kecak Uluwatu & 1x aktivitas Banana Boat Tanjung Benoa',
        'Konsumsi lengkap: 2x sarapan hotel, 3x makan siang kuliner lokal, 2x makan malam (termasuk 1x Seafood Jimbaran)',
        'Seluruh biaya tol Bali Mandara, parkir, dan air mineral dingin harian',
      ],
      en: [
        'Full 3-day private AC vehicle with friendly driver-guide & fuel',
        '2 nights hotel accommodation (for +Hotel ★3 / ★4 / ★5 options)',
        'Traditional flower garland welcome upon airport arrival',
        'All sightseeing admission fees listed in your chosen route option',
        'Uluwatu Sunset Kecak Dance ticket & 1x Banana Boat ride at Tanjung Benoa',
        'Full meals: 2 hotel breakfasts, 3 local lunches, 2 dinners (including 1x Jimbaran Seafood)',
        'Bali Mandara toll road fees, parking charges, and daily chilled mineral water',
      ],
    },
    exclusions: {
      id: [
        'Tiket pesawat terbang PP dari kota asal',
        'Permainan watersport tambahan di Tanjung Benoa di luar paket',
        'Keperluan pribadi di hotel (minibar, laundry, telepon)',
        'Tipping sukarela untuk pengemudi / pemandu',
      ],
      en: [
        'Round-trip airfare from your origin city',
        'Additional optional watersport rides at Tanjung Benoa',
        'Personal hotel incidentals (minibar, laundry)',
        'Discretionary gratuities for driver / tour guide',
      ],
    },
    childPolicy: {
      id: [
        'Balita usia 0–2 tahun: Gratis tanpa biaya tambahan.',
        'Anak usia 3–10 tahun tanpa extra bed (berbagi kasur dengan orang tua): 50% dari tarif dewasa.',
        'Anak usia 3–10 tahun menggunakan extra bed sendiri: 75% dari tarif dewasa.',
      ],
      en: [
        'Infants aged 0–2 years: Complimentary (free of charge).',
        'Children aged 3–10 years sharing bed with parents (no extra bed): 50% of adult rate.',
        'Children aged 3–10 years with hotel extra bed: 75% of adult rate.',
      ],
    },
    itinerary: [
      {
        day: 1,
        title: {
          id: 'Bandara Ngurah Rai, Danau Beratan Bedugul & Sunset Tanah Lot',
          en: 'Airport Arrival, Lake Beratan Bedugul & Tanah Lot Sunset',
        },
        summary: {
          id: 'Penjemputan bandara, makan siang Ayam Betutu khas Bali, udara sejuk Pura Ulun Danu Bedugul, kebun kopi, dan senja Tanah Lot.',
          en: 'Airport meet-and-greet, signature Ayam Betutu lunch, misty Ulun Danu Bedugul temple, coffee garden, and Tanah Lot sunset.',
        },
        activities: {
          id: [
            'Penjemputan di Bandara Ngurah Rai & sambutan kalungan bunga',
            'Makan siang Ayam Betutu khas Gilimanuk (Halal)',
            'Kunjungan ke Pura Ulun Danu Beratan di dataran tinggi Bedugul',
            'Singgah mencicipi kopi dan teh herbal di Agrowisata Hidden Garden',
            'Menikmati panorama sore di Pura Luhur Tanah Lot',
            'Makan malam di restoran kawasan Tanah Lot / Kuta lalu check-in hotel',
          ],
          en: [
            'Airport pickup at Ngurah Rai & flower garland greeting',
            'Lunch featuring authentic Balinese Ayam Betutu (Halal)',
            'Visit iconic lakeside Ulun Danu Beratan Temple in cool Bedugul',
            'Tasting stop at a lush highland coffee and herbal garden',
            'Late afternoon ocean views at sacred Tanah Lot Temple',
            'Dinner at a local restaurant followed by hotel check-in',
          ],
        },
        steps: [
          {
            code: '1.1',
            time: '09.30 WITA',
            title: { id: 'Penjemputan di Bandara Ngurah Rai & Kalungan Bunga', en: 'Airport Arrival & Flower Garland Greeting' },
            description: {
              id: 'Penjemputan tepat waktu di terminal kedatangan Bandara Bali dilengkapi sambutan kalungan bunga segar.',
              en: 'Punctual pickup at Bali Airport arrival terminal accompanied by a fresh welcome flower garland.',
            },
          },
          {
            code: '1.2',
            time: '11.00 WITA',
            title: { id: 'Makan Siang Ayam Betutu Khas Bali', en: 'Signature Balinese Ayam Betutu Lunch' },
            description: {
              id: 'Menyantap sajian kuliner autentik Bali yang kaya rempah sebelum memulai perjalanan menuju dataran tinggi.',
              en: 'Enjoy spice-rich authentic Balinese cuisine before heading north toward the mountain highlands.',
            },
          },
          {
            code: '1.3',
            time: '13.30 WITA',
            title: { id: 'Pura Ulun Danu Beratan Bedugul', en: 'Ulun Danu Beratan Lake Temple, Bedugul' },
            description: {
              id: 'Menikmati hawa pegunungan sejuk dan berfoto dengan latar pura terapung ikonik di tepi Danau Beratan.',
              en: 'Breathe crisp mountain air and capture photos of the iconic tiered shrine floating on Lake Beratan.',
            },
          },
          {
            code: '1.4',
            time: '15.15 WITA',
            title: { id: 'Agrowisata Kopi Bali', en: 'Balinese Coffee & Spice Agrotourism' },
            description: {
              id: 'Melihat proses pengolahan biji kopi tradisional Bali sambil bersantai mencicipi aneka teh dan cokelat hangat.',
              en: 'Learn about traditional Balinese coffee roasting while sampling complimentary herbal teas and cocoa.',
            },
          },
          {
            code: '1.5',
            time: '17.00 WITA',
            title: { id: 'Sunset Pura Tanah Lot & Makan Malam', en: 'Tanah Lot Sunset & Evening Dinner' },
            description: {
              id: 'Menyaksikan siluet megah Pura Tanah Lot diterpa ombak senja, dilanjutkan makan malam dan check-in hotel.',
              en: 'Watch sunset waves crash around Tanah Lot’s offshore rock temple, followed by dinner and hotel check-in.',
            },
          },
        ],
      },
      {
        day: 2,
        title: {
          id: 'Watersport Tanjung Benoa, GWK, Tari Kecak Uluwatu & Jimbaran',
          en: 'Tanjung Benoa Watersports, GWK, Uluwatu Kecak & Jimbaran Seafood',
        },
        summary: {
          id: 'Seharian penuh mengeksplorasi pesona bahari dan budaya Bali Selatan, ditutup makan malam seafood di tepi Pantai Jimbaran.',
          en: 'A full day of coastal fun and cultural grandeur in South Bali, capped with candlelit seafood on Jimbaran Beach.',
        },
        activities: {
          id: [
            'Sarapan pagi di hotel & penjemputan pukul 08.30 WITA',
            'Wahana bahari Tanjung Benoa Nusa Dua (termasuk 1x putaran Banana Boat)',
            'Makan siang kuliner khas Nusa Dua',
            'Mengunjungi kemegahan taman budaya Garuda Wisnu Kencana (GWK)',
            'Pura Luhur Uluwatu & menonton pertunjukan Tari Kecak berlatar sunset',
            'Makan malam BBQ Seafood segar di tepi Pantai Jimbaran',
          ],
          en: [
            'Breakfast at hotel & morning pickup at 08:30 AM',
            'Watersport fun at Tanjung Benoa Nusa Dua (includes 1x Banana Boat ride)',
            'Local Balinese lunch in Nusa Dua',
            'Explore monumental Garuda Wisnu Kencana (GWK) Cultural Park',
            'Visit Uluwatu Temple cliffs & watch the Sunset Kecak Fire Dance',
            'Fresh BBQ Seafood dinner by the waves on Jimbaran Beach',
          ],
        },
        steps: [
          {
            code: '2.1',
            time: '08.30 WITA',
            title: { id: 'Sarapan Hotel & Menuju Tanjung Benoa', en: 'Breakfast & Transfer to Tanjung Benoa' },
            description: {
              id: 'Setelah sarapan di hotel, perjalanan melewati Tol Laut Bali Mandara menuju semenanjung Tanjung Benoa.',
              en: 'After hotel breakfast, cruise over the scenic Bali Mandara ocean tollway to Tanjung Benoa peninsula.',
            },
          },
          {
            code: '2.2',
            time: '09.30 WITA',
            title: { id: 'Aktivitas Bahari Tanjung Benoa (Free Banana Boat)', en: 'Tanjung Benoa Watersports (Banana Boat Included)' },
            description: {
              id: 'Menikmati keseruan permainan air Banana Boat di perairan tenang Nusa Dua (wahana lain tersedia opsional).',
              en: 'Enjoy an included Banana Boat ride on Nusa Dua’s calm waters, with optional parasailing or jet-ski available.',
            },
          },
          {
            code: '2.3',
            time: '12.30 WITA',
            title: { id: 'Makan Siang & Garuda Wisnu Kencana (GWK)', en: 'Lunch & GWK Cultural Park' },
            description: {
              id: 'Santap siang lezat di kawasan Nusa Dua kemudian menjelajahi kompleks patung megah Garuda Wisnu Kencana.',
              en: 'Savor local specialties for lunch before touring the awe-inspiring Garuda Wisnu Kencana monument.',
            },
          },
          {
            code: '2.4',
            time: '16.30 WITA',
            title: { id: 'Pura Luhur Uluwatu & Tari Kecak Api Sunset', en: 'Uluwatu Temple & Sunset Kecak Fire Dance' },
            description: {
              id: 'Mengagumi pura di tebing samudra lalu menyaksikan pementasan kolosal Tari Kecak dengan latar matahari terbenam.',
              en: 'Tour the dramatic cliff temple and witness the captivating open-air Kecak dance as the sun sinks into the sea.',
            },
          },
          {
            code: '2.5',
            time: '19.30 WITA',
            title: { id: 'Makan Malam Seafood Pantai Jimbaran & Kembali ke Hotel', en: 'Jimbaran Beach Seafood Dinner & Return to Hotel' },
            description: {
              id: 'Menikmati paket hidangan laut bakar lengkap di tepi Pantai Jimbaran sebelum kembali ke hotel untuk istirahat.',
              en: 'Feast on freshly grilled seafood on Jimbaran’s sandy bay before returning comfortably to your hotel.',
            },
          },
        ],
      },
      {
        day: 3,
        title: {
          id: 'Wisata Santai Gianyar / Jembatan Kaca, Oleh-Oleh & Bandara',
          en: 'Scenic Gianyar / Glass Bridge, Souvenir Shopping & Airport Transfer',
        },
        summary: {
          id: 'Pagi santai di hotel, makan siang bernuansa lembah tropis Gianyar, berbelanja buah tangan khas Bali, dan pengantaran bandara.',
          en: 'Relaxed morning check-out, scenic river-valley lunch, complete souvenir shopping, and smooth airport drop-off.',
        },
        activities: {
          id: [
            'Sarapan pagi di hotel & check-out pukul 09.30 WITA',
            'Mengunjungi destinasi foto Jembatan Kaca Gianyar atau Pantai Kuta',
            'Makan siang dengan suasana tebing sungai tropis asri',
            'Berbelanja lengkap di Krisna Oleh-Oleh Khas Bali',
            'Pengantaran tepat waktu menuju Bandara I Gusti Ngurah Rai',
          ],
          en: [
            'Breakfast at hotel & check-out at 09:30 AM',
            'Visit Gianyar Glass Bridge viewpoint or stroll along Kuta Beach',
            'Scenic lunch overlooking lush tropical river gorges',
            'One-stop souvenir shopping at Krisna Bali',
            'Punctual drop-off at Ngurah Rai International Airport',
          ],
        },
        steps: [
          {
            code: '3.1',
            time: '09.30 WITA',
            title: { id: 'Sarapan Pagi & Check-out Hotel', en: 'Hotel Breakfast & Check-out' },
            description: {
              id: 'Menikmati sarapan pagi terakhir di hotel dan pengecekan barang bawaan sebelum check-out.',
              en: 'Enjoy a leisurely final breakfast at your hotel and complete check-out formalities.',
            },
          },
          {
            code: '3.2',
            time: '11.00 WITA',
            title: { id: 'Wisata Lembah Gianyar & Makan Siang Panorama', en: 'Gianyar Valley Sightseeing & Scenic Lunch' },
            description: {
              id: 'Menikmati lanskap hijau lembah Sungai Petanu dan bersantap siang di restoran bernuansa kolam batu alam.',
              en: 'Take in lush Petanu river valley scenery followed by lunch at a tropical stone-pool restaurant.',
            },
          },
          {
            code: '3.3',
            time: '14.00 WITA',
            title: { id: 'Belanja Buah Tangan & Pengantaran Bandara', en: 'Souvenir Shopping & Airport Transfer' },
            description: {
              id: 'Singgah berbelanja oleh-oleh khas Bali kemudian diantar tepat waktu menuju Bandara Ngurah Rai.',
              en: 'Pick up favorite Balinese snacks and handicrafts before timely drop-off at Ngurah Rai Airport.',
            },
          },
        ],
      },
    ],
    routeOptions: [
      {
        id: 'opt-32-a',
        code: 'A',
        label: { id: 'Opsi Rute A: Bedugul, Tanah Lot & Uluwatu', en: 'Route Option A: Bedugul, Tanah Lot & Uluwatu' },
        subtitle: {
          id: 'Rute klasik terfavorit menggabungkan Danau Beratan Bedugul, Tanah Lot, Tanjung Benoa, GWK, Uluwatu & Jimbaran.',
          en: 'Most popular route blending Lake Beratan Bedugul, Tanah Lot, Tanjung Benoa, GWK, Uluwatu & Jimbaran.',
        },
        itinerary: [],
      },
      {
        id: 'opt-32-b',
        code: 'B',
        label: { id: 'Opsi Rute B: Desa Penglipuran, Kintamani & Uluwatu', en: 'Route Option B: Penglipuran, Kintamani & Uluwatu' },
        subtitle: {
          id: 'Alternatif favorit dengan panorama Gunung Batur Kintamani, Desa Adat Penglipuran, Ubud, Pantai Melasti & Jimbaran.',
          en: 'Scenic volcano variant featuring Mount Batur Kintamani, Penglipuran Village, Ubud, Melasti Beach & Jimbaran.',
        },
        itinerary: [
          {
            day: 1,
            title: {
              id: 'Penjemputan Bandara, Pantai Melasti, Pura Uluwatu & Jimbaran',
              en: 'Airport Arrival, Melasti Beach, Uluwatu Kecak & Jimbaran',
            },
            summary: {
              id: 'Tiba di Bali langsung menikmati pesisir tebing selatan, Tari Kecak Uluwatu, dan makan malam seafood Jimbaran.',
              en: 'Arrive in Bali and head south for turquoise Melasti Beach, Uluwatu Kecak dance, and Jimbaran seafood dinner.',
            },
            activities: {
              id: [
                'Penjemputan di Bandara Ngurah Rai dengan kalungan bunga',
                'Makan siang kuliner khas Bali',
                'Mengunjungi tebing eksotis Pantai Melasti Ungasan',
                'Pura Luhur Uluwatu & menonton Tari Kecak Sunset',
                'Makan malam seafood di tepi Pantai Jimbaran & check-in hotel',
              ],
              en: [
                'Airport pickup at Ngurah Rai with flower garland welcome',
                'Local Balinese lunch',
                'Explore the dramatic coastal cliffs of Melasti Beach',
                'Uluwatu Temple visit & Sunset Kecak Fire Dance',
                'Beachfront seafood dinner at Jimbaran & hotel check-in',
              ],
            },
          },
          {
            day: 2,
            title: {
              id: 'Desa Adat Penglipuran, Kaldera Kintamani & Terasering Ubud',
              en: 'Penglipuran Heritage Village, Kintamani Volcano & Ubud Terraces',
            },
            summary: {
              id: 'Eksplorasi budaya Desa Penglipuran, makan siang panorama Gunung Batur Kintamani, kebun kopi, dan sawah Ubud.',
              en: 'Cultural walk in Penglipuran Village, Mount Batur view lunch in Kintamani, coffee plantation, and Ubud terraces.',
            },
            activities: {
              id: [
                'Sarapan pagi di hotel & penjemputan pukul 08.30 WITA',
                'Singgah melihat kerajinan batik dan perak di Desa Tohpati / Celuk',
                'Menjelajahi keasrian arsitektur tradisional Desa Wisata Penglipuran',
                'Makan siang prasmanan berlatar Gunung & Danau Batur Kintamani',
                'Kunjungan ke Terasering Sawah Tegallalang & Agrowisata Kopi Ubud',
                'Makan malam kuliner khas Bali sebelum kembali ke hotel',
              ],
              en: [
                'Breakfast at hotel & 08:30 AM departure',
                'Artisan silver and batik gallery stop in Celuk',
                'Stroll through pristine traditional compounds at Penglipuran Village',
                'Buffet lunch overlooking Mount Batur volcano and lake in Kintamani',
                'Visit Tegallalang emerald rice terraces & Ubud coffee plantation',
                'Evening dinner at a local restaurant before returning to hotel',
              ],
            },
          },
          {
            day: 3,
            title: {
              id: 'Sunset / Pagi Tanah Lot, Belanja Oleh-Oleh & Transfer Bandara',
              en: 'Tanah Lot Sea Temple, Souvenir Shopping & Airport Transfer',
            },
            summary: {
              id: 'Check-out hotel, mengunjungi Pura Tanah Lot, makan siang nyaman, belanja buah tangan lengkap, dan menuju bandara.',
              en: 'Hotel check-out, morning visit to Tanah Lot Temple, lunch, souvenir shopping, and airport departure.',
            },
            activities: {
              id: [
                'Sarapan di hotel dan proses check-out',
                'Mengunjungi ikon wisata Pura Tanah Lot',
                'Makan siang di restoran lokal',
                'Berbelanja buah tangan di Krisna Oleh-Oleh Bali',
                'Pengantaran tepat waktu ke Bandara Ngurah Rai',
              ],
              en: [
                'Breakfast at hotel and check-out',
                'Morning visit to iconic Tanah Lot Sea Temple',
                'Lunch at a comfortable local restaurant',
                'Souvenir shopping at Krisna Bali',
                'Timely transfer to Ngurah Rai International Airport',
              ],
            },
          },
        ],
      },
    ],
    pricingTable: [
      {
        id: 'tier-land',
        tierName: { id: 'Tanpa Hotel (Land Tour)', en: 'Land Tour Only (No Hotel)' },
        hotelsExample: { id: 'Akomodasi diatur sendiri oleh tamu', en: 'Hotel booked separately by guests' },
        brackets: [
          { paxLabel: { id: '2–3 Orang', en: '2–3 Pax' }, pricePerPax: 1980000 },
          { paxLabel: { id: '4–6 Orang', en: '4–6 Pax' }, pricePerPax: 1850000 },
          { paxLabel: { id: '7–10 Orang', en: '7–10 Pax' }, pricePerPax: 1750000 },
        ],
      },
      {
        id: 'tier-3star',
        tierName: { id: 'Paket + Hotel Bintang 3 (★3)', en: 'Package + 3-Star Hotel (★3)' },
        hotelsExample: { id: 'Favehotel Kuta / Neo+ Legian / Quest San atau setaraf', en: 'Favehotel Kuta / Neo+ Legian / Quest San or similar' },
        brackets: [
          { paxLabel: { id: '2–3 Orang', en: '2–3 Pax' }, pricePerPax: 2550000 },
          { paxLabel: { id: '4–6 Orang', en: '4–6 Pax' }, pricePerPax: 2390000 },
          { paxLabel: { id: '7–10 Orang', en: '7–10 Pax' }, pricePerPax: 2290000 },
        ],
      },
      {
        id: 'tier-4star',
        tierName: { id: 'Paket + Hotel Bintang 4 (★4)', en: 'Package + 4-Star Hotel (★4)' },
        hotelsExample: { id: 'The ONE Legian / Mercure Legian / Sol by Melia atau setaraf', en: 'The ONE Legian / Mercure Legian / Sol by Melia or similar' },
        brackets: [
          { paxLabel: { id: '2–3 Orang', en: '2–3 Pax' }, pricePerPax: 3050000 },
          { paxLabel: { id: '4–6 Orang', en: '4–6 Pax' }, pricePerPax: 2890000 },
          { paxLabel: { id: '7–10 Orang', en: '7–10 Pax' }, pricePerPax: 2790000 },
        ],
      },
      {
        id: 'tier-5star',
        tierName: { id: 'Paket + Resort Bintang 5 (★5)', en: 'Package + 5-Star Resort (★5)' },
        hotelsExample: { id: 'Pullman Legian / Courtyard Seminyak / Grand Mirage atau setaraf', en: 'Pullman Legian / Courtyard Seminyak / Grand Mirage or similar' },
        brackets: [
          { paxLabel: { id: '2–3 Orang', en: '2–3 Pax' }, pricePerPax: 4250000 },
          { paxLabel: { id: '4–6 Orang', en: '4–6 Pax' }, pricePerPax: 4050000 },
          { paxLabel: { id: '7–10 Orang', en: '7–10 Pax' }, pricePerPax: 3950000 },
        ],
      },
    ],
    importantNotes: {
      id: [
        'Seluruh perjalanan bersifat 100% Private Tour (tidak digabung dengan peserta lain).',
        'Rekomendasi jadwal penerbangan: Tiba hari pertama sebelum pukul 11.00 WITA, kepulangan hari ketiga setelah pukul 16.00 WITA.',
        'Daftar hotel pada masing-masing bintang dapat disesuaikan dengan hotel favorit Anda dari katalog hotel kami.',
      ],
      en: [
        '100% Private Tour service — your vehicle and driver are dedicated solely to your party.',
        'Recommended flights: Arrive Day 1 before 11:00 AM; depart Day 3 after 04:00 PM.',
        'Hotel choices within each star tier can be customized with properties from our Hotels catalog.',
      ],
    },
    images: [
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    ],
    recommendedHotelAreas: ['Seminyak', 'Nusa Dua', 'Jimbaran'],
    featured: true,
  },
  {
    id: 'reg-4h3m',
    slug: 'paket-tour-bali-4h3m',
    code: 'BP-REG-43',
    title: {
      id: 'Paket Tour Bali 4 Hari 3 Malam (4H3M)',
      en: 'Bali Private Tour Package 4 Days 3 Nights (4D3N)',
    },
    tagline: {
      id: 'Eksplorasi paripurna Utara hingga Selatan: Bedugul, Tanah Lot, Ubud Kintamani, Pantai Melasti, Uluwatu & Jimbaran.',
      en: 'Comprehensive North-to-South discovery: Bedugul, Tanah Lot, Ubud Kintamani, Melasti Beach, Uluwatu & Jimbaran.',
    },
    description: {
      id: 'Durasi 4 Hari 3 Malam memberikan keleluasaan ideal untuk menikmati seluruh wajah terbaik Bali tanpa terburu-buru. Anda akan diajak menjelajahi dataran tinggi Danau Beratan Bedugul, megahnya kaldera Gunung Batur Kintamani dan Desa Penglipuran, terasering hijau Ubud, hingga deretan pantai pasir putih di Kuta Selatan serta jamuan seafood tepi Pantai Jimbaran.',
      en: 'A 4-day, 3-night stay offers the ideal rhythm to experience Bali’s diverse landscapes without rushing. Journey from the misty lake temples of Bedugul and Mount Batur’s volcanic caldera to Ubud’s emerald terraces, Penglipuran heritage village, white-sand southern beaches, and sunset seafood in Jimbaran.',
    },
    destination: 'Bedugul, Tanah Lot, Kintamani, Ubud, Nusa Dua & Uluwatu',
    duration: {
      id: '4 Hari 3 Malam',
      en: '4 Days 3 Nights',
    },
    durationDays: 4,
    price: 2350000,
    priceUnit: {
      id: '/ orang',
      en: '/ person',
    },
    category: 'regular',
    badge: {
      id: 'Favorit Keluarga',
      en: 'Family Choice',
    },
    minParticipants: {
      id: 'Minimal 2 orang (Private Tour)',
      en: 'Minimum 2 pax (Private Tour)',
    },
    highlights: {
      id: [
        'Danau Beratan Bedugul, Gerbang Handara & Sunset Pura Tanah Lot',
        'Panorama Gunung Batur Kintamani, Desa Penglipuran & Sawah Tegallalang Ubud',
        'Watersport Tanjung Benoa, Pantai Melasti, GWK & Tari Kecak Uluwatu',
        'Makan malam seafood romantis di tepi Pantai Jimbaran',
        'Tempo perjalanan santai ramah anak-anak maupun orang tua',
      ],
      en: [
        'Lake Beratan Bedugul, Handara Gate & Tanah Lot coastal sunset',
        'Mount Batur Kintamani vista, Penglipuran Village & Ubud rice terraces',
        'Tanjung Benoa watersports, Melasti Beach, GWK & Uluwatu Kecak Dance',
        'Sunset grilled seafood dinner on Jimbaran Beach',
        'Relaxed travel pacing comfortable for young children and seniors alike',
      ],
    },
    inclusions: {
      id: [
        'Transportasi mobil ber-AC privat penuh selama 4 hari + sopir & BBM',
        'Akomodasi hotel 3 malam sesuai kelas pilihan (untuk opsi +Hotel)',
        'Sambutan kalungan bunga saat tiba di Bandara Ngurah Rai',
        'Tiket masuk seluruh objek wisata, Tari Kecak & 1x Banana Boat Tanjung Benoa',
        'Makan lengkap sesuai program (3x sarapan hotel, 4x makan siang, 3x makan malam)',
        'Tiket parkir, tol Bali Mandara, dan air mineral dingin setiap hari',
      ],
      en: [
        '4 days private AC vehicle with dedicated driver-guide & fuel',
        '3 nights hotel stay per chosen tier (for +Hotel options)',
        'Airport welcome flower garland upon arrival',
        'All attraction tickets, Kecak Dance pass & 1x Banana Boat ride',
        'Scheduled meals (3 hotel breakfasts, 4 lunches, 3 dinners)',
        'All parking fees, toll charges, and daily chilled bottled water',
      ],
    },
    exclusions: {
      id: [
        'Tiket pesawat terbang PP',
        'Aktivitas watersport atau wahana ayunan tambahan di luar paket',
        'Pengeluaran pribadi peserta & tipping sukarela pengemudi',
      ],
      en: [
        'Round-trip flight tickets',
        'Optional extra watersports or jungle swing rides beyond inclusions',
        'Personal shopping expenses & voluntary driver gratuities',
      ],
    },
    childPolicy: {
      id: [
        'Anak di bawah 3 tahun: Gratis.',
        'Anak 3–10 tahun tanpa extra bed: 50% dari harga dewasa.',
        'Anak 3–10 tahun dengan extra bed: 75% dari harga dewasa.',
      ],
      en: [
        'Children under 3 years: Free of charge.',
        'Children 3–10 years sharing bed (no extra bed): 50% of adult price.',
        'Children 3–10 years with extra bed: 75% of adult price.',
      ],
    },
    itinerary: [
      {
        day: 1,
        title: {
          id: 'Penjemputan Bandara, Pantai Melasti / Pandawa & Check-in Hotel',
          en: 'Airport Arrival, Melasti / Pandawa Beach & Hotel Check-in',
        },
        summary: {
          id: 'Penyambutan hangat di bandara, bersantai menikmati pesisir pantai pasir putih Bali Selatan, makan malam, dan istirahat di hotel.',
          en: 'Warm airport greeting, afternoon coastal visit to white-sand South Bali beaches, dinner, and hotel check-in.',
        },
        activities: {
          id: [
            'Penjemputan di Bandara Ngurah Rai dengan kalungan bunga',
            'Makan siang kuliner khas Bali (menyesuaikan jam kedatangan)',
            'Menikmati panorama tebing kapur dan laut biru Pantai Melasti',
            'Makan malam di restoran lokal nyaman & check-in hotel',
          ],
          en: [
            'Airport greeting at Ngurah Rai with flower garland',
            'Welcome lunch at a local Balinese restaurant',
            'Relax by the turquoise waters and cliffs of Melasti Beach',
            'Evening dinner followed by smooth hotel check-in',
          ],
        },
      },
      {
        day: 2,
        title: {
          id: 'Dataran Tinggi Bedugul, Gerbang Handara & Sunset Tanah Lot',
          en: 'Bedugul Highlands, Handara Gate & Tanah Lot Sunset',
        },
        summary: {
          id: 'Menjelajahi kesejukan pegunungan tengah Bali, Pura Ulun Danu Beratan, spot foto Handara Gate, hingga matahari terbenam di Tanah Lot.',
          en: 'Explore cool mountain lakes at Ulun Danu Beratan, iconic Handara Gate, coffee gardens, and sunset at Tanah Lot.',
        },
        activities: {
          id: [
            'Sarapan pagi di hotel & penjemputan pukul 08.30 WITA',
            'Berfoto di ikonik Gerbang Bali Handara & Bukit Wanagiri',
            'Mengunjungi Pura Ulun Danu Beratan Bedugul & makan siang buffet',
            'Mencicipi kopi dan teh herbal di Agrowisata Kopi Bali',
            'Menikmati senja keemasan di Pura Luhur Tanah Lot & makan malam',
          ],
          en: [
            'Hotel breakfast & 08:30 AM departure',
            'Photo stop at iconic Handara Gate & Wanagiri highland lookout',
            'Explore Ulun Danu Beratan Lake Temple & highland buffet lunch',
            'Visit traditional Balinese coffee and herbal plantation',
            'Golden sunset at Tanah Lot Sea Temple followed by dinner',
          ],
        },
      },
      {
        day: 3,
        title: {
          id: 'Desa Penglipuran, Kintamani, Ubud, Uluwatu Kecak & Jimbaran',
          en: 'Penglipuran Village, Kintamani, Ubud, Uluwatu & Jimbaran Dinner',
        },
        summary: {
          id: 'Kombinasi budaya Desa Penglipuran, panorama Gunung Batur Kintamani, sawah Ubud, dan makan malam seafood di Pantai Jimbaran.',
          en: 'Heritage walk in Penglipuran, Mount Batur view lunch, Ubud rice terraces, and beachfront seafood dinner in Jimbaran.',
        },
        activities: {
          id: [
            'Sarapan di hotel & perjalanan menuju Kabupaten Bangli',
            'Menyusuri keasrian Desa Adat Penglipuran yang tertata apik',
            'Makan siang berlatar kaldera Gunung & Danau Batur Kintamani',
            'Singgah di Terasering Sawah Tegallalang Ubud',
            'Sore menuju Uluwatu / langsung makan malam Seafood Pantai Jimbaran',
          ],
          en: [
            'Breakfast at hotel & drive toward Bangli regency',
            'Visit the celebrated traditional village of Penglipuran',
            'Panoramic lunch facing Mount Batur volcano and crater lake',
            'Walk along Tegallalang’s terraced green rice paddies in Ubud',
            'Evening grilled seafood banquet on the sands of Jimbaran Beach',
          ],
        },
      },
      {
        day: 4,
        title: {
          id: 'Tanjung Benoa / Wisata Belanja Oleh-Oleh & Pengantaran Bandara',
          en: 'Tanjung Benoa / Souvenir Shopping & Airport Departure',
        },
        summary: {
          id: 'Waktu santai menikmati bahari Tanjung Benoa, makan siang perpisahan, belanja buah tangan lengkap, dan diantar menuju bandara.',
          en: 'Morning watersports at Tanjung Benoa, farewell lunch, souvenir shopping, and punctual transfer to Bali Airport.',
        },
        activities: {
          id: [
            'Sarapan pagi di hotel dan proses check-out',
            'Kunjungan ke Tanjung Benoa Nusa Dua (termasuk 1x Banana Boat)',
            'Makan siang kuliner khas Bali',
            'Berbelanja buah tangan di Krisna / The Keranjang Bali',
            'Pengantaran tepat waktu menuju Bandara I Gusti Ngurah Rai',
          ],
          en: [
            'Breakfast at hotel and check-out',
            'Morning visit to Tanjung Benoa watersports (includes 1x Banana Boat)',
            'Farewell Balinese lunch',
            'Souvenir shopping at Krisna or The Keranjang Bali',
            'Timely transfer to Ngurah Rai International Airport',
          ],
        },
      },
    ],
    routeOptions: [
      {
        id: 'opt-43-a',
        code: 'A',
        label: { id: 'Opsi Rute A: Bedugul, Kintamani & Kuta Selatan', en: 'Route Option A: Bedugul, Kintamani & South Bali' },
        subtitle: {
          id: 'Mencakup seluruh ikon utama Bali Utara, Tengah, dan Selatan secara lengkap dan santai.',
          en: 'Covers all classic highlights across North, Central, and South Bali at a relaxed pace.',
        },
        itinerary: [],
      },
      {
        id: 'opt-43-b',
        code: 'B',
        label: { id: 'Opsi Rute B: Plus Tour 1 Hari Nusa Penida Barat', en: 'Route Option B: Includes 1-Day West Nusa Penida' },
        subtitle: {
          id: 'Hari ke-3 diganti penyeberangan Fast Boat PP ke Kelingking Beach, Broken Beach & Crystal Bay Nusa Penida.',
          en: 'Replaces Day 3 with a round-trip Fast Boat excursion to Kelingking Beach & Broken Beach on Nusa Penida.',
        },
        itinerary: [
          {
            day: 1,
            title: { id: 'Penjemputan Bandara, Pura Uluwatu & Makan Malam Jimbaran', en: 'Airport Arrival, Uluwatu Sunset & Jimbaran Dinner' },
            activities: {
              id: [
                'Penjemputan di Bandara Ngurah Rai dengan kalungan bunga',
                'Mengunjungi kawasan Garuda Wisnu Kencana (GWK) & Pura Uluwatu',
                'Makan malam seafood bakar di Pantai Jimbaran & check-in hotel',
              ],
              en: [
                'Airport pickup at Ngurah Rai with flower garland greeting',
                'Visit GWK Cultural Park & cliffside Uluwatu Temple',
                'Jimbaran beachfront seafood dinner & hotel check-in',
              ],
            },
          },
          {
            day: 2,
            title: { id: 'Pura Ulun Danu Bedugul, Agrowisata Kopi & Tanah Lot', en: 'Ulun Danu Bedugul, Coffee Garden & Tanah Lot' },
            activities: {
              id: [
                'Sarapan pagi di hotel & menuju dataran tinggi Bedugul',
                'Pura Ulun Danu Beratan & makan siang prasmanan',
                'Singgah di kebun kopi Bali & menikmati sore di Pura Tanah Lot',
                'Makan malam lokal sebelum kembali ke hotel',
              ],
              en: [
                'Hotel breakfast & drive to Bedugul highlands',
                'Ulun Danu Beratan Temple & buffet lunch',
                'Balinese coffee garden visit & sunset at Tanah Lot Temple',
                'Evening dinner before returning to hotel',
              ],
            },
          },
          {
            day: 3,
            title: { id: 'Eksplorasi Pulau Nusa Penida Barat (Fast Boat PP)', en: 'West Nusa Penida Island Excursion (Fast Boat Return)' },
            activities: {
              id: [
                'Penjemputan pagi menuju Pelabuhan Sanur & menyeberang dengan Fast Boat',
                'Berfoto di tebing ikonik Kelingking Beach',
                'Mengunjungi Broken Beach (Pasih Uug) & Angel’s Billabong + makan siang',
                'Bersantai di Pantai Crystal Bay sebelum kembali ke Sanur & makan malam',
              ],
              en: [
                'Early transfer to Sanur Harbour & fast boat crossing to Nusa Penida',
                'Visit the famous T-Rex cliff viewpoint at Kelingking Beach',
                'Explore Broken Beach & Angel’s Billabong + island lunch',
                'Relax at Crystal Bay before afternoon boat back to Sanur & dinner',
              ],
            },
          },
          {
            day: 4,
            title: { id: 'Belanja Oleh-Oleh Khas Bali & Pengantaran Bandara', en: 'Souvenir Shopping & Airport Departure' },
            activities: {
              id: [
                'Sarapan santai di hotel dan proses check-out',
                'Berbelanja oleh-oleh lengkap di Krisna / Joger + makan siang',
                'Pengantaran tepat waktu menuju Bandara Ngurah Rai',
              ],
              en: [
                'Leisurely breakfast at hotel and check-out',
                'Souvenir shopping at Krisna or Joger + farewell lunch',
                'Punctual transfer to Ngurah Rai International Airport',
              ],
            },
          },
        ],
      },
    ],
    pricingTable: [
      {
        id: 'tier-land',
        tierName: { id: 'Tanpa Hotel (Land Tour)', en: 'Land Tour Only (No Hotel)' },
        hotelsExample: { id: 'Penginapan dipesan mandiri oleh peserta', en: 'Hotel arranged independently by guests' },
        brackets: [
          { paxLabel: { id: '2–3 Orang', en: '2–3 Pax' }, pricePerPax: 2650000 },
          { paxLabel: { id: '4–6 Orang', en: '4–6 Pax' }, pricePerPax: 2490000 },
          { paxLabel: { id: '7–10 Orang', en: '7–10 Pax' }, pricePerPax: 2350000 },
        ],
      },
      {
        id: 'tier-3star',
        tierName: { id: 'Paket + Hotel Bintang 3 (★3)', en: 'Package + 3-Star Hotel (★3)' },
        hotelsExample: { id: 'Favehotel / Neo+ Legian / Quest San atau setaraf', en: 'Favehotel / Neo+ Legian / Quest San or similar' },
        brackets: [
          { paxLabel: { id: '2–3 Orang', en: '2–3 Pax' }, pricePerPax: 3490000 },
          { paxLabel: { id: '4–6 Orang', en: '4–6 Pax' }, pricePerPax: 3290000 },
          { paxLabel: { id: '7–10 Orang', en: '7–10 Pax' }, pricePerPax: 3150000 },
        ],
      },
      {
        id: 'tier-4star',
        tierName: { id: 'Paket + Hotel Bintang 4 (★4)', en: 'Package + 4-Star Hotel (★4)' },
        hotelsExample: { id: 'The ONE Legian / Mercure / Aryaduta Kuta atau setaraf', en: 'The ONE Legian / Mercure / Aryaduta Kuta or similar' },
        brackets: [
          { paxLabel: { id: '2–3 Orang', en: '2–3 Pax' }, pricePerPax: 4250000 },
          { paxLabel: { id: '4–6 Orang', en: '4–6 Pax' }, pricePerPax: 4050000 },
          { paxLabel: { id: '7–10 Orang', en: '7–10 Pax' }, pricePerPax: 3890000 },
        ],
      },
      {
        id: 'tier-5star',
        tierName: { id: 'Paket + Resort Bintang 5 (★5)', en: 'Package + 5-Star Resort (★5)' },
        hotelsExample: { id: 'Pullman Legian / Padma / Grand Mirage atau setaraf', en: 'Pullman Legian / Padma / Grand Mirage or similar' },
        brackets: [
          { paxLabel: { id: '2–3 Orang', en: '2–3 Pax' }, pricePerPax: 5950000 },
          { paxLabel: { id: '4–6 Orang', en: '4–6 Pax' }, pricePerPax: 5750000 },
          { paxLabel: { id: '7–10 Orang', en: '7–10 Pax' }, pricePerPax: 5590000 },
        ],
      },
    ],
    importantNotes: {
      id: [
        'Apabila memilih Opsi Rute B (termasuk Nusa Penida), terdapat penyesuaian tiket Fast Boat PP sebesar Rp 350.000/orang.',
        'Urutan hari perjalanan fleksibel dan akan kami sesuaikan agar selaras dengan jadwal tiket pesawat Anda.',
      ],
      en: [
        'Selecting Route Option B (with Nusa Penida) includes an additional IDR 350,000/person adjustment for return Fast Boat tickets.',
        'Daily itinerary order is flexible and can be rearranged to fit your flight arrival and departure times.',
      ],
    },
    images: [
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
    ],
    recommendedHotelAreas: ['Nusa Dua', 'Ubud', 'Seminyak'],
    featured: true,
  },
  {
    id: 'reg-5h4m',
    slug: 'paket-tour-bali-5h4m',
    code: 'BP-REG-54',
    title: {
      id: 'Paket Tour Bali 5 Hari 4 Malam (5H4M) Grand Explorer',
      en: 'Bali Private Tour Package 5 Days 4 Nights (5D4N) Grand Explorer',
    },
    tagline: {
      id: 'Liburan komplit keliling seluruh penjuru Bali + pulau eksotis Nusa Penida dan istana air Bali Timur.',
      en: 'The ultimate island experience covering South, Central, North & East Bali plus Nusa Penida island.',
    },
    description: {
      id: 'Paket Grand Explorer 5 Hari 4 Malam merupakan program wisata terlengkap bagi Anda yang ingin menikmati setiap sisi keajaiban Bali secara mendalam. Mencakup petualangan menyeberang ke Nusa Penida, keindahan Istana Air Tirta Gangga di Bali Timur, sejuknya Danau Beratan Bedugul, seni budaya Ubud & Kintamani, hingga matahari terbenam Uluwatu dan Jimbaran.',
      en: 'Our 5D4N Grand Explorer is the most comprehensive itinerary for travelers eager to experience every facet of Bali. Highlights include a speedboat day trip to Nusa Penida, East Bali’s royal Tirta Gangga water palace, misty Bedugul lake temples, Ubud & Kintamani volcano views, and Uluwatu sunset dining.',
    },
    destination: 'Seluruh Bali (Selatan, Ubud, Kintamani, Bedugul, Bali Timur) & Nusa Penida',
    duration: {
      id: '5 Hari 4 Malam',
      en: '5 Days 4 Nights',
    },
    durationDays: 5,
    price: 3150000,
    priceUnit: {
      id: '/ orang',
      en: '/ person',
    },
    category: 'regular',
    badge: {
      id: 'Rute Terlengkap',
      en: 'Complete Grand Tour',
    },
    minParticipants: {
      id: 'Minimal 2 orang (Private Tour)',
      en: 'Minimum 2 pax (Private Tour)',
    },
    highlights: {
      id: [
        'Termasuk Tour 1 Hari Nusa Penida Barat (Fast Boat PP & mobil privat pulau)',
        'Eksplorasi Bali Timur: Istana Air Tirta Gangga & Gerbang Surga Lempuyang / Besakih',
        'Kaldera Gunung Batur Kintamani, Desa Penglipuran & Terasering Ubud',
        'Pura Ulun Danu Bedugul, Tanah Lot, Tanjung Benoa & Tari Kecak Uluwatu',
        'Jamuan makan malam Seafood Pantai Jimbaran',
      ],
      en: [
        'Includes 1-Day West Nusa Penida Excursion (return Fast Boat & private island car)',
        'East Bali Royal Heritage: Tirta Gangga Water Palace & Lempuyang / Besakih',
        'Kintamani Mount Batur caldera, Penglipuran Village & Ubud rice terraces',
        'Ulun Danu Bedugul, Tanah Lot, Tanjung Benoa & Uluwatu Kecak Dance',
        'Signature beachfront grilled seafood dinner in Jimbaran',
      ],
    },
    inclusions: {
      id: [
        'Mobil ber-AC privat penuh selama 5 hari di Bali + mobil privat di Nusa Penida',
        'Tiket Fast Boat Sanur – Nusa Penida PP',
        'Menginap 4 malam di hotel pilihan (untuk kategori Paket + Hotel)',
        'Kalungan bunga penyambutan di Bandara Ngurah Rai',
        'Seluruh tiket masuk wisata, Tari Kecak Uluwatu & 1x Banana Boat Tanjung Benoa',
        'Konsumsi lengkap: 4x sarapan hotel, 5x makan siang, 4x makan malam',
        'Biaya parkir, tol, retribusi pulau, dan air mineral dingin harian',
      ],
      en: [
        '5 days private AC transport in Bali + private island car on Nusa Penida',
        'Round-trip Fast Boat tickets (Sanur – Nusa Penida)',
        '4 nights hotel accommodation per selected tier (for +Hotel options)',
        'Welcome flower garland upon airport arrival',
        'All entrance fees, Uluwatu Kecak Dance ticket & 1x Banana Boat ride',
        'Complete meals: 4 hotel breakfasts, 5 lunches, 4 dinners',
        'All parking, tolls, island levies, and daily chilled mineral water',
      ],
    },
    exclusions: {
      id: [
        'Tiket pesawat terbang menuju dan dari Bali',
        'Pengeluaran pribadi peserta, laundry, minibar',
        'Tipping sukarela untuk pengemudi dan pemandu lokal',
      ],
      en: [
        'Round-trip airfare to and from Bali',
        'Personal shopping, hotel minibar, and laundry',
        'Voluntary gratuities for driver and island guide',
      ],
    },
    childPolicy: {
      id: [
        'Balita < 3 tahun: Gratis.',
        'Anak 3–10 tahun tanpa extra bed: 50% dari tarif dewasa.',
        'Anak 3–10 tahun dengan extra bed: 75% dari tarif dewasa.',
      ],
      en: [
        'Infants under 3 years: Free of charge.',
        'Children 3–10 years without extra bed: 50% of adult rate.',
        'Children 3–10 years with extra bed: 75% of adult rate.',
      ],
    },
    itinerary: [
      {
        day: 1,
        title: { id: 'Penjemputan Bandara, Pantai Melasti, Uluwatu Kecak & Jimbaran', en: 'Airport Arrival, Melasti Beach, Uluwatu Kecak & Jimbaran' },
        activities: {
          id: [
            'Penjemputan hangat di Bandara Ngurah Rai dengan kalungan bunga',
            'Makan siang kuliner khas Bali & mengunjungi Pantai Melasti',
            'Pura Luhur Uluwatu & pementasan Tari Kecak Sunset',
            'Makan malam Seafood Pantai Jimbaran & check-in hotel',
          ],
          en: [
            'Airport pickup at Ngurah Rai with flower garland welcome',
            'Local lunch & visit to Melasti Beach limestone cliffs',
            'Uluwatu Temple & Sunset Kecak Fire Dance performance',
            'Jimbaran Beach seafood dinner & hotel check-in',
          ],
        },
      },
      {
        day: 2,
        title: { id: 'Danau Beratan Bedugul, Gerbang Handara & Sunset Tanah Lot', en: 'Bedugul Lake Temple, Handara Gate & Tanah Lot Sunset' },
        activities: {
          id: [
            'Sarapan hotel, foto di Gerbang Handara & Bukit Wanagiri',
            'Eksplorasi Pura Ulun Danu Beratan Bedugul & makan siang prasmanan',
            'Agrowisata Kopi Bali & matahari terbenam di Pura Tanah Lot + makan malam',
          ],
          en: [
            'Hotel breakfast, photo stop at Handara Gate & Wanagiri lookout',
            'Explore Ulun Danu Beratan Lake Temple & highland buffet lunch',
            'Balinese coffee garden stop & sunset at Tanah Lot + dinner',
          ],
        },
      },
      {
        day: 3,
        title: { id: 'Tour Pulau Nusa Penida Barat (Fast Boat PP)', en: 'West Nusa Penida Island Adventure (Return Fast Boat)' },
        activities: {
          id: [
            'Menyeberang pagi dari Pelabuhan Sanur menuju Nusa Penida',
            'Kelingking Beach, Broken Beach, Angel’s Billabong & makan siang di pulau',
            'Santai di Crystal Bay, kembali ke Sanur sore hari & makan malam',
          ],
          en: [
            'Morning fast boat crossing from Sanur Harbour to Nusa Penida',
            'Kelingking Beach, Broken Beach, Angel’s Billabong & island lunch',
            'Crystal Bay leisure stop, late afternoon boat back to Sanur & dinner',
          ],
        },
      },
      {
        day: 4,
        title: { id: 'Desa Penglipuran, Kintamani Gunung Batur & Istana Air Tirta Gangga', en: 'Penglipuran Village, Kintamani Volcano & Tirta Gangga Palace' },
        activities: {
          id: [
            'Sarapan pagi di hotel lalu mengunjungi Desa Adat Penglipuran',
            'Makan siang panorama kaldera Gunung & Danau Batur Kintamani',
            'Menjelajahi kolam koi kerajaan di Istana Air Tirta Gangga Karangasem',
            'Makan malam kuliner khas Bali sebelum kembali ke hotel',
          ],
          en: [
            'Hotel breakfast followed by cultural walk in Penglipuran Village',
            'Panoramic lunch facing Mount and Lake Batur in Kintamani',
            'Visit royal fountains and koi stepping stones at Tirta Gangga Palace',
            'Evening dinner before returning to your hotel',
          ],
        },
      },
      {
        day: 5,
        title: { id: 'Tanjung Benoa Watersport, Belanja Oleh-Oleh & Bandara', en: 'Tanjung Benoa Watersports, Souvenir Shopping & Departure' },
        activities: {
          id: [
            'Sarapan hotel, check-out & wahana Banana Boat di Tanjung Benoa',
            'Makan siang & berbelanja buah tangan lengkap di Krisna / The Keranjang',
            'Pengantaran tepat waktu menuju Bandara I Gusti Ngurah Rai',
          ],
          en: [
            'Hotel breakfast, check-out & Banana Boat fun at Tanjung Benoa',
            'Farewell lunch & souvenir shopping at Krisna / The Keranjang',
            'Punctual drop-off at Ngurah Rai International Airport',
          ],
        },
      },
    ],
    pricingTable: [
      {
        id: 'tier-land',
        tierName: { id: 'Tanpa Hotel (Land Tour + Penida)', en: 'Land Tour Only (+ Nusa Penida)' },
        hotelsExample: { id: 'Termasuk Fast Boat Nusa Penida, tanpa hotel', en: 'Includes Nusa Penida Fast Boat, hotel excluded' },
        brackets: [
          { paxLabel: { id: '2–3 Orang', en: '2–3 Pax' }, pricePerPax: 3490000 },
          { paxLabel: { id: '4–6 Orang', en: '4–6 Pax' }, pricePerPax: 3290000 },
          { paxLabel: { id: '7–10 Orang', en: '7–10 Pax' }, pricePerPax: 3150000 },
        ],
      },
      {
        id: 'tier-3star',
        tierName: { id: 'Paket + Hotel Bintang 3 (★3)', en: 'Package + 3-Star Hotel (★3)' },
        hotelsExample: { id: '4 Malam di Favehotel / Neo+ / Quest San atau setaraf', en: '4 Nights at Favehotel / Neo+ / Quest San or similar' },
        brackets: [
          { paxLabel: { id: '2–3 Orang', en: '2–3 Pax' }, pricePerPax: 4590000 },
          { paxLabel: { id: '4–6 Orang', en: '4–6 Pax' }, pricePerPax: 4350000 },
          { paxLabel: { id: '7–10 Orang', en: '7–10 Pax' }, pricePerPax: 4190000 },
        ],
      },
      {
        id: 'tier-4star',
        tierName: { id: 'Paket + Hotel Bintang 4 (★4)', en: 'Package + 4-Star Hotel (★4)' },
        hotelsExample: { id: '4 Malam di The ONE Legian / Mercure / Sol by Melia atau setaraf', en: '4 Nights at The ONE Legian / Mercure / Sol by Melia or similar' },
        brackets: [
          { paxLabel: { id: '2–3 Orang', en: '2–3 Pax' }, pricePerPax: 5590000 },
          { paxLabel: { id: '4–6 Orang', en: '4–6 Pax' }, pricePerPax: 5350000 },
          { paxLabel: { id: '7–10 Orang', en: '7–10 Pax' }, pricePerPax: 5150000 },
        ],
      },
    ],
    importantNotes: {
      id: [
        'Tersedia juga kombinasi menginap 2 malam di Ubud + 2 malam di Kuta/Seminyak atas permintaan.',
        'Jika tidak ingin menyeberang ke Nusa Penida, Hari ke-3 dapat diganti dengan Tour Ubud & Rafting Sungai Ayung.',
      ],
      en: [
        'Split-stay hotel combinations (e.g., 2 nights in Ubud + 2 nights in Seminyak/Kuta) are available upon request.',
        'Prefer staying on mainland Bali? Day 3 can be swapped for Ubud & Ayung River Rafting.',
      ],
    },
    images: [
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1200&q=80',
    ],
    recommendedHotelAreas: ['Seminyak', 'Ubud', 'Sanur'],
    featured: false,
  },
];
