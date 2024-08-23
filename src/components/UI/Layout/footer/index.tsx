import { RiGithubFill, RiLinkedinBoxFill } from '@remixicon/react';

import Link from 'next/link';

import strings from 'utils/strings.json';

function Footer() {
  return (
    <footer className='flex h-8 items-center rounded-b-lg border border-line bg-surfacePrimary px-2 text-sm font-[450] text-tSecondary lg:px-6'>
      <span className='shrink-0 px-1 pe-2'>{strings.layout.footer.find}</span>
      <Link href='http://linkedin.com/in/ghmasoud/' className='border-x border-line px-2 py-1'>
        <RiLinkedinBoxFill className='opacity-50 duration-500 hover:opacity-100' />
      </Link>
      <Link
        href='https://github.com/ghmasood'
        className='group ms-auto flex items-center gap-1 truncate border-s border-line px-2 py-1 lg:ps-6'
      >
        <span className='text-tSecondary duration-500 group-hover:text-tPrimary'>@ghmasood</span>
        <RiGithubFill className='opacity-50 duration-500 group-hover:opacity-100' />
      </Link>
    </footer>
  );
}

export default Footer;
