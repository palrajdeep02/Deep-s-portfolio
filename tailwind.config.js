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
          700: '#0d8000', // Dark Green for light mode
          600: '#10a000', // Medium Dark Green for light mode  
          500: '#39ff14', // Neon Green (dark mode)
          400: '#4dff2e', // Lighter Neon (dark mode)
        },
      },
      animation: {
        'rgb-flow': 'rgb-flow 5s linear infinite',
      },
      keyframes: {
        'rgb-flow': {
          '0%, 100%': { borderColor: '#0d8000', color: '#0d8000' }, // Dark Green for light mode
          '50%': { borderColor: '#10a000', color: '#10a000' },      // Medium Dark Green for light mode
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 10px rgba(13, 128, 0, 0.5), 0 0 20px rgba(13, 128, 0, 0.3)', // Dark green glow for light mode
      },
    },
  },
  plugins: [],
}
