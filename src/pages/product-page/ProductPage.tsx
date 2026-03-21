import { useParams } from 'react-router-dom';
import { PageContainer } from './ProductPage.styles';
import { ItemCard } from '../../components/item-card/ItemCard';
import { useQuantity } from './useQuantity';
import { PRODUCTS, type ProductKey } from './productPage.constants';

export const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const { quantity, increment, decrement } = useQuantity(1);
  
  const productKey = (productId?.replace('-', '') || 'verdantia') as ProductKey;
  const productData = PRODUCTS[productKey];

  if (!productData) {
    return <PageContainer>Product not found</PageContainer>;
  }

  return (
    <PageContainer>
      <ItemCard 
        {...productData}
        quantity={quantity}
        onIncrement={increment}
        onDecrement={decrement}
        showQuantityControls
        isProductPage
      />
    </PageContainer>
  );
};