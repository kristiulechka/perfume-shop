import { ItemCard } from '../../../components/item-card/ItemCard';
import { SectionContainer } from './AllItemsSection.styles';
import { ITEMS } from './allItemsSection.constants';

export const AllItemsSection = () => {
  return (
    <>
      {ITEMS.map((item) => (
        <SectionContainer key={item.title}>
          <ItemCard {...item} productLink={item.link} />
        </SectionContainer>
      ))}
    </>
  );
};