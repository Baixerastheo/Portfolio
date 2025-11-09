# Portfolio - Baixeras Théo

Portfolio personnel moderne et responsive développé avec Nuxt 3 et Vue.js. Présentation de mes projets, compétences et parcours en tant que développeur junior.

**Site en ligne** : [portfolio-theo-baixeras.vercel.app](https://portfolio-theo-baixeras.vercel.app)

## Technologies utilisées

- **Framework** : [Nuxt 3](https://nuxt.com/) (v4.1.3)
- **UI** : [Vue.js](https://vuejs.org/) (v3.5.22)
- **Langage** : TypeScript
- **Styling** : CSS3 avec variables CSS personnalisées
- **Déploiement** : Vercel

## Fonctionnalités

- **Design moderne** : Interface élégante avec animations fluides et transitions
- **Responsive** : Adapté à tous les écrans (mobile, tablette, desktop)
- **Sections principales** :
  - **Hero Section** : Présentation avec téléchargement du CV
  - **Projets** : Carousel et section détaillée de mes réalisations
  - **Technologies** : Stack technique avec barres de progression et détails par technologie
  - **Parcours** : Timeline de mon évolution professionnelle
  - **Contact** : Formulaire de contact fonctionnel avec EmailJS
- **SEO optimisé** : Meta tags, Open Graph, Twitter Cards
- **Performance** : SSR (Server-Side Rendering) avec Nuxt 3
- **Animations** : Transitions de page et animations CSS

## Installation

### Prérequis

- Node.js (v18 ou supérieur)
- npm, yarn, pnpm ou bun

### Étapes

1. **Cloner le repository**
```bash
git clone https://github.com/Baixerastheo/portfolio.git
cd portfolio
```

2. **Installer les dépendances**
```bash
npm install
# ou
pnpm install
# ou
yarn install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
# ou
pnpm dev
# ou
yarn dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## Scripts disponibles

```bash
# Développement
npm run dev          # Lance le serveur de développement

# Production
npm run build        # Build pour la production
npm run preview      # Prévisualise le build de production
npm run generate     # Génère une version statique
```

## Structure du projet

```
portfolio/
├── app/
│   ├── assets/
│   │   └── styles/          # Fichiers CSS par composant
│   ├── components/          # Composants Vue réutilisables
│   ├── composables/         # Composables Vue (logique réutilisable)
│   ├── data/                # Données statiques (projets, technologies, etc.)
│   ├── layouts/             # Layouts de page
│   ├── pages/               # Pages de l'application
│   ├── server/              # API routes et server-side
│   └── utils/               # Utilitaires et helpers
├── public/                  # Fichiers statiques (images, PDF, etc.)
├── nuxt.config.ts           # Configuration Nuxt
├── package.json             # Dépendances et scripts
└── vercel.json              # Configuration Vercel
```

## Composants principaux

- **Header** : Navigation avec menu responsive
- **HeroSection** : Section d'accueil avec CTA
- **ProjectsCarousel** : Carousel des projets en vedette
- **ProjectsSection** : Section détaillée des projets
- **TechnologiesSection** : Affichage des technologies avec barres de progression
- **JourneySection** : Timeline du parcours
- **EvolutionSection** : Évolution des compétences
- **ContactForm** : Formulaire de contact avec validation
- **Footer** : Pied de page avec liens sociaux

## Configuration EmailJS

Le formulaire de contact utilise EmailJS pour l'envoi d'emails. Pour le configurer :

1. Créer un compte sur [EmailJS](https://www.emailjs.com/)
2. Configurer un service email
3. Créer un template
4. Mettre à jour les clés dans `app/composables/useContact.ts`

Pour plus de détails, consultez le fichier `CONTACT_SETUP.md`

## Déploiement

### Vercel (recommandé)

1. **Connecter le repository GitHub à Vercel**
2. Vercel détectera automatiquement Nuxt 3
3. Les paramètres suivants seront automatiques :
   - Build Command : `npm run build`
   - Output Directory : `.output/public`
   - Install Command : `npm install`

Le site sera déployé automatiquement à chaque push sur la branche principale.

### Autres plateformes

Le projet peut être déployé sur :
- **Netlify** : Compatible avec Nuxt 3
- **Cloudflare Pages** : Support Nuxt 3
- **AWS Amplify** : Configuration Nuxt disponible
- **Docker** : Image Docker possible avec Nitro

## Projets présentés

- **ByeWork** : Plateforme de recherche d'emploi (React, Express, Node.js)
- **J-Map** : Tableau de bord interactif (Rust, Tauri, Svelte)
- **Digital Resume** : CV numérique interactif (HTML, CSS, JavaScript)
- **Barcassone** : Jeu tower defense 2D (Java, Java 2D, LibGDX)

## Contact

- **Email** : theo.baixeras@gmail.com
- **GitHub** : [@Baixerastheo](https://github.com/Baixerastheo)
- **LinkedIn** : [Théo Baixeras](https://www.linkedin.com/in/theo-baixeras-198231382)

## Licence

Ce projet est privé et personnel.

## Auteur

**Baixeras Théo** - Développeur Junior Full Stack

Passionné par la création d'expériences web innovantes et performantes.

---

Si ce projet vous plaît, n'hésitez pas à mettre une étoile !
