import styled from '@emotion/styled';

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const CardImage = styled.img`
  grid-column: span 4;
  width: 100%;
  max-width: 374px;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;

  @media (max-width: 768px) {
    grid-column: span 1;
    max-width: 100%;
  }
`;

export const CardContent = styled.div`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

export const CardTitle = styled.h3`
  color: #fff;
  font-family: "Bebas Neue", sans-serif;
  font-size: 62px;
  font-weight: 400;
  line-height: 80%;
  letter-spacing: -1.24px;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

export const NotesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NotesLabel = styled.span`
  color: #fffefe;
  font-family: "Bebas Neue", sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 80%;
  letter-spacing: -0.44px;
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
  line-height: 80%;
  letter-spacing: -0.36px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.60) -0.55%, rgba(255, 255, 255, 0.30) 26.78%, rgba(255, 255, 255, 0.60) 51.66%, rgba(255, 255, 255, 0.24) 78.8%, rgba(255, 255, 255, 0.60) 103.04%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 8px;
`;

export const AddToCartButton = styled.button`
  display: flex;
  width: 164px;
  height: 48px;
  padding: 10px 26px 10px 25px;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  border: 1px solid #fffefe;
  background: transparent;
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 16px;

  &:hover {
    background: #fffefe;
    color: #000;
  }
`;