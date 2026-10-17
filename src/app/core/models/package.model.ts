export type PackageCategory = 'all' | 'family' | 'group' | 'couple';

export interface LocalizedString {
  id: string;
  en: string;
}

export interface LocalizedList {
  id: string[];
  en: string[];
}

export interface ItineraryItem {
  day: number;
  title: LocalizedString;
  activities: LocalizedList;
}

export interface TourPackage {
  id: string;
  slug: string;
  title: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  destination: string;
  duration: LocalizedString;
  durationDays: number;
  price: number;
  priceUnit: LocalizedString;
  category: 'family' | 'group' | 'couple';
  badge?: LocalizedString;
  minParticipants: LocalizedString;
  highlights: LocalizedList;
  inclusions: LocalizedList;
  exclusions: LocalizedList;
  itinerary: ItineraryItem[];
  importantNotes: LocalizedList;
  images: string[];
  featured?: boolean;
}
