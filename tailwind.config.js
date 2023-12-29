/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 3s ease-in-out infinite",
      },
      fontFamily: {
        display: ["Bebas Neue", "sans-serif"],
        regular: ["Montserrat", "sans-serif"],
      },
      colors: {
        lightGrey: "#D1D7E0",
        purple1: "#802BB1",
        purple2: "#2D283E",
        mediumGray: "#564F6F",
        darkerGray: "#4C495D",
        tangerine: "##FA5D29",
      },
      backgroundImage: {
        "purple-pattern": "url('./public/bg-pattern.jpeg')",
        moon: "url('./public/moon.jpeg')",
        "moon-icon": "url('./public/moon-icon.png')",
      },
      backgroundColor: {
        html: "#000",
        body: "#000",
      },
    },
    plugins: [],
  },
};
