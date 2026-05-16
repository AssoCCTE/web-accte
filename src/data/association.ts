export const associationPage = {
  title: "L'association",
  description:
    "Découvrez l'ACCTE, l'association qui porte les travaux de la Convention citoyenne sur les temps de l'enfant.",
  sections: [
    {
      id: "qui-sommes-nous",
      title: "Qui sommes-nous ?",
      paragraphs: [
        "L'ACCTE — Association de la Convention Citoyenne sur les Temps de l'Enfant — rassemble les personnes engagées autour des conclusions et de la continuité des travaux de la convention.",
        "Notre rôle est de faire vivre une démarche citoyenne exigeante, accessible et utile pour repenser les temps de l'enfant au quotidien.",
      ],
    },
    {
      id: "contexte",
      title: "Le contexte de la convention",
      paragraphs: [
        "La Convention citoyenne sur les temps de l'enfant a réuni des participant·es tiré·es au sort, représentatif·es de la diversité de la société, pour débattre et formuler des propositions.",
        "Cette expérience démocratique place l'enfance, la parentalité et l'organisation des temps — scolaires, extrascolaires, familiaux — au centre des réflexions collectives.",
      ],
    },
    {
      id: "mission",
      title: "Notre mission",
      paragraphs: [
        "Porter et diffuser les travaux de la convention auprès des institutions, des professionnel·les, des familles et du grand public.",
        "Maintenir un espace de dialogue entre les acteurs concernés par les temps de l'enfant.",
        "Contribuer à des politiques publiques et des pratiques plus cohérentes, équitables et attentives aux besoins des enfants.",
      ],
    },
    {
      id: "statuts",
      title: "Statuts de l'association",
      paragraphs: [
        "Les statuts précisent l'objet, le fonctionnement et les règles de vie de l'association.",
      ],
      links: [
        {
          label: "Consulter les statuts (PDF, 137 ko)",
          href: "/documents/statuts-association-accte.pdf",
        },
      ],
    },
    {
      id: "valeurs",
      title: "Nos valeurs",
      items: [
        {
          title: "Engagement citoyen",
          text: "Une démarche fondée sur l'écoute, le débat argumenté et la diversité des points de vue.",
        },
        {
          title: "Intérêt de l'enfant",
          text: "Placer le bien-être et l'épanouissement des enfants au cœur de chaque proposition.",
        },
        {
          title: "Transparence",
          text: "Partager les travaux, les méthodes et les suites données aux recommandations.",
        },
        {
          title: "Collectif",
          text: "Agir ensemble, en associant les expériences du terrain et la recherche.",
        },
      ],
    },
  ],
} as const;
