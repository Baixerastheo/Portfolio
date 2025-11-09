<script setup>
import { heroData } from '~/data/hero'
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
            <a href="/CV_Baixeras_Theo_pf.pdf" download class="hero-cta">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Mon curriculum vitae
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
