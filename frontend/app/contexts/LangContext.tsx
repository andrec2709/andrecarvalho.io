import { createContext, lazy, useContext, useState } from "react";
import useLanguageState from "~/application/language/useLanguageState";
import useTranslations from "~/application/language/useTranslations";
import { isLang, type Lang, type Language } from "~/domain/language/types";
import { I18n } from 'i18n-js';
import _translations from "~/domain/language/translations";

type LangContextValue = {
    currentLang: string;
    changeLang: (newLang: Lang) => void;
    translations: any;
    isLoading: boolean;
    i18n: I18n;
    lang: Language;
    setLang: (next: Language) => void;
};

export const LangContext = createContext<LangContextValue | null>(null);

export const useLang = () => {
    const ctx = useContext(LangContext);

    if (!ctx) {
        throw new Error('useLang must be used within a LangProvider');
    }

    return ctx;
};

type Props = {
    children: React.ReactNode;
};

export const LangProvider = ({ children }: Props) => {
    const lastLang = localStorage.getItem('lang') || 'en';

    const [currentLang, setCurrentLang] = useState(isLang(lastLang) ? lastLang : 'en');
    const [lang, setLang] = useLanguageState('lang');
    const i18n = new I18n(_translations);
    i18n.locale = lang;

    const { translations, isLoading } = useTranslations(currentLang);

    const changeLang = (newLang: Lang) => {
        setCurrentLang(newLang);
        localStorage.setItem('lang', newLang);
    };

    return (
        <LangContext.Provider value={{ currentLang, changeLang, translations, isLoading, lang, setLang, i18n }}>
            {children}
        </LangContext.Provider>
    );
};