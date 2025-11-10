export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export function useContact() {
  const config = useRuntimeConfig()
  
  const sendEmail = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
    try {
      // Configuration EmailJS depuis les variables d'environnement
      const serviceId = config.public.emailjsServiceId
      const templateId = config.public.emailjsTemplateId
      const publicKey = config.public.emailjsPublicKey

      // Vérification que les variables sont configurées
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Configuration EmailJS manquante. Veuillez configurer les variables d\'environnement.')
      }

      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message
      }

      // Envoi via EmailJS
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: templateParams
        })
      })

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`)
      }

      const result = await response.json()
      
      if (result.status !== 200) {
        throw new Error(result.text || 'Erreur lors de l\'envoi de l\'email')
      }

      return {
        success: true,
        message: 'Message envoyé avec succès !'
      }
    } catch (error) {
      console.error('Erreur envoi email:', error)
      return {
        success: false,
        message: 'Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.'
      }
    }
  }

  return {
    sendEmail
  }
}

