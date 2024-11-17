'use client';

import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function NotFoundPage() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const keyPressEvent = (e: KeyboardEvent) => {
      if (e.key === 'y') router.replace(`${pathname.slice(0, 3)}/hello`);
    };
    addEventListener('keydown', keyPressEvent);
    return () => {
      removeEventListener('keydown', keyPressEvent);
    };
  }, []);

  return (
    <div dir='ltr' className='relative flex h-full select-none flex-col items-center justify-center p-4 font-fira'>
      <div className='absolute start-12 aspect-[1.218] h-[80%] opacity-5 saturate-0'>
        <Image src={'/images/logo.svg'} fill alt={'logo'} />
      </div>
      <span className='text-[10rem] font-black text-tPrimary md:text-[20rem]'>404</span>
      <Link
        replace
        href={`${pathname.slice(0, 3)}/hello`}
        className='flex -translate-y-20 items-start gap-1 text-tSecondary'
      >
        <span>{`> `}</span>
        <span className='relative md:w-[max-content] md:before:absolute md:before:inset-0 md:before:animate-[typewriter_4s_steps(59)_forwards] md:before:bg-surfacePrimary md:after:absolute md:after:bottom-0 md:after:end-0 md:after:start-0 md:after:h-0.5 md:after:w-4 md:after:animate-[typewriter_4s_steps(59)_forwards,blink_1s_steps(59)_infinite_4s] md:after:bg-tSecondary'>
          {`Oops! looks like you are lost. do you want back home? `}
          <span className='hidden text-tSecondary md:inline'>{`[y/n]`}</span>
        </span>
      </Link>
    </div>
  );
}
