'use client';

import Link from 'next/link';

import {
  RiArrowRightSLine,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiMailFill,
  RiPhoneFill,
  RiTelegramFill,
  RiTwitterXFill,
  RiWhatsappFill,
  RiYoutubeFill,
} from '@remixicon/react';

import { useGetDictionaryClient } from 'context/dictionaryProvider';

function ContactMeSideBar() {
  const dict = useGetDictionaryClient();
  const locale = dict.contactPage;
  return (
    <div className='flex shrink-0 flex-col gap-2 border-b border-line p-3 text-sm md:w-[279.5px] md:border-e'>
      <div className='flex flex-col gap-2 text-tPrimary'>
        <div className='flex items-center gap-0.5'>
          <RiArrowRightSLine />
          <span>{locale.contacts}</span>
        </div>
        <div className='flex flex-col gap-2 ps-5 font-fira font-[300] text-tSecondary'>
          <Link className='flex items-center gap-2 duration-400 hover:text-tPrimary/50' href='tel:+989303939330'>
            <RiPhoneFill size={'1.25rem'} />
            <span dir='ltr'>+98 930 39 39 330</span>
          </Link>
          <Link
            className='flex items-center gap-2 duration-400 hover:text-tPrimary/50'
            href='mailto:gh.masoud97@yahoo.com'
          >
            <RiMailFill size={'1.25rem'} />
            gh.masoud97@yahoo.com
          </Link>
        </div>
      </div>
      <div className='flex flex-col gap-2 text-tPrimary'>
        <div className='flex items-center gap-0.5'>
          <RiArrowRightSLine />
          <span>{locale.find}</span>
        </div>
        <div className='flex flex-col gap-2 ps-5 font-fira font-[300] text-tSecondary'>
          <Link className='flex items-center gap-2 duration-400 hover:text-tPrimary/50' href='#'>
            <RiLinkedinBoxFill size={'1.25rem'} />
            Linkedin
          </Link>
          <Link className='flex items-center gap-2 duration-400 hover:text-tPrimary/50' href='#'>
            <RiGithubFill size={'1.25rem'} />
            github
          </Link>
          <Link className='flex items-center gap-2 duration-400 hover:text-tPrimary/50' href='#'>
            <RiInstagramFill size={'1.25rem'} />
            instagram
          </Link>
          <Link className='flex items-center gap-2 duration-400 hover:text-tPrimary/50' href='#'>
            <RiYoutubeFill size={'1.25rem'} />
            youtube
          </Link>
          <Link className='flex items-center gap-2 duration-400 hover:text-tPrimary/50' href='#'>
            <RiTwitterXFill size={'1.25rem'} />
            Twitter
          </Link>
          <Link className='flex items-center gap-2 duration-400 hover:text-tPrimary/50' href='#'>
            <RiWhatsappFill size={'1.25rem'} />
            Whatsapp
          </Link>
          <Link className='flex items-center gap-2 duration-400 hover:text-tPrimary/50' href='#'>
            <RiTelegramFill size={'1.25rem'} />
            Telegram
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactMeSideBar;
