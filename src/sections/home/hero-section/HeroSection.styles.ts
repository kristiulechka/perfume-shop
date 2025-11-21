import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const HeroContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: transparent;
  z-index: 1;
`;

export const VideoBackgroundContainer = styled.div`
  filter: blur(10px);
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  object-fit: cover;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: 2;
  }
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
  animation: ${fadeIn} 0.3s ease-in-out;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), rgba(255, 255, 255, 0.00);
  z-index: 1;
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
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-top: clamp(80px, 12vh, 120px);
  }
`;

export const HeroTitle = styled.h1`
  color: rgba(255, 255, 255, 0.80);
  text-align: center;
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: clamp(18px, 3.5vw, 38px);
  font-style: normal;
  font-weight: 200;
  line-height: 140%;
  letter-spacing: clamp(0.36px, 0.02em, 0.76px);
  margin-bottom: clamp(15px, 3vh, 40px);
  
  @media (max-width: 768px) {
    font-size: clamp(14px, 4vw, 24px);
  }
`;

export const HeroSubtitle = styled.p`
  text-align: center;
  font-family: Ephesis, cursive;
  font-size: clamp(60px, 20vw, 284px);
  font-style: normal;
  font-weight: 400;
  line-height: 110%;
  padding: 0 clamp(20px, 3vw, 30px);
  letter-spacing: clamp(-1.2px, -0.02em, -5.68px);
  background: linear-gradient(247deg, rgba(255, 255, 255, 0.40) 15.2%, rgba(166, 202, 145, 0.30) 84.95%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${fadeIn} 0.3s ease-in-out;
  
  @media (max-width: 768px) {
    font-size: clamp(48px, 15vw, 80px);
  }
`;

export const HeroBottom = styled.div`
  position: absolute;
  bottom: clamp(-105px, -12vh, -80px);
  left: 0;
  width: 100%;
  display: flex;
  z-index: 3;
  justify-content: center;
  align-items: center;
  padding-bottom: clamp(20px, 4vh, 40px);
`;

export const BottomLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BottomRight = styled.div`
  position: absolute;
  bottom: clamp(120px, 22vh, 180px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  
  @media (min-width: 769px) {
    left: 75%;
  }
  
  @media (max-width: 768px) {
    bottom: clamp(100px, 18vh, 140px);
  }
`;

export const ProductImage = styled.img`
  max-height: clamp(350px, 52vh, 536px);
  max-width: 100%;
  object-fit: contain;
  animation: ${fadeIn} 0.3s ease-in-out;
  
  @media (max-width: 768px) {
    max-height: clamp(280px, 45vh, 400px);
  }
`;

export const ShopButton = styled.a<{ buttonBg: string }>`
  display: inline-block;
  padding: clamp(12px, 2vh, 16px) clamp(36px, 6vw, 48px);
  border-radius: 40px;
  background: ${props => props.buttonBg};
  color: white;
  text-decoration: none;
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: clamp(14px, 2.5vw, 18px);
  font-weight: 400;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
  
  @media (max-width: 768px) {
    font-size: clamp(12px, 3vw, 16px);
  }
`;