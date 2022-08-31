/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: '#C1966B',
        foreground: '#21687F',
        comment: '#676e95',
        accent: '#2645A1',
        redish: '#C22323',
        orangish: '#EF7C00',
        yellowish: '#EFC12D',
        greenish: '#239E4A',
        bluish: '#0246AD',
        purplish: '#6614FF',
      },
    },
  },
  plugins: [],
}