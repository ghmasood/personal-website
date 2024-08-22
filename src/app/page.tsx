import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='relative flex h-full items-center justify-center gap-8 px-4 md:gap-12 md:px-8 lg:gap-24 xl:gap-32'>
      <div className='z-[1] flex w-full flex-col gap-20'>
        <div className='flex flex-col gap-3 text-tPrimary'>
          <span className='text-lg font-[450]'>Hi all. I am</span>
          <span className='text-4xl font-[500] md:text-6xl'>Masoud Ghanbarzadeh</span>
          <span className='text-nowrap text-xl text-accent-blue md:text-3xl'>
            {`> Front-end developer`}
            <i className='animate-cursor inline-block'>_</i>
          </span>
        </div>
        <div className='flex flex-col gap-1 font-[450] text-tSecondary'>
          <span className='hidden lg:inline'>{'// complete the game to continue'}</span>
          <span>{'// you can also see it on my Github page'}</span>
          <div className='font-[500]'>
            <span className='text-accent-blue'>const</span> <span className='text-accent-green'>githubLink</span>{' '}
            <span className='text-tPrimary'>=</span>{' '}
            <Link href={'https://github.com/ghmasood/personal-website'} className='text-accent-orange'>
              “https://github.com/‌ghmasood/‌personal-website”
            </Link>
          </div>
        </div>
      </div>
      <div className='relative hidden aspect-[1.07] w-1/2 max-w-[24rem] lg:block'>
        <Image src='/images/snakeTemp.png' alt='Description of the image' fill className='z-[1]' />
        <div className='absolute -start-5 -top-10 h-2/3 w-1/2 -rotate-12 bg-accent-green opacity-30 blur-3xl'></div>
        <div className='absolute -bottom-10 -end-5 h-2/3 w-1/2 rotate-12 bg-accent-blue opacity-30 blur-3xl'></div>
      </div>
      <div className='absolute start-5 top-[15%] h-1/3 w-1/4 -rotate-12 bg-accent-green opacity-30 blur-3xl lg:hidden'></div>
      <div className='absolute bottom-[15%] end-5 h-1/3 w-1/4 rotate-12 bg-accent-blue opacity-30 blur-3xl lg:hidden'></div>
    </div>
  );
}
