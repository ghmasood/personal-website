import { RiLoader4Fill } from '@remixicon/react';

import type { DictT } from 'locale/dictionaries';

import { useGetDictionaryClient } from 'context/dictionaryProvider';

import SnakeFrame from 'components/Snake/components/snakeFrame';

function SnakeSectionLoading({ className = '' }: { className?: string }) {
  const { helloPage: locale } = useGetDictionaryClient();
  return (
    <SnakeFrame score={0} highScore={0} className={className} locale={locale}>
      <div className='flex h-[300px] w-[200px] items-center justify-center bg-surfacePrimary/85'>
        <RiLoader4Fill size={'2rem'} className='animate-spin text-accent-green' />
      </div>
    </SnakeFrame>
  );
}

export default SnakeSectionLoading;
