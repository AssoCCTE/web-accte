# Web ACCTE

Site statique de l'**ACCTE** — Association de la Convention Citoyenne sur les Temps de l'Enfant.

## Pages

| Route | Fichier |
|-------|---------|
| `/` | `src/pages/index.astro` |
| `/association/` | `src/pages/association.astro` |
| `/membres/` | `src/pages/membres.astro` |

## Contenus provisoires

Les textes et la configuration sont centralisés dans `src/data/` :

- `site.ts` — email, réseaux sociaux, navigation
- `home.ts` — page d'accueil
- `association.ts` — page association
- `membres.ts` — page membres (profil générique des participant·es)

## Commandes

```sh
yarn install
yarn dev
yarn build
yarn preview
```

## Charte graphique

Couleurs, logos et règles d’usage : [docs/charte-graphique.md](docs/charte-graphique.md).

Assets dans `public/` : `logo.png` (header), `favicon.png` (onglet).

## Principes

- Rendu statique avec Astro (`output: "static"`).
- Aucun framework JavaScript côté client.
- Header, footer et navigation partagés via `PageLayout.astro`.
