import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';
import { WhatsAppService } from '../../../core/services/whatsapp.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="site-footer">
      <div class="container footer-container">
        <!-- Brand Column -->
        <div class="footer-col footer-col--brand">
          <div class="footer-brand">
            <span class="footer-brand-title">Bali Persada</span>
            <span class="footer-brand-sub">Tour &amp; Travel</span>
          </div>
          <p class="footer-desc">{{ t().footer.brandDesc }}</p>
          <div class="footer-wa-chip">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.088.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.2.662.589 1.221.771 1.394.858.173.086.274.072.375-.043s.433-.505.549-.679c.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
            </svg>
            <a [href]="waDirectUrl" target="_blank" rel="noopener noreferrer">
              {{ waService.displayPhoneNumber }}
            </a>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="footer-col">
          <h4 class="footer-col-title">{{ t().footer.quickLinks }}</h4>
          <ul class="footer-links">
            <li><a routerLink="/">{{ t().nav.home }}</a></li>
            <li><a routerLink="/packages">{{ t().nav.packages }}</a></li>
            <li><a routerLink="/hotels">{{ t().nav.hotels }}</a></li>
            <li><a routerLink="/about">{{ t().nav.about }}</a></li>
            <li><a routerLink="/contact">{{ t().nav.contact }}</a></li>
          </ul>
        </div>

        <!-- Catalog Links -->
        <div class="footer-col">
          <h4 class="footer-col-title">{{ t().footer.catalogTitle }}</h4>
          <ul class="footer-links">
            <li><a routerLink="/packages" [queryParams]="{ category: 'family' }">Paket Keluarga</a></li>
            <li><a routerLink="/packages" [queryParams]="{ category: 'group' }">Paket Rombongan</a></li>
            <li><a routerLink="/packages" [queryParams]="{ category: 'couple' }">Paket Pasangan</a></li>
            <li><a routerLink="/hotels" [queryParams]="{ area: 'Seminyak' }">Hotel Seminyak</a></li>
            <li><a routerLink="/hotels" [queryParams]="{ area: 'Ubud' }">Resort Ubud</a></li>
            <li><a routerLink="/hotels" [queryParams]="{ area: 'Nusa Dua' }">Resort Nusa Dua</a></li>
          </ul>
        </div>

        <!-- Direct Contact Column -->
        <div class="footer-col">
          <h4 class="footer-col-title">{{ t().footer.contactTitle }}</h4>
          <p class="footer-contact-note">
            Konsultasikan paket liburan dan akomodasi langsung dengan tim kami via WhatsApp.
          </p>
          <button
            type="button"
            class="btn btn--whatsapp btn--full"
            (click)="onOpenWhatsApp()"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.088.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.2.662.589 1.221.771 1.394.858.173.086.274.072.375-.043s.433-.505.549-.679c.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
            </svg>
            <span>{{ t().nav.consultWhatsApp }}</span>
          </button>
        </div>
      </div>

      <!-- Legal and Disclaimer Bar -->
      <div class="footer-bottom">
        <div class="container footer-bottom-inner">
          <p class="footer-disclaimer">{{ t().footer.disclaimer }}</p>
          <p class="footer-copy">
            &copy; {{ currentYear }} Bali Persada Tour and Travel. {{ t().footer.rights }}
          </p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .site-footer {
      background-color: var(--color-ocean-dark);
      color: #D3DEE4;
      margin-top: auto;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
    }
    .footer-container {
      padding-top: var(--space-16);
      padding-bottom: var(--space-12);
      display: grid;
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
    @media (min-width: 640px) {
      .footer-container {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 1024px) {
      .footer-container {
        grid-template-columns: 1.8fr 1fr 1fr 1.4fr;
        gap: 3rem;
      }
    }
    .footer-brand {
      display: flex;
      flex-direction: column;
      margin-bottom: 0.75rem;
    }
    .footer-brand-title {
      font-family: var(--font-heading);
      font-size: 1.35rem;
      font-weight: 800;
      color: var(--color-white);
    }
    .footer-brand-sub {
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--color-teal-light);
    }
    .footer-desc {
      font-size: 0.875rem;
      color: #9FB1BC;
      line-height: 1.6;
      margin-bottom: 1.25rem;
      max-width: 320px;
    }
    .footer-wa-chip {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background-color: rgba(37, 211, 102, 0.12);
      border: 1px solid rgba(37, 211, 102, 0.25);
      color: #4ADE80;
      padding: 0.45rem 0.85rem;
      border-radius: var(--radius-sm);
      font-size: 0.875rem;
      font-weight: 700;
    }
    .footer-wa-chip a {
      color: inherit;
    }
    .footer-col-title {
      color: var(--color-white);
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 1.25rem;
      position: relative;
    }
    .footer-links {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
    }
    .footer-links a {
      font-size: 0.875rem;
      color: #AEC0CC;
      transition: color var(--transition-fast);
    }
    .footer-links a:hover {
      color: var(--color-teal-light);
    }
    .footer-contact-note {
      font-size: 0.875rem;
      color: #AEC0CC;
      line-height: 1.5;
      margin-bottom: 1rem;
    }
    .footer-bottom {
      background-color: #081B25;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      padding: var(--space-6) 0;
    }
    .footer-bottom-inner {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      font-size: 0.8125rem;
      color: #7A8E9B;
    }
    @media (min-width: 768px) {
      .footer-bottom-inner {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }
    .footer-disclaimer {
      max-width: 680px;
      line-height: 1.5;
    }
    .footer-copy {
      white-space: nowrap;
    }
  `],
})
export class FooterComponent {
  private readonly langService = inject(LanguageService);
  readonly waService = inject(WhatsAppService);

  readonly t = this.langService.t;
  readonly currentYear = new Date().getFullYear();
  readonly waDirectUrl = `https://wa.me/${this.waService.phoneNumber}`;

  onOpenWhatsApp(): void {
    const url = this.waService.getGeneralWhatsAppUrl(this.langService.currentLang());
    this.waService.openWhatsAppUrl(url);
  }
}
