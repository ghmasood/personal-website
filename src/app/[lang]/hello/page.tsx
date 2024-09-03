import { getDictionary } from 'dictionaries/dictionaries';
import dynamic from 'next/dynamic';

import IntroSection from 'components/Pages/hello/introSection';
import SnakeSectionLoading from 'components/Pages/hello/snakeSection/loading';

import type { LangsT } from '../layout';

const SnakeSection = dynamic(() => import('components/Pages/hello/snakeSection'), {
  ssr: false,
  loading: () => <SnakeSectionLoading />,
});

export default async function Home({ params: { lang } }: { params: { lang: LangsT } }) {
  const dict = await getDictionary(lang);
  console.log(dict);
  return (
    <div className='relative flex h-full items-center justify-evenly gap-5 px-10'>
      <IntroSection />
      <SnakeSection className='hidden lg:block' />

      {/* absolute shadows */}
      <div className='absolute start-5 top-[15%] h-1/3 w-1/4 -rotate-12 bg-accent-green opacity-30 blur-3xl lg:hidden' />
      <div className='absolute bottom-[15%] end-5 h-1/3 w-1/4 rotate-12 bg-accent-blue opacity-30 blur-3xl lg:hidden' />
    </div>
  );
}
