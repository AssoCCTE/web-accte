export const site = {
  name: "ACCTE",
  tagline: "Convention citoyenne sur les temps de l'enfant",
  fullName:
    "Association de la Convention Citoyenne sur les Temps de l'Enfant",
  contactEmail: "contact@accte.org",
  social: {
    linkedin: "https://www.linkedin.com/company/accte",
    instagram: "https://www.instagram.com/accte",
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
