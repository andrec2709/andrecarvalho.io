import { useEffect, useState } from "react";
import fallbackLang from '~/domain/language/en.json';

const useTranslations = (lang: Lang) => {
    const [translations, setTranslations] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadTranslations = async () => {
            setIsLoading(true);

            try {
                const module = await import(`../../domain/language/${lang}.json`);

                setTranslations(module.default);
            } catch (error) {
                console.error(`Failed to load translations for language: ${lang}`, error);

                setTranslations(fallbackLang);
            } finally {
                setIsLoading(false);
            }
        };

        if (lang) {
            loadTranslations();
        }

    }, [lang]);

    return { translations, isLoading };
};

export default useTranslations;