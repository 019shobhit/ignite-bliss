"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { RiArrowDownLine } from "react-icons/ri";
import { BRAND, getWhatsAppLink } from "@/constants";

// ──────────────────────────────────────────────────────────────
// Hero — Full-screen luxury hero section with parallax blobs,
// editorial typography, and dual CTA buttons
// ──────────────────────────────────────────────────────────────

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-warm-gradient" />

      {/* Floating ambient blobs */}
      <div
        className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full opacity-40 animate-float-blob pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(199,154,99,0.25) 0%, rgba(199,154,99,0) 70%)",
        }}
      />
      <div
        className="absolute bottom-[15%] right-[5%] w-[400px] h-[400px] rounded-full opacity-35 animate-float-blob-delay pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(111,78,55,0.2) 0%, rgba(111,78,55,0) 70%)",
        }}
      />
      <div
        className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full opacity-25 animate-float-blob pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(199,154,99,0.18) 0%, rgba(199,154,99,0) 70%)",
          animationDelay: "4s",
        }}
      />

      {/* Main content */}
      <div className="container-luxury relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-28">

          {/* Left: Typography */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <motion.div
              custom={0.1}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex items-center gap-3 mb-8"
            >
              <span className="inline-block w-8 h-px bg-brand-accent" />
              <span className="eyebrow">Premium Handmade Candles</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              id="hero-heading"
              custom={0.25}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Light Every{" "}
              <span className="relative inline-block">
                <span className="text-brand-primary">Moment</span>
              </span>
              <br />
              with{" "}
              <span
                className="italic font-400"
                style={{ color: "#C79A63" }}
              >
                Elegance
              </span>
            </motion.h1>

            {/* Sub-heading */}
            <motion.p
              custom={0.4}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-brand-lightText text-base sm:text-lg leading-relaxed mb-10 max-w-md"
            >
              Discover handcrafted luxury candles designed to bring warmth,
              serenity, and timeless beauty into every space.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={0.55}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollToSection("collection")}
                className="btn-primary"
                id="hero-explore-btn"
              >
                Explore Collection
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="btn-secondary"
                id="hero-contact-btn"
              >
                Contact Us
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              custom={0.7}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex items-center gap-8 mt-14 pt-8 border-t border-brand-border"
            >
              {[
                { value: "100%", label: "Handmade" },
                { value: "Eco", label: "Friendly" },
                { value: "20+", label: "Varieties" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="font-playfair text-2xl font-700 text-brand-primary"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xs text-brand-lightText font-inter tracking-wide mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Decorative ring */}
            <div
              className="absolute inset-8 rounded-full border border-brand-accent/20"
              style={{ borderStyle: "dashed" }}
            />
            <div
              className="absolute inset-16 rounded-full border border-brand-border"
            />

            {/* Main image */}
            <div className="relative w-[420px] h-[520px] rounded-3xl overflow-hidden shadow-luxury-lg">
              <Image
                src="/images/ocean-gel-candle.jpg"
                alt="Premium Ignite & Bliss Luxury Candle"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 0px, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/10 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-4 -left-8 glass rounded-2xl px-5 py-4 shadow-luxury"
            >
              <p className="text-xs text-brand-lightText font-inter mb-0.5 uppercase tracking-wider">
                From
              </p>
              <p
                className="font-playfair text-xl font-700 text-brand-primary"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                ₹199
              </p>
              <p className="text-xs text-brand-lightText font-inter">per candle</p>
            </motion.div>

            {/* Floating tag */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -top-4 -right-6 glass rounded-2xl px-4 py-3 shadow-luxury"
            >
              <p className="text-xs font-inter font-600 text-brand-primary flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                Handcrafted
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-lightText hover:text-brand-primary transition-colors duration-300 group"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-inter">Discover</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <RiArrowDownLine className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}
