import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { LanguageService } from '../../../../core/services/language.service';
import { CatalogService } from '../../../../core/services/catalog.service';
import { WhatsAppService } from '../../../../core/services/whatsapp.service';
import { Hotel } from '../../../../core/models/hotel.model';

@Component({
  selector: 'app-hotel-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    @if (hotel(); as hotelData) {
      <div class="hotel-detail-page">
        <!-- Breadcrumb / Back Bar -->
        <div class="container detail-top-bar">
          <a routerLink="/hotels" class="back-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>{{ t().hotelDetail.backToCatalog }}</span>
          </a>
        </div>

        <div class="container detail-layout">
          <!-- Main Content Column -->
          <main class="detail-main">
            <!-- Header Info -->
            <div class="hotel-header">
              <div class="meta-tags">
                <span class="badge badge--teal">{{ hotelData.categoryLabel[lang()] }}</span>
                <span class="badge badge--ocean">{{ hotelData.area }}</span>
                @if (hotelData.badge) {
                  <span class="badge badge--amber">{{ hotelData.badge[lang()] }}</span>
                }
              </div>
              <h1 class="hotel-title">{{ hotelData.name }}</h1>
              <div class="hotel-location-row">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{{ hotelData.location }}</span>
              </div>
            </div>

            <!-- Image Gallery -->
            <div class="gallery-wrapper">
              <div class="main-image">
                <img
                  [src]="selectedImage()"
                  [alt]="hotelData.name"
                  (error)="onMainImageError()"
                />
              </div>
              @if (hotelData.images.length > 1) {
                <div class="thumbnails-row">
                  @for (img of hotelData.images; track img) {
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
              <h2 class="block-title">{{ t().hotelDetail.overview }}</h2>
              <p class="overview-text">{{ hotelData.description[lang()] }}</p>
            </section>

            <!-- Facilities -->
            <section class="content-block">
              <h2 class="block-title">{{ t().hotelDetail.facilities }}</h2>
              <div class="facilities-grid">
                @for (fac of hotelData.facilities[lang()]; track fac) {
                  <div class="facility-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="fac-icon">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{{ fac }}</span>
                  </div>
                }
              </div>
            </section>

            <!-- Sample Room Types -->
            <section class="content-block">
              <h2 class="block-title">{{ t().hotelDetail.roomTypes }}</h2>
              <div class="rooms-list">
                @for (room of hotelData.roomTypes; track room.name.id) {
                  <div class="room-card">
                    <h3 class="room-name">{{ room.name[lang()] }}</h3>
                    <div class="room-specs">
                      <div class="room-spec">
                        <span class="spec-label">{{ t().hotelDetail.roomBed }}:</span>
                        <span class="spec-value">{{ room.bed[lang()] }}</span>
                      </div>
                      <div class="room-spec">
                        <span class="spec-label">{{ t().hotelDetail.roomView }}:</span>
                        <span class="spec-value">{{ room.view[lang()] }}</span>
                      </div>
                      <div class="room-spec">
                        <span class="spec-label">{{ t().hotelDetail.roomCapacity }}:</span>
                        <span class="spec-value">{{ room.capacity[lang()] }}</span>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </section>

            <!-- Nearby Attractions -->
            <section class="content-block">
              <h2 class="block-title">{{ t().hotelDetail.nearbyTitle }}</h2>
              <ul class="nearby-list">
                @for (item of hotelData.nearbyAttractions[lang()]; track item) {
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 14 14"></polyline>
                    </svg>
                    <span>{{ item }}</span>
                  </li>
                }
              </ul>
            </section>
          </main>

          <!-- Sidebar Sticky CTA Column -->
          <aside class="detail-sidebar">
            <div class="cta-sidebar-card">
              <span class="cta-sub">{{ t().hotelDetail.indicativeRate }}</span>
              <div class="cta-price-row">
                <span class="currency">Rp</span>
                <span class="amount">{{ formatPrice(hotelData.pricePerNight) }}</span>
                <span class="unit">{{ hotelData.priceUnit[lang()] }}</span>
              </div>

              <div class="price-disclaimer-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                <span>{{ t().hotelDetail.indicativePriceNotice }}</span>
              </div>

              <div class="sidebar-divider"></div>

              <h4 class="cta-card-heading">{{ t().hotelDetail.ctaCardTitle }}</h4>
              <p class="cta-card-desc">{{ t().hotelDetail.ctaCardDesc }}</p>

              <button
                type="button"
                class="btn btn--whatsapp btn--full btn--lg sidebar-wa-btn"
                (click)="onConsultWhatsApp(hotelData)"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.088.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.2.662.589 1.221.771 1.394.858.173.086.274.072.375-.043s.433-.505.549-.679c.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
                </svg>
                <span>{{ t().hotelDetail.askWhatsApp }}</span>
              </button>

              <p class="redirect-hint">{{ t().hotelDetail.waRedirectNotice }}</p>

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
        <h2 class="nf-title">{{ t().hotelDetail.notFoundTitle }}</h2>
        <p class="nf-desc">{{ t().hotelDetail.notFoundDesc }}</p>
        <a routerLink="/hotels" class="btn btn--primary">
          {{ t().hotelDetail.backToCatalog }}
        </a>
      </div>
    }
  `,
  styles: [`
    .hotel-detail-page {
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
    .hotel-header {
      margin-bottom: var(--space-6);
    }
    .meta-tags {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 0.75rem;
    }
    .hotel-title {
      font-size: clamp(1.75rem, 3vw + 0.5rem, 2.5rem);
      margin-bottom: 0.5rem;
      color: var(--color-ocean);
      line-height: 1.25;
    }
    .hotel-location-row {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.9375rem;
      color: var(--color-text-secondary);
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
    .facilities-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 0.85rem;
    }
    @media (min-width: 640px) {
      .facilities-grid {
        grid-template-columns: 1fr 1fr;
      }
    }
    .facility-item {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-size: 0.9375rem;
      color: var(--color-text-dark);
    }
    .fac-icon {
      color: var(--color-teal);
      flex-shrink: 0;
    }
    .rooms-list {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .room-card {
      background-color: var(--color-sand-light);
      border: 1px solid var(--color-sand-border);
      border-radius: var(--radius-md);
      padding: 1.25rem 1.5rem;
    }
    .room-name {
      font-size: 1.1rem;
      color: var(--color-ocean);
      margin-bottom: 0.75rem;
    }
    .room-specs {
      display: grid;
      grid-template-columns: 1fr;
      gap: 0.5rem;
    }
    @media (min-width: 640px) {
      .room-specs {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    .room-spec {
      display: flex;
      flex-direction: column;
    }
    .spec-label {
      font-size: 0.75rem;
      color: var(--color-text-muted);
      font-weight: 600;
    }
    .spec-value {
      font-size: 0.875rem;
      color: var(--color-text-dark);
      font-weight: 500;
    }
    .nearby-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
    }
    .nearby-list li {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      font-size: 0.9375rem;
      color: var(--color-text-secondary);
    }
    .nearby-list svg {
      color: var(--color-teal);
      flex-shrink: 0;
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
export class HotelDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly catalogService = inject(CatalogService);
  private readonly langService = inject(LanguageService);
  readonly waService = inject(WhatsAppService);

  readonly lang = this.langService.currentLang;
  readonly t = this.langService.t;

  readonly hotel = signal<Hotel | undefined>(undefined);
  readonly selectedImage = signal<string>('');

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const slug = params.get('slug');
      if (slug) {
        const item = this.catalogService.getHotelBySlug(slug);
        this.hotel.set(item);
        if (item?.images?.length) {
          this.selectedImage.set(item.images[0]);
        }
      }
    });
  }

  onMainImageError(): void {
    this.selectedImage.set('https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80');
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('id-ID').format(price);
  }

  onConsultWhatsApp(hotel: Hotel): void {
    const url = this.waService.getHotelWhatsAppUrl(hotel, this.lang());
    this.waService.openWhatsAppUrl(url);
  }
}
