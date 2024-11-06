'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import SplashPage from 'components/pages/splash';

export default function Splash() {
  // //LIFE CYCLE HOOKS
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.replace('/hello');
    }, 4800);
  }, [router]);

  return <SplashPage />;
}
