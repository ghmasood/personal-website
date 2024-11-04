import { NextRequest, NextResponse } from 'next/server';

import { backApi } from '../config';

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    const response = await backApi.post('/contact-mes', body);
    return NextResponse.json(response.data, { status: response.status });
  } catch (error: any) {
    return NextResponse.json(error.response.data.error, { status: error.status });
  }
}
