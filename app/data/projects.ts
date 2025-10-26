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
    title: "E-commerce Vue.js",
    description: "Application e-commerce complète avec gestion de panier et système de paiement.",
    image: null,
    technologies: ["Vue.js", "Nuxt.js", "TypeScript", "Node.js"],
    category: "Full Stack",
    status: "En cours",
    whatILearned: "Ce projet m'a permis de maîtriser la gestion d'état avec Vue 3, la création d'APIs REST, et la gestion de bases de données. J'ai appris à structurer un projet full-stack et à gérer l'authentification utilisateur.",
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
    title: "Application Desktop Qt",
    description: "Application desktop native avec Qt et C++.",
    image: null,
    technologies: ["Qt", "C++", ".NET"],
    category: "Desktop",
    status: "En cours",
    whatILearned: "J'ai appris le développement d'applications desktop natives avec Qt, la gestion de l'interface utilisateur et les interactions système.",
    skillsGained: ["Desktop apps", "Qt", "Native development"],
  }
]

