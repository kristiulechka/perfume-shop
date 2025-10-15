import styled from '@emotion/styled';

export const Nav = styled.nav`
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  z-index: 1000;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  padding: 0;
  background: transparent;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const GlassFilter = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: inherit;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  filter: url(#lensFilter) saturate(110%) brightness(1.1);
`;

export const GlassOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  border-radius: inherit;
  background: rgba(255, 255, 255, 0.01);
`;

export const GlassSpecular = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  border-radius: inherit;
  box-shadow: inset 0 0 2px rgba(255, 255, 255, 0.08);
`;

export const LogoSection = styled.div`
  background-color: #1B3B48;
  padding: 0 32px;
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 3;

  @media (max-width: 768px) {
    padding: 16px 24px;
  }
`;

export const ProductLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 32px;
  position: relative;
  z-index: 3;

  @media (max-width: 768px) {
    padding: 16px;
    gap: 20px;
  }
`;

export const NavLink = styled.a`
  color: #FFF;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 110%;
  letter-spacing: 1.98px;
  cursor: pointer;
  transition: opacity 0.3s ease;
  white-space: nowrap;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    letter-spacing: 1.4px;
  }
`;

export const BagLink = styled(NavLink)``;