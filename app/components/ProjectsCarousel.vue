<script setup>
import { ref } from 'vue'
import { carouselProjects } from '~/data/carousel-projects'
import { useCarousel } from '~/composables/useCarousel'

const projects = ref(carouselProjects)

const {
  currentIndex,
  isAutoPlay,
  nextProject,
  prevProject,
  goToProject,
  toggleAutoPlay,
  handleMouseEnter,
  handleMouseLeave
} = useCarousel(projects.value, 3000)
</script>

<template>
  <section class="projects-carousel">
    <div class="carousel-container">
      <div class="carousel-header">
        <h2 class="carousel-title">Mes Projets</h2>
        <p class="carousel-subtitle">Découvrez mes réalisations récentes</p>
      </div>

      <div 
        class="carousel-wrapper"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <!-- Boutons de navigation -->
        <button 
          class="carousel-nav carousel-nav-prev"
          @click="prevProject"
          aria-label="Projet précédent"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        <button 
          class="carousel-nav carousel-nav-next"
          @click="nextProject"
          aria-label="Projet suivant"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>

        <!-- Conteneur des projets -->
        <div class="carousel-track">
          <div 
            class="carousel-slide"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div 
              v-for="project in projects" 
              :key="project.id"
              class="project-card"
            >
              <div class="project-image">
                <img :src="project.image" :alt="project.title" />
              </div>
              
              <div class="project-content">
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-description">{{ project.description }}</p>
                
                <div class="project-technologies">
                  <span 
                    v-for="tech in project.technologies" 
                    :key="tech"
                    class="tech-tag"
                  >
                    {{ tech }}
                  </span>
                </div>
                
                <div class="project-actions">
                  <a :href="project.link" class="project-link" target="_blank">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15,3 21,3 21,9"/>
                      <line x1="10" x2="21" y1="14" y2="3"/>
                    </svg>
                    Voir le projet
                  </a>
                  <a :href="project.github" class="project-github" target="_blank">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                      <path d="M9 18c-4.51 2-5-2-7-2"/>
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Indicateurs de pagination -->
        <div class="carousel-indicators">
          <button 
            v-for="(project, index) in projects" 
            :key="index"
            class="indicator"
            :class="{ active: currentIndex === index }"
            @click="goToProject(index)"
            :aria-label="`Aller au projet ${index + 1}`"
          ></button>
        </div>

        <!-- Contrôle autoplay -->
        <div class="carousel-controls">
          <button 
            class="autoplay-toggle"
            @click="toggleAutoPlay"
            :aria-label="isAutoPlay ? 'Arrêter le défilement automatique' : 'Démarrer le défilement automatique'"
          >
            <svg v-if="isAutoPlay" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
              <line x1="9" x2="9" y1="9" y2="15"/>
              <line x1="15" x2="15" y1="9" y2="15"/>
            </svg>
            <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="5,3 19,12 5,21"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/styles/carousel.css"></style>
