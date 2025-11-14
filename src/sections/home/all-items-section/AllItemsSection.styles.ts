import styled from '@emotion/styled';

export const SectionContainer = styled.section`
  min-height: 80vh;
  padding: 80px 40px;
  background-color: transparent;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

export const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const ItemCard = styled.div`
  background-color: #111;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ItemImage = styled.div`
  width: 100%;
  height: 300px;
  background-color: #222;
  margin-bottom: 20px;
  border-radius: 4px;
`;

export const ItemName = styled.h3`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const ItemPrice = styled.p`
  font-size: 18px;
  color: #ccc;
`;