/** @type {import('tailwindcss').Config} */
import { amber, stone } from 'tailwindcss/colors'

export const content = ['./src/**/*.{js,ts,jsx,tsx,mdx}']
export const theme = {
  extend: {
    colors: {
      // primary: '#f5d079',
      primary: amber[600],
      secondary: stone[100],
      rock: stone[600],
      sand: '#f8df9e'
    },
    fontSize: {
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem'
    },
    animation: {
      blob: 'blob 7s infinite'
    },
    keyframes: {
      blob: {
        '0%': {
          transform: 'translate(0px, 0px) scale(1)'
        },
        '33%': {
          transform: 'translate(30px, -50px) scale(1.1)'
        },
        '66%': {
          transform: 'translate(-20px, 20px) scale(0.9)'
        },
        '100%': {
          transform: 'translate(0px, 0px) scale(1)'
        }
      }
    }
  }
}
export const plugins = []
