<script setup>
import { useEvolution } from '~/composables/useEvolution'
import '~/assets/styles/evolution.css'

const { myEvolution } = useEvolution()
</script>

<template>
  <section class="evolution-section">
    <div class="container">
      <h2 class="section-title">Mon Évolution</h2>
      
      <div class="evolution-grid">
        <div 
          v-for="item in myEvolution" 
          :key="item.skill"
          class="evolution-card"
        >
          <h3 class="evolution-skill">{{ item.skill }}</h3>
          <div class="evolution-timeline">
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <p class="timeline-text">{{ item.start }}</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <p class="timeline-text">{{ item.progress }}</p>
            </div>
            <div class="timeline-item last">
              <div class="timeline-dot final"></div>
              <p class="timeline-text bold">{{ item.level }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


