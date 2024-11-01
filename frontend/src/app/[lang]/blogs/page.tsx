import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

import type { LangsT } from 'locale/dictionaries';

import { appConfig } from 'utils/configs';

import BlogCard from 'components/pages/blogs/components/blogCard';
import BlogList from 'components/pages/blogs/components/blogList';
import { getPosts } from 'components/pages/blogs/services';

import type { blogsListRes } from 'types/strapi-backend';

type Params = Promise<{ lang: LangsT }>;
export default async function blogs(props: { params: Params }) {
  const lang = (await props.params).lang;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BlogList lang={lang} />
    </HydrationBoundary>
  );
}
