'use client';

import React from 'react';

import { notFound } from 'next/navigation';

import { useQuery } from '@tanstack/react-query';

import type { LangsT } from 'locale/dictionaries';
import { DateTime } from 'luxon';

import { useGetDictionaryClient } from 'context/dictionaryProvider';

import { getBlogsFn, getCategoriesFn } from '../../services';
import BlogCard from '../blogCard';

type Props = { lang: LangsT; category?: string };

function BlogList({ lang, category = '' }: Props) {
  const { data: categoriesRes } = useQuery({ queryKey: ['category'], queryFn: () => getCategoriesFn() });
  const { blogPage } = useGetDictionaryClient();
  const catSlugs = categoriesRes?.data.map((cat) => cat.slug);
  if (categoriesRes && catSlugs && ![...catSlugs, ''].includes(category)) {
    notFound();
  }
  const { data } = useQuery({
    queryKey: ['blogs', category],
    queryFn: () => getBlogsFn(category),
  });

  return (
    <div className='flex h-full w-full flex-col gap-2 py-4'>
      <div className='flex items-center justify-between px-4'>
        <span className='capitalize text-tSecondary'>
          {blogPage.category}: {category || blogPage.all}
        </span>

        <span className='capitalize text-tSecondary'>
          {blogPage.posts}: {data?.data.length.toLocaleString(lang)}
        </span>
      </div>

      <hr className='mb-2 border-line' />

      <div className='flex flex-wrap gap-4 px-4 text-tPrimary'>
        {[...(data?.data ?? [])]
          .sort((a, b) => DateTime.fromISO(b.createdAt).toMillis() - DateTime.fromISO(a.createdAt).toMillis())
          .map((blog) => (
            <BlogCard key={blog.id} data={blog} lang={lang} />
          ))}
      </div>
    </div>
  );
}

export default BlogList;
