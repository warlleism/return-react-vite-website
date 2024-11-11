/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-h-745': { 'raw': '(max-height: 745px)' },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}