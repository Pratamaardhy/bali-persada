import { TourPackage } from '../../core/models/package.model';

export const ONEDAY_PACKAGES: TourPackage[] = [
  {
    id: 'day-bedugul',
    slug: 'paket-tour-bedugul-tanah-lot',
    code: 'BP-DAY-BDG',
    title: {
      id: 'Paket Tour Bedugul & Tanah Lot 1 Hari',
      en: 'Bedugul Highlands & Tanah Lot Full-Day Private Tour',
    },
    tagline: {
      id: 'Sejuknya Pura Ulun Danu Beratan, arsitektur kerajaan Taman Ayun, kebun kopi, dan senja magis di Pura Tanah Lot.',
      en: 'Misty lakeside Ulun Danu Beratan, royal Taman Ayun Temple, coffee plantations, and golden Tanah Lot sunset.',
    },
    description: {
      id: 'Perjalanan harian 10–11 jam yang memadukan keindahan danau pegunungan tengah Bali dengan pesona pantai barat saat matahari terbenam. Cocok bagi Anda yang sudah memiliki hotel sendiri di Bali dan ingin menjelajahi kawasan warisan budaya UNESCO Taman Ayun, Danau Beratan Bedugul, serta Pura Tanah Lot bersama sopir privat berpengalaman.',
      en: 'A 10–11 hour private excursion uniting Bali’s cool central crater lakes with dramatic west-coast sunset vistas. Ideal for travelers staying anywhere in South Bali or Ubud wishing to explore UNESCO-listed Taman Ayun, iconic Lake Beratan in Bedugul, and Tanah Lot Sea Temple.',
    },
    destination: 'Mengwi, Bedugul, Baturiti & Tanah Lot',
    duration: {
      id: '1 Hari Penuh (10–11 Jam)',
      en: 'Full Day (10–11 Hours)',
    },
    durationDays: 1,
    price: 550000,
    priceUnit: {
      id: '/ orang',
      en: '/ person',
    },
    category: 'oneday',
    badge: {
      id: 'Day Tour Favorit',
      en: 'Top Day Tour',
    },
    minParticipants: {
      id: 'Minimal 2 orang (Private Car)',
      en: 'Minimum 2 pax (Private Car)',
    },
    highlights: {
      id: [
        'Pura Taman Ayun Mengwi — taman pura kerajaan peninggalan abad ke-17',
        'Pura Ulun Danu Beratan Bedugul di tepi danau pegunungan sejuk',
        'Makan siang prasmanan di restoran dataran tinggi Bedugul',
        'Singgah mencicipi kopi Bali & cokelat hangat di Agrowisata Baturiti',
        'Menikmati momen matahari terbenam spektakuler di Pura Tanah Lot',
      ],
      en: [
        'Taman Ayun Royal Temple — 17th-century UNESCO heritage water garden',
        'Ulun Danu Beratan Temple floating gracefully on cool mountain waters',
        'Buffet Indonesian lunch overlooking Bedugul’s lush highlands',
        'Artisanal Balinese coffee & herbal tea tasting in Baturiti',
        'Spectacular golden sunset over the waves at Tanah Lot Temple',
      ],
    },
    inclusions: {
      id: [
        'Antar-jemput hotel privat ber-AC (area Kuta, Seminyak, Sanur, Nusa Dua, Jimbaran, Denpasar)',
        'Pengemudi ramah berpengalaman merangkap pemandu perjalanan & BBM',
        'Tiket masuk seluruh objek wisata (Taman Ayun, Ulun Danu Beratan, Tanah Lot)',
        'Makan siang prasmanan (Buffet Halal) di kawasan Bedugul (untuk Paket All-In)',
        'Biaya parkir kendaraan dan air mineral botol dingin',
      ],
      en: [
        'Private AC hotel pickup & drop-off (Kuta, Seminyak, Sanur, Nusa Dua, Jimbaran, Denpasar)',
        'Experienced driver-guide & fuel throughout the journey',
        'All attraction entrance tickets (Taman Ayun, Ulun Danu Beratan, Tanah Lot)',
        'Highland buffet lunch in Bedugul (included in All-Inclusive tier)',
        'All parking charges and chilled bottled mineral water',
      ],
    },
    exclusions: {
      id: [
        'Akomodasi hotel & makan malam',
        'Sewa speedboat keliling Danau Beratan (opsional di lokasi)',
        'Pengeluaran belanja pribadi & tipping sukarela pengemudi',
      ],
      en: [
        'Hotel stay & evening dinner',
        'Optional lake speedboat rental on Lake Beratan',
        'Personal shopping expenses & voluntary driver gratuities',
      ],
    },
    childPolicy: {
      id: [
        'Balita < 3 tahun: Gratis.',
        'Anak usia 3–10 tahun: Dikenakan 60% dari tarif dewasa.',
      ],
      en: [
        'Infants under 3 years: Free of charge.',
        'Children aged 3–10 years: 60% of adult tour rate.',
      ],
    },
    itinerary: [
      {
        day: 1,
        title: {
          id: 'Taman Ayun, Danau Beratan Bedugul, Kebun Kopi & Sunset Tanah Lot',
          en: 'Taman Ayun, Lake Beratan Bedugul, Coffee Garden & Tanah Lot Sunset',
        },
        summary: {
          id: 'Berangkat pagi pukul 08.30 dari hotel Anda menuju kesejukan Bedugul dan ditutup senja di Tanah Lot.',
          en: 'Depart at 08:30 AM from your hotel for cool Bedugul highlands and conclude with sunset at Tanah Lot.',
        },
        activities: {
          id: [
            '08.30 — Penjemputan di lobi hotel tempat Anda menginap',
            '09.45 — Mengunjungi kompleks taman air kerajaan Pura Taman Ayun Mengwi',
            '11.30 — Menikmati panorama Pura Ulun Danu Beratan & Gerbang Candi Bentar',
            '13.00 — Makan siang prasmanan di restoran sejuk kawasan Bedugul',
            '14.45 — Kunjungan santai ke kebun kopi dan rempah organik Baturiti',
            '16.45 — Tiba di Pura Tanah Lot untuk menikmati pemandangan matahari terbenam',
            '19.30 — Tiba kembali dengan nyaman di hotel Anda',
          ],
          en: [
            '08:30 — Private pickup right at your hotel lobby',
            '09:45 — Visit royal water-moat courtyards at Taman Ayun Temple, Mengwi',
            '11:30 — Explore lakeside Ulun Danu Beratan Temple in Bedugul',
            '13:00 — Enjoy highland buffet lunch in Bedugul',
            '14:45 — Relaxed tasting walk at Baturiti organic coffee & spice farm',
            '16:45 — Arrive at Tanah Lot Temple in time for golden coastal sunset',
            '19:30 — Comfortable drop-off back at your hotel',
          ],
        },
        steps: [
          {
            code: '1.1',
            time: '08.30 WITA',
            title: { id: 'Penjemputan Privat di Lobi Hotel', en: 'Private Hotel Lobby Pickup' },
            description: {
              id: 'Sopir kami menjemput tepat waktu di hotel Anda dengan armada bersih ber-AC.',
              en: 'Your private driver meets you promptly at your hotel lobby in a clean AC vehicle.',
            },
          },
          {
            code: '1.2',
            time: '09.45 WITA',
            title: { id: 'Pura Taman Ayun Mengwi', en: 'Taman Ayun Royal Heritage Temple' },
            description: {
              id: 'Mengagumi deretan meru bertingkat yang dikelilingi kolam taman kerajaan Kerajaan Mengwi.',
              en: 'Admire multi-tiered shrines encircled by tranquil lotus moats of the former Mengwi Kingdom.',
            },
          },
          {
            code: '1.3',
            time: '11.30 WITA',
            title: { id: 'Pura Ulun Danu Beratan & Makan Siang Buffet', en: 'Ulun Danu Beratan & Highland Buffet Lunch' },
            description: {
              id: 'Berfoto di ikon danau pegunungan Bali dilanjutkan santap siang prasmanan hangat.',
              en: 'Capture iconic lakeside temple views followed by a warm Indonesian buffet lunch.',
            },
          },
          {
            code: '1.4',
            time: '16.45 WITA',
            title: { id: 'Sunset Spektakuler Pura Tanah Lot & Kembali ke Hotel', en: 'Tanah Lot Sunset & Hotel Drop-off' },
            description: {
              id: 'Menikmati semburat jingga matahari terbenam di balik siluet Pura Tanah Lot sebelum diantar pulang ke hotel.',
              en: 'Watch golden sunset hues illuminate Tanah Lot’s ocean shrine before returning to your hotel.',
            },
          },
        ],
      },
    ],
    pricingTable: [
      {
        id: 'tier-allin',
        tierName: { id: 'Paket All-Inclusive (Tiket + Makan Siang + Mobil)', en: 'All-Inclusive (Tickets + Lunch + Private Car)' },
        hotelsExample: { id: 'Termasuk mobil privat, BBM, tiket wisata & makan siang buffet', en: 'Includes private car, fuel, all tickets & buffet lunch' },
        brackets: [
          { paxLabel: { id: '2 Orang', en: '2 Pax' }, pricePerPax: 690000 },
          { paxLabel: { id: '3–4 Orang', en: '3–4 Pax' }, pricePerPax: 595000 },
          { paxLabel: { id: '5–8 Orang', en: '5–8 Pax' }, pricePerPax: 550000 },
        ],
      },
      {
        id: 'tier-basic',
        tierName: { id: 'Paket Hemat (Mobil Privat + Tiket Masuk Saja)', en: 'Essential Tier (Private Car + Entrance Tickets)' },
        hotelsExample: { id: 'Makan siang bebas pilih sendiri di restoran favorit', en: 'Flexible à-la-carte lunch paid directly on site' },
        brackets: [
          { paxLabel: { id: '2 Orang', en: '2 Pax' }, pricePerPax: 560000 },
          { paxLabel: { id: '3–4 Orang', en: '3–4 Pax' }, pricePerPax: 475000 },
          { paxLabel: { id: '5–8 Orang', en: '5–8 Pax' }, pricePerPax: 430000 },
        ],
      },
    ],
    importantNotes: {
      id: [
        'Disarankan membawa jaket tipis atau cardigan karena udara kawasan Bedugul cukup sejuk.',
        'Penjemputan di luar zona utama (misal Lovina atau Karangasem) dapat dikonsultasikan terlebih dahulu.',
      ],
      en: [
        'Bringing a light sweater is recommended as highland Bedugul enjoys cool mountain breezes.',
        'Pickups outside South Bali / Ubud zones can be arranged upon quick WhatsApp inquiry.',
      ],
    },
    images: [
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    ],
    recommendedHotelAreas: ['Seminyak', 'Sanur', 'Ubud'],
    featured: true,
  },
  {
    id: 'day-besakih',
    slug: 'paket-tour-besakih-bali-timur',
    code: 'BP-DAY-BSK',
    title: {
      id: 'Paket Tour Pura Besakih & Bali Timur 1 Hari',
      en: 'Besakih Mother Temple & East Bali Full-Day Private Tour',
    },
    tagline: {
      id: 'Kemegahan spiritual Pura Agung Besakih di lereng Gunung Agung, Istana Air Tirta Gangga, dan Desa Penglipuran.',
      en: 'Spiritual grandeur of Besakih Mother Temple on Mount Agung, Tirta Gangga Water Palace, and Penglipuran.',
    },
    description: {
      id: 'Kenali warisan budaya adiluhung Bali Timur dalam perjalanan sehari penuh yang memukau. Mengunjungi kompleks pura terbesar dan paling suci di Bali — Pura Agung Besakih di kaki Gunung Agung — dipadukan dengan kolam pancuran kerajaan Istana Air Tirta Gangga serta tata desa bersejarah Kerta Gosa atau Desa Penglipuran.',
      en: 'Uncover East Bali’s regal and spiritual heritage on an inspiring full-day journey. Visit Pura Agung Besakih — Bali’s largest and holiest temple complex on the slopes of Mount Agung — paired with the royal koi fountains of Tirta Gangga Water Palace and Penglipuran Village.',
    },
    destination: 'Karangasem, Lereng Gunung Agung & Bangli',
    duration: {
      id: '1 Hari Penuh (10–11 Jam)',
      en: 'Full Day (10–11 Hours)',
    },
    durationDays: 1,
    price: 590000,
    priceUnit: {
      id: '/ orang',
      en: '/ person',
    },
    category: 'oneday',
    badge: {
      id: 'Warisan Budaya',
      en: 'Royal Heritage',
    },
    minParticipants: {
      id: 'Minimal 2 orang (Private Car)',
      en: 'Minimum 2 pax (Private Car)',
    },
    highlights: {
      id: [
        'Pura Agung Besakih (Mother Temple of Bali) lengkap dengan shuttle lokal & kain kamen',
        'Makan siang dengan panorama lembah hijau Bukit Jambul / Lereng Agung',
        'Istana Air Tirta Gangga Karangasem dengan batu pijakan di atas kolam ikan koi',
        'Singgah di Desa Adat Penglipuran atau Taman Kertha Gosa Klungkung',
      ],
      en: [
        'Pura Agung Besakih (Mother Temple) including local shuttle & temple sarong',
        'Scenic lunch overlooking lush emerald rice valleys near Mount Agung',
        'Tirta Gangga Royal Water Palace famous for koi pond stepping stones',
        'Cultural visit to Penglipuran Heritage Village or Kertha Gosa Pavilion',
      ],
    },
    inclusions: {
      id: [
        'Mobil ber-AC privat antar-jemput hotel + pengemudi & BBM',
        'Tiket masuk resmi Pura Agung Besakih (termasuk shuttle & pemandu lokal kawasan pura)',
        'Tiket masuk Tirta Gangga & Desa Wisata Penglipuran',
        'Makan siang di restoran panorama Bali Timur (untuk Paket All-In)',
        'Biaya parkir dan air mineral dingin selama perjalanan',
      ],
      en: [
        'Private AC hotel transfers + experienced driver & fuel',
        'Official Besakih Temple admission (including shuttle & mandatory local temple guide)',
        'Entrance tickets to Tirta Gangga Water Palace & Penglipuran Village',
        'Panoramic East Bali lunch (included in All-Inclusive tier)',
        'All parking fees and chilled bottled mineral water',
      ],
    },
    exclusions: {
      id: [
        'Pakan ikan koi atau foto spot berbayar opsional di Tirta Gangga',
        'Pengeluaran pribadi peserta & tipping sukarela',
      ],
      en: [
        'Optional koi fish food packets or specialty photo props at Tirta Gangga',
        'Personal expenses & discretionary gratuities',
      ],
    },
    childPolicy: {
      id: [
        'Balita < 3 tahun: Gratis.',
        'Anak usia 3–10 tahun: Dikenakan 60% dari tarif dewasa.',
      ],
      en: [
        'Infants under 3 years: Free of charge.',
        'Children aged 3–10 years: 60% of adult rate.',
      ],
    },
    itinerary: [
      {
        day: 1,
        title: {
          id: 'Desa Penglipuran, Pura Agung Besakih & Istana Air Tirta Gangga',
          en: 'Penglipuran Village, Besakih Mother Temple & Tirta Gangga Palace',
        },
        activities: {
          id: [
            '08.00 — Penjemputan pagi di lobi hotel Anda',
            '09.30 — Berjalan santai menyusuri Desa Adat Penglipuran Bangli',
            '11.30 — Mengunjungi kemegahan Pura Agung Besakih di lereng Gunung Agung',
            '13.15 — Makan siang di restoran berlatar lembah persawahan Mahagiri / Lereng Agung',
            '15.00 — Berfoto di kolam kerajaan dan air mancur Istana Air Tirta Gangga',
            '18.30 — Tiba kembali di hotel dengan nyaman',
          ],
          en: [
            '08:00 — Morning pickup at your hotel lobby',
            '09:30 — Cultural walk through traditional Penglipuran Village in Bangli',
            '11:30 — Explore sacred courtyards of Besakih Mother Temple on Mount Agung',
            '13:15 — Scenic valley-view lunch facing Mount Agung’s green foothills',
            '15:00 — Visit royal fountains and koi stepping stones at Tirta Gangga',
            '18:30 — Smooth return drop-off at your hotel',
          ],
        },
      },
    ],
    pricingTable: [
      {
        id: 'tier-allin',
        tierName: { id: 'Paket All-Inclusive (Mobil + Semua Tiket + Makan Siang)', en: 'All-Inclusive (Private Car + All Tickets + Lunch)' },
        brackets: [
          { paxLabel: { id: '2 Orang', en: '2 Pax' }, pricePerPax: 750000 },
          { paxLabel: { id: '3–4 Orang', en: '3–4 Pax' }, pricePerPax: 640000 },
          { paxLabel: { id: '5–8 Orang', en: '5–8 Pax' }, pricePerPax: 590000 },
        ],
      },
      {
        id: 'tier-basic',
        tierName: { id: 'Paket Hemat (Mobil Privat + Semua Tiket Wisata)', en: 'Essential Tier (Private Car + All Entrance Tickets)' },
        brackets: [
          { paxLabel: { id: '2 Orang', en: '2 Pax' }, pricePerPax: 620000 },
          { paxLabel: { id: '3–4 Orang', en: '3–4 Pax' }, pricePerPax: 515000 },
          { paxLabel: { id: '5–8 Orang', en: '5–8 Pax' }, pricePerPax: 470000 },
        ],
      },
    ],
    importantNotes: {
      id: [
        'Kain sarung (kamen) dan selendang sudah disediakan pada tiket resmi kawasan Pura Agung Besakih.',
        'Disarankan mengenakan pakaian berlengan sopan dan alas kaki nyaman untuk berjalan di pelataran berundak.',
      ],
      en: [
        'Traditional temple sarongs and sashes are included with official Besakih Temple admission.',
        'Modest shoulder-covering attire and comfortable walking shoes are recommended.',
      ],
    },
    images: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1200&q=80',
    ],
    recommendedHotelAreas: ['Sanur', 'Ubud'],
    featured: false,
  },
  {
    id: 'day-kintamani',
    slug: 'paket-tour-kintamani-penglipuran',
    code: 'BP-DAY-KTM',
    title: {
      id: 'Paket Tour Kintamani & Penglipuran 1 Hari',
      en: 'Kintamani Volcano & Penglipuran Full-Day Private Tour',
    },
    tagline: {
      id: 'Panorama megah kaldera Gunung & Danau Batur, mata air suci Tirta Empul, sawah Tegallalang, dan Desa Penglipuran.',
      en: 'Sweeping Mount & Lake Batur caldera views, holy spring Tirta Empul, Tegallalang terraces, and Penglipuran.',
    },
    description: {
      id: 'Nikmati kesejukan dataran tinggi Kintamani dengan latar spektakuler Gunung Batur dan hamparan Danau Batur yang biru. Rute satu hari penuh ini menyatukan kekayaan tradisi Bali di Pura Tirta Empul Tampaksiring, keasrian Desa Wisata Penglipuran, serta lanskap sawah berundak Tegallalang Ubud.',
      en: 'Experience the crisp mountain breeze of Kintamani overlooking the dramatic volcanic cone of Mount Batur and its crater lake. This popular day tour weaves together sacred spring waters at Tirta Empul, clean-living heritage in Penglipuran Village, and Tegallalang’s emerald rice terraces.',
    },
    destination: 'Kintamani, Tampaksiring, Bangli & Tegallalang',
    duration: {
      id: '1 Hari Penuh (10 Jam)',
      en: 'Full Day (10 Hours)',
    },
    durationDays: 1,
    price: 540000,
    priceUnit: {
      id: '/ orang',
      en: '/ person',
    },
    category: 'oneday',
    badge: {
      id: 'Panorama Gunung',
      en: 'Volcano Panorama',
    },
    minParticipants: {
      id: 'Minimal 2 orang (Private Car)',
      en: 'Minimum 2 pax (Private Car)',
    },
    highlights: {
      id: [
        'Makan siang berlatar pemandangan langsung Gunung & Danau Batur Kintamani',
        'Desa Wisata Penglipuran — desa adat asri kebanggaan Pulau Bali',
        'Pura Tirta Empul Tampaksiring dengan kolam mata air suci bersejarah',
        'Terasering Sawah Tegallalang & mencicipi kopi organik di kebun Ubud',
      ],
      en: [
        'Scenic lunch facing the majestic caldera of Mount and Lake Batur',
        'Penglipuran Traditional Village — celebrated for timeless Balinese architecture',
        'Tirta Empul Water Temple featuring centuries-old sacred spring pools',
        'Tegallalang terraced rice paddies & organic Ubud coffee tasting',
      ],
    },
    inclusions: {
      id: [
        'Transportasi mobil ber-AC privat antar-jemput hotel + sopir & BBM',
        'Tiket masuk seluruh objek wisata (Tegallalang, Kintamani, Tirta Empul, Penglipuran)',
        'Makan siang buffet panorama Gunung Batur Kintamani (untuk Paket All-In)',
        'Biaya parkir kendaraan dan air mineral dingin',
      ],
      en: [
        'Private AC hotel pickup & drop-off + experienced driver & fuel',
        'All attraction admission fees (Tegallalang, Kintamani, Tirta Empul, Penglipuran)',
        'Panoramic Mount Batur buffet lunch in Kintamani (All-Inclusive tier)',
        'All parking charges and chilled bottled water',
      ],
    },
    exclusions: {
      id: [
        'Tiket wahana ayunan (Bali Swing) opsional di Tegallalang',
        'Pesan kopi spesial di kafe instagramable Paperhills / Montana (opsional)',
        'Pengeluaran pribadi & tipping sukarela',
      ],
      en: [
        'Optional jungle swing rides at Tegallalang',
        'Specialty orders at boutique Kintamani cafés if visited optionally',
        'Personal shopping & voluntary gratuities',
      ],
    },
    childPolicy: {
      id: [
        'Balita < 3 tahun: Gratis.',
        'Anak usia 3–10 tahun: 60% dari tarif dewasa.',
      ],
      en: [
        'Infants under 3 years: Free of charge.',
        'Children aged 3–10 years: 60% of adult rate.',
      ],
    },
    itinerary: [
      {
        day: 1,
        title: {
          id: 'Tegallalang, Kaldera Kintamani, Pura Tirta Empul & Desa Penglipuran',
          en: 'Tegallalang Terraces, Kintamani Caldera, Tirta Empul & Penglipuran',
        },
        activities: {
          id: [
            '08.30 — Penjemputan privat di hotel tempat Anda menginap',
            '10.00 — Menikmati hamparan sawah berundak Terasering Tegallalang Ubud',
            '12.00 — Tiba di Penelokan Kintamani & makan siang panorama Gunung Batur',
            '14.00 — Mengunjungi mata air jernih Pura Tirta Empul Tampaksiring',
            '15.30 — Berjalan sore menyusuri rumah adat & hutan bambu Desa Penglipuran',
            '18.00 — Perjalanan kembali menuju hotel Anda',
          ],
          en: [
            '08:30 — Private pickup from your hotel',
            '10:00 — Photo walk overlooking Tegallalang emerald rice terraces',
            '12:00 — Arrive at Kintamani ridge & enjoy volcano-view buffet lunch',
            '14:00 — Visit historic holy springs at Tirta Empul Temple, Tampaksiring',
            '15:30 — Afternoon stroll along Penglipuran Village & its bamboo forest',
            '18:00 — Return transfer back to your hotel',
          ],
        },
      },
    ],
    pricingTable: [
      {
        id: 'tier-allin',
        tierName: { id: 'Paket All-Inclusive (Mobil + Tiket + Makan Siang Kintamani)', en: 'All-Inclusive (Car + Tickets + Kintamani Lunch)' },
        brackets: [
          { paxLabel: { id: '2 Orang', en: '2 Pax' }, pricePerPax: 680000 },
          { paxLabel: { id: '3–4 Orang', en: '3–4 Pax' }, pricePerPax: 585000 },
          { paxLabel: { id: '5–8 Orang', en: '5–8 Pax' }, pricePerPax: 540000 },
        ],
      },
      {
        id: 'tier-basic',
        tierName: { id: 'Paket Hemat + Bebas Nongkrong Kafe Kintamani (Tanpa Makan)', en: 'Café Hopper Tier (Car + Tickets, Lunch Excluded)' },
        hotelsExample: { id: 'Cocok bila ingin makan mandiri di kafe estetik Kintamani', en: 'Great if you prefer dining à-la-carte at aesthetic Kintamani cafés' },
        brackets: [
          { paxLabel: { id: '2 Orang', en: '2 Pax' }, pricePerPax: 540000 },
          { paxLabel: { id: '3–4 Orang', en: '3–4 Pax' }, pricePerPax: 455000 },
          { paxLabel: { id: '5–8 Orang', en: '5–8 Pax' }, pricePerPax: 410000 },
        ],
      },
    ],
    importantNotes: {
      id: [
        'Bila Anda ingin berkunjung ke deretan kafe estetik Kintamani (seperti Montana, Akasa, atau Paperhills), silakan pilih opsi Paket Hemat tanpa makan siang prasmanan.',
      ],
      en: [
        'If you prefer visiting Kintamani’s famous aesthetic specialty cafés (e.g., Akasa, Paperhills, Montana), choose the Café Hopper tier so you can order freely on site.',
      ],
    },
    images: [
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    ],
    recommendedHotelAreas: ['Ubud', 'Sanur'],
    featured: false,
  },
  {
    id: 'day-ubud',
    slug: 'paket-tour-ubud-alam-budaya',
    code: 'BP-DAY-UBD',
    title: {
      id: 'Paket Tour Ubud Seni & Alam 1 Hari',
      en: 'Ubud Culture, Waterfalls & Rice Terraces Full-Day Tour',
    },
    tagline: {
      id: 'Menyelami jantung budaya Bali: Air Terjun Tegenungan, Monkey Forest, Puri Saren Ubud, Pasar Seni & Sawah Tegallalang.',
      en: 'Immerse in Bali’s cultural heart: Tegenungan Waterfall, Monkey Forest, Ubud Palace, Art Market & Tegallalang.',
    },
    description: {
      id: 'Rasakan ketenangan dan denyut seni Ubud dalam tur privat sehari penuh yang santai. Mulai dari segarnya percikan Air Terjun Tegenungan, hutan lindung Sacred Monkey Forest yang rimbun, kuliner bebek garing khas Ubud di tepi sawah, hingga berburu kerajinan rotan dan lukisan di Pasar Seni Ubud.',
      en: 'Experience the tranquil greenery and artistic soul of Ubud on a relaxed private day trip. Visit cascading Tegenungan Waterfall, walk beneath ancient banyans in the Sacred Monkey Forest, savor signature Ubud crispy duck by the paddies, and browse Ubud Art Market.',
    },
    destination: 'Ubud, Sukawati & Tegallalang (Gianyar)',
    duration: {
      id: '1 Hari Penuh (9–10 Jam)',
      en: 'Full Day (9–10 Hours)',
    },
    durationDays: 1,
    price: 520000,
    priceUnit: {
      id: '/ orang',
      en: '/ person',
    },
    category: 'oneday',
    badge: {
      id: 'Alam & Seni',
      en: 'Nature & Art',
    },
    minParticipants: {
      id: 'Minimal 2 orang (Private Car)',
      en: 'Minimum 2 pax (Private Car)',
    },
    highlights: {
      id: [
        'Air Terjun Tegenungan dengan lanskap lembah tropis hijau',
        'Sacred Monkey Forest Sanctuary di jantung kawasan Ubud',
        'Makan siang menu khas Bebek Tepi Sawah / kuliner autentik Ubud',
        'Terasering Sawah Tegallalang & Agrowisata Kopi Luwak',
        'Jalan sore di Puri Saren Agung (Istana Ubud) & Pasar Seni Tradisional',
      ],
      en: [
        'Tegenungan Waterfall framed by lush tropical jungle cliffs',
        'Sacred Monkey Forest Sanctuary in central Ubud',
        'Authentic Ubud Crispy Duck set lunch overlooking rice fields',
        'Tegallalang terraced rice paddies & coffee plantation walk',
        'Afternoon stroll at Ubud Royal Palace & Traditional Art Market',
      ],
    },
    inclusions: {
      id: [
        'Transportasi mobil ber-AC privat antar-jemput hotel + sopir & BBM',
        'Tiket masuk seluruh objek wisata (Tegenungan, Monkey Forest, Tegallalang)',
        'Makan siang kuliner khas Bebek Ubud Halal (untuk Paket All-In)',
        'Parkir kendaraan dan air mineral dingin harian',
      ],
      en: [
        'Private AC hotel transfers + courteous driver-guide & fuel',
        'All attraction admission tickets (Tegenungan, Monkey Forest, Tegallalang)',
        'Signature Ubud Crispy Duck set lunch (included in All-Inclusive tier)',
        'All parking fees and chilled bottled mineral water',
      ],
    },
    exclusions: {
      id: [
        'Tiket ayunan (Swing) atau aktivitas ATV / Rafting opsional',
        'Belanja cendera mata pribadi & tipping sukarela',
      ],
      en: [
        'Optional jungle swing, ATV quad biking, or river rafting add-ons',
        'Personal souvenir purchases & voluntary tipping',
      ],
    },
    childPolicy: {
      id: [
        'Balita < 3 tahun: Gratis.',
        'Anak usia 3–10 tahun: 60% dari tarif dewasa.',
      ],
      en: [
        'Infants under 3 years: Free of charge.',
        'Children aged 3–10 years: 60% of adult rate.',
      ],
    },
    itinerary: [
      {
        day: 1,
        title: {
          id: 'Air Terjun Tegenungan, Monkey Forest, Tegallalang & Pasar Seni Ubud',
          en: 'Tegenungan Waterfall, Monkey Forest, Tegallalang & Ubud Market',
        },
        activities: {
          id: [
            '08.30 — Penjemputan pagi di hotel Anda',
            '09.30 — Mengunjungi kesegaran Air Terjun Tegenungan Gianyar',
            '11.00 — Menjelajahi hutan rindang Sacred Monkey Forest Ubud',
            '12.45 — Makan siang santai menu Bebek Khas Ubud di tepi persawahan',
            '14.15 — Menikmati panorama Terasering Sawah Tegallalang & kebun kopi',
            '16.00 — Berfoto di Puri Saren Ubud & belanja kerajinan di Pasar Seni Ubud',
            '18.00 — Kembali menuju hotel tempat Anda menginap',
          ],
          en: [
            '08:30 — Morning pickup from your hotel lobby',
            '09:30 — Visit lush Tegenungan Waterfall in Gianyar',
            '11:00 — Walk shaded temple trails at Sacred Monkey Forest Ubud',
            '12:45 — Relaxed Ubud Crispy Duck lunch overlooking green paddies',
            '14:15 — Explore Tegallalang Rice Terraces & artisan coffee garden',
            '16:00 — Visit Ubud Royal Palace & browse Ubud Art Market',
            '18:00 — Comfortable transfer back to your hotel',
          ],
        },
      },
    ],
    pricingTable: [
      {
        id: 'tier-allin',
        tierName: { id: 'Paket All-Inclusive (Mobil + Tiket + Makan Siang Bebek Ubud)', en: 'All-Inclusive (Car + Tickets + Ubud Duck Lunch)' },
        brackets: [
          { paxLabel: { id: '2 Orang', en: '2 Pax' }, pricePerPax: 660000 },
          { paxLabel: { id: '3–4 Orang', en: '3–4 Pax' }, pricePerPax: 565000 },
          { paxLabel: { id: '5–8 Orang', en: '5–8 Pax' }, pricePerPax: 520000 },
        ],
      },
      {
        id: 'tier-basic',
        tierName: { id: 'Paket Hemat (Mobil Privat + Tiket Masuk Wisata)', en: 'Essential Tier (Private Car + Entrance Tickets)' },
        brackets: [
          { paxLabel: { id: '2 Orang', en: '2 Pax' }, pricePerPax: 520000 },
          { paxLabel: { id: '3–4 Orang', en: '3–4 Pax' }, pricePerPax: 435000 },
          { paxLabel: { id: '5–8 Orang', en: '5–8 Pax' }, pricePerPax: 395000 },
        ],
      },
    ],
    importantNotes: {
      id: [
        'Paket ini juga dapat dikombinasikan dengan aktivitas Ayung River Rafting atau ATV Ubud melalui konsultasi WhatsApp.',
      ],
      en: [
        'This Ubud day tour can easily be upgraded to include Ayung River Rafting or ATV Jungle Rides via WhatsApp.',
      ],
    },
    images: [
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    ],
    recommendedHotelAreas: ['Ubud', 'Seminyak'],
    featured: false,
  },
];
