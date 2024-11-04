'use client';

import { useEffect } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Splash() {
  // //LIFE CYCLE HOOKS
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.replace('/hello');
    }, 3500);
  }, [router]);

  return (
    <div className='relative flex h-full overflow-hidden'>
      <div className='absolute inset-0 flex px-10'>
        <div className='relative start-10 top-12 hidden aspect-[1] w-[15rem] md:block'>
          <Image src={'/images/bracket.svg'} fill alt={''} className='z-[3]' />
        </div>
        <div className='relative bottom-0 mx-auto aspect-[0.595] h-[90%] self-end md:mx-0'>
          <Image src={'/images/massod-line.png'} fill alt={''} className='z-[3]' />
          <div className='absolute -start-1 -top-5 z-[2] h-2/3 w-1/2 bg-accent-green opacity-40 blur-3xl'></div>
          <div className='absolute -bottom-14 -end-5 z-[2] h-2/3 w-1/2 bg-accent-blue opacity-40 blur-3xl'></div>
        </div>
        <div className='hidden w-full flex-col items-center justify-center pt-96 text-white opacity-5 xl:flex'>
          <span className='text-7xl font-black drop-shadow-lg'>masoud.dev</span>
          <span className='-translate-x-16 text-4xl font-extralight drop-shadow-lg'>{'{learnTogether}'}</span>
        </div>
      </div>
      <div className='absolute -top-3.5 z-[3] w-full'>
        <span className='loader' />
      </div>
    </div>
  );
}
