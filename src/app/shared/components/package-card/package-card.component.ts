import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TourPackage } from '../../../core/models/package.model';
import { LanguageService } from '../../../core/services/language.service';
import { WhatsAppService } from '../../../core/services/whatsapp.service';
import { CatalogService } from '../../../core/services/catalog.service';

@Component({
  selector: 'app-package-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <article class="package-card">
      <a [routerLink]="['/packages', pkg.slug]" class="card-media" [attr.aria-label]="pkg.title[lang()]">
        <img
          [src]="imageSrc"
          [alt]="pkg.title[lang()]"
          loading="lazy"
          (error)="onImageError()"
        />
        @if (pkg.badge) {
          <span class="card-badge">{{ pkg.badge[lang()] }}</span>
        }
        @if (pkg.routeOptions && pkg.routeOptions.length > 1) {
          <span class="card-route-pill">
            {{ pkg.routeOptions.length }} {{ t().common.routeOptionsBadge }}
          </span>
        }
        <span class="card-duration">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          {{ pkg.duration[lang()] }}
        </span>
      </a>

      <div class="card-body">
        <div class="card-meta-top">
          <div class="card-destination">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>{{ pkg.destination }}</span>
          </div>
          <span class="card-code">{{ categoryShortLabel }}</span>
        </div>

        <h3 class="card-title">
          <a [routerLink]="['/packages', pkg.slug]">{{ pkg.title[lang()] }}</a>
        </h3>

        <p class="card-tagline">{{ pkg.tagline[lang()] }}</p>

        <!-- Quick Facility Pills -->
        <div class="card-facilities">
          <span class="fac-pill">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            {{ t().common.privateTransport }}
          </span>
          <span class="fac-pill">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            {{ pkg.pricingTable.length }} {{ lang() === 'id' ? 'Pilihan Paket' : 'Tier Options' }}
          </span>
        </div>

        <div class="card-pricing">
          <span class="price-label">{{ t().common.from }}</span>
          <div class="price-value-row">
            <span class="price-currency">Rp</span>
            <span class="price-amount">{{ formatPrice(pkg.price) }}</span>
            <span class="price-unit">{{ pkg.priceUnit[lang()] }}</span>
          </div>
        </div>

        <div class="card-actions">
          <a [routerLink]="['/packages', pkg.slug]" class="btn btn--outline btn--sm btn-detail">
            <span>{{ t().common.viewDetails }}</span>
          </a>
          <button
            type="button"
            class="btn btn--whatsapp btn--sm btn-wa"
            (click)="onConsult()"
            [attr.aria-label]="t().common.consultNow + ' ' + pkg.title[lang()]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.088.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.2.662.589 1.221.771 1.394.858.173.086.274.072.375-.043s.433-.505.549-.679c.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
            </svg>
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </article>
  `,
  styles: [`
    :host {
      display: block;
      min-width: 0;
    }
    .package-card {
      width: 100%;
      min-width: 0;
      background-color: var(--color-white);
      border-radius: var(--radius-md);
      overflow: hidden;
      border: 1px solid var(--color-border);
      display: flex;
      flex-direction: column;
      box-shadow: var(--shadow-sm);
      transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
      height: 100%;
    }
    .package-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-hover);
      border-color: var(--color-teal);
    }
    .card-media {
      display: block;
      position: relative;
      aspect-ratio: 16 / 10;
      overflow: hidden;
      background-color: var(--color-ocean-subtle);
    }
    .card-media img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .package-card:hover .card-media img {
      transform: scale(1.04);
    }
    .card-badge {
      position: absolute;
      top: 0.75rem;
      left: 0.75rem;
      max-width: calc(100% - 1.5rem);
      background-color: rgba(18, 59, 80, 0.92);
      backdrop-filter: blur(4px);
      color: var(--color-white);
      padding: 0.3rem 0.7rem;
      border-radius: var(--radius-full);
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.02em;
    }
    .card-route-pill {
      position: absolute;
      bottom: 0.75rem;
      left: 0.75rem;
      max-width: calc(46% - 0.75rem);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      background-color: rgba(47, 143, 131, 0.94);
      color: var(--color-white);
      padding: 0.22rem 0.55rem;
      border-radius: var(--radius-full);
      font-size: 0.7rem;
      font-weight: 700;
    }
    .card-duration {
      position: absolute;
      bottom: 0.75rem;
      right: 0.75rem;
      max-width: calc(52% - 0.75rem);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      background-color: rgba(255, 255, 255, 0.94);
      backdrop-filter: blur(4px);
      color: var(--color-ocean);
      padding: 0.25rem 0.6rem;
      border-radius: var(--radius-full);
      font-size: 0.75rem;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      box-shadow: 0 2px 6px rgba(18, 59, 80, 0.12);
    }
    .card-duration svg {
      flex-shrink: 0;
    }
    .card-body {
      padding: 1.15rem;
      display: flex;
      flex-direction: column;
      flex: 1;
      min-width: 0;
    }
    @media (min-width: 640px) {
      .card-body {
        padding: 1.25rem;
      }
    }
    .card-meta-top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 0.5rem;
      margin-bottom: 0.45rem;
    }
    .card-destination {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      color: var(--color-teal);
      font-size: 0.8125rem;
      font-weight: 600;
      min-width: 0;
    }
    .card-destination svg {
      flex-shrink: 0;
    }
    .card-destination span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .card-code {
      font-size: 0.6875rem;
      font-weight: 700;
      color: var(--color-ocean);
      background-color: var(--color-sand);
      padding: 0.15rem 0.45rem;
      border-radius: var(--radius-xs);
      max-width: 48%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex-shrink: 0;
    }
    .card-title {
      font-size: 1.1rem;
      line-height: 1.35;
      margin-bottom: 0.5rem;
    }
    .card-title a {
      color: var(--color-ocean);
    }
    .card-title a:hover {
      color: var(--color-teal);
    }
    .card-tagline {
      font-size: 0.85rem;
      color: var(--color-text-secondary);
      line-height: 1.5;
      margin-bottom: 0.9rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .card-facilities {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      margin-bottom: 1rem;
    }
    .fac-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      font-size: 0.72rem;
      font-weight: 600;
      color: var(--color-teal-dark);
      background-color: var(--color-teal-surface);
      padding: 0.2rem 0.5rem;
      border-radius: var(--radius-xs);
    }
    .card-pricing {
      margin-top: auto;
      padding-top: 0.85rem;
      border-top: 1px solid var(--color-border);
      margin-bottom: 1rem;
    }
    .price-label {
      display: block;
      font-size: 0.7rem;
      color: var(--color-text-muted);
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 0.04em;
    }
    .price-value-row {
      display: flex;
      align-items: baseline;
      gap: 0.25rem;
      flex-wrap: wrap;
    }
    .price-currency {
      font-size: 0.875rem;
      font-weight: 700;
      color: var(--color-teal-dark);
    }
    .price-amount {
      font-size: 1.25rem;
      font-weight: 800;
      font-family: var(--font-heading);
      color: var(--color-teal-dark);
    }
    .price-unit {
      font-size: 0.75rem;
      color: var(--color-text-muted);
    }
    .card-actions {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(115px, 1fr));
      gap: 0.5rem;
    }
    .btn-detail,
    .btn-wa {
      width: 100%;
      font-size: 0.8125rem;
    }
  `],
})
export class PackageCardComponent implements OnInit {
  @Input({ required: true }) pkg!: TourPackage;

  private readonly langService = inject(LanguageService);
  private readonly waService = inject(WhatsAppService);
  private readonly catalogService = inject(CatalogService);

  readonly lang = this.langService.currentLang;
  readonly t = this.langService.t;

  imageSrc = '';

  ngOnInit(): void {
    this.imageSrc =
      this.pkg.images?.[0] ||
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80';
  }

  get categoryShortLabel(): string {
    const meta = this.catalogService.getCategoryMeta(this.pkg.category);
    return meta ? meta.shortTitle[this.lang()] : this.pkg.code;
  }

  onImageError(): void {
    this.imageSrc =
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80';
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('id-ID').format(price);
  }

  onConsult(): void {
    const url = this.waService.getPackageWhatsAppUrl(this.pkg, this.lang());
    this.waService.openWhatsAppUrl(url);
  }
}
