/** Clubs partenaires signés. `edition` : nom de l'édition aux couleurs du club, s'il en a une. */
export const clubs: { name: string; city: string; url?: string; edition?: string }[] = [
  { name: "Padel House", city: "Cenon", url: "https://www.padelhousefrance.net/" },
];

export const hasClubEdition = clubs.some((c) => c.edition);
