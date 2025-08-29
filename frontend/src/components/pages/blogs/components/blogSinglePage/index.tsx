'use client';

import { notFound } from 'next/navigation';

import { useQuery } from '@tanstack/react-query';

import { LangsT } from 'locale/dictionaries';
import { DateTime } from 'luxon';

import { getSingleBlogFn } from 'components/pages/blogs/services';

function BlogSinglePage({ blogSlug, category, lang }: { blogSlug: string; category: string; lang: LangsT }) {
  const { data } = useQuery({
    queryKey: ['blogs', category, blogSlug],
    queryFn: () => getSingleBlogFn(blogSlug),
  });
  if (data?.data.length === 0) {
    notFound();
  }
  const selectedPost = data?.data[0];
  const content: TrustedHTML = lang === 'en' ? (selectedPost?.content_en ?? '') : (selectedPost?.content_fa ?? '');

  return (
    <div className='flex w-full flex-col gap-3 p-4'>
      <div className='flex items-center gap-4 text-sm font-light text-tSecondary'>
        <span className='w-fit rounded-full bg-accent-orange px-1.5 py-0.5 text-black'>
          {lang === 'en' ? selectedPost?.category.title_en : selectedPost?.category.title_fa}
        </span>
        |
        <span>
          {DateTime.fromISO(selectedPost?.publishedAt ?? '').toLocaleString(DateTime.DATETIME_MED, {
            locale: lang === 'fa' ? 'fa-ir' : 'en',
          })}
        </span>
      </div>
      <hr className='border-t border-tSecondary/20' />
      <div
        className='text-justify'
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </div>
  );
}

export default BlogSinglePage;
