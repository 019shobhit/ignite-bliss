// ─────────────────────────────────────────────────────
// constants/index.ts — Site-wide constants for Ignite & Bliss
// ─────────────────────────────────────────────────────

import type { NavLink, WhyCard, OrderStep, PerfectForItem, Testimonial } from "@/types";

// ── Brand Info ──────────────────────────────────────────────
export const BRAND = {
  name: "Ignite & Bliss",
  tagline: "Where Every Flame Ignites Happiness",
  whatsapp1: "9919972997",
  whatsapp2: "9667721531",
  instagram: "igniteandbliss",
  facebookUrl: "https://www.facebook.com/share/18QbZzZBF1/",
  instagramUrl: "https://www.instagram.com/igniteandbliss",
} as const;

// ── WhatsApp helpers ────────────────────────────────────────
export const getWhatsAppLink = (phone: string, message?: string) => {
  const encoded = message ? encodeURIComponent(message) : "";
  return `https://wa.me/91${phone}${encoded ? `?text=${encoded}` : ""}`;
};

export const getProductWhatsAppMsg = (productName: string) =>
  `Hi Ignite & Bliss! 🕯️ I'm interested in the *${productName}*. Could you please share more details?`;

// ── Navigation Links ────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Collection", href: "#collection" },
  { label: "Bulk Orders", href: "#bulk-orders" },
  { label: "Contact", href: "#contact" },
];

// ── Why Choose Us Cards ─────────────────────────────────────
export const WHY_CARDS: WhyCard[] = [
  {
    icon: "✦",
    title: "Handcrafted",
    description:
      "Every candle is meticulously hand-poured in small batches, ensuring exceptional quality and uniqueness in each piece.",
  },
  {
    icon: "◈",
    title: "Eco-Friendly",
    description:
      "We use sustainably sourced wax, premium fragrance oils, and natural cotton wicks for a clean, guilt-free burn.",
  },
  {
    icon: "◎",
    title: "Long-Lasting",
    description:
      "Crafted to burn beautifully for hours, our candles create a lasting ambiance that transforms any space.",
  },
  {
    icon: "◇",
    title: "Perfect Gift",
    description:
      "Presented in elegant packaging, each candle makes for an unforgettable, thoughtful luxury gift for any occasion.",
  },
];

// ── Order Steps ──────────────────────────────────────────────
export const ORDER_STEPS: OrderStep[] = [
  {
    step: 1,
    title: "Browse Our Collection",
    description:
      "Explore our curated range of handcrafted luxury candles and find the perfect piece that speaks to you.",
  },
  {
    step: 2,
    title: "Connect With Us",
    description:
      "Reach out via WhatsApp or Instagram with your chosen product. We're always happy to assist.",
  },
  {
    step: 3,
    title: "Receive Your Order",
    description:
      "Confirm your order and receive your beautifully packaged candle, ready to illuminate your world.",
  },
];

// ── Perfect For ──────────────────────────────────────────────
export const PERFECT_FOR: PerfectForItem[] = [
  { icon: "🎂", label: "Birthday Gifts" },
  { icon: "💍", label: "Anniversary" },
  { icon: "💒", label: "Weddings" },
  { icon: "🏡", label: "Housewarming" },
  { icon: "🪔", label: "Festivals" },
  { icon: "🎁", label: "Corporate Gifts" },
  { icon: "🌹", label: "Romantic Evenings" },
  { icon: "🏮", label: "Home Décor" },
  { icon: "🧘", label: "Self-Care" },
  { icon: "🌿", label: "Meditation" },
];

// ── Testimonials ─────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "The quality far exceeded my expectations. The fragrance filled my entire living room with the most beautiful warmth — it felt like pure luxury from the moment I lit it. I've already gifted these to three of my closest friends.",
  },
  {
    id: "t2",
    name: "Ananya Verma",
    location: "Delhi, NCR",
    rating: 5,
    text: "I ordered these as anniversary gifts and the reaction was absolutely priceless. The packaging is stunning, and the candle itself has such an elegant presence. Completely worth every rupee.",
  },
  {
    id: "t3",
    name: "Meera Patel",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    text: "I've tried many candle brands, but Ignite & Bliss is on another level. The handcrafted details, the premium finish, the lasting fragrance — this is what a truly artisanal candle should feel like.",
  },
];

// ── Gallery Image Paths (for Instagram Gallery section) ─────
export const GALLERY_IMAGES = [
  "/images/ocean-gel-candle.jpg",
  "/images/Candle_03.jpg",
  "/images/strawberry-sundae.jpg",
  "/images/Candle_07.jpg",
  "/images/heart-candle.jpg",
  "/images/Candle_11.jpg",
  "/images/biscuit-chai-brew.jpg",
  "/images/Candle_15.jpg",
  "/images/spring-bloom-candle-bunch.jpg",
  "/images/Candle_19.jpg",
  "/images/blueberry-sundae.jpg",
  "/images/Candle_23.jpg",
];
