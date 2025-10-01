import React from 'react';

const WaveDivider = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-visible leading-none z-20 -mb-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" className="relative block w-full h-[150px]">
            <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#6ca0c7', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#d5e7f1', stopOpacity: 1}} />
                </linearGradient>
            </defs>
            <path d="M0,50 C150,100 350,0 500,50 L500,150 L0,150 Z" fill="url(#waveGradient)"></path>
        </svg>
    </div>
  );
};

export default WaveDivider;
