import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ivory: "#F4D9B5",
        gold: "#EDC4A3",
        champagne: "#F4D9B5",
        green: "#53131E",
        brown: "#53131E",
        charcoal: "#231919",
        crimson: "#770521",
        "crimson-dark": "#53131E",
        "crimson-light": "#F9E9D5"
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        devanagari: ["var(--font-devanagari)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(83,19,30,0.14)",
        glow: "0 0 44px rgba(237,196,163,0.42)"
      },
      backgroundImage: {
        marble:
          "radial-gradient(circle at 20% 20%, rgba(244,217,181,.68), transparent 30%), radial-gradient(circle at 80% 0%, rgba(119,5,33,.12), transparent 26%), linear-gradient(135deg, #fff8ef, #f9e9d5 48%, #edc4a3)"
      },
      animation: {
        kenburns: "kenburns 4s ease-out infinite alternate"
      },
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.15)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
