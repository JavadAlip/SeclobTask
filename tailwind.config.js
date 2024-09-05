/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: '#006465', 
        bgcategory: '#dcf0f2',
      },
    },
  },
  plugins: [],
};
