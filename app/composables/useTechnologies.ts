import { ref, computed } from 'vue'
import { technologies, techTabs } from '~/data/technologies'

export const useTechnologies = () => {
  const activeTechTab = ref('Frontend')
  const expandedTechs = ref(new Set<string>())

  const technologiesByCategory = computed(() => ({
    Frontend: technologies.filter(t => t.category === 'Frontend'),
    Backend: technologies.filter(t => t.category === 'Backend'),
    Desktop: technologies.filter(t => t.category === 'Desktop'),
    Tools: technologies.filter(t => t.category === 'Tools')
  }))

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

