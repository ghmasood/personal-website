import type { DictT, LangsT } from 'locale/dictionaries';

export const sideBarGenerator = (lang: LangsT, menuLocale: DictT['aboutPage']['sideBar']) => {
  return [
    { path: `/${lang}/about-me/summery`, label: menuLocale[0].title, sub: menuLocale[0].sub },
    { path: `/${lang}/about-me/experience`, label: menuLocale[1].title, sub: menuLocale[1].sub },
    { path: `/${lang}/about-me/education`, label: menuLocale[2].title, sub: menuLocale[2].sub },
    { path: `/${lang}/about-me/certifications`, label: menuLocale[3].title, sub: menuLocale[3].sub },
    { path: `/${lang}/about-me/technical-skills`, label: menuLocale[4].title, sub: menuLocale[4].sub },
    { path: `/${lang}/about-me/languages`, label: menuLocale[5].title, sub: menuLocale[5].sub },
  ];
};
