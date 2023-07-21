/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#74C7FE',
        secondary: '#9BF3FF',
        tertiary: '#ff855f',
        dark: '#222743',
        darker: '#1d1f37',
        darkest: '#0C121F',
      },
      fontFamily: {
        quicksand: 'Quicksand',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}
