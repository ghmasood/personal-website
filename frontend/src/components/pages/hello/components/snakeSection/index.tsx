'use client';

import { memo, useState } from 'react';

import { DictT } from 'locale/dictionaries';

import Snake from 'components/Snake';
import SnakeFrame from 'components/Snake/components/snakeFrame';

function SnakeSection({
  className = '',
  highScore,
  locale,
}: {
  className?: string;
  highScore: number;
  locale: DictT['helloPage'];
}) {
  //STATES
  const [score, setScore] = useState(0);

  return (
    <SnakeFrame score={score} highScore={highScore} locale={locale} className={className}>
      <Snake points={score} setPoints={setScore} highScore={highScore} containerWidth={200} />
    </SnakeFrame>
  );
}

export default memo(SnakeSection);
