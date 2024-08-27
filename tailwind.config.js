/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "bigger-mobile": "33.8125rem",
        tablet: "40.0625rem",
        desktop: "64.0625rem",
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
        75: "18.75rem",
      },
      backgroundPosition: {
        "cafe-position": "15% 50%",
      },
      padding: {
        0.5: "0.125rem",
      },
      maxWidth: {
        "45ch": "45ch",
      },
    },
  },
  plugins: [],
};
