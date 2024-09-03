import { RiArrowDropUpFill, RiCloseLine, RiLoader4Fill } from '@remixicon/react';

import clsx from 'clsx';

function SnakeSectionLoading({ className = '' }: { className?: string }) {
  return (
    <div className={clsx('relative', className)}>
      <div className='flex flex-col justify-center gap-3 rounded-lg bg-gradient-to-tr from-[rgba(23,85,83,0.70)] to-[rgba(67,217,173,0.09)] p-8 shadow-md xl:flex-row'>
        <div className='absolute start-2.5 top-2.5 rounded-full bg-accent-green/20 bg-gradient-radial from-accent-green/30 to-black/60 opacity-50 shadow-sm shadow-surfacePrimary'>
          <RiCloseLine size='1rem' className='text-black' />
        </div>
        <div className='absolute end-2.5 top-2.5 rounded-full bg-accent-green/20 bg-gradient-radial from-accent-green/30 to-black/60 opacity-50 shadow-sm shadow-surfacePrimary'>
          <RiCloseLine size='1rem' className='text-black' />
        </div>
        <div className='absolute bottom-2.5 start-2.5 rounded-full bg-accent-green/20 bg-gradient-radial from-accent-green/30 to-black/60 opacity-50 shadow-sm shadow-surfacePrimary'>
          <RiCloseLine size='1rem' className='text-black' />
        </div>
        <div className='absolute bottom-2.5 end-2.5 rounded-full bg-accent-green/20 bg-gradient-radial from-accent-green/30 to-black/60 opacity-50 shadow-sm shadow-surfacePrimary'>
          <RiCloseLine size='1rem' className='text-black' />
        </div>
        <div className='relative z-[3] min-w-[200px] overflow-hidden rounded-lg shadow-[inset_1px_5px_11px_0px_rgba(2,18,27,0.71)]'>
          <div className='flex h-[300px] w-[200px] items-center justify-center bg-surfacePrimary/85'>
            <RiLoader4Fill size={'2rem'} className='animate-spin text-accent-green' />
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='hidden flex-col items-center rounded-lg bg-surfacePrimary/20 p-2 text-tPrimary xl:flex'>
            <span className='mb-3 self-start whitespace-pre-line text-xs font-[350]'>{`// use keyboard\n// arrows to play`}</span>
            <div className='flex h-7 w-12 items-center justify-center rounded-lg border border-line bg-black'>
              <RiArrowDropUpFill />
            </div>
            <div className='flex'>
              <div className='flex h-7 w-12 items-center justify-center rounded-lg border border-line bg-black'>
                <RiArrowDropUpFill className='-rotate-90' />
              </div>
              <div className='flex h-7 w-12 items-center justify-center rounded-lg border border-line bg-black'>
                <RiArrowDropUpFill className='rotate-180' />
              </div>
              <div className='flex h-7 w-12 items-center justify-center rounded-lg border border-line bg-black'>
                <RiArrowDropUpFill className='rotate-90' />
              </div>
            </div>
          </div>
          <span className='mt-5 text-sm text-tPrimary'>{`// your score: 0`}</span>
          <span className='mb-2 text-sm text-tPrimary'>{`// High score: 0`}</span>
          <div className='relative z-[3] mt-auto self-end rounded-md border border-tPrimary px-2 py-1 text-sm text-tPrimary'>
            Skip
          </div>
        </div>
      </div>
      {/* SHADOWS */}
      <div className='absolute -start-1 -top-5 z-[2] h-2/3 w-1/2 bg-accent-green opacity-50 blur-3xl'></div>
      <div className='absolute -bottom-14 -end-5 z-[2] h-2/3 w-1/2 bg-accent-blue opacity-50 blur-3xl'></div>
    </div>
  );
}

export default SnakeSectionLoading;
