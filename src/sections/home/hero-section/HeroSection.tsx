import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

gsap.registerPlugin(ScrollTrigger);

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
  const [isPaused, setIsPaused] = useState(false);
  const [initialAnimationDone, setInitialAnimationDone] = useState(false);
  const prevIndexRef = useRef(0);
  
  const contentRef = useRef<HTMLDivElement>(null);
  const bottleRef = useRef<HTMLImageElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  const setupScrollTriggers = () => {
    const vh = window.innerHeight;
    const contentElements = [contentRef.current, videoRef.current];
    
    contentElements.forEach(el => {
      if (el) {
        ScrollTrigger.create({
          trigger: document.body,
          start: vh * 0.4,
          end: vh * 0.84,
          scrub: 0.55,
          onUpdate: (self) => {
            if (el) gsap.set(el, { opacity: 1 - self.progress });
          },
          onEnter: () => setIsPaused(true),
          onLeaveBack: () => setIsPaused(false),
        });
      }
    });
    
    if (buttonRef.current) {
      ScrollTrigger.create({
        trigger: document.body,
        start: vh * 0.4,
        end: vh * 0.84,
        scrub: 0.55,
        onUpdate: (self) => {
          if (buttonRef.current) gsap.set(buttonRef.current, { opacity: 1 - self.progress });
        },
      });
    }

    if (bottleRef.current) {
      ScrollTrigger.create({
        trigger: document.body,
        start: vh * 0.3,
        end: vh * 0.8505,
        scrub: 0.825,
        onUpdate: (self) => {
          if (bottleRef.current) {
            gsap.set(bottleRef.current, { 
              yPercent: -10 * self.progress,
              scale: 1 + (0.05 * self.progress),
              opacity: 1 - self.progress 
            });
          }
        },
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const tl = gsap.timeline({
      onComplete: () => {
        setInitialAnimationDone(true);
        setupScrollTriggers();
      }
    });
    
    tl.fromTo([titleRef.current, subtitleRef.current],
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        delay: 0.3
      }
    )
    .fromTo(bottleRef.current,
      { y: '3%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 1.2, ease: 'power2.out' },
      '-=0.9'
    )
    .fromTo(buttonRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: 'power2.out' },
      '-=1.2'
    );
  }, []);

  useEffect(() => {
    if (!initialAnimationDone || prevIndexRef.current === currentIndex) return;
    
    prevIndexRef.current = currentIndex;
    
    const tl = gsap.timeline();
    
    tl.to([titleRef.current, subtitleRef.current, buttonRef.current, bottleRef.current], {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in'
    })
    .set(subtitleRef.current, {
      textContent: slides[currentIndex].title
    })
    .fromTo([titleRef.current, subtitleRef.current],
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
      }
    )
    .fromTo(bottleRef.current,
      { y: '3%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 1.2, ease: 'power2.out' },
      '-=0.6'
    )
    .fromTo(buttonRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: 'power2.out' },
      '-=1.2'
    );
  }, [currentIndex, initialAnimationDone]);

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
        <VideoBackgroundContainer ref={videoRef}>
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
        <HeroContent ref={contentRef}>
          <HeroTitle ref={titleRef}>Three stories, three fragrances...</HeroTitle>
          <HeroSubtitle ref={subtitleRef}>{currentSlide.title}</HeroSubtitle>
        </HeroContent>
        <HeroBottom>
          <BottomLeft>
            <ProductImage 
              ref={bottleRef}
              key={currentIndex} 
              src={currentSlide.image} 
              alt={currentSlide.title}
            />
          </BottomLeft>
          <BottomRight>
            <ShopButton ref={buttonRef} href={currentSlide.link}>
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