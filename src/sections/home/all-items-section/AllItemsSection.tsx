import { useDispatch } from 'react-redux';
import { addItem, openCart } from '../../../store/cartSlice';
import { ItemCard } from '../../../components/item-card/ItemCard';
import { SectionContainer } from './AllItemsSection.styles';
import { ITEMS } from './allItemsSection.constants';

export const AllItemsSection = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item: typeof ITEMS[number]) => {
    dispatch(addItem({ id: item.id, title: item.title, price: item.price, image: item.image, quantity: 1 }));
    dispatch(openCart());
  };

  return (
    <>
      {ITEMS.map((item) => (
        <SectionContainer key={item.title}>
          <ItemCard
            {...item}
            productLink={item.link}
            onAddToCart={() => handleAddToCart(item)}
          />
        </SectionContainer>
      ))}
    </>
  );
};
