import { ref, computed } from 'vue'
import { technologies, techTabs } from '~/data/technologies'

export const useTechnologies = () => {
  const activeTechTab = ref('Frontend')
  const expandedTechs = ref(new Set<string>())

  const technologiesByCategory = computed(() => {
    return techTabs.reduce<Record<string, typeof technologies>>((acc, tab) => {
      acc[tab] = technologies.filter(t => t.category === tab)
      return acc
    }, {})
  })

  const toggleTech = (tech: { name: string; githubLink?: string; description?: string }) => {
    if (tech.githubLink || tech.description) {
      if (expandedTechs.value.has(tech.name)) {
        expandedTechs.value.delete(tech.name)
      } else {
        expandedTechs.value.add(tech.name)
      }
    }
  }

  const isExpanded = (tech: { name: string }) => {
    return expandedTechs.value.has(tech.name)
  }

  return {
    activeTechTab,
    expandedTechs,
    technologiesByCategory,
    techTabs,
    toggleTech,
    isExpanded
  }
}

