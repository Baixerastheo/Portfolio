<script setup>
import { projects } from '~/data/projects'
import { getProjectImage } from '~/utils/helpers'
</script>

<template>
  <section class="projects-section">
    <div class="container">
      <h2 class="section-title">Mes Réalisations</h2>
      
      <div class="projects-grid">
        <article 
          v-for="project in projects" 
          :key="project.id"
          class="project-card"
        >
          <div class="project-image-wrapper">
            <img :src="getProjectImage(project.image)" :alt="project.title" />
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

            <div class="learning-section">
              <h4 class="learning-title">Ce que j'ai appris</h4>
              <p class="learning-text">{{ project.whatILearned }}</p>
              
              <div class="skills-gained">
                <span 
                  v-for="skill in project.skillsGained" 
                  :key="skill"
                  class="skill-badge"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style>
.projects-section {
  padding: 3rem 0;
  background: linear-gradient(180deg, rgba(0, 220, 130, 0.03), rgba(0, 0, 0, 0.3));
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.project-card {
  background: linear-gradient(135deg, var(--surface-color), rgba(0, 0, 0, 0.3));
  border: 1px solid var(--border-color);
  border-radius: 20px;
  overflow: hidden;
  transition: var(--transition);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(0, 220, 130, 0.15);
  border-color: var(--primary-color);
}

.project-image-wrapper {
  position: relative;
  background: linear-gradient(135deg, var(--background-color), rgba(0, 220, 130, 0.05));
  height: 200px;
  overflow: visible;
  padding: 4px;
}

.project-image-wrapper::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5));
  z-index: 1;
  pointer-events: none;
  border-radius: 16px;
}

.project-image-wrapper::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(0, 220, 130, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.6s ease;
  z-index: 1;
  pointer-events: none;
}

.project-card:hover .project-image-wrapper::after {
  opacity: 1;
}

.project-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  filter: contrast(1.05) saturate(0.9);
  border-radius: 14px;
  border: 2px solid transparent;
  background: linear-gradient(135deg, rgba(0, 220, 130, 0.3), rgba(0, 196, 113, 0.3)) padding-box,
              linear-gradient(135deg, var(--primary-color), rgba(0, 220, 130, 0.5)) border-box;
  box-shadow: 
    inset 0 0 20px rgba(0, 220, 130, 0.1),
    0 4px 20px rgba(0, 0, 0, 0.2);
}

.project-card:hover .project-image-wrapper img {
  transform: scale(1.05);
  filter: contrast(1.15) saturate(1.1);
  border-color: var(--primary-color);
  box-shadow: 
    inset 0 0 40px rgba(0, 220, 130, 0.2),
    0 8px 30px rgba(0, 220, 130, 0.3);
}

.project-content {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-white);
  margin-bottom: 0.75rem;
  letter-spacing: -0.015em;
  line-height: 1.3;
}

.project-description {
  font-size: 0.95rem;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
  line-height: 1.6;
  flex: 1;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background: rgba(0, 220, 130, 0.1);
  color: var(--primary-color);
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(0, 220, 130, 0.2);
  transition: var(--transition);
}

.tech-tag:hover {
  background: rgba(0, 220, 130, 0.2);
  transform: translateY(-1px);
}

.learning-section {
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0, 220, 130, 0.1);
  margin-top: auto;
}

.learning-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.75rem;
}

.learning-text {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.skills-gained {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-badge {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-white);
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: var(--transition);
}

.skill-badge:hover {
  background: rgba(0, 220, 130, 0.15);
  border-color: rgba(0, 220, 130, 0.3);
}

@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .project-content {
    padding: 2.25rem;
  }
}

@media (max-width: 480px) {
  .project-content {
    padding: 1.75rem;
  }
}
</style>

