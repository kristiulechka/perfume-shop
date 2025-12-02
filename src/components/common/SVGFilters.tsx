export const SVGFilters = () => (
  <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
    <defs>
      <radialGradient id="lensGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="white" stopOpacity="1" />
        <stop offset="30%" stopColor="white" stopOpacity="0.8" />
        <stop offset="70%" stopColor="white" stopOpacity="0.3" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </radialGradient>
    </defs>
    <filter id="lensFilter" x="-50%" y="-50%" width="200%" height="200%">
      <feImage href="#lensGradient" result="grad" />
      <feGaussianBlur in="SourceAlpha" stdDeviation="15" result="blur" />
      <feColorMatrix in="blur" type="matrix" 
        values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 25 -12" result="displacementMap" />
      <feDisplacementMap in="SourceGraphic" in2="displacementMap" 
        scale="15" xChannelSelector="A" yChannelSelector="A" />
    </filter>
    <filter id="lensFilterMobile" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
    </filter>
  </svg>
);