'use client';

import { memo, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { DictT } from 'locale/dictionaries';

import Snake from 'components/Snake';
import SnakeFrame from 'components/Snake/components/snakeFrame';

import { getHighScoreFn } from '../../services';

import { highScoreResT } from 'types/strapi-backend';

function SnakeSection({ className = '', locale }: { className?: string; locale: DictT['helloPage'] }) {
  //STATES
  const [score, setScore] = useState(0);

  //REACT QUERY
  const { data } = useQuery({
    queryKey: ['highscore'],
    queryFn: (): Promise<highScoreResT> => getHighScoreFn(),
  });

  return (
    <SnakeFrame score={score} highScore={data?.data.score ?? 0} locale={locale} className={className}>
      <Snake points={score} setPoints={setScore} highScore={data?.data.score ?? 0} containerWidth={200} />
    </SnakeFrame>
  );
}

export default memo(SnakeSection);
