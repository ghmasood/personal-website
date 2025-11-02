import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

import type { LangsT } from 'locale/dictionaries';

import BlogList from 'components/pages/blogs/components/blogList';
import { getBlogsServerFn } from 'components/pages/blogs/services';

type Params = Promise<{ lang: LangsT; category: string }>;
export default async function BlogCategoryPage(props: { params: Params }) {
  //DICTIONARY
  const params = await props.params;

  //REACT QUERY
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['blogs', params.category],
    queryFn: () => getBlogsServerFn(params.category),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BlogList lang={params.lang} category={params.category} />
    </HydrationBoundary>
  );
}
