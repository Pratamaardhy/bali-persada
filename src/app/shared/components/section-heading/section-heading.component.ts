import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="section-heading" [class.center]="align === 'center'" [class.dark]="theme === 'dark'">
      @if (tag) {
        <span class="section-tag">{{ tag }}</span>
      }
      <h2 class="section-title">{{ title }}</h2>
      @if (subtitle) {
        <p class="section-subtitle">{{ subtitle }}</p>
      }
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      max-width: 100%;
      min-width: 0;
    }
    .section-heading {
      width: 100%;
      margin-bottom: var(--space-6);
      max-width: 680px;
      min-width: 0;
    }
    @media (min-width: 768px) {
      .section-heading {
        margin-bottom: var(--space-10);
      }
    }
    .section-heading.center {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
    .section-tag {
      display: inline-block;
      max-width: 100%;
      text-transform: uppercase;
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      font-weight: 700;
      color: var(--color-teal);
      margin-bottom: var(--space-2);
      overflow-wrap: break-word;
    }
    .section-heading.dark .section-tag {
      color: var(--color-teal-light);
    }
    .section-title {
      font-size: clamp(1.45rem, 2.5vw + 0.5rem, 2.25rem);
      margin-bottom: var(--space-3);
      color: var(--color-ocean);
      line-height: 1.25;
      overflow-wrap: break-word;
    }
    .section-heading.dark .section-title {
      color: var(--color-white);
    }
    .section-subtitle {
      font-size: clamp(0.9375rem, 1.1vw + 0.4rem, 1.0625rem);
      color: var(--color-text-secondary);
      line-height: 1.6;
      overflow-wrap: break-word;
    }
    .section-heading.dark .section-subtitle {
      color: rgba(255, 255, 255, 0.85);
    }
  `],
})
export class SectionHeadingComponent {
  @Input() tag?: string;
  @Input() title: string = '';
  @Input() subtitle?: string;
  @Input() align: 'left' | 'center' = 'center';
  @Input() theme: 'light' | 'dark' = 'light';
}
