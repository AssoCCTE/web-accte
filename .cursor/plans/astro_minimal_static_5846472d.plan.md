---
name: Astro Minimal Static
overview: Créer à la racine du workspace un site Astro minimal, statique, piloté par Yarn, sans intégration React/Vue/Svelte/etc. et sans JavaScript client sauf besoin explicite ultérieur.
todos:
  - id: create-files
    content: Créer les fichiers minimaux Astro, layout, page, styles, README et .gitignore à la racine du workspace.
    status: completed
  - id: install-deps
    content: Installer les dépendances avec Yarn afin de générer `yarn.lock`.
    status: completed
  - id: verify-static-build
    content: Exécuter `yarn build` et vérifier que la sortie statique est générée sans framework JavaScript client.
    status: completed
isProject: false
---

# Plan De Création Astro Minimal

## Contexte
Le dossier cible [`/Users/mathieualison/Developer/Projects/web-accte`](/Users/mathieualison/Developer/Projects/web-accte) ne contient pas encore de `package.json`, `src/`, `astro.config.*`, `yarn.lock`, `.gitignore` ou `README*`. On peut donc initialiser le projet directement à la racine.

## Approche
- Créer un projet Astro manuel plutôt que via un template interactif, pour garder le contenu strictement minimal.
- Utiliser Yarn avec un [`package.json`](/Users/mathieualison/Developer/Projects/web-accte/package.json) contenant uniquement `astro` en dépendance de développement et les scripts `dev`, `build`, `preview`.
- Ajouter une config [`astro.config.mjs`](/Users/mathieualison/Developer/Projects/web-accte/astro.config.mjs) avec `output: 'static'` explicite, sans intégration framework.
- Créer une page unique [`src/pages/index.astro`](/Users/mathieualison/Developer/Projects/web-accte/src/pages/index.astro) rendue au build, sans balise `<script>` côté client.
- Ajouter un layout léger [`src/layouts/BaseLayout.astro`](/Users/mathieualison/Developer/Projects/web-accte/src/layouts/BaseLayout.astro) et une feuille CSS [`src/styles/global.css`](/Users/mathieualison/Developer/Projects/web-accte/src/styles/global.css) pour éviter tout JavaScript de présentation.
- Ajouter les fichiers de base [`public/favicon.svg`](/Users/mathieualison/Developer/Projects/web-accte/public/favicon.svg), [`.gitignore`](/Users/mathieualison/Developer/Projects/web-accte/.gitignore) et [`README.md`](/Users/mathieualison/Developer/Projects/web-accte/README.md).

## Structure Prévue
```text
.
├── astro.config.mjs
├── package.json
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── .gitignore
└── README.md
```

## Validation
- Installer les dépendances avec `yarn install`.
- Lancer `yarn build` pour confirmer la génération statique dans `dist/`.
- Vérifier que le projet ne contient aucune intégration de framework JavaScript et aucune logique client dans la page initiale.