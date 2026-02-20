import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, ptBR } from './translations';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ['en', 'pt-BR'],
        detection: {
            lookupLocalStorage: 'lang',
        },
        resources: {
            en: {
                translation: en,
            },
            "pt-BR": {
                translation: ptBR,
            }
        },
        fallbackLng: "en",

        interpolation: {
            escapeValue: false,
        },
    });
