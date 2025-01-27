import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        roboto: ['"Roboto"', 'sans-serif'],
        lora: ['"Lora"', 'serif'],
        custom: ['"CustomFont"', 'monospace'], // Replace with your font name
        mono: ['"JetBrains Mono"', 'monospace'], // Custom Mono Font
        montserrat: ['"Montserrat"', 'sans-serif'],
        regularFont: ['"regularFont"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;

