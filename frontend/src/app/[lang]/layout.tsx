import type { Metadata } from 'next';
import { Fira_Code, Vazirmatn } from 'next/font/google';

import { GoogleTagManager } from '@next/third-parties/google';
import { NextUIProvider } from '@nextui-org/system';

import { LangsT, useGetDictionaryAsync } from 'locale/dictionaries';

import DictionaryProvider from 'context/dictionaryProvider';
import ReactQueryProviders from 'context/reactQueryProvider';

import Layout from 'components/UI/Layout';

import 'assets/styles/globals.scss';

const fira = Fira_Code({ subsets: ['latin'], variable: '--font-fira', display: 'swap' });
const vazir = Vazirmatn({ subsets: ['arabic'], variable: '--font-vazir', display: 'swap' });

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fa' }];
}
export const metadata: Metadata = {
  title: 'masoud-ghanbarzadeh',
  description: 'my personal website as front-end developer',
};

type Params = Promise<{ lang: LangsT }>;

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Params;
}>) {
  const lang = (await params).lang;
  const dictionary = await useGetDictionaryAsync(lang);

  return (
    <html lang={lang} dir={lang === 'fa' ? 'rtl' : 'ltr'}>
      <GoogleTagManager gtmId='G-Y3D71YB47T' />
      <body className={`${fira.variable} ${vazir.variable}`}>
        <DictionaryProvider dictionary={dictionary}>
          <NextUIProvider>
            <ReactQueryProviders>
              <Layout lang={lang}>{children}</Layout>
            </ReactQueryProviders>
          </NextUIProvider>
        </DictionaryProvider>
      </body>
    </html>
  );
}
