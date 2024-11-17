'use client';

import { useQuery } from '@tanstack/react-query';

import { LangsT } from 'locale/dictionaries';

import { getSingleBlogFn } from 'components/pages/blogs/services';

type Params = Promise<{ lang: LangsT; blogSlug: string; category: string }>;

function BlogSinglePage({ blogSlug, category, lang }: { blogSlug: string; category: string; lang: LangsT }) {
  const { data } = useQuery({
    queryKey: ['blogs', category, blogSlug],
    queryFn: () => getSingleBlogFn(blogSlug),
  });
  const content: TrustedHTML = lang === 'en' ? (data?.data[0].content_en ?? '') : (data?.data[0].content_fa ?? '');
  return (
    <div
      className='p-4 text-justify'
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    ></div>
  );
}

export default BlogSinglePage;
