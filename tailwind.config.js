/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pink-light": "var(--pink-light)",
        "pink-primary": "var(--pink-primary)",
        "pink-secondary": "var(--pink-secondary)",
        "pink-darker": "var(--pink-darker)",
        "red-dark": "var(--red-dark)",
      },
      fontSize: {
        'h1': '2.5rem',
        'h2': '2rem',
        'h3': '1.75rem',
        'h4': '1.5rem',
        'h5': '1.25rem',
        'h6': '1rem',
      },
      lineHeight: {
        'h1': '1.2',
        'h2': '1.3',
        'h3': '1.4',
        'h4': '1.5',
        'h5': '1.6',
        'h6': '1.7',
      },
      margin: {
        'heading': '0.5rem 0',
      },
    },
  },
  plugins: [],
}