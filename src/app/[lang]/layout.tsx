import { NextUIProvider } from '@nextui-org/system';

import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';

import Layout from 'components/UI/Layout';

import 'assets/styles/globals.scss';

const fira = Fira_Code({ subsets: ['latin'] });

export type LangsT = 'en' | 'fa';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fa' }];
}
export const metadata: Metadata = {
  title: 'masoud-ghanbarzadeh',
  description: 'my personal website as front-end developer',
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: LangsT };
}>) {
  return (
    <html lang={params.lang} dir={params.lang === 'fa' ? 'rtl' : 'ltr'}>
      <body className={fira.className}>
        <NextUIProvider>
          <Layout>{children}</Layout>
        </NextUIProvider>
      </body>
    </html>
  );
}
