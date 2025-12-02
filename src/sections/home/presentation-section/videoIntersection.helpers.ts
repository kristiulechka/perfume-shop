export const createVideoIntersectionObserver = (
  video: HTMLVideoElement,
  section: HTMLElement,
  hasPlayedRef: React.MutableRefObject<boolean>
) => {
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

  return observer;
};

export const handleVideoEnd = (video: HTMLVideoElement) => {
  video.pause();
};