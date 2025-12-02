import { useEffect, useRef } from 'react';
import { SectionContainer, VideoBackground } from './PresentationSection.styles';
import { createVideoIntersectionObserver, handleVideoEnd } from './videoIntersection.helpers';

export const PresentationSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section) return;

    const observer = createVideoIntersectionObserver(video, section, hasPlayedRef);
    observer.observe(section);

    const onEnded = () => handleVideoEnd(video);
    video.addEventListener('ended', onEnded);

    return () => {
      observer.disconnect();
      video.removeEventListener('ended', onEnded);
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