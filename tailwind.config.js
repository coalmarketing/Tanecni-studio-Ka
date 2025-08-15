/** @type {import('tailwindcss').Config} */
import fluid, { extract, fontSize, screens } from 'fluid-tailwind'
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: "selector",
  content: {
    files: ["./src/**/*.{html,njk,js}"],
    extract,
  },
  theme: {
    fontSize: fontSize,
    screens: screens,
    extend: {
      fontFamily: {
        "sans": ["Outfit", defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: "#FF8931",
        secondary: "#0062D8",
        background: "#231F20",
        "accent-primary": "#E46100",
        "accent-secondary": "#002756"
      },
      borderRadius: {
        "4xl": "2rem"
      }
    },
  },
  plugins: [
    fluid,
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}