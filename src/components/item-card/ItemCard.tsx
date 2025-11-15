import {
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  NotesSection,
  NotesLabel,
  NotesText,
  CursiveText,
  AddToCartButton,
} from './ItemCard.styles';

interface ItemCardProps {
  image: string;
  title: string;
  topNotes: string;
  heartNotes: string;
  baseNotes: string;
  description: string;
}

export const ItemCard = ({
  image,
  title,
  topNotes,
  heartNotes,
  baseNotes,
  description,
}: ItemCardProps) => {
  return (
    <CardContainer>
      <CardImage src={image} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        
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
        
        <AddToCartButton>Add to cart</AddToCartButton>
      </CardContent>
    </CardContainer>
  );
};