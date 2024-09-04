import { useEffect, useRef, useState } from 'react';

import { formDataType } from 'app/[lang]/contact-me/page';
import { DateTime } from 'luxon';

type formCodeProps = {
  formData: formDataType;
};
function FormCode({ formData }: formCodeProps) {
  //STATES
  const [lineNumber, setLineNumber] = useState(12);

  // REF
  const textRef = useRef<HTMLDivElement>(null);

  //LIFE CYCLE HOOKS
  useEffect(() => {
    const handleResize = () => {
      setLineNumber((textRef.current?.offsetHeight ?? 0) / 24);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [textRef, textRef?.current?.offsetHeight]);

  return (
    <div
      dir='ltr'
      className='hidden w-[60%] items-center justify-center gap-4 truncate font-fira text-tSecondary xl:flex'
    >
      <div className='flex flex-col items-end'>
        {[...new Array(lineNumber ? lineNumber : 12)].map((_, index) => (
          <span className='' key={index}>
            {index + 1}
          </span>
        ))}
      </div>
      <div ref={textRef} className='flex max-w-[90%] flex-col truncate whitespace-pre-line text-nowrap'>
        <div className='text-nowrap'>
          <span className='text-accent-purple'>const </span>
          <span className='text-accent-blue'>button</span>
          <span className='text-accent-purple'> = </span>
          <span className='text-accent-blue'>document.getElementById</span>(
          <span className='text-accent-orange'>{'#submit'}</span>);
        </div>
        <br />
        <div className='text-nowrap'>
          <span className='text-accent-purple'>const </span>
          <span className='text-accent-blue'>message</span>
          <span className='text-accent-purple'> = </span> {`{`}
        </div>
        <div className='text-nowrap'>
          <span className='text-accent-blue'>name: </span>
          <span className='text-accent-orange'>{`"${formData.name}"`}</span>,
        </div>
        <div className='text-nowrap'>
          <span className='text-accent-blue'>email: </span>
          <span className='text-accent-orange'>{`"${formData.email}"`}</span>,
        </div>
        <div className='flex'>
          <div>
            <span className='text-accent-blue'>message: </span>
            <span className='text-accent-orange'>{`"`}</span>
          </div>
          <span className='whitespace-pre-line text-accent-orange'>
            {formData.message}
            {`"`}
            <span className='text-tSecondary'>,</span>
          </span>
        </div>
        <div className='text-nowrap'>
          <span className='text-accent-blue'>date: </span>
          <span className='text-accent-orange'>{`"${DateTime.now().startOf('minute').toUTC()}"`}</span>,
        </div>
        <div>{`}`}</div>
        <br />
        <div className='text-nowrap'>
          <span className='text-accent-blue'>button</span>.<span className='text-accent-blue'>addEventListener</span>
          {`(`}
          <span className='text-accent-orange'>{`'click`}</span>
          {`, ()`}
          <span className='text-accent-purple'>{` => `}</span> {'{'}
        </div>
        <div className='text-nowrap'>
          {' '}
          <span className='text-accent-blue'>form</span>.<span className='text-accent-blue'>send</span>
          {`(`}
          <span className='text-accent-blue'>message</span>
          {`);`}
        </div>
        <div className='text-nowrap'>{`})`}</div>
      </div>
    </div>
  );
}

export default FormCode;
