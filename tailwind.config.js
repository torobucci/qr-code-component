/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        lightGrey:'hsl(212, 45%, 89%)',
        grayishBlue:'hsl(220, 15%, 55%)',
        darkBlue: 'hsl(218, 44%, 22%)',
      },
      screen:{
         sm: '375px'
      },
      fontFamily: {
        outfit: ['Outfit']
      }

    },
  },
  plugins: [],
}

