import { ref, computed } from 'vue'
import { headerData } from '~/data/header'
import { useIcons } from '~/composables/useIcons'

export function useHeader() {
  const { getNavIcon, getActionIcon, getLogoIcon, getCloseIcon } = useIcons()

  const isMobileMenuOpen = ref(false)

  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
  }

  const getIconHtml = (type: 'nav' | 'action', icon: string) => {
    if (type === 'nav') {
      return getNavIcon(icon as any)
    }
    return getActionIcon(icon as any)
  }

  // Pour redimensionner les icônes
  const resizeIcon = (iconHtml: string, width: string, height: string) => {
    return iconHtml.replace(/width="\d+"/, `width="${width}"`).replace(/height="\d+"/, `height="${height}"`)
  }

  const logoIcon = computed(() => resizeIcon(getLogoIcon(), '24', '24'))
  const logoIconMobile = computed(() => resizeIcon(getLogoIcon(), '20', '20'))
  const closeIcon = computed(() => getCloseIcon())

  return {
    headerData,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    getIconHtml,
    resizeIcon,
    logoIcon,
    logoIconMobile,
    closeIcon
  }
}

