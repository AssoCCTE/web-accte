export const site = {
  name: "ACCTE",
  tagline: "Convention citoyenne sur les temps de l'enfant",
  logo: {
    src: "/logo.png",
    alt: "Association de la Convention Citoyenne sur les temps de l'enfant",
    width: 353,
    height: 120,
  },
  fullName:
    "Association de la Convention Citoyenne sur les Temps de l'Enfant",
  contactEmail: "ccte.asso@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/company/ccte-asso",
    instagram: "https://www.instagram.com/association_ccte",
  },
  nav: [
    { label: "Accueil", href: "/" },
    { label: "L'association", href: "/association/" },
    { label: "Les membres", href: "/membres/" },
  ],
} as const;

export function isActiveNav(href: string, pathname: string): boolean {
  if (href === "/") {
    return pathname === "/" || pathname === "";
  }

  return pathname.startsWith(href);
}
