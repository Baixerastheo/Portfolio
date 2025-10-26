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
import { ref, reactive } from 'vue'
import { useContact } from '~/composables/useContact'

const { sendEmail } = useContact()

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const form = reactive<FormData>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const errors = reactive<Partial<FormData>>({})
const isSubmitting = ref(false)
const status = reactive<{ type: 'success' | 'error' | null, message: string }>({
  type: null,
  message: ''
})

// Validation d'un champ spécifique
const validateField = (field: keyof FormData) => {
  delete errors[field]

  switch (field) {
    case 'name':
      if (!form.name.trim()) {
        errors.name = 'Le nom est requis'
      } else if (form.name.trim().length < 2) {
        errors.name = 'Le nom doit contenir au moins 2 caractères'
      }
      break
    case 'email':
      if (!form.email.trim()) {
        errors.email = 'L\'email est requis'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errors.email = 'L\'email est invalide'
      }
      break
    case 'subject':
      if (!form.subject.trim()) {
        errors.subject = 'Le sujet est requis'
      } else if (form.subject.trim().length < 3) {
        errors.subject = 'Le sujet doit contenir au moins 3 caractères'
      }
      break
    case 'message':
      if (!form.message.trim()) {
        errors.message = 'Le message est requis'
      } else if (form.message.trim().length < 10) {
        errors.message = 'Le message doit contenir au moins 10 caractères'
      }
      break
  }
}

// Validation de tous les champs
const validateForm = (): boolean => {
  const fields: Array<keyof FormData> = ['name', 'email', 'subject', 'message']
  fields.forEach(field => validateField(field))
  return Object.keys(errors).length === 0
}

// Soumission du formulaire
const handleSubmit = async () => {
  // Réinitialiser le message de statut
  status.type = null
  status.message = ''

  // Valider le formulaire
  if (!validateForm()) {
    status.type = 'error'
    status.message = 'Veuillez corriger les erreurs dans le formulaire'
    return
  }

  isSubmitting.value = true

  try {
    // Envoi via EmailJS
    const result = await sendEmail({
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message
    })

    if (result.success) {
      status.type = 'success'
      status.message = result.message

      // Réinitialiser le formulaire
      form.name = ''
      form.email = ''
      form.subject = ''
      form.message = ''
    } else {
      status.type = 'error'
      status.message = result.message
    }
  } catch (error) {
    status.type = 'error'
    status.message = 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.'
    console.error('Erreur:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-section {
  padding: 6rem 0 0 0;
  background: linear-gradient(180deg, var(--background-color), rgba(0, 0, 0, 0.4));
  position: relative;
  overflow: hidden;
}

.contact-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 0%, rgba(0, 220, 130, 0.05), transparent);
  pointer-events: none;
}

.contact-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.contact-header {
  text-align: center;
  margin-bottom: 4rem;
}

.header-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: var(--surface-color);
  border: 2px solid var(--border-color);
  border-radius: 16px;
  margin-bottom: 1.5rem;
  transition: var(--transition);
}

.header-icon svg {
  color: var(--primary-color);
}

.header-icon:hover {
  border-color: var(--primary-color);
  background: rgba(0, 220, 130, 0.05);
}

.contact-title {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--text-white), var(--primary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  letter-spacing: -0.03em;
}

.contact-description {
  font-size: 1.25rem;
  color: var(--text-muted);
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
}

.form-wrapper {
  background: linear-gradient(135deg, var(--surface-color), rgba(0, 0, 0, 0.3));
  border: 2px solid var(--border-color);
  border-radius: 24px;
  padding: 3rem;
  backdrop-filter: blur(20px);
  transition: var(--transition);
}

.form-wrapper:hover {
  border-color: var(--primary-color);
  box-shadow: 0 20px 60px rgba(0, 220, 130, 0.2);
  transform: translateY(-4px);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  animation: fadeIn 0.3s ease-out backwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.form-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-white);
  margin-bottom: 0.25rem;
}

.form-label::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, var(--primary-color), transparent);
  opacity: 0.3;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  color: var(--text-white);
  background: var(--surface-color);
  border: 2px solid var(--border-color);
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: inherit;
}

.form-input:hover,
.form-textarea:hover {
  border-color: rgba(0, 220, 130, 0.3);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 
    0 0 0 4px rgba(0, 220, 130, 0.1),
    0 0 20px rgba(0, 220, 130, 0.05);
  transform: translateY(-2px);
}

.form-input.error,
.form-textarea.error {
  border-color: #ff6b6b;
  box-shadow: 0 0 0 4px rgba(255, 107, 107, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 140px;
  font-family: inherit;
}

.error-message {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ff6b6b;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  font-weight: 500;
}

.error-message::before {
  content: '⚠';
  font-size: 1rem;
}

.status-message {
  padding: 1.25rem 1.5rem;
  border-radius: 12px;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 500;
  font-size: 1rem;
  border: 2px solid;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.status-message.success {
  background: linear-gradient(135deg, rgba(0, 220, 130, 0.15), rgba(0, 220, 130, 0.05));
  border-color: rgba(0, 220, 130, 0.4);
  color: var(--primary-color);
}

.status-message.error {
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.15), rgba(255, 107, 107, 0.05));
  border-color: rgba(255, 107, 107, 0.4);
  color: #ff6b6b;
}

.status-icon {
  font-size: 1.75rem;
  font-weight: bold;
}

.submit-btn {
  width: 100%;
  padding: 1.25rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--background-color);
  background: linear-gradient(135deg, var(--primary-color), var(--primary-hover));
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.submit-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.submit-btn:hover:not(:disabled) {
  background: var(--primary-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.submit-btn:hover:not(:disabled)::before {
  width: 300px;
  height: 300px;
}

.submit-btn:active:not(:disabled) {
  transform: translateY(-2px);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.submit-loader {
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Responsive */
@media (max-width: 768px) {
  .contact-section {
    padding: 4rem 0;
  }

  .contact-container {
    padding: 0 1.5rem;
  }

  .header-icon {
    width: 52px;
    height: 52px;
  }

  .contact-title {
    font-size: 2.25rem;
  }

  .contact-description {
    font-size: 1.1rem;
  }

  .form-wrapper {
    padding: 2rem;
  }

  .submit-btn {
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .contact-title {
    font-size: 1.875rem;
  }

  .form-wrapper {
    padding: 1.5rem;
    border-radius: 16px;
  }

  .header-icon {
    width: 48px;
    height: 48px;
    margin-bottom: 1rem;
  }

  .form-input,
  .form-textarea {
    padding: 0.875rem 1rem;
  }
}
</style>

