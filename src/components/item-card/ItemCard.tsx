import { Link } from 'react-router-dom';
import {
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  PriceText,
  NotesSection,
  NotesLabel,
  NotesText,
  CursiveText,
  QuantityControls,
  QuantityButton,
  QuantityIcon,
  QuantityValue,
  AddToCartButton,
} from './ItemCard.styles';

interface ItemCardProps {
  image: string;
  title: string;
  price?: number;
  topNotes: string;
  heartNotes: string;
  baseNotes: string;
  description: string;
  showQuantityControls?: boolean;
  quantity?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
  onAddToCart?: () => void;
  isProductPage?: boolean;
  productLink?: string;
}

export const ItemCard = ({
  image,
  title,
  price,
  topNotes,
  heartNotes,
  baseNotes,
  description,
  showQuantityControls = false,
  quantity = 1,
  onIncrement,
  onDecrement,
  onAddToCart,
  isProductPage = false,
  productLink,
}: ItemCardProps) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart?.();
  };

  const cardContent = (
    <CardContainer isProductPage={isProductPage}>
      <CardImage src={image} alt={title} isProductPage={isProductPage} />
      <CardContent isProductPage={isProductPage}>
        <CardTitle isProductPage={isProductPage}>{title}</CardTitle>

        {price && <PriceText>${price}</PriceText>}

        <NotesSection>
          <NotesLabel>TOP NOTES:</NotesLabel>
          <NotesText>{topNotes}</NotesText>
        </NotesSection>

        <NotesSection>
          <NotesLabel>HEART NOTES:</NotesLabel>
          <NotesText>{heartNotes}</NotesText>
        </NotesSection>

        <NotesSection>
          <NotesLabel>BASE NOTES:</NotesLabel>
          <NotesText>{baseNotes}</NotesText>
        </NotesSection>

        <CursiveText>{description}</CursiveText>

        {showQuantityControls && (
          <QuantityControls>
            <QuantityButton onClick={onDecrement} disabled={quantity <= 1}>
              <QuantityIcon src="/icons/minus.svg" alt="Decrease quantity" />
            </QuantityButton>
            <QuantityValue>{quantity}</QuantityValue>
            <QuantityButton onClick={onIncrement}>
              <QuantityIcon src="/icons/plus.svg" alt="Increase quantity" />
            </QuantityButton>
          </QuantityControls>
        )}

        <AddToCartButton isProductPage={isProductPage} onClick={handleAddToCart}>
          Add to cart
        </AddToCartButton>
      </CardContent>
    </CardContainer>
  );

  if (productLink && !isProductPage) {
    return <Link to={productLink} style={{ textDecoration: 'none' }}>{cardContent}</Link>;
  }

  return cardContent;
};
