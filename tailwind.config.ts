import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: "#080c10",
        graphite: "#10171d",
        steel: "#73808b",
        signal: "#00d4ff",
        flare: "#ff6b2c",
        chalk: "#f3f5f4",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        display: ["var(--font-space)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
