"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Layout
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Sections (eagerly loaded for first paint performance)
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Collection from "@/components/sections/Collection";
import BulkOrders from "@/components/sections/BulkOrders";
import PerfectFor from "@/components/sections/PerfectFor";
import HowToOrder from "@/components/sections/HowToOrder";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

// Modal — dynamic import for performance
const ProductModal = dynamic(() => import("@/components/ui/ProductModal"), {
  ssr: false,
});

import type { Product } from "@/types";

// ──────────────────────────────────────────────────────────────
// Main Page — Ignite & Bliss Luxury Candle Showcase
// ──────────────────────────────────────────────────────────────

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      {/* Floating navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        {/* 1. Hero — Full screen luxury hero */}
        <Hero />

        {/* 2. About — Brand story, two-column editorial */}
        <About />

        {/* 3. Why Choose Us — Four premium brand promise cards */}
        <WhyChooseUs />

        {/* 4. Featured Collection — Filterable luxury product grid */}
        <Collection onProductClick={setSelectedProduct} />

        {/* 4b. Bulk Orders — Exclusive Bulk Order Offers */}
        <BulkOrders />

        {/* 5. Perfect For — Occasions showcase */}
        <PerfectFor />

        {/* 6. How To Order — Three-step timeline */}
        <HowToOrder />

        {/* 7. Testimonials — Customer review cards */}
        <Testimonials />

        {/* 9. Contact — Grand contact section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Modal — rendered when a product is selected */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
