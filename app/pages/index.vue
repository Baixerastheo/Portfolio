<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue'
import ProjectsCarousel from '~/components/ProjectsCarousel.vue'
import JourneySection from '~/components/JourneySection.vue'
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
