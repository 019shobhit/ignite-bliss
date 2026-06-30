"use client";

import { motion } from "framer-motion";
import {
  RiWhatsappLine,
  RiInstagramLine,
  RiFacebookLine,
  RiPhoneLine,
} from "react-icons/ri";
import SectionHeading from "@/components/ui/SectionHeading";
import { BRAND, getWhatsAppLink } from "@/constants";

// ──────────────────────────────────────────────────────────────
// Contact — Grand luxury contact section with large buttons
// ──────────────────────────────────────────────────────────────

const contactChannels = [
  {
    id: "wa1",
    icon: RiWhatsappLine,
    label: "WhatsApp",
    value: BRAND.whatsapp1,
    description: "Chat with us directly",
    href: getWhatsAppLink(
      BRAND.whatsapp1,
      "Hi Ignite & Bliss! 🕯️ I'd like to know more about your candles."
    ),
    colorClass: "bg-[#25D366]/10 text-[#128C7E] border-[#25D366]/25 hover:bg-[#25D366]/20 hover:border-[#25D366]/50",
    iconBg: "bg-[#25D366]",
  },
  {
    id: "wa2",
    icon: RiWhatsappLine,
    label: "WhatsApp",
    value: BRAND.whatsapp2,
    description: "Alternate number",
    href: getWhatsAppLink(
      BRAND.whatsapp2,
      "Hi Ignite & Bliss! 🕯️ I'd like to know more about your candles."
    ),
    colorClass: "bg-[#25D366]/10 text-[#128C7E] border-[#25D366]/25 hover:bg-[#25D366]/20 hover:border-[#25D366]/50",
    iconBg: "bg-[#25D366]",
  },
  {
    id: "ig",
    icon: RiInstagramLine,
    label: "Instagram",
    value: `@${BRAND.instagram}`,
    description: "Browse our latest creations",
    href: BRAND.instagramUrl,
    colorClass:
      "bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100 hover:border-pink-300",
    iconBg: "bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888]",
  },
  {
    id: "fb",
    icon: RiFacebookLine,
    label: "Facebook",
    value: "Ignite & Bliss",
    description: "Like our page for updates",
    href: BRAND.facebookUrl,
    colorClass: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 hover:border-blue-300",
    iconBg: "bg-[#1877F2]",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding bg-brand-bg"
      aria-labelledby="contact-heading"
    >
      <div className="container-luxury">
        {/* Header */}
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Create Something Beautiful"
          subtitle="Have a question or ready to order? Reach out through any of the channels below — we'd love to hear from you."
        />

        {/* Contact cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-3xl mx-auto mb-12">
          {contactChannels.map((channel, i) => {
            const Icon = channel.icon;
            return (
              <motion.a
                key={channel.id}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.55,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-4 p-5 sm:p-6 rounded-2xl border transition-all duration-300 ${channel.colorClass}`}
                aria-label={`Contact via ${channel.label} at ${channel.value}`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${channel.iconBg} flex items-center justify-center flex-shrink-0 shadow-md`}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs uppercase tracking-wider font-inter font-600 opacity-60 mb-0.5">
                    {channel.label}
                  </p>
                  <p
                    className="font-playfair text-lg font-600 truncate"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {channel.value}
                  </p>
                  <p className="text-xs opacity-60 font-inter mt-0.5">
                    {channel.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 opacity-40">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="rotate-[-45deg]"
                  >
                    <path
                      d="M3 8H13M13 8L8 3M13 8L8 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Brand promise strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="max-w-2xl mx-auto rounded-2xl border border-brand-border bg-white p-6 sm:p-8 text-center shadow-card"
        >
          <p className="eyebrow mb-3">Our Promise</p>
          <p
            className="font-playfair text-xl sm:text-2xl font-600 text-brand-text mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            We reply within a few hours
          </p>
          <p className="text-sm text-brand-lightText font-inter leading-relaxed">
            We take pride in prompt, personal service. Send us a message and
            our team will get back to you with all the details you need.
          </p>

          {/* Inline dividers */}
          <div className="flex items-center gap-4 justify-center mt-6">
            {["Handmade", "Premium", "Eco-Friendly"].map((tag, i) => (
              <div key={tag} className="flex items-center gap-4">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-brand-border" />}
                <span className="text-xs text-brand-lightText font-inter">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
