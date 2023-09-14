/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html","./public/js/*.js","node_modules/preline/dist/*.js"],
  theme: {
    container:{
      center: true,
      padding: '16px'
    },
    extend: {
      fontFamily:{
        inter:['inter'],
      },
      animation:{
        'spinku':'spin 3s linear infinite'
      },
      colors: {
        ferdi: '#fbbf24',
        coffe: '#c0ffee',
        },
    },
  },
  plugins: [require('preline/plugin'),],
}

