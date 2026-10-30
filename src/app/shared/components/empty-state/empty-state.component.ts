import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="empty-state">
      <div class="empty-icon" aria-hidden="true">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <line x1="8" y1="11" x2="14" y2="11"></line>
        </svg>
      </div>
      <h3 class="empty-title">{{ title }}</h3>
      <p class="empty-desc">{{ description }}</p>
      @if (actionLabel) {
        <button type="button" class="btn btn--outline btn--sm" (click)="action.emit()">
          {{ actionLabel }}
        </button>
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
    .empty-state {
      width: 100%;
      text-align: center;
      padding: var(--space-8) var(--space-4);
      background-color: var(--color-white);
      border: 1px dashed var(--color-border);
      border-radius: var(--radius-lg);
      max-width: 520px;
      margin: var(--space-6) auto;
      min-width: 0;
    }
    @media (min-width: 640px) {
      .empty-state {
        padding: var(--space-12) var(--space-6);
        margin: var(--space-8) auto;
      }
    }
    .empty-icon {
      color: var(--color-teal);
      margin-bottom: var(--space-4);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 64px;
      height: 64px;
      border-radius: var(--radius-full);
      background-color: var(--color-teal-surface);
    }
    @media (min-width: 640px) {
      .empty-icon {
        width: 72px;
        height: 72px;
      }
    }
    .empty-title {
      font-size: clamp(1.125rem, 1.5vw + 0.5rem, 1.25rem);
      margin-bottom: var(--space-2);
      color: var(--color-ocean);
      overflow-wrap: break-word;
    }
    .empty-desc {
      font-size: 0.9375rem;
      color: var(--color-text-secondary);
      margin-bottom: var(--space-6);
      line-height: 1.55;
      overflow-wrap: break-word;
    }
  `],
})
export class EmptyStateComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() actionLabel?: string;
  @Output() action = new EventEmitter<void>();
}
