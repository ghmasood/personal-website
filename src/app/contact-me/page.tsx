'use client';

import { useEffect, useRef, useState } from 'react';

import { Button } from '@nextui-org/button';
import { Input, Textarea } from '@nextui-org/input';

import { DateTime } from 'luxon';

export default function ContactMe() {
  //STATES
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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
    <div className='flex h-full'>
      <div className='w-[279px] shrink-0 border-e border-line'>a</div>
      <div className='flex w-full flex-col items-center justify-center gap-5 border-line xl:w-[40%] xl:border-e'>
        <form className='flex w-[70%] flex-col gap-3'>
          <Input
            classNames={{
              label: '!text-tSecondary !font-[450]',
              input: '!text-[#465E77]',
              inputWrapper:
                'bg-surfaceSecondary border border-line hover:!bg-surfacePrimary group-data-[focus=true]:!bg-surfacePrimary  group-data-[focus=true]:!shadow group-data-[focus=true]:!shadow-surfacePrimary',
            }}
            radius='sm'
            label='_name:'
            labelPlacement='outside'
            placeholder=' '
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            classNames={{
              label: '!text-tSecondary !font-[450]',
              input: '!text-[#465E77]',
              inputWrapper:
                'bg-surfaceSecondary border border-line hover:!bg-surfacePrimary group-data-[focus=true]:!bg-surfacePrimary  group-data-[focus=true]:!shadow group-data-[focus=true]:!shadow-surfacePrimary',
            }}
            radius='sm'
            label='_email:'
            type='email'
            labelPlacement='outside'
            placeholder=' '
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <Textarea
            minRows={12}
            classNames={{
              label: '!text-tSecondary !font-[450]',
              input: '!text-[#465E77]',
              inputWrapper:
                'bg-surfaceSecondary border border-line hover:!bg-surfacePrimary group-data-[focus=true]:!bg-surfacePrimary  group-data-[focus=true]:!shadow group-data-[focus=true]:!shadow-surfacePrimary',
            }}
            radius='sm'
            label='_message:'
            labelPlacement='outside'
            placeholder=' '
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <Button className='mt-2 bg-accent-blue text-tPrimary' radius='sm'>
            Submit
          </Button>
        </form>
      </div>
      <div className='hidden w-[60%] items-center justify-center gap-4 truncate text-tSecondary xl:flex'>
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
    </div>
  );
}
