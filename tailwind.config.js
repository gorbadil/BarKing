/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        brightRed: "tomato",
        brightRedLight: "#f6866a",
        brightRedSupLight: "#fdece7",
        darkBlue: "#242d52",
        darkGrayishBlue: "#9095a7",
        veryDarkBlue: "#1d1e25",
        veryPaleRed: "#ffefeb",
        veryLightGray: "#fafafa",
      },
    },
  },
  plugins: [],
};
