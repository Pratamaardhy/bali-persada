import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { LanguageService } from '../../../../core/services/language.service';
import { CatalogService } from '../../../../core/services/catalog.service';
import { WhatsAppService } from '../../../../core/services/whatsapp.service';
import {
  ItineraryItem,
  PricingBracket,
  PricingTierRow,
  TourPackage,
} from '../../../../core/models/package.model';
import { Hotel } from '../../../../core/models/hotel.model';
import { PackageCardComponent } from '../../../../shared/components/package-card/package-card.component';

@Component({
  selector: 'app-package-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, PackageCardComponent],
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.layout.css', './package-detail.sections.css'],
})
export class PackageDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly catalogService = inject(CatalogService);
  private readonly langService = inject(LanguageService);
  readonly waService = inject(WhatsAppService);

  readonly lang = this.langService.currentLang;
  readonly t = this.langService.t;

  readonly pkg = signal<TourPackage | undefined>(undefined);
  readonly selectedImage = signal<string>('');
  readonly selectedRouteIndex = signal<number>(0);
  readonly selectedTierIndex = signal<number>(0);
  readonly selectedBracketIndex = signal<number>(0);
  readonly plannedDate = signal<string>('');
  readonly isMobileDrawerOpen = signal<boolean>(false);

  readonly categoryLabel = computed<string>(() => {
    const p = this.pkg();
    if (!p) return '';
    const meta = this.catalogService.getCategoryMeta(p.category);
    return meta ? meta.shortTitle[this.lang()] : '';
  });

  readonly activeItinerary = computed<ItineraryItem[]>(() => {
    const p = this.pkg();
    if (!p) return [];
    const routes = p.routeOptions;
    const idx = this.selectedRouteIndex();
    if (routes && routes[idx] && routes[idx].itinerary.length > 0) {
      return routes[idx].itinerary;
    }
    return p.itinerary;
  });

  readonly tableColumns = computed<PricingBracket[]>(() => {
    const p = this.pkg();
    if (!p || !p.pricingTable.length) return [];
    return p.pricingTable[0].brackets;
  });

  readonly activeTier = computed<PricingTierRow | undefined>(() => {
    const p = this.pkg();
    if (!p || !p.pricingTable.length) return undefined;
    return p.pricingTable[this.selectedTierIndex()] || p.pricingTable[0];
  });

  readonly currentEstimatedPrice = computed<number>(() => {
    const p = this.pkg();
    if (!p) return 0;
    const tier = this.activeTier();
    if (!tier || !tier.brackets.length) return p.price;
    const bracket = tier.brackets[this.selectedBracketIndex()] || tier.brackets[0];
    return bracket ? bracket.pricePerPax : p.price;
  });

  readonly recommendedHotels = computed<Hotel[]>(() => {
    const p = this.pkg();
    return p ? this.catalogService.getRecommendedHotelsForPackage(p, 3) : [];
  });

  readonly relatedPackages = computed<TourPackage[]>(() => {
    const p = this.pkg();
    return p ? this.catalogService.getRelatedPackages(p, 3) : [];
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const slug = params.get('slug');
      if (slug) {
        const item = this.catalogService.getPackageBySlug(slug);
        this.pkg.set(item);
        this.selectedRouteIndex.set(0);
        this.selectedTierIndex.set(0);
        this.selectedBracketIndex.set(0);
        this.isMobileDrawerOpen.set(false);
        if (item?.images?.length) {
          this.selectedImage.set(item.images[0]);
        }
        if (
          typeof window !== 'undefined' &&
          typeof window.scrollTo === 'function' &&
          !window.navigator?.userAgent?.includes('jsdom')
        ) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  }

  openMobileDrawer(): void {
    this.isMobileDrawerOpen.set(true);
  }

  closeMobileDrawer(): void {
    this.isMobileDrawerOpen.set(false);
  }

  onTierChange(tierIdx: number): void {
    this.selectedTierIndex.set(tierIdx);
    const tier = this.pkg()?.pricingTable[tierIdx];
    if (tier && this.selectedBracketIndex() >= tier.brackets.length) {
      this.selectedBracketIndex.set(0);
    }
  }

  selectPricingCell(tierIdx: number, bracketIdx: number): void {
    this.selectedTierIndex.set(tierIdx);
    this.selectedBracketIndex.set(bracketIdx);
  }

  scrollToSection(elementId: string): void {
    if (typeof document !== 'undefined') {
      const el = document.getElementById(elementId);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  onMainImageError(): void {
    this.selectedImage.set(
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80'
    );
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('id-ID').format(price);
  }

  onConsultWhatsApp(pkg: TourPackage): void {
    this.closeMobileDrawer();
    const l = this.lang();
    const routeOpt = pkg.routeOptions?.[this.selectedRouteIndex()];
    const tier = this.activeTier();
    const bracket = tier?.brackets[this.selectedBracketIndex()] || tier?.brackets[0];

    const url = this.waService.getConfiguredPackageWhatsAppUrl(
      pkg,
      {
        routeLabel: routeOpt ? routeOpt.label[l] : undefined,
        tierLabel: tier ? tier.tierName[l] : undefined,
        paxLabel: bracket ? bracket.paxLabel[l] : undefined,
        travelDate: this.plannedDate().trim() || undefined,
        estimatedPrice: this.currentEstimatedPrice(),
        priceUnit: pkg.priceUnit[l],
      },
      l
    );
    this.waService.openWhatsAppUrl(url);
  }
}
