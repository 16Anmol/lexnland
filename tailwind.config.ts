import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // These half-step spacing values are used across the site (p-7.5, px-4.5,
      // w-8.5, gap-5.5, mb-5.5, …) but are NOT part of Tailwind's default scale,
      // so without this they silently compile to nothing — which is what made
      // card padding collapse and testimonial text overlap the avatars.
      spacing: {
        "4.5": "1.125rem", // 18px
        "5.5": "1.375rem", // 22px
        "6.5": "1.625rem", // 26px
        "7.5": "1.875rem", // 30px
        "8.5": "2.125rem", // 34px
        "9.5": "2.375rem", // 38px
        "13": "3.25rem", // 52px
      },
      colors: {
        wine: {
          DEFAULT: "#A63B69",
          dark: "#7F2E50",
        },
        pink: {
          DEFAULT: "#F7E8EE",
        },
        bg: "#FCFAFB",
        ink: {
          DEFAULT: "#1D1D1F",
          soft: "#6B6B6B",
        },
        gold: "#D4AF37",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "32px",
        md: "22px",
        sm: "14px",
      },
      boxShadow: {
        wine: "0 20px 50px -30px rgba(166,59,105,0.45)",
        "wine-lg": "0 60px 100px -30px rgba(127,46,80,0.45)",
      },
      keyframes: {
        floatY: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseMark: {
          "0%,100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(0.92)", opacity: "0.6" },
        },
      },
      animation: {
        floatY: "floatY 3s ease-in-out infinite",
        pulseMark: "pulseMark 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
