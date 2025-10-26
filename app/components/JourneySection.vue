<script setup>
import { journeySteps } from '~/data/journey'
import { getJourneyIcon } from '~/utils/journey-icons'
</script>

<template>
  <section class="journey-section">
    <div class="container">
      <div class="journey-header">
        <h2 class="section-title">Mon Parcours</h2>
        <p class="section-subtitle">Mon parcours académique et professionnel</p>
      </div>

      <div class="journey-grid">
        <div 
          v-for="step in journeySteps" 
          :key="step.id"
          :class="[
            'journey-card',
            { 'completed': step.status === 'completed' },
            { 'in-progress': step.status === 'in-progress' }
          ]"
        >
          <div class="card-content">
            <div class="card-header">
              <div class="card-icon" v-html="getJourneyIcon(step.iconType)"></div>
              <div class="card-badge" :class="step.status">
                {{ step.status === 'completed' ? 'Terminé' : 'En cours' }}
              </div>
            </div>
            
            <div class="card-body">
              <div class="card-period">{{ step.period }}</div>
              <h3 class="card-title">{{ step.title }}</h3>
              <div class="card-institution">{{ step.institution }}</div>
              <p class="card-description">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/styles/journey.css"></style>
