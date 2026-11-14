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
  {
    slug: "el-globo",
    title: "Le globo, le lob qui redonne le filet",
    intro:
      "Coup le plus utilisé en défense, le globo fait reculer la paire adverse et permet de reprendre la position au filet.",
    sections: [
      {
        heading: "Le principe",
        body: "Le globo est une balle haute et profonde, jouée depuis le fond de la piste par-dessus les joueurs placés au filet. Un lob réussi retombe près de la vitre de fond, ce qui oblige les adversaires à reculer et à défendre à leur tour.",
      },
      {
        heading: "Le geste",
        body: "La préparation est courte, le tamis ouvert, les jambes fléchies. La frappe accompagne la balle de bas en haut, sans à-coup, et le geste se termine au-dessus de l'épaule. La hauteur prime sur la vitesse : elle laisse le temps de monter au filet.",
      },
      {
        heading: "Quand le jouer",
        body: "Le globo se joue dès que les adversaires sont installés au filet, de préférence sur une balle confortable. Dirigé en diagonale, il offre davantage de longueur et réduit le risque de smash.",
      },
    ],
  },
  {
    slug: "el-remate",
    title: "Le remate, le smash qui conclut le point",
    intro:
      "Coup d'attaque par excellence, le remate sanctionne un lob trop court. Il se décline en plusieurs variantes selon l'effet et la trajectoire recherchés.",
    sections: [
      {
        heading: "Le principe",
        body: "Le remate est une frappe au-dessus de la tête, jouée bras tendu, avec l'intention de finir le point. Selon l'effet donné, la balle revient vers le camp du frappeur après son rebond sur la vitre, ou sort de la piste par le côté ou par le fond.",
      },
      {
        heading: "Le geste",
        body: "Le joueur se place de profil sous la balle, bras libre levé, puis frappe au point le plus haut en transférant son poids vers l'avant. La prise et l'orientation du tamis déterminent l'effet : à plat pour la puissance, lifté pour la hauteur du rebond.",
      },
      {
        heading: "Quand le jouer",
        body: "Le remate se tente sur un lob court, lorsque le joueur est en équilibre et proche du filet. Sur un lob profond, une bandeja ou une víbora constitue un choix plus sûr.",
      },
    ],
  },
  {
    slug: "la-volea",
    title: "La volea, le coup de base du jeu au filet",
    intro:
      "La volea se joue avant le rebond, en position avancée. Elle permet de maintenir la pression sur la paire adverse et de construire le point.",
    sections: [
      {
        heading: "Le principe",
        body: "Au padel, la paire qui tient le filet domine l'échange. La volea est l'outil de cette domination : une frappe courte, jouée avant le rebond, qui prive l'adversaire de temps et l'oblige à défendre depuis le fond de la piste.",
      },
      {
        heading: "Le geste",
        body: "La préparation est réduite, raquette devant soi, coude décollé du corps. La frappe se fait devant le corps, avec un léger effet coupé qui maintient la balle basse après son rebond. Le jeu de jambes compte autant que le bras : un pas vers la balle donne le contrôle.",
      },
      {
        heading: "Quand la jouer",
        body: "La volea profonde, vers les angles, maintient les adversaires au fond de la piste. La volea plus courte, ou croisée vers la grille, sert à conclure lorsque l'occasion se présente.",
      },
    ],
  },
  {
    slug: "bajada-de-pared",
    title: "La bajada de pared, attaquer depuis le fond de la piste",
    intro:
      "La bajada de pared exploite un rebond haut sur la vitre de fond pour transformer une position défensive en attaque.",
    sections: [
      {
        heading: "Le principe",
        body: "Lorsqu'un lob adverse rebondit haut sur la vitre de fond, la balle redescend à une hauteur favorable. Le joueur peut alors la frapper de haut en bas, avec vitesse, au lieu de simplement la remettre en jeu.",
      },
      {
        heading: "Le geste",
        body: "Le joueur accompagne la balle vers la vitre, de profil, raquette armée en hauteur. Il laisse la balle ressortir puis frappe devant lui, à hauteur d'épaule ou au-dessus, en avançant dans la balle. Le placement dépend de la lecture du rebond.",
      },
      {
        heading: "Quand la jouer",
        body: "La bajada se joue sur les lobs longs dont le rebond sur la vitre est généreux. Dirigée dans les pieds des adversaires ou au centre, elle permet souvent de reprendre le filet.",
      },
    ],
  },
  {
    slug: "el-gancho",
    title: "Le gancho, le contrôle au-dessus de la tête",
    intro:
      "Moins puissant qu'un smash, le gancho permet de jouer un lob sans reculer, en privilégiant la précision.",
    sections: [
      {
        heading: "Le principe",
        body: "Le gancho, « crochet » en espagnol, est une frappe au-dessus de la tête réalisée bras fléchi. Il s'emploie lorsque la balle arrive au-dessus du joueur sans lui laisser le temps ni l'espace d'armer un smash ou une bandeja.",
      },
      {
        heading: "Le geste",
        body: "Le coude reste haut et le mouvement est compact, proche de la tête. La raquette vient chercher la balle au-dessus de l'épaule et l'accompagne vers l'avant, sans recherche de vitesse. L'équilibre est essentiel, car le coup se joue souvent en léger recul.",
      },
      {
        heading: "Quand le jouer",
        body: "Le gancho convient aux lobs de hauteur moyenne dirigés sur le joueur. Joué en profondeur, il conserve la position au filet et laisse le temps de se replacer.",
      },
    ],
  },
  {
    slug: "la-dejada",
    title: "La dejada, l'amortie qui surprend",
    intro:
      "Coup de toucher, la dejada dépose la balle juste derrière le filet lorsque les adversaires en sont éloignés.",
    sections: [
      {
        heading: "Le principe",
        body: "La dejada est une amortie : une balle très courte, sans vitesse, qui retombe près du filet et rebondit peu. Elle vise à surprendre des adversaires placés au fond de la piste, qui n'ont pas le temps d'avancer.",
      },
      {
        heading: "Le geste",
        body: "La préparation ressemble à celle d'une volée ou d'un coup de fond classique, afin de masquer l'intention. À l'impact, la main relâche la prise et le tamis s'ouvre pour absorber la vitesse de la balle. Un léger effet coupé limite le rebond.",
      },
      {
        heading: "Quand la jouer",
        body: "La dejada se tente depuis une position avancée, sur une balle lente, lorsque les deux adversaires sont loin du filet. Jouée de trop loin ou sur une balle rapide, elle offre un point facile à la paire adverse.",
      },
    ],
  },
  {
    slug: "por-cuatro",
    title: "Le por cuatro, la balle qui sort par le fond",
    intro:
      "Variante la plus puissante du smash, le por cuatro renvoie la balle au-dessus de la paroi de fond après son rebond.",
    sections: [
      {
        heading: "Le principe",
        body: "Le por cuatro est un smash frappé à plat dont la balle, après son rebond au sol, franchit la paroi arrière, haute de quatre mètres. La balle devient alors très difficile à remettre en jeu.",
      },
      {
        heading: "Le geste",
        body: "La frappe est réalisée au point le plus haut, à plat, avec un transfert complet du poids du corps vers l'avant. La balle doit rebondir assez près du filet pour repartir avec un angle montant. La puissance et la hauteur de frappe sont déterminantes.",
      },
      {
        heading: "Quand le jouer",
        body: "Le por cuatro exige un lob très court et une position proche du filet. Il reste réservé aux joueurs disposant d'une frappe puissante ; à défaut, le por tres ou un smash placé sont préférables.",
      },
    ],
  },
  {
    slug: "el-saque",
    title: "Le saque, l'engagement du point",
    intro:
      "Au padel, le service se joue à la cuillère. Il sert moins à gagner le point directement qu'à préparer la montée au filet.",
    sections: [
      {
        heading: "Le principe",
        body: "Le serveur fait rebondir la balle derrière la ligne de service, puis la frappe à hauteur de la taille ou en dessous, en diagonale vers le carré adverse. Il dispose de deux balles. Après son rebond dans le carré de service, la balle peut toucher la vitre, mais pas la grille.",
      },
      {
        heading: "Le geste",
        body: "Le joueur se place de profil, laisse tomber la balle devant lui et l'accompagne d'un geste ample vers l'avant. Un effet coupé maintient la balle basse après son rebond sur la vitre. Le serveur enchaîne aussitôt vers le filet.",
      },
      {
        heading: "Comment le varier",
        body: "Le service vers la vitre latérale gêne le relanceur dans l'angle. Le service au centre réduit ses possibilités de retour croisé. Alterner les zones et les vitesses empêche l'adversaire d'anticiper.",
      },
    ],
  },
  {
    slug: "el-resto",
    title: "Le resto, le premier coup de la défense",
    intro:
      "Le retour de service conditionne la suite de l'échange. Bien joué, il prive la paire au service de l'avantage que lui donne la montée au filet.",
    sections: [
      {
        heading: "Le principe",
        body: "Le relanceur fait face à un serveur qui avance vers le filet. Son objectif est de jouer une balle qui gêne cette montée : basse dans les pieds, ou haute par-dessus les joueurs.",
      },
      {
        heading: "Le geste",
        body: "La position d'attente est fléchie, raquette devant soi, en retrait de la ligne de service. La préparation est courte, car la balle peut arriver directement ou après un rebond sur la vitre latérale. La lecture de la trajectoire commande le choix entre une frappe avant ou après la vitre.",
      },
      {
        heading: "Les options",
        body: "Le retour lobé repousse la paire adverse et permet de prendre le filet. Le retour bas au centre, entre les deux joueurs, crée une hésitation. Le retour croisé dans les pieds du serveur l'oblige à volleyer en pleine montée.",
      },
    ],
  },
  {
    slug: "la-contrapared",
    title: "La contrapared, se servir de sa propre vitre",
    intro:
      "Lorsque la balle a dépassé le joueur, la contrapared permet de la renvoyer en la frappant contre la vitre de fond.",
    sections: [
      {
        heading: "Le principe",
        body: "La contrapared consiste à frapper la balle vers sa propre vitre de fond, de sorte qu'elle rebondisse et franchisse le filet en direction du camp adverse. C'est un coup de défense, employé lorsque la balle est trop basse ou trop en arrière pour être jouée directement.",
      },
      {
        heading: "Le geste",
        body: "Le joueur se tourne vers la vitre et frappe la balle de bas en haut, tamis ouvert, sur une trajectoire montante. La balle doit toucher la vitre à mi-hauteur environ pour repartir en cloche. La force de frappe se dose selon la distance à la vitre.",
      },
      {
        heading: "Quand la jouer",
        body: "La contrapared s'utilise en dernier recours, sur une balle passée derrière le joueur. Elle produit le plus souvent un lob défensif, qui laisse le temps de se replacer.",
      },
    ],
  },
  {
    slug: "el-rulo",
    title: "Le rulo, la balle liftée vers la grille",
    intro:
      "Le rulo est une frappe haute à effet lifté, dirigée vers la grille latérale adverse, où le rebond devient imprévisible.",
    sections: [
      {
        heading: "Le principe",
        body: "À la différence de la bandeja, coupée, le rulo imprime à la balle une rotation vers l'avant. La balle plonge après le filet et rebondit en direction de la grille, dont la surface irrégulière dévie la trajectoire.",
      },
      {
        heading: "Le geste",
        body: "La frappe s'effectue au-dessus de la tête, en brossant la balle de bas en haut, avec une action marquée du poignet. La vitesse reste modérée : la rotation et la direction produisent l'essentiel de l'effet.",
      },
      {
        heading: "Quand le jouer",
        body: "Le rulo se joue sur un lob peu profond, lorsque le joueur n'est pas en position de smasher. Il vise la grille latérale, à l'endroit où la balle sera la plus difficile à défendre.",
      },
    ],
  },
  {
    slug: "la-cuchilla",
    title: "La cuchilla, une frappe haute très coupée",
    intro:
      "La cuchilla désigne, dans le langage des joueurs, une frappe haute fortement coupée, dont la trajectoire reste tendue et le rebond très bas.",
    sections: [
      {
        heading: "Le principe",
        body: "Le terme, qui signifie « lame » en espagnol, décrit l'action du tamis qui tranche la balle. L'effet coupé, plus prononcé que celui d'une bandeja, fait glisser la balle après son rebond et la maintient basse à la sortie de la vitre.",
      },
      {
        heading: "Le geste",
        body: "La préparation est celle d'une frappe haute classique, de profil, coude levé. À l'impact, le tamis passe sous et à travers la balle dans un mouvement rapide et descendant. La trajectoire recherchée est rasante au-dessus du filet.",
      },
      {
        heading: "Quand la jouer",
        body: "La cuchilla s'emploie sur un lob de hauteur moyenne, pour mettre en difficulté un adversaire à l'aise sur les balles hautes. Elle demande de la précision, la marge au-dessus du filet étant réduite.",
      },
    ],
  },
  {
    slug: "doble-pared",
    title: "La doble pared, lire le double rebond",
    intro:
      "Lorsque la balle touche successivement deux vitres, sa trajectoire change deux fois. La défense de la doble pared repose sur la lecture du jeu et le déplacement.",
    sections: [
      {
        heading: "Le principe",
        body: "On parle de doble pared lorsque la balle, après son rebond au sol, frappe la vitre latérale puis la vitre de fond, ou l'inverse. Selon l'ordre des rebonds, la balle s'ouvre vers le centre de la piste ou se referme vers l'angle.",
      },
      {
        heading: "Le geste",
        body: "Le joueur tourne sur lui-même en suivant la balle du regard, sans se précipiter vers elle. Il se place à distance de l'angle pour laisser la balle ressortir, puis la joue devant lui, le plus souvent en lob. Le pivot du corps accompagne la trajectoire de la balle.",
      },
      {
        heading: "Comment la défendre",
        body: "La patience est la première qualité requise : attendre le second rebond sur la vitre donne plus d'espace et de temps. Un lob haut et profond reste la réponse la plus sûre.",
      },
    ],
  },
  {
    slug: "el-chancletazo",
    title: "Le chancletazo, le smash sans détour",
    intro:
      "Terme familier du vocabulaire des joueurs, le chancletazo désigne un smash frappé à plat et de toute sa force.",
    sections: [
      {
        heading: "Le principe",
        body: "Le mot vient de « chancla », la sandale, et évoque un coup sec. Il qualifie un smash sans effet, où seule la puissance est recherchée, pour finir le point ou faire revenir la balle dans son propre camp après le rebond sur la vitre.",
      },
      {
        heading: "Le geste",
        body: "La frappe est réalisée bras tendu, au point le plus haut, tamis à plat derrière la balle. Le transfert du poids vers l'avant et la vitesse du bras produisent la puissance. Un point d'impact légèrement en avant du corps évite d'envoyer la balle directement dans la vitre.",
      },
      {
        heading: "Quand le jouer",
        body: "Le chancletazo se justifie sur une balle haute et courte, près du filet. Sur une balle plus profonde, la puissance profite à la défense : la balle ressort de la vitre et offre une contre-attaque.",
      },
    ],
  },
  {
    slug: "la-salida",
    title: "La salida de pared, le fondement de la défense",
    intro:
      "Jouer la balle après son rebond sur la vitre de fond est le premier geste propre au padel. Il conditionne toute la défense.",
    sections: [
      {
        heading: "Le principe",
        body: "Au padel, la balle peut être jouée après avoir rebondi au sol puis sur une vitre. La salida de pared consiste à laisser passer la balle, à attendre sa sortie de vitre et à la frapper lorsqu'elle revient vers l'avant.",
      },
      {
        heading: "Le geste",
        body: "Le joueur recule de profil en accompagnant la balle, raquette préparée tôt. Il se place à côté de la trajectoire, laisse la balle ressortir de la vitre et la frappe devant lui, jambes fléchies. La frappe se fait dans le sens de la balle, ce qui demande peu de force.",
      },
      {
        heading: "Quand la jouer",
        body: "Dès qu'une balle arrive avec assez de longueur pour toucher la vitre, la laisser passer donne du temps et de l'espace. La salida se joue le plus souvent en lob, ou basse dans les pieds des adversaires au filet.",
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
