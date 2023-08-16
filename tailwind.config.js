/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#74C7FE',
        secondary: '#3b82f6',
        tertiary: '#6EE7B7',
        tertdark: '#fb923c',
        dark: '#222743',
        darker: '#1d1f37',
        darkest: '#141627',
        ogbg: '#141627',
        oldbg: '#0E1937',
        cyan: '#67E8F9',
        emerald: '#6EE7B7',
        red: '#FB7185',
      },
      fontFamily: {
        quicksand: 'Quicksand',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}
