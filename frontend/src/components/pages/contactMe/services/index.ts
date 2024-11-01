import type { formDataType } from 'app/[lang]/contact-me/page';

import { appConfig } from 'utils/configs';

export async function contactMeFn(data: formDataType) {
  await fetch(`${appConfig.main.backAPI}/contact-mes`, {
    method: 'POST',
    headers: {
      Authentication: `Bearer ${appConfig.main.backToken}`,
      Accept: '*/*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: { name: 'a', email: 'a@a.a', message: 'c' } }),
  });
}
