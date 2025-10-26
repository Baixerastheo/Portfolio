<script setup>
// Données du footer - facilement personnalisables
const footerData = {
  name: "Baixeras Théo",
  title: "Développeur Junior",
  description: "Passionné par la programmation d'expériences Web et Applications.",
  email: "contact@example.com",
  phone: "+33 6 00 00 00 00",
  location: "France",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/Baixerastheo",
      icon: "github"
    },
    {
      name: "LinkedIn", 
      url: "https://linkedin.com",
      icon: "linkedin"
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: "twitter"
    },
    {
      name: "Email",
      url: "mailto:contact@example.com",
      icon: "mail"
    }
  ],
  quickLinks: [
    { name: "Accueil", url: "/" },
    { name: "À propos", url: "/about" },
    { name: "Projets", url: "/projects" }
  ],
  technologies: ["Vue.js", "Nuxt.js", "TypeScript", "CSS3", "JavaScript"]
}

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Section principale -->
      <div class="footer-main">
        <div class="footer-brand">
          <div class="footer-logo">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div class="footer-brand-text">
            <h3 class="footer-name">{{ footerData.name }}</h3>
            <p class="footer-title">{{ footerData.title }}</p>
            <p class="footer-description">{{ footerData.description }}</p>
          </div>
        </div>

        <div class="footer-links">
          <div class="footer-section">
            <h4 class="footer-section-title">Navigation</h4>
            <ul class="footer-link-list">
              <li v-for="link in footerData.quickLinks" :key="link.name">
                <a :href="link.url" class="footer-link">{{ link.name }}</a>
              </li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 class="footer-section-title">Technologies</h4>
            <div class="footer-tech-tags">
              <span v-for="tech in footerData.technologies" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="footer-section">
            <h4 class="footer-section-title">Contact</h4>
            <div class="footer-contact">
              <a :href="`mailto:${footerData.email}`" class="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-10 5L2 7"/>
                </svg>
                {{ footerData.email }}
              </a>
              <a :href="`tel:${footerData.phone}`" class="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {{ footerData.phone }}
              </a>
              <div class="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {{ footerData.location }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section réseaux sociaux -->
      <div class="footer-social">
        <div class="footer-social-links">
          <a 
            v-for="social in footerData.socialLinks" 
            :key="social.name"
            :href="social.url" 
            :title="social.name"
            class="footer-social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg v-if="social.icon === 'github'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
            <svg v-else-if="social.icon === 'linkedin'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            <svg v-else-if="social.icon === 'twitter'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 12.5 3 9c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
            </svg>
            <svg v-else-if="social.icon === 'mail'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-10 5L2 7"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Section copyright -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p class="footer-copyright">
            © {{ currentYear }} {{ footerData.name }}. Tous droits réservés.
          </p>
          <p class="footer-built-with">
            Construit avec <span class="heart">❤️</span> et <span class="nuxt">Nuxt.js</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style src="~/assets/styles/footer.css"></style>
