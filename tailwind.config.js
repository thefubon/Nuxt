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
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            figcaption: {
              color: theme("colors.gray.900")
            },
            a: {
              color: theme("colors.indigo.600"),
              "&:hover": {
                color: theme("colors.indigo.700")
              },
              "*": {
                color: theme("colors.indigo.600")
              },
              code: { color: theme("colors.indigo.600") }
            },
            "strong > a, a > strong": {
              color: theme("colors.indigo.600")
            },
            code: {
              padding: "3px 5px",
              borderRadius: 5,
              background: theme("colors.gray.100")
            },
            mark: {
              background: theme("colors.pink.100")
            }
          }
        },
        dark: {
          css: {
            color: theme("colors.gray.400"),
            figcaption: {
              color: theme("colors.gray.400")
            },
            a: {
              color: theme("colors.indigo.400"),
              "&:hover": {
                color: theme("colors.indigo.300")
              },
              code: { color: theme("colors.indigo.400") },
              "*": {
                color: theme("colors.indigo.400"),
                "&:hover": {
                  color: theme("colors.indigo.300")
                }
              }
            },
            "strong > a, a > strong": {
              color: theme("colors.indigo.400")
            },
            blockquote: {
              borderLeftColor: theme("colors.gray.700"),
              color: theme("colors.gray.300")
            },
            h1: {
              color: theme("colors.white")
            },
            "h2,h3,h4": {
              color: theme("colors.gray.100")
            },
            code: {
              padding: "3px 5px",
              borderRadius: 5,
              color: theme("colors.white"),
              background: theme("colors.gray.800")
            },
            "pre > code": {
              background: "none",
              padding: 0
            },
            hr: { borderColor: theme("colors.gray.700") },
            strong: { color: theme("colors.white") },
            thead: {
              color: theme("colors.gray.100")
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700")
              }
            },
            mark: {
              background: theme("colors.yellow.100")
            }
          }
        }
      })
    },
    darkSelector: '.dark-mode',
  },
  variants: {
    extend: {
      typography: ["dark"]
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-dark-mode')(),
    require('tw-elements/dist/plugin')
  ],
}