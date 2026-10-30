import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Hotel } from '../../../core/models/hotel.model';
import { LanguageService } from '../../../core/services/language.service';
import { WhatsAppService } from '../../../core/services/whatsapp.service';

@Component({
  selector: 'app-hotel-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <article class="hotel-card">
      <div class="card-media">
        <img
          [src]="imageSrc"
          [alt]="hotel.name"
          loading="lazy"
          (error)="onImageError()"
        />
        <span class="card-area-badge">{{ hotel.area }}</span>
        @if (hotel.badge) {
          <span class="card-feature-badge">{{ hotel.badge[lang()] }}</span>
        }
      </div>

      <div class="card-body">
        <div class="card-category">
          <span>{{ hotel.categoryLabel[lang()] }}</span>
        </div>

        <h3 class="card-title">
          <a [routerLink]="['/hotels', hotel.slug]">{{ hotel.name }}</a>
        </h3>

        <div class="card-location">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>{{ hotel.location }}</span>
        </div>

        <p class="card-desc">{{ hotel.shortDescription[lang()] }}</p>

        <div class="facilities-tags">
          @for (fac of hotel.facilities[lang()].slice(0, 3); track $index) {
            <span class="facility-pill">{{ fac }}</span>
          }
        </div>

        <div class="card-pricing">
          <span class="price-label">{{ t().common.indicativeRate }}</span>
          <div class="price-value-row">
            <span class="price-currency">Rp</span>
            <span class="price-amount">{{ formatPrice(hotel.pricePerNight) }}</span>
            <span class="price-unit">{{ hotel.priceUnit[lang()] }}</span>
          </div>
        </div>

        <div class="card-actions">
          <a [routerLink]="['/hotels', hotel.slug]" class="btn btn--outline btn--sm btn-detail">
            {{ t().common.viewDetails }}
          </a>
          <button
            type="button"
            class="btn btn--whatsapp btn--sm btn-wa"
            (click)="onConsult()"
            [attr.aria-label]="t().common.askPrice + ' ' + hotel.name"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.088.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.2.662.589 1.221.771 1.394.858.173.086.274.072.375-.043s.433-.505.549-.679c.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
            </svg>
            <span>{{ t().common.askPrice }}</span>
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
    .hotel-card {
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
    .hotel-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-md);
      border-color: var(--color-border-hover);
    }
    .card-media {
      position: relative;
      aspect-ratio: 16 / 10;
      overflow: hidden;
      background-color: var(--color-ocean-subtle);
    }
    .card-media img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--transition-normal);
    }
    .hotel-card:hover .card-media img {
      transform: scale(1.03);
    }
    .card-area-badge {
      position: absolute;
      top: 0.75rem;
      left: 0.75rem;
      max-width: calc(100% - 1.5rem);
      background-color: rgba(18, 59, 80, 0.9);
      backdrop-filter: blur(4px);
      color: var(--color-white);
      padding: 0.3rem 0.65rem;
      border-radius: var(--radius-full);
      font-size: 0.75rem;
      font-weight: 600;
    }
    .card-feature-badge {
      position: absolute;
      bottom: 0.75rem;
      right: 0.75rem;
      max-width: calc(100% - 1.5rem);
      background-color: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(4px);
      color: var(--color-teal-dark);
      padding: 0.25rem 0.55rem;
      border-radius: var(--radius-full);
      font-size: 0.75rem;
      font-weight: 700;
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
    .card-category {
      color: var(--color-teal);
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.35rem;
    }
    .card-title {
      font-size: 1.125rem;
      line-height: 1.35;
      margin-bottom: 0.4rem;
    }
    .card-title a {
      color: var(--color-ocean);
    }
    .card-title a:hover {
      color: var(--color-teal);
    }
    .card-location {
      display: flex;
      align-items: flex-start;
      gap: 0.35rem;
      color: var(--color-text-secondary);
      font-size: 0.8125rem;
      margin-bottom: 0.65rem;
      min-width: 0;
    }
    .card-location svg {
      flex-shrink: 0;
      margin-top: 0.15rem;
    }
    .card-location span {
      min-width: 0;
      overflow-wrap: break-word;
    }
    .card-desc {
      font-size: 0.875rem;
      color: var(--color-text-secondary);
      line-height: 1.5;
      margin-bottom: 0.85rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .facilities-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.35rem;
      margin-bottom: 1rem;
    }
    .facility-pill {
      font-size: 0.71875rem;
      background-color: var(--color-sand-light);
      border: 1px solid var(--color-sand-border);
      color: var(--color-text-secondary);
      padding: 0.2rem 0.5rem;
      border-radius: var(--radius-sm);
    }
    .card-pricing {
      margin-top: auto;
      padding-top: 0.85rem;
      border-top: 1px solid var(--color-border);
      margin-bottom: 1rem;
    }
    .price-label {
      display: block;
      font-size: 0.75rem;
      color: var(--color-text-muted);
      text-transform: uppercase;
      font-weight: 600;
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
      grid-template-columns: repeat(auto-fit, minmax(118px, 1fr));
      gap: 0.5rem;
    }
    .btn-detail {
      width: 100%;
      font-size: 0.8125rem;
    }
    .btn-wa {
      width: 100%;
      font-size: 0.8125rem;
      padding-left: 0.6rem;
      padding-right: 0.6rem;
    }
  `],
})
export class HotelCardComponent {
  @Input({ required: true }) hotel!: Hotel;

  private readonly langService = inject(LanguageService);
  private readonly waService = inject(WhatsAppService);

  readonly lang = this.langService.currentLang;
  readonly t = this.langService.t;

  imageSrc: string = '';

  ngOnInit(): void {
    this.imageSrc = this.hotel.images?.[0] || 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80';
  }

  onImageError(): void {
    this.imageSrc = 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80';
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('id-ID').format(price);
  }

  onConsult(): void {
    const url = this.waService.getHotelWhatsAppUrl(this.hotel, this.lang());
    this.waService.openWhatsAppUrl(url);
  }
}
