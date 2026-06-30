"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { WHY_CARDS } from "@/constants";

// ──────────────────────────────────────────────────────────────
// WhyChooseUs — Four premium cards with hover animations
// ──────────────────────────────────────────────────────────────

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.65,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="section-padding"
      style={{
        background: "linear-gradient(180deg, #FDF5EC 0%, #FFFBF8 100%)",
      }}
      aria-labelledby="why-heading"
    >
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Our Promise"
          title="Why Choose Ignite & Bliss"
          subtitle="Every decision we make — from materials to craftsmanship — reflects our commitment to creating something truly exceptional."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {WHY_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl p-7 border border-brand-border cursor-default overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-400"
            >
              {/* Hover background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl" />

              {/* Icon */}
              <div className="relative mb-5">
                <div className="w-12 h-12 rounded-2xl bg-brand-border flex items-center justify-center group-hover:bg-brand-accent/15 transition-colors duration-300">
                  <span
                    className="text-xl text-brand-primary group-hover:text-brand-accent transition-colors duration-300"
                    aria-hidden="true"
                  >
                    {card.icon}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3
                className="relative font-playfair text-xl font-600 text-brand-text mb-3 group-hover:text-brand-primary transition-colors duration-300"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {card.title}
              </h3>

              {/* Accent line */}
              <div className="relative w-8 h-px bg-brand-accent/40 mb-4 group-hover:w-12 group-hover:bg-brand-accent transition-all duration-500" />

              {/* Description */}
              <p className="relative text-sm text-brand-lightText leading-relaxed font-inter">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
