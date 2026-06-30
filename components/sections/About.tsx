"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ──────────────────────────────────────────────────────────────
// About — Two-column brand story section with editorial image
// ──────────────────────────────────────────────────────────────

const slideIn = (dir: "left" | "right") => ({
  hidden: { opacity: 0, x: dir === "left" ? -40 : 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-brand-bg overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Image side */}
          <motion.div
            variants={slideIn("left")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative order-2 lg:order-1"
          >
            {/* Background decorative shape */}
            <div
              className="absolute -bottom-8 -left-8 w-4/5 h-4/5 rounded-3xl"
              style={{ background: "linear-gradient(135deg, #EEE7DF 0%, #FAF0E4 100%)" }}
            />

            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-luxury-lg aspect-[4/5]">
              <Image
                src="/images/spring-bloom-candle-bunch.jpg"
                alt="Ignite & Bliss handcrafted luxury candles"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Small floating accent image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 sm:-right-8 w-32 sm:w-40 h-40 sm:h-52 rounded-2xl overflow-hidden shadow-luxury border-4 border-white"
            >
              <Image
                src="/images/heart-candle.jpg"
                alt="Handcrafted heart candle by Ignite & Bliss"
                fill
                className="object-cover"
                sizes="160px"
              />
            </motion.div>

            {/* Values badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute top-6 -right-4 sm:-right-6 glass rounded-2xl px-4 py-3 shadow-luxury"
            >
              <p
                className="font-playfair text-sm font-600 text-brand-primary"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                ✦ Crafted with Love
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Story side */}
          <motion.div
            variants={slideIn("right")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 lg:order-2 flex flex-col"
          >
            {/* Eyebrow */}
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="eyebrow mb-4"
            >
              Our Story
            </motion.p>

            {/* Heading */}
            <motion.h2
              id="about-heading"
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="heading-section text-3xl sm:text-4xl md:text-5xl text-brand-text mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              More Than a Candle.
              <br />
              <span className="text-brand-primary italic font-400">
                A Feeling.
              </span>
            </motion.h2>

            <div className="accent-line mb-8" />

            {/* Story text */}
            <div className="space-y-5 text-brand-lightText text-sm sm:text-base leading-relaxed">
              <motion.p
                custom={0.2}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Ignite &amp; Bliss was born from a simple, deeply held belief — that
                a beautifully crafted candle is more than an object. It is an
                experience. A pause in the day. A breath of warmth in a busy world.
              </motion.p>
              <motion.p
                custom={0.3}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Every candle we create is hand-poured in small, thoughtful batches —
                ensuring that what reaches you is not just a product, but a piece of
                genuine artisanship. We draw inspiration from the natural world,
                life&apos;s celebrations, and the quiet magic of everyday moments.
              </motion.p>
              <motion.p
                custom={0.4}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Using premium eco-friendly wax, fine fragrance oils, and natural
                cotton wicks, each creation is crafted to burn cleanly and beautifully
                — transforming any space into a sanctuary of calm and elegance.
              </motion.p>
            </div>

            {/* Brand Values */}
            <motion.div
              custom={0.5}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 grid grid-cols-2 gap-4"
            >
              {[
                "Handmade with love",
                "Premium craftsmanship",
                "Eco-friendly materials",
                "Luxury gifting",
              ].map((value) => (
                <div key={value} className="flex items-start gap-2.5">
                  <span className="mt-1 w-4 h-4 rounded-full bg-brand-accent/15 flex items-center justify-center flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                  </span>
                  <span className="text-sm text-brand-text font-inter font-500">
                    {value}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
