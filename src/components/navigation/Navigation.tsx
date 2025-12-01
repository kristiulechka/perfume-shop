import { useState } from 'react';
import { 
  Nav,
  GlassFilter,
  GlassOverlay,
  GlassSpecular,
  LogoSection, 
  ProductLinks, 
  NavLink, 
  BagLink,
  BurgerButton,
  BurgerIcon,
  MobileMenu,
  MobileMenuOverlay,
  MobileMenuContent,
  MobileNavLink,
  MobileGlassFilter
} from './Navigation.styles';
import { Logo } from '../logo/Logo';

const SVGFilters = () => (
  <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
    <defs>
      <radialGradient id="lensGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="white" stopOpacity="1" />
        <stop offset="30%" stopColor="white" stopOpacity="0.8" />
        <stop offset="70%" stopColor="white" stopOpacity="0.3" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </radialGradient>
    </defs>
    <filter id="lensFilter" x="-50%" y="-50%" width="200%" height="200%">
      <feImage href="#lensGradient" result="grad" />
      
      <feGaussianBlur in="SourceAlpha" stdDeviation="15" result="blur" />
      
      <feColorMatrix in="blur" type="matrix" 
        values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 25 -12" result="displacementMap" />
      
      <feDisplacementMap in="SourceGraphic" in2="displacementMap" 
        scale="15" xChannelSelector="A" yChannelSelector="A" />
    </filter>
    <filter id="lensFilterMobile" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
    </filter>
  </svg>
);

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <SVGFilters />
      <Nav>
        <GlassFilter />
        <GlassOverlay />
        <GlassSpecular />
        <LogoSection>
          <Logo />
        </LogoSection>
        <ProductLinks>
          <NavLink href="#verdantia">Verdantia</NavLink>
          <NavLink href="#ignis-rosso">Ignis Rosso</NavLink>
          <NavLink href="#noctis-violet">Noctis Violet</NavLink>
          <BagLink href="#shopping-bag">Shopping bag</BagLink>
        </ProductLinks>
        <BurgerButton onClick={toggleMobileMenu}>
          <BurgerIcon 
            src={isMobileMenuOpen ? '/icons/cross.svg' : '/icons/burger.svg'} 
            alt={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          />
        </BurgerButton>
      </Nav>

      {isMobileMenuOpen && (
        <MobileMenuOverlay onClick={closeMobileMenu}>
          <MobileMenu onClick={(e) => e.stopPropagation()}>
            <MobileGlassFilter />
            <GlassOverlay />
            <GlassSpecular />
            <MobileMenuContent>
              <MobileNavLink href="#verdantia" onClick={closeMobileMenu}>
                Verdantia
              </MobileNavLink>
              <MobileNavLink href="#ignis-rosso" onClick={closeMobileMenu}>
                Ignis Rosso
              </MobileNavLink>
              <MobileNavLink href="#noctis-violet" onClick={closeMobileMenu}>
                Noctis Violet
              </MobileNavLink>
              <MobileNavLink href="#shopping-bag" onClick={closeMobileMenu}>
                Shopping bag
              </MobileNavLink>
            </MobileMenuContent>
          </MobileMenu>
        </MobileMenuOverlay>
      )}
    </>
  );
};