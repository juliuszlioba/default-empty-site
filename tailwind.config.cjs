/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: colors.neutral,
      blue: colors.blue,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      rose: colors.rose,
    },
    extend: {
      backgroundSize: {
        "animate-gradient": "400%",
      },
      animation: {
        gradient: "gradient 5s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
      },
    },
  },
  plugins: [],
}
