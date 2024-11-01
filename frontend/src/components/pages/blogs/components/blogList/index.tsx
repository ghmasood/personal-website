'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { getPostaa } from '../../services';
import BlogCard from '../blogCard';

type Props = { lang: 'en' | 'fa' };

function BlogList({ lang }: Props) {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPostaa(),
  });

  return (
    <div className='flex flex-wrap gap-4'>
      {data?.map((blog: any) => (
        <div className='flex basis-[calc((100%_-_2rem)/3)] flex-col rounded-lg bg-accent-purple p-2' key={blog.id}>
          <span className='text-xl font-black'>{blog.title}</span>
          <span>{blog.body}</span>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
