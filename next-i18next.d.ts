import donorResources from './public/locales/en/common.json';

declare module 'next-i18next' {
  interface CustomTypeOptions {
    resources: typeof donorResources,
  }
}
