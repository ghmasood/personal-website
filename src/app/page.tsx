'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

export default function Splash() {
  //LIFE CYCLE HOOKS
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.replace('/hello');
    }, 2400);
  }, [router]);

  return (
    <div className='mx-auto flex h-full w-1/2 items-center justify-center'>
      <span className='loader'></span>
    </div>
  );
}
