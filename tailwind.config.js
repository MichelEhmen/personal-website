/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // primary: '#f5d079',
        primary: colors.amber[600],
        secondary: colors.stone[100],
        rock: colors.stone[600],
        sand: '#f8df9e'
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
