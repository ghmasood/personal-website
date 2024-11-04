export type highScoreResT = {
  data: {
    score: 16;
    updatedAt: '2024-11-02T19:21:06.040Z';
  };
};

/////////old////////////////
export type blogItem = {
  id: number;
  fa_title: string;
  en_title: string;
  fa_summery: string;
  en_summery: string;
  fa_content: string;
  en_content: string;
  updatedAt: string;
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
