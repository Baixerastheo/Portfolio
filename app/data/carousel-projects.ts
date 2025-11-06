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
        title: "A completer",
        description: "Une description qui décrit le projet en quelques mots.",
        image: "/project1.jpg",
        technologies: ["Nothing", "Nothing", "Nothing", "Nothing"],
        link: "#",
        github: "#"
    },
    {
        id: 2,
        title: "A completer",
        description: "Une description qui décrit le projet en quelques mots.",
        image: "/project2.jpg",
        technologies: ["Nothing", "Nothing", "Nothing", "Nothing"],
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
        title: "A completer",
        description: "Une description qui décrit le projet en quelques mots.",
        image: "/project4.jpg",
        technologies: ["Nothing", "Nothing", "Nothing", "Nothing"],
        link: "#",
        github: "#"
    }
]

