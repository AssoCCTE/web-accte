export const rapportPage = {
  title: "Le rapport citoyen",
  description:
    "Le rapport de la Convention citoyenne sur les temps de l'enfant : travaux, propositions et ressources pour le consulter.",
  sections: [
    {
      id: "presentation",
      title: "Le rapport de la convention",
      paragraphs: [
        "À l'issue de ses travaux, la Convention citoyenne sur les temps de l'enfant a produit un rapport qui formalise les débats, les analyses et les propositions des participant·es.",
        "Ce document constitue la référence pour comprendre les recommandations issues de cette démarche démocratique sur les temps scolaires, extrascolaires et familiaux.",
      ],
    },
    {
      id: "video",
      title: "Vidéo de présentation",
      paragraphs: [
        "Une présentation du rapport a été diffusée sur YouTube pour en restituer les grandes lignes.",
      ],
      embed: {
        src: "https://www.youtube.com/embed/wOgXeZP4ei0?si=szkTJvbNRl70DTpc",
        title: "Présentation du rapport citoyen sur YouTube",
      },
      links: [
        {
          label: "Voir la vidéo de présentation du rapport (YouTube)",
          href: "https://www.youtube.com/watch?v=wOgXeZP4ei0",
        },
      ],
    },
    {
      id: "synthese",
      title: "Synthèse en 2 pages",
      paragraphs: [
        "Pour une lecture rapide, une synthèse de deux pages reprend l'essentiel du rapport et ses principales orientations.",
      ],
      links: [
        {
          label: "Consulter la synthèse (PDF, 2 pages, 138 ko)",
          href: "/documents/ccte-synthese-rapport-2-pages.pdf",
        },
      ],
    },
    {
      id: "rapport-complet",
      title: "Rapport complet",
      paragraphs: [
        "Le rapport citoyen intégral détaille l'ensemble des travaux et des propositions de la convention.",
      ],
      links: [
        {
          label: "Consulter le rapport citoyen (PDF, ~4,7 Mo)",
          href: "/documents/ccte-rapport.pdf",
        },
      ],
    },
  ],
} as const;
