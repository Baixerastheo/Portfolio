export const getTechIcon = (techName: string): string => {
  return techName.charAt(0).toUpperCase()
}

export const getTabIcon = (category: string): string => {
  const icons: Record<string, string> = {
    'Frontend': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
    'Backend': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    'Desktop': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
    'Tools': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`
  }
  return icons[category] || ''
}

export const getProjectImage = (image: string | null): string => {
  return image || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23333333;stop-opacity:0.8" /%3E%3Cstop offset="100%25" style="stop-color:%231a1a1a;stop-opacity:0.6" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="400" height="200" fill="url(%23grad)"/%3E%3Cpath d="M150 80 L250 80 M200 40 L200 120 M150 120 L250 120" stroke="%23666666" stroke-width="3" fill="none" opacity="0.6"/%3E%3Ccircle cx="200" cy="80" r="25" fill="none" stroke="%23666666" stroke-width="3" opacity="0.4"/%3E%3Ctext x="200" y="150" text-anchor="middle" fill="%23cccccc" font-size="20" opacity="0.8"%3ENo Image%3C/text%3E%3C/svg%3E'
}

