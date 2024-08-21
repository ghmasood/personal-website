import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';

import Layout from 'components/Layout';

import 'assets/styles/globals.scss';

const fira = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'masoud-ghanbarzadeh',
  description: 'my personal website as front-end developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' dir='ltr'>
      <body className={fira.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
