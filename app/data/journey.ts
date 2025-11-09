export interface JourneyStep {
  id: number
  title: string
  institution: string
  period: string
  description: string
  status: 'completed' | 'in-progress'
  iconType: 'education' | 'degree' | 'work'
}

export const journeySteps: JourneyStep[] = [
  {
    id: 1,
    title: "Baccalauréat",
    institution: "Lycée",
    period: "2023",
    description: "Formation technologique (STMG) au Lycée Privé Rabelais",
    status: 'completed',
    iconType: 'education'
  },
  {
    id: 2,
    title: "BTS SIO",
    institution: "Formation supérieure",
    period: "2023 - 2025",
    description: "BTS Services Informatiques aux Organisations option Solutions Logicielles et Applications Métiers (SLAM). Formation en développement web et logiciel.",
    status: 'completed',
    iconType: 'degree'
  },
  {
    id: 3,
    title: "Pré-Msc Pro",
    institution: "Epitech",
    period: "2025 - Présent",
    description: "Étudiant en préparation de Master en Informatique à Epitech.",
    status: 'in-progress',
    iconType: 'work'
  }
]

