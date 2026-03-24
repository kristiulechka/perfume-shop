import { LogoContainer, LogoImage } from './Logo.styles';
import { asset } from '../../utils/asset';

export const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage src={asset('/img/oneir.png')} alt="Oneir Logo" />
    </LogoContainer>
  );
};