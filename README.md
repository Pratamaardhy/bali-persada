# Bali Persada Tour and Travel — Official Website

Website company landing page dan katalog layanan travel profesional untuk **Bali Persada Tour and Travel**, spesialis reservasi hotel/resort dan paket liburan Bali untuk keluarga maupun rombongan.

Dibangun dengan pendekatan modern, minimalis tropical premium, responsif, multibahasa (ID/EN), dan berorientasi pada konversi konsultasi pemesanan via WhatsApp.

---

## 1. Prasyarat Sistem

- **Node.js**: v20+ atau v24+ (Project dikembangkan pada Node.js `v24.19.0`)
- **npm**: v10+ atau v12+ (Project dikembangkan pada npm `12.0.2`)
- **Angular CLI**: v22+

---

## 2. Cara Instalasi & Menjalankan Project

### Instalasi Dependensi
```bash
npm install
```

### Menjalankan Server Pengembangan Lokal
Untuk menjalankan server lokal:
```bash
npm start
```
Atau tentukan port khusus (misalnya port 4500 jika port 4200/4300 sedang digunakan):
```bash
npx ng serve --port 4500
```
Buka browser dan akses: `http://localhost:4500/`

### Build Production
Untuk mengompilasi bundle produksi (hasil build tersimpan di folder `dist/baipersada`):
```bash
npm run build
```

---

## 3. Struktur Folder Project

```text
baipersada/
├── public/                     # Aset publik statis (favicon, icons)
├── src/
│   ├── app/
│   │   ├── core/               # Model data & Service inti
│   │   │   ├── models/
│   │   │   │   ├── package.model.ts      # Model typed TourPackage
│   │   │   │   ├── hotel.model.ts        # Model typed Hotel & RoomType
│   │   │   │   └── translation.model.ts  # Model dictionary ID/EN
│   │   │   └── services/
│   │   │       ├── whatsapp.service.ts   # Service pembentuk URL WA & pesan kontekstual
│   │   │       ├── language.service.ts   # State management bahasa (Angular Signal)
│   │   │       └── catalog.service.ts    # Layer abstraksi data paket & hotel
│   │   ├── data/               # Mock data lokal
│   │   │   ├── mock-packages.ts          # 6 data paket liburan realistis
│   │   │   ├── mock-hotels.ts            # 6 data hotel & resort realistis
│   │   │   └── translations.ts           # Kamus terjemahan bilingual ID & EN
│   │   ├── shared/             # Komponen UI bersama
│   │   │   └── components/
│   │   │       ├── header/               # Sticky header, wordmark, nav, & mobile drawer
│   │   │       ├── footer/               # Footer lengkap, disclaimer, dynamic year
│   │   │       ├── package-card/         # Kartu paket liburan & CTA WA
│   │   │       ├── hotel-card/           # Kartu hotel & fasilitas
│   │   │       ├── section-heading/      # Header section responsif & reusable
│   │   │       ├── empty-state/          # Tampilan filter kosong yang informatif
│   │   │       └── language-switcher/    # Toggle ID / EN
│   │   ├── features/           # Halaman utama (Lazy Loaded)
│   │   │   ├── home/                     # Landing page utama
│   │   │   ├── packages/
│   │   │   │   └── pages/
│   │   │   │       ├── packages-list/    # Katalog paket dengan filter kategori
│   │   │   │       └── package-detail/   # Detail paket, itinerary, & CTA WA
│   │   │   ├── hotels/
│   │   │   │   └── pages/
│   │   │   │       ├── hotels-list/      # Katalog hotel dengan filter area
│   │   │   │       └── hotel-detail/     # Detail hotel, tipe kamar, & CTA WA
│   │   │   ├── about/                    # Halaman Tentang Kami
│   │   │   ├── contact/                  # Kontak & Formulir Inquiry WA
│   │   │   └── not-found/                # Halaman 404 ramah pengguna
│   │   ├── app.config.ts       # Konfigurasi aplikasi & in-memory scroll
│   │   ├── app.routes.ts       # Routing dengan lazy loading & SEO titles
│   │   ├── app.ts              # Root standalone component
│   │   ├── app.html            # Layout root dengan skip link
│   │   └── app.css             # Layout root CSS
│   ├── index.html              # HTML shell & font Google Fonts
│   ├── main.ts                 # Bootstrap aplikasi
│   └── styles.css              # Design tokens & Global CSS
├── angular.json                # Konfigurasi build Angular
├── package.json                # Konfigurasi paket & dependensi
└── tsconfig.json               # Konfigurasi TypeScript
```

