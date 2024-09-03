import 'server-only';

const dictionaries = {
  en: () => import('dictionaries/en.json').then((module) => module.default),
  fa: () => import('dictionaries/fa.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'en' | 'fa') => dictionaries[locale]();
