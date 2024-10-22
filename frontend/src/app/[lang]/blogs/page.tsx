import type { LangsT } from 'locale/dictionaries';

import { appConfig } from 'utils/configs';

import BlogCard from 'components/Pages/blogs/blogCard';

import type { blogsListRes } from 'types/strapi-backend';

export default async function blogs({ params: { lang } }: { params: { lang: LangsT } }) {
  const api = await fetch(`${appConfig.main.backAPI}/blogs`, { cache: 'no-store' });

  const data = (await api.json()) as blogsListRes;

  console.log(data.data[0].thumbnail);

  if (!data) return;

  return (
    <div className='flex flex-wrap'>
      {data.data.map((blog) => (
        <BlogCard key={blog.id} data={blog} lang={lang} />
      ))}
    </div>
  );
}
