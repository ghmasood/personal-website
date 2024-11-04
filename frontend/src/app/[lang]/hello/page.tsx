import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

import { LangsT, useGetDictionaryAsync } from 'locale/dictionaries';

import HelloPage from 'components/pages/hello';
import { getHighScoreFn, getHighScoreServerFn } from 'components/pages/hello/services';

type Params = Promise<{ lang: LangsT }>;

export default async function Hello(props: { params: Params }) {
  //DICTIONARY
  const lang = (await props.params).lang;
  const dict = await useGetDictionaryAsync(lang);

  //REACT QUERY
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['highscore'],
    queryFn: getHighScoreServerFn,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HelloPage locale={dict.helloPage} />
    </HydrationBoundary>
  );
}
