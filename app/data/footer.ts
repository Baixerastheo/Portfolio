export interface SocialLink {
  name: string
  url: string
  icon: 'github' | 'linkedin' | 'twitter' | 'mail'
}

export interface QuickLink {
  name: string
  url: string
}

export interface FooterData {
  name: string
  title: string
  description: string
  email: string
  phone: string
  location: string
  socialLinks: SocialLink[]
  quickLinks: QuickLink[]
  technologies: string[]
}

export const footerData: FooterData = {
  name: "Baixeras Théo",
  title: "Développeur Junior",
  description: "Passionné par la programmation d'expériences Web et Applications.",
  email: "contact@example.com",
  phone: "+33 6 00 00 00 00",
  location: "France",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/Baixerastheo",
      icon: "github"
    },
    {
      name: "LinkedIn", 
      url: "www.linkedin.com/in/theo-baixeras-198231382",
      icon: "linkedin"
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: "twitter"
    },
    {
      name: "Email",
      url: "mailto:theo.baixeras@gmail.com",
      icon: "mail"
    }
  ],
  quickLinks: [
    { name: "Accueil", url: "/" },
    { name: "À propos", url: "/about" },
    { name: "Projets", url: "/projects" }
  ],
  technologies: ["Vue.js", "Nuxt.js", "TypeScript", "CSS3", "JavaScript"]
}

