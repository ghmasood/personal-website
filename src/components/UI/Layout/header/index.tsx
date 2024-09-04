'use client';

import { useState } from 'react';

import { RiCloseLargeFill, RiMenuLine } from '@remixicon/react';

import clsx from 'clsx';
import type { DictT } from 'locale/dictionaries';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Header({ locale }: { locale: DictT['layout'] }) {
  //STATES
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathName = usePathname();

  //VARIABLES
  return (
    <header className='relative flex h-14 items-center rounded-t-lg border border-line bg-surfacePrimary font-[450]'>
      <div
        className={`group relative shrink-0 select-none border-line px-2 py-4 align-middle text-tSecondary transition-colors duration-[3s] hover:text-tPrimary md:border-e lg:px-12`}
      >
        <span className='relative z-[1]'>{locale.title}</span>
        <span className='absolute start-1 top-[1.125rem] h-5 w-5 rounded-full bg-tSecondary opacity-20 duration-[3s] group-hover:w-[12.25rem] group-hover:opacity-100 lg:start-10' />
      </div>

      {pathName === '/' ? (
        <></>
      ) : (
        menuGenerator(locale).map((item, index) => (
          <Link
            href={`/${pathName.split('/')[1]}${item.path}`}
            key={item.title}
            className={clsx(
              'relative hidden border-line py-4 duration-500 md:block',
              index === menuGenerator(locale).length - 1 ? 'ms-auto border-s px-2 lg:px-6' : 'border-e px-2 lg:px-4',
              item.path.includes(pathName.toString().split('/')[1])
                ? 'text-tPrimary'
                : 'text-tSecondary hover:text-tPrimary/50'
            )}
          >
            {item.title}
            <div
              className={clsx(
                'absolute bottom-0 start-0 h-0.5 w-full bg-accent-blue duration-700',
                item.path.includes(pathName.toString().split('/')[2]) ? 'opacity-100' : 'opacity-0'
              )}
            />
          </Link>
        ))
      )}
      <div
        className='ms-auto px-2 text-tSecondary hover:text-tPrimary active:text-tPrimary md:hidden'
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {isMenuOpen ? <RiCloseLargeFill /> : <RiMenuLine />}
      </div>
      <div
        onClick={() => setIsMenuOpen(false)}
        className={clsx(
          'absolute end-0 start-0 top-[3.45rem] z-[100] flex h-[calc(100dvh_-_7.5rem)] flex-col border-line bg-surfacePrimary duration-700 md:hidden',
          isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
      >
        {menuGenerator(locale).map((item) => (
          <Link
            key={item.title}
            href={item.path}
            className='border-b border-line px-2 py-2 text-tSecondary active:text-tPrimary'
          >
            {item.title}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Header;

const menuGenerator = (locale: DictT['layout']) => {
  return [
    {
      title: locale.hello,
      path: '/hello',
    },
    {
      title: locale.hello,
      path: '/about-me/summery',
    },
    {
      title: locale.projects,
      path: '/my-projects',
    },
    {
      title: locale.blog,
      path: '/blogs',
    },
    {
      title: locale.contact,
      path: '/contact-me',
    },
  ];
};
