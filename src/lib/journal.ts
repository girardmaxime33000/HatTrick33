/** Articles du journal : un article par coup, rattaché au modèle du même nom (clé = slug du produit). */
export type Article = {
  slug: string;
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

export const articles: Article[] = [
  {
    slug: "la-bandeja",
    title: "La bandeja, le coup qui conserve le filet",
    intro:
      "Coup le plus joué en position haute, la bandeja permet de répondre à un lob sans abandonner le filet. Elle privilégie le placement à la puissance.",
    sections: [
      {
        heading: "Le principe",
        body: "La bandeja, « plateau » en espagnol, est une volée haute frappée à hauteur de tête, tamis légèrement ouvert. La balle part avec un effet coupé, à vitesse modérée, et retombe en fond de piste avec un rebond bas. L'objectif est de garder l'initiative et la position au filet face à un lob adverse, sans chercher le point gagnant.",
      },
      {
        heading: "Le geste",
        body: "Le joueur se place de profil, épaules tournées, le bras libre pointé vers la balle pour régler la distance. La frappe intervient devant le corps, dans un mouvement continu du haut vers l'avant. Le poids du corps passe de la jambe arrière à la jambe avant, ce qui permet de remonter au filet aussitôt après.",
      },
      {
        heading: "Quand la jouer",
        body: "La bandeja s'impose sur les lobs trop profonds pour être smashés. Jouée vers l'angle ou dans les pieds des adversaires, elle les maintient au fond de la piste et prépare la volée suivante.",
      },
    ],
  },
  {
    slug: "la-vibora",
    title: "La víbora, une volée haute à effet",
    intro:
      "Proche de la bandeja par sa préparation, la víbora s'en distingue par un effet latéral prononcé, qui rend le rebond difficile à contrôler.",
    sections: [
      {
        heading: "Le principe",
        body: "La víbora, « vipère » en espagnol, est une frappe haute qui combine un effet coupé et une rotation latérale. Après son rebond sur la vitre, la balle reste basse et s'écarte du joueur adverse, ce qui complique sa défense.",
      },
      {
        heading: "Le geste",
        body: "La préparation est celle d'une bandeja, de profil, coude haut. À l'impact, le tamis balaie la balle par le côté, dans un mouvement rapide de l'avant-bras qui se termine en travers du corps. La frappe est plus engagée et demande une bonne maîtrise du timing.",
      },
      {
        heading: "Quand la jouer",
        body: "La víbora convient aux lobs de hauteur moyenne, lorsque le joueur est bien placé et en équilibre. Dirigée vers la vitre latérale ou le centre de la piste, elle met la paire adverse sous pression avec une prise de risque inférieure à celle d'un smash.",
      },
    ],
  },
  {
    slug: "por-tres",
    title: "Le por tres, le smash qui sort de la piste",
    intro:
      "Coup le plus spectaculaire du padel, le por tres conclut le point en envoyant la balle hors de la piste après son rebond.",
    sections: [
      {
        heading: "Le principe",
        body: "Le por tres est un smash dont la balle, après avoir rebondi au sol puis sur la vitre de fond, franchit la paroi latérale, haute de trois mètres. Le coup doit son nom à cette hauteur. Sa variante, le por cuatro, fait sortir la balle par le fond de la piste, au-dessus des quatre mètres de la paroi arrière.",
      },
      {
        heading: "Le geste",
        body: "La frappe est réalisée bras tendu, au point le plus haut, en brossant la balle pour lui donner un effet lifté et latéral. L'effet compte davantage que la puissance : la rotation de la balle détermine la hauteur et la direction du rebond.",
      },
      {
        heading: "Quand le jouer",
        body: "Le por tres se tente sur un lob court, lorsque le joueur se trouve près du filet. Une exécution imprécise offre une balle facile à contrer. Lorsque la configuration du terrain le permet, les adversaires peuvent en outre sortir de la piste pour remettre la balle en jeu.",
      },
    ],
  },
  {
    slug: "punto-de-oro",
    title: "Le punto de oro, un point pour décider du jeu",
    intro:
      "À 40 partout, le punto de oro remplace l'avantage par un point unique. La règle a modifié la gestion des moments décisifs.",
    sections: [
      {
        heading: "Le principe",
        body: "Lorsque le score atteint 40 partout, un seul point est joué et la paire qui le remporte gagne le jeu. La paire qui reçoit choisit le côté sur lequel le service est effectué.",
      },
      {
        heading: "L'origine",
        body: "La règle a été introduite sur le circuit professionnel World Padel Tour en 2020, afin de raccourcir les matchs et d'en renforcer l'intensité. Elle a depuis été adoptée par de nombreux tournois et dans les parties amicales.",
      },
      {
        heading: "Comment l'aborder",
        body: "Le choix du côté de réception est une décision tactique : la paire désigne généralement son relanceur le plus régulier. Au service, la priorité va à une première balle engagée et à une montée rapide au filet.",
      },
    ],
  },
  {
    slug: "la-chiquita",
    title: "La chiquita, la balle courte qui reprend le filet",
    intro:
      "Jouée depuis le fond de la piste, la chiquita est une balle lente et basse, destinée à gêner les adversaires placés au filet.",
    sections: [
      {
        heading: "Le principe",
        body: "La chiquita est un coup de faible vitesse qui franchit le filet au plus bas pour retomber dans les pieds des joueurs adverses. Elle les oblige à volleyer vers le haut, ce qui limite leurs possibilités d'attaque.",
      },
      {
        heading: "Le geste",
        body: "La préparation est courte et la frappe accompagnée, sans accélération, avec un tamis légèrement ouvert. La précision de la trajectoire prime : une balle trop haute expose à une volée gagnante.",
      },
      {
        heading: "Quand la jouer",
        body: "La chiquita s'utilise en alternative au lob, lorsque les adversaires sont bien installés au filet. Elle est souvent suivie d'une montée, afin de reprendre la position au filet sur la volée suivante.",
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
