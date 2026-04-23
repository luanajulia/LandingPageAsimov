// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#A1FD4B',
        'brand-dark': '#0F121C',
        'brand-light-bg': '#F5F5F7',
      },
      fontFamily: {
        'sans': ['Space Grotesk', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        'heading': ['Space Grotesk', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}