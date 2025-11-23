/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0a0a', // Deep Black/Gray
          800: '#121212', // Slightly lighter for cards
          100: '#f5f5f5', // Light mode background
          50: '#ffffff',  // Light mode card
        },
        neon: {
          500: '#39ff14', // Neon Green
          400: '#4dff2e', // Lighter Neon
        },
      },
      animation: {
        'rgb-flow': 'rgb-flow 5s linear infinite',
      },
      keyframes: {
        'rgb-flow': {
          '0%, 100%': { borderColor: '#39ff14', color: '#39ff14' }, // Green
          '33%': { borderColor: '#00ffff', color: '#00ffff' },      // Cyan/Blue
          '66%': { borderColor: '#ff00ff', color: '#ff00ff' },      // Magenta/Purple
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
