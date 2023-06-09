/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif']
    },
    screens: {
      'xxs': '420px',
      'xs':  '541px',
      'md': '880px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [],
}
