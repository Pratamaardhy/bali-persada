import { LocalizedList, LocalizedString } from './package.model';

export type HotelAreaFilter = 'all' | 'Seminyak' | 'Ubud' | 'Nusa Dua' | 'Sanur' | 'Jimbaran' | 'Uluwatu';

export interface RoomType {
  name: LocalizedString;
  bed: LocalizedString;
  view: LocalizedString;
  capacity: LocalizedString;
}

export interface Hotel {
  id: string;
  slug: string;
  name: string;
  location: string;
  area: 'Seminyak' | 'Ubud' | 'Nusa Dua' | 'Sanur' | 'Jimbaran' | 'Uluwatu';
  category: 'resort' | 'villa' | 'hotel' | 'family-resort';
  categoryLabel: LocalizedString;
  badge?: LocalizedString;
  shortDescription: LocalizedString;
  description: LocalizedString;
  pricePerNight: number;
  priceUnit: LocalizedString;
  priceNote: LocalizedString;
  facilities: LocalizedList;
  roomTypes: RoomType[];
  images: string[];
  featured?: boolean;
  nearbyAttractions: LocalizedList;
}
