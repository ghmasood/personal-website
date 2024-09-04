'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { RiArrowRightSLine, RiFolder3Fill, RiFolderOpenFill, RiMarkdownFill } from '@remixicon/react';

import clsx from 'clsx';

import { LangsT } from 'locale/dictionaries';

import { useGetDictionaryClient } from 'context/dictionaryProvider';

import { sideBarGenerator } from './services';

function AboutSideBar() {
  //PATHNAME HOOK
  const pathname = usePathname();

  const dict = useGetDictionaryClient();
  const menuLocale = dict.aboutPage.sideBar;
  const lang = dict.settings.language as LangsT;

  return (
    <div className='flex flex-col gap-0.5 border-e border-line p-2 text-tSecondary md:h-full md:p-4'>
      {sideBarGenerator(lang, menuLocale).map((item) => (
        <div className='flex flex-col gap-1' key={item.path}>
          <Link
            href={item.path}
            className={`flex shrink-0 items-center text-nowrap text-sm duration-300 ${pathname === item.path ? 'rounded-md py-0.5 font-[500] text-tPrimary' : 'font-[400]'}`}
          >
            <RiArrowRightSLine
              className={clsx('duration-500 rtl:rotate-180', pathname.includes(item.path) ? '!rotate-90' : '')}
            />
            {pathname.includes(item.path) ? (
              <RiFolderOpenFill className='me-1' size={'1.25rem'} />
            ) : (
              <RiFolder3Fill className='me-1 text-accent-orange' size={'1.25rem'} />
            )}
            <span className='self-end pe-2'>{item.label}</span>
          </Link>
          <div
            className={clsx(
              'flex flex-col gap-0.5 overflow-hidden truncate transition-all duration-500',
              pathname.includes(item.path)
                ? item.sub.length === 1
                  ? 'h-6'
                  : item.sub.length === 2
                    ? 'h-12'
                    : 'h-24'
                : 'pointer-events-none h-0'
            )}
          >
            {item.sub.map((i) => (
              <Link href={`${item.path}/#${i}`} className='flex items-center gap-1 ps-8 text-sm font-[300]' key={i}>
                <RiMarkdownFill size='1.25rem' />
                {i}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutSideBar;
