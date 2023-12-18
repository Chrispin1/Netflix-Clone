/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily:{
       'nsans-light':['Nsans Light'],
       'nsans-medium':['Nsans Medium'],
       'nsans-bold':['Nsans Bold'],
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};