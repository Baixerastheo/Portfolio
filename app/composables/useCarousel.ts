import { ref, onMounted, onUnmounted } from 'vue'

export function useCarousel(items: any[], autoPlayInterval: number = 3000) {
  const currentIndex = ref(0)
  const isAutoPlay = ref(true)
  const autoPlayIntervalRef = ref<number | null>(null)

  // Fonction pour passer au projet suivant
  const nextProject = () => {
    currentIndex.value = (currentIndex.value + 1) % items.length
  }

  // Fonction pour passer au projet précédent
  const prevProject = () => {
    currentIndex.value = currentIndex.value === 0 ? items.length - 1 : currentIndex.value - 1
  }

  // Fonction pour aller à un projet spécifique
  const goToProject = (index: number) => {
    currentIndex.value = index
  }

  // Démarrer l'autoplay
  const startAutoPlay = () => {
    stopAutoPlay()
    autoPlayIntervalRef.value = setInterval(nextProject, autoPlayInterval)
  }

  // Arrêter l'autoplay
  const stopAutoPlay = () => {
    if (autoPlayIntervalRef.value) {
      clearInterval(autoPlayIntervalRef.value)
      autoPlayIntervalRef.value = null
    }
  }

  // Toggle autoplay
  const toggleAutoPlay = () => {
    isAutoPlay.value = !isAutoPlay.value
    if (isAutoPlay.value) {
      startAutoPlay()
    } else {
      stopAutoPlay()
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

  return {
    currentIndex,
    isAutoPlay,
    nextProject,
    prevProject,
    goToProject,
    toggleAutoPlay,
    handleMouseEnter,
    handleMouseLeave
  }
}

