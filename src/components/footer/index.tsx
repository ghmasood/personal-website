import { RiGithubFill, RiLinkedinBoxFill } from '@remixicon/react';

import Link from 'next/link';

import strings from 'utils/strings.json';

function Footer() {
  return (
    <footer className='text-tSecondary flex h-10 items-center gap-4 rounded-b-lg border border-line bg-surfacePrimary px-6 font-[450]'>
      <span className='py-2'>{strings.layout.footer.find}</span>
      <Link href='http://linkedin.com/in/ghmasoud/' className='border-x border-line px-2 py-2'>
        <RiLinkedinBoxFill className='opacity-50 duration-500 hover:opacity-100' />
      </Link>
      <Link href='https://github.com/ghmasood' className='group ms-auto flex gap-2 border-s border-line py-2 ps-6'>
        <span className='group-hover:text-tPrimary text-tSecondary duration-500'>@ghmasood</span>
        <RiGithubFill className='opacity-50 duration-500 group-hover:opacity-100' />
      </Link>
    </footer>
  );
}

export default Footer;
