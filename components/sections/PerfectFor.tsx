"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { PERFECT_FOR } from "@/constants";

// ──────────────────────────────────────────────────────────────
// PerfectFor — Occasions grid with elegant tags
// ──────────────────────────────────────────────────────────────

export default function PerfectFor() {
  return (
    <section
      id="perfect-for"
      className="section-padding overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #6F4E37 0%, #5a3d2b 100%)",
      }}
      aria-labelledby="perfect-heading"
    >
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Perfect For"
          title="A Candle for Every Celebration"
          subtitle="From intimate evenings to grand celebrations, every Ignite & Bliss candle elevates the moment."
          light
        />

        {/* Occasions grid */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-3xl mx-auto">
          {PERFECT_FOR.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.06,
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-white/15 bg-white/8 backdrop-blur-sm cursor-default hover:bg-white/15 hover:border-brand-accent/60 transition-all duration-300"
            >
              <span className="text-lg" aria-hidden="true">{item.icon}</span>
              <span className="text-sm font-inter font-500 text-white/90">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Decorative quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-center mt-16"
        >
          <div className="inline-block">
            <div className="w-px h-12 bg-brand-accent/40 mx-auto mb-6" />
            <p
              className="font-playfair text-xl sm:text-2xl italic text-white/85 max-w-lg mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              &ldquo;The right candle transforms any space into a sanctuary.&rdquo;
            </p>
            <div className="w-px h-12 bg-brand-accent/40 mx-auto mt-6" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
