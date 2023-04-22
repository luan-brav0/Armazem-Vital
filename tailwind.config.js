/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./source/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
        'cBeige': '#E2E6C6',
        'cLightGreen': '#9BAC45',
        'cDarkGreen': '#82932C',
        'cDarkerGreen': '#4D5328',
    },
    extend: {},
  },
  plugins: [],
}

