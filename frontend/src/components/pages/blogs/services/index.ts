import axios from 'axios';

import { appConfig } from 'utils/configs';

import nextApi from 'utils/axiosConfig';

import type { BlogsResponseT, CategoriesResponseT } from 'types/strapi-backend';

/////  BLOGS  /////

function blogParamsGenerator(slug?: string) {
  return {
    populate: '*',
    ...(slug && {
      filters: {
        category: {
          slug: {
            $eq: slug,
          },
        },
      },
    }),
  };
}
export async function getBlogsServerFn(slug?: string) {
  const backApi = axios.create({
    baseURL: appConfig.main.backAPI,
    headers: {
      Authorization: `Bearer ${appConfig.main.backToken}`,
      Accept: '*/*',
      'Content-Type': 'application/json',
    },
  });
  const response = await backApi.get('/blogs', {
    params: blogParamsGenerator(slug),
  });
  return response.data as BlogsResponseT;
}

export async function getBlogsFn(slug?: string) {
  const res = await nextApi.get('/blogs', {
    params: blogParamsGenerator(slug),
  });
  return res.data as BlogsResponseT;
}

export async function getSingleBlogFn(slug: string) {
  const res = await nextApi.get('/blogs', {
    params: {
      populate: '*',
      filters: {
        slug: {
          $eq: slug,
        },
      },
    },
  });
  return res.data as BlogsResponseT;
}

/////  CATEGORIES  /////

export async function getCategoriesServerFn() {
  const backApi = axios.create({
    baseURL: appConfig.main.backAPI,
    headers: {
      Authorization: `Bearer ${appConfig.main.backToken}`,
      Accept: '*/*',
      'Content-Type': 'application/json',
    },
  });
  const response = await backApi.get('/categories', { params: { populate: { blogs: { count: true } }, sort: ['id'] } });
  return response.data as CategoriesResponseT;
}

export async function getCategoriesFn() {
  const res = await nextApi.get('/categories', {
    params: { populate: { blogs: { count: true } } },
  });
  return res.data as CategoriesResponseT;
}
