import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { LanguageService } from '../../../../core/services/language.service';
import { CatalogService } from '../../../../core/services/catalog.service';
import { PackageCategory, TourPackage } from '../../../../core/models/package.model';
import { PackageCardComponent } from '../../../../shared/components/package-card/package-card.component';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'app-packages-list',
  standalone: true,
  imports: [CommonModule, RouterModule, PackageCardComponent, EmptyStateComponent],
  template: `
    <div class="packages-page">
      <!-- Page Hero Header -->
      <section class="page-header">
        <div class="container header-inner">
          <span class="badge badge--teal header-badge">Katalog Perjalanan</span>
          <h1 class="page-title">{{ t().packagesPage.title }}</h1>
          <p class="page-subtitle">{{ t().packagesPage.subtitle }}</p>
        </div>
      </section>

      <!-- Filter & Catalog Body -->
      <section class="section section--sand catalog-section">
        <div class="container">
          <!-- Category Filter Bar -->
          <div class="filter-bar" role="toolbar" aria-label="Filter kategori paket">
            <button
              type="button"
              class="filter-chip"
              [class.active]="selectedCategory() === 'all'"
              (click)="setCategory('all')"
            >
              {{ t().packagesPage.filterAll }}
            </button>
            <button
              type="button"
              class="filter-chip"
              [class.active]="selectedCategory() === 'family'"
              (click)="setCategory('family')"
            >
              {{ t().packagesPage.filterFamily }}
            </button>
            <button
              type="button"
              class="filter-chip"
              [class.active]="selectedCategory() === 'group'"
              (click)="setCategory('group')"
            >
              {{ t().packagesPage.filterGroup }}
            </button>
            <button
              type="button"
              class="filter-chip"
              [class.active]="selectedCategory() === 'couple'"
              (click)="setCategory('couple')"
            >
              {{ t().packagesPage.filterCouple }}
            </button>
          </div>

          <!-- Results Metadata & Indicative Notice -->
          <div class="catalog-meta">
            <span class="results-count">
              <strong>{{ filteredPackages.length }}</strong> {{ t().packagesPage.resultsCount }}
            </span>
            <div class="indicative-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <span>{{ t().packagesPage.indicativeNote }}</span>
            </div>
          </div>

          <!-- Cards Grid or Empty State -->
          @if (filteredPackages.length > 0) {
            <div class="card-grid">
              @for (pkg of filteredPackages; track pkg.id) {
                <app-package-card [pkg]="pkg"></app-package-card>
              }
            </div>
          } @else {
            <app-empty-state
              [title]="t().packagesPage.emptyTitle"
              [description]="t().packagesPage.emptyDesc"
              [actionLabel]="t().packagesPage.resetFilter"
              (action)="setCategory('all')"
            ></app-empty-state>
          }
        </div>
      </section>
    </div>
  `,
  styles: [`
    .page-header {
      background: linear-gradient(180deg, #123B50 0%, #1C4E68 100%);
      color: var(--color-white);
      padding: var(--space-12) 0 var(--space-10);
      text-align: center;
    }
    .header-inner {
      max-width: 720px;
    }
    .header-badge {
      margin-bottom: var(--space-3);
    }
    .page-title {
      font-size: clamp(2rem, 3.5vw + 0.5rem, 2.75rem);
      color: var(--color-white);
      margin-bottom: var(--space-3);
    }
    .page-subtitle {
      font-size: 1.0625rem;
      color: rgba(255, 255, 255, 0.85);
      line-height: 1.6;
    }
    .catalog-section {
      padding-top: var(--space-8);
      min-height: 60vh;
    }
    .filter-bar {
      display: flex;
      gap: 0.5rem;
      overflow-x: auto;
      padding-bottom: 0.75rem;
      margin-bottom: 1.25rem;
      scrollbar-width: thin;
    }
    .filter-chip {
      padding: 0.55rem 1.15rem;
      border-radius: var(--radius-full);
      background-color: var(--color-white);
      color: var(--color-ocean);
      border: 1px solid var(--color-border);
      font-size: 0.875rem;
      font-weight: 600;
      white-space: nowrap;
      transition: all var(--transition-fast);
    }
    .filter-chip:hover {
      border-color: var(--color-teal);
      color: var(--color-teal-dark);
    }
    .filter-chip.active {
      background-color: var(--color-teal);
      color: var(--color-white);
      border-color: var(--color-teal);
      box-shadow: 0 2px 8px rgba(47, 143, 131, 0.3);
    }
    .catalog-meta {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-bottom: 2rem;
    }
    @media (min-width: 768px) {
      .catalog-meta {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }
    .results-count {
      font-size: 0.9375rem;
      color: var(--color-text-secondary);
    }
    .results-count strong {
      color: var(--color-ocean);
    }
    .indicative-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.8125rem;
      color: var(--color-teal-dark);
      background-color: var(--color-teal-surface);
      padding: 0.35rem 0.75rem;
      border-radius: var(--radius-sm);
    }
  `],
})
export class PackagesListComponent implements OnInit {
  private readonly langService = inject(LanguageService);
  private readonly catalogService = inject(CatalogService);
  private readonly route = inject(ActivatedRoute);

  readonly t = this.langService.t;
  readonly selectedCategory = signal<PackageCategory>('all');

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      const cat = params['category'];
      if (cat === 'family' || cat === 'group' || cat === 'couple') {
        this.selectedCategory.set(cat);
      }
    });
  }

  get filteredPackages(): TourPackage[] {
    return this.catalogService.filterPackages(this.selectedCategory());
  }

  setCategory(cat: PackageCategory): void {
    this.selectedCategory.set(cat);
  }
}
