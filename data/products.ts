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
    price: 400,
    description: "A serene aqua-hued gel candle evoking the depth of the ocean.",
    longDescription:
      "Dive into tranquility with our Ocean Bliss Candle — a stunning piece of art crafted from premium clear gel, layered with oceanic blues and soft sandy tones. Hand-poured with precision, this candle fills your space with a fresh, calming marine fragrance.",
    image: "/images/ocean-gel-candle.jpg",
    featured: true,
    category: "glass-candles",
  },
  {
    id: "p02",
    name: "Strawberry Sundae Glass Candle",
    price: 350,
    description: "A delightful dessert-inspired candle that looks good enough to eat.",
    longDescription:
      "Our Strawberry Sundae candle is a masterpiece of handcrafted artistry — sculpted to perfection with luscious red tones and creamy textures. A sweet, fruity fragrance that transforms any space into a joyful retreat.",
    image: "/images/strawberry-sundae.jpg",
    featured: true,
    category: "dessert-candles",
  },
  {
    id: "p03",
    name: "Biscuit Chai Brew Candle",
    price: 300,
    description: "Warm, spiced, and utterly comforting — pure golden warmth in a jar.",
    longDescription:
      "Inspired by the ritual of morning chai, this beautifully hand-poured candle radiates warmth and homeliness. A comforting blend of spiced tea and buttery biscuit fragrance that wraps your room in pure comfort.",
    image: "/images/biscuit-chai-brew.jpg",
    featured: true,
    category: "glass-candles",
  },
  {
    id: "p04",
    name: "Blueberry Sundae Glass Candle",
    price: 350,
    description: "A whimsical, indulgent candle sculpted with rich blueberry hues.",
    longDescription:
      "The Blueberry Sundae candle is a stunning visual treat — handcrafted with layers of deep violet and creamy white. A sweet, berry-forward fragrance that brings a cheerful, uplifting energy to any room.",
    image: "/images/blueberry-sundae.jpg",
    featured: true,
    category: "dessert-candles",
  },
  {
    id: "p05",
    name: "Spring Bloom Candle Bunch",
    price: 150,
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
    price: 150,
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
    price: 499,
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
    price: 450,
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
    price: 120,
    moq: 5,
    description: "A sophisticated matcha-inspired candle with a refreshing green fragrance.",
    longDescription:
      "For the connoisseur of refined tastes, our Green Tea Parfait candle captures the serene essence of a Japanese tea ceremony. Layers of earthy green and creamy white make this as beautiful to look at as it is to burn.",
    image: "/images/green-tea-parfait.jpg",
    featured: false,
    category: "dessert-candles",
  },
  {
    id: "p10",
    name: "Sunrise Bliss Mini jar",
    price: 99,
    moq: 20,
    description: "A petite, perfectly crafted morning-glow candle for everyday luxury.",
    longDescription:
      "Small in size but grand in character, the Sunrise Bliss Mini jar brings the warmth of a golden morning into your daily ritual. A gentle citrus-floral blend that gently awakens your senses.",
    image: "/images/sunrise-bliss-mini-jar.jpg",
    featured: false,
    category: "glass-candles",
  },
  {
    id: "p11",
    name: "Together Forever Teddy Candle",
    price: 300,
    description: "Double the hearts, double the love",
    longDescription:
      "The Together Forever Teddy Candle is our most romantic offering — two complementary candles designed to be gifted and lit together. Perfect for anniversaries, weddings, and declarations of love.",
    image: "/images/together-forever-teddy.jpg",
    featured: false,
    category: "gift-sets",
  },
  {
    id: "p12",
    name: "Frosty Beer Glass Candle",
    price: 120,
    moq: 5,
    description: "A novelty glass candle with witty charm and a clean crisp fragrance.",
    longDescription:
      "A delightful conversation starter — the Frosty Beer Glass Candle is crafted to resemble a frosted glass of beer with remarkable detail. A fresh, clean fragrance with subtle herbal notes.",
    image: "/images/frosty-beer-glass.jpg",
    featured: false,
    category: "glass-candles",
  },
  {
    id: "p13",
    name: "Cuddle Bud Gift Box",
    price: 279,
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
    price: 20,
    moq: 15,
    description: "An adorable bear-shaped candle that melts hearts before it melts wax.",
    longDescription:
      "Sculpted with intricate detail, the Mini Teddy Bear candle is one of our most charming creations. A sweet vanilla fragrance makes this the perfect addition to a child's room or a playful gift.",
    image: "/images/mini-teddy-bear.jpg",
    featured: false,
    category: "shaped-candles",
  },
  {
    id: "p15",
    name: "Botanical Aroma Tag",
    price: 120,
    moqLabel: "5 units (₹99 each)",
    description: "Nature-inspired artisanal candle with botanical fragrance and elegant form.",
    longDescription:
      "The Botanical Aroma Tag candle celebrates the beauty of the natural world. Infused with a layered botanical fragrance of herbs, florals, and earthy woods, this candle brings the outdoors into your living space.",
    image: "/images/botanical-aroma-tag.jpg",
    featured: false,
    category: "decor-candles",
  },
  {
    id: "p16",
    name: "Simple Diya Pack of 8",
    price: 89,
    description: "A set of eight traditional handcrafted earthen diyas, perfect for festive illumination.",
    longDescription:
      "Bring warm, timeless festive glow into your home with our Simple Diya Pack of 8. Handcrafted from natural clay, these traditional diyas offer a clean, steady burn to light up your celebrations and ceremonies with elegance.",
    image: "/images/Simple-Diya.jpg",
    featured: false,
    category: "decor-candles",
  },
  {
    id: "p17",
    name: "Fancy Diya with Fragrances Pack of 2",
    price: 130,
    description: "Two beautifully decorated ceremonial clay diyas infused with delicate warm fragrances.",
    longDescription:
      "Celebrate festivals and special occasions with our Fancy Diya with Fragrances Pack of 2. Meticulously decorated by hand and infused with premium soothing scents, these decorative diyas combine festive visuals with aromatic luxury.",
    image: "/images/Fancy_Diya_with_Fragrances.jpg",
    featured: false,
    category: "decor-candles",
  },
  {
    id: "p18",
    name: "Simple Diya with Colour Pack of 4",
    price: 48,
    description: "Four vibrant, hand-painted clay diyas to bring colorful warmth to your decor.",
    longDescription:
      "Add a splash of traditional joy to your home with our Simple Diya with Colour Pack of 4. Hand-painted in elegant festive tones, these clay diyas are perfect for creating custom rangolis, patios, or warm corner layouts.",
    image: "/images/Simple_Diya_with_Colour.jpg",
    featured: false,
    category: "decor-candles",
  },
  {
    id: "p19",
    name: "Simple Diya with Flower & Fragrance Pack of 8",
    price: 130,
    description: "Eight floral-scented clay diyas decorated with delicate floral details.",
    longDescription:
      "Infuse your space with floral serenity with our Simple Diya with Flower & Fragrance Pack of 8. Each traditional clay diya is blended with fresh floral essential oils, filling your home with an inviting spring aroma.",
    image: "/images/SimpleDiyawithFlower&Fragrance.jpg",
    featured: false,
    category: "decor-candles",
  },
  {
    id: "p20",
    name: "Heart/Small flower Tealight with Fragrance Pack of 9",
    price: 49,
    moq: 5,
    description: "Nine adorable heart and flower-shaped scented tealight candles for romantic setups.",
    longDescription:
      "Create a romantic, soft atmosphere with our Heart/Small flower Tealight with Fragrance Pack of 9. Featuring beautifully sculpted heart and flower shapes, these highly fragrant tealights burn cleanly and add a whimsical touch to any display.",
    image: "/images/HeartSmallflower_TealightwithFragrance.jpg",
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
