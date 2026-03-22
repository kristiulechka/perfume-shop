import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem, openCart } from '../../store/cartSlice';
import { PageContainer } from './ProductPage.styles';
import { ItemCard } from '../../components/item-card/ItemCard';
import { useQuantity } from './useQuantity';
import { PRODUCTS, type ProductKey } from './productPage.constants';

export const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const { quantity, increment, decrement } = useQuantity(1);
  const dispatch = useDispatch();

  const productKey = (productId?.replace('-', '') || 'verdantia') as ProductKey;
  const productData = PRODUCTS[productKey];

  if (!productData) {
    return <PageContainer>Product not found</PageContainer>;
  }

  const handleAddToCart = () => {
    dispatch(addItem({
      id: productId!,
      title: productData.title,
      price: productData.price,
      image: productData.image,
      quantity,
    }));
    dispatch(openCart());
  };

  return (
    <PageContainer>
      <ItemCard
        {...productData}
        quantity={quantity}
        onIncrement={increment}
        onDecrement={decrement}
        onAddToCart={handleAddToCart}
        showQuantityControls
        isProductPage
      />
    </PageContainer>
  );
};
