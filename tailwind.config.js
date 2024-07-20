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
    screens: {
      'lg': {'max': '1300px'},
      'md': {'max': '900px'},
      'sm': {'max': '700px'},
      'xs': {'max': '559px'},
      'xxs': {'max': '400px'},
    }
  },
  plugins: [],
}