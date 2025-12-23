export interface Technology {
  name: string;
  category: string;
  mastered: boolean;
  level: number;
  githubLink?: string;
  description?: string;
}

export const technologies: Technology[] = [
  // Frontend
  {
    name: "Vue.js",
    category: "Frontend",
    mastered: true,
    level: 90,
    githubLink: "https://github.com/Baixerastheo/portfolio",
    description: "Framework utilisé majoritairement dans mes projets web.",
  },
  {
    name: "React",
    category: "Frontend",
    mastered: true,
    level: 82,
    githubLink: "https://github.com/LucasGonz27/ByeWork.app",
    description:
      "Utilisé dans le projet ByeWork pour créer une interface utilisateur réactive et moderne.",
  },
  {
    name: "Nuxt.js",
    category: "Frontend",
    mastered: true,
    level: 85,
    githubLink: "https://github.com/Baixerastheo/portfolio",
    description:
      "Framework utilisé pour ce portfolio et sur mon projet d'e-commerce sur mon GitHub.",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    mastered: true,
    level: 78,
    githubLink: "https://github.com/Baixerastheo/portfolio",
    description: "Utilisé pour la majorité de mes projets frontend.",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    mastered: true,
    level: 95,
    githubLink: "https://github.com/Baixerastheo/portfolio",
    description:
      "Langage principal utilisé dans tous mes projets frontend, notamment ce portfolio.",
  },
  {
    name: "CSS3",
    category: "Frontend",
    mastered: true,
    level: 90,
    githubLink: "https://github.com/Baixerastheo/portfolio",
    description:
      "Utilisé pour le design et les animations de ce portfolio avec des gradients et transitions modernes.",
  },
  {
    name: "HTML5",
    category: "Frontend",
    mastered: true,
    level: 95,
    githubLink: "https://github.com/Baixerastheo/portfolio",
    description:
      "Structure sémantique de base utilisée dans tous mes projets web, y compris ce portfolio.",
  },

  // Backend
  {
    name: "NestJS",
    category: "Backend",
    mastered: true,
    level: 75,
    githubLink: "https://github.com/Baixerastheo/my-e-commerce",
    description: "Framework utilisé dans mon projet e-commerce.",
  },
  {
    name: "Node.js",
    category: "Backend",
    mastered: true,
    level: 88,
    githubLink: "https://github.com/LucasGonz27/ByeWork.app",
    description:
      "Utilisé dans le projet ByeWork pour créer une API REST et un serveur Node.js.",
  },
  {
    name: "Express",
    category: "Backend",
    mastered: true,
    level: 84,
    githubLink: "https://github.com/LucasGonz27/ByeWork.app",
    description:
      "Utilisé dans le projet ByeWork pour créer une API REST et un serveur Express.",
  },
  { name: "PHP", category: "Backend", mastered: true, level: 96 },
  { name: "C#", category: "Backend", mastered: true, level: 83 },
  { name: ".NET", category: "Backend", mastered: true, level: 80 },
  { name: "MySQL", category: "Backend", mastered: true, level: 95 },
  { name: "SQL Server", category: "Backend", mastered: true, level: 95 },
  { name: "SQLite", category: "Backend", mastered: false, level: 40 },
  { name: "REST API", category: "Backend", mastered: true, level: 85 },

  // Desktop
  { name: "Java", category: "Desktop", mastered: true, level: 84,  githubLink: "https://github.com/LucasGonz27/BarCassonne", description: "Pratiqué lors de ma formation à Epitech et utilisé dans mon projet de jeu vidéo en 2D."},
  { name: "Java 2D", category: "Desktop", mastered: true, level: 56, githubLink: "https://github.com/LucasGonz27/BarCassonne", description: "Utilisé dans mon projet de jeu vidéo en 2D."},
  { name: "LibGDX", category: "Desktop", mastered: false, level: 40, githubLink: "https://github.com/LucasGonz27/BarCassonne", description: "Librairie utilisée dans mon projet de jeu vidéo en 2D."},
  {
    name: "Windows Forms",
    category: "Desktop",
    mastered: true,
    level: 90,
    description:
      "Utilisé lors de mon Bts pour la majorité de mes projets en C#.",
  },

  // Tools
  {
    name: "Git",
    category: "Tools",
    mastered: true,
    level: 90,
    githubLink: "https://github.com/Baixerastheo",
    description:
      "Système de contrôle de version utilisé pour gérer tous mes projets, y compris ce portfolio.",
  },
  {
    name: "GitHub",
    category: "Tools",
    mastered: true,
    level: 95,
    githubLink: "https://github.com/Baixerastheo",
    description:
      "Plateforme utilisée pour héberger et partager le code source de mes projets.",
  },
  {
    name: "Vite",
    category: "Tools",
    mastered: true,
    level: 85,
    githubLink: "https://github.com/Baixerastheo/portfolio",
    description:
      "Build tool utilisé pour ce portfolio, offrant un développement rapide et une compilation optimisée.",
  },
  { name: "Cursor", category: "Tools", mastered: true, level: 90 },
  { name: "JetBrains", category: "Tools", mastered: true, level: 85 },
  {
    name: "Figma",
    category: "Tools",
    mastered: true,
    level: 80,
    description:
      "Outil de design utilisé pour créer les maquettes et prototypes de ce portfolio.",
  },
  { name: "Adobe Photoshop", category: "Tools", mastered: true, level: 100 },
  { name: "Adobe Illustrator", category: "Tools", mastered: true, level: 95 },

  // Cloud / DevOps
  {
    name: "Docker",
    category: "Cloud / DevOps",
    mastered: true,
    level: 80,
    description:
      "Conteneurisation d'applications pour un déploiement reproductible.",
  },
  {
    name: "GitLab CI/CD",
    category: "Cloud / DevOps",
    mastered: true,
    level: 79,
    description:
      "CI/CD pour automatiser les tests et déploiements de projets personnels.",
  },
  {
    name: "Jenkins",
    category: "Cloud / DevOps",
    mastered: true,
    level: 76,
    description:
      "CI/CD, utilisé lors d'un projet de groupe à Epitech pour découvrir le CI/CD.",
  },
  {
    name: "Vercel",
    category: "Cloud / DevOps",
    mastered: true,
    level: 80,
    description:
      "Déploiement de projets web avec Vercel, notamment pour ce portfolio.",
  },
  {
    name: "Kubernetes",
    category: "Cloud / DevOps",
    mastered: true,
    level: 60,
    description: "Orchestration de conteneurs, en phase de découverte.",
  },
  {
    name: "AWS",
    category: "Cloud / DevOps",
    mastered: true,
    level: 60,
    description: "Cloud computing, en phase de découverte.",
  },
  {
    name: "Ansible",
    category: "Cloud / DevOps",
    mastered: true,
    level: 60,
    description: "Automatisation de tâches, en phase de découverte.",
  },
  {
    name: "Terraform",
    category: "Cloud / DevOps",
    mastered: true,
    level: 60,
    description: "Infrastructure as Code, en phase de découverte.",
  },
];

export const techTabs = [
  "Frontend",
  "Backend",
  "Desktop",
  "Tools",
  "Cloud / DevOps",
];
