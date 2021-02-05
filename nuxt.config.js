export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@assets/scss/style.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@plugins/element-ui',
    '@plugins/vue-moment',
    '@plugins/vue2-filters',
    '@plugins/vue-lazyload',
    '@plugins/vue-scrollto',
    '@plugins/vue-the-mask',
    '@plugins/vuelidate',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/svg-sprite',
    [
      'nuxt-i18n',
      {
        locales: [{code: 'en', file: 'en.js'}, {code: 'ru', file: 'ru.js'}],
        lazy: true,
        langDir: 'i18n/',
        defaultLocale: 'en',
        detectBrowserLanguage: {
          alwaysRedirect: false,
          fallbackLocale: 'en',
          onlyOnRoot: true,
          onlyOnNoPrefix: false,
          useCookie: true,
          cookieKey: 'i18n_redirected',
          cookieDomain: null,
          cookieCrossOrigin: true,
          cookieSecure: false,
        },
        strategy: 'no_prefix',
      }
    ],
  ],
  /*
 ** svgSprite module configuration
 ** See https://www.npmjs.com/package/@nuxtjs/svg-sprite
 */
  svgSprite: {
    input: '~/assets/icons',
    output: '~/assets/icons-gen'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
