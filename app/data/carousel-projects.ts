export interface CarouselProject {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
  github: string
}

export const carouselProjects: CarouselProject[] = [
  {
    id: 1,
    title: "E-commerce Vue.js",
    description: "Application e-commerce moderne avec Vue.js et Nuxt.js",
    image: "/project1.jpg",
    technologies: ["Vue.js", "Nuxt.js", "CSS3", "JavaScript"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Tableau de bord interactif avec graphiques en temps réel",
    image: "/project2.jpg",
    technologies: ["Vue.js", "Chart.js", "SCSS", "API REST"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Portfolio Responsive",
    description: "Site portfolio responsive avec animations CSS",
    image: "/portfolio-resp.png",
    technologies: ["Vue.Js", "Nuxt", "Typescript", "Javascript", "CSS3"],
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "App Mobile PWA",
    description: "Application mobile progressive avec Vue.js",
    image: "/project4.jpg",
    technologies: ["Vue.js", "PWA", "Service Workers", "CSS Grid"],
    link: "#",
    github: "#"
  }
]

