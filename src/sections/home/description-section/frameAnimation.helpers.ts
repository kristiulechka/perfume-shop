import { FRAME_CONFIG } from './frameAnimation.constants';

export const loadImage = (index: number): Promise<HTMLImageElement | null> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = FRAME_CONFIG.framePathTemplate(index);
  });
};

export const loadFramesInBatches = async (
  startIndex: number,
  endIndex: number,
  onFrameLoad: (index: number, img: HTMLImageElement | null) => void
) => {
  const { batchSize } = FRAME_CONFIG;
  
  for (let i = startIndex; i < endIndex; i += batchSize) {
    const batch = [];
    for (let j = i; j < Math.min(i + batchSize, endIndex); j++) {
      batch.push(
        loadImage(j).then((img) => {
          onFrameLoad(j, img);
          return img;
        })
      );
    }
    await Promise.all(batch);
  }
};

export const findNearestLoadedFrame = (
  targetIndex: number,
  loadedFrames: boolean[],
  frameCount: number
): number => {
  if (loadedFrames[targetIndex]) return targetIndex;
  
  for (let offset = 1; offset < frameCount; offset++) {
    if (targetIndex - offset >= 0 && loadedFrames[targetIndex - offset]) {
      return targetIndex - offset;
    }
    if (targetIndex + offset < frameCount && loadedFrames[targetIndex + offset]) {
      return targetIndex + offset;
    }
  }
  return 0;
};

export const calculateFrameIndex = (
  scrollPosition: number,
  maxScroll: number,
  frameCount: number
): number => {
  const scrollFraction = scrollPosition / maxScroll;
  return Math.min(Math.floor(scrollFraction * frameCount), frameCount - 1);
};

export const drawFrame = (
  canvas: HTMLCanvasElement | null,
  img: HTMLImageElement | null
) => {
  if (!canvas || !img) return;
  
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0);
};

export const initializeCanvas = (
  canvas: HTMLCanvasElement | null,
  img: HTMLImageElement | null
) => {
  if (!canvas || !img) return;
  
  canvas.width = img.width;
  canvas.height = img.height;
  drawFrame(canvas, img);
};