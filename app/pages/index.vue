<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue'
import ProjectsCarousel from '~/components/ProjectsCarousel.vue'
import JourneySection from '~/components/JourneySection.vue'
import { useSeo } from '~/composables/useSeo'

// SEO Configuration
useSeo({
  title: 'Baixeras Théo - Développeur Junior Full Stack',
  description: 'Portfolio de Baixeras Théo, développeur junior passionné par la création d\'expériences web innovantes avec Vue.js, Nuxt.js et TypeScript. Découvrez mes projets et compétences.',
  keywords: ['développeur web', 'portrait', 'Vue.js', 'Nuxt.js', 'TypeScript', 'développeur junior', 'frontend', 'développeur full stack', 'portfolio développeur'],
  image: '/pf_img.png',
  type: 'profile'
})
</script>

<template>
  <div class="homepage">
    <HeroSection />
    <ProjectsCarousel />
    <JourneySection />
  </div>
</template>

<style scoped>
.homepage {
  min-height: 100vh;
}
</style>
