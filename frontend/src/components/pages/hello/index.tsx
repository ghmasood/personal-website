import type { DictT } from 'locale/dictionaries';

import IntroSection from 'components/pages/hello/components/introSection';
import SnakeSection from 'components/pages/hello/components/snakeSection';

function HelloPage({ locale }: { locale: DictT['helloPage'] }) {
  return (
    <div className='relative flex h-full items-center justify-evenly gap-5 px-10'>
      <IntroSection locale={locale} />
      <SnakeSection className='hidden lg:block' locale={locale} />

      {/* absolute shadows */}
      <div className='absolute start-5 top-[15%] h-1/3 w-1/4 -rotate-12 bg-accent-green opacity-30 blur-3xl lg:hidden' />
      <div className='absolute bottom-[15%] end-5 h-1/3 w-1/4 rotate-12 bg-accent-blue opacity-30 blur-3xl lg:hidden' />
    </div>
  );
}

export default HelloPage;
