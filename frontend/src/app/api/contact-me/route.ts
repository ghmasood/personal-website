import { NextRequest, NextResponse } from 'next/server';

import { appConfig } from 'utils/configs';

export async function POST(req: NextRequest) {
  const a = req.body;
  //   try {
  //     const aa = await fetch(`${appConfig.main.backAPI}/contact-mes`, {
  //       method: 'POST',
  //       headers: {
  //         Authentication: `Bearer ${appConfig.main.backToken}`,
  //         Accept: '*/*',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ name: 'a', email: 'b', message: 'c' }),
  //     });
  //     console.log(aa.headers);
  //   } catch (error) {
  //     console.log(error);
  //     return new NextResponse(JSON.stringify({ message: 'something wrong' }), { status: 500 });
  //   }
}
