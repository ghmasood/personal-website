import Link from 'next/link';

import { RiDownload2Fill, RiGithubFill } from '@remixicon/react';

import type { DictT } from 'locale/dictionaries';

function Footer({ locale }: { locale: DictT['layout'] }) {
  return (
    <footer
      dir='ltr'
      className='flex h-8 items-center rounded-b-lg border border-line bg-surfacePrimary px-2 text-sm font-[450] text-tSecondary lg:px-6'
    >
      <span className='shrink-0 px-1 pe-2'>{locale.downloadCV}</span>
      <Link href='#' className='border-x border-line px-2 py-1'>
        <RiDownload2Fill className='opacity-50 duration-500 hover:opacity-100' />
      </Link>

      <Link
        href='https://github.com/ghmasood'
        className='group ms-auto flex items-center gap-1 truncate border-s border-line px-2 py-1 lg:ps-6'
      >
        <span className='font-fira text-tSecondary duration-500 group-hover:text-tPrimary'>@ghmasood</span>
        <RiGithubFill className='opacity-50 duration-500 group-hover:opacity-100' />
      </Link>
    </footer>
  );
}

export default Footer;
