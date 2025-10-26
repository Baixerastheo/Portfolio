# Configuration du Formulaire de Contact

## Étape 1 : Installation

Le code est déjà configuré. Vous devez juste suivre ces étapes pour activer l'envoi d'emails.

## Étape 2 : Configuration EmailJS (GRATUIT)

### 1. Créer un compte EmailJS
- Allez sur https://www.emailjs.com/
- Créez un compte gratuit (200 emails/mois gratuits)

### 2. Configurer Email Service
- Dans le dashboard, allez dans "Email Services"
- Cliquez sur "Add New Service"
- Choisissez votre fournisseur (Gmail, Outlook, etc.)
- Connectez votre email
- Notez le **Service ID**

### 3. Créer un Email Template
- Allez dans "Email Templates"
- Cliquez sur "Create New Template"
- Configurez le template comme suit :

**Settings:**
- Template Name: `contact_form`

**Content:**
```
De: {{from_name}} ({{from_email}})
Objet: {{subject}}

Message:
{{message}}

---
Email envoyé depuis le portfolio de Baixeras Théo
```

- Cliquez sur "Save"
- Notez le **Template ID**

### 4. Obtenir votre Public Key
- Allez dans "Account" → "General"
- Notez votre **Public Key**

## Étape 3 : Mettre à jour le code

Ouvrez `app/composables/useContact.ts` et remplacez :

```typescript
const serviceId = 'YOUR_SERVICE_ID' // ← Remplacez par votre Service ID
const templateId = 'YOUR_TEMPLATE_ID' // ← Remplacez par votre Template ID
const publicKey = 'YOUR_PUBLIC_KEY' // ← Remplacez par votre Public Key
const to_email = 'votre-email@example.com' // ← Votre email de réception
```

## Étape 4 : Alternative sans installation (pour tester)

Si vous voulez tester sans installer EmailJS, vous pouvez utiliser un service d'API backend.

Créez un fichier `app/server/api/contact.ts`:

```typescript
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // Ici vous pouvez envoyer l'email avec :
  // - SendGrid
  // - Resend
  // - Nodemailer
  // - Ou tout autre service
  
  try {
    // Exemple avec fetch vers votre API
    const response = await fetch('https://votre-api.com/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    
    return { success: true }
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Erreur lors de l\'envoi'
    })
  }
})
```

Et modifiez `useContact.ts` pour utiliser cette route au lieu d'EmailJS.

## Solutions alternatives

### Option 1 : Resend (recommandé pour production)
- URL: https://resend.com
- Gratuit jusqu'à 3000 emails/mois
- Très simple à intégrer

### Option 2 : SendGrid
- URL: https://sendgrid.com
- 100 emails gratuits/jour
- Plus robuste mais plus complexe

### Option 3 : API Route Nuxt avec Nodemailer
- Installation: `npm install nodemailer`
- Nécessite un compte SMTP (Gmail, etc.)
- Plus de contrôle mais plus de configuration

## Test

Une fois configuré :
1. Remplissez le formulaire
2. Cliquez sur "Envoyer"
3. Vérifiez votre boîte email !

## Sécurité

⚠️ **Important** : Ne commit JAMAIS vos clés API dans Git !
- Ajoutez `app/composables/useContact.ts` dans `.gitignore` si nécessaire
- Utilisez des variables d'environnement pour les clés sensibles
- Dans Nuxt : utilisez `useRuntimeConfig()` pour les secrets

Exemple avec variables d'environnement :

```typescript
// nuxt.config.ts
runtimeConfig: {
  emailjsServiceId: '',
  emailjsTemplateId: '',
  emailjsPublicKey: ''
}
```

Puis dans `useContact.ts`:
```typescript
const config = useRuntimeConfig()
const serviceId = config.emailjsServiceId
```

