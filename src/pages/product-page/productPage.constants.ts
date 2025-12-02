export const PRODUCTS = {
  verdantia: {
    image: '/img/cards/verdantia_card.png',
    title: 'Verdantia',
    price: 120,
    topNotes: 'green tea, bergamot, cucumber',
    heartNotes: 'jasmine, lily of the valley, mint',
    baseNotes: 'white cedarwood, musk, oakmoss',
    description: 'The clarity of dawn in a secret garden',
  },
  ignisRosso: {
    image: '/img/cards/ignis_rosso_card.png',
    title: 'Ignis Rosso',
    price: 135,
    topNotes: 'blood orange, pink pepper, saffron',
    heartNotes: 'rose, cinnamon, cardamom',
    baseNotes: 'amber, vanilla, sandalwood',
    description: 'The intensity of passion in flames',
  },
  noctisViolet: {
    image: '/img/cards/noctis_violet_card.png',
    title: 'Noctis Violet',
    price: 145,
    topNotes: 'blackcurrant, lavender, violet leaf',
    heartNotes: 'iris, plum, patchouli',
    baseNotes: 'tonka bean, leather, dark woods',
    description: 'The mystery of midnight in shadow',
  },
} as const;

export type ProductKey = keyof typeof PRODUCTS;