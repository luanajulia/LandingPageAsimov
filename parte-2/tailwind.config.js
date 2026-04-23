/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPurple: '#A855F7',
        darkBg: '#0D0D0E',
      },
    },
  },
  plugins: [],
}