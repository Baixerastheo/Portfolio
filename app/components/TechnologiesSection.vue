<script setup>
import { ref, computed } from 'vue'
import { technologies, techTabs } from '~/data/technologies'
import { getTechIcon, getTabIcon } from '~/utils/helpers'

const activeTechTab = ref('Frontend')

const technologiesByCategory = computed(() => ({
  Frontend: technologies.filter(t => t.category === 'Frontend'),
  Backend: technologies.filter(t => t.category === 'Backend'),
  Desktop: technologies.filter(t => t.category === 'Desktop'),
  Tools: technologies.filter(t => t.category === 'Tools')
}))
</script>

<template>
  <section class="tech-table-section">
    <div class="container">
      <h2 class="section-title">Mes Technologies</h2>
      <p class="section-subtitle">Stack technique que je maîtrise</p>

      <div class="tech-tabs-container">
        <div class="tech-tabs">
          <button
            v-for="tab in techTabs"
            :key="tab"
            @click="activeTechTab = tab"
            :class="['tech-tab', { active: activeTechTab === tab }]"
          >
            <span class="tab-icon" v-html="getTabIcon(tab)"></span>
            {{ tab }}
            <span class="tab-count">{{ technologiesByCategory[tab].length }}</span>
          </button>
        </div>

        <div class="tech-content">
          <div class="tech-grid">
            <div 
              v-for="tech in technologiesByCategory[activeTechTab]" 
              :key="tech.name"
              class="tech-item"
            >
              <div class="tech-info">
                <div class="tech-icon" v-html="getTechIcon(tech.name)"></div>
                <span class="tech-name">{{ tech.name }}</span>
              </div>
              <div class="tech-badge-container">
                <span 
                  class="tech-status-badge" 
                  :class="{ 'mastered': tech.mastered, 'in-progress': !tech.mastered }"
                >
                  {{ tech.mastered ? 'Maîtrisé' : 'En cours' }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.tech-table-section {
  padding: 3rem 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 220, 130, 0.02));
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

.section-subtitle {
  font-size: 1rem;
  color: var(--text-muted);
  text-align: center;
  margin-bottom: 2rem;
}

.tech-tabs-container {
  background: linear-gradient(135deg, var(--surface-color), rgba(0, 0, 0, 0.3));
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 0;
  backdrop-filter: blur(20px);
}

.tech-tabs {
  display: flex;
  gap: 0.5rem;
  padding: 1.5rem 1.5rem 0;
  border-bottom: 2px solid var(--border-color);
}

.tech-tab {
  padding: 1rem 1.75rem;
  background: transparent;
  border: none;
  border-radius: 12px 12px 0 0;
  color: var(--text-muted);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.tab-icon {
  display: flex;
  align-items: center;
  opacity: 0.7;
  transition: var(--transition);
}

.tech-tab:hover .tab-icon {
  opacity: 1;
}

.tech-tab.active .tab-icon {
  opacity: 1;
  color: var(--primary-color);
}

.tech-tab:hover {
  color: var(--text-white);
  background: rgba(0, 220, 130, 0.05);
}

.tech-tab.active {
  color: var(--primary-color);
  background: var(--background-color);
}

.tech-tab.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary-color);
}

.tab-count {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 700;
}

.tech-tab.active .tab-count {
  background: rgba(0, 220, 130, 0.2);
  color: var(--primary-color);
}

.tech-content {
  padding: 2rem 1.5rem 2rem;
  max-height: 600px;
  overflow-y: auto;
  overflow-x: hidden;
}

.tech-content::-webkit-scrollbar {
  width: 8px;
}

.tech-content::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
}

.tech-content::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 10px;
  opacity: 0.6;
}

.tech-content::-webkit-scrollbar-thumb:hover {
  opacity: 1;
}

.tech-grid {
  display: grid;
  gap: 1rem;
}

.tech-item {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1.25rem;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  transition: var(--transition);
}

.tech-item:hover {
  background: rgba(0, 220, 130, 0.05);
  transform: translateX(4px);
}

.tech-info {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.tech-icon {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(0, 220, 130, 0.15), rgba(0, 220, 130, 0.05));
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 220, 130, 0.2);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-color);
  transition: var(--transition);
}

.tech-item:hover .tech-icon {
  background: linear-gradient(135deg, rgba(0, 220, 130, 0.25), rgba(0, 220, 130, 0.15));
  border-color: rgba(0, 220, 130, 0.4);
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 220, 130, 0.2);
}

.tech-name {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-white);
}

.tech-badge-container {
  display: flex;
  align-items: center;
}

.tech-status-badge {
  padding: 0.6rem 1.25rem;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: var(--transition);
  min-width: 100px;
  text-align: center;
}

.tech-status-badge.mastered {
  background: linear-gradient(135deg, rgba(0, 220, 130, 0.2), rgba(0, 220, 130, 0.1));
  color: var(--primary-color);
  border: 1px solid rgba(0, 220, 130, 0.3);
}

.tech-status-badge.in-progress {
  background: linear-gradient(135deg, rgba(255, 152, 0, 0.2), rgba(255, 152, 0, 0.1));
  color: #ff9800;
  border: 1px solid rgba(255, 152, 0, 0.3);
}

.tech-item:hover .tech-status-badge {
  transform: scale(1.05);
}

@media (max-width: 1024px) {
  .tech-tabs {
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tech-tab {
    padding: 0.875rem 1.5rem;
    font-size: 0.95rem;
  }

  .tech-item {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .tech-badge-container {
    width: 100%;
    justify-content: flex-end;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .tech-tabs {
    padding: 1rem 1rem 0;
    flex-wrap: wrap;
  }

  .tech-tab {
    padding: 0.75rem 1.25rem;
    font-size: 0.9rem;
    gap: 0.5rem;
  }

  .tab-icon {
    width: 18px;
    height: 18px;
  }

  .tech-content {
    padding: 1.5rem 1rem;
  }
}
</style>

