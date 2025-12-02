import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ScrollTriggerConfig {
  contentStart: number;
  contentEnd: number;
  contentScrub: number;
  bottleStart: number;
  bottleEnd: number;
  bottleScrub: number;
}

interface AnimationConfig {
  fadeInDelay: number;
  fadeInDuration: number;
  fadeInStagger: number;
  bottleDuration: number;
  fadeOutDuration: number;
}

interface AnimationRefs {
  title: HTMLElement | null;
  subtitle: HTMLElement | null;
  bottle: HTMLElement | null;
  button: HTMLElement | null;
}

export const setupScrollTriggers = (
  refs: {
    content: HTMLElement | null;
    video: HTMLElement | null;
    button: HTMLElement | null;
    bottle: HTMLElement | null;
  },
  config: ScrollTriggerConfig,
  setIsPaused: (paused: boolean) => void
) => {
  const vh = window.innerHeight;
  const contentElements = [refs.content, refs.video].filter(Boolean) as HTMLElement[];

  contentElements.forEach((el) => {
    ScrollTrigger.create({
      trigger: document.body,
      start: vh * config.contentStart,
      end: vh * config.contentEnd,
      scrub: config.contentScrub,
      onUpdate: (self) => gsap.set(el, { opacity: 1 - self.progress }),
      onEnter: () => setIsPaused(true),
      onLeaveBack: () => setIsPaused(false),
    });
  });

  if (refs.button) {
    ScrollTrigger.create({
      trigger: document.body,
      start: vh * config.contentStart,
      end: vh * config.contentEnd,
      scrub: config.contentScrub,
      onUpdate: (self) => gsap.set(refs.button, { opacity: 1 - self.progress }),
    });
  }

  if (refs.bottle) {
    ScrollTrigger.create({
      trigger: document.body,
      start: vh * config.bottleStart,
      end: vh * config.bottleEnd,
      scrub: config.bottleScrub,
      onUpdate: (self) => {
        gsap.set(refs.bottle, {
          yPercent: -10 * self.progress,
          scale: 1 + 0.05 * self.progress,
          opacity: 1 - self.progress,
        });
      },
    });
  }
};

export const createInitialTimeline = (
  refs: AnimationRefs,
  config: AnimationConfig,
  onComplete: () => void
) => {
  const tl = gsap.timeline({ onComplete });

  tl.fromTo(
    [refs.title, refs.subtitle],
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: config.fadeInDuration,
      stagger: config.fadeInStagger,
      ease: 'power2.out',
      delay: config.fadeInDelay,
    }
  )
    .fromTo(
      refs.bottle,
      { y: '3%', opacity: 0 },
      { y: '0%', opacity: 1, duration: config.bottleDuration, ease: 'power2.out' },
      '-=0.9'
    )
    .fromTo(
      refs.button,
      { opacity: 0 },
      { opacity: 1, duration: config.bottleDuration, ease: 'power2.out' },
      '-=1.2'
    );
};

export const createSlideChangeTimeline = (
  refs: AnimationRefs,
  config: AnimationConfig,
  newTitle: string
) => {
  const tl = gsap.timeline();

  tl.to([refs.title, refs.subtitle, refs.button, refs.bottle], {
    opacity: 0,
    duration: config.fadeOutDuration,
    ease: 'power2.in',
  })
    .set(refs.subtitle, { textContent: newTitle })
    .fromTo(
      [refs.title, refs.subtitle],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: config.fadeInDuration,
        stagger: config.fadeInStagger,
        ease: 'power2.out',
      }
    )
    .fromTo(
      refs.bottle,
      { y: '3%', opacity: 0 },
      { y: '0%', opacity: 1, duration: config.bottleDuration, ease: 'power2.out' },
      '-=0.6'
    )
    .fromTo(
      refs.button,
      { opacity: 0 },
      { opacity: 1, duration: config.bottleDuration, ease: 'power2.out' },
      '-=1.2'
    );
};