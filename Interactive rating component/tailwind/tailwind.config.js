/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",           // your root HTML
      "./src/**/*.{html,js,css}"// anything under src/
    ],
    theme: {
      extend: {
        fontFamily: {
          overpass: ['Overpass'],
        }
      },
    },
    plugins: [],
  }
  