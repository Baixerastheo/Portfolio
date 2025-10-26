<template>
  <Transition name="loading">
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-container">
        <div class="loading-spinner">
          <div class="spinner-ring"></div>
          <div class="spinner-ring"></div>
          <div class="spinner-ring"></div>
        </div>
        <div class="loading-text">
          <h2 class="loading-title">Chargement...</h2>
          <p class="loading-subtitle">Préparation de votre expérience</p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isLoading = ref(false)

const startLoading = () => {
  isLoading.value = true
}

const stopLoading = () => {
  setTimeout(() => {
    isLoading.value = false
  }, 300)
}

onMounted(() => {
  // Écoute les événements de navigation de Nuxt
  if (process.client) {
    window.addEventListener('nuxt:pending', startLoading)
    window.addEventListener('nuxt:completed', stopLoading)
    window.addEventListener('nuxt:error', stopLoading)
  }
})

onBeforeUnmount(() => {
  if (process.client) {
    window.removeEventListener('nuxt:pending', startLoading)
    window.removeEventListener('nuxt:completed', stopLoading)
    window.removeEventListener('nuxt:error', stopLoading)
  }
})
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0a0e1a 0%, #0f1a2e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(10px);
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.loading-spinner {
  position: relative;
  width: 120px;
  height: 120px;
}

.spinner-ring {
  position: absolute;
  border: 4px solid transparent;
  border-top-color: rgba(0, 220, 130, 0.6);
  border-radius: 50%;
  animation: spin 1.5s ease-in-out infinite;
}

.spinner-ring:first-child {
  width: 120px;
  height: 120px;
}

.spinner-ring:nth-child(2) {
  width: 90px;
  height: 90px;
  top: 15px;
  left: 15px;
  border-top-color: rgba(0, 196, 113, 0.8);
  animation-delay: 0.3s;
  animation-duration: 1.2s;
}

.spinner-ring:nth-child(3) {
  width: 60px;
  height: 60px;
  top: 30px;
  left: 30px;
  border-top-color: rgba(0, 220, 130, 1);
  animation-delay: 0.6s;
  animation-duration: 0.9s;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading-text {
  text-align: center;
  animation: fadeInUp 0.8s ease-out;
}

.loading-title {
  font-size: 1.75rem;
  font-weight: 700;
  background: linear-gradient(135deg, #00dc82, #00c471);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  letter-spacing: 0.05em;
}

.loading-subtitle {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Transition */
.loading-enter-active,
.loading-leave-active {
  transition: opacity 0.5s ease;
}

.loading-enter-from,
.loading-leave-to {
  opacity: 0;
}
</style>
