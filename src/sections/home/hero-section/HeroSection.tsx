import { useState, useEffect } from 'react';
import {
  HeroContainer,
  VideoBackground,
  VideoOverlay,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
} from './HeroSection.styles';

const videos = [
  { webm: '/videos/verdantia.webm', mp4: '/videos/verdantia.mp4', title: 'Verdantia' },
  { webm: '/videos/ignis_rossso.webm', mp4: '/videos/ignis_rossso.mp4', title: 'Ignis Rosso' },
  { webm: '/videos/noctis_violet.webm', mp4: '/videos/noctis_violet.mp4', title: 'Noctis Violet' },
];

export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentVideo = videos[currentIndex];

  return (
    <HeroContainer>
      <VideoBackground key={currentIndex} autoPlay loop muted playsInline preload="auto">
        <source src={currentVideo.webm} type="video/webm" />
        <source src={currentVideo.mp4} type="video/mp4" />
      </VideoBackground>
      <VideoOverlay />
      <HeroContent>
        <HeroTitle>Three stories, three fragrances...</HeroTitle>
        <HeroSubtitle>{currentVideo.title}</HeroSubtitle>
      </HeroContent>
    </HeroContainer>
  );
};