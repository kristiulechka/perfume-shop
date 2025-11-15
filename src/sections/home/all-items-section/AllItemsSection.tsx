import { ItemCard } from '../../../components/item-card/ItemCard';
import { SectionContainer, Title, ItemsContainer } from './AllItemsSection.styles';

const items = [
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
];

export const AllItemsSection = () => {
  return (
    <SectionContainer>
      <Title>Our Collection</Title>
      <ItemsContainer>
        {items.map((item, index) => (
          <ItemCard key={index} {...item} />
        ))}
      </ItemsContainer>
    </SectionContainer>
  );
};