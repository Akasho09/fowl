import type { Config } from "tailwindcss";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: 'media',
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        roboto: ['"Roboto"', 'sans-serif'],
        lora: ['"Lora"', 'serif'],
        custom: ['"CustomFont"', 'monospace'], 
        mono: ['"JetBrains Mono"', 'monospace'], 
        montserrat: ['"Montserrat"', 'sans-serif'],
        regularFont: ['"regularFont"', 'sans-serif'],
        Rampart: ["Rampart One", "cursive"],
        macondo: ["Macondo Swash Caps", "cursive"],
        griffy: ["Griffy", "cursive"],
        sp:["Special Elite", "serif"],
        nova: ["Nova Oval", "serif"],
        neuton : ["Neuton"  , "serif"],
        iansui  : ["Iansui" , "serif"],
        instru: ["Instrument Serif" , "serif"]
      },
      // tailwind.config.js
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
      },
      animation: {
        'bounce-x': 'bounce-x 1s infinite',
}
    },
  },
  plugins: [],
} satisfies Config;
