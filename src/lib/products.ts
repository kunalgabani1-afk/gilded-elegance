import necklace from "@/assets/p-necklace.jpg";
import ring from "@/assets/p-ring.jpg";
import earrings from "@/assets/p-earrings.jpg";
import bangles from "@/assets/p-bangles.jpg";
import diamond from "@/assets/p-diamond.jpg";
import bridal from "@/assets/p-bridal.jpg";
import g1 from "@/assets/g-1.jpg";
import g2 from "@/assets/g-2.jpg";
import g3 from "@/assets/g-3.jpg";
import g4 from "@/assets/g-4.jpg";

export type Category = "Necklaces" | "Rings" | "Earrings" | "Bangles" | "Diamond Jewellery" | "Bridal Sets";

export const categories: Category[] = [
  "Necklaces", "Rings", "Earrings", "Bangles", "Diamond Jewellery", "Bridal Sets",
];

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  angles: string[];
  worn: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "celeste-halo",
    name: "Céleste Halo Pendant",
    category: "Necklaces",
    price: 184500,
    image: necklace,
    angles: [necklace, diamond, g1],
    worn: g1,
    description: "A meticulously hand-set diamond halo suspended from a whisper-thin 22k chain. Inspired by the celestial ceilings of the Mehrangarh palace.",
  },
  {
    id: "vintage-filigree",
    name: "Vintage Filigree Solitaire",
    category: "Rings",
    price: 96750,
    image: ring,
    angles: [ring, ring, g4],
    worn: g4,
    description: "Antique-finish 22k gold filigree cradling a marquise diamond. Each scroll is shaped by hand at the bench.",
  },
  {
    id: "mughal-jhumka",
    name: "Mughal Emerald Jhumka",
    category: "Earrings",
    price: 142000,
    image: earrings,
    angles: [earrings, earrings, g2],
    worn: g2,
    description: "Temple-cast bell silhouettes with Zambian emeralds and South Sea pearl droplets. Heritage in every chime.",
  },
  {
    id: "kundan-kada",
    name: "Kundan Royal Kada Set",
    category: "Bangles",
    price: 218900,
    image: bangles,
    angles: [bangles, bangles, g3],
    worn: g3,
    description: "Three-tier kada in matte 22k gold with uncut polki diamonds, finished in the antique Jadau tradition.",
  },
  {
    id: "noor-solitaire",
    name: "Noor Solitaire Necklace",
    category: "Diamond Jewellery",
    price: 312400,
    image: diamond,
    angles: [diamond, necklace, g1],
    worn: g1,
    description: "A single 2.04ct VVS1 round brilliant on an 18k yellow gold cable. Quiet brilliance, immense presence.",
  },
  {
    id: "shahi-bridal",
    name: "Shahi Bridal Heritage Set",
    category: "Bridal Sets",
    price: 685000,
    image: bridal,
    angles: [bridal, earrings, g3],
    worn: g3,
    description: "A complete Banarasi-inspired ensemble — choker, long haar, jhumka and maang tikka in 22k antique gold with rubies and pearls.",
  },
  {
    id: "ivory-pearl-strand",
    name: "Ivory Pearl Heritage Strand",
    category: "Necklaces",
    price: 89500,
    image: g1,
    angles: [g1, necklace, diamond],
    worn: g1,
    description: "Hand-knotted Akoya pearls anchored with an antique gold clasp set with a sapphire cabochon.",
  },
  {
    id: "moonlight-eternity",
    name: "Moonlight Eternity Band",
    category: "Rings",
    price: 74200,
    image: g4,
    angles: [g4, ring, diamond],
    worn: g4,
    description: "An unbroken circle of princess-cut diamonds set in platinum and 18k rose gold.",
  },
];

export const galleryImages = [g1, g2, g3, g4, necklace, bridal, bangles, earrings];
