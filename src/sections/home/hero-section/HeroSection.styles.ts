import styled from '@emotion/styled';

export const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const VideoBackground = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: 1;
`;

export const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(10px);
`;


export const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 clamp(20px, 5vw, 60px);
`;

export const HeroTitle = styled.h1`
  color: rgba(255, 255, 255, 0.80);
  text-align: center;
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: clamp(24px, 3.5vw, 38px);
  font-style: normal;
  font-weight: 200;
  line-height: 140%;
  letter-spacing: clamp(0.4px, 0.02em, 0.76px);
  margin-bottom: clamp(20px, 3vh, 40px);
`;

export const HeroSubtitle = styled.p`
  text-align: center;
  font-family: Ephesis, cursive;
  font-size: clamp(80px, 20vw, 284px);
  font-style: normal;
  font-weight: 400;
  line-height: 110%;
  padding: 0 30px;
  letter-spacing: clamp(-2px, -0.02em, -5.68px);
  background: linear-gradient(247deg, rgba(255, 255, 255, 0.40) 15.2%, rgba(166, 202, 145, 0.30) 84.95%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: clamp(60px, 15vw, 120px);
  }
  
  @media (max-width: 480px) {
    font-size: clamp(48px, 12vw, 80px);
  }
`;