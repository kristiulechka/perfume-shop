import { Link } from 'react-router-dom';
import { LogoContainer, LogoImage } from './Logo.styles';

export const Logo = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <LogoContainer>
        <LogoImage src="/img/oneir.png" alt="Oneir Logo" />
      </LogoContainer>
    </Link>
  );
};