// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // Configuration CSS
  css: ['~/assets/styles/styles.globale.css'],
  
  // Configuration pour le développement
  devServer: {
    port: 3000
  }
})
