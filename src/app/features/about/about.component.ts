import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { WhatsAppService } from '../../core/services/whatsapp.service';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, SectionHeadingComponent],
  template: `
    <div class="about-page">
      <!-- Header -->
      <section class="page-header">
        <div class="container header-inner">
          <span class="badge badge--teal header-badge">Tentang Kami</span>
          <h1 class="page-title">{{ t().aboutPage.title }}</h1>
          <p class="page-subtitle">{{ t().aboutPage.subtitle }}</p>
        </div>
      </section>

      <!-- Vision & Philosophy -->
      <section class="section section--white">
        <div class="container philosophy-container">
          <div class="philosophy-grid">
            <div class="philosophy-text">
              <span class="badge badge--teal mb-3">{{ t().aboutPage.visionTitle }}</span>
              <h2 class="subheading">{{ t().aboutPage.visionTitle }}</h2>
              <p class="body-lead">{{ t().aboutPage.visionDesc }}</p>
              <p class="body-secondary">{{ t().aboutPage.approachDesc }}</p>
            </div>
            <div class="philosophy-visual">
              <img
                src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80"
                alt="Suasana alam dan persawahan asri Pulau Bali"
                class="about-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Core Values -->
      <section class="section section--sand">
        <div class="container">
          <app-section-heading
            [title]="t().aboutPage.valuesTitle"
            subtitle="Prinsip dasar yang memandu setiap rencana perjalanan dan interaksi kami dengan Anda."
            align="center"
          ></app-section-heading>

          <div class="values-grid">
            <div class="value-card">
              <div class="val-num">01</div>
              <h3 class="val-title">{{ t().aboutPage.value1Title }}</h3>
              <p class="val-desc">{{ t().aboutPage.value1Desc }}</p>
            </div>

            <div class="value-card">
              <div class="val-num">02</div>
              <h3 class="val-title">{{ t().aboutPage.value2Title }}</h3>
              <p class="val-desc">{{ t().aboutPage.value2Desc }}</p>
            </div>

            <div class="value-card">
              <div class="val-num">03</div>
              <h3 class="val-title">{{ t().aboutPage.value3Title }}</h3>
              <p class="val-desc">{{ t().aboutPage.value3Desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Operational Info & CTA -->
      <section class="section section--white">
        <div class="container info-container">
          <div class="info-box">
            <h3 class="info-title">{{ t().aboutPage.teamTitle }}</h3>
            <p class="info-desc">{{ t().aboutPage.teamDesc }}</p>
            <div class="info-contact">
              <span class="info-label">Kanal Konsultasi Utama:</span>
              <span class="info-val">WhatsApp {{ waService.displayPhoneNumber }}</span>
            </div>
            <button
              type="button"
              class="btn btn--whatsapp btn--lg"
              (click)="onConsultWhatsApp()"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.088.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.2.662.589 1.221.771 1.394.858.173.086.274.072.375-.043s.433-.505.549-.679c.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
              </svg>
              <span>{{ t().aboutPage.contactBtn }}</span>
            </button>
          </div>
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
    .philosophy-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;
      align-items: center;
    }
    @media (min-width: 960px) {
      .philosophy-grid {
        grid-template-columns: 1.1fr 0.9fr;
      }
    }
    .subheading {
      font-size: 1.85rem;
      color: var(--color-ocean);
      margin-bottom: 1.25rem;
    }
    .body-lead {
      font-size: 1.1rem;
      color: var(--color-text-dark);
      line-height: 1.7;
      margin-bottom: 1rem;
    }
    .body-secondary {
      font-size: 1rem;
      color: var(--color-text-secondary);
      line-height: 1.65;
    }
    .about-img {
      width: 100%;
      height: 380px;
      object-fit: cover;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-md);
    }
    .values-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.75rem;
    }
    @media (min-width: 768px) {
      .values-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    .value-card {
      background-color: var(--color-white);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      padding: 2rem 1.75rem;
      display: flex;
      flex-direction: column;
    }
    .val-num {
      font-family: var(--font-heading);
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--color-teal);
      margin-bottom: 1rem;
    }
    .val-title {
      font-size: 1.2rem;
      color: var(--color-ocean);
      margin-bottom: 0.65rem;
    }
    .val-desc {
      font-size: 0.9375rem;
      color: var(--color-text-secondary);
      line-height: 1.6;
    }
    .info-container {
      max-width: 780px;
    }
    .info-box {
      background-color: var(--color-sand-light);
      border: 1px solid var(--color-sand-border);
      border-radius: var(--radius-lg);
      padding: 2.5rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .info-title {
      font-size: 1.5rem;
      color: var(--color-ocean);
      margin-bottom: 0.75rem;
    }
    .info-desc {
      font-size: 1rem;
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin-bottom: 1.5rem;
      max-width: 600px;
    }
    .info-contact {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 2rem;
      font-size: 0.9375rem;
      color: var(--color-ocean);
    }
    .info-val {
      font-weight: 700;
      color: var(--color-teal-dark);
    }
    .mb-3 {
      margin-bottom: 0.75rem;
    }
  `],
})
export class AboutComponent {
  private readonly langService = inject(LanguageService);
  readonly waService = inject(WhatsAppService);

  readonly t = this.langService.t;

  onConsultWhatsApp(): void {
    const url = this.waService.getGeneralWhatsAppUrl(this.langService.currentLang());
    this.waService.openWhatsAppUrl(url);
  }
}
