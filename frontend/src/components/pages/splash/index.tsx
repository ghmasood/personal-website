'use client';

import React from 'react';

import Lottie from 'lottie-react';

import logoMotion from './logoMotion.json';

function SplashPage() {
  return (
    <div className='relative flex h-full w-full items-center justify-center overflow-hidden'>
      <Lottie loop={true} autoplay={true} animationData={logoMotion} />
      <div className='absolute -top-3.5 z-[3] w-full'>
        <span className='loader' />
      </div>
    </div>
  );
}
export default SplashPage;
