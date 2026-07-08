import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ivory: "#FAF7F2",
        gold: "#B68D40",
        champagne: "#EADBC8",
        green: "#234234",
        brown: "#3A2A1C",
        charcoal: "#222222"
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        devanagari: ["var(--font-devanagari)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(58,42,28,0.12)",
        glow: "0 0 44px rgba(182,141,64,0.45)"
      },
      backgroundImage: {
        marble:
          "radial-gradient(circle at 20% 20%, rgba(234,219,200,.55), transparent 30%), radial-gradient(circle at 80% 0%, rgba(182,141,64,.16), transparent 26%), linear-gradient(135deg, #fff, #faf7f2 48%, #eadbc8)"
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
