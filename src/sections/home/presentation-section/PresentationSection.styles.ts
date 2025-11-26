import styled from '@emotion/styled';

export const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  background-color: #000;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
    @media (max-width: 768px) {
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const VideoBackground = styled.video`
  width: 70%;
  height: auto;
  display: block;
  margin: 0 auto;
  min-height: 200px;
  position: relative;
  z-index: 1;
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
    mask-image: linear-gradient(to top, transparent 0%, transparent 20%, black 100%);
    -webkit-mask-image: linear-gradient(to top, transparent 0%, transparent 20%, black 100%);  
    
    
  @media (max-width: 768px) {
    width: 100%;
  }


`;