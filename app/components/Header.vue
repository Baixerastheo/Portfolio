<script setup lang="ts">
import { useHeader } from '~/composables/useHeader'

const {
  headerData,
  isMobileMenuOpen,
  toggleMobileMenu,
  closeMobileMenu,
  getIconHtml,
  resizeIcon,
  logoIcon,
  logoIconMobile,
  closeIcon
} = useHeader()
</script>

<template>
  <header class="header">
    <nav class="header-nav">
      <a href="/" class="header-title">
        <div class="header-logo" v-html="logoIcon"></div>
        <span>{{ headerData.name }}</span>
      </a>
      
      <!-- Menu desktop -->
      <div class="header-nav-links">
        <a 
          v-for="link in headerData.navLinks" 
          :key="link.name"
          :href="link.url" 
          class="header-nav-link"
        >
          <span v-html="getIconHtml('nav', link.icon)"></span>
          <span>{{ link.name }}</span>
        </a>
      </div>

      <!-- Actions du header -->
      <div class="header-actions">
        <a 
          v-for="action in headerData.socialActions" 
          :key="action.name"
          :href="action.url" 
          :title="action.title" 
          :target="action.url.startsWith('http') ? '_blank' : undefined"
          :rel="action.url.startsWith('http') ? 'noopener noreferrer' : undefined"
          class="header-action-btn"
        >
          <span v-html="getIconHtml('action', action.icon)"></span>
        </a>
      </div>

      <!-- Bouton hamburger mobile -->
      <button 
        class="hamburger-button"
        :class="{ 'open': isMobileMenuOpen }"
        @click="toggleMobileMenu"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </nav>

    <!-- Menu mobile simplifié pour debug -->
    <div 
      class="mobile-menu"
      :class="{ 'open': isMobileMenuOpen }"
    >
      <div class="mobile-menu-header">
        <div class="mobile-menu-title">
          <span class="portfolio-icon" v-html="logoIconMobile"></span>
          Portfolio
        </div>
        <button class="mobile-menu-close" @click="closeMobileMenu" v-html="closeIcon"></button>
      </div>
      
      <div class="mobile-menu-content">
        <div class="mobile-menu-section">
          <div class="mobile-menu-section-title">Navigation</div>
          <a 
            v-for="link in headerData.navLinks" 
            :key="link.name"
            :href="link.url" 
            class="mobile-menu-link" 
            @click="closeMobileMenu"
          >
            <span class="mobile-menu-link-icon" v-html="resizeIcon(getIconHtml('nav', link.icon), '16', '16')"></span>
            {{ link.name }}
          </a>
        </div>
        
        <div class="mobile-menu-section">
          <div class="mobile-menu-section-title">Contact</div>
          <a 
            v-for="action in headerData.socialActions" 
            :key="action.name"
            :href="action.url" 
            class="mobile-menu-link" 
            @click="closeMobileMenu"
          >
            <span class="mobile-menu-link-icon" v-html="resizeIcon(resizeIcon(getIconHtml('action', action.icon), '16', '16'), '16', '16')"></span>
            {{ action.name }}
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<style src="~/assets/styles/header.css"></style>