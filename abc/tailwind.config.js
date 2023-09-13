/** @type {import('tailwindcss').Config} */

const { nextui } = require('@nextui-org/react')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        coral: {
          50: '#fffaf5',
          100: '#fff0e0',
          200: '#ffd6b3',
          300: '#ffb47a',
          400: '#ff9152',
          500: '#fe661b',
          600: '#f74808',
          700: '#ce3309',
          800: '#a82c10',
          900: '#872512',
          950: '#501107',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#ff8b46',
              foreground: '#ffffff',
            },
            secondary: {
              DEFAULT: '#161616',
              foreground: '#ffffff',
            },
          },
        },
      },
    }),
  ],
}
