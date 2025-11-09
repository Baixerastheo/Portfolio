<template>
  <section class="contact-section">
    <div class="contact-container">
      <!-- Header avec illustration -->
      <div class="contact-header">
        <div class="header-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </div>
        <h2 class="contact-title">Contactez-moi</h2>
        <p class="contact-description">
          Une idée de projet ? N'hésitez pas à me contacter, je serai ravi d'échanger avec vous !
        </p>
      </div>

      <div class="form-wrapper">
        <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
        <!-- Nom -->
        <div class="form-group">
          <label for="name" class="form-label">
            Nom *
          </label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            class="form-input"
            :class="{ 'error': errors.name }"
            placeholder="Votre nom complet"
            required
            @blur="validateField('name')"
          />
          <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
        </div>

        <!-- Email -->
        <div class="form-group">
          <label for="email" class="form-label">
            Email *
          </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            class="form-input"
            :class="{ 'error': errors.email }"
            placeholder="votre.email@example.com"
            required
            @blur="validateField('email')"
          />
          <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
        </div>

        <!-- Sujet -->
        <div class="form-group">
          <label for="subject" class="form-label">
            Sujet *
          </label>
          <input
            id="subject"
            v-model="form.subject"
            type="text"
            class="form-input"
            :class="{ 'error': errors.subject }"
            placeholder="Sujet de votre message"
            required
            @blur="validateField('subject')"
          />
          <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
        </div>

        <!-- Message -->
        <div class="form-group">
          <label for="message" class="form-label">
            Message *
          </label>
          <textarea
            id="message"
            v-model="form.message"
            class="form-textarea"
            :class="{ 'error': errors.message }"
            placeholder="Décrivez votre projet ou posez votre question..."
            rows="6"
            required
            @blur="validateField('message')"
          ></textarea>
          <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
        </div>

        <!-- Messages de statut -->
        <div v-if="status.message" class="status-message" :class="status.type">
          <span v-if="status.type === 'success'" class="status-icon">✓</span>
          <span v-if="status.type === 'error'" class="status-icon">✗</span>
          {{ status.message }}
        </div>

        <!-- Bouton Submit -->
        <button
          type="submit"
          class="submit-btn"
          :disabled="isSubmitting"
        >
          <span v-if="isSubmitting" class="submit-loader"></span>
          {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
        </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useContactForm } from '~/composables/useContactForm'
import '~/assets/styles/contact-form.css'

const {
  form,
  errors,
  isSubmitting,
  status,
  validateField,
  handleSubmit
} = useContactForm()
</script>


