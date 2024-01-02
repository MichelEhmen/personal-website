/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.green[800],
        secondary: colors.slate[100]
      },
      fontSize: {
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem'
      }
    }
  },
  plugins: []
}
