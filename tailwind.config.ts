import type { Config } from "tailwindcss";
export default {
  darkMode: 'class', // disabed dark mode for now
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
      } ,
      fontFamily: {
        macondo: ["Macondo Swash Caps", "cursive"],
        iansui  : ["Iansui" , "serif"],
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
},

    },
  },
  plugins: [],
} satisfies Config;
