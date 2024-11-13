import { DictT } from 'locale/dictionaries';

export const menuGenerator = (locale: DictT['layout']) => {
  return [
    // {
    //   title: locale.hello,
    //   path: '/hello',
    // },
    {
      title: locale.about,
      path: '/about-me/summery',
    },
    {
      title: locale.projects,
      path: '/my-projects',
    },
    {
      title: locale.blog,
      path: '/blogs',
    },
    {
      title: locale.contact,
      path: '/contact-me',
    },
  ];
};
