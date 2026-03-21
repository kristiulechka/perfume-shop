import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
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
  HeroContainerWrapper,
} from './HeroSection.styles';
import { HERO_SLIDES, HERO_CONFIG } from './heroSection.constants';
import { SVGFilters } from '../../../components/common/SVGFilters';
import { GlassEffectLayers } from '../../../components/common/GlassEffectLayers';
import { Link } from 'react-router-dom';

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
  const slideTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const isPausedRef = useRef(false);

  const killSlideTimeline = () => {
    if (slideTimelineRef.current) {
      slideTimelineRef.current.kill();
      slideTimelineRef.current = null;
      setInitialAnimationDone(true);
    }
  };

  const applyScrollOpacity = () => {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    const { scrollTriggers: st } = HERO_CONFIG;

    const contentProgress = Math.min(1, Math.max(0,
      (scrollY / vh - st.contentStart) / (st.contentEnd - st.contentStart)
    ));
    const bottleProgress = Math.min(1, Math.max(0,
      (scrollY / vh - st.bottleStart) / (st.bottleEnd - st.bottleStart)
    ));

    if (contentRef.current) gsap.set(contentRef.current, { opacity: 1 - contentProgress });
    if (videoRef.current) gsap.set(videoRef.current, { opacity: 1 - contentProgress });
    if (buttonRef.current) gsap.set(buttonRef.current, { opacity: 1 - contentProgress });
    if (bottleRef.current) {
      gsap.set(bottleRef.current, {
        yPercent: -10 * bottleProgress,
        scale: 1 + 0.05 * bottleProgress,
        opacity: 1 - bottleProgress,
      });
    }

    const shouldBePaused = scrollY > vh * st.contentStart;
    if (shouldBePaused !== isPausedRef.current) {
      isPausedRef.current = shouldBePaused;
      setIsPaused(shouldBePaused);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    document.documentElement.style.overflow = 'hidden';

    const handleScroll = () => {
      killSlideTimeline();
      applyScrollOpacity();
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const unlockScroll = () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.documentElement.style.overflow = '';
    };

    const { animations: anim } = HERO_CONFIG;
    const tl = gsap.timeline({
      onComplete: () => {
        slideTimelineRef.current = null;
        setInitialAnimationDone(true);
        unlockScroll();
      }
    });
    slideTimelineRef.current = tl;

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
      window.removeEventListener('scroll', handleScroll);
      unlockScroll();
    };
  }, []);

  useEffect(() => {
    if (!initialAnimationDone || prevIndexRef.current === currentIndex) return;

    prevIndexRef.current = currentIndex;
    const { animations: anim } = HERO_CONFIG;
    killSlideTimeline();
    const tl = gsap.timeline();
    slideTimelineRef.current = tl;

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
        <HeroContainerWrapper>
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
                src={currentSlide.image}
                alt={currentSlide.title}
              />
            </BottomLeft>
            <BottomRight>
              <Link to={currentSlide.link} style={{ textDecoration: 'none' }}>
                <ShopButton ref={buttonRef}>
                  <GlassEffectLayers
                    GlassFilter={ButtonGlassFilter}
                    GlassOverlay={ButtonGlassOverlay}
                    GlassSpecular={ButtonGlassSpecular}
                    overlayProps={{ buttonBg: currentSlide.buttonBg }}
                  />
                  <ButtonContent>Shop now</ButtonContent>
                </ShopButton>
              </Link>
            </BottomRight>
          </HeroBottom>
        </HeroContainerWrapper>
      </HeroContainer>
    </>
  );
};
