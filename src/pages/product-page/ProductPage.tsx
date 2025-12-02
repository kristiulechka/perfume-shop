import { PageContainer } from './ProductPage.styles';
import { ItemCard } from '../../components/item-card/ItemCard';
import { useQuantity } from './useQuantity';
import { PRODUCTS, type ProductKey } from './productPage.constants';

interface ProductPageProps {
  productKey?: ProductKey;
}

export const ProductPage = ({ productKey = 'verdantia' }: ProductPageProps) => {
  const { quantity, increment, decrement } = useQuantity(1);
  const productData = PRODUCTS[productKey];

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