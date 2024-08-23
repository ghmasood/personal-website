import { ReactNode } from 'react';

import Footer from './footer';
import Header from './header';

type LayoutPropsT = {
  children: ReactNode;
};

function Layout({ children }: LayoutPropsT) {
  return (
    <>
      <Header />
      <main className='h-[calc(100dvh_-_7.5rem)] overflow-x-auto overflow-y-auto border-x border-line bg-surfacePrimary md:h-[calc(100dvh_-_9.5rem)] lg:h-[calc(100dvh_-_13.5rem)] min-[1600px]:!h-[calc(100dvh_-_17.5rem)]'>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
