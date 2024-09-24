export type blogItem = {
  id: number;
  fa_title: string;
  en_title: string;
  fa_summery: string;
  en_summery: string;
  fa_content: string;
  en_content: string;
  slug: string;
  category: string;
  tags: string[];
  thumbnail: {
    url: string;
  };
  image: {
    url: string;
  };
};

export type blogListItem = Omit<blogItem, 'image' | 'en_content' | 'fa_content'>;

export type blogsListRes = {
  data: blogListItem[];
};
