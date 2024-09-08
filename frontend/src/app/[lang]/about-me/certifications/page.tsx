import Link from 'next/link';

import { RiExternalLinkFill } from '@remixicon/react';

import CommentedText from 'components/Pages/about/components/commentedText';

function Certifications() {
  return (
    <>
      <CommentedText
        title={'Next.Js & React - The Complete Guide (incl. Two Paths!)'}
        text={
          <div className='flex items-center gap-3'>
            <span>Udemy by Maximilian Schwarzmüller - Jul 2022</span>
            <Link
              href={'https://www.udemy.com/certificate/UC-6d1f520e-e669-4fe2-9657-1438b6118e7b/'}
              className='text-accent-blue'
            >
              <RiExternalLinkFill />
            </Link>
          </div>
        }
      />

      <CommentedText
        title={'Professional Project-Oriented Course in Front-End Development with React'}
        text={
          <div className='flex items-center gap-3'>
            <span>Quera - May 2022</span>
            <Link href={'https://quera.org/certificate/GS7B4TLV/'} className='text-accent-blue'>
              <RiExternalLinkFill />
            </Link>
          </div>
        }
      />

      <CommentedText
        title={'Project-Oriented Course in Front-End Web Development'}
        text={
          <div className='flex items-center gap-3'>
            <span>Quera - Apr 2022</span>
            <Link href={'https://quera.org/certificate/1K770kV7/'} className='text-accent-blue'>
              <RiExternalLinkFill />
            </Link>
          </div>
        }
      />
    </>
  );
}

export default Certifications;
