'use client';

import { createContext, useContext } from 'react';

import type { DictT } from 'locale/dictionaries';

const DictionaryContext = createContext<DictT | null>(null);

export default function DictionaryProvider({ dictionary, children }: { dictionary: DictT; children: React.ReactNode }) {
  return <DictionaryContext.Provider value={dictionary}>{children}</DictionaryContext.Provider>;
}

export function useGetDictionaryClient() {
  const dictionary = useContext(DictionaryContext);
  if (dictionary === null) {
    throw new Error('useDictionary hook must be used within DictionaryProvider');
  }

  return dictionary;
}
