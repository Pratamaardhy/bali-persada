import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { LanguageService } from '../../../../core/services/language.service';
import { CatalogService } from '../../../../core/services/catalog.service';
import { WhatsAppService } from '../../../../core/services/whatsapp.service';
import {
  DurationFilter,
  PackageCategory,
  PackageCategoryMeta,
  PackageSortOption,
  TourPackage,
} from '../../../../core/models/package.model';
import { PackageCardComponent } from '../../../../shared/components/package-card/package-card.component';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'app-packages-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PackageCardComponent,
    EmptyStateComponent,
  ],
  templateUrl: './packages-list.component.html',
  styleUrl: './packages-list.component.css',
})
export class PackagesListComponent implements OnInit {
  private readonly langService = inject(LanguageService);
  private readonly catalogService = inject(CatalogService);
  private readonly waService = inject(WhatsAppService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly lang = this.langService.currentLang;
  readonly t = this.langService.t;

  readonly categories = this.catalogService.getCategories();
  readonly totalCount = this.catalogService.getCategoryCount('all');

  readonly selectedCategory = signal<PackageCategory>('all');
  readonly selectedDuration = signal<DurationFilter>('all');
  readonly searchQuery = signal<string>('');
  readonly sortOption = signal<PackageSortOption>('recommended');

  readonly durationOptions: { value: DurationFilter; label: () => string }[] = [
    { value: 'all', label: () => this.t().packagesPage.durationAll },
    { value: '1', label: () => this.t().packagesPage.duration1D },
    { value: '2', label: () => this.t().packagesPage.duration2D },
    { value: '3', label: () => this.t().packagesPage.duration3D },
    { value: '4', label: () => this.t().packagesPage.duration4D },
    { value: '5', label: () => this.t().packagesPage.duration5D },
  ];

  readonly filteredPackages = computed<TourPackage[]>(() =>
    this.catalogService.queryPackages({
      category: this.selectedCategory(),
      duration: this.selectedDuration(),
      search: this.searchQuery(),
      sort: this.sortOption(),
      lang: this.lang(),
    })
  );

  readonly hasActiveFilters = computed<boolean>(
    () =>
      this.selectedCategory() !== 'all' ||
      this.selectedDuration() !== 'all' ||
      this.searchQuery().trim().length > 0 ||
      this.sortOption() !== 'recommended'
  );

  readonly isGroupedCatalogView = computed<boolean>(() => !this.hasActiveFilters());

  readonly activeCategoryMeta = computed<PackageCategoryMeta | undefined>(() => {
    const cat = this.selectedCategory();
    if (cat === 'all') return undefined;
    return this.catalogService.getCategoryMeta(cat);
  });

  readonly groupedSections = computed<{ meta: PackageCategoryMeta; items: TourPackage[] }[]>(() =>
    this.categories
      .map((meta) => ({
        meta,
        items: this.catalogService.getPackagesByCategory(meta.id),
      }))
      .filter((sec) => sec.items.length > 0)
  );

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      const normalized = this.catalogService.normalizeCategoryParam(params['category']);
      this.selectedCategory.set(normalized);
    });
  }

  getCategoryCount(cat: PackageCategory): number {
    return this.catalogService.getCategoryCount(cat);
  }

  setCategory(cat: PackageCategory): void {
    this.selectedCategory.set(cat);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category: cat === 'all' ? null : cat },
      queryParamsHandling: 'merge',
    });
  }

  resetAllFilters(): void {
    this.selectedDuration.set('all');
    this.searchQuery.set('');
    this.sortOption.set('recommended');
    this.setCategory('all');
  }

  onConsultCustomGroup(): void {
    const url = this.waService.getCustomGroupWhatsAppUrl(this.lang());
    this.waService.openWhatsAppUrl(url);
  }
}
