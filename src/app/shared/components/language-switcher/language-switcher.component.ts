import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../core/services/language.service';
import { Language } from '../../../core/models/translation.model';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="lang-switch" role="group" aria-label="Language selector">
      <button
        type="button"
        class="lang-btn"
        [class.active]="currentLang() === 'id'"
        (click)="setLang('id')"
        aria-label="Bahasa Indonesia"
      >
        ID
      </button>
      <span class="lang-divider" aria-hidden="true">/</span>
      <button
        type="button"
        class="lang-btn"
        [class.active]="currentLang() === 'en'"
        (click)="setLang('en')"
        aria-label="English"
      >
        EN
      </button>
    </div>
  `,
  styles: [`
    :host {
      display: inline-flex;
      flex-shrink: 0;
    }
    .lang-switch {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      background-color: rgba(18, 59, 80, 0.06);
      padding: 0.25rem 0.5rem;
      border-radius: var(--radius-full);
      font-size: 0.8125rem;
      font-weight: 700;
    }
    .lang-btn {
      padding: 0.2rem 0.45rem;
      border-radius: var(--radius-full);
      color: var(--color-text-secondary);
      font-size: 0.8125rem;
      font-weight: 700;
      line-height: 1;
      transition: all var(--transition-fast);
    }
    .lang-btn:hover {
      color: var(--color-ocean);
    }
    .lang-btn.active {
      background-color: var(--color-ocean);
      color: var(--color-white);
    }
    .lang-divider {
      color: var(--color-text-muted);
      font-size: 0.75rem;
      user-select: none;
    }
  `],
})
export class LanguageSwitcherComponent {
  private readonly langService = inject(LanguageService);

  readonly currentLang = this.langService.currentLang;

  setLang(lang: Language): void {
    this.langService.setLanguage(lang);
  }
}
