import Link from 'next/link';

import { LangsT } from 'locale/dictionaries';

import ImageWrapper from 'components/UI/imageWrapper';

function PostCategoryCard({
  title,
  slug,
  lang,
  className = '',
}: {
  title: string;
  slug: string;
  className?: string;
  lang: LangsT;
}) {
  return (
    <Link
      href={`/${lang}/blogs/category/${slug}`}
      className={`relative flex aspect-[2.5] min-h-12 w-full min-w-36 gap-2 overflow-hidden rounded-md border border-line md:aspect-[4] ${className}`}
      style={{
        backgroundImage: `url(/images/logo.svg)`,
        backgroundSize: '20%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#1e2d3d',
        boxShadow: '4.1px 4.2px 4.2px hsl(0deg 0% 0% / 0.27)',
      }}
    >
      <ImageWrapper
        sizes={'auto'}
        src={`/images/blog-cats/masoud-ghanbarzadeh-${slug}.jpg`}
        quality={85}
        fill
        alt={slug}
        loading='lazy'
        className='object-cover object-right'
      />
      <span
        className={`absolute bottom-1.5 left-1.5 z-[1] p-0 text-[10px] font-[600] opacity-80 md:inline md:text-xs ltr:w-[55%] ${slug === 'javascript' || slug === 'deploy' ? 'text-black' : 'text-white'}`}
      >
        {title}
      </span>
    </Link>
  );
}

export default PostCategoryCard;
