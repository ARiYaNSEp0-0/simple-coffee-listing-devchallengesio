/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "640px",
        tablet: "1024px",
        desktop: "1280px",
      },
      fontSize: {
        "2xs": ["0.625rem", "1rem"],
        heading: ["2rem", "2.25rem"],
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
    },
  },
  plugins: [],
};
