import { NextRequest, NextResponse } from 'next/server';

import { backApi } from '../config';

export async function GET(req: NextRequest) {
  console.log('*\n     --> ' + req.url.split('/api')[1] + '\n' + '*');
  try {
    const response = await backApi.get(req.url.split('/api')[1]);
    return NextResponse.json(response.data, { status: response.status });
  } catch (error: any) {
    return NextResponse.json(error.response.data.error, { status: error.status });
  }
}
