/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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