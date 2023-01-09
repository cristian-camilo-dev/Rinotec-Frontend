/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif']
    },
    extend: {
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: '#292525',
        grisContenido: '#594D4D',
        verdeMarca: '#45Df38'
      }),
      textColor: {
        primary: '#292525',
        grisContenido: '#594D4D',
        verdeMarca: '#45Df38'
      }

    }
  },
  plugins: []
}
