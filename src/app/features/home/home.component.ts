import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { CatalogService } from '../../core/services/catalog.service';
import { WhatsAppService } from '../../core/services/whatsapp.service';
import { PackageCategoryMeta } from '../../core/models/package.model';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { PackageCardComponent } from '../../shared/components/package-card/package-card.component';
import { HotelCardComponent } from '../../shared/components/hotel-card/hotel-card.component';

interface CategoryShowcaseItem {
  meta: PackageCategoryMeta;
  count: number;
  startingPrice: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SectionHeadingComponent,
    PackageCardComponent,
    HotelCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.layout.css', './home.sections.css'],
})
export class HomeComponent {
  private readonly langService = inject(LanguageService);
  private readonly catalogService = inject(CatalogService);
  private readonly waService = inject(WhatsAppService);

  readonly lang = this.langService.currentLang;
  readonly t = this.langService.t;

  readonly totalPackagesCount = this.catalogService.getCategoryCount('all');
  readonly featuredPackages = this.catalogService.getFeaturedPackages().slice(0, 6);
  readonly featuredHotels = this.catalogService.getFeaturedHotels().slice(0, 3);

  readonly categoryShowcase = computed<CategoryShowcaseItem[]>(() =>
    this.catalogService.getCategories().map((meta) => {
      const items = this.catalogService.getPackagesByCategory(meta.id);
      const startingPrice =
        items.length > 0 ? Math.min(...items.map((p) => p.price)) : 0;
      return {
        meta,
        count: items.length,
        startingPrice,
      };
    })
  );

  readonly openFaq = signal<number | null>(1);

  toggleFaq(index: number): void {
    this.openFaq.update((curr) => (curr === index ? null : index));
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('id-ID').format(price);
  }

  onConsultWhatsApp(): void {
    const url = this.waService.getGeneralWhatsAppUrl(this.lang());
    this.waService.openWhatsAppUrl(url);
  }
}
