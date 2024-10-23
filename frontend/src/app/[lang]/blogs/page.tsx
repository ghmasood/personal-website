import type { LangsT } from 'locale/dictionaries';

import { appConfig } from 'utils/configs';

import BlogCard from 'components/Pages/blogs/blogCard';

import type { blogsListRes } from 'types/strapi-backend';

type Params = Promise<{ lang: LangsT }>;
export default async function blogs(props: { params: Params }) {
  const api = await fetch(`${appConfig.main.backAPI}/blogs`, { cache: 'no-store' });

  const data = (await api.json()) as blogsListRes;

  console.log(data.data[0].thumbnail);

  if (!data) return;
  const lang = (await props.params).lang;
  return (
    <div className='flex flex-wrap'>
      {data.data.map((blog) => (
        <BlogCard key={blog.id} data={blog} lang={lang} />
      ))}
    </div>
  );
}
