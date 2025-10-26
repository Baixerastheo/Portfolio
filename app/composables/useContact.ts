export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export function useContact() {
  const sendEmail = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
    try {
      // Configuration EmailJS
      const serviceId = 'YOUR_SERVICE_ID' // À remplacer
      const templateId = 'YOUR_TEMPLATE_ID' // À remplacer
      const publicKey = 'YOUR_PUBLIC_KEY' // À remplacer

      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: 'votre-email@example.com' // Votre email de réception
      }

      // Envoi via EmailJS
      await fetch('https://api.emailjs.com/api/v1.0/email/send', {
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

      return {
        success: true,
        message: 'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.'
      }
    } catch (error) {
      console.error('Erreur envoi email:', error)
      return {
        success: false,
        message: 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer ou me contacter directement par email.'
      }
    }
  }

  return {
    sendEmail
  }
}

