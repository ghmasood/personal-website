import axios, { AxiosInstance } from 'axios';

import { appConfig } from 'utils/configs';

export const backApi: AxiosInstance = axios.create({
  baseURL: appConfig.main.backAPI,
  headers: {
    Authorization: `Bearer ${appConfig.main.backToken}`,
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
});
