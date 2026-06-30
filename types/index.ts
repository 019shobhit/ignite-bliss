// ─────────────────────────────────────────────────────
// types/index.ts — Shared TypeScript types for Ignite & Bliss
// ─────────────────────────────────────────────────────

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  featured: boolean;
  category: ProductCategory;
  /** Optional longer description for modal display */
  longDescription?: string;
}

export type ProductCategory =
  | "all"
  | "glass-candles"
  | "dessert-candles"
  | "decor-candles"
  | "gift-sets"
  | "shaped-candles";

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface WhyCard {
  icon: string;
  title: string;
  description: string;
}

export interface OrderStep {
  step: number;
  title: string;
  description: string;
}

export interface PerfectForItem {
  icon: string;
  label: string;
}
