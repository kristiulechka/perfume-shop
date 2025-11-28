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
  isProductPage?: boolean;
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
  isProductPage = false,
}: ItemCardProps) => {
  return (
    <CardContainer isProductPage={isProductPage}>
      <CardImage src={image} alt={title} isProductPage={isProductPage} />
      <CardContent isProductPage={isProductPage}>
        <CardTitle>{title}</CardTitle>
        
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
        
        <AddToCartButton isProductPage={isProductPage}>Add to cart</AddToCartButton>
      </CardContent>
    </CardContainer>
  );
};