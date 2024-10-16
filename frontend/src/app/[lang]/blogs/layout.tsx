import { Input } from '@nextui-org/input';
import { RiSearchLine } from '@remixicon/react';

export default function blogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-col gap-6 px-12 py-6 text-tPrimary'>
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
      <>{children}</>
    </div>
  );
}
