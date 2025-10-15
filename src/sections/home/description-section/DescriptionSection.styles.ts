import styled from '@emotion/styled';

export const SectionContainer = styled.section`
  min-height: 60vh;
  padding: 80px 40px;
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const Content = styled.div`
  max-width: 800px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 300;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #ccc;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;