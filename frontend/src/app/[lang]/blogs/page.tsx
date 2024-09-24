import type { LangsT } from 'locale/dictionaries';

import BlogCard from 'components/Pages/blogs/blogCard';

import type { blogsListRes } from 'types/strapi-backend';

export default async function blogs({ params: { lang } }: { params: { lang: LangsT } }) {
  const api = await fetch('https://admin.gh-masoud.ir/api/blogs', { cache: 'no-store' });

  const data = (await api.json()) as blogsListRes;

  if (!data) return;

  return (
    <div className='flex flex-wrap p-4'>
      {data.data.map((blog) => (
        <BlogCard key={blog.id} data={blog} lang={lang} />
      ))}
    </div>
  );
}
