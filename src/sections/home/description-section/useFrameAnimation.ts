import { useEffect, useRef, useState } from 'react';
import { FRAME_CONFIG } from './frameAnimation.constants';
import {
  loadImage,
  loadFramesInBatches,
  findNearestLoadedFrame,
  calculateFrameIndex,
  drawFrame,
  initializeCanvas,
} from './frameAnimation.helpers';

export const useFrameAnimation = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  const [isLoading, setIsLoading] = useState(true);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const loadedRef = useRef<boolean[]>([]);
  const { frameCount } = FRAME_CONFIG;

  useEffect(() => {
    imagesRef.current = new Array(frameCount).fill(null);
    loadedRef.current = new Array(frameCount).fill(false);

    const loadFrames = async () => {
      const firstImg = await loadImage(0);
      
      if (firstImg) {
        imagesRef.current[0] = firstImg;
        loadedRef.current[0] = true;
        initializeCanvas(canvasRef.current, firstImg);
      }
      
      setIsLoading(false);

      await loadFramesInBatches(1, frameCount, (index, img) => {
        imagesRef.current[index] = img;
        loadedRef.current[index] = img !== null;
      });
    };

    loadFrames();
  }, [canvasRef, frameCount]);

  useEffect(() => {
    if (isLoading) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      const targetIndex = calculateFrameIndex(scrollPosition, maxScroll, frameCount);
      const frameIndex = findNearestLoadedFrame(targetIndex, loadedRef.current, frameCount);
      const img = imagesRef.current[frameIndex];

      drawFrame(canvasRef.current, img);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, canvasRef, frameCount]);

  return { isLoading };
};