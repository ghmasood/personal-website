'use client';

import { useState } from 'react';

import { RiCloseLargeFill, RiMenuLine } from '@remixicon/react';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import strings from 'utils/strings.json';

function Header() {
  //STATES
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathName = usePathname();

  return (
    <header className='relative flex h-14 items-center rounded-t-lg border border-line bg-surfacePrimary font-[450]'>
      <span
        className={`w-fit shrink-0 select-none border-line py-4 ps-2 align-middle text-tSecondary transition-colors duration-700 hover:text-tPrimary md:w-[13rem] md:border-e lg:w-[20rem] lg:ps-6`}
      >
        {strings.layout.header.title}
      </span>
      {strings.layout.header.menu.map((item, index) => (
        <Link
          href={item.path}
          key={item.title}
          className={clsx(
            'relative hidden border-line py-4 duration-500 md:block',
            index === strings.layout.header.menu.length - 1 ? 'ms-auto border-s px-2 lg:px-6' : 'border-e px-2 lg:px-4',
            item.path === pathName ? 'text-tPrimary' : 'text-tSecondary hover:text-tPrimary/50'
          )}
        >
          {item.title}
          <div
            className={clsx(
              'absolute bottom-0 start-0 h-0.5 w-full bg-accent-orange duration-700',
              item.path === pathName ? 'opacity-100' : 'opacity-0'
            )}
          />
        </Link>
      ))}
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
        {strings.layout.header.menu.map((item) => (
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
