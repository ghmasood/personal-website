'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import strings from 'utils/strings.json';

function Header() {
  const pathName = usePathname();

  return (
    <header className='flex h-14 items-center rounded-t-lg border border-line bg-surfacePrimary font-[450]'>
      <span className='text-tSecondary hover:text-tPrimary w-[20rem] select-none border-e border-line py-4 ps-6 align-middle duration-700'>
        {strings.layout.header.title}
      </span>
      {strings.layout.header.menu.map((item, index) => (
        <Link
          href={item.path}
          key={item.title}
          className={clsx(
            'text-iPrimary relative border-line py-4',
            index === strings.layout.header.menu.length - 1 ? 'ms-auto border-s px-6' : 'border-e px-4'
          )}
        >
          {item.title}
          <div
            className={clsx(
              'bg-accent-orange absolute bottom-0 start-0 h-0.5 w-full duration-700',
              item.path === pathName ? 'opacity-100' : 'opacity-0'
            )}
          />
        </Link>
      ))}
    </header>
  );
}

export default Header;
