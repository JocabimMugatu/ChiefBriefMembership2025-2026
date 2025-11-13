/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        garnet: {
          DEFAULT: '#782F40',
          dark: '#5D1725',
          light: '#9D4F5F',
        },
        gold: {
          DEFAULT: '#CEB888',
          dark: '#B39A5C',
          light: '#E8D7B0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
