import { NextResponse } from 'next/server';

import type { formDataType } from 'app/[lang]/contact-me/page';

import nextApi from 'utils/axiosConfig';

export async function contactMeFn(data: formDataType) {
  await nextApi.post('/contact-me', {
    data,
  });
  NextResponse.next();
}
