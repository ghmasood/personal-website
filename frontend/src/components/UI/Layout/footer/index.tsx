import Link from 'next/link';

import { RiDownload2Fill, RiGithubFill } from '@remixicon/react';

import type { DictT } from 'locale/dictionaries';

function Footer({ locale }: { locale: DictT['layout'] }) {
  return (
    <footer
      // dir='ltr'
      className='flex h-8 items-center justify-between rounded-b-lg border border-line bg-surfacePrimary text-sm font-[450] text-tSecondary'
    >
      <Link href={''} className='flex !w-[16.5rem] items-center justify-between border-line px-2 py-1 xs:border-e'>
        <span>{locale.downloadCV}</span>
        <RiDownload2Fill className='shrink-0 opacity-50 duration-500 hover:opacity-100' />
      </Link>

      <Link
        href='https://github.com/ghmasood'
        className='group hidden items-center gap-1 truncate border-s border-line px-2 py-1 xs:!flex'
      >
        <span className='font-fira text-tSecondary duration-500 group-hover:text-tPrimary'>@ghmasood</span>
        <RiGithubFill className='shrink-0 opacity-50 duration-500 group-hover:opacity-100' />
      </Link>
    </footer>
  );
}

export default Footer;
