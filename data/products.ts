// ─────────────────────────────────────────────────────
// data/products.ts — Product catalogue for Ignite & Bliss
//
// TO UPDATE PRODUCTS:
//   Simply edit the 'name', 'price', 'description', or 'image'
//   fields below. The UI will automatically reflect all changes.
//   Category options: 'glass-candles' | 'dessert-candles' |
//                     'decor-candles' | 'gift-sets' | 'shaped-candles'
// ─────────────────────────────────────────────────────

import type { Product } from "@/types";

export const products: Product[] = [
  // ── Featured Products ─────────────────────────────────────
  {
    id: "p01",
    name: "Ocean Bliss Candle",
    price: 349,
    description: "A serene aqua-hued gel candle evoking the depth of the ocean.",
    longDescription:
      "Dive into tranquility with our Ocean Bliss Candle — a stunning piece of art crafted from premium clear gel, layered with oceanic blues and soft sandy tones. Hand-poured with precision, this candle fills your space with a fresh, calming marine fragrance.",
    image: "/images/ocean-gel-candle.jpg",
    featured: true,
    category: "glass-candles",
  },
  {
    id: "p02",
    name: "Strawberry Sundae",
    price: 299,
    description: "A delightful dessert-inspired candle that looks good enough to eat.",
    longDescription:
      "Our Strawberry Sundae candle is a masterpiece of handcrafted artistry — sculpted to perfection with luscious red tones and creamy textures. A sweet, fruity fragrance that transforms any space into a joyful retreat.",
    image: "/images/strawberry-sundae.jpg",
    featured: true,
    category: "dessert-candles",
  },
  {
    id: "p03",
    name: "Biscuit Chai Brew",
    price: 399,
    description: "Warm, spiced, and utterly comforting — pure golden warmth in a jar.",
    longDescription:
      "Inspired by the ritual of morning chai, this beautifully hand-poured candle radiates warmth and homeliness. A comforting blend of spiced tea and buttery biscuit fragrance that wraps your room in pure comfort.",
    image: "/images/biscuit-chai-brew.jpg",
    featured: true,
    category: "glass-candles",
  },
  {
    id: "p04",
    name: "Blueberry Sundae",
    price: 299,
    description: "A whimsical, indulgent candle sculpted with rich blueberry hues.",
    longDescription:
      "The Blueberry Sundae candle is a stunning visual treat — handcrafted with layers of deep violet and creamy white. A sweet, berry-forward fragrance that brings a cheerful, uplifting energy to any room.",
    image: "/images/blueberry-sundae.jpg",
    featured: true,
    category: "dessert-candles",
  },
  {
    id: "p05",
    name: "Spring Bloom Bouquet",
    price: 449,
    description: "A blooming cluster of floral candles — a garden captured in wax.",
    longDescription:
      "Inspired by spring's first bloom, this artisanal candle bouquet features delicately shaped floral forms in soft blush and cream tones. A gentle floral fragrance that transforms any corner into a sanctuary.",
    image: "/images/spring-bloom-candle-bunch.jpg",
    featured: true,
    category: "shaped-candles",
  },
  {
    id: "p06",
    name: "Heart Glow",
    price: 249,
    description: "A romantic heart-shaped candle, perfect for gifting with love.",
    longDescription:
      "Crafted with care and intention, the Heart Glow candle is the ultimate expression of love. Shaped into a perfect heart with a warm rose-scented fragrance, this is the ideal gift for anniversaries and romantic evenings.",
    image: "/images/heart-candle.jpg",
    featured: true,
    category: "shaped-candles",
  },
  {
    id: "p07",
    name: "Ocean Layers Glass",
    price: 379,
    description: "Mesmerizing layered ocean hues in a sophisticated glass vessel.",
    longDescription:
      "A truly captivating piece — the Ocean Layers Glass candle showcases meticulously poured strata of ocean-inspired blues, greens, and sandy gold. A fresh aquatic fragrance completes this work of art.",
    image: "/images/ocean-layers-glass.jpg",
    featured: false,
    category: "glass-candles",
  },
  {
    id: "p08",
    name: "Strawberry Cream Jar",
    price: 329,
    description: "A luxurious cream-topped strawberry dessert candle in a keepsake jar.",
    longDescription:
      "The Strawberry Cream Jar is a premium handcrafted candle that doubles as a beautiful keepsake. The luscious strawberry and cream fragrance lingers long after the flame is extinguished.",
    image: "/images/strawberry-cream-jar.jpg",
    featured: false,
    category: "glass-candles",
  },
  {
    id: "p09",
    name: "Green Tea Parfait",
    price: 349,
    description: "A sophisticated matcha-inspired candle with a refreshing green fragrance.",
    longDescription:
      "For the connoisseur of refined tastes, our Green Tea Parfait candle captures the serene essence of a Japanese tea ceremony. Layers of earthy green and creamy white make this as beautiful to look at as it is to burn.",
    image: "/images/green-tea-parfait.jpg",
    featured: false,
    category: "dessert-candles",
  },
  {
    id: "p10",
    name: "Sunrise Bliss Mini",
    price: 199,
    description: "A petite, perfectly crafted morning-glow candle for everyday luxury.",
    longDescription:
      "Small in size but grand in character, the Sunrise Bliss Mini brings the warmth of a golden morning into your daily ritual. A gentle citrus-floral blend that gently awakens your senses.",
    image: "/images/sunrise-bliss-mini-jar.jpg",
    featured: false,
    category: "glass-candles",
  },
  {
    id: "p11",
    name: "Together Forever Set",
    price: 499,
    description: "A romantic companion set — two candles crafted to glow side by side.",
    longDescription:
      "The Together Forever Set is our most romantic offering — two complementary candles designed to be gifted and lit together. Perfect for anniversaries, weddings, and declarations of love.",
    image: "/images/together-forever.jpg",
    featured: false,
    category: "gift-sets",
  },
  {
    id: "p12",
    name: "Frosty Beer Glass",
    price: 399,
    description: "A novelty glass candle with witty charm and a clean crisp fragrance.",
    longDescription:
      "A delightful conversation starter — the Frosty Beer Glass candle is crafted to resemble a frosted glass of beer with remarkable detail. A fresh, clean fragrance with subtle herbal notes.",
    image: "/images/frosty-beer-glass.jpg",
    featured: false,
    category: "glass-candles",
  },
  {
    id: "p13",
    name: "Cuddle Bud Gift Box",
    price: 499,
    description: "A premium luxury gift set combining a candle with a plush companion.",
    longDescription:
      "The Cuddle Bud Gift Box is our most beloved gifting option — a handcrafted candle paired with a soft plush bear, presented in an elegant gift box that requires no additional wrapping.",
    image: "/images/cuddle-bud-gift-box.jpg",
    featured: false,
    category: "gift-sets",
  },
  {
    id: "p14",
    name: "Mini Teddy Bear",
    price: 249,
    description: "An adorable bear-shaped candle that melts hearts before it melts wax.",
    longDescription:
      "Sculpted with intricate detail, the Mini Teddy Bear candle is one of our most charming creations. A sweet vanilla fragrance makes this the perfect addition to a child's room or a playful gift.",
    image: "/images/mini-teddy-bear.jpg",
    featured: false,
    category: "shaped-candles",
  },
  {
    id: "p15",
    name: "Botanical Aura",
    price: 299,
    description: "Nature-inspired artisanal candle with botanical fragrance and elegant form.",
    longDescription:
      "The Botanical Aura candle celebrates the beauty of the natural world. Infused with a layered botanical fragrance of herbs, florals, and earthy woods, this candle brings the outdoors into your living space.",
    image: "/images/botanical-aroma-tag.jpg",
    featured: false,
    category: "decor-candles",
  },
  {
    id: "p16",
    name: "Golden Aura",
    price: 349,
    description: "A sophisticated luxury candle radiating warm golden tones.",
    longDescription:
      "The Golden Aura is our signature luxury offering — a richly hued, hand-poured candle that exudes warmth and opulence. A complex amber and sandalwood fragrance that lingers long after the flame is gone.",
    image: "/images/Candle_01.jpg",
    featured: false,
    category: "glass-candles",
  },
  {
    id: "p17",
    name: "Velvet Amber",
    price: 279,
    description: "Warm amber hues meet velvety smooth wax in this refined creation.",
    longDescription:
      "Rich, warm, and endlessly elegant — Velvet Amber is a study in luxury minimalism. The amber-tinted wax glows beautifully when lit, casting a rich, golden light throughout the room.",
    image: "/images/Candle_02.jpg",
    featured: false,
    category: "glass-candles",
  },
  {
    id: "p18",
    name: "Crystal Frost",
    price: 319,
    description: "A pristine white candle with a crystalline texture and cool fragrance.",
    longDescription:
      "Crystal Frost captures the quiet beauty of winter — a pure white candle with an icy crystalline finish and a fresh, clean fragrance of white musk and cool air.",
    image: "/images/Candle_04.jpg",
    featured: false,
    category: "glass-candles",
  },
  {
    id: "p19",
    name: "Rose Serenity",
    price: 329,
    description: "Delicate rose-inspired candle crafted to evoke romance and calm.",
    longDescription:
      "Rose Serenity is a timeless piece — a soft blush-hued candle with the most exquisite rose fragrance. Perfect for romantic evenings, meditation, or as a thoughtful gift for someone special.",
    image: "/images/Candle_05.jpg",
    featured: false,
    category: "decor-candles",
  },
  {
    id: "p20",
    name: "Midnight Bloom",
    price: 449,
    description: "A dramatic dark-hued candle that blooms beautifully in the night.",
    longDescription:
      "Midnight Bloom is our most dramatic creation — deep plum and midnight blue tones with a complex floral-musk fragrance. This candle is designed to be the centrepiece of any evening atmosphere.",
    image: "/images/Candle_06.jpg",
    featured: false,
    category: "decor-candles",
  },
];

// ── Helper: get featured products ──────────────────────────
export const getFeaturedProducts = () =>
  products.filter((p) => p.featured);

// ── Helper: get products by category ───────────────────────
export const getProductsByCategory = (category: string) =>
  category === "all" ? products : products.filter((p) => p.category === category);

// ── Category filter labels ──────────────────────────────────
export const CATEGORIES = [
  { value: "all", label: "All" },
  { value: "glass-candles", label: "Glass Candles" },
  { value: "dessert-candles", label: "Dessert Candles" },
  { value: "shaped-candles", label: "Shaped" },
  { value: "decor-candles", label: "Décor" },
  { value: "gift-sets", label: "Gift Sets" },
] as const;
