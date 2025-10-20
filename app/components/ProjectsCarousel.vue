<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Données des projets - vous pouvez facilement les modifier
const projects = ref([
  {
    id: 1,
    title: "E-commerce Vue.js",
    description: "Application e-commerce moderne avec Vue.js et Nuxt.js",
    image: "/project1.jpg",
    technologies: ["Vue.js", "Nuxt.js", "CSS3", "JavaScript"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Tableau de bord interactif avec graphiques en temps réel",
    image: "/project2.jpg",
    technologies: ["Vue.js", "Chart.js", "SCSS", "API REST"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Portfolio Responsive",
    description: "Site portfolio responsive avec animations CSS",
    image: "/project3.jpg",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "App Mobile PWA",
    description: "Application mobile progressive avec Vue.js",
    image: "/project4.jpg",
    technologies: ["Vue.js", "PWA", "Service Workers", "CSS Grid"],
    link: "#",
    github: "#"
  }
])

const currentIndex = ref(0)
const isAutoPlay = ref(true)
const autoPlayInterval = ref(null)

// Fonction pour passer au projet suivant
const nextProject = () => {
  currentIndex.value = (currentIndex.value + 1) % projects.value.length
}

// Fonction pour passer au projet précédent
const prevProject = () => {
  currentIndex.value = currentIndex.value === 0 ? projects.value.length - 1 : currentIndex.value - 1
}

// Fonction pour aller à un projet spécifique
const goToProject = (index) => {
  currentIndex.value = index
}

// Fonction pour démarrer/arrêter l'autoplay
const toggleAutoPlay = () => {
  isAutoPlay.value = !isAutoPlay.value
  if (isAutoPlay.value) {
    startAutoPlay()
  } else {
    stopAutoPlay()
  }
}

// Démarrer l'autoplay
const startAutoPlay = () => {
  stopAutoPlay()
  autoPlayInterval.value = setInterval(nextProject, 4000) // Change toutes les 4 secondes
}

// Arrêter l'autoplay
const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
    autoPlayInterval.value = null
  }
}

// Gestionnaires d'événements
const handleMouseEnter = () => {
  stopAutoPlay()
}

const handleMouseLeave = () => {
  if (isAutoPlay.value) {
    startAutoPlay()
  }
}

// Lifecycle hooks
onMounted(() => {
  if (isAutoPlay.value) {
    startAutoPlay()
  }
})

onUnmounted(() => {
  stopAutoPlay()
})
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
                <div class="image-placeholder">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                    <circle cx="9" cy="9" r="2"/>
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                  </svg>
                  <p>{{ project.title }}</p>
                </div>
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

<style scoped>
.projects-carousel {
  padding: 4rem 0 6rem;
  background: linear-gradient(135deg, var(--background-color) 0%, var(--surface-color) 100%);
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 60px rgba(0, 220, 130, 0.08), 
              0 0 120px rgba(0, 220, 130, 0.04),
              inset 0 1px 0 rgba(0, 220, 130, 0.1);
}

.carousel-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.carousel-header {
  text-align: center;
  margin-bottom: 3rem;
}

.carousel-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  letter-spacing: -0.025em;
}

.carousel-subtitle {
  font-size: 1.2rem;
  color: var(--text-muted);
  font-weight: 500;
}

.carousel-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  background: var(--surface-color);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-lg),
              0 0 30px rgba(0, 220, 130, 0.08),
              0 0 60px rgba(0, 220, 130, 0.04),
              0 0 90px rgba(0, 220, 130, 0.02);
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  display: flex;
  width: 100%;
}

.project-card {
  flex: 0 0 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
  align-items: center;
}

.project-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  width: 100%;
  max-width: 400px;
  height: 300px;
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  transition: var(--transition);
  box-shadow: var(--shadow-sm);
}

.image-placeholder:hover {
  border-color: var(--primary-color);
  transform: scale(1.02);
}

.image-placeholder svg {
  margin-bottom: 1rem;
  opacity: 0.7;
}

.image-placeholder p {
  font-size: 1rem;
  margin: 0;
  text-align: center;
}

.project-content {
  padding: 1rem;
}

.project-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-white);
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
}

.project-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.tech-tag {
  background: rgba(0, 220, 130, 0.1);
  color: var(--primary-color);
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(0, 220, 130, 0.2);
}

.project-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.project-link, .project-github {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: var(--transition);
}

.project-link {
  background: var(--primary-color);
  color: var(--background-color);
  box-shadow: var(--shadow-md);
  border-radius: 8px;
}

.project-link:hover {
  background: var(--primary-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.project-github {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-white);
  border: 1px solid var(--border-color);
}

.project-github {
  background: var(--surface-color);
  color: var(--text-white);
  border: 1px solid var(--border-color);
  border-radius: 8px;
}

.project-github:hover {
  background: var(--surface-color);
  border-color: var(--primary-color);
  color: var(--primary-color);
}

/* Navigation */
.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.7);
  border: none;
  color: var(--text-white);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  z-index: 10;
}

.carousel-nav:hover {
  background: rgba(76, 175, 80, 0.8);
  transform: translateY(-50%) scale(1.1);
}

.carousel-nav-prev {
  left: 1rem;
}

.carousel-nav-next {
  right: 1rem;
}

/* Indicateurs */
.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding: 1.5rem;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: var(--transition);
}

.indicator.active {
  background: var(--primary-color);
  transform: scale(1.2);
}

.indicator:hover {
  background: var(--primary-color);
}

/* Contrôles */
.carousel-controls {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.autoplay-toggle {
  background: rgba(0, 0, 0, 0.7);
  border: none;
  color: var(--text-white);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
}

.autoplay-toggle:hover {
  background: rgba(76, 175, 80, 0.8);
  transform: scale(1.1);
}

/* Responsive */
@media (max-width: 768px) {
  .project-card {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
  }
  
  .carousel-title {
    font-size: 2rem;
  }
  
  .project-title {
    font-size: 1.5rem;
  }
  
  .project-description {
    font-size: 1rem;
  }
  
  .image-placeholder {
    height: 200px;
  }
  
  .carousel-nav {
    width: 40px;
    height: 40px;
  }
  
  .carousel-nav-prev {
    left: 0.5rem;
  }
  
  .carousel-nav-next {
    right: 0.5rem;
  }
}

@media (max-width: 480px) {
  .carousel-container {
    padding: 0 1rem;
  }
  
  .project-card {
    padding: 1rem;
  }
  
  .project-actions {
    flex-direction: column;
  }
  
  .project-link, .project-github {
    justify-content: center;
  }
}
</style>
