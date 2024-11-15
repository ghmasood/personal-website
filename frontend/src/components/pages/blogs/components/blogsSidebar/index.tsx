'use client';

import { Input } from '@nextui-org/input';
import { RiSearchLine } from '@remixicon/react';

import { LangsT } from 'locale/dictionaries';

import { useGetDictionaryClient } from 'context/dictionaryProvider';

import PostCategoryCard from './components/postCategoryCard';

function BlogsSideBar() {
  const {
    settings: { language },
  } = useGetDictionaryClient();
  return (
    <div className='flex shrink-0 flex-col items-center gap-4 border-b border-line p-4 text-tSecondary md:h-full md:w-[16.5rem] md:border-b-0 md:border-e'>
      <Input
        classNames={{
          label: '!text-tSecondary !font-[450]',
          input: '!text-[#465E77]',
          inputWrapper:
            'bg-surfaceSecondary border border-line hover:!bg-surfacePrimary group-data-[focus=true]:!bg-surfacePrimary  group-data-[focus=true]:!shadow group-data-[focus=true]:!shadow-surfacePrimary',
        }}
        radius='sm'
        placeholder='search something...'
        startContent={<RiSearchLine className='text-tSecondary' />}
      />
      <div className='relative flex w-full items-center gap-2 overflow-scroll scrollbar-hide md:flex-col'>
        {mockTemp.data.map((category) => (
          <PostCategoryCard
            lang={language as LangsT}
            key={category.id}
            title={category.title_en}
            slug={category.slug}
            className='min-w-32'
          />
        ))}
      </div>
    </div>
  );
}

export default BlogsSideBar;

