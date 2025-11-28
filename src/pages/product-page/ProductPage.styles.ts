import styled from '@emotion/styled';

export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  padding: 120px 40px 80px;

  @media (max-width: 768px) {
    padding: 100px 20px 60px;
  }
`;