import dynamic from 'next/dynamic';

import { type LangsT, useGetDictionaryAsync } from 'locale/dictionaries';

import { appConfig } from 'utils/configs';

import IntroSection from 'components/pages/hello/components/introSection';
import SnakeSectionLoading from 'components/pages/hello/components/snakeSection/loading';

const SnakeSection = dynamic(() => import('components/pages/hello/components/snakeSection'), {
  loading: () => <SnakeSectionLoading />,
});

type Params = Promise<{ lang: LangsT }>;

export default async function Home(props: { params: Params }) {
  const lang = (await props.params).lang;
  const dict = await useGetDictionaryAsync(lang);

  const api = await fetch(`${appConfig.main.backAPI}/highscore`, { cache: 'no-store' });

  const data = await api.json();
  const highScore = (data.data.score as number) ?? 0;

  return (
    <div className='relative flex h-full items-center justify-evenly gap-5 px-10'>
      <IntroSection locale={dict.helloPage} />
      <SnakeSection className='hidden lg:block' highScore={highScore} />

      {/* absolute shadows */}
      <div className='absolute start-5 top-[15%] h-1/3 w-1/4 -rotate-12 bg-accent-green opacity-30 blur-3xl lg:hidden' />
      <div className='absolute bottom-[15%] end-5 h-1/3 w-1/4 rotate-12 bg-accent-blue opacity-30 blur-3xl lg:hidden' />
    </div>
  );
}
