export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt JS',
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
      class: 'antialiased text-slate-900'
    },
    script: [
      // { src: '/head.js' },
      // Supported since 1.0
      // { src: '/body.js', body: true },
      // { src: '/defer.js', defer: '' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css', // ailwind CSS, main
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/tw-elements.js', mode: 'client' }, // https://tailwind-elements.com/quick-start/
    '~/plugins/vue-scrollactive', // https://github.com/eddiemf/vue-scrollactive
    '~/plugins/password-protect',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/svg', // https://github.com/nuxt-community/svg-module
    '@nuxtjs/color-mode', // https://color-mode.nuxtjs.org/
  ],

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/pwa', // https://pwa.nuxtjs.org/
    '@nuxt/content', // https://content.nuxtjs.org/
    '@nuxtjs/i18n', // https://i18n.nuxtjs.org/
    'nuxt-password-protect', // https://github.com/stephenkr/nuxt-password-protect
  ],

  // Автоматически добавляет файл manifest.json с иконками и описанием для иконок в соц.сети
  pwa: {
    manifest: {
      theme_color: "#fafafa",
      name: "Nuxt JS",
    },
    icon: {
      fileName: "icon.png",
    },
  },

  router: {
    // middleware: ['password-protect'] // Возможность защиты всего веб-сайта
  },

  passwordProtect: {
    enabled: true,
    formPath: '/password',
    password: 'pass',
    tokenSeed: 101010,
    queryString: '_pw',
    cookieName: '_password',
    // cookie: {
    //   prefix: '',
    //   expires: 5
    // },
    // ignoredPaths: ['/public-page']
  },

  content: {
    markdown: {
      // https://content.nuxtjs.org/ru/configuration/#markdownprismtheme
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
        name: 'English'
      },
      {
        code: 'ru',
        iso: 'ru-Ru',
        file: 'ru-RU.js',
        name: 'Русский'
      },
    ],
    defaultLocale: 'ru',
    lazy: true,
    langDir: 'lang/',
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
