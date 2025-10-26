<script setup lang="ts">
import { useFooter } from '~/composables/useFooter'

const {
  footerData,
  currentYear,
  logoIcon,
  contactIcons,
  getSocialIconHtml
} = useFooter()
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Section principale -->
      <div class="footer-main">
        <div class="footer-brand">
          <div class="footer-logo" v-html="logoIcon"></div>
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
                <span v-html="contactIcons.email"></span>
                {{ footerData.email }}
              </a>
              <a :href="`tel:${footerData.phone}`" class="footer-contact-item">
                <span v-html="contactIcons.phone"></span>
                {{ footerData.phone }}
              </a>
              <div class="footer-contact-item">
                <span v-html="contactIcons.location"></span>
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
            <span v-html="getSocialIconHtml(social.icon)"></span>
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
