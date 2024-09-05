'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { RiCloseLargeFill, RiMenuLine } from '@remixicon/react';

import clsx from 'clsx';

import type { DictT } from 'locale/dictionaries';

import { menuGenerator } from './services';

function Header({ locale }: { locale: DictT }) {
  const pathName = usePathname();

  //STATES
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const redirectedPathName = () => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale.settings.language === 'en' ? 'fa' : 'en';
    return segments.join('/');
  };

  return (
    <header className='relative flex h-14 items-center rounded-t-lg border border-line bg-surfacePrimary font-[450]'>
      <span
        className={`group relative w-[18rem] shrink-0 select-none border-line px-3 py-4 align-middle text-tSecondary transition-colors duration-[3s] hover:text-tPrimary md:border-e`}
      >
        {locale.layout.title}
      </span>

      {pathName === '/' ? (
        <></>
      ) : (
        menuGenerator(locale.layout).map((item) => (
          <Link
            href={`/${locale.settings.language}${item.path}`}
            key={item.title}
            className={clsx(
              'relative hidden truncate border-e border-line px-3 py-4 duration-500 md:block',
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
      <Link href={redirectedPathName()} className='ms-auto border-s border-line px-0.5 py-2'>
        {locale.settings.language === 'en' ? (
          <Image src={'/images/fa.svg'} width={40} height={100} alt={''} />
        ) : (
          <Image src={'/images/en.svg'} width={40} height={100} alt={''} />
        )}
      </Link>
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
        {menuGenerator(locale.layout).map((item) => (
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
