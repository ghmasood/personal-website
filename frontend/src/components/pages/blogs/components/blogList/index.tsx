'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';

import type { LangsT } from 'locale/dictionaries';

import { getBlogsFn } from '../../services';
import BlogCard from '../blogCard';

type Props = { lang: LangsT; category?: string };

function BlogList({ lang, category = '' }: Props) {
  const { data } = useQuery({
    queryKey: ['blogs', category],
    queryFn: () => getBlogsFn(category),
  });

  return (
    <div className='flex flex-wrap gap-4 text-tPrimary'>
      {data?.data?.map((blog) => <BlogCard key={blog.id} data={blog} lang={lang} />)}
    </div>
  );
}

export default BlogList;
