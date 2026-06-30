import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// ── Fonts ────────────────────────────────────────────────────
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// ── Metadata ─────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://igniteandbliss.in"),
  title: {
    default: "Ignite & Bliss — Premium Handmade Luxury Candles",
    template: "%s | Ignite & Bliss",
  },
  description:
    "Discover Ignite & Bliss — a premium handmade candle brand crafting luxury, eco-friendly candles that transform ordinary moments into beautiful memories. Shop via WhatsApp or Instagram.",
  keywords: [
    "luxury candles",
    "handmade candles",
    "premium candles india",
    "handcrafted candles",
    "eco-friendly candles",
    "candles gift india",
    "luxury home decor",
    "ignite and bliss",
    "designer candles",
    "scented candles india",
  ],
  authors: [{ name: "Ignite & Bliss" }],
  creator: "Ignite & Bliss",
  publisher: "Ignite & Bliss",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://igniteandbliss.in",
    siteName: "Ignite & Bliss",
    title: "Ignite & Bliss — Premium Handmade Luxury Candles",
    description:
      "Handcrafted luxury candles designed to bring warmth, serenity, and timeless beauty into every space. Browse our collection and order via WhatsApp.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ignite & Bliss — Luxury Handmade Candles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ignite & Bliss — Premium Handmade Luxury Candles",
    description:
      "Handcrafted luxury candles designed to bring warmth, serenity, and beauty into every space.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#6F4E37",
};

// ── Layout ───────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-brand-bg text-brand-text font-inter antialiased">
        {children}
      </body>
    </html>
  );
}
