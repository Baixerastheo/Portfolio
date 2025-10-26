<script setup>
import { myEvolution } from '~/data/evolution'
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

<style>
.evolution-section {
  padding: 3rem 0;
  background: rgba(0, 220, 130, 0.03);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-white);
  margin-bottom: 0.5rem;
  text-align: center;
  letter-spacing: -0.025em;
}

.evolution-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.evolution-card {
  background: linear-gradient(135deg, var(--surface-color), rgba(0, 0, 0, 0.3));
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(20px);
  transition: var(--transition);
}

.evolution-card:hover {
  border-color: var(--primary-color);
  box-shadow: 0 15px 50px rgba(0, 220, 130, 0.15);
  transform: translateY(-4px);
}

.evolution-skill {
  font-size: 1.75rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary-color), rgba(0, 220, 130, 0.7));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2rem;
}

.evolution-timeline {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 0;
  bottom: -2rem;
  width: 2px;
  background: linear-gradient(180deg, var(--primary-color), transparent);
  opacity: 0.3;
}

.timeline-item.last::before {
  display: none;
}

.timeline-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--primary-color);
  border: 3px solid var(--surface-color);
  box-shadow: 0 0 0 2px var(--primary-color), 0 0 0 4px rgba(0, 220, 130, 0.1);
  flex-shrink: 0;
  margin-top: 0.25rem;
  position: relative;
  z-index: 1;
}

.timeline-dot.final {
  background: linear-gradient(135deg, var(--primary-color), rgba(0, 220, 130, 0.8));
  box-shadow: 0 0 0 2px var(--primary-color), 0 0 0 6px rgba(0, 220, 130, 0.2), 0 0 20px rgba(0, 220, 130, 0.4);
}

.timeline-text {
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.7;
  flex: 1;
}

.timeline-text.bold {
  color: var(--text-white);
  font-weight: 600;
}

@media (max-width: 768px) {
  .evolution-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .evolution-card {
    padding: 2rem;
  }
}
</style>

