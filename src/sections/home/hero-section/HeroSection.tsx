import { useState, useEffect } from 'react';
import {
  HeroContainer,
  VideoBackground,
  VideoOverlay,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroBottom,
  BottomLeft,
  BottomRight,
  ProductImage,
  ShopButton,
} from './HeroSection.styles';

const slides = [
  {
    webm: '/videos/verdantia.webm',
    mp4: '/videos/verdantia.mp4',
    title: 'Verdantia',
    image: '/img/verdantia.png',
    buttonBg: 'linear-gradient(95deg, rgba(111, 255, 69, 0.40) 0%, rgba(56, 151, 28, 0.40) 100%)',
    link: '/products/verdantia',
  },
  {
    webm: '/videos/ignis_rossso.webm',
    mp4: '/videos/ignis_rossso.mp4',
    title: 'Ignis Rosso',
    image: '/img/ignis_rosso.png',
    buttonBg: 'linear-gradient(95deg, rgba(255, 98, 39, 0.40) 0%, rgba(159, 54, 14, 0.40) 100%)',
    link: '/products/ignis-rosso',
  },
  {
    webm: '/videos/noctis_violet.webm',
    mp4: '/videos/noctis_violet.mp4',
    title: 'Noctis Violet',
    image: '/img/noctis_violet.png',
    buttonBg: 'linear-gradient(95deg, rgba(241, 100, 255, 0.40) 0%, rgba(124, 12, 136, 0.40) 100%)',
    link: '/products/noctis-violet',
  },
];

export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <HeroContainer>
      <VideoBackground key={currentIndex} autoPlay loop muted playsInline preload="auto">
        <source src={currentSlide.webm} type="video/webm" />
        <source src={currentSlide.mp4} type="video/mp4" />
      </VideoBackground>
      <VideoOverlay />
      <HeroContent>
        <HeroTitle>Three stories, three fragrances...</HeroTitle>
        <HeroSubtitle>{currentSlide.title}</HeroSubtitle>
      </HeroContent>
      <HeroBottom>
        <BottomLeft>
          <ProductImage src={currentSlide.image} alt={currentSlide.title} />
        </BottomLeft>
        <BottomRight>
          <ShopButton href={currentSlide.link} buttonBg={currentSlide.buttonBg}>
            Shop now
          </ShopButton>
        </BottomRight>
      </HeroBottom>
    </HeroContainer>
  );
};