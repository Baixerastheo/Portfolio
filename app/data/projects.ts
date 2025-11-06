export interface Project {
  id: number
  title: string
  description: string
  image: string | null
  technologies: string[]
  category: string
  status: string
  whatILearned: string
  skillsGained: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: "A completer",
    description: "Une descritpion longue du projet qui explique les objectifs et les défis rencontrés.",
    image: null,
    technologies: ["Vue.js", "Nuxt.js", "TypeScript", "Node.js"],
    category: "Full Stack",
    status: "En cours",
    whatILearned: "",
    skillsGained: ["Architecture full-stack", "Gestion d'état", "API REST"],
  },
  {
    id: 2,
    title: "J-Map",
    description: "Tableau de bord interactif avec visualisation de données en temps réel.",
    image: null,
    technologies: ["Rust", "Tauri", "Svelte", "TailwindCSS", "SQLlite", "Diesel", "Geo Crate", "Leaflet"],
    category: "Desktop",
    status: "Terminé",
    whatILearned: "J'ai découvert comment créer des visualisations de données efficaces et interagir avec des APIs. Ce projet m'a initié aux graphiques dynamiques et à la manipulation de grands volumes de données.",
    skillsGained: ["Data visualization", "Chart.js", "API integration"],
  },
  {
    id: 3,
    title: "Portfolio Responsive",
    description: "Site portfolio moderne avec animations CSS et design responsive.",
    image: "/portfolio-resp.png",
    technologies: ["Vue.js", "Nuxt", "TypeScript", "CSS3", "GSAP"],
    category: "Frontend",
    status: "Terminé",
    whatILearned: "Mon premier projet Nuxt m'a appris le SSR (Server-Side Rendering), l'optimisation SEO et les animations CSS avancées. J'ai compris l'importance du responsive design et des performances web.",
    skillsGained: ["SSR", "SEO optimization", "CSS animations", "Responsive design"],
  },
  {
    id: 4,
    title: "Calculatrice graphique Qt",
    description: "Une calculatrice graphique, avec une interface réalisée avec Qt et un côté programmation en C++.",
    image: null,
    technologies: ["Qt", "C++", ".NET"],
    category: "Desktop",
    status: "En cours",
    whatILearned: "J'ai appris le développement d'interface graphique avec Qt et les bases du langage C++.",
    skillsGained: ["Desktop apps", "Qt", "Native development"],
  }
]

