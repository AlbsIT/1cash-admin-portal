/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*{js,jsx,ts,tsx}"
  ], 
  theme: {
    extend: {
      colors: {
        "primary-accent": "#dcfce7"
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["emerald"],
    darkTheme: "emerald"
  }
}
