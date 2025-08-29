import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

import BlogsSideBar from 'components/pages/blogs/components/blogsSidebar';
import { getCategoriesServerFn } from 'components/pages/blogs/services';

export default async function blogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //REACT QUERY
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['category'],
    queryFn: getCategoriesServerFn,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className='flex h-full flex-col md:flex-row'>
        <BlogsSideBar />
        <div className='w-full overflow-auto'>{children}</div>
      </div>
    </HydrationBoundary>
  );
}
