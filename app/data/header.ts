export interface NavLink {
  name: string
  url: string
  icon: 'home' | 'about' | 'projects' | 'contact'
}

export interface SocialAction {
  name: string
  url: string
  icon: 'email' | 'github' | 'linkedin'
  title: string
}

export interface HeaderData {
  name: string
  navLinks: NavLink[]
  socialActions: SocialAction[]
}

export const headerData: HeaderData = {
  name: "Baixeras Théo",
  navLinks: [
    {
      name: "Accueil",
      url: "/",
      icon: "home"
    },
    {
      name: "À propos",
      url: "/about",
      icon: "about"
    },
    {
      name: "Projets",
      url: "/projects",
      icon: "projects"
    },
    {
      name: "Contact",
      url: "/contact",
      icon: "contact"
    }
  ],
  socialActions: [
    {
      name: "Email",
      url: "mailto:theo.baixeras@gmail.com",
      icon: "email",
      title: "Contact"
    },
    {
      name: "GitHub",
      url: "https://github.com/Baixerastheo",
      icon: "github",
      title: "GitHub"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/theo-baixeras-198231382",
      icon: "linkedin",
      title: "LinkedIn"
    }
  ]
}

