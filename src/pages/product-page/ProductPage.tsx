import { useState } from 'react';
import { PageContainer } from './ProductPage.styles';
import { ItemCard } from '../../components/item-card/ItemCard';

export const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    console.log('Increment pressed. New quantity:', newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      console.log('Decrement pressed. New quantity:', newQuantity);
    }
  };

  const productData = {
    image: '/img/cards/verdantia_card.png',
    title: 'Verdantia',
    price: 120,
    topNotes: 'green tea, bergamot, cucumber',
    heartNotes: 'jasmine, lily of the valley, mint',
    baseNotes: 'white cedarwood, musk, oakmoss',
    description: 'The clarity of dawn in a secret garden',
  };

  return (
    <PageContainer>
      <ItemCard 
        {...productData}
        quantity={quantity}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        showQuantityControls
        isProductPage
      />
    </PageContainer>
  );
};