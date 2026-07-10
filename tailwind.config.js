/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0C231A",      // deepest emerald (nav, favicon, text on gold)
        base2: "#1C4032",     // mid emerald
        accent: "#D9A441",    // gold
        accentlight: "#EBC272",
        accentdark: "#B9862E",
        panelgray: "#4A4F45", // warm gray-green (contact form panel)
      },
      fontFamily: {
        body: ["'Poppins'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glowaccent: "0 0 24px rgba(217,164,65,.35)",
      },
    },
  },
  plugins: [],
};
