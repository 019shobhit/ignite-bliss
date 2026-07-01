"use client";

import { motion } from "framer-motion";
import {
  RiStore2Line,
  RiGiftLine,
  RiSparklingLine,
  RiHeartsLine,
  RiBriefcaseLine,
  RiBox3Line,
  RiWhatsappLine,
  RiPhoneLine,
} from "react-icons/ri";
import SectionHeading from "@/components/ui/SectionHeading";

// ──────────────────────────────────────────────────────────────
// BulkOrders — Premium section for wholesale / bulk inquiries
// ──────────────────────────────────────────────────────────────

const slideIn = (dir: "left" | "right") => ({
  hidden: { opacity: 0, x: dir === "left" ? -40 : 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
});

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const clientele = [
  { name: "Retail Stores", icon: RiStore2Line },
  { name: "Gift Shops", icon: RiGiftLine },
  { name: "Event Organizers", icon: RiSparklingLine },
  { name: "Wedding Planners", icon: RiHeartsLine },
  { name: "Corporate Buyers", icon: RiBriefcaseLine },
  { name: "Resellers & Distributors", icon: RiBox3Line },
];

const pricingData = [
  { mrp: "₹150", qty10: "₹140", qty20: "₹130", qty50: "₹120" },
  { mrp: "₹300", qty10: "₹290", qty20: "₹260", qty50: "₹240" },
  { mrp: "₹350", qty10: "₹330", qty20: "₹300", qty50: "₹280" },
  { mrp: "₹450", qty10: "₹399", qty20: "₹379", qty50: "₹349" },
];

export default function BulkOrders() {
  const whatsappUrl =
    "https://wa.me/919919972997?text=Hello%20Ignite%20%26%20Bliss,%20I%20am%20interested%20in%20your%20bulk%20order%20pricing.";

  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="bulk-orders"
      className="section-padding bg-[#FFFBF8] overflow-hidden border-t border-brand-border"
      aria-labelledby="bulk-heading"
    >
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Description, clientele categories */}
          <motion.div
            variants={slideIn("left")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 flex flex-col"
          >
            <SectionHeading
              eyebrow="Bulk Orders"
              title="🎁 Exclusive Bulk Order Offers"
              subtitle="Planning a large order? Ignite & Bliss offers attractive bulk pricing, custom gifting solutions, and dedicated support for businesses, events, and special occasions. Whether you're ordering for your store, wedding, or corporate event, we ensure premium quality with the best value."
              align="left"
            />

            {/* Clientele Categories */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 sm:gap-4 mt-2"
            >
              {clientele.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    whileHover={{ y: -3, scale: 1.02, transition: { duration: 0.2 } }}
                    className="group flex items-center gap-3 p-3.5 rounded-xl border border-brand-border bg-white cursor-default shadow-[0_2px_10px_rgba(111,78,55,0.03)] hover:shadow-luxury hover:border-brand-accent/50 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-bg border border-brand-border flex items-center justify-center flex-shrink-0 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                      {Icon ? <Icon className="w-4 h-4" /> : <RiSparklingLine className="w-4 h-4" />}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold font-inter text-brand-text group-hover:text-brand-primary transition-colors duration-300 leading-tight">
                      {item.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column: Pricing table container and CTA */}
          <motion.div
            variants={slideIn("right")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 w-full"
          >
            {/* Glassmorphic Pricing Container */}
            <div className="glass rounded-3xl p-6 sm:p-8 shadow-luxury-lg border border-brand-border relative overflow-hidden">
              
              {/* Card Header */}
              <div className="mb-6 text-center sm:text-left">
                <h3 
                  className="font-playfair text-2xl font-700 text-brand-text mb-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Bulk Discount Pricing
                </h3>
                <p className="text-xs sm:text-sm text-brand-lightText font-inter">
                  The more you order, the more you save.
                </p>
              </div>

              {/* Desktop Table: shown on sm and up */}
              <div className="hidden sm:block overflow-hidden rounded-2xl border border-brand-border/60 bg-white">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-brand-primary text-white">
                      <th className="px-5 py-3.5 text-left text-xs font-semibold font-inter uppercase tracking-wider">
                        MRP Range
                      </th>
                      <th className="px-5 py-3.5 text-center text-xs font-semibold font-inter uppercase tracking-wider">
                        10+ Qty
                      </th>
                      <th className="px-5 py-3.5 text-center text-xs font-semibold font-inter uppercase tracking-wider">
                        20+ Qty
                      </th>
                      <th className="px-5 py-3.5 text-center text-xs font-semibold font-inter uppercase tracking-wider">
                        50+ Qty
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData.map((row, idx) => (
                      <tr 
                        key={idx}
                        className={`border-b border-brand-border last:border-0 hover:bg-brand-accent/5 transition-colors duration-200 ${
                          idx % 2 === 1 ? "bg-brand-bg/30" : ""
                        }`}
                      >
                        <td className="px-5 py-4 text-sm font-bold text-brand-text font-inter">
                          {row.mrp}
                        </td>
                        <td className="px-5 py-4 text-sm text-center font-semibold text-brand-lightText font-inter">
                          <span className="text-brand-primary font-bold">{row.qty10}</span>
                        </td>
                        <td className="px-5 py-4 text-sm text-center font-semibold text-brand-lightText font-inter">
                          <span className="text-brand-primary font-bold">{row.qty20}</span>
                        </td>
                        <td className="px-5 py-4 text-sm text-center font-semibold text-brand-lightText font-inter">
                          <span className="text-brand-primary font-bold">{row.qty50}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Table: converted to cards on small screens */}
              <div className="block sm:hidden space-y-3.5">
                {pricingData.map((row, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 rounded-xl border border-brand-border bg-white shadow-[0_2px_10px_rgba(111,78,55,0.02)]"
                  >
                    <div className="flex justify-between items-center border-b border-brand-border/60 pb-2 mb-3">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-brand-accent font-inter">
                        Product Tier
                      </span>
                      <span className="text-sm font-extrabold text-brand-text font-inter">
                        MRP {row.mrp}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <p className="text-[10px] text-brand-lightText mb-0.5 font-inter">
                          10+ Qty
                        </p>
                        <p className="text-xs font-bold text-brand-primary font-inter">
                          {row.qty10}
                        </p>
                      </div>
                      <div className="border-x border-brand-border/60">
                        <p className="text-[10px] text-brand-lightText mb-0.5 font-inter">
                          20+ Qty
                        </p>
                        <p className="text-xs font-bold text-brand-primary font-inter">
                          {row.qty20}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] text-brand-lightText mb-0.5 font-inter">
                          50+ Qty
                        </p>
                        <p className="text-xs font-bold text-brand-primary font-inter">
                          {row.qty50}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Card Inside the Pricing Container */}
              <div className="mt-8 p-5 sm:p-6 rounded-2xl border border-brand-border/80 bg-brand-bg/50 shadow-[0_2px_15px_rgba(111,78,55,0.02)] flex flex-col sm:flex-row items-center justify-between gap-5">
                <div className="text-center sm:text-left flex-1">
                  <h4 
                    className="font-playfair text-lg font-700 text-brand-text mb-1.5"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Need a Custom Quote?
                  </h4>
                  <p className="text-xs text-brand-lightText font-inter leading-relaxed max-w-sm">
                    Looking for larger quantities or customized gifting solutions? Contact us for exclusive pricing and personalized assistance.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp text-xs font-semibold py-3 px-5 whitespace-nowrap justify-center"
                  >
                    <RiWhatsappLine className="w-4 h-4" />
                    <span>Get Bulk Quote</span>
                  </a>
                  <a
                    href="#contact"
                    onClick={handleContactClick}
                    className="btn-secondary text-xs font-semibold py-3 px-5 whitespace-nowrap justify-center"
                  >
                    <RiPhoneLine className="w-4 h-4" />
                    <span>Contact Us</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