---

## 4. Panduan Modifikasi & Kustomisasi

### A. Mengganti Nomor WhatsApp Bisnis
Buka file `src/app/core/services/whatsapp.service.ts`:
```typescript
// Ganti nomor WhatsApp bisnis resmi (tanpa tanda +, spasi, atau minus)
readonly phoneNumber = '628737485732';

// Format tampilan pada teks UI
readonly displayPhoneNumber = '+62 873-7485-732';
```

### B. Mengganti atau Menambah Data Paket Liburan
Buka file `src/app/data/mock-packages.ts`:
Setiap item paket memiliki format `TourPackage` dengan dukungan bahasa ganda `id` dan `en`.
Tambahkan atau ubah properti seperti:
- `title`: Judul paket
- `slug`: URL slug halaman detail (`/packages/nama-slug`)
- `price`: Nilai harga indikatif (angka tanpa titik)
- `category`: `'family' | 'group' | 'couple'`
- `highlights`: Poin keunggulan
- `inclusions` & `exclusions`: Fasilitas termasuk dan tidak termasuk
- `itinerary`: Rincian kegiatan per hari
- `images`: Array URL foto destinasi

### C. Mengganti atau Menambah Data Hotel & Resort
Buka file `src/app/data/mock-hotels.ts`:
Setiap item hotel memiliki format `Hotel`:
- `name`: Nama hotel/resor
- `slug`: URL slug halaman detail (`/hotels/nama-slug`)
- `area`: `'Seminyak' | 'Ubud' | 'Nusa Dua' | 'Sanur' | 'Jimbaran' | 'Uluwatu'`
- `pricePerNight`: Harga indikatif per malam
- `facilities`: Daftar fasilitas utama
- `roomTypes`: Tipe kamar contoh (bed, view, kapasitas)

### D. Mengganti Foto / Gambar
Seluruh URL foto disimpan dalam properti `images` pada file `mock-packages.ts` dan `mock-hotels.ts`.
Semua kartu dan halaman detail telah dilengkapi:
- Rasio konsisten (`16/10`)
- `object-fit: cover`
- Atribut `alt` deskriptif
- Fallback handler `(error)` otomatis jika tautan gambar tidak dapat diakses.

### E. Memperbarui Terjemahan (ID / EN)
Buka file `src/app/data/translations.ts`:
Semua teks antarmuka (UI, navigasi, tombol CTA, FAQ, formulir, dan penafian) dipisahkan secara rapi dalam struktur dictionary `TRANSLATIONS.id` dan `TRANSLATIONS.en`.

---

## 5. Fitur yang Telah Diimplementasikan

1. **Company Landing Page (`/`)**:
   - Header sticky dengan wordmark elegan, menu navigasi, dan tombol toggle bahasa.
   - Hero section dua kolom: copy persuasif, CTA ganda, statistik fokus layanan, dan visual tropis.
   - Ringkasan 3 pilar layanan (Hotel & Resort, Paket Keluarga, Gathering Rombongan).
   - Katalog paket liburan unggulan.
   - Koleksi hotel pilihan unggulan.
   - Section 4 keunggulan layanan dengan ikon SVG bersih.
   - 4 tahapan alur konsultasi & pemesanan yang jelas.
   - FAQ accordion interaktif dengan aksesibilitas keyboard (`aria-expanded`).
   - Banner CTA WhatsApp dan footer lengkap dengan penafian transparan.

