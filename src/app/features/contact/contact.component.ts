import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../core/services/language.service';
import { WhatsAppService, InquiryFormData } from '../../core/services/whatsapp.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="contact-page">
      <!-- Header -->
      <section class="page-header">
        <div class="container header-inner">
          <span class="badge badge--teal header-badge">Hubungi Kami</span>
          <h1 class="page-title">{{ t().contactPage.title }}</h1>
          <p class="page-subtitle">{{ t().contactPage.subtitle }}</p>
        </div>
      </section>

      <section class="section section--sand">
        <div class="container contact-container">
          <!-- WhatsApp Primary Contact Card -->
          <div class="wa-primary-card">
            <div class="wa-icon-large" aria-hidden="true">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.088.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.2.662.589 1.221.771 1.394.858.173.086.274.072.375-.043s.433-.505.549-.679c.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
              </svg>
            </div>
            <div class="wa-content">
              <h2 class="wa-title">{{ t().contactPage.waTitle }}</h2>
              <p class="wa-desc">{{ t().contactPage.waDesc }}</p>
              <div class="wa-phone-highlight">
                <span>{{ waService.displayPhoneNumber }}</span>
              </div>
            </div>
            <button
              type="button"
              class="btn btn--whatsapp btn--lg wa-btn-action"
              (click)="onDirectWhatsApp()"
            >
              <span>{{ t().contactPage.waBtn }}</span>
            </button>
          </div>

          <!-- Structured Inquiry Form (Generates WhatsApp Draft) -->
          <div class="inquiry-form-card">
            <h3 class="form-title">{{ t().contactPage.formTitle }}</h3>
            <p class="form-desc">{{ t().contactPage.formDesc }}</p>

            <form (ngSubmit)="onSubmitInquiry()" #inquiryForm="ngForm" class="inquiry-form">
              <div class="form-group">
                <label for="name" class="form-label">{{ t().contactPage.nameLabel }} *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="form-input"
                  [placeholder]="t().contactPage.namePlaceholder"
                  [(ngModel)]="formData.name"
                  required
                />
              </div>

              <div class="form-group">
                <label for="service" class="form-label">{{ t().contactPage.serviceLabel }}</label>
                <select
                  id="service"
                  name="service"
                  class="form-select"
                  [(ngModel)]="formData.service"
                >
                  <option value="" disabled>{{ t().contactPage.servicePlaceholder }}</option>
                  <option [value]="t().contactPage.serviceOption1">{{ t().contactPage.serviceOption1 }}</option>
                  <option [value]="t().contactPage.serviceOption2">{{ t().contactPage.serviceOption2 }}</option>
                  <option [value]="t().contactPage.serviceOption3">{{ t().contactPage.serviceOption3 }}</option>
                </select>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="dates" class="form-label">{{ t().contactPage.datesLabel }}</label>
                  <input
                    type="text"
                    id="dates"
                    name="dates"
                    class="form-input"
                    [placeholder]="t().contactPage.datesPlaceholder"
                    [(ngModel)]="formData.dates"
                  />
                </div>

                <div class="form-group">
                  <label for="guests" class="form-label">{{ t().contactPage.guestsLabel }}</label>
                  <input
                    type="text"
                    id="guests"
                    name="guests"
                    class="form-input"
                    [placeholder]="t().contactPage.guestsPlaceholder"
                    [(ngModel)]="formData.guests"
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="notes" class="form-label">{{ t().contactPage.notesLabel }}</label>
                <textarea
                  id="notes"
                  name="notes"
                  class="form-textarea"
                  [placeholder]="t().contactPage.notesPlaceholder"
                  [(ngModel)]="formData.notes"
                ></textarea>
              </div>

              <button
                type="submit"
                class="btn btn--primary btn--lg btn--full submit-btn"
                [disabled]="!formData.name"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.088.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.2.662.589 1.221.771 1.394.858.173.086.274.072.375-.043s.433-.505.549-.679c.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
                </svg>
                <span>{{ t().contactPage.submitBtn }}</span>
              </button>

              <div class="form-disclaimer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                <p>{{ t().contactPage.formNotice }}</p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .contact-page,
    .page-header {
      width: 100%;
      max-width: 100%;
    }
    .page-header {
      background: linear-gradient(180deg, #123B50 0%, #1C4E68 100%);
      color: var(--color-white);
      padding: var(--space-8) 0 var(--space-8);
      text-align: center;
    }
    @media (min-width: 768px) {
      .page-header {
        padding: var(--space-12) 0 var(--space-10);
      }
    }
    .header-inner {
      max-width: 720px;
    }
    .header-badge {
      margin-bottom: var(--space-3);
    }
    .page-title {
      font-size: clamp(1.65rem, 3.5vw + 0.5rem, 2.75rem);
      color: var(--color-white);
      margin-bottom: var(--space-3);
    }
    .page-subtitle {
      font-size: clamp(0.95rem, 1.2vw + 0.4rem, 1.0625rem);
      color: rgba(255, 255, 255, 0.85);
      line-height: 1.6;
    }
    .contact-container {
      max-width: 840px;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      min-width: 0;
    }
    @media (min-width: 640px) {
      .contact-container {
        gap: 2rem;
      }
    }
    .wa-primary-card {
      width: 100%;
      min-width: 0;
      background-color: var(--color-white);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: 1.5rem 1.25rem;
      box-shadow: var(--shadow-sm);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 1.15rem;
    }
    @media (min-width: 640px) {
      .wa-primary-card {
        padding: 2.25rem 2rem;
      }
    }
    @media (min-width: 768px) {
      .wa-primary-card {
        flex-direction: row;
        text-align: left;
        justify-content: space-between;
        gap: 1.5rem;
      }
    }
    .wa-icon-large {
      width: 56px;
      height: 56px;
      border-radius: var(--radius-full);
      background-color: var(--color-wa-surface);
      color: #1EBE5D;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    @media (min-width: 640px) {
      .wa-icon-large {
        width: 64px;
        height: 64px;
      }
    }
    .wa-content {
      flex: 1;
      min-width: 0;
      width: 100%;
    }
    .wa-title {
      font-size: clamp(1.2rem, 1.8vw + 0.3rem, 1.35rem);
      color: var(--color-ocean);
      margin-bottom: 0.35rem;
    }
    .wa-desc {
      font-size: 0.9375rem;
      color: var(--color-text-secondary);
      line-height: 1.5;
      margin-bottom: 0.5rem;
    }
    .wa-phone-highlight {
      font-family: var(--font-heading);
      font-size: clamp(1.1rem, 2vw + 0.3rem, 1.25rem);
      font-weight: 800;
      color: var(--color-teal-dark);
      overflow-wrap: anywhere;
    }
    .wa-btn-action {
      width: 100%;
      flex-shrink: 0;
    }
    @media (min-width: 768px) {
      .wa-btn-action {
        width: auto;
      }
    }
    .inquiry-form-card {
      width: 100%;
      min-width: 0;
      background-color: var(--color-white);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: 1.5rem 1.25rem;
      box-shadow: var(--shadow-sm);
    }
    @media (min-width: 640px) {
      .inquiry-form-card {
        padding: 2.5rem 2rem;
      }
    }
    .form-title {
      font-size: clamp(1.25rem, 1.8vw + 0.3rem, 1.4rem);
      color: var(--color-ocean);
      margin-bottom: 0.5rem;
    }
    .form-desc {
      font-size: 0.9375rem;
      color: var(--color-text-secondary);
      line-height: 1.55;
      margin-bottom: 1.5rem;
    }
    .inquiry-form {
      display: flex;
      flex-direction: column;
      min-width: 0;
      width: 100%;
    }
    .form-row {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      gap: 0 1rem;
    }
    @media (min-width: 640px) {
      .form-row {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
    .submit-btn {
      margin-top: 0.5rem;
      margin-bottom: 1.25rem;
    }
    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .form-disclaimer {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      min-width: 0;
      font-size: 0.8125rem;
      color: var(--color-text-muted);
      line-height: 1.5;
      padding: 0.75rem 1rem;
      background-color: var(--color-sand-light);
      border-radius: var(--radius-sm);
    }
    .form-disclaimer p {
      min-width: 0;
    }
    .form-disclaimer svg {
      flex-shrink: 0;
      margin-top: 0.15rem;
    }
  `],
})
export class ContactComponent {
  private readonly langService = inject(LanguageService);
  readonly waService = inject(WhatsAppService);

  readonly t = this.langService.t;

  formData: InquiryFormData = {
    name: '',
    service: '',
    dates: '',
    guests: '',
    notes: '',
  };

  onDirectWhatsApp(): void {
    const url = this.waService.getGeneralWhatsAppUrl(this.langService.currentLang());
    this.waService.openWhatsAppUrl(url);
  }

  onSubmitInquiry(): void {
    if (!this.formData.name) return;
    const url = this.waService.getInquiryFormWhatsAppUrl(this.formData, this.langService.currentLang());
    this.waService.openWhatsAppUrl(url);
  }
}
