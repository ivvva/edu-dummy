/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        'trispace': ['Trispace']
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translatey(0px)' },
          '50%': { transform: 'translatey(-10px)' }
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite'
      },
    },
  },
  plugins: [],
}
