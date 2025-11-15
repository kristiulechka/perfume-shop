import styled from '@emotion/styled';

export const SectionContainer = styled.section`
  min-height: 100vh;
  padding: 80px 40px;
  background-color: #000;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 60px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 768px) {
    gap: 60px;
  }
`;