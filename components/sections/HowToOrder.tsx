"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RiWhatsappLine, RiInstagramLine } from "react-icons/ri";
import SectionHeading from "@/components/ui/SectionHeading";
import { ORDER_STEPS, BRAND, getWhatsAppLink } from "@/constants";

// ──────────────────────────────────────────────────────────────
// HowToOrder — Three-step luxury timeline section
// Desktop/Tablet: Vertical/Horizontal Timeline
// Mobile: Auto-sliding interactive carousel
// ──────────────────────────────────────────────────────────────

export default function HowToOrder() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const waLink = getWhatsAppLink(
    BRAND.whatsapp1,
    "Hi Ignite & Bliss! 🕯️ I'd like to place an order. Could you guide me?"
  );

  // Auto-slide effect on mobile
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ORDER_STEPS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Handle manual swipe/drag events on mobile
  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      // Swipe left -> next slide
      setActiveIndex((prev) => (prev + 1) % ORDER_STEPS.length);
    } else if (info.offset.x > swipeThreshold) {
      // Swipe right -> previous slide
      setActiveIndex((prev) => (prev - 1 + ORDER_STEPS.length) % ORDER_STEPS.length);
    }
  };

  return (
    <section
      id="how-to-order"
      className="section-padding bg-brand-bg"
      aria-labelledby="order-heading"
    >
      <div className="container-luxury">
        <SectionHeading
          eyebrow="How It Works"
          title="Ordering Is Simple"
          subtitle="No complex checkout. Just browse, connect, and let us handle the rest with care."
        />

        {/* 1. Desktop & Tablet Timeline Layout (Visible on screens >= 768px) */}
        <div className="hidden md:block relative max-w-4xl mx-auto">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-brand-border" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            {ORDER_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: i * 0.18,
                  duration: 0.65,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="relative flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                {/* Step number circle */}
                <div className="relative z-10 mb-6">
                  <div className="w-12 h-12 rounded-full border-2 border-brand-accent bg-white flex items-center justify-center shadow-luxury">
                    <span
                      className="font-playfair text-lg font-700 text-brand-primary"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {step.step}
                    </span>
                  </div>
                  {/* Mobile connector line */}
                  {i < ORDER_STEPS.length - 1 && (
                    <div className="lg:hidden absolute top-12 left-1/2 -translate-x-1/2 w-px h-10 bg-brand-border" />
                  )}
                </div>

                {/* Content */}
                <div>
                  <p className="eyebrow mb-2 lg:text-left">Step {step.step}</p>
                  <h3
                    className="font-playfair text-xl font-600 text-brand-text mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {step.title}
                  </h3>
                  <div className="accent-line mb-4 mx-auto lg:mx-0" />
                  <p className="text-sm text-brand-lightText leading-relaxed max-w-xs mx-auto lg:mx-0">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
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
              {ORDER_STEPS.map((step) => (
                <div key={step.step} className="w-full flex-shrink-0 px-2">
                  <div className="relative flex flex-col items-center text-center p-6 bg-white border border-brand-border rounded-2xl shadow-card w-full">
                    {/* Step number circle */}
                    <div className="mb-5">
                      <div className="w-12 h-12 rounded-full border-2 border-brand-accent bg-white flex items-center justify-center shadow-luxury">
                        <span
                          className="font-playfair text-lg font-700 text-brand-primary"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {step.step}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <p className="eyebrow mb-2">Step {step.step}</p>
                      <h3
                        className="font-playfair text-lg font-600 text-brand-text mb-3"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {step.title}
                      </h3>
                      <div className="accent-line mb-3 mx-auto" />
                      <p className="text-sm text-brand-lightText leading-relaxed max-w-xs mx-auto">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Animated Pagination Dots */}
          <div className="flex justify-center gap-2.5 mt-6">
            {ORDER_STEPS.map((_, idx) => {
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
                      layoutId="ordering-active-dot"
                      className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(111,78,55,0.4)]"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 md:mt-16"
        >
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm"
            id="how-to-order-whatsapp"
          >
            <RiWhatsappLine className="w-4 h-4" />
            Start on WhatsApp
          </a>
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-instagram text-sm"
            id="how-to-order-instagram"
          >
            <RiInstagramLine className="w-4 h-4" />
            Browse on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
