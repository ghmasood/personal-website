'use client';

import { RiArrowRightSLine, RiFolder3Fill, RiFolderOpenFill, RiMarkdownFill } from '@remixicon/react';

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
    <div className='flex h-full flex-col md:flex-row'>
      <div id='top-section' className='flex flex-col gap-0.5 border-e border-line p-2 text-tSecondary md:h-full md:p-4'>
        {util.map((item) => (
          <div className='flex flex-col gap-1' key={item.path}>
            <Link
              href={item.path}
              className={`flex shrink-0 items-center text-nowrap text-sm duration-300 ${pathname === item.path ? 'rounded-md py-0.5 font-[500] text-tPrimary' : 'font-[400]'}`}
            >
              <RiArrowRightSLine className={clsx('duration-500', pathname === item.path ? 'rotate-90' : '')} />
              {pathname !== item.path ? (
                <RiFolder3Fill className='me-1 text-accent-orange' size={'1.25rem'} />
              ) : (
                <RiFolderOpenFill className='me-1' size={'1.25rem'} />
              )}
              <span className='self-end pe-2'>{item.label}</span>
            </Link>
            <div
              className={clsx(
                'flex flex-col gap-0.5 overflow-hidden truncate transition-all duration-500',
                pathname === item.path
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
      <div
        id='bottom-section'
        className='h-full w-full overflow-y-auto border-t border-line md:border-t-0 lg:w-1/2 lg:border-e'
      >
        {children}
      </div>
      <div className='hidden h-full grow border-e border-line lg:block'>snippets</div>
    </div>
  );
}

const util = [
  { path: '/about-me/summery', label: 'Summery', sub: ['index'] },
  { path: '/about-me/experience', label: 'Experience', sub: ['IroTeam', 'Wallex Exchange'] },
  { path: '/about-me/education', label: 'Education', sub: ['Bachelor', 'Diploma'] },
  { path: '/about-me/certifications', label: 'Certifications', sub: ['index'] },
  {
    path: '/about-me/technical-skills',
    label: 'Technical Skills',
    sub: ['Frontend Core', 'Frameworks & Libraries', 'Styling & UI', 'Tools & version control'],
  },
  { path: '/about-me/languages', label: 'Languages', sub: ['Persian', 'English'] },
];
