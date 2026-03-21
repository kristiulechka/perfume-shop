import { useState } from 'react';
import { Link } from 'react-router-dom';
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
import { SVGFilters } from '../common/SVGFilters';
import { GlassEffectLayers } from '../common/GlassEffectLayers';
import { NAV_LINKS, SHOPPING_BAG_LINK, ICONS } from './navigation.constants';

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <SVGFilters />
      <Nav>
        <GlassEffectLayers 
          GlassFilter={GlassFilter}
          GlassOverlay={GlassOverlay}
          GlassSpecular={GlassSpecular}
        />
        <LogoSection to="/" style={{ textDecoration: 'none' }}>
          <Logo />
        </LogoSection>
        <ProductLinks>
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} to={href} style={{ textDecoration: 'none' }}>
              <NavLink>{label}</NavLink>
            </Link>
          ))}
          <BagLink href={SHOPPING_BAG_LINK.href}>
            {SHOPPING_BAG_LINK.label}
          </BagLink>
        </ProductLinks>
        <BurgerButton onClick={toggleMobileMenu}>
          <BurgerIcon 
            src={isMobileMenuOpen ? ICONS.close : ICONS.burger} 
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
              {NAV_LINKS.map(({ href, label }) => (
                <Link key={href} to={href} style={{ textDecoration: 'none' }}>
                  <MobileNavLink onClick={closeMobileMenu}>
                    {label}
                  </MobileNavLink>
                </Link>
              ))}
              <MobileNavLink href={SHOPPING_BAG_LINK.href} onClick={closeMobileMenu}>
                {SHOPPING_BAG_LINK.label}
              </MobileNavLink>
            </MobileMenuContent>
          </MobileMenu>
        </MobileMenuOverlay>
      )}
    </>
  );
};