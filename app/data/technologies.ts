export interface Technology {
  name: string
  category: string
  mastered: boolean
}

export const technologies: Technology[] = [
  { name: "Vue.js", category: "Frontend", mastered: true },
  { name: "React", category: "Frontend", mastered: false },
  { name: "Nuxt.js", category: "Frontend", mastered: true },
  { name: "TypeScript", category: "Frontend", mastered: false },
  { name: "JavaScript", category: "Frontend", mastered: true },
  { name: "CSS3", category: "Frontend", mastered: true },
  { name: "HTML5", category: "Frontend", mastered: true },
  { name: "Node.js", category: "Backend", mastered: false },
  { name: "Express", category: "Backend", mastered: false },
  { name: "PHP", category: "Backend", mastered: false },
  { name: "Python", category: "Backend", mastered: false },
  { name: "C#", category: "Backend", mastered: false },
  { name: ".NET", category: "Backend", mastered: false },
  { name: "MongoDB", category: "Backend", mastered: false },
  { name: "MySQL", category: "Backend", mastered: false },
  { name: "SQL Server", category: "Backend", mastered: false },
  { name: "REST API", category: "Backend", mastered: true },
  { name: "Qt", category: "Desktop", mastered: false },
  { name: "C++", category: "Desktop", mastered: false },
  { name: "C#", category: "Desktop", mastered: false },
  { name: ".NET", category: "Desktop", mastered: false },
  { name: "Python", category: "Desktop", mastered: false },
  { name: "SQL Server", category: "Desktop", mastered: false },
  { name: "Git", category: "Tools", mastered: true },
  { name: "GitHub", category: "Tools", mastered: true },
  { name: "Vite", category: "Tools", mastered: true },
  { name: "Cursor", category: "Tools", mastered: true },
  { name: "JetBrains", category: "Tools", mastered: true },
  { name: "Figma", category: "Tools", mastered: true },
  { name: "Adobe Photoshop", category: "Tools", mastered: false },
  { name: "Adobe Illustrator", category: "Tools", mastered: false }
]

export const techTabs = ['Frontend', 'Backend', 'Desktop', 'Tools']

