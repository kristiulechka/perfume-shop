import { asset } from '../../utils/asset';

export const NAV_LINKS = [
  { href: '/products/verdantia', label: 'Verdantia' },
  { href: '/products/ignis-rosso', label: 'Ignis Rosso' },
  { href: '/products/noctis-violet', label: 'Noctis Violet' },
] as const;

export const SHOPPING_BAG_LINK = {
  href: '#shopping-bag',
  label: 'Shopping bag'
} as const;

export const ICONS = {
  burger: asset('/icons/burger.svg'),
  close: asset('/icons/cross.svg'),
} as const;
