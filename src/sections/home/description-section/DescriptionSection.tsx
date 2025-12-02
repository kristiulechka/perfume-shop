import { useRef } from 'react';
import { SectionContainer } from './DescriptionSection.styles';
import { useFrameAnimation } from './useFrameAnimation';

export const DescriptionSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null) as React.RefObject<HTMLCanvasElement>;
  useFrameAnimation(canvasRef);

  return (
    <SectionContainer>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
        }}
      />
    </SectionContainer>
  );
};