const mockTemp = {
  data: [
    {
      id: 2,
      documentId: 'ndxyqpf442rkmr3wnkup7mwp',
      slug: 'javascript',
      title_fa: 'جاوااسکریپت',
      title_en: 'Javascript',
      descrption_fa:
        'همه چیز درباره جاوا اسکریپت! از مفاهیم پایه گرفته تا ترفندهای حرفه\u200cای، اینجا جاییه که می\u200cتونی نکات، راهنماها و جدیدترین اخبار رو برای به\u200cروز نگه داشتن مهارت\u200cهات پیدا کنی.',
      descrption_en:
        'Get into all things JavaScript! Whether you’re brushing up on basics or diving into advanced tricks, this is where you’ll find tips, guides, and the latest news to keep your skills sharp and up-to-date.',
      createdAt: '2024-10-25T23:17:32.797Z',
      updatedAt: '2024-10-25T23:17:32.797Z',
      publishedAt: '2024-10-25T23:17:34.552Z',
    },
    {
      id: 4,
      documentId: 'mx9f35i9rl6ainzi9oku46uw',
      slug: 'typescript',
      title_fa: 'تایپ اسکریپت',
      title_en: 'Typescript',
      descrption_fa:
        'سطح کدنویسی جاوا اسکریپتت رو با تایپ\u200cاسکریپت بالا ببر! با اضافه کردن تایپ\u200cها، کدت رو تمیزتر و کم\u200cباگ\u200cتر کن. از نکات کاربردی گرفته تا مطالب عمیق، اینجا هر چیزی که به تایپ\u200cاسکریپت ربط داره رو پیدا می\u200cکنی.',
      descrption_en:
        'Step up your JavaScript game with TypeScript! Discover how adding types can make your code cleaner and less buggy. From tips to deep dives, this is your spot for all things TypeScript.',
      createdAt: '2024-10-25T23:21:28.029Z',
      updatedAt: '2024-10-25T23:21:28.029Z',
      publishedAt: '2024-10-25T23:21:30.130Z',
    },
    {
      id: 6,
      documentId: 'kxq5s6iijg5932n5dpjcgfky',
      slug: 'html',
      title_fa: 'زبان نشانه گذاری ابرمتن',
      title_en: 'Hypertext Markup Language',
      descrption_fa:
        'همه چیز با HTML شروع می\u200cشه! از پایه\u200cریزی اصولی گرفته تا یادگیری تگ\u200cها و ترفندهای جدید، اینجا جاییه که می\u200cتونی اساس هر وب\u200cسایتی رو بسازی.\n',
      descrption_en:
        'Everything starts with HTML! From setting up the basics to learning the latest tags and tricks, this is your go-to for building the foundation of any webpage.',
      createdAt: '2024-10-25T23:23:35.050Z',
      updatedAt: '2024-10-25T23:23:35.050Z',
      publishedAt: '2024-10-25T23:23:36.729Z',
    },
    {
      id: 8,
      documentId: 'o5ohjh332dt8b78mb0jf1vn9',
      slug: 'css',
      title_fa: 'استایل دهی',
      title_en: 'Cascading Style Sheets',
      descrption_fa:
        'به سایتت زندگی بده با استایل! از CSS و انیمیشن\u200cها گرفته تا جدیدترین ترندهای طراحی، اینجا نکات و ترفندهایی پیدا می\u200cکنی که ظاهر فرانت\u200cاندت رو فوق\u200cالعاده می\u200cکنن.\n',
      descrption_en:
        'Bring your site to life with style! Whether it’s CSS, animations, or the latest design trends, find tips and tricks here to make your frontend look amazing.',
      createdAt: '2024-10-25T23:26:51.526Z',
      updatedAt: '2024-10-25T23:26:51.526Z',
      publishedAt: '2024-10-25T23:26:53.162Z',
    },
    {
      id: 10,
      documentId: 'vv2p9yf85xwzbf9b4h966x23',
      slug: 'reactjs',
      title_fa: 'ری اکت',
      title_en: 'React.js',
      descrption_fa:
        'با React.js عمیق شو تو دنیای رابط\u200cهای کاربری داینامیک! از اصول اولیه کامپوننت\u200cها گرفته تا هوک\u200cهای پیشرفته، اینجا هر چیزی که برای ساخت اپ\u200cهای وب قدرتمند و واکنش\u200cگرا نیاز داری پیدا می\u200cکنی.',
      descrption_en:
        'Dive into React.js, the go-to library for building dynamic UIs! From component basics to advanced hooks, find everything you need to create responsive, powerful web apps.',
      createdAt: '2024-10-25T23:29:26.936Z',
      updatedAt: '2024-10-25T23:29:26.936Z',
      publishedAt: '2024-10-25T23:29:28.489Z',
    },
    {
      id: 12,
      documentId: 'owzvl8ixgfmmuj0a5ll3es0p',
      slug: 'nextjs',
      title_fa: 'نکست جی اس',
      title_en: 'Next.js',
      descrption_fa:
        'مهارت\u200cهای React خودت رو با Next.js ارتقا بده! از بارگذاری سریع صفحات تا ویژگی\u200cهای مناسب برای سئو، اینجا جاییه که می\u200cتونی اپ\u200cهای وب قدرتمند و آماده برای تولید بسازی.',
      descrption_en:
        'Level up your React skills with Next.js! From fast page loads to SEO-friendly features, this is your stop for building powerful, production-ready web apps with ease.',
      createdAt: '2024-10-25T23:30:54.008Z',
      updatedAt: '2024-10-25T23:30:54.008Z',
      publishedAt: '2024-10-25T23:30:55.547Z',
    },
    {
      id: 14,
      documentId: 'jzol7pnprcwoyfop3y7zdcy3',
      slug: 'deploy',
      title_fa: 'دیپلوی',
      title_en: 'Deployment',
      descrption_fa:
        'هنر آنلاین کردن پروژه\u200cهات رو با DevOps یاد بگیر! Git رو برای کنترل نسخه، استراتژی\u200cهای دیپلوی و شیوه\u200cهای CI/CD بررسی کن تا کارات رو روان\u200cتر کنی و به\u200cروزرسانی\u200cها رو به راحتی ارائه بدی.',
      descrption_en:
        'Master the art of getting your projects live with DevOps! Explore Git for version control, deployment strategies, and CI/CD practices to streamline your workflow and deliver updates seamlessly.',
      createdAt: '2024-10-25T23:37:51.045Z',
      updatedAt: '2024-10-25T23:37:51.045Z',
      publishedAt: '2024-10-25T23:37:53.125Z',
    },
    {
      id: 16,
      documentId: 'j9tvwcnfxobgw841jbazlzob',
      slug: 'general',
      title_fa: 'عمومی',
      title_en: 'General',
      descrption_fa:
        'به بخش عمومی خوش اومدی! اینجا یک ترکیب از موضوعات مختلف رو پیدا می\u200cکنی؛ از نکات و ترفندها گرفته تا بینش\u200cها و ترندهای دنیای فرانت\u200cاند. بهترین جا برای اینکه مهارت\u200cهات رو تقویت کنی و ایده\u200cهای جدید رو کشف کنی!',
      descrption_en:
        'Welcome to the general section! Here you’ll find a mix of topics from tips and tricks to insights and trends in frontend tech. Perfect for keeping your skills sharp and exploring new ideas!',
      createdAt: '2024-10-25T23:40:11.579Z',
      updatedAt: '2024-10-25T23:40:11.579Z',
      publishedAt: '2024-10-25T23:40:13.210Z',
    },
    {
      id: 18,
      documentId: 'xgkmmmtk3s3dgdep3klb3cvs',
      slug: 'performance',
      title_fa: 'افزایش پرفورمنس',
      title_en: 'Performance Optimization',
      descrption_fa:
        'نکات و تکنیک\u200cهایی برای افزایش سرعت اپ\u200cهای وب و بهبود تجربه کاربری. ابزارها و بهترین روش\u200cهایی رو کشف کن که به وب\u200cسایتت کمک می\u200cکنن سریع\u200cتر بارگذاری بشه و روان\u200cتر اجرا بشه',
      descrption_en:
        'Dive into tips and techniques for speeding up your web apps and improving user experience. From lazy loading images to optimizing asset delivery, explore the tools and best practices that will help your site load faster and run smoother.',
      createdAt: '2024-10-25T23:44:57.268Z',
      updatedAt: '2024-10-25T23:44:57.268Z',
      publishedAt: '2024-10-25T23:44:58.973Z',
    },
    {
      id: 20,
      documentId: 'jx3ewy0ar8879f7j2yh1k2mf',
      slug: 'libraries',
      title_fa: 'کتابخانه\u200cها',
      title_en: 'Libraries',
      descrption_fa:
        'مجموعه\u200cای متنوع از کتابخانه\u200cها رو کشف کن که می\u200cتونن توسعه فرانت\u200cاندت رو به شدت تقویت کنن! از راه\u200cحل\u200cهای مدیریت استیت مثل Redux و Zustand تا فریم\u200cورک\u200cهای CSS مثل Bootstrap و Tailwind CSS، یاد بگیر چطور این ابزارها می\u200cتونن روند کار تو رو بهبود ببخشند و وظایف پیچیده رو ساده\u200cتر کنن. درباره کتابخانه\u200cهای کاربردی محبوب برای توابع، انیمیشن\u200cها و بیشتر یاد بگیر، تا بتونی اپلیکیشن\u200cهای وب مقاوم، کارآمد و زیبا رو به راحتی بسازی.',
      descrption_en:
        'Explore a diverse range of libraries that can supercharge your frontend development! From state management solutions like Redux and Zustand to CSS frameworks like Bootstrap and Tailwind CSS, discover how these tools can enhance your workflow and simplify complex tasks. Learn about popular utility libraries for functions, animations, and more, helping you build robust, efficient, and stylish web applications with ease.',
      createdAt: '2024-10-25T23:59:14.595Z',
      updatedAt: '2024-10-25T23:59:14.595Z',
      publishedAt: '2024-10-25T23:59:16.355Z',
    },
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 10,
    },
  },
};
