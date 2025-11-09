export interface EvolutionItem {
  skill: string
  start: string
  progress: string
  level: string
}

export const myEvolution: EvolutionItem[] = [
  {
    skill: "Frontend",
    start: "Ma passion pour le design web m'a poussé à apprendre différentes technologies frontend.",
    progress: "Chaque projet a renforcé ma maîtrise de JavaScript, du responsive design et de l'optimisation des performances.",
    level: "Je peux maintenant créer des interfaces modernes et performantes."
  },
  {
    skill: "Backend",
    start: "Initialement focalisé sur le frontend, j'ai exploré le backend avec Node.js.",
    progress: "Mes projets m'ont appris à créer des APIs, gérer des bases de données et implémenter l'authentification.",
    level: "Je développe maintenant des applications web et desktop avec une architecture full-stack complètes."
  }
]

