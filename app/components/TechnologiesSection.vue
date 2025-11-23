<script setup>
import { useTechnologies } from '~/composables/useTechnologies'
import { getTechIcon, getTabIcon } from '~/utils/helpers'
import '~/assets/styles/technologies.css'

const {
  activeTechTab,
  technologiesByCategory,
  techTabs,
  toggleTech,
  isExpanded
} = useTechnologies()
</script>

<template>
  <section class="tech-table-section">
    <div class="container">
      <h2 class="section-title">Mes Technologies</h2>
      <p class="section-subtitle">Stack technique que j'ai pu pratiquer et que je maîtrise</p>

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
              class="tech-item-wrapper"
              :class="{ 'expanded': isExpanded(tech) && (tech.githubLink || tech.description) }"
            >
              <div 
                class="tech-item"
                :class="{ 'clickable': tech.githubLink || tech.description }"
                @click="toggleTech(tech)"
              >
                <div class="tech-info">
                  <div class="tech-icon" v-html="getTechIcon(tech.name)"></div>
                  <span class="tech-name">{{ tech.name }}</span>
                  <svg 
                    v-if="tech.githubLink || tech.description"
                    class="tech-expand-icon"
                    :class="{ 'expanded': isExpanded(tech) }"
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2" 
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
                <div class="tech-progress-container">
                  <div class="tech-progress-bar">
                    <div 
                      class="tech-progress-fill" 
                      :class="{ 'mastered': tech.mastered, 'in-progress': !tech.mastered }"
                      :style="{ width: `${tech.level}%` }"
                    ></div>
                  </div>
                  <span class="tech-progress-percentage">{{ tech.level }}%</span>
                </div>
              </div>
              
              <!-- Zone déroulée -->
              <div 
                v-if="tech.githubLink || tech.description"
                class="tech-expanded-content"
                :class="{ 'expanded': isExpanded(tech) }"
              >
                <div class="tech-expanded-inner">
                  <p v-if="tech.description" class="tech-description">{{ tech.description }}</p>
                  <a 
                    v-if="tech.githubLink"
                    :href="tech.githubLink" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="tech-github-link"
                    @click.stop
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                      <path d="M9 18c-4.51 2-5-2-7-2"/>
                    </svg>
                    Voir sur GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Version mobile avec scroll vertical -->
      <div class="tech-content-mobile">
        <div class="tech-scroll-container">
          <div 
            v-for="category in techTabs" 
            :key="category"
            class="tech-category-section"
          >
            <div class="tech-category-header">
              <span class="category-icon" v-html="getTabIcon(category)"></span>
              <h3 class="category-title">{{ category }}</h3>
              <span class="category-count">{{ technologiesByCategory[category].length }}</span>
            </div>
            <div class="tech-category-items">
              <div 
                v-for="tech in technologiesByCategory[category]" 
                :key="`${tech.category}-${tech.name}`"
                class="tech-item-mobile-wrapper"
                :class="{ 'expanded': isExpanded(tech) && (tech.githubLink || tech.description) }"
              >
                <div 
                  class="tech-item-mobile"
                  :class="{ 'clickable': tech.githubLink || tech.description }"
                  @click="toggleTech(tech)"
                >
                  <div class="tech-info-mobile">
                    <div class="tech-icon-mobile" v-html="getTechIcon(tech.name)"></div>
                    <span class="tech-name-mobile">{{ tech.name }}</span>
                    <svg 
                      v-if="tech.githubLink || tech.description"
                      class="tech-expand-icon-mobile"
                      :class="{ 'expanded': isExpanded(tech) }"
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      stroke-width="2" 
                      stroke-linecap="round" 
                      stroke-linejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                  <div class="tech-progress-container-mobile">
                    <div class="tech-progress-bar-mobile">
                      <div 
                        class="tech-progress-fill-mobile" 
                        :class="{ 'mastered': tech.mastered, 'in-progress': !tech.mastered }"
                        :style="{ width: `${tech.level}%` }"
                      ></div>
                    </div>
                    <span class="tech-progress-percentage-mobile">{{ tech.level }}%</span>
                  </div>
                </div>
                
                <!-- Zone déroulée mobile -->
                <div 
                  v-if="tech.githubLink || tech.description"
                  class="tech-expanded-content-mobile"
                  :class="{ 'expanded': isExpanded(tech) }"
                >
                  <div class="tech-expanded-inner-mobile">
                    <p v-if="tech.description" class="tech-description-mobile">{{ tech.description }}</p>
                    <a 
                      v-if="tech.githubLink"
                      :href="tech.githubLink" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="tech-github-link-mobile"
                      @click.stop
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                        <path d="M9 18c-4.51 2-5-2-7-2"/>
                      </svg>
                      Voir sur GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


