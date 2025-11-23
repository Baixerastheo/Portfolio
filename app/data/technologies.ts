export interface Technology {
  name: string
  category: string
  mastered: boolean
  level: number
  githubLink?: string
  description?: string
}

export const technologies: Technology[] = [
  // Frontend
  { 
    name: "Vue.js", 
    category: "Frontend", 
    mastered: true, 
    level: 90,
    githubLink: "https://github.com/Baixerastheo/portfolio",
    description: "Utilisé dans mon portfolio pour créer une interface utilisateur réactive et moderne."
  },
  { name: "React", category: "Frontend", mastered: true, level: 82, githubLink: "https://github.com/LucasGonz27/ByeWork.app", description: "Utilisé dans le projet ByeWork pour créer une interface utilisateur réactive et moderne." },
  { 
    name: "Nuxt.js", 
    category: "Frontend", 
    mastered: true, 
    level: 85,
    githubLink: "https://github.com/Baixerastheo/portfolio",
    description: "Framework utilisé pour ce portfolio, permettant le SSR et une meilleure performance SEO."
  },
  { 
    name: "TypeScript", 
    category: "Frontend", 
    mastered: true, 
    level: 70,
    githubLink: "https://github.com/Baixerastheo/portfolio",
    description: "Utilisé pour la majorité de mes projets frontend."
  },
  { 
    name: "JavaScript", 
    category: "Frontend", 
    mastered: true, 
    level: 95,
    githubLink: "https://github.com/Baixerastheo/portfolio",
    description: "Langage principal utilisé dans tous mes projets frontend, notamment ce portfolio."
  },
  { 
    name: "CSS3", 
    category: "Frontend", 
    mastered: true, 
    level: 90,
    githubLink: "https://github.com/Baixerastheo/portfolio",
    description: "Utilisé pour le design et les animations de ce portfolio avec des gradients et transitions modernes."
  },
  { 
    name: "HTML5", 
    category: "Frontend", 
    mastered: true, 
    level: 95,
    githubLink: "https://github.com/Baixerastheo/portfolio",
    description: "Structure sémantique de base utilisée dans tous mes projets web, y compris ce portfolio."
  },
  { name: "Svelte", category: "Frontend", mastered: false, level: 40 },
  { name: "TailwindCSS", category: "Frontend", mastered: false, level: 45 },
  { name: "Leaflet", category: "Frontend", mastered: false, level: 35 },

  // Backend
  { name: "Node.js", category: "Backend", mastered: true, level: 88, githubLink: "https://github.com/LucasGonz27/ByeWork.app", description: "Utilisé dans le projet ByeWork pour créer une API REST et un serveur Node.js." },
  { name: "Express", category: "Backend", mastered: true, level: 84, githubLink: "https://github.com/LucasGonz27/ByeWork.app", description: "Utilisé dans le projet ByeWork pour créer une API REST et un serveur Express." },
  { name: "PHP", category: "Backend", mastered: true, level: 96 },
  { name: "C#", category: "Backend", mastered: true, level: 83 },
  { name: ".NET", category: "Backend", mastered: true, level: 80 },
  { name: "MongoDB", category: "Backend", mastered: false, level: 60 },
  { name: "MySQL", category: "Backend", mastered: true, level: 95 },
  { name: "SQL Server", category: "Backend", mastered: true, level: 95 },
  { name: "SQLite", category: "Backend", mastered: false, level: 40 },
  { name: "REST API", category: "Backend", mastered: true, level: 85 },
  { name: "Diesel", category: "Backend", mastered: false, level: 30 },

  // Desktop
  { name: "Java", category: "Desktop", mastered: true, level: 84 },
  { name: "Java 2D", category: "Desktop", mastered: true, level: 56 },
  { name: "LibGDX", category: "Desktop", mastered: false, level: 40 },
  { name: "Rust", category: "Desktop", mastered: false, level: 35 },
  { name: "Tauri", category: "Desktop", mastered: false, level: 30 },
  { name: "Geo Crate", category: "Desktop", mastered: false, level: 25 },

  // Tools
  { 
    name: "Git", 
    category: "Tools", 
    mastered: true, 
    level: 90,
    githubLink: "https://github.com/Baixerastheo",
    description: "Système de contrôle de version utilisé pour gérer tous mes projets, y compris ce portfolio."
  },
  { 
    name: "GitHub", 
    category: "Tools", 
    mastered: true, 
    level: 95,
    githubLink: "https://github.com/Baixerastheo",
    description: "Plateforme utilisée pour héberger et partager le code source de mes projets."
  },
  { 
    name: "Vite", 
    category: "Tools", 
    mastered: true, 
    level: 85,
    githubLink: "https://github.com/Baixerastheo/portfolio",
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
  { name: "Adobe Photoshop", category: "Tools", mastered: true, level: 100 },
  { name: "Adobe Illustrator", category: "Tools", mastered: true, level: 95 }
]

export const techTabs = ['Frontend', 'Backend', 'Desktop', 'Tools']

