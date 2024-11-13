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
      <Link
        href={`/${locale.settings.language}/hello`}
        className='flex shrink-0 select-none items-center gap-1 border-line px-3 py-4 align-middle text-tSecondary transition-colors duration-[3s] hover:text-tPrimary md:w-[16.5rem] md:border-e'
      >
        <div className='absolute aspect-[1.218] h-9'>
          <Image src={'/images/logo.svg'} fill alt={'logo'} />
        </div>
        <span className='relative start-14'>{locale.layout.title}</span>
      </Link>

      {menuGenerator(locale.layout).map((item) => (
        <Link
          href={`/${locale.settings.language}${item.path}`}
          key={item.title}
          className={clsx(
            'relative hidden truncate border-e border-line px-2.5 py-4 duration-500 md:block',
            item.path.includes(pathName.toString().split('/')[1])
              ? 'text-tPrimary'
              : 'text-tSecondary hover:text-tPrimary/50'
          )}
        >
          {item.title}
          <div
            className={clsx(
              'absolute bottom-0 start-0 h-0.5 w-full bg-accent-orange duration-700',
              item.path.includes(pathName.toString().split('/')[2]) ? 'opacity-100' : 'opacity-0'
            )}
          />
        </Link>
      ))}
      <Link href={redirectedPathName()} className='ms-auto hidden border-s border-line px-1.5 py-4 md:block'>
        <Image
          src={locale.settings.language === 'en' ? '/images/fa.svg' : '/images/en.svg'}
          width={32}
          height={20}
          alt={'languages flag'}
          className='rounded-md opacity-65'
        />
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
            className='border-b border-line p-2 text-tSecondary active:text-tPrimary'
          >
            {item.title}
          </Link>
        ))}
        <Link href={redirectedPathName()} className='border-b border-line p-2 text-tSecondary active:text-tPrimary'>
          <div className='flex items-center justify-between gap-2'>
            <span>{locale.layout.changeLang}</span>
            <Image
              src={locale.settings.language === 'en' ? '/images/fa.svg' : '/images/en.svg'}
              width={30}
              height={10}
              className='rounded-md opacity-65'
              alt={'languages flag'}
            />
          </div>
        </Link>
        <div className='relative mt-auto aspect-[1.218] h-36 opacity-65'>
          <Image src={'/images/logo.svg'} fill alt={'logo'} />
        </div>
        <div className='mx-auto mb-12 select-none pt-3 font-[100] text-accent-orange opacity-50'>learn together</div>
      </div>
    </header>
  );
}

export default Header;
