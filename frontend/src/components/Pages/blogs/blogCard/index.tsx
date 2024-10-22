import React from 'react';

import Image from 'next/image';

import clsx from 'clsx';

import type { LangsT } from 'locale/dictionaries';
import { DateTime } from 'luxon';

import { appConfig } from 'utils/configs';

import type { blogListItem } from 'types/strapi-backend';

interface IBlogCardProps {
  className?: string;
  data: blogListItem;
  lang: LangsT;
}

function BlogCard({ className = '', data, lang }: IBlogCardProps) {
  return (
    <div className={clsx(['w-[14rem] overflow-hidden rounded-lg bg-surfaceSecondary shadow-small', className])}>
      <div className='relative aspect-square w-full'>
        <Image src={`${appConfig.main.backURL}${data.thumbnail.url}`} alt={`${data.en_title} thumbnail`} fill />
      </div>
      <div className='flex flex-col gap-2 px-4 py-3'>
        <h3 className='text-xl font-bold text-white'>{lang === 'en' ? data.en_title : data.fa_title}</h3>
        <span className='text-base font-medium text-tSecondary'>
          {lang === 'en' ? data.en_summery : data.fa_summery}
        </span>
        <span className='text-sm font-light text-tSecondary'>
          {DateTime.fromISO(data.updatedAt).toLocaleString(DateTime.DATE_MED, {
            locale: lang === 'fa' ? 'fa-ir' : 'en',
          })}
        </span>
      </div>
    </div>
  );
}

export default BlogCard;
