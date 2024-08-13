/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pink-primary": "var(--pink-primary)",
        "pink-secondary": "var(--pink-secondary)",
        "red-dark": "var(--red-dark)",
      },
    },
  },
  plugins: [],
}