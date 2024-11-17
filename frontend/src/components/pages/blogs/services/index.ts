import axios from 'axios';

import { appConfig } from 'utils/configs';

import nextApi from 'utils/axiosConfig';

import type { BlogResponseT } from 'types/strapi-backend';

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
  return response.data as BlogResponseT;
}

export async function getBlogsFn(slug?: string) {
  const res = await nextApi.get('/blogs', {
    params: blogParamsGenerator(slug),
  });
  return res.data as BlogResponseT;
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
  const response = await backApi.get('/categories');
  return response.data as BlogResponseT;
}

export async function getCategoriesFn() {
  const res = await nextApi.get('/categories');
  return res.data as BlogResponseT;
}
