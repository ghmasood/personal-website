import { NextRequest, NextResponse } from 'next/server';

import axios from 'axios';

import { appConfig } from 'utils/configs';

export async function POST(req: NextRequest) {
  const axiosInstance = axios.create({
    baseURL: appConfig.main.backAPI,
    headers: {
      Authorization: `Bearer ${appConfig.main.backToken}`,
      Accept: '*/*',
      'Content-Type': 'application/json',
    },
  });
  const body = await req.json();
  try {
    const response = await axiosInstance.post('/contact-mes', body);
    return NextResponse.json(response.data, { status: response.status });
  } catch (error: any) {
    return NextResponse.json(error.response.data.error, { status: error.status });
  }
}
