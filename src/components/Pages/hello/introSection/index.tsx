import type { DictT } from 'locale/dictionaries';
import Link from 'next/link';

function IntroSection({ locale }: { locale: DictT['helloPage'] }) {
  return (
    <div className='flex flex-col gap-20'>
      <div className='flex flex-col gap-3 text-tPrimary'>
        <span className='text-lg font-[450]'>{locale.hiAll}</span>
        <span className='text-4xl font-[500] md:text-6xl'>{locale.name}</span>
        <div className='flex items-center gap-2 text-nowrap text-xl text-accent-blue md:text-3xl'>
          <span>{`>`}</span>
          <div className='relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-surfacePrimary after:absolute after:bottom-0 after:end-0 after:start-0 after:h-0.5 after:w-4 after:animate-caret after:bg-accent-blue'>
            {locale.position}
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-1 font-[450] text-tSecondary'>
        <span className='hidden lg:inline'>{locale.completeGame}</span>
        <span>{locale.seeGit}</span>
        <div className='font-[500]'>
          <span className='text-accent-blue'>const</span> <span className='text-accent-green'>githubLink</span>{' '}
          <span className='text-tPrimary'>=</span>{' '}
          <Link href={'https://github.com/ghmasood/personal-website'} className='text-accent-orange'>
            “https://github.com/‌ghmasood/‌personal-website”
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
