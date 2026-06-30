"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  RiCloseLine,
  RiWhatsappLine,
  RiInstagramLine,
} from "react-icons/ri";
import { BRAND, getWhatsAppLink, getProductWhatsAppMsg } from "@/constants";
import type { Product } from "@/types";

// ──────────────────────────────────────────────────────────────
// ProductModal — Elegant full-screen product detail overlay
// ──────────────────────────────────────────────────────────────

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  // Lock scroll when open
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const waLink = product
    ? getWhatsAppLink(BRAND.whatsapp1, getProductWhatsAppMsg(product.name))
    : "#";

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Overlay */}
          <motion.div
            key="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="modal-overlay"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Panel */}
          <motion.div
            key="modal-panel"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-product-name"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative bg-white rounded-3xl shadow-luxury-lg max-w-3xl w-full max-h-[90vh] overflow-hidden pointer-events-auto flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full glass shadow-md flex items-center justify-center text-brand-primary hover:bg-brand-border transition-colors duration-200"
                aria-label="Close product details"
              >
                <RiCloseLine className="w-4 h-4" />
              </motion.button>

              {/* Image side */}
              <div className="relative w-full md:w-2/5 flex-shrink-0">
                <div className="relative w-full h-60 md:h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/15" />
                </div>
              </div>

              {/* Info side */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 flex flex-col">
                {/* Category badge */}
                <span className="inline-block self-start text-[10px] font-inter font-600 uppercase tracking-wider text-brand-accent bg-brand-accent/10 px-3 py-1.5 rounded-full mb-4">
                  {product.category.replace("-", " ")}
                </span>

                {/* Product name */}
                <h2
                  id="modal-product-name"
                  className="font-playfair text-2xl sm:text-3xl font-700 text-brand-text mb-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {product.name}
                </h2>

                {/* Price */}
                <p
                  className="font-playfair text-2xl font-700 text-brand-primary mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  ₹{product.price}
                </p>

                <div className="accent-line mb-6" />

                {/* Short description */}
                <p className="text-sm text-brand-lightText font-inter leading-relaxed mb-3">
                  {product.description}
                </p>

                {/* Long description */}
                {product.longDescription && (
                  <p className="text-sm text-brand-lightText font-inter leading-relaxed mb-6">
                    {product.longDescription}
                  </p>
                )}

                {/* Product details */}
                <div className="bg-brand-bg rounded-xl p-4 mb-6 flex flex-wrap gap-4">
                  {[
                    { label: "Material", value: "Premium Wax" },
                    { label: "Wick", value: "Natural Cotton" },
                    { label: "Craft", value: "Hand-Poured" },
                  ].map((detail) => (
                    <div key={detail.label} className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-wider text-brand-lightText font-inter font-600">
                        {detail.label}
                      </span>
                      <span className="text-sm font-inter font-600 text-brand-text mt-0.5">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp flex-1 text-sm justify-center"
                    id="modal-whatsapp-btn"
                  >
                    <RiWhatsappLine className="w-4 h-4" />
                    Order on WhatsApp
                  </a>
                  <a
                    href={BRAND.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-instagram text-sm px-5 justify-center"
                    id="modal-instagram-btn"
                  >
                    <RiInstagramLine className="w-4 h-4" />
                    Instagram
                  </a>
                </div>

                <p className="text-center text-xs text-brand-lightText mt-4 font-inter">
                  No checkout needed · Order directly via WhatsApp
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
