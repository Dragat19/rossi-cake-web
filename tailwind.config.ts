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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        brusher: ['Brusher', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      animation: {
        fade: 'fadeIn .6s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      backgroundImage: {
        'parallax': "url('/images/cookies-stack.avif')",
      }
    },
  },
  plugins: [],
} satisfies Config;
