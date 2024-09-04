import type { Metadata } from 'next';
import { Fira_Code, Vazirmatn } from 'next/font/google';

import { NextUIProvider } from '@nextui-org/system';

import { useGetDictionaryAsync } from 'locale/dictionaries';

import DictionaryProvider from 'context/dictionaryProvider';

import Layout from 'components/UI/Layout';

import 'assets/styles/globals.scss';

const fira = Fira_Code({ subsets: ['latin'], variable: '--font-fira' });
const vazir = Vazirmatn({ subsets: ['latin'], variable: '--font-vazir' });

export type LangsT = 'en' | 'fa';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fa' }];
}
export const metadata: Metadata = {
  title: 'masoud-ghanbarzadeh',
  description: 'my personal website as front-end developer',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: LangsT };
}>) {
  const dictionary = await useGetDictionaryAsync(params.lang);
  return (
    <html lang={params.lang} dir={params.lang === 'fa' ? 'rtl' : 'ltr'}>
      <body className={`${fira.variable} ${vazir.variable}`}>
        <DictionaryProvider dictionary={dictionary}>
          <NextUIProvider>
            <Layout lang={params.lang}>{children}</Layout>
          </NextUIProvider>
        </DictionaryProvider>
      </body>
    </html>
  );
}
