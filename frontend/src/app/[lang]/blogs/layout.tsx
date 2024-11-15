import BlogsSideBar from 'components/pages/blogs/components/blogsSidebar';

export default function blogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex h-full flex-col md:flex-row'>
      <BlogsSideBar />
      <div className='overflow-auto'>{children}</div>
    </div>
  );
}
