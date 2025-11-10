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

      // Debug: vérifier les variables (uniquement en développement)
      if (import.meta.dev) {
        console.log('EmailJS Config:', {
          serviceId: serviceId ? '✓' : '✗',
          templateId: templateId ? '✓' : '✗',
          publicKey: publicKey ? '✓' : '✗'
        })
      }

      if (!serviceId || !templateId || !publicKey) {
        const missing = []
        if (!serviceId) missing.push('NUXT_PUBLIC_EMAILJS_SERVICE_ID')
        if (!templateId) missing.push('NUXT_PUBLIC_EMAILJS_TEMPLATE_ID')
        if (!publicKey) missing.push('NUXT_PUBLIC_EMAILJS_PUBLIC_KEY')
        
        console.error('Variables d\'environnement manquantes:', missing)
        throw new Error(`Configuration EmailJS manquante: ${missing.join(', ')}. Veuillez configurer les variables d'environnement dans Vercel.`)
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

      const responseText = await response.text()
      
      // EmailJS peut retourner "OK" en texte brut (succès)
      const trimmedText = responseText.trim()
      if (trimmedText === 'OK' || trimmedText === '') {
        return {
          success: true,
          message: 'Message envoyé avec succès !'
        }
      }
      
      // Essayer de parser en JSON
      let result
      try {
        result = JSON.parse(responseText)
      } catch (parseError) {
        throw new Error(`Réponse inattendue de l'API: ${responseText}`)
      }
      
      if (result.status !== 200) {
        throw new Error(result.text || 'Erreur lors de l\'envoi de l\'email')
      }

      return {
        success: true,
        message: 'Message envoyé avec succès !'
      }
    } catch (error) {
      if (error instanceof Error && !error.message.includes('OK')) {
        console.error('Erreur envoi email:', error)
      }
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.'
      }
    }
  }

  return {
    sendEmail
  }
}

