/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'Top-Bg': "url('/assets/Bg.png')",
      },
      fontSize: {
        topSection: ['26px', '31px'],
      }
    },
  },
  plugins: [],
}
