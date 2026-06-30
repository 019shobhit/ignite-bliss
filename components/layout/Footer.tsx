"use client";

import { motion } from "framer-motion";
import { RiInstagramLine, RiWhatsappLine, RiFacebookLine, RiArrowUpLine } from "react-icons/ri";
import { BRAND, getWhatsAppLink } from "@/constants";
import { NAV_LINKS } from "@/constants";

// ──────────────────────────────────────────────────────────────
// Footer — Elegant, minimal luxury footer
// ──────────────────────────────────────────────────────────────

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-white" role="contentinfo">
      {/* Main Footer Content */}
      <div className="container-luxury py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="mb-5">
              <h2
                className="font-playfair text-2xl font-700 text-white mb-1"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Ignite &amp; Bliss
              </h2>
              <p className="text-[10px] tracking-[0.2em] uppercase text-brand-accent font-inter font-500">
                Luxury Handmade Candles
              </p>
            </div>
            <p className="text-white/65 text-sm leading-relaxed font-inter mb-6 max-w-xs">
              Where every flame ignites happiness. Handcrafted with love, designed for those who appreciate the finest things.
            </p>
            <p className="text-white/40 text-xs font-inter">Made with ❤️ in India</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] text-brand-accent font-inter font-600 mb-6">
              Navigate
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/65 text-sm font-inter hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] text-brand-accent font-inter font-600 mb-6">
              Connect
            </h3>

            {/* WhatsApp */}
            <div className="space-y-3 mb-6">
              <a
                href={getWhatsAppLink(BRAND.whatsapp1)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/65 text-sm font-inter hover:text-white transition-colors duration-200 group"
              >
                <RiWhatsappLine className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span>{BRAND.whatsapp1}</span>
              </a>
              <a
                href={getWhatsAppLink(BRAND.whatsapp2)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/65 text-sm font-inter hover:text-white transition-colors duration-200 group"
              >
                <RiWhatsappLine className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span>{BRAND.whatsapp2}</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/65 hover:text-white hover:border-brand-accent hover:bg-brand-accent/10 transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <RiInstagramLine className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppLink(BRAND.whatsapp1)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/65 hover:text-white hover:border-brand-accent hover:bg-brand-accent/10 transition-all duration-300"
                aria-label="Chat on WhatsApp"
              >
                <RiWhatsappLine className="w-4 h-4" />
              </a>
              <a
                href={BRAND.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/65 hover:text-white hover:border-brand-accent hover:bg-brand-accent/10 transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <RiFacebookLine className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-luxury py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs font-inter text-center sm:text-left">
            © {currentYear} Ignite &amp; Bliss. All Rights Reserved.
          </p>
          <p className="text-white/30 text-xs font-inter">
            {BRAND.tagline}
          </p>
          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/65 hover:text-white hover:border-brand-accent hover:bg-brand-accent/10 transition-all duration-300"
            aria-label="Back to top"
          >
            <RiArrowUpLine className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
