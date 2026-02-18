import { createContext, useContext } from "react";
import useLanguageState from "~/application/language/useLanguageState";
import { type Language } from "~/domain/language/types";
import { I18n } from 'i18n-js';
import _translations from "~/domain/language/translations";

type LangContextValue = {
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

    const [lang, setLang] = useLanguageState('lang');
    const i18n = new I18n(_translations);
    i18n.locale = lang;

    return (
        <LangContext.Provider value={{ lang, setLang, i18n }}>
            {children}
        </LangContext.Provider>
    );
};