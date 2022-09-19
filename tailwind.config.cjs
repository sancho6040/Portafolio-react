/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        'Quicksand': ['Quicksand'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'shade': {
          DEFAULT: '#333333',
          dark: '#2E2E2E'
        },
        'pacific-blue': {
          DEFAULT: '#0096C7',
          '50': '#80E0FF',
          '100': '#6BDBFF', 
          '200': '#42D1FF', 
          '300': '#1AC7FF', 
          '400': '#00B5F0', 
          '500': '#0096C7', 
          '600': '#006C8F', 
          '700': '#004157', 
          '800': '#00171F', 
          '900': '#000000'
        },
      },
    },
  },
  plugins: [],
}
