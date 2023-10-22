/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1280px',
      'bigScreen': '1920px',
    },
  extend: {
    fontFamily: {
      dancingScript: ['"Dancing Script"', ...defaultTheme.fontFamily.sans],
      roboto:['"Roboto"', ...defaultTheme.fontFamily.sans],
      cookie:['"Cookie"', ...defaultTheme.fontFamily.sans]
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
    docsColor: "#EEEEEE",
  }
  },
  plugins: [],
  }
  
