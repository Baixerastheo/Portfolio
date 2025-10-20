<script setup>
import HeroSection from '~/components/HeroSection.vue'
import ProjectsCarousel from '~/components/ProjectsCarousel.vue'
</script>

<template>
  <div class="homepage">
    <HeroSection />
    <ProjectsCarousel />
  </div>
</template>

<style scoped>
.homepage {
  min-height: 100vh;
}
</style>
