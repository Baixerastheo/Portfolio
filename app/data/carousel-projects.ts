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
        title: "ByeWork",
        description: "Plateforme de recherche d'emploi avec filtres dynamiques et recherche fluide",
        image: "/byework.png",
        technologies: ["React", "Vite", "Express", "Node.js"],
        link: "#",
        github: "https://github.com/LucasGonz27/ByeWork.app"
    },
    {
        id: 2,
        title: "Barcassone",
        description: "Jeu vidéo de type tower defense en 2D développé en Java",
        image: "",
        technologies: ["Java", "Java 2D", "LibGDX"],
        link: "#",
        github: "https://github.com/LucasGonz27/BarCassonne"
    },
    {
        id: 3,
        title: "Digital Resume",
        description: "CV numérique interactif développé en HTML, CSS et JavaScript",
        image: "/digitalResume.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://baixerastheo.github.io/baixeras-theo/index.html",
        github: "https://github.com/Baixerastheo/baixeras-theo"
    },
    {
        id: 4,
        title: "J-Map",
        description: "Tableau de bord interactif avec visualisation de données en temps réel",
        image: "/project4.jpg",
        technologies: ["Rust", "Tauri", "Svelte", "TailwindCSS"],
        link: "#",
        github: "#"
    }
]

