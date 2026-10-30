import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';
import { WhatsAppService } from '../../../core/services/whatsapp.service';
import { CatalogService } from '../../../core/services/catalog.service';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LanguageSwitcherComponent],
  template: `
    <header class="site-header">
      <div class="container header-container">
        <!-- Brand Wordmark -->
        <a routerLink="/" class="brand-link" (click)="closeAllMenus()">
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

          <!-- Paket Tour Dropdown Wrapper -->
          <div
            class="nav-dropdown-wrapper"
            (mouseenter)="isDesktopDropdownOpen.set(true)"
            (mouseleave)="isDesktopDropdownOpen.set(false)"
          >
            <div class="nav-dropdown-trigger-row">
              <a
                routerLink="/packages"
                routerLinkActive="active"
                class="nav-link"
                (click)="closeAllMenus()"
              >
                {{ t().nav.packages }}
              </a>
              <button
                type="button"
                class="dropdown-caret-btn"
                [attr.aria-expanded]="isDesktopDropdownOpen()"
                aria-label="Toggle tour categories"
                (click)="toggleDesktopDropdown()"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" [class.rotated]="isDesktopDropdownOpen()">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>

            @if (isDesktopDropdownOpen()) {
              <div class="mega-dropdown" role="menu">
                <div class="mega-grid">
                  @for (cat of categories; track cat.id) {
                    <a
                      routerLink="/packages"
                      [queryParams]="{ category: cat.id }"
                      class="mega-item"
                      role="menuitem"
                      (click)="closeAllMenus()"
                    >
                      <div class="mega-item-head">
                        <span class="mega-item-title">{{ cat.shortTitle[lang()] }}</span>
                        <span class="mega-count">{{ getCount(cat.id) }}</span>
                      </div>
                      <span class="mega-item-sub">{{ cat.tag[lang()] }}</span>
                    </a>
                  }
                </div>
                <div class="mega-footer">
                  <a
                    routerLink="/packages"
                    class="mega-all-link"
                    (click)="closeAllMenus()"
                  >
                    <span>{{ t().nav.viewAllPackages }}</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            }
          </div>

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
        <div class="mobile-nav-backdrop" (click)="closeAllMenus()"></div>
        <nav class="mobile-nav" aria-label="Mobile Navigation">
          <div class="mobile-nav-inner">
            <a
              routerLink="/"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              class="mobile-nav-link"
              (click)="closeAllMenus()"
            >
              {{ t().nav.home }}
            </a>

            <!-- Mobile Paket Tour Group -->
            <div class="mobile-accordion-group">
              <div class="mobile-accordion-header">
                <a
                  routerLink="/packages"
                  routerLinkActive="active"
                  class="mobile-nav-link mobile-nav-link--flex"
                  (click)="closeAllMenus()"
                >
                  {{ t().nav.packages }}
                </a>
                <button
                  type="button"
                  class="mobile-sub-toggle"
                  (click)="toggleMobileCategories()"
                  [attr.aria-expanded]="isMobileCategoriesOpen()"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" [class.rotated]="isMobileCategoriesOpen()">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
              @if (isMobileCategoriesOpen()) {
                <div class="mobile-sub-links">
                  @for (cat of categories; track cat.id) {
                    <a
                      routerLink="/packages"
                      [queryParams]="{ category: cat.id }"
                      class="mobile-sub-link"
                      (click)="closeAllMenus()"
                    >
                      <span>{{ cat.shortTitle[lang()] }}</span>
                      <span class="mobile-sub-count">{{ getCount(cat.id) }}</span>
                    </a>
                  }
                </div>
              }
            </div>

            <a
              routerLink="/hotels"
              routerLinkActive="active"
              class="mobile-nav-link"
              (click)="closeAllMenus()"
            >
              {{ t().nav.hotels }}
            </a>
            <a
              routerLink="/about"
              routerLinkActive="active"
              class="mobile-nav-link"
              (click)="closeAllMenus()"
            >
              {{ t().nav.about }}
            </a>
            <a
              routerLink="/contact"
              routerLinkActive="active"
              class="mobile-nav-link"
              (click)="closeAllMenus()"
            >
              {{ t().nav.contact }}
            </a>

            <div class="mobile-nav-footer">
              <button
                type="button"
                class="btn btn--whatsapp btn--full"
                (click)="onConsultWhatsApp(); closeAllMenus()"
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
      width: 100%;
      max-width: 100%;
      background-color: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--color-border);
    }
    .header-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 68px;
      gap: 0.5rem;
      min-width: 0;
    }
    @media (min-width: 640px) {
      .header-container {
        min-height: 72px;
        gap: 1rem;
      }
    }
    .brand-link {
      display: flex;
      flex-direction: column;
      line-height: 1.15;
      min-width: 0;
    }
    .brand-name {
      font-family: var(--font-heading);
      font-size: clamp(1.05rem, 3.2vw, 1.25rem);
      font-weight: 800;
      color: var(--color-ocean);
      letter-spacing: -0.02em;
    }
    .brand-tag {
      font-size: clamp(0.6rem, 1.8vw, 0.6875rem);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-teal);
    }
    .desktop-nav {
      display: none;
      align-items: center;
      gap: 1.1rem;
      min-width: 0;
    }
    @media (min-width: 960px) {
      .desktop-nav {
        display: flex;
      }
    }
    @media (min-width: 1120px) {
      .desktop-nav {
        gap: 1.5rem;
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

    /* Desktop Dropdown */
    .nav-dropdown-wrapper {
      position: relative;
      padding: 0.5rem 0;
    }
    .nav-dropdown-trigger-row {
      display: inline-flex;
      align-items: center;
      gap: 0.2rem;
    }
    .dropdown-caret-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--color-text-secondary);
      padding: 0.2rem;
      border-radius: var(--radius-xs);
    }
    .dropdown-caret-btn:hover {
      color: var(--color-ocean);
    }
    .rotated {
      transform: rotate(180deg);
    }
    .mega-dropdown {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      width: min(520px, calc(100vw - 2rem));
      max-width: calc(100vw - 2rem);
      background-color: var(--color-white);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-lg);
      padding: 1rem;
      z-index: 60;
      animation: fadeDrop 160ms ease-out forwards;
    }
    @keyframes fadeDrop {
      from {
        opacity: 0;
        transform: translateX(-50%) translateY(6px);
      }
      to {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
    }
    .mega-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.5rem;
    }
    .mega-item {
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
      min-width: 0;
      padding: 0.7rem 0.85rem;
      border-radius: var(--radius-sm);
      border: 1px solid transparent;
      transition: all var(--transition-fast);
    }
    .mega-item:hover {
      background-color: var(--color-sand-light);
      border-color: var(--color-sand-border);
    }
    .mega-item-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
    }
    .mega-item-title {
      font-size: 0.875rem;
      font-weight: 700;
      color: var(--color-ocean);
    }
    .mega-item:hover .mega-item-title {
      color: var(--color-teal-dark);
    }
    .mega-count {
      font-size: 0.7rem;
      font-weight: 700;
      color: var(--color-teal-dark);
      background-color: var(--color-teal-surface);
      padding: 0.1rem 0.45rem;
      border-radius: var(--radius-full);
    }
    .mega-item-sub {
      font-size: 0.75rem;
      color: var(--color-text-muted);
    }
    .mega-footer {
      margin-top: 0.75rem;
      padding-top: 0.75rem;
      border-top: 1px solid var(--color-border);
      display: flex;
      justify-content: center;
    }
    .mega-all-link {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--color-teal-dark);
    }
    .mega-all-link:hover {
      color: var(--color-ocean);
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 0.45rem;
      flex-shrink: 0;
    }
    @media (min-width: 640px) {
      .header-actions {
        gap: 0.75rem;
      }
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
      flex-shrink: 0;
      width: 40px;
      height: 40px;
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
      top: 68px;
      left: 0;
      right: 0;
      bottom: 0;
      max-width: 100vw;
      background-color: rgba(18, 59, 80, 0.4);
      z-index: 40;
    }
    .mobile-nav {
      position: fixed;
      top: 68px;
      left: 0;
      right: 0;
      width: 100%;
      max-width: 100%;
      max-height: calc(100dvh - 68px);
      overflow-y: auto;
      overscroll-behavior: contain;
      background-color: var(--color-white);
      border-bottom: 1px solid var(--color-border);
      box-shadow: var(--shadow-lg);
      z-index: 45;
      padding: 1.15rem var(--container-padding) 1.5rem;
      animation: slideDown 200ms ease-out forwards;
    }
    @media (min-width: 640px) {
      .mobile-nav-backdrop {
        top: 72px;
      }
      .mobile-nav {
        top: 72px;
        max-height: calc(100dvh - 72px);
      }
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
      gap: 0.5rem;
    }
    .mobile-nav-link {
      font-size: 1rem;
      font-weight: 600;
      color: var(--color-text-dark);
      padding: 0.65rem 0.5rem;
      border-radius: var(--radius-sm);
      border-bottom: 1px solid var(--color-sand-border);
    }
    .mobile-nav-link--flex {
      flex: 1;
      border-bottom: none;
    }
    .mobile-nav-link.active {
      color: var(--color-teal);
      background-color: var(--color-teal-surface);
      font-weight: 700;
      border-bottom-color: transparent;
    }
    .mobile-accordion-group {
      border-bottom: 1px solid var(--color-sand-border);
      padding-bottom: 0.25rem;
    }
    .mobile-accordion-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
    }
    .mobile-sub-toggle {
      width: 38px;
      height: 38px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-sm);
      background-color: var(--color-sand-light);
      color: var(--color-ocean);
    }
    .mobile-sub-links {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      padding: 0.35rem 0.5rem 0.5rem 1rem;
    }
    .mobile-sub-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      min-width: 0;
      padding: 0.5rem 0.65rem;
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--color-text-secondary);
      background-color: var(--color-sand-light);
      border-radius: var(--radius-xs);
    }
    .mobile-sub-link span:first-child {
      min-width: 0;
      overflow-wrap: break-word;
    }
    .mobile-sub-link:hover {
      color: var(--color-teal-dark);
    }
    .mobile-sub-count {
      flex-shrink: 0;
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--color-teal-dark);
      background-color: var(--color-teal-surface);
      padding: 0.1rem 0.45rem;
      border-radius: var(--radius-full);
    }
    .mobile-nav-footer {
      padding-top: 0.85rem;
    }
  `],
})
export class HeaderComponent {
  private readonly langService = inject(LanguageService);
  private readonly waService = inject(WhatsAppService);
  private readonly catalogService = inject(CatalogService);

  readonly lang = this.langService.currentLang;
  readonly t = this.langService.t;
  readonly categories = this.catalogService.getCategories();

  readonly isMobileMenuOpen = signal<boolean>(false);
  readonly isDesktopDropdownOpen = signal<boolean>(false);
  readonly isMobileCategoriesOpen = signal<boolean>(true);

  getCount(categoryId: 'regular' | 'oneday' | 'honeymoon' | 'budget' | 'penida' | 'group'): number {
    return this.catalogService.getCategoryCount(categoryId);
  }

  toggleDesktopDropdown(): void {
    this.isDesktopDropdownOpen.update((v) => !v);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((open) => !open);
  }

  toggleMobileCategories(): void {
    this.isMobileCategoriesOpen.update((open) => !open);
  }

  closeAllMenus(): void {
    this.isMobileMenuOpen.set(false);
    this.isDesktopDropdownOpen.set(false);
  }

  onConsultWhatsApp(): void {
    const url = this.waService.getGeneralWhatsAppUrl(this.langService.currentLang());
    this.waService.openWhatsAppUrl(url);
  }
}
