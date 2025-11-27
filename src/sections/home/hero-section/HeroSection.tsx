import { useState, useEffect } from 'react';
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
  ButtonGlassFilter,
  ButtonGlassOverlay,
  ButtonGlassSpecular,
  ButtonContent,
  VideoBackgroundContainer,
} from './HeroSection.styles';

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
  </svg>
);

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
  const [contentOpacity, setContentOpacity] = useState(1);
  const [bottleOpacity, setBottleOpacity] = useState(1);
  const [bottleTransform, setBottleTransform] = useState({ y: 0, scale: 1 });
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      
      const thirtyPercent = viewportHeight * 0.3;
      const sixtyPercent = viewportHeight * 0.6;
      const fullHeight = viewportHeight;
      
      if (scrollPosition <= thirtyPercent) {
        setContentOpacity(1);
        setBottleOpacity(1);
        setBottleTransform({ y: 0, scale: 1 });
        setIsPaused(false);
      } else if (scrollPosition >= fullHeight) {
        setContentOpacity(0);
        setBottleOpacity(0);
        setBottleTransform({ y: -100, scale: 1.2 });
        setIsPaused(true);
      } else {
        const contentProgress = Math.min((scrollPosition - thirtyPercent) / (sixtyPercent - thirtyPercent), 1);
        setContentOpacity(Math.max(0, 1 - contentProgress));
        
        const bottleProgress = (scrollPosition - thirtyPercent) / (fullHeight - thirtyPercent);
        setBottleOpacity(Math.max(0, 1 - bottleProgress));
        
        const y = -100 * bottleProgress;
        const scale = 1 + (0.2 * bottleProgress);
        setBottleTransform({ y, scale });
        setIsPaused(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const next = (currentIndex + 1) % slides.length;
      setNextIndex(next);
      setCurrentIndex(next);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const currentSlide = slides[currentIndex];
  const nextSlide = slides[nextIndex];

  return (
    <>
      <SVGFilters />
      <HeroContainer>
      <VideoBackgroundContainer style={{ opacity: contentOpacity }}>
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
      <HeroContent style={{ opacity: contentOpacity }}>
        <HeroTitle>Three stories, three fragrances...</HeroTitle>
        <HeroSubtitle key={currentIndex}>{currentSlide.title}</HeroSubtitle>
      </HeroContent>
      <HeroBottom>
        <BottomLeft>
          <ProductImage 
            key={currentIndex} 
            src={currentSlide.image} 
            alt={currentSlide.title}
            style={{
              transform: `translateY(${bottleTransform.y}%) scale(${bottleTransform.scale})`,
              opacity: bottleOpacity,
            }}
          />
        </BottomLeft>
        <BottomRight style={{ opacity: contentOpacity }}>
          <ShopButton href={currentSlide.link}>
            <ButtonGlassFilter />
            <ButtonGlassOverlay buttonBg={currentSlide.buttonBg} />
            <ButtonGlassSpecular />
            <ButtonContent>Shop now</ButtonContent>
          </ShopButton>
        </BottomRight>
      </HeroBottom>
    </HeroContainer>
    </>
  );
};