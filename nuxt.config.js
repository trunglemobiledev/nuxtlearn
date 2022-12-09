export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'gcapp',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // Simple usage
    '@nuxtjs/vuetify',
  ],

  vuetify: {
    /* module options */
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/auth-next',
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: process.env.API_URL
  },

  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        localStorage: {
          prefix: 'auth.'
        },
        token: {
          prefix: 'access_token.',
          property: 'access_token',
          maxAge: 86400,
          type: 'Bearer'
        },
        refreshToken: {
          prefix: 'refresh_token.',
          property: 'refresh_token',
          data: 'refresh_token',
          maxAge: 60 * 60 * 24 * 15
        },
        user: {
          property: 'user',
          autoFetch: true
        },
        endpoints: {
          login: { url: '/login', method: 'post' },
          refresh: { url: '/token/refresh/', method: 'post' },
          user: { url: '/user', method: 'get' },
          logout: { url: '/logout', method: 'post' },
          getlist_job: { url: '/admin/bai-dang-tuyen', method: 'get' },
          get_user: { url: 'admin/user/', method: 'get' },
        },
      }
    }
  },
  routes: {
    middleware: 'auth',
    routes: [
      {
        name: 'index',
        path: '/',
        component: 'pages/index.vue'
      },
      {
        name: 'product',
        path: '/product',
        component: 'pages/product/index.vue'
      },
      {
        name: 'product-one',
        path: '/product/one',
        component: 'pages/product/one.vue'
      }
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },


}
