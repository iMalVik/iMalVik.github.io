export default {
  en: {
    name: 'English',
    load: () => import('./en.json'),
  },
  cs: {
    name: 'Česky',
    load: () => import('./cs.json'),
  },
};
