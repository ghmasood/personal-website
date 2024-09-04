import 'server-only';

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  fa: () => import('./fa.json').then((module) => module.default),
};

export const useGetDictionary = async (locale: 'en' | 'fa') => dictionaries[locale]();

export type DictT = Awaited<ReturnType<(typeof dictionaries)['en' | 'fa']>>;
