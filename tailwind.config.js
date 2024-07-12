/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      colors: {
        "steel-blue": "var(--steel-blue)",
        "pink": "var(--pink)",
        "burly-wood": "var(--burly-wood)",
        "light-khaki": "var(--light-khaki)",
        "dark-sea": "var(--dark-sea)",
        "gold": "var(--pink-primary)"
      },
    },
  },
  plugins: [],
}