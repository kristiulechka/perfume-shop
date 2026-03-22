interface Item {
  id: string;
  image: string;
  title: string;
  price: number;
  topNotes: string;
  heartNotes: string;
  baseNotes: string;
  description: string;
  link: string;
}

export const ITEMS: readonly Item[] = [
  {
    id: 'verdantia',
    image: '/img/cards/verdantia_card.png',
    title: 'Verdantia',
    price: 120,
    topNotes: 'green tea, bergamot, cucumber',
    heartNotes: 'jasmine, lily of the valley, mint',
    baseNotes: 'white cedarwood, musk, oakmoss',
    description: 'The clarity of dawn in a secret garden',
    link: '/products/verdantia',
  },
  {
    id: 'ignis-rosso',
    image: '/img/cards/ignis_rossso_card.png',
    title: 'Ignis Rosso',
    price: 135,
    topNotes: 'pink pepper, bitter orange',
    heartNotes: 'saffron, clove, rose',
    baseNotes: 'amber, patchouli, sandalwood',
    description: 'A glowing ember, wrapped in crimson spice',
    link: '/products/ignis-rosso',
  },
  {
    id: 'noctis-violet',
    image: '/img/cards/noctis_violet_card.png',
    title: 'Noctis Violet',
    price: 145,
    topNotes: 'blackcurrant, bergamot',
    heartNotes: 'violet, iris, frankincense',
    baseNotes: 'vetiver, tonka bean, ebony wood',
    description: 'The violet night, mysterious and infinite',
    link: '/products/noctis-violet',
  },
] as const;
