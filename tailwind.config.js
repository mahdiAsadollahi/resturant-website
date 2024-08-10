/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'segeo700': ['segeo700'],
        'inter700': ['inter700'],
        'inter': ['inter'],
        'segeo': ['segeo']
      }
    },
  },
  plugins: [],
}