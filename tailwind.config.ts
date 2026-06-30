import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#FFFBF8",
          card: "#FFFFFF",
          primary: "#6F4E37",
          accent: "#C79A63",
          secondary: "#A48C74",
          text: "#222222",
          lightText: "#6D6D6D",
          border: "#EEE7DF",
          "primary-light": "#8B6347",
          "accent-light": "#D4B07A",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "warm-gradient":
          "linear-gradient(135deg, #FFFBF8 0%, #FDF5EC 50%, #FAF0E4 100%)",
        "hero-gradient":
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.55) 100%)",
        "card-gradient":
          "linear-gradient(180deg, transparent 50%, rgba(111,78,55,0.9) 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "float-blob": "floatBlob 8s ease-in-out infinite",
        "float-blob-delay": "floatBlob 10s ease-in-out infinite 2s",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatBlob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(20px, -20px) scale(1.05)" },
          "66%": { transform: "translate(-15px, 15px) scale(0.97)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        luxury: "0 8px 40px -8px rgba(111, 78, 55, 0.18)",
        "luxury-lg": "0 20px 60px -12px rgba(111, 78, 55, 0.25)",
        card: "0 2px 20px rgba(111, 78, 55, 0.08)",
        "card-hover": "0 12px 40px rgba(111, 78, 55, 0.16)",
        "btn-primary":
          "0 4px 20px rgba(111, 78, 55, 0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
      },
      screens: {
        xs: "375px",
      },
      spacing: {
        "section": "5rem",
        "section-lg": "8rem",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    },
  },
  plugins: [],
};

export default config;
