import { Injectable } from '@angular/core';
import {
  DurationFilter,
  PackageCategory,
  PackageCategoryId,
  PackageCategoryMeta,
  PackageSortOption,
  TourPackage,
} from '../models/package.model';
import { Hotel, HotelAreaFilter } from '../models/hotel.model';
import { Language } from '../models/translation.model';
import { MOCK_PACKAGES } from '../../data/mock-packages';
import { PACKAGE_CATEGORIES } from '../../data/package-categories';
import { MOCK_HOTELS } from '../../data/mock-hotels';

const LEGACY_SLUG_MAP: Record<string, string> = {
  'bali-family-fun-escape': 'paket-tour-bali-4h3m',
  'nusa-penida-island-adventure': 'paket-nusa-penida-barat-1-hari',
  'ubud-cultural-nature-retreat': 'paket-tour-ubud-alam-budaya',
  'bali-corporate-gathering-bedugul': 'paket-group-gathering-custom-bali',
  'romantic-bali-honeymoon-serenity': 'paket-honeymoon-bali-4h3m',
  'east-bali-ocean-discovery': 'paket-tour-besakih-bali-timur',
};

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private readonly packages: TourPackage[] = MOCK_PACKAGES;
  private readonly categories: PackageCategoryMeta[] = PACKAGE_CATEGORIES;
  private readonly hotels: Hotel[] = MOCK_HOTELS;

  // Categories methods
  getCategories(): PackageCategoryMeta[] {
    return [...this.categories];
  }

  getCategoryMeta(id: PackageCategoryId): PackageCategoryMeta | undefined {
    return this.categories.find((c) => c.id === id);
  }

  normalizeCategoryParam(param?: string | null): PackageCategory {
    if (!param) return 'all';
    const clean = param.toLowerCase().trim();
    if (clean === 'family') return 'regular';
    if (clean === 'couple') return 'honeymoon';
    const validIds: PackageCategoryId[] = [
      'regular',
      'oneday',
      'honeymoon',
      'budget',
      'penida',
      'group',
    ];
    if (validIds.includes(clean as PackageCategoryId)) {
      return clean as PackageCategoryId;
    }
    return 'all';
  }

  // Tour Packages methods
  getAllPackages(): TourPackage[] {
    return [...this.packages];
  }

  getFeaturedPackages(limit = 6): TourPackage[] {
    return this.packages.filter((p) => p.featured).slice(0, limit);
  }

  getPackagesByCategory(category: PackageCategoryId): TourPackage[] {
    return this.packages.filter((p) => p.category === category);
  }

  getCategoryCount(category: PackageCategory): number {
    if (category === 'all') {
      return this.packages.length;
    }
    return this.packages.filter((p) => p.category === category).length;
  }

  getPackageBySlug(slug: string): TourPackage | undefined {
    const direct = this.packages.find((p) => p.slug === slug);
    if (direct) return direct;
    const mappedSlug = LEGACY_SLUG_MAP[slug];
    return mappedSlug ? this.packages.find((p) => p.slug === mappedSlug) : undefined;
  }

  filterPackages(category: PackageCategory): TourPackage[] {
    if (category === 'all') {
      return this.getAllPackages();
    }
    return this.packages.filter((p) => p.category === category);
  }

  queryPackages(options: {
    category?: PackageCategory;
    duration?: DurationFilter;
    search?: string;
    sort?: PackageSortOption;
    lang?: Language;
  }): TourPackage[] {
    const {
      category = 'all',
      duration = 'all',
      search = '',
      sort = 'recommended',
      lang = 'id',
    } = options;

    let result = [...this.packages];

    if (category !== 'all') {
      result = result.filter((pkg) => pkg.category === category);
    }

    if (duration !== 'all') {
      const targetDays = Number(duration);
      if (duration === '5') {
        result = result.filter((pkg) => pkg.durationDays >= 5);
      } else if (!Number.isNaN(targetDays)) {
        result = result.filter((pkg) => pkg.durationDays === targetDays);
      }
    }

    const q = search.trim().toLowerCase();
    if (q) {
      result = result.filter((pkg) => {
        const title = pkg.title[lang].toLowerCase();
        const tagline = pkg.tagline[lang].toLowerCase();
        const dest = pkg.destination.toLowerCase();
        const code = pkg.code.toLowerCase();
        const highlights = pkg.highlights[lang].join(' ').toLowerCase();
        return (
          title.includes(q) ||
          tagline.includes(q) ||
          dest.includes(q) ||
          code.includes(q) ||
          highlights.includes(q)
        );
      });
    }

    if (sort === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === 'duration-asc') {
      result.sort((a, b) => a.durationDays - b.durationDays || a.price - b.price);
    }

    return result;
  }

  getRelatedPackages(currentPkg: TourPackage, limit = 3): TourPackage[] {
    const sameCategory = this.packages.filter(
      (p) => p.id !== currentPkg.id && p.category === currentPkg.category
    );
    const others = this.packages.filter(
      (p) => p.id !== currentPkg.id && p.category !== currentPkg.category && p.featured
    );
    return [...sameCategory, ...others].slice(0, limit);
  }

  getRecommendedHotelsForPackage(pkg: TourPackage, limit = 3): Hotel[] {
    if (pkg.recommendedHotelAreas?.length) {
      const matched = this.hotels.filter((h) => pkg.recommendedHotelAreas?.includes(h.area));
      if (matched.length >= limit) {
        return matched.slice(0, limit);
      }
      const remaining = this.hotels.filter((h) => !matched.some((m) => m.id === h.id));
      return [...matched, ...remaining].slice(0, limit);
    }
    return this.getFeaturedHotels().slice(0, limit);
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
