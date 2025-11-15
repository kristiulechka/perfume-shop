import styled from '@emotion/styled';

export const SectionContainer = styled.section`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 80px 40px;

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