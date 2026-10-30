import { TourPackage } from '../core/models/package.model';
import { REGULAR_PACKAGES } from './packages/regular-packages';
import { ONEDAY_PACKAGES } from './packages/oneday-packages';
import { HONEYMOON_PACKAGES } from './packages/honeymoon-packages';
import { BUDGET_PACKAGES } from './packages/budget-packages';
import { PENIDA_GROUP_PACKAGES } from './packages/penida-group-packages';

export const MOCK_PACKAGES: TourPackage[] = [
  ...REGULAR_PACKAGES,
  ...ONEDAY_PACKAGES,
  ...HONEYMOON_PACKAGES,
  ...BUDGET_PACKAGES,
  ...PENIDA_GROUP_PACKAGES,
];
