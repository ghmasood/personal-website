import React from 'react';

import Image from 'next/image';

function SplashPage() {
  return (
    <div dir='ltr' className='relative h-full overflow-hidden'>
      <div className='flex h-full w-full flex-col-reverse items-start justify-between gap-x-5 gap-y-3 px-2 pt-2 sm:px-4 lg:px-8 xl:flex-row xl:items-end xl:justify-start xl:pt-6 2xl:gap-x-32 2xl:px-24 lh:flex-row lh:items-end'>
        <div className='relative aspect-[0.902] w-full sm:h-full sm:w-auto'>
          <Image src={'/images/bracketMasood.svg'} fill alt={''} className='z-[1]' fetchPriority='high' />
          <div className='absolute -top-5 start-16 h-2/3 w-1/2 rotate-12 bg-accent-green opacity-35 blur-[100px]'></div>
          <div className='absolute -bottom-24 -end-24 h-2/3 w-1/2 rotate-12 bg-accent-blue opacity-35 blur-[100px]'></div>
        </div>
        <div className='z-[1] flex w-full flex-col gap-2 pb-4 text-white opacity-20 drop-shadow-[0_4px_1px_rgba(0,0,0,1)] xl:gap-4 xl:pb-12'>
          <span className='text-5xl font-black xl:text-[5.5rem] xs:text-[4rem]'>masoud.codes</span>
          <span className='text-3xl font-extralight xl:text-[3rem] xs:text-[2.2rem]'>{'{learnTogether}'}</span>
        </div>
      </div>
      <div className='absolute -top-3.5 z-[3] w-full'>
        <span className='loader' />
      </div>
    </div>
  );
}

export default SplashPage;
