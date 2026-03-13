/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0d9488", // Primary Teal
          dark: "#0f766e",    // Dark Teal
        },
        secondary: {
          DEFAULT: "#f59e0b", // CTA Amber
        },
        background: {
          light: "#f0fdfa",   // Light Teal Bg
          DEFAULT: "#ffffff",
        },
        text: {
          dark: "#134e4a",
          body: "#374151",
          muted: "#6b7280",
        },
        glow: "rgba(13,148,136,0.12)",
        border: "#e5e7eb",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        dm: ["DM Sans", "sans-serif"],
      },
      backgroundImage: {
        'teal-gradient': 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
      }
    },
  },
  plugins: [],
}


