"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { WHY_CARDS } from "@/constants";

// ──────────────────────────────────────────────────────────────
// WhyChooseUs — Responsive features section
// Desktop/Tablet: 4-card grid
// Mobile: Auto-sliding interactive carousel
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide effect on mobile
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % WHY_CARDS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Handle manual swipe/drag events on mobile
  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      // Swipe left -> next slide
      setActiveIndex((prev) => (prev + 1) % WHY_CARDS.length);
    } else if (info.offset.x > swipeThreshold) {
      // Swipe right -> previous slide
      setActiveIndex((prev) => (prev - 1 + WHY_CARDS.length) % WHY_CARDS.length);
    }
  };

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

        {/* 1. Desktop & Tablet Grid Layout (Visible on screens >= 768px) */}
        <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
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

        {/* 2. Mobile Auto-sliding Carousel Layout (Visible on screens < 768px) */}
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
              {WHY_CARDS.map((card) => (
                <div key={card.title} className="w-full flex-shrink-0 px-2">
                  <div className="group relative bg-white rounded-2xl p-7 border border-brand-border cursor-default overflow-hidden shadow-card w-full">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-brand-primary/5 opacity-5 rounded-2xl" />

                    {/* Icon */}
                    <div className="relative mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                        <span className="text-xl" aria-hidden="true">
                          {card.icon}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className="relative font-playfair text-xl font-600 text-brand-text mb-3"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {card.title}
                    </h3>

                    {/* Accent line */}
                    <div className="relative w-8 h-px bg-brand-accent mb-4" />

                    {/* Description */}
                    <p className="relative text-sm text-brand-lightText leading-relaxed font-inter">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Animated Pagination Dots */}
          <div className="flex justify-center gap-2.5 mt-6">
            {WHY_CARDS.map((_, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className="relative w-2.5 h-2.5 flex items-center justify-center focus:outline-none"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  {/* Background dot */}
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/30 transition-all duration-300" />
                  
                  {/* Smoothly animated sliding dot */}
                  {isActive && (
                    <motion.span
                      layoutId="why-active-dot"
                      className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(111,78,55,0.4)]"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
