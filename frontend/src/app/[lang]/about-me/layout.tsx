import AboutSideBar from 'components/pages/about/components/sideBar';

export default function AboutMeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex h-full flex-col md:flex-row'>
      <AboutSideBar />
      <div className='h-full w-full overflow-y-auto scroll-smooth border-t border-line md:border-t-0 lg:w-1/2 lg:border-e'>
        {children}
      </div>
      <div className='hidden h-full grow border-e border-line lg:block'>snippets</div>
    </div>
  );
}
