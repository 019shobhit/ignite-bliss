"use client";

import { motion } from "framer-motion";

// ──────────────────────────────────────────────────────────────
// SectionHeading — Reusable luxury section heading component
// ──────────────────────────────────────────────────────────────

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean; // Use light text for dark backgrounds
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass =
    align === "center"
      ? "items-center text-center"
      : align === "right"
      ? "items-end text-right"
      : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignClass} mb-12 md:mb-16`}>
      {eyebrow && (
        <motion.p
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className={`eyebrow mb-4 ${light ? "!text-brand-accent/80" : ""}`}
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className={`flex flex-col ${alignClass} gap-3`}
      >
        <h2
          className={`heading-section text-3xl sm:text-4xl md:text-5xl ${
            light ? "text-white" : "text-brand-text"
          }`}
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {title}
        </h2>

        {/* Accent line */}
        <div
          className={`accent-line ${align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""}`}
        />
      </motion.div>

      {subtitle && (
        <motion.p
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className={`mt-5 text-sm sm:text-base leading-relaxed max-w-xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/65" : "text-brand-lightText"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
