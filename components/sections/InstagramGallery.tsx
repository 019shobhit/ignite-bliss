"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { RiInstagramLine } from "react-icons/ri";
import SectionHeading from "@/components/ui/SectionHeading";
import { BRAND, GALLERY_IMAGES } from "@/constants";

// ──────────────────────────────────────────────────────────────
// InstagramGallery — Pinterest-style masonry grid
// ──────────────────────────────────────────────────────────────

export default function InstagramGallery() {
  return (
    <section
      id="gallery"
      className="section-padding bg-brand-bg"
      aria-labelledby="gallery-heading"
    >
      <div className="container-luxury">
        <SectionHeading
          eyebrow="@igniteandbliss"
          title="Follow Our Journey"
          subtitle="Step inside our world of handcrafted luxury. Follow us on Instagram for daily inspiration."
        />

        {/* Masonry Gallery */}
        <div className="masonry-grid">
          {GALLERY_IMAGES.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: (i % 4) * 0.08,
                duration: 0.55,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="masonry-item group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View photo ${i + 1} on Ignite & Bliss Instagram`}
              >
                <div className="relative w-full overflow-hidden rounded-xl">
                  <Image
                    src={src}
                    alt={`Ignite & Bliss candle — photo ${i + 1}`}
                    width={400}
                    height={i % 3 === 0 ? 560 : i % 3 === 1 ? 400 : 480}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Instagram hover overlay */}
                  <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/40 transition-colors duration-400 flex items-center justify-center rounded-xl">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <RiInstagramLine className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Follow button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-instagram text-sm"
            id="instagram-follow-btn"
          >
            <RiInstagramLine className="w-4 h-4" />
            Follow @igniteandbliss
          </a>
        </motion.div>
      </div>
    </section>
  );
}
