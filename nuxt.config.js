export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt / Tailwind CSS / View UI',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    bodyAttrs: {
      class: 'antialiased'
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css',
    // View UI Components
    '~/assets/css/components/iview.css',
    '~/assets/css/components/modal.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/view-ui',
    '~/plugins/vue-scrollactive',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/i18n',
    'nuxt-password-protect',
  ],

  pwa: {
    icon: false // disables the icon module
  },

  router: {
    // middleware: ['password-protect'] // Enable to protect the entire website
  },

  passwordProtect: {
    enabled: true,
    formPath: '/password',
    password: 'pass',
    tokenSeed: 101010,
    queryString: '_pw',
    cookieName: '_password',
    cookie: {
      prefix: '',
      expires: 5
    },
    ignoredPaths: ['/public-page']
  },

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },

  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome'
        },
        fr: {
          welcome: 'Bienvenue'
        },
        es: {
          welcome: 'Bienvenido'
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    publicPath: 'assets',
  },

  generate: {
    dir: 'dist',
    fallback: '404.html'
  },

  cli: {
    badgeMessages: ['Made in Fubon | http://thefubon.com'],
    bannerColor: 'yellow'
  },

  loading: {
    color: '#ffcc00',
    height: '2px'
  },

  // transition: {
  //   name: 'my-layouts',
  //   mode: 'out-in',
  // },
}
