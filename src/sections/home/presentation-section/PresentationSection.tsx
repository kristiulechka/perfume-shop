import { useEffect, useRef } from 'react';
import { SectionContainer, VideoBackground } from './PresentationSection.styles';

export const PresentationSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
            hasPlayedRef.current = true;
          } else if (hasPlayedRef.current) {
            const boundingRect = section.getBoundingClientRect();
            const isScrollingToSection = boundingRect.top > 0;
            
            if (isScrollingToSection) {
              video.currentTime = 0;
            }
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(section);

    video.addEventListener('ended', () => {
      video.pause();
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <SectionContainer ref={sectionRef}>
      <VideoBackground
        ref={videoRef}
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/all_bottles.webm" type="video/webm" />
        <source src="/videos/all_bottles.mp4" type="video/mp4" />
      </VideoBackground>
    </SectionContainer>
  );
};