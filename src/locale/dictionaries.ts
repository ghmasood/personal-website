import 'server-only';

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  fa: () => import('./fa.json').then((module) => module.default),
};

export type LangsT = keyof typeof dictionaries;

export const useGetDictionaryAsync = async (locale: LangsT) => dictionaries[locale]();

export type DictT = Awaited<ReturnType<(typeof dictionaries)[LangsT]>>;
