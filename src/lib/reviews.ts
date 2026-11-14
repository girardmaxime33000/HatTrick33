import { products } from "./products";
import { site } from "./site";

export type Review = { author: string; rating: number; title: string; body: string };

/**
 * AVIS D'EXEMPLE. Ces textes servent uniquement à prévisualiser la boutique avant son lancement.
 * Ils sont affichés avec une mention explicite et doivent être remplacés par des avis réels,
 * collectés après achat, avant l'ouverture des ventes (site.preview = false les masque).
 */
const samples: Review[] = [
  { author: "Julien M.", rating: 5, title: "Très belle pièce", body: "La casquette est conforme aux photos et les finitions sont soignées. La numérotation à l'intérieur apporte un vrai plus." },
  { author: "Camille R.", rating: 5, title: "Remarquée dès le premier match", body: "Plusieurs joueurs du club m'ont demandé où je l'avais trouvée. Le coloris est fidèle à celui présenté sur le site." },
  { author: "Thomas B.", rating: 4, title: "Bonne tenue", body: "Elle tient bien en place pendant le jeu et le filet arrière est agréable par temps chaud. Livraison dans les délais annoncés." },
  { author: "Sarah L.", rating: 5, title: "Un beau cadeau", body: "Offerte à mon partenaire de double, qui la porte à chaque entraînement. L'idée de la série limitée lui a beaucoup plu." },
  { author: "Nicolas D.", rating: 5, title: "Qualité au rendez-vous", body: "Façade bien structurée, réglage facile, écusson propre. Le prix se justifie par la qualité et le nombre d'exemplaires." },
  { author: "Élodie P.", rating: 4, title: "Jolie et confortable", body: "La taille unique convient bien grâce au réglage arrière. J'aurais aimé un emballage un peu plus protecteur, mais elle est arrivée en bon état." },
  { author: "Maxence G.", rating: 5, title: "Exemplaire 04/10", body: "Recevoir une casquette numérotée change la perception de l'objet. On a le sentiment de posséder une pièce à part." },
  { author: "Laura T.", rating: 5, title: "Parfaite pour le club-house", body: "Je la porte autant sur la piste qu'en dehors. Le style est sobre et s'accorde facilement avec une tenue de ville." },
  { author: "Antoine V.", rating: 5, title: "Commande simple et rapide", body: "Paiement sans difficulté et colis reçu rapidement. La casquette correspond exactement à la description." },
  { author: "Inès K.", rating: 4, title: "Beau coloris", body: "Les couleurs sont plus belles encore en vrai. La visière est un peu rigide les premiers jours, puis elle prend sa forme." },
  { author: "Romain F.", rating: 5, title: "Le nom du coup fait son effet", body: "Les joueurs reconnaissent tout de suite la référence. C'est un détail qui crée la conversation après le match." },
  { author: "Chloé S.", rating: 5, title: "Finitions soignées", body: "Coutures régulières, écusson bien posé, aucun défaut. On voit que le produit a été pensé avec attention." },
  { author: "Hugo N.", rating: 3, title: "Bien, avec une réserve", body: "La casquette est réussie, mais j'aurais souhaité pouvoir choisir mon numéro dans la série. Le produit reste de bonne qualité." },
  { author: "Manon C.", rating: 5, title: "Achetée au club", body: "Découverte au comptoir de mon club après un tournoi. Le modèle m'a plu immédiatement et je ne regrette pas mon achat." },
  { author: "Pierre A.", rating: 5, title: "Très satisfait", body: "Elle protège bien du soleil sur les pistes extérieures et reste légère. Je recommande." },
  { author: "Léa H.", rating: 5, title: "Un style qui se distingue", body: "Elle change des casquettes des équipementiers que tout le monde porte. C'est précisément ce que je recherchais." },
  { author: "Bastien O.", rating: 4, title: "Bon produit", body: "Bonne qualité générale. Le délai de livraison a été d'une semaine, ce qui reste correct pour une petite série." },
  { author: "Clara J.", rating: 5, title: "Coup de cœur", body: "J'ai hésité entre deux modèles et je ne regrette pas mon choix. Le filet est aéré et la coupe flatteuse." },
  { author: "Mathieu E.", rating: 5, title: "Série limitée, vraie valeur", body: "Savoir qu'il n'existe que dix exemplaires donne envie d'en prendre soin. Une belle idée de marque." },
  { author: "Anaïs W.", rating: 5, title: "Conforme et bien finie", body: "Aucune mauvaise surprise à la réception. Le réglage arrière permet un ajustement précis." },
  { author: "Lucas I.", rating: 4, title: "Agréable à porter", body: "Je la garde pendant tout le match sans gêne. Le coloris ressort bien sous les éclairages de la piste couverte." },
  { author: "Emma Z.", rating: 5, title: "Service attentif", body: "J'avais une question sur la livraison et j'ai obtenu une réponse le jour même. La casquette est superbe." },
  { author: "Kevin Y.", rating: 5, title: "Adoptée par toute l'équipe", body: "Nous sommes quatre partenaires à avoir chacun un modèle différent. L'ensemble fonctionne très bien sur les photos de tournoi." },
  { author: "Justine U.", rating: 5, title: "Élégante", body: "Un produit sobre et bien dessiné. La façade garde sa forme et l'écusson est discret." },
  { author: "Florian Q.", rating: 4, title: "Satisfait de mon achat", body: "Le produit correspond à mes attentes. Une housse de rangement serait un complément appréciable." },
];

/** Avis d'exemple associés à un modèle (2 ou 3, sélection déterministe). Vide hors mode aperçu. */
export function reviewsFor(slug: string): Review[] {
  if (!site.preview) return [];
  const i = products.findIndex((p) => p.slug === slug);
  if (i < 0) return [];
  const n = 2 + (i % 2);
  return Array.from({ length: n }, (_, k) => samples[(i * 5 + k * 7) % samples.length]);
}

export function ratingOf(slug: string) {
  const list = reviewsFor(slug);
  if (!list.length) return null;
  return { average: list.reduce((s, r) => s + r.rating, 0) / list.length, count: list.length };
}

export const featuredReviews = () => (site.preview ? [samples[1], samples[6], samples[10]] : []);
