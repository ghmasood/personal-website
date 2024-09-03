'use client';

import { useState } from 'react';

import Snake from 'components/Snake';

function SnakeTestPage() {
  const [score, setScore] = useState(0);
  return (
    <div className='flex flex-col items-center justify-center p-5'>
      <div className='text-tPrimary'>{score}</div>
      <Snake points={score} setPoints={setScore} containerWidth={200} />
    </div>
  );
}

export default SnakeTestPage;
