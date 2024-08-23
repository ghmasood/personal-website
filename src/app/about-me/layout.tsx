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
    <div className='flex h-full'>
      <div className='flex h-full flex-col gap-3 border-e border-line p-4 text-tSecondary'>
        {util.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center text-sm ${pathname === item.path ? 'font-[500] text-tPrimary' : 'font-[400]'}`}
          >
            <RiArrowRightSLine className={clsx('duration-500', pathname === item.path ? 'rotate-90' : '')} />
            {pathname !== item.path ? (
              <RiFolder3Fill className='me-1 text-accent-orange' size={'1.25rem'} />
            ) : (
              <RiFolderOpenFill className='me-1' size={'1.25rem'} />
            )}
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
      <div className='h-full w-1/2 border-e border-line'>{children}</div>
      <div className='h-full grow border-e border-line'>snippets</div>
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
