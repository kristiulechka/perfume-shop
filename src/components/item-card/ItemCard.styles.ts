import styled from '@emotion/styled';

export const CardContainer = styled.div<{ isProductPage?: boolean }>`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0;
  ${props => props.isProductPage ?
    `width: 100vw;`
    : 'max-width: 100vw;'};
  margin: 0 auto;
  padding: 40px 0;
  column-gap: ${props => props.isProductPage ? '5vw' : '0'};
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 42px;
    max-width: 90vw;
  }
`;

export const CardImage = styled.img<{ isProductPage?: boolean }>`
  grid-column: ${props => props.isProductPage ? '1 / span 6' : '1 / span 4'};
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;

  @media (max-width: 768px) {
    grid-column: span 1;
    height: 50vh;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
  }
    @media (max-width: 480px) {
    /* ${props => !props.isProductPage && ` */
      height: auto;
    /* `} */
  }
`;

export const CardContent = styled.div<{ isProductPage?: boolean }>`
  grid-column: ${props => props.isProductPage ? '7 / span 6' : '6 / span 7'};
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

export const CardTitle = styled.h3<{ isProductPage?: boolean }>`
  color: #fff;
  font-family: "Bebas Neue", sans-serif;
  font-size: 62px;
  font-weight: 400;
  line-height: 80%;
  letter-spacing: -1.24px;
  margin-bottom: ${props => props.isProductPage ? '24px' : '16px'};

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

export const PriceText = styled.div`
  color: #fffefe;
  font-family: "Bebas Neue", sans-serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 80%;
  letter-spacing: -0.64px;
  margin-bottom: 24px;
`;

export const NotesSection = styled.div``;

export const NotesLabel = styled.span`
  color: #fffefe;
  font-family: "Bebas Neue", sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 80%;
  letter-spacing: -0.44px;
  margin-right: 8px;
`;

export const NotesText = styled.span`
  color: #c8c8c8;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 300;
  line-height: 80%;
  letter-spacing: -0.36px;
`;

export const CursiveText = styled.p`
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-style: italic;
  font-weight: 300;
  line-height: 120%;
  letter-spacing: -0.36px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.60) -0.55%, rgba(255, 255, 255, 0.30) 26.78%, rgba(255, 255, 255, 0.60) 51.66%, rgba(255, 255, 255, 0.24) 78.8%, rgba(255, 255, 255, 0.60) 103.04%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 12px;
  padding-bottom: 4px;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 24px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const QuantityButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #fffefe;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #fffefe;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const QuantityIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const QuantityValue = styled.span`
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 300;
  min-width: 30px;
  text-align: center;
`;

export const AddToCartButton = styled.button<{ isProductPage?: boolean }>`
  display: flex;
  width: ${props => props.isProductPage ? '213px' : '164px'};
  height: ${props => props.isProductPage ? '62px' : '48px'};
  padding: 10px 26px 10px 25px;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  border: 1px solid #fffefe;
  background: transparent;
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: ${props => props.isProductPage ? '21px' : '16px'};
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 12px;

  &:hover {
    background: #fffefe;
    color: #000;
  }
  
  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;