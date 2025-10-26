export const getJourneyIcon = (iconType: string): string => {
  const icons: Record<string, string> = {
    education: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="#00DC82" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="#00DC82" stroke-width="2" fill="none"/>
      <path d="M8 7h8M8 11h8M8 15h4" stroke="#00DC82" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
    degree: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="7" width="20" height="10" rx="2" stroke="#00DC82" stroke-width="2" fill="none"/>
      <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke="#00DC82" stroke-width="2" fill="none"/>
      <line x1="12" y1="12" x2="12" y2="19" stroke="#00DC82" stroke-width="2"/>
      <line x1="9" y1="19" x2="15" y2="19" stroke="#00DC82" stroke-width="2"/>
    </svg>`,
    work: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9l9-3 9 3" stroke="#00DC82" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 6v15M6 9v12M6 9l6 3M6 9l6-3M18 9l-6 3M18 9l-6-3M18 9v12" stroke="#00DC82" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  }
  return icons[iconType] || ''
}

