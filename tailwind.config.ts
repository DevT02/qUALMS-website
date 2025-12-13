import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: "#A382EE",
        midnight: {
          900: "#133C70",
          700: "#1E4F8A",
          500: "#2A63A4",
        },
        ice: {
          100: "#D5E7F1",
          300: "#B9D4E6",
        },
        accent: "#FF6F61",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        heading: ["Futura", "Arial", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        serif: ["Merriweather", "serif"],
        academic: ["Source Sans Pro", "Inter", "sans-serif"],
        academicHeading: ["Crimson Text", "Playfair Display", "serif"],
        chinese: ['"Noto Sans SC"', '"Microsoft YaHei"', "sans-serif"],
        hindi: ['"Noto Sans Devanagari"', "sans-serif"],
        spanish: ['"Playfair Display"', "serif"],
        french: ['"Libre Baskerville"', "serif"],
        arabic: ['"Noto Sans Arabic"', '"Scheherazade New"', "sans-serif"],
        bengali: ['"Noto Sans Bengali"', "sans-serif"],
        portuguese: ['"Lora"', "serif"],
        russian: ['"Noto Sans"', '"PT Sans"', "sans-serif"],
        urdu: ['"Noto Nastaliq Urdu"', '"Jameel Noori Nastaleeq"', "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
