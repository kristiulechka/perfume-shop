import { asset } from '../../../utils/asset';

export const HERO_SLIDES = [
  {
    webm: asset('/videos/verdantia.webm'),
    mp4: asset('/videos/verdantia.mp4'),
    title: 'Verdantia',
    image: asset('/img/verdantia.png'),
    buttonBg: 'linear-gradient(95deg, rgba(111, 255, 69, 0.40) 0%, rgba(56, 151, 28, 0.40) 100%)',
    link: '/products/verdantia',
  },
  {
    webm: asset('/videos/ignis_rossso.webm'),
    mp4: asset('/videos/ignis_rossso.mp4'),
    title: 'Ignis Rosso',
    image: asset('/img/ignis_rosso.png'),
    buttonBg: 'linear-gradient(95deg, rgba(255, 98, 39, 0.40) 0%, rgba(159, 54, 14, 0.40) 100%)',
    link: '/products/ignis-rosso',
  },
  {
    webm: asset('/videos/noctis_violet.webm'),
    mp4: asset('/videos/noctis_violet.mp4'),
    title: 'Noctis Violet',
    image: asset('/img/noctis_violet.png'),
    buttonBg: 'linear-gradient(95deg, rgba(241, 100, 255, 0.40) 0%, rgba(124, 12, 136, 0.40) 100%)',
    link: '/products/noctis-violet',
  },
] as const;

export const HERO_CONFIG = {
  slideInterval: 6000,
  scrollTriggers: {
    contentStart: 0.4,
    contentEnd: 0.84,
    contentScrub: 0.55,
    bottleStart: 0.3,
    bottleEnd: 0.8505,
    bottleScrub: 0.825,
  },
  animations: {
    fadeInDelay: 0.21,
    fadeInDuration: 0.56,
    fadeInStagger: 0.11,
    bottleDuration: 0.85,
    fadeOutDuration: 0.21,
  },
} as const;
