'use client';

import { useState } from 'react';
import { useEffect } from 'react';
import ReactPlayer from 'react-player';

import { notFound } from 'next/navigation';

import { useQuery } from '@tanstack/react-query';

import { LangsT } from 'locale/dictionaries';
import { DateTime } from 'luxon';

import RenderContent from './components/RenderContent';
import { getSingleBlogFn } from 'components/pages/blogs/services';

function BlogSinglePage({ blogSlug, category, lang }: { blogSlug: string; category: string; lang: LangsT }) {
  const [videoErr, setVideoErr] = useState(false);
  const { data } = useQuery({
    queryKey: ['blogs', category, blogSlug],
    queryFn: () => getSingleBlogFn(blogSlug),
  });
  const selectedPost = data?.data[0];
  const content: TrustedHTML = lang === 'en' ? (selectedPost?.content_en ?? '') : (selectedPost?.content_fa ?? '');

  useEffect(() => {
    if (selectedPost?.video_url)
      fetch(
        `https://img.youtube.com/vi/${selectedPost?.video_url?.split('https://www.youtube.com/watch?v=')[1]}/0.jpg`,
        { cache: 'no-cache' }
      ).catch(() => setVideoErr(true));
  }, [selectedPost?.video_url]);

  if (data?.data.length === 0) {
    notFound();
  }
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
      <div className='text-justify text-tSecondary'>
        <RenderContent htmlString={content.toLocaleString()} />
      </div>
      {selectedPost?.video_url && !videoErr && (
        <ReactPlayer
          key={selectedPost.video_url}
          width={'100%'}
          height={'100%'}
          className='mt-10 aspect-video w-full overflow-hidden rounded-xl shadow-md'
          src={selectedPost.video_url}
        />
      )}
    </div>
  );
}

export default BlogSinglePage;
