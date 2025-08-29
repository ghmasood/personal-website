'use client';

import React from 'react';

import { notFound } from 'next/navigation';

import { useQuery } from '@tanstack/react-query';

import type { LangsT } from 'locale/dictionaries';

import { getBlogsFn, getCategoriesFn } from '../../services';
import BlogCard from '../blogCard';

type Props = { lang: LangsT; category?: string };

function BlogList({ lang, category = '' }: Props) {
  const { data: categoriesRes } = useQuery({ queryKey: ['category'], queryFn: () => getCategoriesFn() });

  const catSlugs = categoriesRes?.data.map((cat) => cat.slug);
  if (categoriesRes && catSlugs && ![...catSlugs, ''].includes(category)) {
    notFound();
  }
  const { data } = useQuery({
    queryKey: ['blogs', category],
    queryFn: () => getBlogsFn(category),
  });

  return (
    <div className='flex flex-wrap gap-4 text-tPrimary'>
      {[...(data?.data ?? [])].reverse().map((blog) => (
        <BlogCard key={blog.id} data={blog} lang={lang} />
      ))}
    </div>
  );
}

export default BlogList;
