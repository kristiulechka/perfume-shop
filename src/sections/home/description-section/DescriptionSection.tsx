import { useEffect, useRef, useState } from 'react';
import { SectionContainer } from './DescriptionSection.styles';

export const DescriptionSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [frameCount, setFrameCount] = useState(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const loadFrames = async () => {
      const frames: HTMLImageElement[] = [];
      let i = 1;
      
      while (true) {
        try {
          const img = new Image();
          const frameNumber = i.toString().padStart(4, '0');
          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
            img.src = `/frames/frame_${frameNumber}.jpg`;
          });
          frames.push(img);
          i++;
        } catch {
          break;
        }
      }
      
      imagesRef.current = frames;
      setFrameCount(frames.length);
      
      if (frames.length > 0 && canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = frames[0].width;
        canvas.height = frames[0].height;
        ctx?.drawImage(frames[0], 0, 0);
      }
    };

    loadFrames();
  }, []);

  useEffect(() => {
    if (frameCount === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollPosition / maxScroll;
      
      const frameIndex = Math.min(
        Math.floor(scrollFraction * frameCount),
        frameCount - 1
      );

      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      const img = imagesRef.current[frameIndex];

      if (canvas && ctx && img) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [frameCount]);

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
        }}
      />
    </SectionContainer>
  );
};