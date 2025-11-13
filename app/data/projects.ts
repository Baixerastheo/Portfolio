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
    title: "ByeWork",
    description: "Plateforme de recherche d'emploi moderne. Interface intuitive permettant aux candidats de trouver des offres pertinentes et aux entreprises de publier leurs annonces.",
    image: "/byework.png",
    technologies: ["React", "Vite", "Express", "Node.js"],
    category: "Full Stack",
    status: "Terminé",
    whatILearned: "Ce projet m'a permis de développer une application complète avec système de recherche avancé et filtres dynamiques. J'ai appris à gérer des données et à créer une expérience utilisateur fluide, à mettre en place une architecture full-stack, à gérer l'authentification et l'autorisation, à créer une API REST, et à implémenter un système de recherche avancé avec des filtres dynamiques.",
    skillsGained: ["Architecture full-stack", "Gestion d'état", "API REST", "Recherche avancée", "Middleware", "Auth JWT"],
  },
  {
    id: 2,
    title: "J-Map",
    description: "Tableau de bord interactif avec visualisation de données en temps réel.",
    image: null,
    technologies: ["Rust", "Tauri", "Svelte", "TailwindCSS", "SQLite", "Diesel", "Geo Crate", "Leaflet"],
    category: "Desktop",
    status: "Terminé",
    whatILearned: "J'ai découvert comment créer des visualisations de données efficaces et interagir avec des APIs. Ce projet m'a initié aux graphiques dynamiques et à la manipulation de grands volumes de données.",
    skillsGained: ["Data visualization", "Chart.js", "API integration"],
  },
  {
    id: 3,
    title: "Digital Resume",
    description: "CV numérique interactif développé en HTML, CSS et JavaScript. Interface moderne et élégante présentant mes compétences, mon parcours et mes projets de manière dynamique.",
    image: "/digitalResume.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    status: "Terminé",
    whatILearned: "Ce projet m'a permis de créer un CV numérique interactif en utilisant uniquement les technologies web de base. J'ai appris à structurer un site avec HTML, à créer des animations et des transitions fluides avec CSS, et à ajouter de l'interactivité avec JavaScript vanilla.",
    skillsGained: ["HTML5", "CSS3", "JavaScript vanilla", "Responsive design", "UI/UX design", "Animations CSS"],
  },
  {
    id: 4,
    title: "Barcassone",
    description: "Jeu vidéo de type tower defense en 2D développé en Java. Défendez votre territoire en construisant des tours stratégiques pour repousser les vagues d'ennemis.",
    image: "/Barcassonne.png",
    technologies: ["Java", "Java 2D", "LibGDX"],
    category: "Desktop",
    status: "Terminé",
    whatILearned: "Ce projet m'a permis de découvrir le développement de jeux vidéo en Java. J'ai appris à gérer les graphismes 2D, les collisions, les systèmes de jeu (tours, ennemis, vagues), l'optimisation des performances et la création d'une interface utilisateur pour un jeu.",
    skillsGained: ["Game development", "Java 2D", "Game loop", "Collision detection", "Pathfinding", "UI/UX gaming"],
  }
]

