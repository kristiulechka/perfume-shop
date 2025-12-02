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
import { HERO_SLIDES, HERO_CONFIG } from './heroSection.constants';
import { SVGFilters } from '../../../components/common/SVGFilters';
import { GlassEffectLayers } from '../../../components/common/GlassEffectLayers';

gsap.registerPlugin(ScrollTrigger);

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
    const { scrollTriggers: st, animations: anim } = HERO_CONFIG;
    const contentElements = [contentRef.current, videoRef.current];
    
    contentElements.forEach(el => {
      if (el) {
        ScrollTrigger.create({
          trigger: document.body,
          start: vh * st.contentStart,
          end: vh * st.contentEnd,
          scrub: st.contentScrub,
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
        start: vh * st.contentStart,
        end: vh * st.contentEnd,
        scrub: st.contentScrub,
        onUpdate: (self) => {
          if (buttonRef.current) gsap.set(buttonRef.current, { opacity: 1 - self.progress });
        },
      });
    }

    if (bottleRef.current) {
      ScrollTrigger.create({
        trigger: document.body,
        start: vh * st.bottleStart,
        end: vh * st.bottleEnd,
        scrub: st.bottleScrub,
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
    setupScrollTriggers();
    
    const { animations: anim } = HERO_CONFIG;
    const tl = gsap.timeline({
      onComplete: () => setInitialAnimationDone(true)
    });
    
    tl.fromTo([titleRef.current, subtitleRef.current],
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: anim.fadeInDuration,
        stagger: anim.fadeInStagger,
        ease: 'power2.out',
        delay: anim.fadeInDelay
      }
    )
    .fromTo(bottleRef.current,
      { y: '3%', opacity: 0 },
      { y: '0%', opacity: 1, duration: anim.bottleDuration, ease: 'power2.out' },
      '-=0.9'
    )
    .fromTo(buttonRef.current,
      { opacity: 0 },
      { opacity: 1, duration: anim.bottleDuration, ease: 'power2.out' },
      '-=1.2'
    );
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (!initialAnimationDone || prevIndexRef.current === currentIndex) return;
    
    prevIndexRef.current = currentIndex;
    const { animations: anim } = HERO_CONFIG;
    const tl = gsap.timeline();
    
    tl.to([titleRef.current, subtitleRef.current, buttonRef.current, bottleRef.current], {
      opacity: 0,
      duration: anim.fadeOutDuration,
      ease: 'power2.in'
    })
    .set(subtitleRef.current, {
      textContent: HERO_SLIDES[currentIndex].title
    })
    .fromTo([titleRef.current, subtitleRef.current],
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: anim.fadeInDuration,
        stagger: anim.fadeInStagger,
        ease: 'power2.out'
      }
    )
    .fromTo(bottleRef.current,
      { y: '3%', opacity: 0 },
      { y: '0%', opacity: 1, duration: anim.bottleDuration, ease: 'power2.out' },
      '-=0.6'
    )
    .fromTo(buttonRef.current,
      { opacity: 0 },
      { opacity: 1, duration: anim.bottleDuration, ease: 'power2.out' },
      '-=1.2'
    );
  }, [currentIndex, initialAnimationDone]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const next = (currentIndex + 1) % HERO_SLIDES.length;
      setNextIndex(next);
      setCurrentIndex(next);
    }, HERO_CONFIG.slideInterval);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const currentSlide = HERO_SLIDES[currentIndex];
  const nextSlide = HERO_SLIDES[nextIndex];

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
              <GlassEffectLayers
                GlassFilter={ButtonGlassFilter}
                GlassOverlay={ButtonGlassOverlay}
                GlassSpecular={ButtonGlassSpecular}
                overlayProps={{ buttonBg: currentSlide.buttonBg }}
              />
              <ButtonContent>Shop now</ButtonContent>
            </ShopButton>
          </BottomRight>
        </HeroBottom>
      </HeroContainer>
    </>
  );
};