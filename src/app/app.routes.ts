import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'Bali Persada Tour and Travel | Paket Tour Bali & Pilihan Hotel',
  },
  {
    path: 'packages',
    loadComponent: () =>
      import('./features/packages/pages/packages-list/packages-list.component').then(
        (m) => m.PackagesListComponent
      ),
    title: 'Paket Tour Bali Lengkap | Bali Persada Tour and Travel',
  },
  {
    path: 'packages/:slug',
    loadComponent: () =>
      import('./features/packages/pages/package-detail/package-detail.component').then(
        (m) => m.PackageDetailComponent
      ),
    title: 'Detail Paket Tour Bali | Bali Persada Tour and Travel',
  },
  {
    path: 'paket-tour',
    redirectTo: 'packages',
    pathMatch: 'full',
  },
  {
    path: 'paket-tour/:slug',
    redirectTo: 'packages/:slug',
  },
  {
    path: 'hotels',
    loadComponent: () =>
      import('./features/hotels/pages/hotels-list/hotels-list.component').then(
        (m) => m.HotelsListComponent
      ),
    title: 'Pilihan Hotel & Resort Bali | Bali Persada Tour and Travel',
  },
  {
    path: 'hotels/:slug',
    loadComponent: () =>
      import('./features/hotels/pages/hotel-detail/hotel-detail.component').then(
        (m) => m.HotelDetailComponent
      ),
    title: 'Detail Hotel & Resort | Bali Persada Tour and Travel',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about.component').then((m) => m.AboutComponent),
    title: 'Tentang Kami | Bali Persada Tour and Travel',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Kontak & Konsultasi WhatsApp | Bali Persada Tour and Travel',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found.component').then((m) => m.NotFoundComponent),
    title: 'Halaman Tidak Ditemukan | Bali Persada Tour and Travel',
  },
];
