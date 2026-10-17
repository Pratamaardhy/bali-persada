import { Injectable } from '@angular/core';
import { PackageCategory, TourPackage } from '../models/package.model';
import { Hotel, HotelAreaFilter } from '../models/hotel.model';
import { MOCK_PACKAGES } from '../../data/mock-packages';
import { MOCK_HOTELS } from '../../data/mock-hotels';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private readonly packages: TourPackage[] = MOCK_PACKAGES;
  private readonly hotels: Hotel[] = MOCK_HOTELS;

  // Tour Packages methods
  getAllPackages(): TourPackage[] {
    return [...this.packages];
  }

  getFeaturedPackages(): TourPackage[] {
    return this.packages.filter((p) => p.featured);
  }

  getPackageBySlug(slug: string): TourPackage | undefined {
    return this.packages.find((p) => p.slug === slug);
  }

  filterPackages(category: PackageCategory): TourPackage[] {
    if (category === 'all') {
      return this.getAllPackages();
    }
    return this.packages.filter((p) => p.category === category);
  }

  // Hotels methods
  getAllHotels(): Hotel[] {
    return [...this.hotels];
  }

  getFeaturedHotels(): Hotel[] {
    return this.hotels.filter((h) => h.featured);
  }

  getHotelBySlug(slug: string): Hotel | undefined {
    return this.hotels.find((h) => h.slug === slug);
  }

  filterHotels(area: HotelAreaFilter): Hotel[] {
    if (area === 'all') {
      return this.getAllHotels();
    }
    return this.hotels.filter((h) => h.area === area);
  }

  getHotelAreas(): HotelAreaFilter[] {
    return ['all', 'Seminyak', 'Ubud', 'Nusa Dua', 'Sanur', 'Jimbaran', 'Uluwatu'];
  }
}
