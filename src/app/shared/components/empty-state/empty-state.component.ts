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
    .empty-state {
      text-align: center;
      padding: var(--space-12) var(--space-6);
      background-color: var(--color-white);
      border: 1px dashed var(--color-border);
      border-radius: var(--radius-lg);
      max-width: 520px;
      margin: var(--space-8) auto;
    }
    .empty-icon {
      color: var(--color-teal);
      margin-bottom: var(--space-4);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 72px;
      height: 72px;
      border-radius: var(--radius-full);
      background-color: var(--color-teal-surface);
    }
    .empty-title {
      font-size: 1.25rem;
      margin-bottom: var(--space-2);
      color: var(--color-ocean);
    }
    .empty-desc {
      font-size: 0.9375rem;
      color: var(--color-text-secondary);
      margin-bottom: var(--space-6);
      line-height: 1.5;
    }
  `],
})
export class EmptyStateComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() actionLabel?: string;
  @Output() action = new EventEmitter<void>();
}
