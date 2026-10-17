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
    .section-heading {
      margin-bottom: var(--space-10);
      max-width: 680px;
    }
    .section-heading.center {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
    .section-tag {
      display: inline-block;
      text-transform: uppercase;
      font-size: 0.8125rem;
      letter-spacing: 0.08em;
      font-weight: 700;
      color: var(--color-teal);
      margin-bottom: var(--space-2);
    }
    .section-heading.dark .section-tag {
      color: var(--color-teal-light);
    }
    .section-title {
      font-size: clamp(1.65rem, 2.5vw + 0.5rem, 2.25rem);
      margin-bottom: var(--space-3);
      color: var(--color-ocean);
      line-height: 1.25;
    }
    .section-heading.dark .section-title {
      color: var(--color-white);
    }
    .section-subtitle {
      font-size: 1.0625rem;
      color: var(--color-text-secondary);
      line-height: 1.6;
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
