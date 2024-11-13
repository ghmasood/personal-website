import Image from 'next/image';

import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

import type { LangsT } from 'locale/dictionaries';

import BlogCard from 'components/pages/blogs/components/blogCard';
import BlogList from 'components/pages/blogs/components/blogList';
import { getPosts } from 'components/pages/blogs/services';

import type { blogsListRes } from 'types/strapi-backend';

type Params = Promise<{ lang: LangsT; category: string }>;
export default async function BlogCategoryPage(props: { params: Params }) {
  //DICTIONARY
  const category = (await props.params).category;

  return (
    <div className='h-full w-full flex-col p-4'>
      <div className='flex flex-col items-center justify-center gap-5'>
        <span className='text-6xl font-[800] uppercase text-tSecondary'>{category}</span>
        <div className='relative aspect-[4] w-1/3'>
          <Image alt='a' fill src={`/images/blog-cats/masoud-ghanbarzadeh-${category}.jpg`} className='rounded-lg' />
        </div>
      </div>
    </div>
  );
}
