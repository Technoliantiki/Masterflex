import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: "var(--color-black)",
        graphite: "var(--color-graphite)",
        industrial: "var(--color-industrial)",
        steel: "var(--color-medium-gray)",
        signal: "var(--color-yellow)",
        flare: "var(--color-gold)",
        chalk: "var(--color-light-gray)",
        border: "var(--color-border)",
        softyellow: "var(--color-soft-yellow)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        display: ["var(--font-space)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
