/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",

        "pink-light": "var(--color-pink-light)",
        "pink-secondary": "var(--color-pink-secondary)",
        "pink-primary": "var(--color-pink-primary)",
        "pink-dark": "var(--color-pink-dark)",

        "red-dark": "var(--color-red-dark)",

        text: "var(--color-text)",
        muted: "var(--color-text-muted)",

        border: "var(--color-border)",
      },

      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },

      fontSize: {
        h1: "2.5rem",
        h2: "2rem",
        h3: "1.75rem",
        h4: "1.5rem",
        h5: "1.25rem",
        h6: "1rem",
      },

      lineHeight: {
        h1: "1.2",
        h2: "1.3",
        h3: "1.4",
        h4: "1.5",
        h5: "1.6",
        h6: "1.7",
      },

      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
      },

      boxShadow: {
        soft: "var(--shadow-soft)",
      },

      maxWidth: {
        content: "var(--content-width)",
      },
    },
  },

  plugins: [],
};