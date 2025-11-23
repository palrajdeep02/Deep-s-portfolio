/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0a0a', // Deep Black/Gray
          800: '#121212', // Slightly lighter for cards
        },
        neon: {
          500: '#39ff14', // Neon Green
          400: '#4dff2e', // Lighter Neon
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 10px rgba(57, 255, 20, 0.5), 0 0 20px rgba(57, 255, 20, 0.3)',
      },
    },
  },
  plugins: [],
}