2. **Katalog Paket Liburan (`/packages`)**:
   - Filter kategori aktif: Semua, Keluarga, Rombongan, Pasangan.
   - Sinkronisasi query parameter URL (`?category=...`).
   - Kartu paket dengan durasi, destinasi, harga mulai, tombol detail, dan tombol WhatsApp instan.
   - Empty state informatif dengan tombol reset filter.

3. **Detail Paket Liburan (`/packages/:slug`)**:
   - Galeri foto interaktif dengan thumbnail seleksi.
   - Rincian hari ke hari (itinerary contoh).
   - Kotak fasilitas Termasuk (inclusions) dan Tidak Termasuk (exclusions).
   - Kartu CTA sticky dengan pesan WhatsApp kontekstual otomatis terisi nama paket.
   - Fallback state ramah apabila slug tidak ditemukan.

4. **Katalog Pilihan Hotel (`/hotels`)**:
   - Filter area: Semua Area, Seminyak, Ubud, Nusa Dua, Sanur, Jimbaran, Uluwatu.
   - Sinkronisasi query parameter URL (`?area=...`).
   - Kartu hotel dengan tag fasilitas, kisaran harga indikatif, dan tombol tanya ketersediaan via WA.

5. **Detail Hotel (`/hotels/:slug`)**:
   - Galeri gambar hotel.
   - Tipe kamar contoh (bed, view, kapasitas tamu).
   - Fasilitas lengkap dan destinasi terdekat.
   - Sticky card tanya harga & ketersediaan via WhatsApp.

6. **Tentang Kami (`/about`)**:
   - Filosofi layanan dan pendekatan perjalanan yang santai tanpa terburu-buru.
   - 3 nilai utama: Kejujuran & Transparansi, Kenyamanan Keluarga & Grup, Pelayanan yang Manusiawi.
   - Informasi operasional konsultasi online harian.

7. **Kontak (`/contact`)**:
   - Tombol langsung WhatsApp resmi `628737485732`.
   - Formulir inquiry terstruktur (Nama, Layanan, Tanggal, Jumlah Peserta, Catatan Khusus) yang secara otomatis menyusun pesan WhatsApp rapi saat ditekan.
   - Penafian transparan bahwa data tidak disimpan ke server tanpa izin.

8. **Halaman 404 Not Found (`**`)**:
   - Halaman fallback informatif dengan tombol navigasi kembali ke beranda atau katalog.

9. **Dukungan Multibahasa (ID / EN)**:
   - Language switcher persisten via LocalStorage & Angular Signal.
   - Terjemahan menyeluruh untuk antarmuka, paket wisata, dan hotel.

---

## 6. Batasan Mock Data & Transparansi Fungsionalitas

Sesuai dengan ketentuan arsitektur MVP:
- **Backend**: Belum tersedia server backend. Seluruh data disajikan secara lokal melalui `CatalogService` yang dapat diganti dengan HttpClient/REST API di masa mendatang tanpa merombak komponen UI.
- **Harga**: Semua harga yang tertera adalah harga indikatif / estimasi awal, bukan jaminan harga live.
- **Ketersediaan**: Tidak ada sistem booking engine live atau inventaris kamar otomatis. Seluruh konfirmasi ketersediaan dilakukan secara personal oleh admin via WhatsApp.
- **Keamanan Data**: Formulir kontak tidak menyimpan data pribadi pengunjung ke database pihak ketiga.
- **Kejujuran Brand**: Tidak ada rekayasa testimoni palsu, legalitas palsu, atau klaim afiliasi hotel yang tidak terverifikasi.

---

## 7. Rekomendasi Pengembangan Selanjutnya

1. **Integrasi Headless CMS / API**: Menghubungkan `CatalogService` ke backend (Node.js/Spring Boot/Strapi) untuk pengelolaan katalog dinamis.
2. **Channel Manager Integration**: Menghubungkan inventaris kamar hotel dengan penyedia sistem reservasi (e.g., SiteMinder/Cloudbeds).
3. **PWA & Offline Caching**: Menambahkan service worker untuk caching katalog destinasi dan peta luring.
4. **WhatsApp Business API**: Mengintegrasikan webhook CRM untuk tracking riwayat inquiry calon pelanggan.
