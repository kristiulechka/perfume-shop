import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

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
    grid-template-columns: 40% 60%;
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
    justify-content: center;
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
    display: none;
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
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;

export const BagLink = styled(NavLink)``;

export const BurgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  z-index: 3;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const BurgerIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const MobileGlassFilter = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: inherit;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  filter: url(#lensFilterMobile) saturate(110%) brightness(1.1);
`;

export const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  animation: ${fadeIn} 0.3s ease-in-out;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: calc(20px + 56px + 16px);
  left: 20px;
  right: 20px;
  height: 50vh;
  background: transparent;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.05);
  animation: ${fadeIn} 0.3s ease-in-out;
  z-index: 1001;
`;

export const MobileMenuContent = styled.div`
  position: relative;
  z-index: 3;
  height: 100%;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const MobileNavLink = styled.a`
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
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`;