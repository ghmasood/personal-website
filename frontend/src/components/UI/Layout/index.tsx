import { ReactNode } from 'react';

import { LangsT, useGetDictionaryAsync } from 'locale/dictionaries';

import Footer from './footer';
import Header from './header';

type LayoutPropsT = {
  children: ReactNode;
  lang: LangsT;
};

async function Layout({ children, lang }: LayoutPropsT) {
  const dict = await useGetDictionaryAsync(lang);

  return (
    <>
      <Header locale={dict} />
      <main className='h-[calc(100dvh_-_7.5rem)] overflow-x-auto overflow-y-auto border-x border-line bg-surfacePrimary md:h-[calc(100dvh_-_9.5rem)] lg:h-[calc(100dvh_-_13.5rem)] min-[1600px]:!h-[calc(100dvh_-_17.5rem)]'>
        {children}
      </main>
      <Footer locale={dict?.layout ?? {}} />
    </>
  );
}

export default Layout;
