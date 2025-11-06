export interface Technology {
  name: string
  category: string
  mastered: boolean
  level: number // Pourcentage de maîtrise (0-100)
  githubLink?: string // Lien GitHub du projet utilisant cette technologie
  description?: string // Description du projet où cette technologie a été utilisée
}

export const technologies: Technology[] = [
  { 
    name: "Vue.js", 
    category: "Frontend", 
    mastered: true, 
    level: 90,
    githubLink: "https://github.com/yourusername/portfolio",
    description: "Utilisé dans mon portfolio pour créer une interface utilisateur réactive et moderne."
  },
  { name: "React", category: "Frontend", mastered: false, level: 45 },
  { 
    name: "Nuxt.js", 
    category: "Frontend", 
    mastered: true, 
    level: 85,
    githubLink: "https://github.com/yourusername/portfolio",
    description: "Framework utilisé pour ce portfolio, permettant le SSR et une meilleure performance SEO."
  },
  { 
    name: "TypeScript", 
    category: "Frontend", 
    mastered: false, 
    level: 60,
    githubLink: "https://github.com/yourusername/portfolio",
    description: "Utilisé pour améliorer la maintenabilité et la robustesse du code du portfolio."
  },
  { 
    name: "JavaScript", 
    category: "Frontend", 
    mastered: true, 
    level: 95,
    githubLink: "https://github.com/yourusername/portfolio",
    description: "Langage principal utilisé dans tous mes projets frontend, notamment ce portfolio."
  },
  { 
    name: "CSS3", 
    category: "Frontend", 
    mastered: true, 
    level: 90,
    githubLink: "https://github.com/yourusername/portfolio",
    description: "Utilisé pour le design et les animations de ce portfolio avec des gradients et transitions modernes."
  },
  { 
    name: "HTML5", 
    category: "Frontend", 
    mastered: true, 
    level: 95,
    githubLink: "https://github.com/yourusername/portfolio",
    description: "Structure sémantique de base utilisée dans tous mes projets web, y compris ce portfolio."
  },
  { name: "Node.js", category: "Backend", mastered: false, level: 50 },
  { name: "Express", category: "Backend", mastered: false, level: 40 },
  { name: "PHP", category: "Backend", mastered: false, level: 35 },
  { name: "Python", category: "Backend", mastered: false, level: 45 },
  { name: "C#", category: "Backend", mastered: false, level: 55 },
  { name: ".NET", category: "Backend", mastered: false, level: 50 },
  { name: "MongoDB", category: "Backend", mastered: false, level: 40 },
  { name: "MySQL", category: "Backend", mastered: false, level: 50 },
  { name: "SQL Server", category: "Backend", mastered: false, level: 45 },
  { name: "REST API", category: "Backend", mastered: true, level: 85 },
  { name: "Qt", category: "Desktop", mastered: false, level: 30 },
  { name: "C++", category: "Desktop", mastered: false, level: 35 },
  { name: "C#", category: "Desktop", mastered: false, level: 55 },
  { name: ".NET", category: "Desktop", mastered: false, level: 50 },
  { name: "Python", category: "Desktop", mastered: false, level: 45 },
  { name: "SQL Server", category: "Desktop", mastered: false, level: 45 },
  { 
    name: "Git", 
    category: "Tools", 
    mastered: true, 
    level: 90,
    githubLink: "https://github.com/yourusername",
    description: "Système de contrôle de version utilisé pour gérer tous mes projets, y compris ce portfolio."
  },
  { 
    name: "GitHub", 
    category: "Tools", 
    mastered: true, 
    level: 95,
    githubLink: "https://github.com/yourusername",
    description: "Plateforme utilisée pour héberger et partager le code source de mes projets."
  },
  { 
    name: "Vite", 
    category: "Tools", 
    mastered: true, 
    level: 85,
    githubLink: "https://github.com/yourusername/portfolio",
    description: "Build tool utilisé pour ce portfolio, offrant un développement rapide et une compilation optimisée."
  },
  { name: "Cursor", category: "Tools", mastered: true, level: 90 },
  { name: "JetBrains", category: "Tools", mastered: true, level: 85 },
  { 
    name: "Figma", 
    category: "Tools", 
    mastered: true, 
    level: 80,
    description: "Outil de design utilisé pour créer les maquettes et prototypes de ce portfolio."
  },
  { name: "Adobe Photoshop", category: "Tools", mastered: false, level: 40 },
  { name: "Adobe Illustrator", category: "Tools", mastered: false, level: 35 }
]

export const techTabs = ['Frontend', 'Backend', 'Desktop', 'Tools']

