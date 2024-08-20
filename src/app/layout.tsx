import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';

import Footer from 'components/footer';
import Header from 'components/header';

import 'assets/styles/globals.scss';

const fira = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' dir='ltr'>
      <body className={fira.className}>
        <Header />
        <main className='h-[calc(100vh_-_14rem)] border-x border-line bg-surfacePrimary'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
