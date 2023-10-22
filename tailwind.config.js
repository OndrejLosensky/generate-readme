/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    fontFamily: {
      dancingScript: ['"Dancing Script"', ...defaultTheme.fontFamily.sans]
    }
  },
  colors: {
    darkBg: "#332F39",
    whiteText: "#ffffff",
    darkText:"#111111",
    cardBg: "#202336",
    buttonColor: "#3A85F6",
    buttonHover: "#3268B9",
    copiedColor: "#66BD5F",
    outputColor: "#574D60",
  }
  },
  plugins: [],
  }
  
