<script setup lang="ts">
import { useSeo } from '~/composables/useSeo'

// SEO Configuration
useSeo({
  title: 'À propos de moi',
  description: 'Découvrez mon parcours en tant que développeur junior, mes compétences techniques, et ma passion pour le développement web moderne.',
  keywords: ['à propos', 'qui suis-je', 'développeur junior', 'compétences développeur', 'parcours développeur'],
  image: '/og-image.png'
})
</script>

<template>
  <div class="about-page">
    <section class="about-hero">
      <div class="container">
        <h1>À propos de moi</h1>
        <p>Je suis un développeur passionné par le web moderne.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  min-height: 100vh;
  padding: 2rem;
}

.about-hero {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.about-hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-white);
}

.about-hero p {
  font-size: 1.2rem;
  color: var(--text-muted);
}
</style>
