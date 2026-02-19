import 'i18next';
import type { Translation } from './types';

declare module 'i18next' {
    interface CustomTypeOptions {
        resources: {
            translation: Translation;
        };
        defaultNS: 'translation';
    }
}