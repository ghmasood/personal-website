import { LangsT } from 'locale/dictionaries';

import BlogSinglePage from 'components/pages/blogs/components/blogSinglePage';

type Params = Promise<{ lang: LangsT; blogSlug: string; category: string }>;

async function BlogSingle(props: { params: Params }) {
  const { blogSlug, category, lang } = await props.params;

  return <BlogSinglePage blogSlug={blogSlug} category={category} lang={lang} />;
}

export default BlogSingle;
