import { defaultNS, resources } from '../src/i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources['en'];
    returnNull: false;
  }
}
