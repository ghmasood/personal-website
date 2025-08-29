import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import clsx from 'clsx';

import type { LangsT } from 'locale/dictionaries';
import { DateTime } from 'luxon';

import ImageWrapper from 'components/UI/imageWrapper';

import { BlogT } from 'types/strapi-backend';

interface IBlogCardProps {
  className?: string;
  data: BlogT;
  lang: LangsT;
}

function BlogCard({ className = '', data, lang }: IBlogCardProps) {
  return (
    <Link
      href={`/${lang}/blogs/category/${data.category.slug}/${data.slug}`}
      className={clsx([
        'flex w-full flex-col gap-2 overflow-hidden rounded-lg border border-line bg-surfaceSecondary shadow-sm shadow-background sm:flex-row',
        className,
      ])}
    >
      <div
        className='relative aspect-square sm:h-32'
        style={{
          backgroundImage: `url(/images/logo.svg)`,
          backgroundSize: '20%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: '#1e2d3d',
          boxShadow: '4.1px 4.2px 4.2px hsl(0deg 0% 0% / 0.27)',
        }}
      >
        <ImageWrapper src={data.cover?.formats.thumbnail.url} alt={`${data.title_en} thumbnail`} fill />
        <span className='absolute bottom-1 start-1 z-[1] rounded-full bg-surfaceSecondary/60 px-2 py-0.5 text-xs font-extralight text-tPrimary'>
          {lang === 'en' ? data.category.title_en : data.category.title_fa}
        </span>
      </div>
      <div className='flex flex-col justify-between gap-2 px-2 py-3'>
        <h3 className='text-lg font-bold text-white'>{lang === 'en' ? data.title_en : data.title_fa}</h3>
        <span className='text-base font-medium text-tSecondary'>
          {lang === 'en' ? data.summery_en : data.summery_fa}
        </span>
        <span className='text-sm font-light text-tSecondary'>
          {DateTime.fromISO(data.updatedAt).toLocaleString(DateTime.DATE_MED, {
            locale: lang === 'fa' ? 'fa-ir' : 'en',
          })}
        </span>
      </div>
    </Link>
  );
}

export default BlogCard;
