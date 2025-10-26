<script setup>
// Section hero personnalisable
const heroData = {
  name: "Baixeras Théo",
  title: "Développeur Junior",
  subtitle: "Spécialisé en Développement Web",
  description: "Passionné par la création d'expériences web innovantes et performantes. Je transforme vos idées en applications web élégantes et fonctionnelles.",
  ctaText: "Découvrir mes projets",
  ctaLink: "/projects",
  image: "/pf_img.png"
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
          <img :src="heroData.image" alt="Photo de profil" />
        </div>
      </div>

      <div class="hero-decoration">
        <div class="decoration-circle circle-1"></div>
        <div class="decoration-circle circle-2"></div>
        <div class="decoration-circle circle-3"></div>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/styles/hero.css"></style>
