import {
  SectionContainer,
  Title,
  ItemsGrid,
  ItemCard,
  ItemImage,
  ItemName,
  ItemPrice,
} from './AllItemsSection.styles';

export const AllItemsSection = () => {
  return (
    <SectionContainer>
      <Title>Our Collection</Title>
      <ItemsGrid>
        <ItemCard>
          <ItemImage />
          <ItemName>Verdantia</ItemName>
          <ItemPrice>$120</ItemPrice>
        </ItemCard>
        <ItemCard>
          <ItemImage />
          <ItemName>Ignis Rosso</ItemName>
          <ItemPrice>$135</ItemPrice>
        </ItemCard>
        <ItemCard>
          <ItemImage />
          <ItemName>Noctis Violet</ItemName>
          <ItemPrice>$150</ItemPrice>
        </ItemCard>
      </ItemsGrid>
    </SectionContainer>
  );
};