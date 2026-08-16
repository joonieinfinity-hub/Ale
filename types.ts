/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export type SpiritCategory = 
  | 'Whisky'
  | 'Vodka'
  | 'Rum'
  | 'Gin'
  | 'Brandy'
  | 'Wine'
  | 'Beer'
  | 'Liqueurs'
  | 'Ready to Drink';

export interface BottleSizePrice {
  size: string; // e.g. '180 ml', '375 ml', '750 ml', '1 L'
  price: string; // e.g. '₹ —' or '₹ 1,850'
}

export interface Product {
  id: string;
  brand: string;
  name: string;
  category: SpiritCategory;
  type: string; // e.g., 'Blended Scotch Whisky', 'Single Malt', 'London Dry Gin'
  image: string;
  sizes: BottleSizePrice[];
  description?: string;
  descriptors?: string[]; // e.g., ['Rich', 'Smoky', 'Full-bodied']
  character?: string; // e.g., 'Rich · Smoky · Full-bodied'
  origin?: string; // e.g., 'Scotland', 'India', 'France'
  abv?: string; // e.g., '42.8% ABV'
  availability?: 'In Stock' | 'Limited Stock' | 'Available on Request' | 'Ask at Counter';
  isFeatured?: boolean;
  collections?: ('classics' | 'premium' | 'wine-table' | 'evening-shelf' | 'discover-new')[];
  tags?: string[];
}

export interface BrandInfo {
  name: string;
  slug: string;
  categories: SpiritCategory[];
  country: string;
  description?: string;
  logoUrl?: string;
  featured?: boolean;
}

export type ViewTab = 'home' | 'about' | 'collection' | 'gallery' | 'visit' | 'contact' | 'brands';

export type ViewState = 
  | { type: 'home' }
  | { type: 'collection'; category?: SpiritCategory | 'All'; brand?: string; search?: string }
  | { type: 'brands'; letter?: string; category?: SpiritCategory | 'All' }
  | { type: 'about' }
  | { type: 'visit' }
  | { type: 'product-detail'; product: Product };

export interface StoreDetails {
  name: string;
  established: number;
  owner: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  country: string;
  pin: string;
  fullAddress: string;
  googleMapsDirectionsUrl: string;
  phonePlaceholder: string;
  wholesalePhone: string;
  wholesalePhoneDial: string;
  whatsappPlaceholder: string;
  openingHoursPlaceholder: string;
}
