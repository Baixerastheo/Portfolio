import { useHead } from '#app'

export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  image?: string
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  author?: string
}

export function useSeo(data: SEOData) {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl
  const siteName = config.public.siteName

  // Title avec le nom du site si différent de la homepage
  const fullTitle = data.title.includes(siteName) 
    ? data.title 
    : `${data.title} | ${siteName}`

  // URL complète avec image
  const imageUrl = data.image 
    ? (data.image.startsWith('http') ? data.image : `${siteUrl}${data.image}`)
    : `${siteUrl}/og-image.png`

  // Keywords en string
  const keywordsString = data.keywords?.join(', ') || 'développeur web, portfolio, vue.js, nuxt.js, typescript, javascript, développeur junior, frontend'

  // Configuration des meta tags
  useHead({
    title: fullTitle,
    meta: [
      // SEO de base
      { name: 'description', content: data.description },
      { name: 'keywords', content: keywordsString },
      { name: 'author', content: data.author || config.public.author },
      
      // Open Graph
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: data.description },
      { property: 'og:url', content: siteUrl + useRoute().path },
      { property: 'og:image', content: imageUrl },
      { property: 'og:type', content: data.type || 'website' },
      { property: 'og:site_name', content: siteName },
      { property: 'og:locale', content: 'fr_FR' },
      
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: data.description },
      { name: 'twitter:image', content: imageUrl },
      
      // Article meta (si type=article)
      ...(data.type === 'article' ? [
        { property: 'article:published_time', content: data.publishedTime || '' },
        { property: 'article:modified_time', content: data.modifiedTime || '' },
        { property: 'article:author', content: data.author || config.public.author }
      ] : [])
    ],
    link: [
      { rel: 'canonical', href: siteUrl + useRoute().path }
    ]
  })
}

