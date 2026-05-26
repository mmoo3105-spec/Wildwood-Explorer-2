/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Page = 'home' | 'product' | 'summary' | 'delivery' | 'cleaning' | 'campsites' | 'logistics-hub' | 'storage-detail' | 'locker-rental-detail' | 'try-before-buy-detail';

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  reviews?: number;
  image: string;
  tags?: string[];
  features?: string[];
  specs?: Record<string, string>;
  whatsIncluded?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}
