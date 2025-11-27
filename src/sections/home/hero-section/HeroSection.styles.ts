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
  padding: 0 5vw;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-top: 12vh;
  }
  
  @media (max-height: 600px) {
    padding-top: 8vh;
  }
`;

export const HeroTitle = styled.h1`
  color: rgba(255, 255, 255, 0.80);
  text-align: center;
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 3.5vw;
  font-style: normal;
  font-weight: 200;
  line-height: 140%;
  letter-spacing: 0.02em;
  margin-bottom: 3vh;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 5vw;
  }
  
  @media (max-height: 600px) {
    font-size: 4vw;
    margin-bottom: 2vh;
  }
`;

export const HeroSubtitle = styled.p`
  text-align: center;
  font-family: Ephesis, cursive;
  font-size: 20vw;
  font-style: normal;
  font-weight: 400;
  line-height: 110%;
  padding: 0 3vw;
  letter-spacing: -0.02em;
  background: linear-gradient(247deg, rgba(255, 255, 255, 0.40) 15.2%, rgba(166, 202, 145, 0.30) 84.95%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${fadeIn} 0.3s ease-in-out;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 25vw;
  }
  
  @media (max-height: 600px) {
    font-size: 18vw;
  }
`;

export const HeroBottom = styled.div`
  position: absolute;
  bottom: -12vh;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 3;
  justify-content: center;
  align-items: center;
  padding-bottom: 4vh;
  
  @media (max-height: 700px) {
    bottom: -8vh;
    padding-bottom: 2vh;
  }
`;

export const BottomLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BottomRight = styled.div`
  position: absolute;
  bottom: 22vh;
  left: 75%;
  transform: translateX(-50%);
  z-index: 3;
  
  @media (max-width: 768px) {
    left: 50%;
    bottom: 15vh;
  }
  
  @media (max-height: 700px) {
    bottom: 18vh;
  }
  
  @media (max-height: 600px) {
    bottom: 12vh;
  }
`;

export const ProductImage = styled.img`
  max-height: 52vh;
  max-width: 100%;
  object-fit: contain;
  animation: ${fadeIn} 0.3s ease-in-out;
  
  @media (max-width: 768px) {
    max-height: 60vh;
  }
  
  @media (max-height: 700px) {
    max-height: 45vh;
  }
  
  @media (max-height: 600px) {
    max-height: 40vh;
  }

  @media (max-height: 500px) {
    max-height: 65vh;
  }
`;

export const ShopButton = styled.a<{ buttonBg: string }>`
  display: inline-block;
  padding: 2vh 6vw;
  border-radius: 40px;
  background: ${props => props.buttonBg};
  color: white;
  text-decoration: none;
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 2.5vw;
  font-weight: 400;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
  
  @media (max-width: 768px) {
    display: flex;
    /* width: 40vw; */
    padding: 1.5vh 8vw;
    justify-content: center;
    align-items: center;
    font-size: 4vw;
  }
  
  @media (max-height: 600px) {
    padding: 1.2vh 5vw;
    font-size: 2vw;
  }
`;