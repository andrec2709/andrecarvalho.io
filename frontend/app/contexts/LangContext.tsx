import { createContext, lazy, useContext, useState } from "react";
import useTranslations from "~/application/language/useTranslations";
import { isLang, type Lang } from "~/domain/language/types";

type LangContextValue = {
    currentLang: string;
    changeLang: (newLang: Lang) => void;
    translations: any;
    isLoading: boolean;
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

    const { translations, isLoading } = useTranslations(currentLang);

    const changeLang = (newLang: Lang) => {
        setCurrentLang(newLang);
        localStorage.setItem('lang', newLang);
    };

    return (
        <LangContext.Provider value={{ currentLang, changeLang, translations, isLoading }}>
            {children}
        </LangContext.Provider>
    );
};