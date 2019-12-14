export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Rule 34 App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'App to enjoy all Rule 34 sites combined in a mobile-friendly experience',
      },
    ],
    noscript: [
      {
        innerHTML:
          'This website requires JavaScript, please enable it to continue',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Customize the splash loading indicator
   */
  loadingIndicator: {
    name: 'cube-grid',
    color: '#181a1b',
    background: 'linear-gradient(152deg, #9b9be0 38%, #00d4ff 100%)',
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vuex-persist.js', mode: 'client', ssr: false },
    { src: '~/plugins/v-lazy.js', mode: 'client', ssr: false },
    { src: '~/plugins/insights.js', mode: 'client', ssr: false },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** TailwindCSS settings
   */
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '~/assets/app.scss',
  },
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', 'nuxt-purgecss', '@nuxtjs/sitemap'],
  /*
   ** Progressive web app
   */
  pwa: {
    manifest: {
      name: 'Rule 34 App',
      short_name: 'Rule 34 App',
      lang: 'en',
      theme_color: '#181a1b',
      background_color: '#181a1b',
    },
    meta: {
      /* meta options */
      ogHost: 'https://r34.app',
      mobileAppIOS: true,
    },
  },
  /*
   ** PurgeCSS config
   */
  purgeCSS: {
    // whitelist: ['defaults-and-this-class']
    whitelistPatterns: [/active/, /nsfw-disabled/, /fade/, /enter/, /leave/],
  },
  /*
   ** Sitemap configuration
   */
  sitemap: {
    hostname: 'https://r34.app',
    gzip: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true,
    },
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // Necessary for CSS Purge
    extractCSS: true,

    //  Remove console.log everywhere
    terser: {
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
    // eslint-disable-next-line no-unused-vars
    extend(config, { isClient }) {
      // if (isClient) {
      //   config.devtool = "source-map";
      // }
    },
  },
}
