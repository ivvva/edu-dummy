/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        'trispace': ['Trispace'],
        'montserrat': ['Montserrat']
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translatey(0px)' },
          '50%': { transform: 'translatey(-10px)' }
        },
        right: {
          '0%, 100%': { transform: 'translatex(0px)' },
          '50%': { transform: 'translatex(10px)' }
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        right: 'right 1.5s ease-out infinite'
      },
    },
  },
  plugins: [],
}
