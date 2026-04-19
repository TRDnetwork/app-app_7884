/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F5F5DC',
        surface: '#E8DCC5',
        text: '#2F4F2F',
        'text-dim': '#6B5E50',
        accent: '#8B4513',
        'accent-alt': '#6F4E37',
        border: '#C8BFB3',
        success: '#4A6B3F',
        warning: '#C08F4A',
        error: '#9A3B38',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}