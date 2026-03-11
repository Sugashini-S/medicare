/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0a2463",
          light: "#1e40af",
        },
        accent: {
          DEFAULT: "#00b4d8",
          soft: "#e0f7fa",
        },
        surface: "#f9fafb",
        text: {
          primary: "#0f172a",
          muted: "#64748b",
        },
        success: "#22c55e",
        warning: "#f59e0b",
        error: "#ef4444",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'mesh-gradient': 'radial-gradient(at 0% 0%, hsla(210,100%,10%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(190,100%,50%,0.2) 0, transparent 50%)',
      }
    },
  },
  plugins: [],
}

