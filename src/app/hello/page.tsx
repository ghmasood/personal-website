import dynamic from 'next/dynamic';

import IntroSection from 'components/Pages/hello/introSection';

const SnakeSection = dynamic(() => import('components/Pages/hello/snakeSection'), {
  ssr: false,
});
export default function Home() {
  return (
    <div className='relative flex h-full items-center justify-evenly gap-5 px-10'>
      <IntroSection />
      <SnakeSection className='hidden lg:block' />

      {/* absolute shadows */}
      <div className='absolute start-5 top-[15%] h-1/3 w-1/4 -rotate-12 bg-accent-green opacity-30 blur-3xl lg:hidden'></div>
      <div className='absolute bottom-[15%] end-5 h-1/3 w-1/4 rotate-12 bg-accent-blue opacity-30 blur-3xl lg:hidden'></div>
    </div>
  );
}
