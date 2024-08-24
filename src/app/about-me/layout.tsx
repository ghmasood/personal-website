'use client';

import { RiArrowRightSLine, RiFolder3Fill, RiFolderOpenFill } from '@remixicon/react';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AboutMe({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //PATHNAME HOOK
  const pathname = usePathname();

  return (
    <div className='flex flex-col md:h-full md:flex-row'>
      <div className='flex h-full flex-col gap-1 border-e border-line p-4 text-tSecondary'>
        {util.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center text-sm duration-300 ${pathname === item.path ? 'rounded-md bg-accent-purple/10 py-1 font-[500] text-tPrimary' : 'font-[400]'}`}
          >
            <RiArrowRightSLine className={clsx('duration-500', pathname === item.path ? 'rotate-90' : '')} />
            {pathname !== item.path ? (
              <RiFolder3Fill className='me-1 text-accent-orange' size={'1.25rem'} />
            ) : (
              <RiFolderOpenFill className='me-1' size={'1.25rem'} />
            )}
            <span className='self-end'>{item.label}</span>
          </Link>
        ))}
      </div>
      <div className='h-full w-full border-t border-line md:border-t-0 lg:w-1/2 lg:border-e'>{children}</div>
      <div className='hidden h-full grow border-e border-line lg:block'>snippets</div>
    </div>
  );
}

const util = [
  { path: '/about-me/summery', label: 'Summery' },
  { path: '/about-me/experience', label: 'Experience' },
  { path: '/about-me/education', label: 'Education' },
  { path: '/about-me/certifications', label: 'Certifications' },
  { path: '/about-me/technical-skills', label: 'Technical Skills' },
  { path: '/about-me/languages', label: 'Languages' },
];
