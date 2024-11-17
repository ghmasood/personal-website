import { NextRequest, NextResponse } from 'next/server';

import { backApi } from '../config';

export async function PUT(req: NextRequest) {
  const { score } = await req.json();
  try {
    const response = await backApi.put('/highscore', { data: { score: score } });
    return NextResponse.json(response.data, { status: response.status });
  } catch (error: any) {
    return NextResponse.json(error.response.data.error, { status: error.status });
  }
}
