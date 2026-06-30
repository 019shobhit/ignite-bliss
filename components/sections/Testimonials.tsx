"use client";

import { motion } from "framer-motion";
import { RiStarFill } from "react-icons/ri";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/constants";

// ──────────────────────────────────────────────────────────────
// Testimonials — Luxury customer review cards
// ──────────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5 star-rating" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <RiStarFill
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? "text-brand-accent" : "text-brand-border"}`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
  index: number;
}) {
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay: index * 0.15,
        duration: 0.65,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-border shadow-card hover:shadow-card-hover transition-shadow duration-400 flex flex-col"
    >
      {/* Quote mark */}
      <div
        className="font-playfair text-5xl text-brand-accent/30 leading-none mb-4 select-none"
        aria-hidden="true"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        &ldquo;
      </div>

      {/* Stars */}
      <StarRating rating={testimonial.rating} />

      {/* Text */}
      <p className="text-sm text-brand-lightText leading-relaxed mt-4 mb-6 font-inter italic flex-1">
        {testimonial.text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-brand-border">
        {/* Avatar initials */}
        <div className="w-10 h-10 rounded-full bg-brand-border flex items-center justify-center flex-shrink-0">
          <span className="text-xs font-inter font-700 text-brand-primary">
            {initials}
          </span>
        </div>
        <div>
          <p className="text-sm font-inter font-600 text-brand-text">
            {testimonial.name}
          </p>
          <p className="text-xs text-brand-lightText font-inter">
            {testimonial.location}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding"
      style={{
        background: "linear-gradient(180deg, #FDF5EC 0%, #FFFBF8 100%)",
      }}
      aria-labelledby="testimonials-heading"
    >
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Customer Stories"
          title="Loved by Our Customers"
          subtitle="Real words from real people who have brought Ignite & Bliss candles into their lives."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col items-center gap-2 mt-12"
        >
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <RiStarFill key={i} className="w-4 h-4 text-brand-accent" />
            ))}
          </div>
          <p className="text-sm text-brand-lightText font-inter text-center">
            5.0 Average Rating &middot; Trusted by hundreds of happy customers
          </p>
        </motion.div>
      </div>
    </section>
  );
}
