import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { openCart } from '../../store/cartSlice';
import {
  Nav,
  GlassFilter,
  GlassOverlay,
  GlassSpecular,
  LogoSection,
  ProductLinks,
  NavLink,
  BagButton,
  BagCount,
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
import { NAV_LINKS, ICONS } from './navigation.constants';

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleOpenCart = () => {
    closeMobileMenu();
    dispatch(openCart());
  };

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
          <BagButton onClick={handleOpenCart}>
            Shopping bag
            {cartCount > 0 && <BagCount>
              <span>{cartCount}</span>
              </BagCount>}
          </BagButton>
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
              <MobileNavLink onClick={handleOpenCart}>
                Shopping bag{cartCount > 0 ? ` (${cartCount})` : ''}
              </MobileNavLink>
            </MobileMenuContent>
          </MobileMenu>
        </MobileMenuOverlay>
      )}
    </>
  );
};
