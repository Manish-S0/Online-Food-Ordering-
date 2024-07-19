/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/header_img.png')",
      },
      animation: {
        'fade-in': 'fade-in 1s ease-in-out',
      },
    },
  },
  plugins: [],
}