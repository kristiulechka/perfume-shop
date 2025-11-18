import { useEffect, useRef, useState } from 'react';
import { SectionContainer } from './DescriptionSection.styles';

export const DescriptionSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const loadedRef = useRef<boolean[]>([]);
  const frameCount = 125;

  useEffect(() => {
    imagesRef.current = new Array(frameCount).fill(null);
    loadedRef.current = new Array(frameCount).fill(false);

    const loadImage = (index: number): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        const frameNumber = (index + 1).toString().padStart(4, '0');
        img.onload = () => {
          imagesRef.current[index] = img;
          loadedRef.current[index] = true;
          resolve();
        };
        img.onerror = () => resolve();
        img.src = `/frames/frame_${frameNumber}.jpg`;
      });
    };

    const loadFrames = async () => {
      await loadImage(0);
      
      if (canvasRef.current && imagesRef.current[0]) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const firstImg = imagesRef.current[0];
        canvas.width = firstImg.width;
        canvas.height = firstImg.height;
        ctx?.drawImage(firstImg, 0, 0);
      }
      
      setIsLoading(false);

      const batchSize = 10;
      for (let i = 1; i < frameCount; i += batchSize) {
        const batch = [];
        for (let j = i; j < Math.min(i + batchSize, frameCount); j++) {
          batch.push(loadImage(j));
        }
        await Promise.all(batch);
      }
    };

    loadFrames();
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const findNearestLoadedFrame = (targetIndex: number): number => {
      if (loadedRef.current[targetIndex]) return targetIndex;
      
      for (let offset = 1; offset < frameCount; offset++) {
        if (targetIndex - offset >= 0 && loadedRef.current[targetIndex - offset]) {
          return targetIndex - offset;
        }
        if (targetIndex + offset < frameCount && loadedRef.current[targetIndex + offset]) {
          return targetIndex + offset;
        }
      }
      return 0;
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollPosition / maxScroll;
      
      const targetIndex = Math.min(
        Math.floor(scrollFraction * frameCount),
        frameCount - 1
      );

      const frameIndex = findNearestLoadedFrame(targetIndex);

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
  }, [isLoading]);

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
