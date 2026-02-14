import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bicycle Belle Brand Colors
        brand: {
          primary: "#2D8B8B",      // Teal - primary brand color
          accent: "#FF6B35",       // Coral - accent for CTAs and highlights
          teal: {
            50: "#E6F5F5",
            100: "#B3E0E0",
            500: "#2D8B8B",
            600: "#257373",
            700: "#1D5B5B",
          },
          coral: {
            50: "#FFE9E1",
            100: "#FFC2B0",
            500: "#FF6B35",
            600: "#E55A2B",
            700: "#CC4920",
          },
        },
        text: {
          primary: "#222222",
          secondary: "#666666",
          muted: "#999999",
        },
        border: {
          light: "#E5E5E5",
          default: "#D1D1D1",
        },
      },
      fontFamily: {
        heading: ["'Montserrat'", "sans-serif"],
        body: ["'Open Sans'", "sans-serif"],
      },
      spacing: {
        // 8px grid system
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '32px',
        'xl': '48px',
        '2xl': '64px',
        '3xl': '96px',
      },
      borderRadius: {
        'sm': '2px',
        'md': '4px',
      },
      boxShadow: {
        'card': '0 2px 4px rgba(0,0,0,0.1)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
};
export default config;
