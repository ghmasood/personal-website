'use client';

import { useState } from 'react';

import { Button } from '@nextui-org/button';
import { Input, Textarea } from '@nextui-org/input';

export default function ContactMe() {
  //STATES
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  return (
    <div className='flex h-full'>
      <div className='w-[10%] border-e border-line'>a</div>
      <div className='flex w-[45%] flex-col items-center justify-center gap-5 border-e border-line'>
        <form className='flex w-[60%] flex-col gap-3'>
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
      <div className='flex w-[45%] items-center justify-center gap-6 p-5'>
        <div className='flex flex-col items-end text-tSecondary'>
          {[...new Array(11)].map((_, index) => (
            <span className='' key={index}>
              {index + 1}
            </span>
          ))}
        </div>
        <div className='flex flex-col truncate whitespace-pre-line text-nowrap text-tPrimary'>
          {`const button = document.querySelector('#submit');

const message = {
	name: "${formData.name}",
	email: "${formData.email}",
	message: "${formData.message}",
}

button.addEventListener('click', () => {
	form.send(message);
})`}
        </div>
      </div>
    </div>
  );
}
