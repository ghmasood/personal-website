import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const getPosts = await fetch('https://dummy-json.mock.beeceptor.com/posts');
    const data = (await getPosts.json()) as unknown;
    return new NextResponse(JSON.stringify(data), { status: getPosts.status });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: 'something wrong' }), { status: 500 });
  }
}
