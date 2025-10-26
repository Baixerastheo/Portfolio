<script setup lang="ts">
import { useSeo } from '~/composables/useSeo'

// SEO Configuration
useSeo({
  title: 'Mes Projets',
  description: 'Découvrez mes projets de développement web, mes réalisations en Vue.js, Nuxt.js et TypeScript, et l\'évolution de mes compétences techniques.',
  keywords: ['projets développeur', 'portfolio projets', 'développeur Vue.js', 'projets Nuxt.js', 'développeur TypeScript', 'réalisations développeur'],
  image: '/og-image.png'
})
</script>

<template>
  <div class="projects-page">
    <!-- Header avec intro groupée -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">Mon Parcours</h1>
        <p class="page-subtitle">
          Mes réalisations et l'évolution de mes compétences en développement
        </p>
        <p class="intro-text">
          En tant que développeur junior, chaque projet représente une opportunité d'apprendre et de progresser. 
          Voici mes réalisations et ce que je retire de chacune.
        </p>
      </div>
    </section>

    <!-- Tableau des Technologies -->
    <TechnologiesSection />

    <!-- Section Evolution -->
    <EvolutionSection />

    <!-- Projets -->
    <ProjectsSection />

    <!-- Conclusion -->
    <section class="conclusion-section">
      <div class="container">
        <div class="conclusion-card">
          <h3 class="conclusion-title">La suite ?</h3>
          <p class="conclusion-text">
            Continuer à apprendre, à me challenger et à créer. Chaque ligne de code est une nouvelle opportunité 
            de m'améliorer et de devenir un meilleur développeur.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style src="~/assets/styles/projects.css"></style>
