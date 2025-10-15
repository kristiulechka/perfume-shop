import { 
  Nav,
  GlassFilter,
  GlassOverlay,
  GlassSpecular,
  LogoSection, 
  ProductLinks, 
  NavLink, 
  BagLink
} from './Navigation.styles';
import { Logo } from '../logo/Logo';

const SVGFilters = () => (
  <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
    <defs>
      <radialGradient id="lensGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="white" stopOpacity="1" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </radialGradient>
    </defs>
    <filter id="lensFilter" x="-50%" y="-50%" width="200%" height="200%">
      <feImage href="#lensGradient" result="grad" />
      
      <feGaussianBlur in="SourceAlpha" stdDeviation="20" result="blur" />
      
      <feColorMatrix in="blur" type="matrix" 
        values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 20 -10" result="displacementMap" />
      
      <feDisplacementMap in="SourceGraphic" in2="displacementMap" 
        scale="50" xChannelSelector="A" yChannelSelector="A" />
    </filter>
  </svg>
);

export const Navigation = () => {
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
      </Nav>
    </>
  );
};