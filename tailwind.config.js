/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "bigger-mobile": "541px",
        tablet: "641px",
        desktop: "1025px",
      },
      fontSize: {
        "2xs": ["0.625rem", "1rem"],
        base: ["1rem", "1.3rem"],
        heading: ["2rem", "2.25rem"],
      },
      fontFamily: {
        sans: ['"DMSans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        shark: "#1B1D1F",
        woodsmoke: "#111315",
        palesky: "#6F757C",
        surf: "#BEE3CC",
        bridalhealth: "#FEF7EE",
        creamcan: "#F6C768",
        terracotta: "#ED735D",
      },
      height: {
        75: "300px",
      },
    },
  },
  plugins: [],
};
