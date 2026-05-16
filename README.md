# Web ACCTE

Site statique de l'**ACCTE** — Association de la Convention Citoyenne sur les Temps de l'Enfant.

## Pages


| Route           | Fichier                       |
| --------------- | ----------------------------- |
| `/`             | `src/pages/index.astro`       |
| `/association/` | `src/pages/association.astro` |
| `/rapport/`     | `src/pages/rapport.astro`     |
| `/membres/`     | `src/pages/membres.astro`     |


## Contenus provisoires

Les textes et la configuration sont centralisés dans `src/data/` :

- `site.ts` — email, réseaux sociaux, navigation
- `home.ts` — page d'accueil
- `association.ts` — page association
- `rapport.ts` — page rapport citoyen (vidéo, synthèse, rapport PDF)
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

Documents publics (PDF, etc.) : les fichiers placés dans `public/documents/` sont servés tels quels à l’URL `/documents/<nom-du-fichier>` (ex. statuts depuis `src/data/association.ts`, rapport et synthèse depuis `src/data/rapport.ts` : `ccte-rapport.pdf`, `ccte-synthese-rapport-2-pages.pdf`). Après remplacement d’un PDF, mettre à jour le texte du lien dans les données si la taille du fichier change.

## Principes

- Rendu statique avec Astro (`output: "static"`).
- Aucun framework JavaScript côté client.
- Header, footer et navigation partagés via `PageLayout.astro`.

