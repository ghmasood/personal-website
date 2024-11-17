import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

import type { LangsT } from 'locale/dictionaries';

import BlogList from 'components/pages/blogs/components/blogList';
import { getBlogsServerFn } from 'components/pages/blogs/services';

type Params = Promise<{ lang: LangsT }>;
export default async function Blogs(props: { params: Params }) {
  //DICTIONARY
  const lang = (await props.params).lang;

  //REACT QUERY
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['posts', ''],
    queryFn: () => getBlogsServerFn(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className='p-4'>
        <BlogList lang={lang} />
      </div>
    </HydrationBoundary>
  );
}
