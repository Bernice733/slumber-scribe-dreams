
import { CaroCardProps } from "@/components/CaroCard";

export const CARO_CARDS: Omit<CaroCardProps, 'reversed'>[] = [
  {
    name: "The Dreamer",
    meaning: "New beginnings, potential, innocence, a journey about to begin",
    icon: "crystal-ball"
  },
  {
    name: "The Mystic",
    meaning: "Intuition, wisdom, understanding beyond the material world",
    icon: "moon"
  },
  {
    name: "The Illuminator",
    meaning: "Success, joy, vitality, enlightenment, truth revealed",
    icon: "sun"
  },
  {
    name: "The Guide",
    meaning: "Divine guidance, spiritual insight, hope, inspiration",
    icon: "star"
  },
  {
    name: "The Enchanter",
    meaning: "Manifestation, power to create change, focused willpower",
    icon: "wand"
  }
];

export const getRandomCards = (count: number): CaroCardProps[] => {
  const shuffled = [...CARO_CARDS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map(card => ({
    ...card,
    reversed: Math.random() > 0.5
  }));
};
