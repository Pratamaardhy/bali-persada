import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { LanguageService } from '../../../../core/services/language.service';
import { CatalogService } from '../../../../core/services/catalog.service';
import { WhatsAppService } from '../../../../core/services/whatsapp.service';
import { TourPackage } from '../../../../core/models/package.model';

@Component({
  selector: 'app-package-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    @if (pkg(); as packageData) {
      <div class="package-detail-page">
        <!-- Breadcrumb / Back Bar -->
        <div class="container detail-top-bar">
          <a routerLink="/packages" class="back-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>{{ t().packageDetail.backToCatalog }}</span>
          </a>
        </div>

        <div class="container detail-layout">
          <!-- Main Content Column -->
          <main class="detail-main">
            <!-- Header Info -->
            <div class="package-header">
              <div class="meta-tags">
                <span class="badge badge--teal">{{ packageData.category.toUpperCase() }}</span>
                @if (packageData.badge) {
                  <span class="badge badge--ocean">{{ packageData.badge[lang()] }}</span>
                }
              </div>
              <h1 class="package-title">{{ packageData.title[lang()] }}</h1>
              <div class="package-quick-specs">
                <div class="spec-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>{{ packageData.duration[lang()] }}</span>
                </div>
                <div class="spec-divider"></div>
                <div class="spec-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>{{ packageData.destination }}</span>
                </div>
                <div class="spec-divider"></div>
                <div class="spec-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <span>{{ packageData.minParticipants[lang()] }}</span>
                </div>
              </div>
            </div>

            <!-- Image Gallery -->
            <div class="gallery-wrapper">
              <div class="main-image">
                <img
                  [src]="selectedImage()"
                  [alt]="packageData.title[lang()]"
                  (error)="onMainImageError()"
                />
              </div>
              @if (packageData.images.length > 1) {
                <div class="thumbnails-row">
                  @for (img of packageData.images; track img) {
                    <button
                      type="button"
                      class="thumbnail-btn"
                      [class.active]="selectedImage() === img"
                      (click)="selectedImage.set(img)"
                    >
                      <img [src]="img" alt="Thumbnail" />
                    </button>
                  }
                </div>
              }
            </div>

            <!-- Overview -->
            <section class="content-block">
              <h2 class="block-title">{{ t().packageDetail.overview }}</h2>
              <p class="overview-text">{{ packageData.description[lang()] }}</p>
            </section>

            <!-- Highlights -->
            <section class="content-block">
              <h2 class="block-title">{{ t().packageDetail.highlights }}</h2>
              <ul class="highlights-list">
                @for (item of packageData.highlights[lang()]; track item) {
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="check-icon">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{{ item }}</span>
                  </li>
                }
              </ul>
            </section>

            <!-- Itinerary Day-by-Day -->
            <section class="content-block">
              <h2 class="block-title">{{ t().packageDetail.itinerary }}</h2>
              <div class="itinerary-timeline">
                @for (day of packageData.itinerary; track day.day) {
                  <div class="itinerary-day">
                    <div class="day-badge">
                      <span>{{ t().packageDetail.dayPrefix }}{{ day.day }}</span>
                    </div>
                    <div class="day-content">
                      <h3 class="day-title">{{ day.title[lang()] }}</h3>
                      <ul class="day-activities">
                        @for (act of day.activities[lang()]; track act) {
                          <li>{{ act }}</li>
                        }
                      </ul>
                    </div>
                  </div>
                }
              </div>
            </section>

            <!-- Inclusions & Exclusions -->
            <section class="content-block">
              <div class="inclusions-grid">
                <div class="incl-box incl-box--in">
                  <h3 class="incl-title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{{ t().packageDetail.inclusions }}</span>
                  </h3>
                  <ul>
                    @for (item of packageData.inclusions[lang()]; track item) {
                      <li>{{ item }}</li>
                    }
                  </ul>
                </div>

                <div class="incl-box incl-box--ex">
                  <h3 class="incl-title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    <span>{{ t().packageDetail.exclusions }}</span>
                  </h3>
                  <ul>
                    @for (item of packageData.exclusions[lang()]; track item) {
                      <li>{{ item }}</li>
                    }
                  </ul>
                </div>
              </div>
            </section>

            <!-- Important Notes -->
            <section class="content-block">
              <h2 class="block-title">{{ t().packageDetail.importantNotes }}</h2>
              <ul class="notes-list">
                @for (note of packageData.importantNotes[lang()]; track note) {
                  <li>{{ note }}</li>
                }
              </ul>
            </section>
          </main>

          <!-- Sidebar Sticky CTA Column -->
          <aside class="detail-sidebar">
            <div class="cta-sidebar-card">
              <span class="cta-sub">{{ t().packageDetail.ctaCardPriceFrom }}</span>
              <div class="cta-price-row">
                <span class="currency">Rp</span>
                <span class="amount">{{ formatPrice(packageData.price) }}</span>
                <span class="unit">{{ packageData.priceUnit[lang()] }}</span>
              </div>

              <div class="price-disclaimer-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                <span>{{ t().packageDetail.indicativePriceNotice }}</span>
              </div>

              <div class="sidebar-divider"></div>

              <h4 class="cta-card-heading">{{ t().packageDetail.ctaCardTitle }}</h4>
              <p class="cta-card-desc">{{ t().packageDetail.ctaCardDesc }}</p>

              <button
                type="button"
                class="btn btn--whatsapp btn--full btn--lg sidebar-wa-btn"
                (click)="onConsultWhatsApp(packageData)"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.088.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.2.662.589 1.221.771 1.394.858.173.086.274.072.375-.043s.433-.505.549-.679c.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
                </svg>
                <span>{{ t().packageDetail.askWhatsApp }}</span>
              </button>

              <p class="redirect-hint">{{ t().packageDetail.waRedirectNotice }}</p>

              <div class="sidebar-contact-info">
                <span>WhatsApp: {{ waService.displayPhoneNumber }}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    } @else {
      <!-- Not Found State -->
      <div class="container not-found-state">
        <h2 class="nf-title">{{ t().packageDetail.notFoundTitle }}</h2>
        <p class="nf-desc">{{ t().packageDetail.notFoundDesc }}</p>
        <a routerLink="/packages" class="btn btn--primary">
          {{ t().packageDetail.backToCatalog }}
        </a>
      </div>
    }
  `,
  styles: [`
    .package-detail-page {
      padding-bottom: var(--space-20);
      background-color: var(--color-sand-light);
    }
    .detail-top-bar {
      padding-top: var(--space-6);
      padding-bottom: var(--space-4);
    }
    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.9375rem;
      font-weight: 600;
      color: var(--color-teal);
    }
    .back-link:hover {
      color: var(--color-teal-dark);
    }
    .detail-layout {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2.5rem;
      align-items: start;
    }
    @media (min-width: 1024px) {
      .detail-layout {
        grid-template-columns: 1fr 380px;
        gap: 3.5rem;
      }
    }
    .package-header {
      margin-bottom: var(--space-6);
    }
    .meta-tags {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 0.75rem;
    }
    .package-title {
      font-size: clamp(1.75rem, 3vw + 0.5rem, 2.5rem);
      margin-bottom: 0.85rem;
      color: var(--color-ocean);
      line-height: 1.25;
    }
    .package-quick-specs {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
      font-size: 0.9375rem;
      color: var(--color-text-secondary);
      font-weight: 500;
    }
    .spec-item {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      color: var(--color-teal-dark);
    }
    .spec-divider {
      width: 1px;
      height: 16px;
      background-color: var(--color-border);
    }
    .gallery-wrapper {
      margin-bottom: var(--space-10);
    }
    .main-image {
      aspect-ratio: 16 / 10;
      border-radius: var(--radius-lg);
      overflow: hidden;
      background-color: var(--color-ocean-subtle);
      box-shadow: var(--shadow-md);
      margin-bottom: 0.75rem;
    }
    .main-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .thumbnails-row {
      display: flex;
      gap: 0.75rem;
      overflow-x: auto;
      padding-bottom: 0.25rem;
    }
    .thumbnail-btn {
      width: 90px;
      height: 60px;
      border-radius: var(--radius-sm);
      overflow: hidden;
      border: 2px solid transparent;
      opacity: 0.75;
      padding: 0;
      transition: all var(--transition-fast);
      flex-shrink: 0;
    }
    .thumbnail-btn.active,
    .thumbnail-btn:hover {
      opacity: 1;
      border-color: var(--color-teal);
    }
    .thumbnail-btn img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .content-block {
      background-color: var(--color-white);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: 2rem;
      margin-bottom: 2rem;
      box-shadow: var(--shadow-sm);
    }
    .block-title {
      font-size: 1.35rem;
      color: var(--color-ocean);
      margin-bottom: 1.25rem;
      padding-bottom: 0.75rem;
      border-bottom: 1px solid var(--color-sand-border);
    }
    .overview-text {
      font-size: 1.05rem;
      line-height: 1.7;
      color: var(--color-text-secondary);
    }
    .highlights-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
    }
    .highlights-list li {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      font-size: 0.9375rem;
      color: var(--color-text-dark);
    }
    .check-icon {
      color: var(--color-teal);
      flex-shrink: 0;
      margin-top: 0.2rem;
    }
    .itinerary-timeline {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .itinerary-day {
      display: flex;
      gap: 1.25rem;
      align-items: flex-start;
    }
    .day-badge {
      background-color: var(--color-ocean);
      color: var(--color-white);
      padding: 0.35rem 0.75rem;
      border-radius: var(--radius-sm);
      font-size: 0.8125rem;
      font-weight: 700;
      white-space: nowrap;
      flex-shrink: 0;
    }
    .day-content {
      flex: 1;
    }
    .day-title {
      font-size: 1.05rem;
      color: var(--color-ocean);
      margin-bottom: 0.5rem;
    }
    .day-activities {
      list-style-type: disc;
      padding-left: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      font-size: 0.9375rem;
      color: var(--color-text-secondary);
      line-height: 1.55;
    }
    .inclusions-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    @media (min-width: 768px) {
      .inclusions-grid {
        grid-template-columns: 1fr 1fr;
      }
    }
    .incl-box {
      padding: 1.5rem;
      border-radius: var(--radius-md);
      font-size: 0.9375rem;
    }
    .incl-box--in {
      background-color: var(--color-teal-surface);
      border: 1px solid rgba(47, 143, 131, 0.25);
    }
    .incl-box--ex {
      background-color: #FAF4F4;
      border: 1px solid #EED7D7;
    }
    .incl-title {
      font-size: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }
    .incl-box--in .incl-title {
      color: var(--color-teal-dark);
    }
    .incl-box--ex .incl-title {
      color: #A33A3A;
    }
    .incl-box ul {
      list-style-type: disc;
      padding-left: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      color: var(--color-text-dark);
      line-height: 1.5;
    }
    .notes-list {
      list-style-type: disc;
      padding-left: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      color: var(--color-text-secondary);
      line-height: 1.6;
    }

    /* SIDEBAR */
    .detail-sidebar {
      position: sticky;
      top: 96px;
    }
    .cta-sidebar-card {
      background-color: var(--color-white);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: 2rem 1.75rem;
      box-shadow: var(--shadow-md);
    }
    .cta-sub {
      display: block;
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--color-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .cta-price-row {
      display: flex;
      align-items: baseline;
      gap: 0.35rem;
      margin-bottom: 0.75rem;
      flex-wrap: wrap;
    }
    .cta-price-row .currency {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--color-teal-dark);
    }
    .cta-price-row .amount {
      font-family: var(--font-heading);
      font-size: 2rem;
      font-weight: 800;
      color: var(--color-teal-dark);
    }
    .cta-price-row .unit {
      font-size: 0.8125rem;
      color: var(--color-text-muted);
    }
    .price-disclaimer-pill {
      display: flex;
      align-items: flex-start;
      gap: 0.4rem;
      font-size: 0.75rem;
      color: var(--color-teal-dark);
      background-color: var(--color-teal-surface);
      padding: 0.4rem 0.65rem;
      border-radius: var(--radius-sm);
      line-height: 1.4;
      margin-bottom: 1.25rem;
    }
    .price-disclaimer-pill svg {
      flex-shrink: 0;
      margin-top: 0.1rem;
    }
    .sidebar-divider {
      height: 1px;
      background-color: var(--color-border);
      margin-bottom: 1.25rem;
    }
    .cta-card-heading {
      font-size: 1.125rem;
      color: var(--color-ocean);
      margin-bottom: 0.5rem;
    }
    .cta-card-desc {
      font-size: 0.875rem;
      color: var(--color-text-secondary);
      line-height: 1.5;
      margin-bottom: 1.5rem;
    }
    .sidebar-wa-btn {
      margin-bottom: 0.85rem;
    }
    .redirect-hint {
      font-size: 0.75rem;
      color: var(--color-text-muted);
      text-align: center;
      line-height: 1.4;
      margin-bottom: 1.25rem;
    }
    .sidebar-contact-info {
      text-align: center;
      font-size: 0.8125rem;
      font-weight: 700;
      color: var(--color-ocean);
      padding-top: 1rem;
      border-top: 1px dashed var(--color-border);
    }

    /* Not Found */
    .not-found-state {
      padding: var(--space-20) var(--container-padding);
      text-align: center;
      max-width: 560px;
    }
    .nf-title {
      font-size: 1.75rem;
      color: var(--color-ocean);
      margin-bottom: 1rem;
    }
    .nf-desc {
      font-size: 1.05rem;
      color: var(--color-text-secondary);
      margin-bottom: 2rem;
    }
  `],
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

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const slug = params.get('slug');
      if (slug) {
        const item = this.catalogService.getPackageBySlug(slug);
        this.pkg.set(item);
        if (item?.images?.length) {
          this.selectedImage.set(item.images[0]);
        }
      }
    });
  }

  onMainImageError(): void {
    this.selectedImage.set('https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80');
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('id-ID').format(price);
  }

  onConsultWhatsApp(pkg: TourPackage): void {
    const url = this.waService.getPackageWhatsAppUrl(pkg, this.lang());
    this.waService.openWhatsAppUrl(url);
  }
}
