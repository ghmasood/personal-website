import { ReactNode } from 'react';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer
        stacked
        position='bottom-right'
        autoClose={6500}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
        toastClassName={
          'shadow shadow-black !bg-line mb-[2.5rem] end-[0.5rem] md:mb-[3.5rem] md:end-[1.75rem] lg:mb-[5.5rem] lg:end-[3.5rem] 3xl:mb-[7.5rem] 3xl:end-[5.5rem]'
        }
        transition={Slide}
      />
      <Header locale={dict} />
      <main className='h-[calc(100dvh_-_7.5rem)] overflow-x-auto overflow-y-auto border-x border-line bg-surfacePrimary md:h-[calc(100dvh_-_9.5rem)] lg:h-[calc(100dvh_-_13.5rem)] 3xl:!h-[calc(100dvh_-_17.5rem)]'>
        {children}
      </main>

      <Footer locale={dict?.layout ?? {}} />
    </>
  );
}

export default Layout;
