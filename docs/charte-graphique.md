# Charte graphique ACCTE — Web

Référence pour l’identité visuelle du site statique ACCTE.

## Couleurs officielles


| Nom charte                 | HEX       | Usage web                                            |
| -------------------------- | --------- | ---------------------------------------------------- |
| Rose Magenta               | `#D81B60` | Titres de rubriques, accents, nav active, `.eyebrow` |
| Vert Feuillage             | `#4A7C44` | Puces des listes dans le contenu                     |
| Bleu Ciel                  | `#81D4FA` | Fonds légers, dégradé de page, cartes                |
| Bleu Marine Institutionnel | `#001D4A` | Texte principal, liens footer                        |


## Tokens CSS

Définis dans `[src/styles/global.css](../src/styles/global.css)`. Ne pas dupliquer de codes hex ailleurs.


| Token               | Valeur    | Rôle                   |
| ------------------- | --------- | ---------------------- |
| `--foreground`      | `#001d4a` | Texte principal        |
| `--accent`          | `#d81b60` | Rubriques, accents     |
| `--accent-green`    | `#4a7c44` | Puces listes           |
| `--accent-sky`      | `#81d4fa` | Fonds, dégradés        |
| `--background`      | `#ffffff` | Fond page              |
| `--surface`         | `#f0f9fd` | Header, footer, cartes |
| `--muted`           | `#3d5a73` | Texte secondaire       |
| `--accent-contrast` | `#ffffff` | Texte sur fond accent  |


## Assets


| Fichier              | Dimensions | Usage                                         |
| -------------------- | ---------- | --------------------------------------------- |
| `public/logo.png`    | 353×120    | Logo horizontal dans le header (lien accueil) |
| `public/favicon.png` | 120×120    | Favicon (pictogramme seul)                    |


Configuration centralisée dans `[src/data/site.ts](../src/data/site.ts)` (`site.logo`).

## Règles d’usage

- **Header** : logo horizontal seul (pas de texte « ACCTE » à côté — le visuel contient déjà le nom complet).
- **Mode** : clair uniquement (`color-scheme: light`). Pas de variante sombre charte.
- **Couleurs** : utiliser les variables CSS, pas la palette marron legacy (`#8a4f2b`).
- **Favicon** : pictogramme seul, pas le logo horizontal recadré.

## Icônes footer

Icônes monochromes (email, LinkedIn, Instagram) dans `src/components/icons/`, couleur via `currentColor` / `--foreground` sur les liens du footer.

## Fichiers à modifier pour l’identité visuelle

- `src/styles/global.css` — tokens
- `src/styles/site.css` — composants et pages
- `src/data/site.ts` — chemins logo
- `src/components/SiteHeader.astro` — affichage logo
- `src/components/SiteFooter.astro` — liens contact et réseaux
- `src/layouts/BaseLayout.astro` — favicon
- `public/logo.png`, `public/favicon.png` — assets

Lors d’une évolution de la charte, mettre à jour ce document, `global.css` et `[.cursor/rules/charte-accte.mdc](../.cursor/rules/charte-accte.mdc)`.