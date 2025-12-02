interface Item {
  image: string;
  title: string;
  topNotes: string;
  heartNotes: string;
  baseNotes: string;
  description: string;
}

export const ITEMS: readonly Item[] = [
  {
    image: '/img/cards/verdantia_card.png',
    title: 'Verdantia',
    topNotes: 'green tea, bergamot, cucumber',
    heartNotes: 'jasmine, lily of the valley, mint',
    baseNotes: 'white cedarwood, musk, oakmoss',
    description: 'The clarity of dawn in a secret garden',
  },
  {
    image: '/img/cards/ignis_rossso_card.png',
    title: 'Ignis Rosso',
    topNotes: 'pink pepper, bitter orange',
    heartNotes: 'saffron, clove, rose',
    baseNotes: 'amber, patchouli, sandalwood',
    description: 'A glowing ember, wrapped in crimson spice',
  },
  {
    image: '/img/cards/noctis_violet_card.png',
    title: 'Noctis Violet',
    topNotes: 'blackcurrant, bergamot',
    heartNotes: 'violet, iris, frankincense',
    baseNotes: 'vetiver, tonka bean, ebony wood',
    description: 'The violet night, mysterious and infinite',
  },
] as const;