import { computed } from 'vue'
import { footerData } from '~/data/footer'
import { useIcons } from '~/composables/useIcons'

export function useFooter() {
  const { getSocialIcon, getContactIcon, getLogoIcon } = useIcons()

  const currentYear = computed(() => new Date().getFullYear())

  const logoIcon = computed(() => getLogoIcon())

  const contactIcons = computed(() => ({
    email: getContactIcon('email'),
    phone: getContactIcon('phone'),
    location: getContactIcon('location')
  }))

  const getSocialIconHtml = (icon: string) => getSocialIcon(icon as any)

  return {
    footerData,
    currentYear,
    logoIcon,
    contactIcons,
    getSocialIconHtml
  }
}

