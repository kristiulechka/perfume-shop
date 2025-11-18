import { useState, useEffect, useRef } from 'react';
import {
  HeroContainer,
  VideoBackground,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroBottom,
  BottomLeft,
  BottomRight,
  ProductImage,
  ShopButton,
  VideoBackgroundContainer,
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
  const [nextIndex, setNextIndex] = useState(1);
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const heroTop = heroRef.current.offsetTop;
      const heroHeight = heroRef.current.offsetHeight;
      const scrollPosition = window.scrollY;
      
      const scrollPastHero = scrollPosition - heroTop;
      const seventyPercentHeight = heroHeight * 0.5;
      
      if (scrollPastHero >= seventyPercentHeight) {
        setScrollOpacity(0);
      } else {
        const fadeProgress = scrollPastHero / seventyPercentHeight;
        const opacity = 1 - fadeProgress;
        setScrollOpacity(Math.max(0, opacity));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (currentIndex + 1) % slides.length;
      setNextIndex(next);
      setCurrentIndex(next);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentSlide = slides[currentIndex];
  const nextSlide = slides[nextIndex];

  return (
    <HeroContainer ref={heroRef} style={{ opacity: scrollOpacity }}>
      <VideoBackgroundContainer>
        <VideoBackground key={currentIndex} autoPlay loop muted playsInline preload="auto">
          <source src={currentSlide.webm} type="video/webm" />
          <source src={currentSlide.mp4} type="video/mp4" />
        </VideoBackground>
      </VideoBackgroundContainer>
      <VideoBackgroundContainer style={{ opacity: 0 }}>
        <VideoBackground key={nextIndex} autoPlay loop muted playsInline preload="auto">
          <source src={nextSlide.webm} type="video/webm" />
          <source src={nextSlide.mp4} type="video/mp4" />
        </VideoBackground>
      </VideoBackgroundContainer>
      <HeroContent>
        <HeroTitle>Three stories, three fragrances...</HeroTitle>
        <HeroSubtitle key={currentIndex}>{currentSlide.title}</HeroSubtitle>
      </HeroContent>
      <HeroBottom>
        <BottomLeft>
          <ProductImage key={currentIndex} src={currentSlide.image} alt={currentSlide.title} />
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