/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',          // enable "dark:" variants via a root class
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:   '#FF6B6B',
        secondary: '#4ECDC4',
        accent:    '#5568FE',
        section:   {
          light: '#F5F7FF',
          dark:  '#1E1F29',
        },
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%':      { 'background-position': '100% 50%' },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
      },
    },
  },
}
