import { computed, effect, Injectable, signal } from '@angular/core';
import { Language, TranslationDictionary } from '../models/translation.model';
import { TRANSLATIONS } from '../../data/translations';

const STORAGE_KEY = 'bali_persada_lang';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly currentLangSignal = signal<Language>(this.getInitialLanguage());

  readonly currentLang = this.currentLangSignal.asReadonly();

  readonly t = computed<TranslationDictionary>(() => {
    const lang = this.currentLangSignal();
    return TRANSLATIONS[lang] || TRANSLATIONS.id;
  });

  constructor() {
    // Sync html lang attribute and storage
    effect(() => {
      const lang = this.currentLangSignal();
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem(STORAGE_KEY, lang);
        } catch {
          // Ignore localStorage errors in private mode
        }
        if (typeof document !== 'undefined') {
          document.documentElement.lang = lang;
        }
      }
    });
  }

  setLanguage(lang: Language): void {
    if (lang === 'id' || lang === 'en') {
      this.currentLangSignal.set(lang);
    }
  }

  toggleLanguage(): void {
    const next = this.currentLangSignal() === 'id' ? 'en' : 'id';
    this.setLanguage(next);
  }

  private getInitialLanguage(): Language {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY) as Language;
        if (saved === 'id' || saved === 'en') {
          return saved;
        }
      } catch {
        // Fallback
      }
    }
    return 'id';
  }
}
