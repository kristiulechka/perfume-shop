import styled from '@emotion/styled';

export const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const LogoImage = styled.img`
  height: 24px;
  width: auto;

  @media (max-width: 768px) {
    max-height: 32px;
  }
`;