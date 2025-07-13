/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6F4E37',    // Coffee Brown
        'secondary': '#A0522D',  // Sienna
        'accent': '#F4A460',     // Sandy Brown
        'background': '#FFF8E1', // Cream
        'text-dark': '#3D2B1F',  // Dark Brown
        'text-light': '#F5F5DC', // Beige
      },
      fontFamily: {
        'serif': ['Merriweather', 'serif'],
        'sans': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 