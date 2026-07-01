"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RiStarFill } from "react-icons/ri";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/constants";

// ──────────────────────────────────────────────────────────────
// Testimonials — Luxury customer review cards
// Desktop/Tablet: 3-column grid
// Mobile: Auto-sliding interactive carousel
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
      className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-border shadow-card hover:shadow-card-hover transition-shadow duration-400 flex flex-col h-full"
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
      <div className="flex items-center gap-3 pt-4 border-t border-brand-border mt-auto">
        {/* Avatar initials */}
        <div className="w-10 h-10 rounded-full bg-brand-border flex items-center justify-center flex-shrink-0">
          <span className="text-xs font-inter font-700 text-brand-primary">
            {initials}
          </span>
        </div>
        <div>
          <p className="text-sm font-inter font-600 text-brand-text leading-snug">
            {testimonial.name}
          </p>
          <p className="text-xs text-brand-lightText font-inter mt-0.5">
            {testimonial.location}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide effect on mobile
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Handle manual swipe/drag events on mobile
  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      // Swipe left -> next slide
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    } else if (info.offset.x > swipeThreshold) {
      // Swipe right -> previous slide
      setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    }
  };

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

        {/* 1. Desktop & Tablet Layout (Visible on screens >= 768px) */}
        <div className="hidden md:grid md:grid-cols-3 gap-5 md:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>

        {/* 2. Mobile Auto-sliding Carousel (Visible on screens < 768px) */}
        <div className="block md:hidden w-full overflow-hidden relative select-none">
          <div
            className="w-full overflow-hidden px-4"
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={handleDragEnd}
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex w-full cursor-grab active:cursor-grabbing"
            >
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-card flex flex-col h-full w-full">
                    {/* Quote mark */}
                    <div
                      className="font-playfair text-5xl text-brand-accent/30 leading-none mb-3 select-none"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      &ldquo;
                    </div>

                    {/* Stars */}
                    <StarRating rating={t.rating} />

                    {/* Text */}
                    <p className="text-sm text-brand-lightText leading-relaxed mt-4 mb-5 font-inter italic">
                      {t.text}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-brand-border mt-auto">
                      <div className="w-10 h-10 rounded-full bg-brand-border flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-inter font-700 text-brand-primary">
                          {t.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-inter font-600 text-brand-text leading-snug">
                          {t.name}
                        </p>
                        <p className="text-xs text-brand-lightText font-inter mt-0.5">
                          {t.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Animated Pagination Dots */}
          <div className="flex justify-center gap-2.5 mt-6">
            {TESTIMONIALS.map((_, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className="relative w-2.5 h-2.5 flex items-center justify-center focus:outline-none"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/30 transition-all duration-300" />
                  
                  {isActive && (
                    <motion.span
                      layoutId="testimonials-active-dot"
                      className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(111,78,55,0.4)]"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col items-center gap-2 mt-12 md:mt-16"
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
