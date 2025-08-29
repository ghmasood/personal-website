///////   * HIGH SCORE *   ///////
export type highScoreResT = {
  data: {
    score: 16;
    updatedAt: '2024-11-02T19:21:06.040Z';
  };
};

///////   * BLOGS *   ///////

type ImageFormatT = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null | string;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
};

type CoverImageT = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null | string;
  caption: null | string;
  width: number;
  height: number;
  formats: {
    small: ImageFormatT;
    medium: ImageFormatT;
    thumbnail: ImageFormatT;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null | string;
  provider: string;
  provider_metadata: null | any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type AdminUserT = {
  id: number;
  documentId: string;
  firstname: string;
  lastname: string;
  username: string;
  preferedLanguage: null | string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type CategoryT = {
  id: number;
  documentId: string;
  slug: string;
  title_fa: string;
  title_en: string;
  description_fa: string;
  description_en: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blogs?: { count: number };
};

export type BlogT = {
  id: number;
  documentId: string;
  title_fa: string;
  title_en: string;
  summery_fa: string;
  summery_en: string;
  content_fa: string;
  content_en: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  cover: CoverImageT;
  admin_user: AdminUserT;
  category: CategoryT;
  tags: any[];
  video_url?: string;
};

type PaginationT = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type BlogsResponseT = {
  data: BlogT[];
  meta: {
    pagination: PaginationT;
  };
};

export type CategoriesResponseT = {
  data: CategoryT[];
  meta: {
    pagination: PaginationT;
  };
};
