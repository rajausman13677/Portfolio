import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#f4f4f0',
        'accent': '#c6ff3d',
        'text-white': '#ffffff',
        'text-dark': '#0a0a0a',
        'text-muted': '#8a8a8a',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
