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
  },

  // Configuration des transitions de page
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'canonical', href: 'https://baixeras-theo.dev' }
      ],
      meta: [
        // SEO Basics
        { name: 'author', content: 'Baixeras Théo' },
        { name: 'robots', content: 'index, follow' },
        { name: 'language', content: 'French' },
        { name: 'theme-color', content: '#00dc82' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@baixerastheo' }
      ]
    }
  },

  // Configuration SEO
  runtimeConfig: {
    public: {
      siteUrl: 'https://baixeras-theo.dev',
      siteName: 'Baixeras Théo - Portfolio Développeur Junior',
      siteDescription: 'Portfolio de Baixeras Théo, développeur junior passionné par la création d\'expériences web innovantes et performantes.',
      author: 'Baixeras Théo',
      language: 'fr',
      // Configuration EmailJS
      emailjsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID || '',
      emailjsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
      emailjsPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
    }
  },

  // Route pour le sitemap
  nitro: {
    routeRules: {
      '/sitemap.xml': { headers: { 'Content-Type': 'application/xml' } }
    }
  }
})
