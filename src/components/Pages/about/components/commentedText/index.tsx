'use client';

import { useEffect, useRef, useState } from 'react';

type commentedTextT = {
  text: string;
};

function CommentedText({ text = '' }: commentedTextT) {
  // REF
  const textRef = useRef<HTMLDivElement>(null);

  //STATES
  const [lines, setLines] = useState(0);

  //LIFE CYCLE HOOKS
  useEffect(() => {
    const handleResize = () => {
      setLines((textRef.current?.offsetHeight ?? 0) / 24);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [textRef, textRef?.current?.offsetHeight]);

  return (
    <div className={'flex text-pretty px-10 py-5 text-tSecondary'}>
      <div className='flex flex-col'>
        {[...new Array(lines + 1)].map((_, index) => (
          <div className='flex self-end pe-9' key={index + 'number'}>
            {index + 1}
          </div>
        ))}
      </div>
      <div className='flex flex-col'>
        {[...new Array(lines + 1)].map((_, index) => {
          return index === 0 ? (
            <span key='start line'>{`/**`}</span>
          ) : index === lines ? (
            <span key='end line' className='ps-2.5'>
              */
            </span>
          ) : (
            <span className='ps-2.5' key={index + '*'}>
              *
            </span>
          );
        })}
      </div>

      <div ref={textRef} className='h-fit whitespace-pre-line'>
        {`\n${text}`}
      </div>
    </div>
  );
}

export default CommentedText;
