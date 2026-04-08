/** https://www.grow-trees.com/ — plant trees online. */
export const GROW_TREES_URL = "https://www.grow-trees.com/" as const;

export type DonateCard = {
  id: string;
  title: string;
  imageSrc: string;
  width: number;
  height: number;
};

/** Three tree-themed cards; each opens Grow-Trees in a new tab. */
export const DONATE_CARDS: DonateCard[] = [
  {
    id: "1",
    title: "Plant a tree",
    imageSrc:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400&h=520&q=80",
    width: 400,
    height: 520,
  },
  {
    id: "2",
    title: "Plant a tree",
    imageSrc:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=400&h=420&q=80",
    width: 400,
    height: 420,
  },
  {
    id: "3",
    title: "Plant a tree",
    imageSrc:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&h=560&q=80",
    width: 400,
    height: 560,
  },
];
