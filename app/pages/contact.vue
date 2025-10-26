<script setup lang="ts">
import ContactForm from '~/components/ContactForm.vue'
import { useSeo } from '~/composables/useSeo'

// SEO Configuration
useSeo({
  title: 'Contact',
  description: 'Contactez Baixeras Théo pour discuter de votre projet de développement web. Développeur junior spécialisé en Vue.js, Nuxt.js et TypeScript.',
  keywords: ['contact développeur', 'devis développement', 'contacter développeur web', 'portfolio contact'],
  image: '/og-image.png'
})
</script>

<template>
  <div class="contact-page">
    <ContactForm />
  </div>
</template>

<style scoped>
.contact-page {
  min-height: calc(100vh - 80px);
}
</style>

