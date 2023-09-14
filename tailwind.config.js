/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'body': ['"Rubik"', "Arial"],
      'sans': ['"Rubik"', "Arial"]
    },
    extend: {
      colors: {
        'primaryText': '#4C566A',
        'grassType': {
          text: '#8CAE70',
          bg: '#F3F6F0'
        }
      }
    },
  },
  plugins: [require('tailwind-bootstrap-grid')()],
}

