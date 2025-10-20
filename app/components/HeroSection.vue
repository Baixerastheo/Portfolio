<script setup>
// Section hero personnalisable
const heroData = {
  name: "Baixeras Théo",
  title: "Développeur Front-End",
  subtitle: "Spécialisé en Vue.js, Nuxt.js et CSS moderne",
  description: "Passionné par la création d'expériences web innovantes et performantes. Je transforme vos idées en applications web élégantes et fonctionnelles.",
  ctaText: "Découvrir mes projets",
  ctaLink: "/projects",
  image: "/hero-image.jpg" // Vous pouvez remplacer par votre photo
}
</script>

<template>
  <section class="hero-section">
    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-name">{{ heroData.name }}</h1>
          <h2 class="hero-title">{{ heroData.title }}</h2>
          <p class="hero-subtitle">{{ heroData.subtitle }}</p>
          <p class="hero-description">{{ heroData.description }}</p>
          
          <div class="hero-actions">
            <a :href="heroData.ctaLink" class="hero-cta">
              {{ heroData.ctaText }}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </a>
            <a href="/about" class="hero-secondary">
              En savoir plus
            </a>
          </div>
        </div>
        
        <div class="hero-image">
          <div class="image-placeholder">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <p>Votre photo ici</p>
          </div>
        </div>
      </div>
      
      <!-- Éléments décoratifs -->
      <div class="hero-decoration">
        <div class="decoration-circle circle-1"></div>
        <div class="decoration-circle circle-2"></div>
        <div class="decoration-circle circle-3"></div>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/styles/hero.css"></style>
