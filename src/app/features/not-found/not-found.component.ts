import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { WhatsAppService } from '../../core/services/whatsapp.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="not-found-page">
      <div class="container not-found-card">
        <span class="nf-badge">404</span>
        <h1 class="nf-title">
          {{ currentLang() === 'id' ? 'Halaman Tidak Ditemukan' : 'Page Not Found' }}
        </h1>
        <p class="nf-desc">
          {{ currentLang() === 'id'
            ? 'Maaf, alamat halaman yang Anda tuju tidak tersedia atau telah dipindahkan. Silakan kembali ke beranda atau jelajahi katalog layanan kami.'
            : 'Sorry, the page you are looking for does not exist or may have been moved. Please return home or explore our service catalog.' }}
        </p>

        <div class="nf-actions">
          <a routerLink="/" class="btn btn--primary">
            {{ currentLang() === 'id' ? 'Kembali ke Beranda' : 'Back to Home' }}
          </a>
          <a routerLink="/packages" class="btn btn--outline">
            {{ currentLang() === 'id' ? 'Lihat Paket Liburan' : 'Explore Packages' }}
          </a>
          <button type="button" class="btn btn--whatsapp" (click)="onConsultWhatsApp()">
            {{ currentLang() === 'id' ? 'Tanya Admin via WhatsApp' : 'Ask Admin on WhatsApp' }}
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .not-found-page {
      width: 100%;
      max-width: 100%;
      padding: var(--space-12) var(--container-padding);
      min-height: 65vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--color-sand-light);
    }
    @media (min-width: 640px) {
      .not-found-page {
        padding: var(--space-20) var(--container-padding);
      }
    }
    .not-found-card {
      width: 100%;
      max-width: 620px;
      min-width: 0;
      text-align: center;
      background-color: var(--color-white);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      padding: 2rem 1.25rem;
      box-shadow: var(--shadow-md);
    }
    @media (min-width: 640px) {
      .not-found-card {
        padding: 3.5rem 2.5rem;
      }
    }
    .nf-badge {
      display: inline-block;
      font-family: var(--font-heading);
      font-size: clamp(2.75rem, 6vw, 3.5rem);
      font-weight: 800;
      color: var(--color-teal);
      line-height: 1;
      margin-bottom: 0.85rem;
    }
    .nf-title {
      font-size: clamp(1.45rem, 2.5vw + 0.4rem, 1.85rem);
      color: var(--color-ocean);
      margin-bottom: 0.85rem;
    }
    .nf-desc {
      font-size: 0.975rem;
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin-bottom: 1.75rem;
    }
    .nf-actions {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      width: 100%;
    }
    .nf-actions .btn {
      width: 100%;
    }
    @media (min-width: 480px) {
      .nf-actions {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
      }
      .nf-actions .btn {
        width: auto;
      }
    }
  `],
})
export class NotFoundComponent {
  private readonly langService = inject(LanguageService);
  private readonly waService = inject(WhatsAppService);

  readonly currentLang = this.langService.currentLang;

  onConsultWhatsApp(): void {
    const url = this.waService.getGeneralWhatsAppUrl(this.currentLang());
    this.waService.openWhatsAppUrl(url);
  }
}
