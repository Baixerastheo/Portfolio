// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // Configuration CSS
  css: [
    '~/assets/styles/global.css',
    '~/assets/styles/header.css',
    '~/assets/styles/hero.css',
    '~/assets/styles/carousel.css',
    '~/assets/styles/footer.css'
  ],
  
  // Configuration pour le développement
  devServer: {
    port: 3000
  }
})
