import type { Config } from "tailwindcss";

export default {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App Router
    "./components/**/*.{js,ts,jsx,tsx}", // Components
    "./lib/**/*.{js,ts,jsx,tsx}", // Custom utilities
    "!./node_modules/**/*", // Exclude node_modules
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          500: "#2563eb",
          600: "#1d4ed8",
        },
        accent: "#10b981",
      },
      fontFamily: {
        kodeMono: ['var(--font-kodemono)', 'monospace'],
        jetB: ['jetB', 'monospace'],
        playfair: ['playfair', 'jetB'],
      },
      keyframes: {
        'bounce-x': {
          '0%, 100%': {
            transform: 'translateX(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateX(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'bounce-x': 'bounce-x 1s infinite',
        'fade-in': 'fade-in 0.5s ease-out',
      },
    },
  }
} satisfies Config;