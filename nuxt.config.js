const env = require("dotenv").config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  router: {
    base: '/kurmaeva/'
  },
  head: {
    title: 'Юрист Курмаева М.В.',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'author', content: 'Владислав Курмаев' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: 'Интернет приемная профессионального юриста Курмаевой Марии Владимировны' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: 'юрист,адвокат,юридическая помощь,курмаева,профессиональный юрист' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  env: env.parsed,
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css',
    '~/styles/index.scss',
    'swiper/dist/css/swiper.css'
  ],

  styleResources: {
    scss: ['./styles/*.scss']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './plugins/vue-awesome-swiper.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    'nuxt-gsap-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/axios',
    'vue-toastification/nuxt',
  ],

  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-agile']
  }
}
