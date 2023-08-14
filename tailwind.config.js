/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#74C7FE',
        secondary: '#3b82f6',
        tertiary: '#FDBA74',
        tertdark: '#fb923c',
        dark: '#222743',
        darker: '#1d1f37',
        darkest: '#141627',
        ogbg: '#0C121F',
        oldbg: '#0E1937',
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
