"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { BRAND, NAV_LINKS } from "@/constants";

// ──────────────────────────────────────────────────────────────
// Navbar — Floating, glassmorphic, sticky with active section tracking
// ──────────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Detect scroll for glass blur effect
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section is in view
  useEffect(() => {
    const sections = ["home", "about", "collection", "bulk-orders", "contact"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-white/90 backdrop-blur-xl border-b border-brand-border shadow-[0_2px_20px_rgba(111,78,55,0.06)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="container-luxury flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex flex-col leading-none group"
            aria-label="Ignite & Bliss — Home"
          >
            <span
              className="font-playfair text-xl font-700 tracking-tight text-brand-primary transition-opacity duration-300 group-hover:opacity-80"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ignite &amp; Bliss
            </span>
            <span className="text-[9px] font-inter font-500 tracking-[0.18em] text-brand-accent uppercase mt-0.5">
              Luxury Candles
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative text-sm font-inter font-500 tracking-wide transition-colors duration-300 ${
                    isActive ? "text-brand-primary" : "text-brand-lightText hover:text-brand-primary"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-brand-accent"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/91${BRAND.whatsapp1}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs px-5 py-2.5"
            >
              Order on WhatsApp
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-brand-primary transition-colors hover:bg-brand-border"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <RiCloseLine className="w-5 h-5" />
            ) : (
              <RiMenuLine className="w-5 h-5" />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-luxury-lg md:hidden flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-brand-border">
                <span
                  className="font-playfair text-lg font-700 text-brand-primary"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Ignite &amp; Bliss
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-brand-lightText hover:bg-brand-border transition-colors"
                  aria-label="Close menu"
                >
                  <RiCloseLine className="w-4 h-4" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex-1 px-6 py-8 flex flex-col gap-1" aria-label="Mobile navigation">
                {NAV_LINKS.map((link, i) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 + 0.1 }}
                      onClick={() => handleNavClick(link.href)}
                      className={`text-left px-4 py-3 rounded-xl text-base font-inter font-500 transition-all duration-200 ${
                        isActive
                          ? "bg-brand-border text-brand-primary font-600"
                          : "text-brand-lightText hover:bg-brand-border/50 hover:text-brand-primary"
                      }`}
                    >
                      {link.label}
                    </motion.button>
                  );
                })}
              </nav>

              {/* Drawer CTA */}
              <div className="px-6 py-6 border-t border-brand-border">
                <a
                  href={`https://wa.me/91${BRAND.whatsapp1}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full text-sm"
                >
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
