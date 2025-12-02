export const FRAME_CONFIG = {
  frameCount: 125,
  batchSize: 10,
  framePathTemplate: (index: number) => {
    const frameNumber = (index + 1).toString().padStart(4, '0');
    return `/frames/frame_${frameNumber}.jpg`;
  },
} as const;