export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "calendar-blocking-statistics",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  // Loading bar color
  loading: {
    color: "blue",
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/node_modules/bootstrap/dist/css/bootstrap.min.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next"],

  //Authentication
  auth: {
    strategies: {
      google: {
        clientId:
          "220477538628-jcl03pt7phagplt70roh1g8ejdvfo0sa.apps.googleusercontent.com",
        codeChallengeMethod: "",
        responseType: "token id_token",
        endpoints: {
          token: "http://localhost:3000/user/google/", // some backend url to resolve your auth with google and give you the token back
          logout: "http://localhost:3000/logout",
        },
        token: {
          property: "access_token",
          type: "Bearer",
          maxAge: 1800,
        },
        refreshToken: {
          property: "refresh_token",
          maxAge: 60 * 60 * 24 * 30,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
