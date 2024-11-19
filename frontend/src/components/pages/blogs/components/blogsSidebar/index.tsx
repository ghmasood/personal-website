'use client';

import { Input } from '@nextui-org/input';
import { RiSearchLine } from '@remixicon/react';
import { useQuery } from '@tanstack/react-query';

import { LangsT } from 'locale/dictionaries';

import { useGetDictionaryClient } from 'context/dictionaryProvider';

import PostCategoryCard from './components/postCategoryCard';

import { getCategoriesFn } from '../../services';

function BlogsSideBar() {
  //DICTIONARY
  const {
    settings: { language },
  } = useGetDictionaryClient();

  //API CALL
  const { data } = useQuery({ queryKey: ['category'], queryFn: () => getCategoriesFn() });

  return (
    <aside className='flex shrink-0 flex-col items-center gap-3 border-b border-line p-4 text-tSecondary md:h-full md:w-[16.5rem] md:border-b-0 md:border-e'>
      <Input
        classNames={{
          label: '!text-tSecondary !font-[450]',
          input: '!text-[#465E77]',
          inputWrapper:
            'bg-surfaceSecondary border border-line hover:!bg-surfacePrimary group-data-[focus=true]:!bg-surfacePrimary  group-data-[focus=true]:!shadow group-data-[focus=true]:!shadow-surfacePrimary',
        }}
        radius='sm'
        placeholder='search something...'
        startContent={<RiSearchLine className='text-tSecondary' />}
      />
      <div className='relative flex w-full items-center gap-x-4 gap-y-1 overflow-scroll scrollbar-hide md:flex-col'>
        {data?.data
          .slice()
          .sort((a, b) => (b.blogs?.count ?? 0) - (a.blogs?.count ?? 0))
          .map((category) => (
            <PostCategoryCard
              lang={language as LangsT}
              key={category.id}
              title={category.title_en}
              slug={category.slug}
              className='min-w-32'
            />
          ))}
      </div>
    </aside>
  );
}

export default BlogsSideBar;
