/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {'pink' : '#c5afaf'},
    extend: {
      animation: {
      'spin-slow': 'spin 4s linear infinite',
    }
},
  },
  plugins: [],
}

