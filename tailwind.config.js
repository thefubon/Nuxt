module.exports = {
  darkMode: 'class', // static/js/dark-top.js, static/js/dark-bottom.js
  content: [
    "./components/**/*.{js,vue,ts}",
    "./content/**/*.md",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      
    },
    darkSelector: '.dark-mode',
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-dark-mode')(),
    require('tw-elements/dist/plugin')
  ],
}