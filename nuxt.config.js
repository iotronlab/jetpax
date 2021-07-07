import minifyTheme from 'minify-css-string'
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Influencer Marketing Agency',
    title: 'JetPax',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Digital Marketing Agency connecting brands and influencers/content-creators.',
      },
      {
        name: 'google-site-verification',
        content: 'rrkzhm628_vVjbSOZXIrn1xiP2HGuwMn6QGwNNAyCVY',
      },
      {
        name: 'keywords',
        content: `digital marketing, influencer marketing, graphic designs, animations, seo, search engine marketing,
          social media campaigns, social media marketing`,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: '',
      },
    ],
    // script: [
    //   {
    //     hid: 'tawk.to',
    //     src: 'https://embed.tawk.to/60dddb4965b7290ac638eb61/1f9ha16m2',
    //     defer: true,
    //   },
    // ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  // {
  //   src: '~/plugins/tawk.js', ssr: false
  // },
  { src: '~/plugins/vee-validate.js', ssr: true },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',

    // '@nuxtjs/google-fonts',
    'nuxt-gsap-module',

  //   ...[
  //     "nuxt-social-meta",
  //     {
  //       url: "Site url",
  //       title: "Title",
  //       site_name: "Site name",
  //       description: "Site description",
  //       img: "icon.png",
  //       img_size: { width: "15", height: "15" },
  //       locale: "en_US",
  //       twitter: "@user",
  //       twitter_card: "summary_large_image",
  //       theme_color: "#theme-color",
  //     },
  //   ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/component-cache',
    '@nuxtjs/recaptcha',
    // '@nuxtjs/vee-validate'

  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:8000/api',
  },
  sitemap: {
    hostname: 'https://www.jetpax.org',
    gzip: true,
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
    },
  },

  recaptcha: {
    hideBadge: true, // Hide badge element (v3 & v2 via size=invisible)
    siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',    // Site key for requests
    version: 2,     // Version
    size: 'normal'        // Size: 'compact', 'normal', 'invisible' (v2)
  },

  // googleFonts: {
  //   families: {
  //     Ubuntu: true,
  //      Roboto: true,
  //     // 'Josefin+Sans': true,
  //     // Lato: [100, 300],
  //     // Raleway: {
  //     //   wght: [100, 400],
  //     //   ital: [100]
  //     // },
  //   },
  // },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: false,
    theme: {
      dark: true,
      options: {
        customProperties: false,
        variations: false,
        // themeCache: {
        //   get: (key) => localStorage.getItem(key),
        //   set: (key, value) => localStorage.setItem(key, value),
        // },
        minifyTheme,
      },

      themes: {
        light: {
          primary: '#6366F1',
          //   accent: colors.grey.darken3,
          secondary: '#9333EA',
          // info: colors.teal.lighten1,
          // warning: colors.amber.base,
          // error: colors.deepOrange.accent4,
          // success: colors.green.accent3,
          agency: '#4F46E5',
          creator: '#9333EA',
        },
        dark: {
          primary: '#6366F1',
          // accent: colors.grey.darken3,
          secondary: '#9333EA',
          // info: colors.teal.lighten1,
          // warning: colors.amber.base,
          // error: colors.deepOrange.accent4,
          // success: colors.green.accent3,
          agency: '#60A5FA',
          creator: '#C084FC',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate'],
    extractCSS: {
      ignoreOrder: true,
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
    analyze: {
      analyzerMode: 'static',
    },
    babel: {
      presets({ isClient }, preset) {
        if (isClient) {
          preset[1].targets = {
            browsers: [
              'Chrome >= 60',
              'Safari >= 10.1',
              'iOS >= 10.3',
              'Firefox >= 54',
              'Edge >= 15',
            ],
          }
        }
        return [preset]
      },
    },
  },
}

