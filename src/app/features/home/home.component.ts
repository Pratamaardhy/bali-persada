import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { CatalogService } from '../../core/services/catalog.service';
import { WhatsAppService } from '../../core/services/whatsapp.service';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { PackageCardComponent } from '../../shared/components/package-card/package-card.component';
import { HotelCardComponent } from '../../shared/components/hotel-card/hotel-card.component';

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
  template: `
    <!-- HERO SECTION -->
    <section class="hero-section">
      <div class="container hero-container">
        <div class="hero-content">
          <span class="badge badge--teal hero-badge">{{ t().hero.badge }}</span>
          <h1 class="hero-title">{{ t().hero.headline }}</h1>
          <p class="hero-subtitle">{{ t().hero.subheadline }}</p>

          <div class="hero-actions">
            <a routerLink="/packages" class="btn btn--primary btn--lg">
              <span>{{ t().hero.ctaPrimary }}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <button
              type="button"
              class="btn btn--whatsapp btn--lg"
              (click)="onConsultWhatsApp()"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.088.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.2.662.589 1.221.771 1.394.858.173.086.274.072.375-.043s.433-.505.549-.679c.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
              </svg>
              <span>{{ t().hero.ctaSecondary }}</span>
            </button>
          </div>

          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-value">{{ t().hero.stat1Value }}</span>
              <span class="stat-label">{{ t().hero.stat1Label }}</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-value">{{ t().hero.stat2Value }}</span>
              <span class="stat-label">{{ t().hero.stat2Label }}</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-value">{{ t().hero.stat3Value }}</span>
              <span class="stat-label">{{ t().hero.stat3Label }}</span>
            </div>
          </div>
        </div>

        <div class="hero-visual">
          <div class="visual-wrapper">
            <img
              src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80"
              alt="Pemandangan pura dan keindahan alam Pulau Bali"
              class="hero-img-main"
              loading="eager"
            />
            <div class="hero-floating-card">
              <div class="floating-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <div class="floating-text">
                <strong>Bali Persada Tour</strong>
                <span>Pengalaman Wisata Ramah Keluarga</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES SUMMARY -->
    <section class="section section--white">
      <div class="container">
        <app-section-heading
          [tag]="t().services.sectionTag"
          [title]="t().services.title"
          [subtitle]="t().services.subtitle"
          align="center"
        ></app-section-heading>

        <div class="services-grid">
          <div class="service-box">
            <div class="service-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <h3 class="service-title">{{ t().services.hotelsTitle }}</h3>
            <p class="service-desc">{{ t().services.hotelsDesc }}</p>
            <a routerLink="/hotels" class="service-link">
              <span>{{ t().featuredHotels.viewAll }}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          <div class="service-box highlight">
            <div class="service-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 class="service-title">{{ t().services.packagesTitle }}</h3>
            <p class="service-desc">{{ t().services.packagesDesc }}</p>
            <a routerLink="/packages" class="service-link">
              <span>{{ t().featuredPackages.viewAll }}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          <div class="service-box">
            <div class="service-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <h3 class="service-title">{{ t().services.groupTitle }}</h3>
            <p class="service-desc">{{ t().services.groupDesc }}</p>
            <a routerLink="/packages" [queryParams]="{ category: 'group' }" class="service-link">
              <span>Paket Rombongan</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURED PACKAGES SECTION -->
    <section class="section section--sand">
      <div class="container">
        <div class="section-header-row">
          <app-section-heading
            [tag]="t().featuredPackages.sectionTag"
            [title]="t().featuredPackages.title"
            [subtitle]="t().featuredPackages.subtitle"
            align="left"
          ></app-section-heading>
          <a routerLink="/packages" class="btn btn--outline btn--sm btn-view-all">
            {{ t().featuredPackages.viewAll }}
          </a>
        </div>

        <div class="card-grid">
          @for (pkg of featuredPackages; track pkg.id) {
            <app-package-card [pkg]="pkg"></app-package-card>
          }
        </div>
      </div>
    </section>

    <!-- FEATURED HOTELS SECTION -->
    <section class="section section--white">
      <div class="container">
        <div class="section-header-row">
          <app-section-heading
            [tag]="t().featuredHotels.sectionTag"
            [title]="t().featuredHotels.title"
            [subtitle]="t().featuredHotels.subtitle"
            align="left"
          ></app-section-heading>
          <a routerLink="/hotels" class="btn btn--outline btn--sm btn-view-all">
            {{ t().featuredHotels.viewAll }}
          </a>
        </div>

        <div class="card-grid">
          @for (hotel of featuredHotels; track hotel.id) {
            <app-hotel-card [hotel]="hotel"></app-hotel-card>
          }
        </div>
      </div>
    </section>

    <!-- ADVANTAGES SECTION -->
    <section class="section section--sand">
      <div class="container">
        <app-section-heading
          [tag]="t().advantages.sectionTag"
          [title]="t().advantages.title"
          [subtitle]="t().advantages.subtitle"
          align="center"
        ></app-section-heading>

        <div class="advantages-grid">
          <div class="advantage-card">
            <div class="adv-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h4 class="adv-title">{{ t().advantages.adv1Title }}</h4>
            <p class="adv-desc">{{ t().advantages.adv1Desc }}</p>
          </div>

          <div class="advantage-card">
            <div class="adv-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
            </div>
            <h4 class="adv-title">{{ t().advantages.adv2Title }}</h4>
            <p class="adv-desc">{{ t().advantages.adv2Desc }}</p>
          </div>

          <div class="advantage-card">
            <div class="adv-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
              </svg>
            </div>
            <h4 class="adv-title">{{ t().advantages.adv3Title }}</h4>
            <p class="adv-desc">{{ t().advantages.adv3Desc }}</p>
          </div>

          <div class="advantage-card">
            <div class="adv-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </div>
            <h4 class="adv-title">{{ t().advantages.adv4Title }}</h4>
            <p class="adv-desc">{{ t().advantages.adv4Desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- BOOKING FLOW SECTION -->
    <section class="section section--white">
      <div class="container">
        <app-section-heading
          [tag]="t().bookingFlow.sectionTag"
          [title]="t().bookingFlow.title"
          [subtitle]="t().bookingFlow.subtitle"
          align="center"
        ></app-section-heading>

        <div class="flow-steps">
          <div class="flow-step">
            <div class="step-num">1</div>
            <h4 class="step-title">{{ t().bookingFlow.step1Title }}</h4>
            <p class="step-desc">{{ t().bookingFlow.step1Desc }}</p>
          </div>

          <div class="flow-step">
            <div class="step-num">2</div>
            <h4 class="step-title">{{ t().bookingFlow.step2Title }}</h4>
            <p class="step-desc">{{ t().bookingFlow.step2Desc }}</p>
          </div>

          <div class="flow-step">
            <div class="step-num">3</div>
            <h4 class="step-title">{{ t().bookingFlow.step3Title }}</h4>
            <p class="step-desc">{{ t().bookingFlow.step3Desc }}</p>
          </div>

          <div class="flow-step">
            <div class="step-num">4</div>
            <h4 class="step-title">{{ t().bookingFlow.step4Title }}</h4>
            <p class="step-desc">{{ t().bookingFlow.step4Desc }}</p>
          </div>
        </div>

        <div class="flow-notice">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <p>{{ t().bookingFlow.disclaimer }}</p>
        </div>
      </div>
    </section>

    <!-- FAQ ACCORDION SECTION -->
    <section class="section section--sand">
      <div class="container faq-container">
        <app-section-heading
          [tag]="t().faq.sectionTag"
          [title]="t().faq.title"
          [subtitle]="t().faq.subtitle"
          align="center"
        ></app-section-heading>

        <div class="accordion-list">
          <div class="accordion-item" [class.open]="openFaq() === 1">
            <button
              type="button"
              class="accordion-trigger"
              (click)="toggleFaq(1)"
              [attr.aria-expanded]="openFaq() === 1"
            >
              <span>{{ t().faq.q1 }}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="acc-chevron">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            @if (openFaq() === 1) {
              <div class="accordion-content">
                <p>{{ t().faq.a1 }}</p>
              </div>
            }
          </div>

          <div class="accordion-item" [class.open]="openFaq() === 2">
            <button
              type="button"
              class="accordion-trigger"
              (click)="toggleFaq(2)"
              [attr.aria-expanded]="openFaq() === 2"
            >
              <span>{{ t().faq.q2 }}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="acc-chevron">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            @if (openFaq() === 2) {
              <div class="accordion-content">
                <p>{{ t().faq.a2 }}</p>
              </div>
            }
          </div>

          <div class="accordion-item" [class.open]="openFaq() === 3">
            <button
              type="button"
              class="accordion-trigger"
              (click)="toggleFaq(3)"
              [attr.aria-expanded]="openFaq() === 3"
            >
              <span>{{ t().faq.q3 }}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="acc-chevron">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            @if (openFaq() === 3) {
              <div class="accordion-content">
                <p>{{ t().faq.a3 }}</p>
              </div>
            }
          </div>

          <div class="accordion-item" [class.open]="openFaq() === 4">
            <button
              type="button"
              class="accordion-trigger"
              (click)="toggleFaq(4)"
              [attr.aria-expanded]="openFaq() === 4"
            >
              <span>{{ t().faq.q4 }}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="acc-chevron">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            @if (openFaq() === 4) {
              <div class="accordion-content">
                <p>{{ t().faq.a4 }}</p>
              </div>
            }
          </div>

          <div class="accordion-item" [class.open]="openFaq() === 5">
            <button
              type="button"
              class="accordion-trigger"
              (click)="toggleFaq(5)"
              [attr.aria-expanded]="openFaq() === 5"
            >
              <span>{{ t().faq.q5 }}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="acc-chevron">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            @if (openFaq() === 5) {
              <div class="accordion-content">
                <p>{{ t().faq.a5 }}</p>
              </div>
            }
          </div>
        </div>

        <div class="faq-footer">
          <p>{{ t().faq.moreQuestions }}</p>
          <button type="button" class="btn btn--outline btn--sm" (click)="onConsultWhatsApp()">
            {{ t().faq.askAdmin }}
          </button>
        </div>
      </div>
    </section>

    <!-- CALL TO ACTION BANNER -->
    <section class="section section--ocean cta-banner">
      <div class="container cta-container">
        <h2 class="cta-title">{{ t().ctaBanner.title }}</h2>
        <p class="cta-subtitle">{{ t().ctaBanner.subtitle }}</p>
        <button
          type="button"
          class="btn btn--whatsapp btn--lg"
          (click)="onConsultWhatsApp()"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.088.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.2.662.589 1.221.771 1.394.858.173.086.274.072.375-.043s.433-.505.549-.679c.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
          </svg>
          <span>{{ t().ctaBanner.button }}</span>
        </button>
        <span class="cta-note">{{ t().ctaBanner.note }}</span>
      </div>
    </section>
  `,
  styles: [`
    /* HERO */
    .hero-section {
      background: linear-gradient(180deg, #F5F0E8 0%, #FAF7F2 100%);
      padding: var(--space-12) 0 var(--space-16);
      border-bottom: 1px solid var(--color-border);
    }
    .hero-container {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;
      align-items: center;
    }
    @media (min-width: 1024px) {
      .hero-container {
        grid-template-columns: 1.15fr 0.85fr;
        gap: 4rem;
        padding-top: var(--space-6);
        padding-bottom: var(--space-6);
      }
    }
    .hero-badge {
      margin-bottom: var(--space-4);
    }
    .hero-title {
      font-size: clamp(2.15rem, 3.8vw + 0.5rem, 3.25rem);
      margin-bottom: var(--space-4);
      color: var(--color-ocean);
      line-height: 1.18;
    }
    .hero-subtitle {
      font-size: 1.125rem;
      color: var(--color-text-secondary);
      line-height: 1.65;
      margin-bottom: var(--space-8);
      max-width: 560px;
    }
    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: var(--space-10);
    }
    .hero-stats {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      flex-wrap: wrap;
      padding-top: var(--space-6);
      border-top: 1px solid var(--color-sand-border);
    }
    .stat-item {
      display: flex;
      flex-direction: column;
    }
    .stat-value {
      font-family: var(--font-heading);
      font-size: 1.15rem;
      font-weight: 800;
      color: var(--color-ocean);
    }
    .stat-label {
      font-size: 0.8125rem;
      color: var(--color-text-muted);
    }
    .stat-divider {
      width: 1px;
      height: 32px;
      background-color: var(--color-sand-border);
    }
    .hero-visual {
      position: relative;
    }
    .visual-wrapper {
      position: relative;
      border-radius: var(--radius-xl);
      overflow: visible;
    }
    .hero-img-main {
      width: 100%;
      height: 440px;
      object-fit: cover;
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-lg);
    }
    .hero-floating-card {
      position: absolute;
      bottom: -1.25rem;
      left: 1.5rem;
      background-color: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(8px);
      padding: 0.85rem 1.25rem;
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-md);
      display: flex;
      align-items: center;
      gap: 0.85rem;
      border: 1px solid var(--color-border);
    }
    .floating-icon {
      width: 40px;
      height: 40px;
      border-radius: var(--radius-sm);
      background-color: var(--color-teal-surface);
      color: var(--color-teal-dark);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .floating-text {
      display: flex;
      flex-direction: column;
    }
    .floating-text strong {
      font-size: 0.9375rem;
      color: var(--color-ocean);
    }
    .floating-text span {
      font-size: 0.75rem;
      color: var(--color-text-secondary);
    }

    /* SERVICES SUMMARY */
    .services-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.75rem;
    }
    @media (min-width: 768px) {
      .services-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    .service-box {
      background-color: var(--color-sand-light);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: 2rem 1.75rem;
      display: flex;
      flex-direction: column;
      transition: all var(--transition-normal);
    }
    .service-box:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-md);
      border-color: var(--color-teal-light);
    }
    .service-box.highlight {
      background-color: var(--color-teal-surface);
      border-color: rgba(47, 143, 131, 0.3);
    }
    .service-icon {
      width: 54px;
      height: 54px;
      border-radius: var(--radius-md);
      background-color: var(--color-white);
      color: var(--color-teal-dark);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.25rem;
      box-shadow: var(--shadow-sm);
    }
    .service-title {
      font-size: 1.25rem;
      color: var(--color-ocean);
      margin-bottom: 0.65rem;
    }
    .service-desc {
      font-size: 0.9375rem;
      color: var(--color-text-secondary);
      line-height: 1.55;
      margin-bottom: 1.5rem;
      flex: 1;
    }
    .service-link {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      color: var(--color-teal);
      font-size: 0.875rem;
      font-weight: 700;
    }
    .service-link:hover {
      color: var(--color-teal-dark);
      gap: 0.6rem;
    }

    /* SECTION HEADER ROW */
    .section-header-row {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: var(--space-8);
    }
    @media (min-width: 768px) {
      .section-header-row {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
      }
    }
    .btn-view-all {
      align-self: flex-start;
      margin-bottom: var(--space-10);
    }
    @media (min-width: 768px) {
      .btn-view-all {
        align-self: auto;
      }
    }

    /* ADVANTAGES */
    .advantages-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    @media (min-width: 640px) {
      .advantages-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 1024px) {
      .advantages-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    .advantage-card {
      background-color: var(--color-white);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      padding: 1.75rem 1.5rem;
      display: flex;
      flex-direction: column;
    }
    .adv-icon {
      width: 48px;
      height: 48px;
      border-radius: var(--radius-sm);
      background-color: var(--color-teal-surface);
      color: var(--color-teal);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.25rem;
    }
    .adv-title {
      font-size: 1.05rem;
      color: var(--color-ocean);
      margin-bottom: 0.5rem;
    }
    .adv-desc {
      font-size: 0.875rem;
      color: var(--color-text-secondary);
      line-height: 1.55;
    }

    /* BOOKING FLOW */
    .flow-steps {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
      margin-bottom: var(--space-8);
    }
    @media (min-width: 640px) {
      .flow-steps {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 1024px) {
      .flow-steps {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    .flow-step {
      background-color: var(--color-sand-light);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      padding: 1.75rem 1.5rem;
      position: relative;
    }
    .step-num {
      width: 38px;
      height: 38px;
      border-radius: var(--radius-full);
      background-color: var(--color-ocean);
      color: var(--color-white);
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.25rem;
    }
    .step-title {
      font-size: 1.05rem;
      color: var(--color-ocean);
      margin-bottom: 0.5rem;
    }
    .step-desc {
      font-size: 0.875rem;
      color: var(--color-text-secondary);
      line-height: 1.55;
    }
    .flow-notice {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      padding: 1.15rem 1.5rem;
      background-color: var(--color-teal-surface);
      border: 1px solid rgba(47, 143, 131, 0.25);
      border-radius: var(--radius-md);
      color: var(--color-teal-dark);
      font-size: 0.875rem;
      line-height: 1.55;
    }
    .flow-notice svg {
      flex-shrink: 0;
      margin-top: 0.15rem;
    }

    /* FAQ */
    .faq-container {
      max-width: 820px;
    }
    .accordion-list {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-bottom: var(--space-8);
    }
    .accordion-item {
      background-color: var(--color-white);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      overflow: hidden;
      transition: border-color var(--transition-fast);
    }
    .accordion-item.open {
      border-color: var(--color-teal);
    }
    .accordion-trigger {
      width: 100%;
      padding: 1.15rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      text-align: left;
      font-size: 1rem;
      font-weight: 600;
      color: var(--color-ocean);
      background: none;
    }
    .accordion-trigger:hover {
      color: var(--color-teal);
    }
    .acc-chevron {
      flex-shrink: 0;
      transition: transform var(--transition-fast);
    }
    .accordion-item.open .acc-chevron {
      transform: rotate(180deg);
    }
    .accordion-content {
      padding: 0 1.5rem 1.25rem 1.5rem;
      font-size: 0.9375rem;
      color: var(--color-text-secondary);
      line-height: 1.6;
      border-top: 1px solid var(--color-sand-light);
    }
    .faq-footer {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
    }
    @media (min-width: 640px) {
      .faq-footer {
        flex-direction: row;
        justify-content: center;
      }
    }

    /* CTA BANNER */
    .cta-banner {
      text-align: center;
    }
    .cta-container {
      max-width: 760px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .cta-title {
      font-size: clamp(1.75rem, 3vw + 0.5rem, 2.5rem);
      margin-bottom: 0.85rem;
      color: var(--color-white);
    }
    .cta-subtitle {
      font-size: 1.125rem;
      color: rgba(255, 255, 255, 0.85);
      line-height: 1.6;
      margin-bottom: var(--space-8);
    }
    .cta-note {
      display: block;
      margin-top: 1rem;
      font-size: 0.8125rem;
      color: rgba(255, 255, 255, 0.65);
    }
  `],
})
export class HomeComponent {
  private readonly langService = inject(LanguageService);
  private readonly catalogService = inject(CatalogService);
  private readonly waService = inject(WhatsAppService);

  readonly t = this.langService.t;
  readonly featuredPackages = this.catalogService.getFeaturedPackages().slice(0, 3);
  readonly featuredHotels = this.catalogService.getFeaturedHotels().slice(0, 3);

  readonly openFaq = signal<number | null>(1);

  toggleFaq(index: number): void {
    this.openFaq.update((curr) => (curr === index ? null : index));
  }

  onConsultWhatsApp(): void {
    const url = this.waService.getGeneralWhatsAppUrl(this.langService.currentLang());
    this.waService.openWhatsAppUrl(url);
  }
}
