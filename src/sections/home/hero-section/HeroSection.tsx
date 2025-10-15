import {
  HeroContainer,
  VideoBackground,
  VideoOverlay,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
} from './HeroSection.styles';

export const HeroSection = () => {
  return (
    <HeroContainer>
      <VideoBackground autoPlay loop muted playsInline preload="auto">
        {/* <source src="/videos/hero.mp4" type="video/mp4" />
        <source src="/videos/hero.webm" type="video/webm" /> */}
      </VideoBackground>
      <VideoOverlay />
      <HeroContent>
        <HeroTitle>Three stories, three fragrances...</HeroTitle>
        <HeroSubtitle>Verdantia</HeroSubtitle>
      </HeroContent>
    </HeroContainer>
  );
};