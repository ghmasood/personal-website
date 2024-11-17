import { NextResponse } from 'next/server';

import axios from 'axios';

import { appConfig } from 'utils/configs';

import nextApi from 'utils/axiosConfig';

import type { highScoreResT } from 'types/strapi-backend';

export async function getHighScoreFn(): Promise<highScoreResT> {
  const res = await nextApi.get('/highscore');
  return res.data as highScoreResT;
}

export async function getHighScoreServerFn() {
  const backApi = axios.create({
    baseURL: appConfig.main.backAPI,
    headers: {
      Authorization: `Bearer ${appConfig.main.backToken}`,
      Accept: '*/*',
      'Content-Type': 'application/json',
    },
  });
  const response = await backApi.get('/highscore');
  return response.data;
}

export async function updateHighScoreFn(score: number) {
  await nextApi.put('/update-score', { score });
  NextResponse.next();
}
