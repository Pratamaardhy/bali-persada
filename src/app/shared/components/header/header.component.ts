import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';
import { WhatsAppService } from '../../../core/services/whatsapp.service';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LanguageSwitcherComponent],
  template: `
    <header class="site-header">
      <div class="container header-container">
        <!-- Brand Wordmark -->
        <a routerLink="/" class="brand-link" (click)="closeMobileMenu()">
          <span class="brand-name">Bali Persada</span>
          <span class="brand-tag">Tour &amp; Travel</span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="desktop-nav" aria-label="Main Navigation">
          <a
            routerLink="/"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            class="nav-link"
          >
            {{ t().nav.home }}
          </a>
          <a
            routerLink="/packages"
            routerLinkActive="active"
            class="nav-link"
          >
            {{ t().nav.packages }}
          </a>
          <a
            routerLink="/hotels"
            routerLinkActive="active"
            class="nav-link"
          >
            {{ t().nav.hotels }}
          </a>
          <a
            routerLink="/about"
            routerLinkActive="active"
            class="nav-link"
          >
            {{ t().nav.about }}
          </a>
          <a
            routerLink="/contact"
            routerLinkActive="active"
            class="nav-link"
          >
            {{ t().nav.contact }}
          </a>
        </nav>

        <!-- Right Side Header Controls -->
        <div class="header-actions">
          <app-language-switcher></app-language-switcher>

          <button
            type="button"
            class="btn btn--whatsapp btn--sm header-wa-btn"
            (click)="onConsultWhatsApp()"
            aria-label="Konsultasi WhatsApp Bali Persada"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.088.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.2.662.589 1.221.771 1.394.858.173.086.274.072.375-.043s.433-.505.549-.679c.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
            </svg>
            <span class="btn-text">{{ t().nav.consultWhatsApp }}</span>
          </button>

          <!-- Mobile Hamburger Toggle -->
          <button
            type="button"
            class="mobile-menu-btn"
            [attr.aria-expanded]="isMobileMenuOpen()"
            [attr.aria-label]="isMobileMenuOpen() ? t().nav.closeMenu : t().nav.openMenu"
            (click)="toggleMobileMenu()"
          >
            @if (!isMobileMenuOpen()) {
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            } @else {
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            }
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      @if (isMobileMenuOpen()) {
        <div class="mobile-nav-backdrop" (click)="closeMobileMenu()"></div>
        <nav class="mobile-nav" aria-label="Mobile Navigation">
          <div class="mobile-nav-inner">
            <a
              routerLink="/"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              class="mobile-nav-link"
              (click)="closeMobileMenu()"
            >
              {{ t().nav.home }}
            </a>
            <a
              routerLink="/packages"
              routerLinkActive="active"
              class="mobile-nav-link"
              (click)="closeMobileMenu()"
            >
              {{ t().nav.packages }}
            </a>
            <a
              routerLink="/hotels"
              routerLinkActive="active"
              class="mobile-nav-link"
              (click)="closeMobileMenu()"
            >
              {{ t().nav.hotels }}
            </a>
            <a
              routerLink="/about"
              routerLinkActive="active"
              class="mobile-nav-link"
              (click)="closeMobileMenu()"
            >
              {{ t().nav.about }}
            </a>
            <a
              routerLink="/contact"
              routerLinkActive="active"
              class="mobile-nav-link"
              (click)="closeMobileMenu()"
            >
              {{ t().nav.contact }}
            </a>

            <div class="mobile-nav-footer">
              <button
                type="button"
                class="btn btn--whatsapp btn--full"
                (click)="onConsultWhatsApp(); closeMobileMenu()"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.088.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.2.662.589 1.221.771 1.394.858.173.086.274.072.375-.043s.433-.505.549-.679c.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
                </svg>
                <span>{{ t().nav.consultWhatsApp }}</span>
              </button>
            </div>
          </div>
        </nav>
      }
    </header>
  `,
  styles: [`
    .site-header {
      position: sticky;
      top: 0;
      z-index: 50;
      background-color: rgba(255, 255, 255, 0.94);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--color-border);
      transition: background-color var(--transition-fast);
    }
    .header-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 72px;
      gap: 1rem;
    }
    .brand-link {
      display: flex;
      flex-direction: column;
      line-height: 1.15;
      flex-shrink: 0;
    }
    .brand-name {
      font-family: var(--font-heading);
      font-size: 1.25rem;
      font-weight: 800;
      color: var(--color-ocean);
      letter-spacing: -0.02em;
    }
    .brand-tag {
      font-size: 0.6875rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--color-teal);
    }
    .desktop-nav {
      display: none;
      align-items: center;
      gap: 1.5rem;
    }
    @media (min-width: 960px) {
      .desktop-nav {
        display: flex;
      }
    }
    .nav-link {
      font-size: 0.9375rem;
      font-weight: 600;
      color: var(--color-text-secondary);
      position: relative;
      padding: 0.5rem 0;
      transition: color var(--transition-fast);
    }
    .nav-link:hover {
      color: var(--color-ocean);
    }
    .nav-link.active {
      color: var(--color-ocean);
      font-weight: 700;
    }
    .nav-link.active::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: var(--color-teal);
      border-radius: var(--radius-full);
    }
    .header-actions {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .header-wa-btn {
      display: none;
    }
    @media (min-width: 640px) {
      .header-wa-btn {
        display: inline-flex;
      }
    }
    .mobile-menu-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 42px;
      height: 42px;
      border-radius: var(--radius-sm);
      color: var(--color-ocean);
      background-color: var(--color-sand);
    }
    @media (min-width: 960px) {
      .mobile-menu-btn {
        display: none;
      }
    }
    /* Mobile Drawer */
    .mobile-nav-backdrop {
      position: fixed;
      top: 72px;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(18, 59, 80, 0.4);
      z-index: 40;
    }
    .mobile-nav {
      position: fixed;
      top: 72px;
      left: 0;
      right: 0;
      background-color: var(--color-white);
      border-bottom: 1px solid var(--color-border);
      box-shadow: var(--shadow-lg);
      z-index: 45;
      padding: 1.5rem var(--container-padding);
      animation: slideDown 200ms ease-out forwards;
    }
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .mobile-nav-inner {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .mobile-nav-link {
      font-size: 1.05rem;
      font-weight: 600;
      color: var(--color-text-dark);
      padding: 0.65rem 0.5rem;
      border-radius: var(--radius-sm);
      border-bottom: 1px solid var(--color-sand-border);
    }
    .mobile-nav-link.active {
      color: var(--color-teal);
      background-color: var(--color-teal-surface);
      font-weight: 700;
      border-bottom-color: transparent;
    }
    .mobile-nav-footer {
      padding-top: 0.75rem;
    }
  `],
})
export class HeaderComponent {
  private readonly langService = inject(LanguageService);
  private readonly waService = inject(WhatsAppService);

  readonly t = this.langService.t;
  readonly isMobileMenuOpen = signal<boolean>(false);

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  onConsultWhatsApp(): void {
    const url = this.waService.getGeneralWhatsAppUrl(this.langService.currentLang());
    this.waService.openWhatsAppUrl(url);
  }
}
