// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss'
  ],
  compatibilityDate: '2024-11-01',
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ['~/assets/styles.css'],
  eslint: {
    config: {
      stylistic: true
    }
  },
  devtools: { enabled: true }
})