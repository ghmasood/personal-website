import ContactMeSideBar from 'components/pages/contactMe/components/contactmeSidebar';

export default function ContactMeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex h-full flex-col gap-3 md:flex-row md:gap-0'>
      <ContactMeSideBar />
      {children}
    </div>
  );
}
