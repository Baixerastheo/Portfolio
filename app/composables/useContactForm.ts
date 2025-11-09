import { ref, reactive } from 'vue'
import { useContact } from '~/composables/useContact'

export interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export const useContactForm = () => {
  const { sendEmail } = useContact()

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

  return {
    form,
    errors,
    isSubmitting,
    status,
    validateField,
    handleSubmit
  }
}

