import Link from 'next/link';

import { RiStarSFill } from '@remixicon/react';

import { LangsT, useGetDictionaryAsync } from 'locale/dictionaries';
import { DateTime } from 'luxon';

import { ReposList } from 'types/github';

export default async function MyProjects({ params: { lang } }: { params: { lang: LangsT } }) {
  const res = await fetch('https://api.github.com/users/ghmasood/repos?sort=upded&direction=desc', {
    cache: 'no-store',
  });
  const data = (await res.json()) as ReposList;

  const updatedLocale = (await useGetDictionaryAsync(lang)).projectsPage.updated;
  return (
    <div className='flex flex-wrap gap-6 p-4'>
      {data.map((repo) => (
        <div
          key={repo.id}
          className='group relative flex basis-full flex-col justify-between gap-3 overflow-hidden rounded-md border border-line bg-surfaceSecondary p-3 duration-[2s] hover:scale-[1.005] lg:lg:basis-[calc((100%_-_1.5rem)/2)] xl:basis-[calc((100%_-_3rem)/3)] min-[1800px]:basis-[calc((100%_-_4.5rem)/4)]'
        >
          <div className='flex items-center justify-between gap-1'>
            <Link href={repo.html_url} target='_blank'>
              <h2 className='text-xl font-[500] text-accent-blue'>{repo.name}</h2>
            </Link>
            <div className='flex items-center gap-1 text-xs text-tSecondary'>
              <RiStarSFill size='1rem' />
              {repo.stargazers_count}
            </div>
          </div>
          <p className='line-clamp-1 text-sm text-tSecondary'>{repo.description}</p>
          <div className='flex items-center justify-between text-xs'>
            {repo.language && (
              <span className='w-fit rounded-full bg-accent-blue px-1.5 py-0.5 text-tPrimary'>{repo.language}</span>
            )}
            <span className='font-[200] text-tSecondary'>
              {updatedLocale}{' '}
              {DateTime.fromISO(repo?.updated_at ?? '')
                .setLocale(lang === 'fa' ? 'fa-IR' : 'en-US')
                .toRelative()}
            </span>
          </div>
          <span className='absolute bottom-0 start-0 h-1 w-0 bg-accent-blue/80 duration-[3s] group-hover:w-full' />
        </div>
      ))}
    </div>
  );
}
