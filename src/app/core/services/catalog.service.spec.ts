import { TestBed } from '@angular/core/testing';
import { CatalogService } from './catalog.service';
import { WhatsAppService } from './whatsapp.service';

describe('CatalogService & WhatsAppService', () => {
  let catalog: CatalogService;
  let whatsapp: WhatsAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    catalog = TestBed.inject(CatalogService);
    whatsapp = TestBed.inject(WhatsAppService);
  });

  it('should expose all 6 tour package categories', () => {
    const categories = catalog.getCategories();
    expect(categories.length).toBe(6);
    expect(categories.map((c) => c.id)).toEqual([
      'regular',
      'oneday',
      'honeymoon',
      'budget',
      'penida',
      'group',
    ]);
  });

  it('should contain 18 complete bilingual tour packages with pricing tables', () => {
    const all = catalog.getAllPackages();
    expect(all.length).toBe(18);
    for (const pkg of all) {
      expect(pkg.title.id.length).toBeGreaterThan(3);
      expect(pkg.title.en.length).toBeGreaterThan(3);
      expect(pkg.itinerary.length).toBeGreaterThan(0);
      expect(pkg.pricingTable.length).toBeGreaterThan(0);
      expect(pkg.pricingTable[0].brackets.length).toBeGreaterThan(0);
    }
  });

  it('should filter and sort packages cleanly via queryPackages', () => {
    const oneDay = catalog.queryPackages({ category: 'oneday' });
    expect(oneDay.length).toBe(4);
    expect(oneDay.every((p) => p.durationDays === 1)).toBe(true);

    const sortedAsc = catalog.queryPackages({ sort: 'price-asc' });
    for (let i = 1; i < sortedAsc.length; i++) {
      expect(sortedAsc[i].price).toBeGreaterThanOrEqual(sortedAsc[i - 1].price);
    }
  });

  it('should normalize legacy category parameters and legacy slugs', () => {
    expect(catalog.normalizeCategoryParam('family')).toBe('regular');
    expect(catalog.normalizeCategoryParam('couple')).toBe('honeymoon');
    expect(catalog.normalizeCategoryParam('penida')).toBe('penida');
    expect(catalog.normalizeCategoryParam('unknown')).toBe('all');

    const legacyResolved = catalog.getPackageBySlug('bali-family-fun-escape');
    expect(legacyResolved?.slug).toBe('paket-tour-bali-4h3m');
  });

  it('should format configured WhatsApp booking message cleanly in ID and EN', () => {
    const pkg = catalog.getPackageBySlug('paket-tour-bali-3h2m')!;
    expect(pkg).toBeTruthy();

    const msgId = whatsapp.getConfiguredPackageMessage(
      pkg,
      {
        routeLabel: 'Opsi Rute A: Kintamani, Ubud & Sunset Jimbaran',
        tierLabel: 'Termasuk Hotel Bintang 4 (★4)',
        paxLabel: '4 - 5 Orang',
        travelDate: '15 Desember 2026',
        estimatedPrice: 2490000,
        priceUnit: '/ orang',
      },
      'id'
    );
    expect(msgId).toContain('BP-REG-32');
    expect(msgId).toContain('Opsi Rute A');
    expect(msgId).toContain('15 Desember 2026');

    const msgEn = whatsapp.getConfiguredPackageMessage(
      pkg,
      {
        tierLabel: 'With 4-Star Hotel (★4)',
        estimatedPrice: 2490000,
        priceUnit: '/ pax',
      },
      'en'
    );
    expect(msgEn).toContain('BP-REG-32');
    expect(msgEn).toContain('With 4-Star Hotel');
    expect(msgEn).not.toContain('Route Variant:');
  });
});

