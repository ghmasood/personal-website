import BlogCard from 'components/Pages/blogs/blogCard';

import { blogsListRes } from 'types/strapi-backend';

export default async function blogs() {
  const api = await fetch('https://admin.gh-masoud.ir/api/blogs', { cache: 'no-store' });

  const data = (await api.json()) as blogsListRes;
  console.log(data.data);

  if (!data) return;

  return (
    <div className='flex h-full w-full items-center justify-center text-[#fff]'>
      {data.data.map((blog) => (
        <BlogCard key={blog.id} data={blog} />
      ))}
    </div>
  );
}
