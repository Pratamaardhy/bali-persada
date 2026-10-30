export type PackageCategoryId =
  | 'regular'
  | 'oneday'
  | 'honeymoon'
  | 'budget'
  | 'penida'
  | 'group';

export type PackageCategory = 'all' | PackageCategoryId;

export type DurationFilter = 'all' | '1' | '2' | '3' | '4' | '5';

export type PackageSortOption = 'recommended' | 'price-asc' | 'price-desc' | 'duration-asc';

export interface LocalizedString {
  id: string;
  en: string;
}

export interface LocalizedList {
  id: string[];
  en: string[];
}

export interface PackageCategoryMeta {
  id: PackageCategoryId;
  tag: LocalizedString;
  title: LocalizedString;
  shortTitle: LocalizedString;
  description: LocalizedString;
  icon: 'compass' | 'sun' | 'heart' | 'tag' | 'anchor' | 'users';
}

export interface ItineraryStep {
  code: string;
  time?: string;
  title: LocalizedString;
  description: LocalizedString;
}

export interface ItineraryItem {
  day: number;
  title: LocalizedString;
  summary?: LocalizedString;
  activities: LocalizedList;
  steps?: ItineraryStep[];
}

export interface RouteOption {
  id: string;
  code: string;
  label: LocalizedString;
  subtitle: LocalizedString;
  itinerary: ItineraryItem[];
}

export interface PricingBracket {
  paxLabel: LocalizedString;
  pricePerPax: number;
}

export interface PricingTierRow {
  id: string;
  tierName: LocalizedString;
  hotelsExample?: LocalizedString;
  brackets: PricingBracket[];
}

export interface TourPackage {
  id: string;
  slug: string;
  code: string;
  title: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  destination: string;
  duration: LocalizedString;
  durationDays: number;
  price: number;
  priceUnit: LocalizedString;
  category: PackageCategoryId;
  badge?: LocalizedString;
  minParticipants: LocalizedString;
  highlights: LocalizedList;
  inclusions: LocalizedList;
  exclusions: LocalizedList;
  childPolicy: LocalizedList;
  itinerary: ItineraryItem[];
  routeOptions?: RouteOption[];
  pricingTable: PricingTierRow[];
  importantNotes: LocalizedList;
  images: string[];
  recommendedHotelAreas?: ('Seminyak' | 'Ubud' | 'Nusa Dua' | 'Sanur' | 'Jimbaran' | 'Uluwatu')[];
  featured?: boolean;
}
