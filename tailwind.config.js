/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm-max': { max: '682px' },
        'md-max': { max: '846px' },
        'lg-max': { max: '1080px' },
        'xl-max': { max: '1440px' },
        '2xl-max': { max: '1638px' },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
