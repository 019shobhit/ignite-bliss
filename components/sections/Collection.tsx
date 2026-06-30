"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { RiWhatsappLine, RiInstagramLine, RiEyeLine } from "react-icons/ri";
import SectionHeading from "@/components/ui/SectionHeading";
import { products, CATEGORIES, getProductsByCategory } from "@/data/products";
import { getWhatsAppLink, getProductWhatsAppMsg, BRAND } from "@/constants";
import type { Product } from "@/types";

// ──────────────────────────────────────────────────────────────
// Collection — Filterable luxury product grid
// ──────────────────────────────────────────────────────────────

interface CollectionProps {
  onProductClick: (product: Product) => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.55,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
  exit: { opacity: 0, scale: 0.94, transition: { duration: 0.25 } },
};

function ProductCard({
  product,
  index,
  onClick,
}: {
  product: Product;
  index: number;
  onClick: () => void;
}) {
  const waLink = getWhatsAppLink(BRAND.whatsapp1, getProductWhatsAppMsg(product.name));
  const igLink = BRAND.instagramUrl;

  return (
    <motion.article
      layout
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="product-card group"
      aria-label={`${product.name} — ₹${product.price}`}
    >
      {/* Image area */}
      <div
        className="product-card-image cursor-pointer"
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onClick()}
        aria-label={`View details for ${product.name}`}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-400 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className="w-12 h-12 rounded-full glass flex items-center justify-center shadow-luxury">
              <RiEyeLine className="w-5 h-5 text-brand-primary" />
            </div>
          </motion.div>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="glass text-[10px] font-inter font-600 text-brand-primary uppercase tracking-wider px-2.5 py-1 rounded-full">
            {product.category.replace("-", " ")}
          </span>
        </div>
      </div>

      {/* Card info */}
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            className="font-playfair text-base font-600 text-brand-text leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {product.name}
          </h3>
          <span className="font-playfair text-lg font-700 text-brand-primary whitespace-nowrap flex-shrink-0" style={{ fontFamily: "var(--font-playfair)" }}>
            ₹{product.price}
          </span>
        </div>

        <p className="text-xs text-brand-lightText leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp flex-1 text-xs py-2 px-3"
            aria-label={`Order ${product.name} on WhatsApp`}
            onClick={(e) => e.stopPropagation()}
          >
            <RiWhatsappLine className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
          <a
            href={igLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-instagram text-xs py-2 px-3"
            aria-label={`View ${product.name} on Instagram`}
            onClick={(e) => e.stopPropagation()}
          >
            <RiInstagramLine className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Collection({ onProductClick }: CollectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered = getProductsByCategory(activeCategory);

  return (
    <section
      id="collection"
      className="section-padding bg-brand-bg"
      aria-labelledby="collection-heading"
    >
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Our Collection"
          title="Handcrafted for Every Moment"
          subtitle="Browse our curated range of luxury handmade candles, each one a unique expression of warmth and artistry."
        />

        {/* Category filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10 md:mb-12">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-xs font-inter font-600 tracking-wide transition-all duration-300 ${
                activeCategory === cat.value
                  ? "bg-brand-primary text-white shadow-btn-primary"
                  : "bg-white border border-brand-border text-brand-lightText hover:border-brand-primary hover:text-brand-primary"
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                index={i}
                onClick={() => onProductClick(product)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-14"
        >
          <p className="text-brand-lightText text-sm mb-5 font-inter">
            Don&apos;t see what you&apos;re looking for? We create custom orders too.
          </p>
          <a
            href={`https://wa.me/91${BRAND.whatsapp1}?text=${encodeURIComponent("Hi Ignite & Bliss! 🕯️ I'd like to inquire about a custom candle order.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <RiWhatsappLine className="w-4 h-4" />
            Ask for Custom Order
          </a>
        </motion.div>
      </div>
    </section>
  );
}
