import Link from 'next/link';

import { LangsT } from 'locale/dictionaries';

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
      className={`border-0.5 relative flex min-h-[4.375rem] gap-2 rounded-md md:w-[17.5rem] ${className}`}
      style={{
        backgroundImage: `url(/images/blog-cats/masoud-ghanbarzadeh-${slug}.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
      }}
    >
      <span
        className={`absolute bottom-2 left-2 z-[1] hidden text-xs font-[600] opacity-80 md:inline ${slug === 'javascript' || slug === 'deploy' ? 'text-black' : 'text-white'}`}
      >
        {title}
      </span>
    </Link>
  );
}

export default PostCategoryCard;
