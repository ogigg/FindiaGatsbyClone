const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/components/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      inter: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
