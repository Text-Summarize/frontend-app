/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#40c4a7',
        background: '#f0faf7',
        text: '#2d2d5f',
      },
    },
  },
  plugins: [],
};
